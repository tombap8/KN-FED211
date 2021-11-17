/*전역변수*/
var mob = 0;////모바일여부(0-아님, 1-모바일)
/////////////모바일인지 여부 조사//////
$(window).resize(function(){
	if($(window).width() <= 1100) { mob=1; }
	else{ mob=0; }
});

///////////스크롤시 사이트메뉴 따라오기///////////
$(window).scroll(function(){
	var sT = $(window).scrollTop();//현재 스크롤 top값
	var limit = $("#sBan").offset().top+320;
	//console.log(sT);
	if(sT<=80){
		$(".fmenu").stop().animate({top:"0px"},400,"easeInOutQuad");
	}
	else if(sT>100 && sT<limit){
		$(".fmenu").stop().animate({top:sT+"px"},400,"easeInOutQuad");
	}
	else if(sT>limit){
		$(".fmenu").css("top",limit+"px");
	}
	
});


$(document).ready(function(){
	"use strict";//보다 엄격한 코드 검사를 위한 구문
	//////모바일 여부 조사///////
	if($(window).width() <= 1100) { mob=1; }
	else{ mob=0; }
	/////////////////////////////////

//////////위로가기 버튼 클릭시////////
$("#anchor a").click(function(e){
	e.preventDefault();
	$("html,body").animate({scrollTop:"0px"},400,"easeInOutQuad");
});//////top click/////
	
//////////// 햄버거 버튼 클릭시 애니메이션 ///////////
	var hamsts = 0; //햄버거 버튼 상태값(0-닫힘, 1-열림)
	$("#ham").click(function(){
		if(hamsts==0){
			///////햄버거 버튼 액션//////
			$("#ham div").eq(0).css({"top":"10px","transform":"rotate(45deg)"});
			$("#ham div").eq(1).css({"width":"0","left":"20px"});
			$("#ham div").eq(2).css({"top":"10px","transform":"rotate(-45deg)"});//////////// 햄버거 버튼 액션////////////////
			///////// 메뉴 변경 애니메이션/////
			$("#menu").animate({width:"100%"},800,function(){
				hamsts=1;//상태값 변경
			});
		}////////if문//////////
		else if(hamsts==1){
			///////햄버거 버튼 액션//////
			$("#ham div").eq(0).css({"top":"0px","transform":"rotate(0deg)"});
			$("#ham div").eq(1).css({"width":"40px","left":"0px"});
			$("#ham div").eq(2).css({"top":"20px","transform":"rotate(0deg)"});//////////// 햄버거 버튼 액션////////////////
			///////// 메뉴 변경 애니메이션/////
			$("#menu").animate({width:"0%"},800,function(){
				hamsts=0;//상태값 변경
			});
		}//////else if문////////
		
	});//////////////햄버거 클릭시//////////////////
	
});///////////////////////////////////////////////////////////// jQB
