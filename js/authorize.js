var apiKey = '947bb1a338f0b8679fb6de16422d1b20';
var t = window.TrelloPowerUp.iframe({
    appKey: apiKey,
    appName: 'Easy Due Dates'
});

t.render(function () {
    document.querySelector('.authorization-button').addEventListener('click', function () {
        t.getRestApi()
        .authorize({ scope:'read,write' })
        .then(function (value) {
            console.log('Success');
            document.querySelector('.authorization-button').style.display = 'none';
            document.querySelector('.instruction-text').style.display = 'none';
            document.querySelector('.success-text').style.display = 'block';

            t.getRestApi().getToken().then(function (token) {
                createWebhook(token);
            });
        })
        .catch(TrelloPowerUp.restApiError.AuthDeniedError, function () {
            console.log('Denied');
        });
    }, false);
});

function createWebhook(token) {
    t.board('id').then(function (value) {
        var webhookData = {
            description: 'Webhook to track when a new card is created',
            callbackURL: 'https://trello-easy-due-dates.000webhostapp.com/webhook.php',
            idModel: value.id
        };
    
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.trello.com/1/tokens/' + token + '/webhooks/?key=' + apiKey);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(webhookData));
    });
}