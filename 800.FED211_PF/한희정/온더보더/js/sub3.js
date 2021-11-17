
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
	
	
	
	for(var i=0; i<2; i++){
		$("#scont2").append('<div class="cimg"><img src="images/sub_images/sub3_1/'+(i+1)+'.jpg" alt="이미지"><div class="cover"></div><div class="caption"></div><div class="txt"><img src="images/sub_images/sub3_1/bt.png"></div></div>');
		
		
	}
	
	/******************마우스 오버시*******************/
	$(".cimg").hover
		(function(){
			$(this).css({"border":"3px solid #425d00","cursor":"pointer"});
			$(this).find("div").eq(0).css({"opacity":"0"});
			$(this).find("div").eq(1).animate({"top":"0%"},300);
			$(this).find("div").eq(2).animate({"top":"30%"},300);
			
		},
		function(){
			$(this).css({"border":"3px solid #666"});
			$(this).find("div").eq(0).css({"opacity":"0.5"});
			$(this).find("div").eq(1).animate({"top":"100%"},300);
			$(this).find("div").eq(2).animate({"top":"100%"},300);
			
		});
		
			//포토박스를 클릭하면 큰이미지 보이기
	$(".cimg").click(function(){
		var idx = $(this).index()+1;//class 순번
		//alert(idx);
		$("#dispimg").html("<img src='images/sub_images/sub3_1/"+idx+".jpg'>");
		
		//이미지 정중앙에 오게 하기
		//요소에 top,left값으로 중앙에 위치
		//1. top값 계산법
		//-> (화면에 height -요소의 height)/2
		// 2. left값 계산법
		//-> (화면에 width - 요소의 width)/2
		var posL = ($("#dispbg").width() - $("#dispimg").width())/2;
		var posT = ($("#dispbg").height() - $("#dispimg").height())/2;
		$("#dispimg").css({top:posT+"px",left:posL+"px"});
		
		
		
		$("#dispbg, #dispimg").fadeIn(500);
	});//click
	
	//버튼 클릭시 닫기, 오른쪽 왼쪽 이동하기
	$("#dispbg>div").click(function(){
		var idx = $(this).index();//div의 순번
		//console.log(idx);//0번은 배경, 1번은 닫기	2번은 오른쪽 3번은 왼쪽
		if(idx==1){//닫기버튼
			$("#dispbg, #dispimg").fadeOut(500);

		}
		else if(idx==2){//오른쪽 버튼(이미지 번호 증가)
			var cimg = $("#dispimg img").attr("src").split("/")[1].split(".")[0];//잘라서 배열로 만듬
			cimg = Number(cimg)+1;//다음 이미지
			if(cimg==2)cimg=1;//한계수 지정 6번 이미지 누르면 다시 1번으로 가라
			//console.log(cimg);
			$("#dispimg img").attr("src","images/sub_images/sub3_1/"+cimg+".jpg")//증가된 이미지 보이기			
			//위치값 재조정
			var posL = ($("#dispbg").width() - $("#dispimg").width())/2;
			var posT = ($("#dispbg").height() - $("#dispimg").height())/2;
			$("#dispimg").css({top:posT+"px",left:posL+"px"});
			
		}
		else if(idx==3){/*왼쪽버튼 (이미지 번호 감소)*/
			var cimg = $("#dispimg img").attr("src").split("/")[1].split(".")[0];//잘라서 배열로 만듬
			cimg = Number(cimg)-1;//다음 이미지
			if(cimg==0)cimg=2;//한계수 지정 6번 이미지 누르면 다시 1번으로 가라
			//console.log(cimg);
			$("#dispimg img").attr("src","images/sub_images/sub3_1/"+cimg+".jpg")//증가된 이미지 보이기			
			//위치값 재조정
			var posL = ($("#dispbg").width() - $("#dispimg").width())/2;
			var posT = ($("#dispbg").height() - $("#dispimg").height())/2;
			$("#dispimg").css({top:posT+"px",left:posL+"px"});
			
		}
		
	});//click 
	
	//닫기 버튼 회전
	$("#dispbg>div").eq(1).hover(
	function(){//오버시
		$(this).stop().animate({rotate:"-450deg"},600);
		
	}
	,function(){
		$(this).stop().animate({rotate:"0deg"},600);
		
	});
		


    

		




	
	
});//jQb



