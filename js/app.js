var app = angular.module("PortfolioApp", []);

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
	
	$(".previewImg").on("click", function(e){
		var content = "#" + e.target.id + "Content";
	
		$("#previewContainer").slideUp("slow", function(){
			$(content).slideDown("slow");
			
			$(content + ", .work").on("click", function(){
				$(content).slideUp("slow", function(){
					$("#previewContainer").slideDown();
				});
			});
		});
	});
});