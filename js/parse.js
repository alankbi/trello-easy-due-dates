var t = window.TrelloPowerUp.iframe({
    appKey: '947bb1a338f0b8679fb6de16422d1b20',
    appName: 'Easy Due Dates'
});

function parseJSON(json) {
    console.log('here!');

    t.getRestApi().getToken().then(function (token) {
        if (token) {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener('readystatechange', function () {
                if (this.readyState === this.DONE) {
                    console.log(this.responseText);
                }
            });
            
            xhr.open('POST', 'https://api.trello.com/1/lists?name=Test&idBoard=5babee20f307d35d30ed628a&key=947bb1a338f0b8679fb6de16422d1b20&token=' + token);
            xhr.send();
        }
    });
    //console.log(JSON.stringify(json));
}