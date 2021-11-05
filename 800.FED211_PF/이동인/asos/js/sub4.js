// JavaScript Document

   //전역변수 설정
		var iseq = 1; //클릭된 이미지명 번호	
		
	$(function(){//////////////jQB////////////////////
		var msg=[
			"Infant Baby Rib Hat",
			"Organic Infant Legging",
			"Infant Baby Sleeve T-Shirt",
			"Youth Poly-Cotton 3/4",
			"Infant Flex Fleece Pant",
			"Sheer Jersey T-Shirt",
			"Infant Rib Tank Top",
			"Baby Rib Short One-Piece",
			"Neon 3/4 Sleeve Raglan",
			"Baby Rib Long One-Piece",
			"Infant Sleeve One-Piece",
			"US Flag Print Tank",
			"Infant Flex Fleece Pant",
			"Organic Infant Rib Legging",
			"Baby ThermalLong Sleeve",
			 "Rib Short Sleeve Piece",
			"Poly-Cotton 3/4 Raglan",
			"US Flag  Sleeve T-Shirt",
			"Rib Tank Top",
			"Poly-Cotton Sleeve T-Shirt",
			"ThermalLong Sleeve",
			"'Fisherman's Pullover",
			"Drop Shoulder Pullover",
			"Mock Twist Henley T-Shirt",
			"Nantucket Fleece Hoodie",
			"Stone Wash Oxford Shirt",
			"Fine Jersey Crewneck",
			"50/50 Raglan 3/4 Sleeve T",
			"Raglan Sweatshirt",
			"TriBlend Zip Hoodie",
			"Salt Pepper Zip Hoodie",
			"Organic Fine T-Shirt",
			"Tri-Blend Long Sleeve",
			"'Sofia' Bodysuit",
			"Cotton Spandex Deep Cut",
			"Mock Neck Cutout 'Ryder'",
			"Cotton Spandex",
			"Cotton Spandex Tank",
			"Metallic Jersey U Back",
			"Spandex Turtleneck suit",
			"The Nylon Tricot High-Cut",
			"2x2 Rib U Back Bodysuit",
			"Short Sleeve Double U ",
			"Cotton Spandex Tank",
			"Sleeve Double U Bodysuit",
			"3/4 Sleeve T-Shirt",
			"Pepper Zip Hoodie",
			"Print Poly-Cotton Tank",
			"Fleece Zip Hoodie",
			"Crewneck Long T-Shirt",
			"Henley Long SleeveShirt"
		];
		var msg1=[
			"$13.50","$25.00","$18.50","$29.00","$35.00","$29.00","$100.50","$33.50","$20.00","$27.50",
			"$19.50","$20.00","$80.00","$75.50","$55.50","$20.00","$18.50","$19.50","$20.00","$35.00",
			"$18.50","$18.50","$29.00","$35.00","$29.00","$80.00","$75.50","$55.50","$20.00","$18.50",
			"$19.50","$13.50","$25.00","$18.50","$29.00","$35.00","$29.00","$100.50","$33.50","$20.00",
			"$27.50","$19.50","$20.00","$80.00","$75.50","$55.50","$20.00","$18.50","$19.50","$20.00",
			"$32.50"
		];
		var msg2=[
			"$6.50","$12.00","$14.00","$18.00","$14.00","$10.00","$9.50","$11.50","$13.00","$12.50",
			"$11.50","$14.00","$10.00","$9.50","$11.50","$13.00","$12.50","$11.50","$12.00","$14.00",
			"$14.00","$10.00","$9.50","$6.50","$18.00","$14.00","$10.00","$9.50","$11.50","$13.00",
			"$12.50","$11.50","$14.00","$10.00","$9.50","$11.50","$13.00","$12.50","$11.50","$14.00",
			"$10.00","$9.50","$9.50","$11.50","$13.00","$12.50","$11.50","$14.00","$10.00","$9.50",
			"$11.50"
		];
		//포토박스 html생성 및 이미지 초기화, 캡션글 셋팅
		for(var i=0; i<51; i++){
			$("#gallery").append('<div class="photobox"><img src="images/subs'+(i+1)+'.png" alt="img"><div class="cover"></div><div class="caption"></div><div class="txt">'+msg[i]+'</div><div class="txt1">'+msg1[i]+'</div><div class="txt2">'+msg2[i]+'</div><div class="my"><img src="images/heart.png" alt="heart"><img src="images/bag.png" alt="cart"></div></div>')
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
				$(this).find("div").eq(3).stop().animate({top:"53%"},300);
				//세일가격올라오기
				$(this).find("div").eq(4).stop().animate({top:"60%"},300);
				//하트올라오기
				$(this).find("div").eq(5).stop().animate({top:"60%"},300);
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
				//세일가격내려가가기
				$(this).find("div").eq(4).stop().animate({top:"100%"},300);
				//하트내려가가기
				$(this).find("div").eq(5).stop().animate({top:"100%"},300);
			});////////포토박스 마우스오버/아웃////////////
		
		
	});////////////////////jQb/////////////////////////////


// JavaScript Document// JavaScript Document