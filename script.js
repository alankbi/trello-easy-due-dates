function onShiftForward(t) {
    return t.card('due').then(function (value) {
        var newDate = new Date(value.setDate(value.getDate() - 1));
        return Promise.resolve(newDate);
    });
}

function onShiftBack(t) {

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