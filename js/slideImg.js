/*轮播图切换*/
$(function () {

	var Banner = $(".pic-content").eq(0);
	var BannerTriger = $('.triger');
	var BannerTitle = $('.title').eq(0);
	slideChange(Banner,BannerTriger,BannerTitle,2000);

	var recommend = $(".side-content");
	var recommendTriger = $(".trig");
	var recommendTitle = $(".title").eq(1);
	slideChange(recommend,recommendTriger,recommendTitle,2000);
	/*轮播图切换函数封装*/
	function slideChange(Obj,Objtriger,ObjTitle,interval){
		var index = 0;
		var ObjLi = Obj.children('li');
		var last = ObjLi.last().clone();
		var first = ObjLi.first().clone();
		var clock = null;
		var imgLen = ObjLi.length;
		var imgWidth = ObjLi.width();
		var titleA = ObjTitle.children('a');
		Obj.append(first);
		Obj.prepend(last);
		/*添加导航小圆点*/
		for(var i=0;i<imgLen;i++){
			Objtriger.append("<span></span>");
		}
		var trigerSpan = Objtriger.children('span');
		trigerSpan.eq(0).addClass('active');
		Obj.css({width:(imgLen+2)*100+'%',left:-imgWidth});
		/*自动轮播*/
	    //当鼠标在图片上停留时，停止自动轮播
	    $(".carousel").on("mouseenter",function(){
	        clearInterval(clock)
	    })
	    // //当鼠标离开时，开始自动轮播
	    $(".carousel").on("mouseleave",function(){
	        timeClock()
	    })
	    timeClock();
	    function autoPlay(len){
	      Obj.animate({
	        left: '-='+len*imgWidth},function(){
	        index+=len;
	        if (index === imgLen) {
	          index = 0;
	          Obj.css({left: -imgWidth})
	        }
	        setBullet();
	        setTitle();
	      })
	    }

	    trigerSpan.on('click',function(){
	      var currentIndex = $(this).index();
	      autoPlay(currentIndex-index);
	    })

	    function setBullet(){
	       trigerSpan.removeClass('active').eq(index).addClass('active')
	    }
	    function setTitle(){
	    	titleA.removeClass('onTitle').eq(index).addClass('onTitle')
	    }
	    //自动轮播，每个一秒滚动一次
	    function timeClock(){
	      clock = setInterval(function(){
	         autoPlay(1)
	       },interval)
	    }
	}
})
