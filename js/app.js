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
		$("#previewContainer").slideUp("slow", function(){
			$("#" + e.target.id + "Details").slideDown("slow");
			
			$("#" + e.target.id + "Details").on("click", function(){
				$("#" + e.target.id + "Details").slideUp("slow", function(){
					$("#previewContainer").slideDown();
				});
			});
		});
	});
});