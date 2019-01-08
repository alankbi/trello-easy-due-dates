var apiKey = '947bb1a338f0b8679fb6de16422d1b20';
var AUTH_OPTS = {
    title: 'Authorize Easy Due Dates',
    url: './authorize.html',
    height: 200, 
    fullscreen: false,
    accentColor: '#0079BF'
};

function shiftDateBack(date) {
    var newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
}

function onShiftBack(t) {
    t.card('id', 'due').then(function (value) {
        var newDate = shiftDateBack(value.due);

        t.getRestApi().getToken().then(function(token) {
            setNewDate(token, value.id, newDate);
        });

        return Promise.resolve(newDate);
    });
}

function setNewDate(token, id, date) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    
    xhr.open('PUT', 'https://api.trello.com/1/cards/' + id + '/due/?value=' + date.toISOString() +
        '&key=' + apiKey + '&token=' + token);
    xhr.send();
}

TrelloPowerUp.initialize({
    'authorization-status': function (t) {
        return t.getRestApi().isAuthorized().then(function (isAuthorized) {
            return { authorized: isAuthorized };
        });
    },
    'card-buttons': function (t) {
        return t.getRestApi().isAuthorized().then(function (authorized) {
            if (authorized) { 
                return [{
                    text: 'Shift Deadline Back',
                    callback: onShiftBack
                }];
            } else {
                return [{
                    text: 'Authorize Power-Up',
                    callback: function (t) { return t.modal(AUTH_OPTS); }
                }];
            }
        });
    },
    'on-enable': function (t) {
        return t.modal(AUTH_OPTS);
    },
    'show-authorization': function (t) {
        return t.modal(AUTH_OPTS);
    }
}, 
{
    appKey: apiKey,
    appName: 'Easy Due Dates'
});