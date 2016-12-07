$(function(){
	/*首页*/
	/*头部导航*/
	$(".nav ul li a").click(function(){
		$(this).addClass("click").parent().siblings().children().removeClass("click");
	})
	
	/*banner*/
	$(".banner ul").append($(".banner ul li").eq(0).clone());
	var t;
	var index = 0;
	function move(){
		t=setInterval(function(){
			index++;
			if(index==6){
				index=1;
				$(".banner ul").css("margin-left",0);
			}
			$(".banner ul").animate({"marginLeft":-1920*index},1000);
			if(index==5){
				$(".banner .dot span").eq(0).addClass("span").siblings().removeClass("span");
			}else{
				$(".banner .dot span").eq(index).addClass("span").siblings().removeClass("span");
			}		
		},2000)
	}
	move();
	$(".banner").mouseover(function(){
		clearInterval(t);
	}).mouseout(function(){
		move();
	})
	$(".banner .dot span").click(function(){
		index=$(this).index();
		$(this).addClass("span").siblings().removeClass("span");
		$(".banner ul").css("margin-left",-1920*index);
	})
	
	/*新品上市*/

	/*新闻动态*/
	$(".news .new-left a").mouseenter(function(){
		$(this).addClass("click").siblings().removeClass("click");
	})
	
	
})
