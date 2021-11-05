// JavaScript Document

$(document).ready(function(){
    											//////////////////////// 배너 자동 넘기기 //////////////////////////
												setInterval("goSlide()",2500);
												
												$("#your img").css("cursor","pointer").click(function(){
														//alert("홈으로!");
														window.open().location.href  = "https://www.instagram.com/americanapparelusa/";
													});//click
	
												$("#sliderM>li:first-child").click(function(){
													window.location.href = "sub.html";
												});
	
		


	
										  }); //JQB


/*
	함수명 : goSlide
	기능 : 배너가 순서대로 이동하여 한장씩 보이게 애니메이션함.
*/
function goSlide(){
	$("#sliderM").animate({left:"-100%"},400,
						  function(){
		$(this).append($(this).find("li").first()).css("left","0");
		// ul 아래 첫번째 li를 잘라서 맨뒤로 이동과 동시에 css left값을 다시 0으로 변경
	});//ani1
}



   //전역변수 설정
		var iseq = 1; //클릭된 이미지명 번호
		
		
	$(function(){//////////////jQB////////////////////
		"use strict";
		var msg=[
			"'Sofia' Bodysuit",
			"Cotton Spandex<br>Deep Cut Bodysuit",
			"Mock Neck Cutout 'Ryder' Bodysuit",
			"Cotton Spandex Turtleneck<br>Catsuit",
			"Cotton Spandex<br>Tank Bodysuit",
			"Metallic Jersey U<br>Back Bodysuit"
		];
		var msg1=[
			"$34.00",
			"$34.00",
			"$34.00",
			"$42.00",
			"$26.00",
			"$35.00"
		];
		//포토박스 html생성 및 이미지 초기화, 캡션글 셋팅
		for(var i=0; i<6; i++){
			$("#gallery").append('<div class="photobox"><img src="images/new'+(i+1)+'.png" alt="img"><div class="cover"></div><div class="caption"></div><div class="txt">'+msg[i]+'</div><div class="txt1">'+msg1[i]+'</div><div class="my"><img src="images/heart.png" alt="heart"><img src="images/bag.png" alt="bag"></div></div>');
		}///////for문/////////
		
		////// 포토박스에 마우스 오버/아웃시 이미지효과 변경///
		$(".photobox").hover(
			function(){//over
				//커버 투명하게
				$(this).find("div").eq(0).css("opacity",0);
				//글자배경 올라오기
				$(this).find("div").eq(1).stop().animate({top:"50%"},300);
				//글자 올라오기
				$(this).find("div").eq(2).stop().animate({top:"50%"},300);
				//가격올라오기
				$(this).find("div").eq(3).stop().animate({top:"68%"},300);
				//하트올라오기
				$(this).find("div").eq(4).stop().animate({top:"65%"},300);
			},
			function(){//out
				//커버 반투명하게
				$(this).find("div").eq(0).css("opacity",0.5);
				//글자배경 내려가기a
				$(this).find("div").eq(1).stop().animate({top:"100%"},300);
				//글자 내러가기
				$(this).find("div").eq(2).stop().animate({top:"100%"},300);
				//가격내려가가기
				$(this).find("div").eq(3).stop().animate({top:"100%"},300);
				//하트내려가가기
				$(this).find("div").eq(4).stop().animate({top:"100%"},300);
			});////////포토박스 마우스오버/아웃////////////
		
		
		$(".sub").hide();//모든 서브메뉴 숨기기
	$(".sub").first().show();//첫번째 서브메뉴 보이기
	
	//////// .title을 클릭하면 다음 요소인 .sub가 슬라이드 애니메이션된다.
	$(".title").click(function(){
		if($(this).next().css("display") === "none")//이미 열려있으면 못들어옴
		{
			$(".sub:visible").slideUp(400);//현재 열려서 보이는 서브메뉴 닫기
			$(this).next().slideDown(400);//선택된 sub메뉴 열기
		}
		else{//서브메뉴가 보이는 경우 닫기
			$(this).next().slideUp(400);
		}
	});//click
	
		
		
		
	});//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////jQb/////////////////////////////

