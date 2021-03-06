var scrollTrack = new ScrollTracker();

$(function(){
	$("#home > header").height($(window).height() - $("#home > nav").outerHeight(true) - parseFloat($("#home > header").css("padding-top")));
	
	$(".company").click(function(){
		var url;
		if($(this).data("url") != undefined){
			url = $(this).data("url");
		}else{
			url = "http://" + $(this).attr('src').split("/").pop().split(".")[0] + ".nl";
		}
		window.open(url);
	});
	
	$("form").submit(function(){
		var formdata = {
			naam: $(this).find("[name=naam]").val(),
			email: $(this).find("[name=email]").val(),
			vraag: $(this).find("[name=vraag]").val()
		};
		
		$.ajax({
			type: "POST",
			url: "/services/contact_email.php",
			data: formdata,
			success: function(){
				$("form").find("input").val("");
				$("form").find("textarea").val("Je vraag is ingestuurd");
				
				var ga_data = {
					page: "/contact-thanks/",
					title: "Contact ingezonden"
				};
				
				ga('send', 'pageview', ga_data);
			}
		});
		
		return false;
	});
	
	$("form img").click(function(){
		$("form").submit();
	});
	
	scrollTrack.init(window);
	
	$(window).scroll(function(){
		scrollTrack.scroll(function(old, current){
			var ga_data = {
				page: $("#" + current + "").data('scroll-url'),
				title: $("#" + current + "").data('scroll-title')
			};
			
			ga('send', 'pageview', ga_data);
		});
	});
});