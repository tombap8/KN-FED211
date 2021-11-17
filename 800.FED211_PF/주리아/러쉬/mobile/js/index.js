// JavaScript Document
//전역변수구역
var autocall, autocallT;//autocall- setInterval용 , autocallT - setTimeout용

$(document).ready(function(e) {
	
	$(".ui-loader").hide();
	$("#top_btn").click(function(){
		$("html,body").animate({scrollTop:0},400);
	});//jQb
	
	//모바일 페이지로 분기여부 검사
	var currW = $(window).width();//현재창 가로크기
	if(currW > 720)location.href="../web/index.html";
	$(window).resize(function(){//창사이즈변경시
		var currW = $(window).width();//현재창 가로크기
		if(currW > 720)location.href="../web/index.html";
	});
	
	
	
	//페이지 위치 이동
	$(".text01 a").click(function(){
		var idx = $(this).index();
		//alert(idx);
		$("html,body").animate({
			scrollTop:$(".page"+idx).offset().top+"px"
		},700);
	});	
	
	
	$("#menu").click(function(){
		$("#mnav").css("display","inline");
	});
	$("#close").click(function(){
		$("#mnav").css("display","none");
	});
	
	
	
	autocallFunc();// 자동호출함수 호출
	
	
	
	$("#bbut li").click(function(){	
		recalling();//재호출실행함수
		var idx=$(this).index();
		if($(this).css("opacity")=="1")return false;//선택한 것이 현재놈이면 돌아가라!
		//alert(idx);
		$("#bimg img").eq(idx).fadeIn(400).siblings("#bimg img").fadeOut(400);
		bnum = idx;//전역변수에 블릿번호 일치!!!
		$(this).css({"background":"url(images/mbut.png) no-repeat 0px 0px","opacity":"1"}).siblings().css({"background":"url(images/mbut.png) no-repeat -30px 0px","opacity":"0.9"});
	});
	
	
	/* NEW */	
		
	var snum=0;
	$("#c3_wrap").swipe({
		swipe:function(event, direction, distance, duration, fingerCount, fingerData){
			if(direction=="left"){
				lastSwipe++;
				if(lastSwipe==3)lastSwipe=0;
				$("#c3_wrap .c3_con").eq(lastSwipe).show().siblings(".c3_con").hide();
				$("#c3_but li").eq(lastSwipe).css("background","url(images/mbut2.png) no-repeat 0px 0px").siblings().css("background","url(images/mbut2.png) no-repeat -30px 0px");
			}
			else if(direction=="right"){
				lastSwipe--;
				if(lastSwipe==-1)lastSwipe=2;
				$("#c3_wrap .c3_con").eq(lastSwipe).show().siblings(".c3_con").hide();
				$("#c3_but li").eq(lastSwipe).css("background","url(images/mbut2.png) no-repeat 0px 0px").siblings().css("background","url(images/mbut2.png) no-repeat -30px 0px");
			}
    	}
  	});
	
	var lastSwipe=0;
	$("#c3_but li").click(function(){
		var idx=$(this).index();
		lastSwipe=idx;
		//alert(idx);
		$("#c3_wrap .c3_con").eq(idx).show().siblings(".c3_con").hide();
		$(this).css("background","url(images/mbut2.png) no-repeat 0px 0px").siblings().css("background","url(images/mbut2.png) no-repeat -30px 0px");
	});
	
	
	
	/*var snum=0;
	$("#c4_wrap").swipe({
    	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		if(direction=="left"){
			snum++;
			if(snum==8)snum=7;
			$(this).animate({left:(-100*snum)+"%"},400);
		}
		else if(direction=="right"){
			snum--;
			if(snum==-1)snum=0;
			$(this).animate({left:(-100*snum)+"%"},400);
		}
    }
  });*/
  
	
	/* PRODUCT */
	
	
	var snum2=0;
	$("#c4_wrap").swipe({
		swipe:function(event, direction, distance, duration, fingerCount, fingerData){
			if(direction=="left"){
				lastSwipe2++;
				if(lastSwipe2==5)lastSwipe2=0;
				$("#c4_wrap .c4_one").eq(lastSwipe2).show().siblings(".c4_one").hide();
				$("#c4_but li").eq(lastSwipe2).css("background","url(images/mbut2.png) no-repeat 0px 0px").siblings().css("background","url(images/mbut2.png) no-repeat -30px 0px");
			}
			else if(direction=="right"){
				lastSwipe2--;
				if(lastSwipe2==-1)lastSwipe2=4;
				$("#c4_wrap .c4_one").eq(lastSwipe2).show().siblings(".c4_one").hide();
				$("#c4_but li").eq(lastSwipe2).css("background","url(images/mbut2.png) no-repeat 0px 0px").siblings().css("background","url(images/mbut2.png) no-repeat -30px 0px");
			}
    	}
  	});
	
	var lastSwipe2=0;
	$("#c4_but li").click(function(){
		var idx=$(this).index();
		lastSwipe2=idx;
		//alert(idx);
		$("#c4_wrap .c4_one").eq(idx).show().siblings(".c4_one").hide();
		$(this).css("background","url(images/mbut2.png) no-repeat 0px 0px").siblings().css("background","url(images/mbut2.png) no-repeat -30px 0px");
	});
	
	
	/* COLLECTION */
  
  var snum3=0;
	$("#cont5_con").swipe({
		swipe:function(event, direction, distance, duration, fingerCount, fingerData){
			if(direction=="left"){
				lastSwipe3++;
				if(lastSwipe3==3)lastSwipe3=0;
				$("#cont5_con .c5_wrap").eq(lastSwipe3).show().siblings(".c5_wrap").hide();
				$("#c5_but li").eq(lastSwipe3).css("background","url(images/mbut.png) no-repeat 0px 0px").siblings().css("background","url(images/mbut.png) no-repeat -30px 0px");
			}
			else if(direction=="right"){
				lastSwipe3--;
				if(lastSwipe3==-1)lastSwipe3=2;
				$("#cont5_con .c5_wrap").eq(lastSwipe3).show().siblings(".c5_wrap").hide();
				$("#c5_but li").eq(lastSwipe3).css("background","url(images/mbut.png) no-repeat 0px 0px").siblings().css("background","url(images/mbut.png) no-repeat -30px 0px");
			}
    	}
  	});
	
	var lastSwipe3=0;
	$("#c5_but li").click(function(){
		var idx=$(this).index();
		lastSwipe3=idx;
		//alert(idx);
		$("#cont5_con .c5_wrap").eq(idx).show().siblings(".c5_wrap").hide();
		$(this).css("background","url(images/mbut.png) no-repeat 0px 0px").siblings().css("background","url(images/mbut.png) no-repeat -30px 0px");
	});
	
	
});//jQb
var bnum=0;
function autoSlide(dir){ //dir방향(0오른쪽, 1왼쪽)
	$("#bimg img:visible").fadeOut(400);
	/*bnum++;
	if(bnum==5)bnum=0;*/
	if(dir==0)
	{
		bnum++;//1씩증가
		if(bnum==5)bnum=0;
	}
	
	else if(dir==1){
		bnum--;//1씩감소
		if(bnum==-1)bnum=4;
	}	
	
	$("#bimg img").eq(bnum).fadeIn(400);
	
	
	//블릿메뉴
	$("#bbut li").css("background","url(images/mbut.png) no-repeat -30px 0px");
	$("#bbut li").eq(bnum).css("background","url(images/mbut.png) no-repeat 0px 0px");
}



/**************************************** 자동실행 호출 함수 ****************************************/
function autocallFunc(){
	autocall = setInterval("autoSlide(0)",4000);
}


/**************************************** 자동호출 지우고 일정시간뒤 재실행 함수 ****************************************/
function recalling(){
	clearInterval(autocall);//자동호출지우기
	clearTimeout(autocallT);//자동호출지우기
	
	//9초뒤 다시 자동호출실행
	autocallT = setTimeout(function(){
		autocallFunc();// 자동호출함수 호출
	},4000);
}







