// JavaScript Document\

   //전역변수 설정
		var iseq = 1; //클릭된 이미지명 번호
		
		
	$(function(){//////////////jQB////////////////////
		"use strict";
		var msg=[
			"'Sofia' Bodysuit",
			"Cotton Spandex Deep Cut Bodysuit",
			"Mock Neck Cutout 'Ryder' Bodysuit",
			"Cotton Spandex Turtleneck Catsuit",
			"Cotton Spandex Tank Bodysuit",
			"Metallic Jersey U Back Bodysuit",
			"Printed Cotton Spandex<br>Turtleneck Catsuit",
			"The Nylon Tricot High-Cut-One-Piece",
			"2x2 Rib U Back Bodysuit",
			"Cotton Spandex Short Sleeve<br>Double U Bodysuit",
			"Cotton Spandex Tank Bodysuit",
			"Cotton Spandex Short Sleeve<br>Double U Bodysuit"
		];
		var msg1=[
			"$34.00",
			"$34.00",
			"$34.00",
			"$42.00",
			"$26.00",
			"$35.00",
			"$42.00",
			"$45.00",
			"$38.00",
			"$28.00",
			"$26.00",
			"$28.00"
		];
		//포토박스 html생성 및 이미지 초기화, 캡션글 셋팅
		for(var i=0; i<12; i++){
			$("#gallery").append('<div class="photobox"><img src="images/sub'+(i+1)+'.png" alt="img"><div class="cover"></div><div class="caption"></div><div class="txt">'+msg[i]+'</div><div class="txt1">'+msg1[i]+'</div><div class="my"><img src="images/heart.png" alt="heart"><img src="images/bag.png" alt="bag"></div></div>');
		}///////for문/////////
		
		////// 포토박스에 마우스 오버/아웃시 이미지효과 변경///
		$(".photobox").hover(
			function(){//over
				//커버 투명하게
				$(this).find("div").eq(0).css("opacity",0);
				//글자배경 올라오기
				$(this).find("div").eq(1).stop().animate({top:"60%"},300);
				//글자 올라오기
				$(this).find("div").eq(2).stop().animate({top:"60%"},300);
				//가격올라오기
				$(this).find("div").eq(3).stop().animate({top:"70%"},300);
				//하트올라오기
				$(this).find("div").eq(4).stop().animate({top:"70%"},300);
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
		
		
		$("#gallery>div:nth-child(1)").css("cursor","pointer").click(function(){
			window.location.href = "subcont.html";
		});
		
	});////////////////////jQb/////////////////////////////

