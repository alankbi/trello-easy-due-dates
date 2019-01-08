var t = window.TrelloPowerUp.iframe({
    appKey: '947bb1a338f0b8679fb6de16422d1b20',
    appName: 'Easy Due Dates'
});
t.render(function () {
    document.querySelector('.authorization-button').addEventListener('click', function () {
        t.getRestApi()
        .authorize({ scope:'read,write' })
        .then(function (t) {
            console.log('Success');
            document.querySelector('.authorization-button').style.display = 'none';
            document.querySelector('.instruction-text').style.display = 'none';
            document.querySelector('.success-text').style.display = 'block';
        })
        .catch(TrelloPowerUp.restApiError.AuthDeniedError, function () {
            console.log('Denied');
        });
    }, false);
});