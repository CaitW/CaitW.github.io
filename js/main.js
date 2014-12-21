$(document).ready(function () {

	$(".internalLink").click(function (e) {

		var pageToOpen = $(this).attr("name");
		$(".page.open").removeClass("open");
		$(".page[name=" + pageToOpen + "]").addClass("open");

		$("#contents").css({
			"top": "5%",
			"bottom": "5%"
		});

	});

	$(".title .fa").click(function() {
		$(".page.open").removeClass("open");
		$("#contents").removeAttr("style");
		$(".page[name=home]").addClass("open");

	});

});