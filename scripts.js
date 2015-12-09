$(document).ready(function() {
	$("a[href^='#']").on("click", function(e){
		var target = $($(this).attr("href"));
		if(target.length){
			e.preventDefault();
			$("html, body").animate({
				scrollTop: target.offset().top
			}, 700);
		}
	});
	
	$(".previewPic").on("click", function(){
		$("#previewSection").height($("#previewSection").height());
		$("#previewContainer").slideUp("slow", function(){
			$(".content").fadeIn();
		});
	});
	
	$(".content").on("click", function(){
		$(".content").fadeOut("slow", function(){
			$("#previewContainer").slideDown();
		});
	});
});