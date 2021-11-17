// JavaScript Document
///////////////////// 모바일/DT 페이지 자동넘기기//////////////////////////
var winW = $(window).width();//현재 브라우저 가로폭(숫자로된 px단위)
if(winW <= 1100){
	location.href = "mob/main.html";//DT index페이지로 감
}
$(window).resize(function(){//창크기를 변경할 경우 다시 체크~!
	var winW = $(window).width();//현재 브라우저 가로폭(숫자로된 px단위)
	if(winW <= 1100){
		location.href = "mob/main.html";//DT index페이지로 감
	}
});
///////////////////// 모바일/DT 페이지 자동넘기기 끝//////////////////////////



var autocall;
var autocallT;

$(document).ready(function(){
	
	autocall=setInterval("goSlide()",3000);
	
	$("#bbtn img").click(function(){
		var idx=$(this).index();
		bseq=idx;
		
		$("#bbtn img").eq(idx).attr("src","images/bbtn1.png").siblings().attr("src","images/bbtn2.png");
		$("#sliderM>li:visible").css("opacity","0");
		$("#sliderM>li").eq(idx).css("opacity","1");
	});
	
	$("#new>ul:nth-child(2)>li:first-child").css("cursor","pointer").click(function(){
			window.location.href = "subcont1.html";
		});//click
	
	$("#new>ul>li").hover(
			function(){//over
				$(this).find(".span").animate({bottom:"0%"},500);
			},
			function(){//out
				$(this).find(".span").animate({bottom:"-100%"},500);
			});////////포토박스 마우스오버/아웃////////////
	
	$("#new>ul:last-child>li:last-child").css("cursor","pointer").click(function(){
		window.location.href = "index.html";
	});
});

/* 함수명 : goSlide
	기능 : 배너이미지 넘어가기 */
var bseq=0;
function goSlide(){
	$("#sliderM>li").eq(bseq).css("opacity","0");
	
	bseq++;
	if(bseq==4)bseq=0;
	
	$("#bbtn img").eq(bseq).attr("src","images/bbtn1.png").siblings().attr("src","images/bbtn2.png");
	$("#sliderM>li").eq(bseq).css("opacity","1");
}


//////////////////////////////////////////////////////////////////////////////////////////////////////



