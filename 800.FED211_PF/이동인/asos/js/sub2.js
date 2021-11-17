// JavaScript Document\

   //전역변수 설정
		var iseq = 1; //클릭된 이미지명 번호
		
		
	$(function(){//////////////jQB////////////////////
		var msg=[
			"'Fisherman's Pullover",
			"Drop Shoulder Pullover",
			"Mock Twist Henley Long Sleeve T-Shirt",
			"Nantucket Fleece Zip Hoodie",
			"Stone Wash Oxford Shirt",
			"Fine Jersey Crewneck T-Shirt",
			"50/50 Raglan 3/4 Sleeve T-Shirt",
			"Flex Fleece Raglan<br>Crewneck Sweatshirt",
			"Tri-Blend Zip Hoodie",
			"Salt and Pepper Zip Hoodie",
			"Organic Fine Jersey Crewneck T-Shirt",
			"Tri-Blend Crewneck<br>Long Sleeve T-Shirt"
		];
		var msg1=[
			"$78.00",
			"$45.00",
			"$35.00",
			"$55.00",
			"$74.00",
			"$18.00",
			"$28.00",
			"$39.00",
			"$52.00",
			"$54.00",
			"$18.00",
			"$30.00"
		];
		//포토박스 html생성 및 이미지 초기화, 캡션글 셋팅
		for(var i=0; i<12; i++){
			$("#gallery").append('<div class="photobox"><img src="images/subm'+(i+1)+'.png" alt="img"><div class="cover"></div><div class="caption"></div><div class="txt">'+msg[i]+'</div><div class="txt1">'+msg1[i]+'</div><div class="my"><img src="images/heart.png" alt="heart"><img src="images/bag.png" alt="cart"></div></div>')
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
		
		
		
	});////////////////////jQb/////////////////////////////
