// JavaScript Document
var bsts = 0; // 배너작동중 상태값(0-미작동, 1-작동중)
var autocall,autocallT;

$(document).ready(function(){
	
	///////////배너 자동호출////////////////
	"use strict";
	$("#hBox>ul>li:first").css("background","url(imges/hot1.jpg) no-repeat");/*첫번째 배너이미지 셋팅*/
	autoFunc();
	
	$("#hblit>div img").click(function(){
		$(this).attr("src","imges/IconsAndLogo/secblit_on.png")
	.siblings().attr("src","imges/IconsAndLogo/secblit_off.png");
	});
	
	////////    TOP버튼클릭시 위로 이동 /////////////

$("#topnav").click(function(e){
	e.preventDefault();
	$("html,body").animate({scrollTop:0},800);
});
////////////////////////////////////////////////	
	
});//jQB

/*
	함수명: goSlide
	기능 : 메인 배너 이미지 슬라이드 하기
*/
var bnum = 1;//배너 이미지 순번
function goSlide(sts){///sts-자동호출인지 여부(0=자동,1=클릭)
	"use strict";
	//함수 잠금장치
	if(bsts===1) {return false;}//돌아갓!
	bsts=1;//상태값 변경
	
	// 배너순번 증가
	bnum++;
	if(bnum===4){bnum=1;}//한계수
		
	// 배너 ul의 자식으로 li를 뒤에 추가함
	$("#hBox>ul").append("<li></li>").find("li").last()
	.css("background","url(imges/hot"+bnum+".jpg) no-repeat");
	//배너 슬라이드 이동 및 첫번째 li 지우기
	$("#hBox>ul").animate({left:"-100%"},2000,"easeOutQuint",
	function(){
		$(this).find("li").first().remove();//첫번째 li제거
		$(this).css("left","0");//위치값 초기화
		bsts=0;//잠금상태풀기
	});
	
	$("#hblit>div img").eq(bnum-1).attr("src","imges/IconsAndLogo/secblit_on.png")
	.siblings().attr("src","imges/IconsAndLogo/secblit_off.png");
	
	//// 버튼 클릭시 일정시간 후 자동실행하기////
	if(sts==1){
		clearInterval(autocall);
		clearTimeout(autocallT);
		autocallT = setTimeout("autoFunc()",5000);
	}
	
}////////////////////////////////goSlide함수

/*
	함수명: autoFunc
	기능 : 배너 자동실행 함수
*/
function autoFunc(){
	autocall=setInterval("goSlide(0)", 3000);
}///////autoFunc함수 