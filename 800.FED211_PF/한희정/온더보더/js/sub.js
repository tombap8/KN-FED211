

$(document).ready(function(e) {
	

 /// 부드러운 스크롤 호출!(제이쿼리 아님!)
 startSS();



//**************네비게이션 작동 코드*****************


	$("#submenu, .sub").css("height","0");
	$("#menu li").hover(
		function(){//오버시
			$("#submenu").stop().animate({height:"200px"},400);
			$(".sub").stop().animate({height:"200px"},400);
			
		},
		function(){//아웃시
			$("#submenu").stop().animate({height:"0px"},400);
			$(".sub").stop().animate({height:"0px"},400);
	});	
	
	
	

	
	
	
	
	
	
	
/***************메뉴에 오버시**************/

/*
	$(".snav1 li a").hover(
		function(){
			$(this).stop().animate({"background-color":"#496800"},300),
				$(this).css({"color":"#fff","cusor":"pointer"});//버튼 글자색상 바꾸기


		},
	
	
		function(){
			$(this).stop().animate({"background-color":"#d4d2ce"},300),
				$(this).css({"color":"#496800"});//버튼 글자색상 바꾸기
			
			
		});

	*/

	var msg={ //이미지 설명글셋팅
	"msg00":"매콤로제 크림치킨",
	"msg01":"레몬크림 탕수육",
	"msg02":"치즈불닭 크림파스타",
	"msg03":"크림 파우치",
	"msg04":"히든 초코 레몬크림콘",
	
	"msg10":"고르곤졸라 피자",
	"msg11":"알프레도 파스타",
	
	"msg20":"콜드 쉬림프",
	"msg21":"오리엔탈 한치 샐러드",
	"msg22":"문어 마리네이드",
	"msg23":"참치 타다끼",
	
	"msg30":"스톤 빅 등심 스테이크",
	"msg31":"뉴욕 스톤 스테이크",
	
	"msg40":"쌀국수 면&amp;토핑",
	"msg41":"온더보더 비빔밥&amp;토핑",
	"msg42":"장조림 비빔밥",
	
	"msg50":"하와이안 버블 샐러드",
	"msg51":"머스터드 치킨 샐러드",
	"msg52":"리코타 치즈 샐러드",
	"msg53":"파머스 스파이시 쫄면",
	
	
	
	"msg60":"스윗스틱 포테이토",
	"msg61":"피치 앤 칩스",
	"msg62":"게살 볶음밥",
	"msg63":"허니버터 포테이토칩",
	"msg64":"까르보나라 떡볶이",
	
	"msg70":"온더보더 치즈케이크",
	"msg71":"초코 브라우니 케익",
	"msg72":"플레인 요거트",
	"msg73":"아이스크림",

	};
	
	
	var msg1={ //이미지 설명글셋팅2
	"msg100":"Spicy Rose Cream Chiken",
	"msg101":"Sweet&ampSour Pork With Cream",
	"msg102":"Spicy Chiken Cream Pasta",
	"msg103":"Cream Pouch",
	"msg104":"Hidden Chocolate Lemon Cream Cone",
	
	"msg110":"Gorgonezola Pizza",
	"msg111":"Alpredo Pasta",
	
	"msg120":"Cold Shrimp",
	"msg121":"oriental Mitra Squid Salad",
	"msg122":"Odtopus Marinade",
	"msg123":"Tuna Tataki",
	
	"msg130":"Ston Big Sirloin Steak",
	"msg131":"New York Ston Steak",
	
	"msg140":"Rice Noodle",
	"msg141":"Bibimbap",
	"msg142":"Jangjorim Bibimbap",
	
	"msg150":"Hawaiian Bubble salad",
	"msg151":"Mustard Chiken salad",
	"msg152":"Ricotta Cheese salade",
	"msg153":"Farmers Spicy Cold chewy Noodle",
	
	
	"msg160":"Sweet Potato Sticks",
	"msg161":"Fish And Chips",
	"msg162":"Crap Fried Rice",
	"msg163":"Honey Butter Potato Chip",
	"msg164":"Carbonara Tteokbokk",
	
	"msg170":"Cheese Cake",
	"msg171":"Chocolate Brownie Cake",
	"msg172":"Plain Yogurt",
	"msg173":"Ice Cream",
	
	
	};
	
	
	var msg2={
	"msg200":"주재료:닭고기",
	"msg201":"주재료:닭고기",
	"msg202":"주재료:닭고기",
	"msg203":"",
	"msg204":"",
	
	"msg210":"주재료:밀가루",
	"msg211":"",
	
	"msg220":"",
	"msg221":"",
	"msg222":"",
	"msg223":"",
	
	"msg230":"주재료:소고기(등심):미국산",
	"msg231":"주재료:소고기(채끝):미국산",
	
	"msg240":"주재료:소고기(쌀국수육수)",
	"msg241":"",
	"msg242":"주재료:돼지고기(장조림간장소스)",
	
	"msg250":"",
	"msg251":"",
	"msg252":"",
	"msg253":"",
	"msg254":"",
	
	"msg260":"",
	"msg261":"",
	"msg262":"",
	"msg263":"",
	"msg264":"",
	
	"msg270":"",
	"msg271":"",
	"msg272":"",
	"msg273":"",





	
	
	}
	
	var msg3={
	"msg300":"원산지:브라질",
	"msg301":"원산지:국내산",
	"msg302":"원산지:브라질",
	"msg303":"",
	"msg304":"",
	
	"msg310":"원산지:국내산",
	"msg311":"",
	
	"msg320":"",
	"msg321":"",
	"msg322":"",
	"msg323":"",
	
	"msg330":"29,900원",
	"msg331":"14,900원",
	
	"msg340":"원산지:호주산",
	"msg341":"",
	"msg342":"원산지:미국산",
	
	"msg350":"",
	"msg351":"",
	"msg352":"",
	"msg353":"",
	"msg354":"",
	
	"msg360":"",
	"msg361":"",
	"msg362":"",
	"msg363":"",
	"msg364":"",
	
	"msg370":"",
	"msg371":"",
	"msg372":"",
	"msg373":"",
	

	
	
	
	}
	var msg4={
	"msg400":"케이준 시즈닝으로 구운 닭을 매콤 로제소스에 퐁당",
	"msg401":"쫀득한 튀김옷을 입힌 탕수육에 크림소스를 찍어먹는 요리",
	"msg402":"오븐 구이 불닭을 넣은 매운 소스에<br>크림소스로 고소한맛을 더한 이색파스타",
	"msg403":"얅게 부친 크레페 피 위에 크림과 망고를 넣어 만든 디저트",
	"msg404":"바삭한 콘 속에 초코시트를 채운 후, 그 위에 레몬 크림을<br>듬뿍",
	
	"msg410":"고르곤졸라 치즈소스 베이스에 구운 마늘을토핑하고 허니시럽을 뿌린 피자",
	"msg411":"온더보더의 파스타로 깊고진한 크림소스에 베이컨,새송이가<br>곁들여 부드러운 맛이 일품인 알프레도 파스타",
	
	"msg420":"새우,레몬,월계수 잎을 함께 삶아 차갑게 먹는 콜드 쉬림프",
	"msg421":"부드럽게 데친 한치와 신선한 라디치오, 구운쪽파,<br>레몬 제스트를 오일 비네거에 버무린 오리엔탈 샐러드",
	"msg422":"올리브 오일에 마리네이드한 자숙 문어를 야채,올리브,<br>구운마늘과 함께 레몬즙에 버무린 세비체 스타일의 샐러드",
	"msg423":"겉면만 살짝 익힌 참치 타다끼를 슬라이스 하여 청어알과<br> 와사비 소스를 올린 핑거푸드",
	
	"msg430":"핫 스톤 위에 빅 사이즈 2인용 스테이크를 즉석에서 구워<br>등심자체의 풍부한 육질을 즐길 수 있는 인기 스테이크",
	"msg431":"소고기 본래의 맛을 느낄 수 있는 최상의 부위 채끝살<br> 스테이크 부드러움과 쫄깃함을 동시에 느껴보세요!",
	
	"msg440":"쌀국수면과 숙주,양파등 신선한 채소를 입맛에 맞게<br>골고루 담고 따끈한 육수와 함께 즐기는 온더보더 쌀국수",
	"msg441":"오색 보리밥에 다양한 토핑과 온더보더만의 비빔밥소스를<br>비벼먹는 온더보더 비빔밥",
	"msg442":"오색 보리밥에 장조림,볶음김치, 김가루,계란 등 입맛에<br>맞는 토핑을 담아 즐기는 맛있는 온더보더 장조림 비빔밥 ",
	
	"msg450":"동글동글 쫄깃한 타피오카 펄, 달콤상큼한 키위와망고,<br>시원한 용과를 망고장에 버무린 하와이안 스타일의 샐러드",
	"msg451":"톡쏘는 특제 머스터드 드레싱에 재운 닭가슴살을 다양한 채소와 함께 믹싱한 온더보더 NO.1샐러드",
	"msg452":"계절야채 위에 고소한 리코타 치즈와 견과류,상큼한 크랜베리가 발사믹 드레싱과 어우러진 스페셜 샐러드 메뉴",
	"msg453":"아삭한 콩나물, 쑥갓을 쫄깃한 쫄면과 매콤한 레드페퍼 소스에 버무린 오리지널 쫄면",
	
	"msg460":"후렌치후라이처럼 잘게 썬 고구마를 매운 시즈닝을<br>곁들여 튀겨낸요리",
	"msg461":"담백한 생선살과 감자침을 바삭하게 취겨 매콤함을<br>더한 요리",
	"msg462":"쫀득하게 씹히는 게살과 몽글몽글한 스크램블 에그를<br>곁들인 오리엔탈 게산 볶음밥 아이들에게 인기만점!",
	"msg463":"신선한 감자를 얇게 썰어 튀긴 후 허니버터를 듬뿍 얹은 맛",
	"msg464":"크림소스와 달콤 짭조름 데리야끼 소스를 믹스해 떡과<br>베이컨 브로콜리를 곁들인 인기메뉴 까르보나라 떡볶이",
	
	"msg470":"부드러운 식감과 진한 치즈의 풍미가 입안에서 깊이<br>느껴지는 온더보더 대표 디저트 치즈케익",
	"msg471":"진한 리얼 초콜릿 가나슈로 아이싱한 부드러운 초코시트의 온더보더 브라우니",
	"msg472":"우유와 유산균을 주재료로 사용하여 담백하고 상큼한 맛이 일품인 플레인 요거트! 각종 토핑과 곁들여 함께 즐기세요.",
	"msg473":"",
	
	
	}

	var msg5={
	"msg500":"W, W+매장 올데이 메뉴",
	"msg501":"미아사거리역점 제외",
	"msg502":"미아사거리역점 제외",
	"msg503":"W, W+매장 올데이 메뉴",
	"msg504":"W, W+매장 올데이 메뉴",
	
	"msg510":"w,w+ 매장 제공(CLASSIC 제외)",
	"msg511":"클래식매장 제공",
	
	"msg520":"W, W+매장 올데이 메뉴",
	"msg521":"W, W+매장 올데이 메뉴",
	"msg522":"W, W+매장 올데이 메뉴",
	"msg523":"노들나루점",
	
	"msg530":"샐러드바 가격은 별도 추가됩니다.",
	"msg531":"샐러드바 가격은 별도 추가됩니다.",
	
	"msg540":"토핑은 매장 상황에 따라 다를 수 있습니다.",
	"msg541":"토핑은 매장 상황에 따라 다를 수 있습니다.",
	"msg542":"토핑은 매장 상황에 따라 다를 수 있습니다.",
	
	"msg550":"*매장상황에 따라 제공되는 메뉴가 달라질 수 있습니다.",
	"msg551":"*매장상황에 따라 제공되는 메뉴가 달라질 수 있습니다.",
	"msg552":"*매장상황에 따라 제공되는 메뉴가 달라질 수 있습니다.",
	"msg553":"*매장상황에 따라 제공되는 메뉴가 달라질 수 있습니다.",
	
	
	
	"msg560":"*매장상황에 따라 제공되는 메뉴가 달라질 수 있습니다.",
	"msg561":"",
	"msg562":"",
	"msg563":"",
	"msg564":"",
	
	"msg570":"",
	"msg571":"",
	"msg572":"",
	"msg573":"",
	
	
	}
	
	var msg6={
	"msg600":"(미아사거리역, 노들나루, CLASSIC 매장 제외)",
	"msg601":"",
	"msg602":"",
	"msg603":"(미아사거리역, 노들나루, CLASSIC 매장 제외)",
	"msg604":"(미아사거리역, 노들나루, CLASSIC 매장 제외)",
	
	"msg610":"매장별로 도우의 종류가 다를 수 있습니다.",
	"msg611":"",
	
	"msg620":"",
	"msg621":"",
	"msg622":"",
	"msg623":"평일디너,주말,공휴일제공",
	
	"msg630":"일부매장은 호주산으로 제공",
	"msg631":"일부매장은 호주산으로 제공",
	
	"msg640":"w,w+ 매장 제공",
	"msg641":"평일 런치 제공",
	"msg642":"평일 런치 제공",
	
	"msg650":"w,w+ 매장 제공",
	"msg651":"w,w+ 매장 제공",
	"msg652":"w,w+ 매장 제공 올데이 메뉴", 
	"msg653":"w,w+ 매장 제공",
	
	"msg660":"w,w+ 매장 제공",
	"msg661":"w,w+ 매장 제공 올데이 메뉴",
	"msg662":"w,w+매장 제공",
	"msg663":"w,w+매장 제공",
	"msg664":"w,w+매장 제공",
	
	"msg670":"평일디너,주말,공휴일제공",
	"msg671":"평일디너,주말,공휴일제공",
	"msg672":"w,w+매장 제공",
	"msg673":"w,w+매장 제공",
	
	
	}
	
	

	
	
	
	
	
	for(var i=0; i<5; i++){
		$("#sm").append('<div class="smc"><div class="smc1"><div class="smc1_2"><a href="images/sub_images/'+(i+1)+'.png"><img src="images/sub_images/'+(i+1)+'.png" /></a></div></div><div class="smc2"><div class="smc2_1"><ul><li>'+msg["msg0"+i]+'<br><span>'+msg1["msg10"+i]+'</span></li></ul></div></div>');

	}
	
	for(var i=0; i<2; i++){
		$("#sm2").append('<div class="smc"><div class="smc1"><div class="smc1_2"><a href="images/sub_images/sub2/'+(i+1)+'.png"><img src="images/sub_images/sub2/'+(i+1)+'.png" /></a></div></div><div class="smc2"><div class="smc2_1"><ul><li>'+msg["msg1"+i]+'<br><span>'+msg1["msg11"+i]+'</span></li></ul></div></div>');
	
	}
	
		for(var i=0; i<4; i++){
		$("#sm3").append('<div class="smc"><div class="smc1"><div class="smc1_2"><a href="images/sub_images/sub3/'+(i+1)+'.png"><img src="images/sub_images/sub3/'+(i+1)+'.png" /></a></div></div><div class="smc2"><div class="smc2_1"><ul><li>'+msg["msg2"+i]+'<br><span>'+msg1["msg12"+i]+'</span></li></ul></div></div>');
	
	}
	
	for(var i=0; i<2; i++){
		$("#sm4").append('<div class="smc"><div class="smc1"><div class="smc1_2"><a href="images/sub_images/sub4/'+(i+1)+'.png"><img src="images/sub_images/sub4/'+(i+1)+'.png" /></a></div></div><div class="smc2"><div class="smc2_1"><ul><li>'+msg["msg3"+i]+'<br><span>'+msg1["msg13"+i]+'</span></li></ul></div></div>');
	
	}
	
	for(var i=0; i<3; i++){
		$("#sm5").append('<div class="smc"><div class="smc1"><div class="smc1_2"><a href="images/sub_images/sub5/'+(i+1)+'.png"><img src="images/sub_images/sub5/'+(i+1)+'.png" /></a></div></div><div class="smc2"><div class="smc2_1"><ul><li>'+msg["msg4"+i]+'<br><span>'+msg1["msg14"+i]+'</span></li></ul></div></div>');
	
	}
	
	for(var i=0; i<4; i++){
		$("#sm6").append('<div class="smc"><div class="smc1"><div class="smc1_2"><a href="images/sub_images/sub6/'+(i+1)+'.png"><img src="images/sub_images/sub6/'+(i+1)+'.png" /></a></div></div><div class="smc2"><div class="smc2_1"><ul><li>'+msg["msg5"+i]+'<br><span>'+msg1["msg15"+i]+'</span></li></ul></div></div>');
	
	}
	
		for(var i=0; i<5; i++){
		$("#sm7").append('<div class="smc"><div class="smc1"><div class="smc1_2"><a href="images/sub_images/sub7/'+(i+1)+'.png"><img src="images/sub_images/sub7/'+(i+1)+'.png" /></a></div></div><div class="smc2"><div class="smc2_1"><ul><li>'+msg["msg6"+i]+'<br><span>'+msg1["msg16"+i]+'</span></li></ul></div></div>');
	
	}
	
	for(var i=0; i<4; i++){
		$("#sm8").append('<div class="smc"><div class="smc1"><div class="smc1_2"><a href="images/sub_images/sub8/'+(i+1)+'.png"><img src="images/sub_images/sub8/'+(i+1)+'.png" /></a></div></div><div class="smc2"><div class="smc2_1"><ul><li>'+msg["msg7"+i]+'<br><span>'+msg1["msg17"+i]+'</span></li></ul></div></div>');
	
	}
	


	




	    //썸네일 이미지 클릭시 큰 이미지 변경하기
	$(".smc1_2 a").click(function(e){
		e.preventDefault();//기본이동 막기
		var papanum =  $(this).parent().parent().parent().parent().parent().index();//분류최상위부모(.smenu1)
		var newimg =$(this).attr("href");//변경할 이미지 경로
		$(".smenu1").eq(papanum).find(".sc1 img").attr("src",newimg);//새로운 이미지로 변경
		var idx = $(this).parent().parent().parent().index();
		$(".smenu1").eq(papanum).find(".sc2 ul li").eq(0).html(msg["msg"+papanum+idx]+"<br><span>"+msg1["msg1"+papanum+idx]+"</span>");
		$(".smenu1").eq(papanum).find(".sc2 ul li").eq(1).html(msg2["msg2"+papanum+idx]+"<br>"+msg3["msg3"+papanum+idx]);
		$(".smenu1").eq(papanum).find(".sc2 ul li").eq(2).html(msg4["msg4"+papanum+idx]);
		$(".smenu1").eq(papanum).find(".sc2 ul li").eq(3).html(msg5["msg5"+papanum+idx]+"<br>"+msg6["msg6"+papanum+idx]+"");
		console.log(idx);
		
	});
	

	
	
	
	
	//메뉴 클릭시
	$(".snav1 li").click(function(e){
		e.preventDefault();
		var nidx = $(this).index();//클릭된 li의 순번->div순번과 일치함

		
		//원상복귀
		$(".snav1 li").css({"background-color":"#d4d2ce"});
		$(".snav1 li").find("a").css({"color":"#496800"});
		$(".smenu1").css({"z-index":"0"});
		
		//선택된것 변경
		$(this).css({"background-color":"#496800"});
		$(this).find("a").css({"color":"#fff"});
		$(".smenu1").eq(nidx).css({"z-index":"1"});
	});
    
	

	


/*******************썸네일 이미지*************************/
	$(".smc1_2").hover(function(){
		$(this).css({"border":"2px solid red","cusor":"pointer"});
	
		
		
		},
	
	function(){
		$(this).css({"border":"2px solid #ccc"});
		
		
		});
	
	
	


	
	
});//jQb


