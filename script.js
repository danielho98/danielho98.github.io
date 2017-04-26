$(document).ready(function(){

	$("#body-container1").click(function() {
		$("#box-container1").show();
		$("body").css("overflow", "hidden");
	});

	$("#body-container1").hover(function() {
		$("#overlay1").fadeOut();
	}, function() {
		$("#overlay1").fadeIn();
	});

	$("#cancel").click(function() {
		$("#box-container1").hide();
		$("body").css("overflow", "auto");
	});

	$("#box-overlay1").click(function() {
		$("#box-container1").hide();
		$("body").css("overflow", "auto");
	});
	$("#body-container2").click(function() {
		$("#box-container2").show();
		$("body").css("overflow", "hidden");
	});

	$("#body-container2").hover(function() {
		$("#overlay2").fadeOut();
	}, function() {
		$("#overlay2").fadeIn();
	});

	$("#box-text2 #cancel").click(function() {
		$("#box-container2").hide();
		$("body").css("overflow", "auto");
	});

	$("#box-overlay2").click(function() {
		$("#box-container2").hide();
		$("body").css("overflow", "auto");
	});
	$("#body-container3").click(function() {
		$("#box-container3").show();
		$("body").css("overflow", "hidden");
	});

	$("#body-container3").hover(function() {
		$("#overlay3").fadeOut();
	}, function() {
		$("#overlay3").fadeIn();
	});

	$("#box-text3 #cancel").click(function() {
		$("#box-container3").hide();
		$("body").css("overflow", "auto");
	});

	$("#box-overlay3").click(function() {
		$("#box-container3").hide();
		$("body").css("overflow", "auto");
	});
	$("#body-container4").click(function() {
		$("#box-container4").show();
		$("body").css("overflow", "hidden");
	});

	$("#box-text4 #cancel").click(function() {
		$("#box-container4").hide();
		$("body").css("overflow", "auto");
	});

	$("#body-container4").hover(function() {
		$("#overlay4").fadeOut();
	}, function() {
		$("#overlay4").fadeIn();
	});

	$("#box-overlay4").click(function() {
		$("#box-container4").hide();
		$("body").css("overflow", "auto");
	});
	$("#body-container5").click(function() {
		$("#box-container5").show();
		$("body").css("overflow", "hidden");
	});

	$("#box-text5 #cancel").click(function() {
		$("#box-container5").hide();
		$("body").css("overflow", "auto");
	});

	$("#box-overlay5").click(function() {
		$("#box-container5").hide();
		$("body").css("overflow", "auto");
	});

	$("#body-container5").hover(function() {
		$("#overlay5").fadeOut();
	}, function() {
		$("#overlay5").fadeIn();
	});
});