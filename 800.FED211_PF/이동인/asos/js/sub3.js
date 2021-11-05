// JavaScript Document\

   //전역변수 설정
		var iseq = 1; //클릭된 이미지명 번호	
		
	$(function(){//////////////jQB////////////////////
		var msg=[
			"Infant Baby Rib Hat",
			"Organic Infant Baby Rib Legging",
			"Infant Baby ThermalLong Sleeve T-Shirt",
			"Youth Poly-Cotton 3/4 Sleeve Raglan",
			"Infant Flex Fleece Pant",
			"Infant Sheer Jersey Short Sleeve T-Shirt",
			"Infant Rib Tank Top",
			"Infant Baby Rib Short Sleeve One-Piece",
			"Infant Neon Poly-Cotton 3/4 Sleeve Raglan",
			"Infant Baby Rib Long Sleeve One-Piece",
			"Infant Baby Rib Short Sleeve One-Piece",
			"US Flag Print Kids' Poly-Cotton Tank",
			"Infant Flex Fleece Pant",
			"Organic Infant Baby Rib Legging",
			"Infant Baby ThermalLong Sleeve T-Shirt",
			 "Rib Short Sleeve One-Piece",
			"Poly-Cotton 3/4 Sleeve Raglan",
			"US Flag  Sleeve T-Shirt",
			"Rib Tank Top",
			"Youth Poly-Cotton Sleeve T-Shirt",
			"ThermalLong Sleeve T-Shirt"
		];
		var msg1=[
			"$6.50",
			"$12.00",
			"$14.00",
			"$18.00",
			"$14.00",
			"$10.00",
			"$9.50",
			"$11.50",
			"$13.00",
			"$12.50",
			"$11.50",
			"$14.00",
			"$10.00",
			"$9.50",
			"$11.50",
			"$13.00",
			"$12.50",
			"$11.50",
			"$14.00",
			"$10.00",
			"$9.50"
		];
		//포토박스 html생성 및 이미지 초기화, 캡션글 셋팅
		for(var i=0; i<21; i++){
			$("#gallery").append('<div class="photobox"><img src="images/subk'+(i+1)+'.png" alt="img"><div class="cover"></div><div class="caption"></div><div class="txt">'+msg[i]+'</div><div class="txt1">'+msg1[i]+'</div><div class="my"><img src="images/heart.png" alt="heart"><img src="images/bag.png" alt="cart"></div></div>')
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
				$(this).find("div").eq(3).stop().animate({top:"60%"},300);
				//하트올라오기
				$(this).find("div").eq(4).stop().animate({top:"60%"},300);
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
		
		
	});////////////////////jQb/////////////////////////////


// JavaScript Document// JavaScript Document