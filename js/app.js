var app = angular.module("PortfolioApp", []);

$(document).ready(function() {
	if(!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)){
		$("[data-toggle='tooltip']").tooltip();
	}

	$("a[href^='#']").on("click", function(e){
		var target = $($(this).attr("href"));
		if(target.length){
			e.preventDefault();
			$("html, body").animate({
				scrollTop: target.offset().top
			}, 700);
		}
	});
	
	$(".previewImg").on("click", function(e){
		var content = "#" + $(e.target).parent().attr("id") + "Content";
	
		$("#previewContainer").slideUp("slow", function(){
			$(content).slideDown("slow");
			
			$("html, body").animate({
				scrollTop: $("#work").offset().top
			}, 700);
			
			$(".work, .returnLink").on("click", function hideProject(){
				$(content).slideUp("slow", function(){
					$("#previewContainer").slideDown();
				
					$("html, body").animate({
						scrollTop: $("#work").offset().top
					}, 700);
				});
				$(".work, .returnLink").off("click", hideProject);
			});
		});
	});
	
	$("html, body").on("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
		$('html, body').stop();
	});
});