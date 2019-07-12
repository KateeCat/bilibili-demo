$(function (){
	$(".sideBar-item").click(function (){
		$(this).addClass("current").siblings().removeClass("current");
		var index = $(this).index()+1;
		var offset = $(".headLine").eq(index).offset().top;
		$("html,body").animate({scrollTop: offset},1000);
	});
	$(window).scroll(function (){
		var $winOffset = $(window).scrollTop();
		var $winHeight = $(window).height();
		$(".headLine").each(function (index,ele){
			var floorOffset = $(ele).offset().top;
			var floorHeight = $(ele).height();
			// console.log($winHeight-floorOffset);
			if($winOffset-floorOffset >= floorHeight/2){
				$(".sideBar-item").eq(index).addClass("current").siblings().removeClass("current");
			}
		});
		var height = $('.headLine').eq(0).offset().top;
		if(height>$winOffset){
			$(".sideBar").css("top","50%");
		}else {
			$(".sideBar").css("top","10%");
		}
	});
	$('.sideBar-goUp').click(function(){
		$("html,body").animate({scrollTop: 0},1000);
	})
	console.log("hello!This is written By Katee Ljy");
})
