<?php

echo '<script type="text/javascript">',
    'var xhr = new XMLHttpRequest();',
    //'xhr.addEventListener("readystatechange", function () { if (this.readyState === this.DONE) { window.location.href="https://trello-easy-due-dates.000webhostapp.com/test.php?test=" + "message" + this.responseText; } });',
    "xhr.open('POST', 'https://api.trello.com/1/lists?name=Test&idBoard=5babee20f307d35d30ed628a&key=947bb1a338f0b8679fb6de16422d1b20&token=490775b24704143b6d79003443f5ad3cc80e145af0141bb27bc7214c19917517');",
    'xhr.send();',
    '</script>';
?>

<script src="https://p.trellocdn.com/power-up.min.js"></script>
<script src="/js/parse.js"></script>
<script type="text/javascript">
    // var xhr = new XMLHttpRequest();
    
    // xhr.open('POST', 'https://api.trello.com/1/lists?name=Test&idBoard=5babee20f307d35d30ed628a&key=947bb1a338f0b8679fb6de16422d1b20&token=490775b24704143b6d79003443f5ad3cc80e145af0141bb27bc7214c19917517');
    // xhr.send();
    //var jsonString = <?php echo file_get_contents('php://input'); ?>;
    //parseJSON(JSON.parse(jsonString));
</script>