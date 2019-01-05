function authorizePowerUp(t) {
    return t.popup({
      title: 'Authorize Easy Due Dates',
      url: './authorize.html'
    });
  }

function formatDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return year + '-' + month + '-' + day;
}

function shiftDateBack(date) {
    var newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
}

function onShiftBack(t) {
    t.card('id', 'due').then(function (value) {
        var newDate = shiftDateBack(value.due);

        t.getRestApi().getToken().then(function(token) {
            setNewDate(token, value.id, new Date('1/15/2019'));
        });

        //setNewDate(t, newDate);
        return Promise.resolve(newDate);
    });
}

function setNewDate(token, id, date) {
    //t.set('card', 'shared', 'due', formatDate(date));
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    
    xhr.open('PUT', 'https://api.trello.com/1/cards/' + id + '/due/?value=' + formatDate(date) +
        '?key=947bb1a338f0b8679fb6de16422d1b20' + '?token=' + token);
    xhr.send();
}

TrelloPowerUp.initialize({
    'card-buttons': function(t) {
        return t.getRestApi()
        .isAuthorized()
        .then(function (isAuthorized) {
            if (isAuthorized) {
                return [{
                    text: 'Shift Deadline Back',
                    callback: onShiftBack
                }];
            } else {
                return [{
                    text: 'Authorize',
                    callback: authorizePowerUp
                }];
            }
        });
    },
}, 
{
    appKey: '947bb1a338f0b8679fb6de16422d1b20',
    appName: 'Easy Due Dates'
});