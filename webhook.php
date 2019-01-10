<?php
?>

<script src="https://p.trellocdn.com/power-up.min.js"></script>
<script src="/js/parse.js"></script>
<script type="text/javascript">
    var jsonString = <?php echo file_get_contents('php://input'); ?>;
    parseJSON(JSON.parse(jsonString));
</script>