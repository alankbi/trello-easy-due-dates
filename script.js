function formatDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return year + '-' + month + '-' + day;
}

function onShiftForward(t) {
    return t.card('id', 'due').then(function (value) {
        var newDate = new Date(value.due.setDate(value.due.getDate() - 1));
        setNewDate(value.id, newDate);
        return Promise.resolve(newDate);
    });
}

function onShiftBack(t) {

}

function setNewDate(id, date) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    
    xhr.open('PUT', 'https://api.trello.com/1/cards/' + id + '/due/?value=' + formatDate(date));
    xhr.send();
}

TrelloPowerUp.initialize({
    'card-buttons': function(t, options){
        return [{
            text: 'Shift Deadline Forward',
            callback: onShiftForward(t),
        }, 
        {
            text: 'Shift Deadline Back',
            callback: onShiftBack(t),
        }];
    },
});