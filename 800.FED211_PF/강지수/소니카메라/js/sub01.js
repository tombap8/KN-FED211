$(document).ready(function(){
	$(".DL").hover(
			function(){//over
				$(this).find("div").eq(1).stop().animate({top:"54%"},300);//배경 올라오기
				$(this).css("color","purple");
		},
			function(){//out
				$(this).find("div").eq(1).stop().animate({top:"100%"},300);//배경 내려가기
				$(this).css("color","#000");
		});//////마우스 오버/아웃
	$(".DM").hover(
			function(){//over
				$(this).find("div").eq(1).stop().animate({top:"54%"},300);//배경 올라오기
				$(this).css("color","purple");
		},
			function(){//out
				$(this).find("div").eq(1).stop().animate({top:"100%"},300);//배경 내려가기
				$(this).css("color","#000");
		});//////마우스 오버/아웃
	$(".DR").hover(
			function(){//over
				$(this).find("div").eq(1).stop().animate({top:"54%"},300);//배경 올라오기
				$(this).css("color","purple");
		},
			function(){//out
				$(this).find("div").eq(1).stop().animate({top:"100%"},300);//배경 내려가기
				$(this).css("color","#000");
		});//////마우스 오버/아웃
	
	
	
///////////////////////////////////서브배너 이동버튼 클릭시////////////////////////////////////
//	$(".gobtn").click(function(){
//		var seq=$(this).index();//버튼순번(0-왼쪽버튼, 1-오른쪽버튼)
//		borists=1;//클릭한 상태값으로 변경!!!
//		goSubban(seq);//이동호출
//	});////////////////////////////////////////////////////////click함수
//	
//	
//	//3초간격으로 자동으로 넘어가기~!
//	autobori=setInterval("autoBori()",3000);

	
	setInterval(movCam,3000);
	
});//////////////////jQB




//		
///*
//	함수명: autoBori
//	기능: 서브배너 아래버튼 클릭발생 
//*/
//
//var borists=0;//0-자동호출, 1-클릭호출
//var autobori;//서브배너 자동넘김용 변수
//var autoboriT;//서브배너 한번 호출용 변수
//function autoBori(){
//	borists=0;//자동호출로 상태값 변경
//	goSubban(1);//아래로 이동 호출
//}
//	
//
///*
//	함수명: goSubban
//	기능: 왼쪽 혹은 오른쪽으로 서브배너를 이동시킨다.
//*/
//var psts=0;//0-작동 전, 1- 작동중
//function goSubban(dir){//dir방향
//
//	if(psts==1)return false;//작동중일때 돌아가
//	psts=1;//문잠궈!(뒤따라 들어오는 click이벤트가 모두 거절됨)
//	
//		
///*왼쪽 버튼*/
//	if(dir==0){
//	$("newbox_s").prepend($("#D3400")).css({"left":"-31%","transition":"none"});/*마지막 이미지가 왼쪽으로 들어옴*/
//		setTimeout(function(){
//			$("#newbox_s").css({"left":"0%","transition":"left 0.4s"},100);//문열기
//			setTimeout(function(){ psts=0;
//			},500);//0.5초후에 문열기!
//		}//if문
//	)};
//	
///*오른쪽 버튼*/
//	else if(dir==1){	
//		$("#newbox_s").css({"left":"-31%","transition":"left 0.4s"});
//			setTimeout(function(){
//				$("newbox_s").append($("#D5"));/*첫번째 이미지 마지막으로 이동*/
//				$("#newbox_s").css({"left":"0%", "transition":"none"});
//			psts=0;//문열기	
//			},400);//setTimeout문			
//	}//else if문	
//		
////만약에 borists=1이면 클릭해서 들어온 경우이므로 자동실행 지우기!!!
//	if(borists==1){
//		clearInterval(autobori);//클릭할때 마다 매번 지운다.
//		clearTimeout(autoboriT);//클릭할때 마다 매번 지운다.
//		
//		//만약에 5초동안 클릭하지 않으면 자동넘김 다시 작동시키기
//		autoboriT=setTimeout(function(){
//			//3초간격으로 자동으로 넘어가기~!
//			autobori=setInterval("autoBori()",3000);
//		},5000);
//		
//	} 	
//}//goSubban함수	
//		

		
	function movCam(){
		$("#newbox_s").animate({left:"-33.333%"},400,function(){
			$("#newbox_s").append($("#newbox_s>div").first()).css("left","0");
		});
	}	
		













