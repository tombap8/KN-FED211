

$(document).ready(function(e) {
    



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
	
	
	

	
	
	
	
	
	
	
		//버튼에에 마우스가 오버/아웃시 이미지 효과 변경
	$(".butt").hover(
		function(){//오버시
			$(this).css({"background-color":"#b53000","cursor":"pointer"});//버튼 색상바꾸기
			$(this).find("p").css({"color":"#fff"});//버튼 글자색상 바꾸기
			
		},
	
		
		function(){//아웃시
			$(this).css({"background":"none","cursor":"pointer"});//반투명 사라짐
			$(this).find("p").css({"color":"#b53000"});//버튼 글자색상 바꾸기
			
		});
		
			$(".butt1").hover(
		function(){//오버시
			$(this).css({"background-color":"#af733c","cursor":"pointer"});//버튼 색상바꾸기
			$(this).find("p").css({"color":"#fff"});//버튼 글자색상 바꾸기
			
		},
	
		
		function(){//아웃시
			$(this).css({"background":"none","cursor":"pointer"});//반투명 사라짐
			$(this).find("p").css({"color":"#af733c"});//버튼 글자색상 바꾸기
			
		});
		

	$(".snav1 li").hover(
		function(){
			$(this).stop().animate({"background-color":"#496800"},300),
				$(this).find("a").css({"color":"#fff","cusor":"pointer"});//버튼 글자색상 바꾸기


		},
	
	
		function(){
			$(this).stop().animate({"background-color":"#d4d2ce"},300),
				$(this).find("a").css({"color":"#496800"});//버튼 글자색상 바꾸기
			
			
		});
	
	
	
		var msg=[ //이미지 설명글셋팅
		"고르곤 졸라 피자",
		"알프레도 파스타",
	
	];
	
	
		var msg1=[ //이미지 설명글셋팅2
		"Gorgonzola Garlic Pizza",
		"Alfredo Pasta",

	];
	
	
	
	
	
	for(var i=0; i<2; i++){
		$("#sm").append('<div class="smc"><div class="smc1"><div class="smc1_2"><a href="images/sub_images/sub2/'+(i+1)+'.png"><img src="images/sub_images/sub2/'+(i+1)+'.png" /></a></div></div><div class="smc2"><div class="smc2_1"><ul><li>'+msg[i]+'<br><span>'+msg1[+i]+'</span></li></ul></div></div>');
	}
	
	

	
		    //썸네일 이미지 클릭시 큰 이미지 변경하기
	$(".smc1_2 a").click(function(e){
		e.preventDefault();//기본이동 막기
		var newimg =$(this).attr("href");//변경할 이미지 경로
		$(".sc1 img").attr("src",newimg);//새로운 이미지로 변경
	});
    
	
	
	
	//썸네일 이미지 클릭시 큰 이미지 변경하기
	$(".smc1_2 img").click(function(e){
		e.preventDefault();//기본이동 막기
		var newimg =$(this).attr("href");//변경할 이미지 경로
		$(".sc1 img").attr("src",newimg);//새로운 이미지로 변경
	});

	$(".smc1_2").hover(function(){
		$(this).css({"border":"2px solid red","cusor":"pointer"});
	
		
		
		},
	
	function(){
		$(this).css({"border":"2px solid #ccc"});
		
		
		});
	
	
	


	
	
});//jQb


