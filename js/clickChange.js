/*
1.点击biliItem,on样式跟随点击标题切换
2.点击时，下面的内容跟着滑动
*/

$(function (){
	/*点击直播item切换*/

		var biliItem = $('.bili-tap').eq(0).children('.bili-item');
		var rankContent = $('.rank-content').eq(0);
		var rankBox = $('.rank-box').eq(0);
		clickChange(biliItem,rankContent,rankBox);

		function clickChange(obj,objContent,objBox){
			obj.click(function () {
			$(this).addClass('on').siblings().removeClass('on');
			var index = $(this).index();
			// var width = $('.rank-content').width();
			var width = objContent.width();
			var slideWidth = -width*index;
			// $('.rank-box').css('margin-left',slideWidth+'px');
			// $('.rank-box').animate({'margin-left':-width*index+'px'},'fast');
			objBox.animate({'margin-left':-width*index+'px'},'fast');
			});
		}
	/*点击排行切换*/
		var biliItem2 = $('.bili-tap').eq(2).children('.bili-item');
		var rankContent2 = $('.rank-content').eq(1);
		var rankBox2 = $('.rank-box').eq(1);
		mouseover(biliItem2,rankContent2,rankBox2);
		function mouseover(obj,objContent,objBox){
			obj.mouseover(function () {
			$(this).addClass('on').siblings().removeClass('on');
			var index = $(this).index();
			var width = objContent.width();
			var slideWidth = -width*index;;
			objBox.animate({'margin-left':-width*index+'px'},'fast');
			});
		}

	/*滚动条*/

    $(".fanju-box").niceScroll({
    	cursorcolor:"#e5e9ef",
    	autohidemode: false
    	 // background: "#b8c0cc"
    });

    /*关闭notice*/

    $("#close-notice").click(function (){
    	$(".bili-notice").css("display","none");
    })

})



