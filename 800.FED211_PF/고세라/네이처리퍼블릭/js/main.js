// 메인페이지 JS
var bsts=0; //배너 작동중인지 구별해주는 변수 0=작동아님, 1=작동중
var bsts2=0; //배너 작동중인지 구별해주는 변수 0=작동아님, 1=작동중
var autocall, autocallT; //배너 자동실행 함수들
var autocall2, autocallT2; //배너 자동실행 함수들


$(document).ready(function(e) {
	$("a").click(function(e){
		e.preventDefault();
	});
// 제품에 마우스 오버시 찜하기, 바로구매, 장바구니 보이게 하기
    $("#best div ul").hover(
		function(){// 오버시
			$(this).find(".Ybox").stop().fadeIn(200).css("cursor","pointer");
		},
		function(){// 아웃시
			$(this).find(".Ybox").stop().fadeOut(100);
	});//hover 노란배경

// 찜하기 클릭하면 하트 모양 바꾸기
	var cnum = 0; // 클릭 구분 변수 0-클릭안한상태, 1-클릭해둔상태
	$(".Ybox ul li").find("img").click(function(){
		if(cnum==0){
			$(this).attr("src","images/jjim2.png");
			cnum=1;	
		}
		else if(cnum==1){
			$(this).attr("src","images/jjim.png");
			cnum=0;
		}
	});//click
	
// MD 제품에 오버시 제품 이름에 밑줄
	$("#md>div>aside").eq(0).find("ul").hover(
		function(){
			$(this).find(".mname a").eq(0).css("color","#008A45");
			/*$(this).find(".mdnum").stop().animate({width:"100%"},500)
			.find(".mdnumtxt").stop().animate({width:"100%"},550,function(){
			$(this).text("제품 보러가기▶").css("cursor","pointer");
			});*/
		},
		function(){
			$(this).find(".mname a").eq(0).css("color","#3d3d3d");
			/*$(this).find(".mdnum").stop().animate({width:"35px"},800)
			.find(".mdnumtxt").stop().animate({width:"35px"},550,function(){
			$(this).text("01").css("cursor","none");
			});
			;*/
	});

// 아래쪽 세가지 배너 마우스 오버시 컬러 변경
	$("#bban li").css("transition","all 0.3s")
	.hover(
		function(){
			$(this).find("p").css("transition","all 0.3s")
			$(this).css({"background-color":"#FDFFE1","box-shadow":"4px 5px 15px #FFC875"})
			$(this).find("p").css("color","#F96")
		},
		function(){
			$(this).css({"background-color":"#fff7cc","box-shadow":"4px 5px 0 #FCDAA7"})
			$(this).find("p").css("color","#747474")
		});
		
// 푸터 앱 다운로드 박스 오버시 백그라운드, 폰트 컬러 변경
	$("#footer div>div").eq(2).find("ul").find("li").find("div").css("transition","all 0.4s").hover(
		function(){ //오버시
			$(this).css({backgroundColor:"#757575",color:"#fff"})
		},
		function(){ //아웃시
			$(this).css({backgroundColor:"transparent",color:"#686868"})
		});
		
// 푸터 아이콘 클릭시 해당 sns로 이동
	$(".sprite-fb").click(function(){
		window.open("https://www.facebook.com/theskinfood.kr");	
	});
	$(".sprite-instar").click(function(){
		window.open("https://www.instagram.com/skinfoodofficial/");
	});
	$(".sprite-mgz").click(function(){
		location.href="http://www.theskinfood.co.kr/community/beautyM.do";	
	});
	$(".sprite-ytb").click(function(){
		window.open("https://www.youtube.com/channel/UCKyIfDxlcdTBhUzv_RsuR-g");
	});
// 로고 클릭시 메인페이지로 이동
	$(".logo").click(function(){
		location.href="main.html";	
	});
// 푸터 모바일 앱 클릭시 해당 다운로드로 이동
	$(".and").click(function(){
		location.href="https://play.google.com/store/apps/details?id=com.theskinfood";	
	});
	$(".appl").click(function(){
		location.href="https://itunes.apple.com/kr/app/seukinpudeu-smembeoswib-eopeullikeisyeon/id1021868585";	
	});

	autoFunc();
/////////// 배너 슬라이드
	$("#banner>ul").find("li").first().css("background","url(images/mban1.png) no-repeat top/cover");

//// 블릿
	$("#banner>aside li").eq(0).css("backgroundColor","#ffd200");
	
	//goLineup();
	autoFunc2();
	
	//////////// 블릿 클릭시 해당 배너로 이동하기////////
	$("#banner>aside li a").click(function(e){
		e.preventDefault();
		var idx = $(this).parent().index();//블릿 li 순번		
		directSlide(idx,'#banner>ul','#banner>aside li','mban',6);//배너직접이동함수 호출!!!
	});
	
	//////////// 블릿 클릭시 해당 배너로 이동하기////////
	$(".blit>li>a").click(function(e){
		e.preventDefault();
		var idx = $(this).parent().index();//블릿 li 순번		
		directSlide(idx,'.mdban','.blit li','sban',4);//배너직접이동함수 호출!!!
	});
	
	///// 푸드 라인업 버튼 클릭시 해당 방향으로 움직이기
	goLineup();
	
	$(".bitmList>li>a").click(function(){
		var seq = $(this).parent().index();
		// alert(seq); 0~3
		$(this).css({color:"#418238",fontWeight:"bold"}).parent().siblings().find("a")
		.css({color:"#3d3d3d",fontWeight:"normal"});
		
		$("#tap"+(seq+1)).show().siblings("div").hide();
	});
	
	
	// 햄버거 버튼 클릭
	$("#m_menu_in").css("transition","all 0.8s ease-in-out");
	$(".m_menu").click(function(){
		$("#m_menu_in").css("left","0%");
		$(".opa_bg").css("display","block");
	});
	$(".xbtn").click(function(){
		$("#m_menu_in").css("left","-70%");	
		$(".opa_bg").css("display","none");
	});
	
	// 모바일 gnb 나오게 하기
	var opn = 0;
	$(".links div").click(function(){
		var Tidx = $(this).index();
		//alert(Tidx);
		if(opn==0){
			$(".nav"+Tidx).css("height","auto");
			opn=1;
		}
		else if(opn==1){
		$(".nav"+Tidx).css("height","0");
		opn=0;
		}
	});
});///////////////jQB


/*
	함수명 : goSlide
	기능 : 배너 li부분에 백그라운드 이미지 집어넣기
*/
// 적용시킬 태그, li 한계값, 블릿갯수
//
var bnum=1;
var bnum2=1;
function goSlide(sts,obj1, obj2, fname, limit){//sts 버튼클릭여부, obj1 메인객체, obj2 블릿객체, fname 파일명, limit 한계수
	//alert(sts+"/"+obj1+"/"+obj2+"/"+fname+"/"+bsts);
	"use strict";
	////////함수 잠금장치
	if(fname=="mban")
	{	
		if(bsts===1) {return false;}
		bsts=1;
	}
	else if(fname=="sban"){
		if(bsts2===1) {return false;}
		bsts2=1;
	}
	
	// 배너순번 증가
	if(fname=="mban")
	{	
		bnum++;
		if(bnum===limit){bnum=1;}
	}
	else if(fname=="sban"){
		bnum2++;
		if(bnum2===limit){bnum2=1;}
	}
	
	// 메인 배너 ul의 자식으로 li를 뒤에 추가함
	
	if(fname=="mban")
	{	
		$(obj1).append("<li></li>").find("li").last()
	.css("background","url(images/"+fname+bnum+".png) no-repeat top/cover");
	}
	else if(fname=="sban"){		
		$(obj1).append("<li></li>").find("li").last()
	.css("background","url(images/"+fname+bnum2+".png) no-repeat top/cover");
	}
	
	
	//배너 슬라이드 이동 및 첫번째 li 지우기
	$(obj1).animate({left:"-100%"},1500,"easeOutQuint",
	function(){
		$(this).find("li").first().remove();//첫번째 li제거
		$(this).css("left","0");//위치값 초기화
		if(fname=="mban")	{bsts=0;}else if(fname=="sban"){bsts2=0;}//잠금상태풀기
		
	});
	
	// 블릿변경하기
	
	if(fname=="mban")
	{	
		$(obj2).eq(bnum-1).css("backgroundColor","#ffd200").siblings().css("backgroundColor","rgba(200,200,200,0.3)");
	}
	else if(fname=="sban"){
		$(obj2).eq(bnum2-1).find("img").attr("src","images/dot_on.png")
		.parent().parent().siblings().find("img").attr("src","images/dot_off.png");
	}
	
	
	/////버튼클릭시 일정시간 후 자동실행하기////
	if(sts==1){
		
		if(fname=="mban")
		{				
			clearInterval(autocall);
			clearTimeout(autocallT);
			autocallT = setTimeout("autoFunc()", 5000);
		}
		else if(fname=="sban"){			
			clearInterval(autocall2);
			clearTimeout(autocallT2);
			autocallT2 = setTimeout("autoFunc2()", 5000);
		}
	}
	
}/////////////////goSlide함수////////////////////}

/*
	함수명 : autoFunc
	기능 : 배너 자동실행 함수
*/
function autoFunc(){
//obj1=#banner>ul     obj2=#banner>aside li,     fname=   mban   
	autocall = setInterval("goSlide(0,'#banner>ul','#banner>aside li','mban',6)", 4000);
}////////autoFunc함수///////

function autoFunc2(){/*서브배너*/
	autocall2 = setInterval("goSlide(0,'.mdban','.blit li','sban',4)", 3000);
}////////autoFunc함수///////

/*
	함수명 : directSlide
	기능 : 블릿을 클릭했을 때 배너를 바로 이동하기

*/
function directSlide(snum, obj1, obj2, fname, limit){//snum 현재 클릭된 블릿순번
	"use strict";
	//함수 잠금장치
	if(fname=="mban")
	{	
		if(bsts===1) {return false;}
		bsts=1;
	}
	else if(fname=="sban"){
		if(bsts2===1) {return false;}
		bsts2=1;
	}
	
	
	var diff;
	if(fname=="mban")
	{
		diff = (bnum-1) - snum;
	}
	else if(fname=="sban"){		
		diff = (bnum2-1) - snum;
	}
	
	// 현재순번 - 클릭된 순번 했을 때 결과가
	// 음수가 나오면 오른쪽버튼 클릭효과
	// 양수가 나오면 왼쪽버튼 클릭효과
	////////////////////////////////////////////////////////////////////
	if(diff<0){//오른쪽에서 이동
		// 배너 ul의 자식으로 li를 뒤에 추가함
		$(obj1).append("<li></li>").find("li").last()
		.css("background","url(images/"+fname+(snum+1)+".png) no-repeat top/cover");
		//배너 슬라이드 이동 및 첫번째 li 지우기
		$(obj1).animate({left:"-100%"},1500,"easeOutQuint",
		function(){
			$(this).find("li").first().remove();//첫번째 li제거
			$(this).css("left","0");//위치값 초기화			
			if(fname=="mban")	{bsts=0;}else if(fname=="sban"){bsts2=0;}//잠금상태풀기
		});
	}/////////////////////////////////////////////////////////////
	else if(diff>0){//왼쪽에서 이동
		// 배너 ul의 자식으로 li를 앞에 추가함
		$(obj1).prepend("<li></li>").css("left","-100%")
		.find("li").first()
		.css("background","url(images/"+fname+(snum+1)+".png) no-repeat top/cover");
		//배너 슬라이드 이동 및 마지막 li 지우기
		$(obj1).animate({left:"0%"},2000,"easeOutQuint",
		function(){
			$(this).find("li").last().remove();//마지막 li제거			
			if(fname=="mban")	{bsts=0;}else if(fname=="sban"){bsts2=0;}//잠금상태풀기
		});
	}///////////////////////////////////////////////////////////////
	
	//////// 클릭된 블릿 순번을 전역변수인 bnum에 업데이트!!!
	// 블릿변경하기
	if(fname=="mban")
	{	
		bnum = snum+1;//현재 변경된 슬라이드 번호
		$(obj2).eq(bnum-1).css("backgroundColor","#ffd200").siblings().css("backgroundColor","rgba(200,200,200,0.3)");
	}
	else if(fname=="sban"){
		bnum2 = snum+1;//현재 변경된 슬라이드 번호
		$(obj2).eq(bnum2-1).find("img").attr("src","images/dot_on.png")
		.parent().parent().siblings().find("img").attr("src","images/dot_off.png");
	}
	
	//자동호출 지우기, 일정시간 후 다시 자동호출
	if(fname=="mban")
	{				
		clearInterval(autocall);
		clearTimeout(autocallT);
		autocallT = setTimeout("autoFunc()", 5000);
	}
	else if(fname=="sban"){			
		clearInterval(autocall2);
		clearTimeout(autocallT2);
		autocallT2 = setTimeout("autoFunc2()", 5000);
	}
}///////////directSlide 함수//////////

/*
	함수명 : goLineup
	기능 : 화살표 버튼 누르면 해당 방향으로 라인업 이동
*/
var lnum=0; //배수
function goLineup(){
	$(".btn").click(function(){
		var dir = $(this).index();
		//alert(dir); //1=왼쪽, 2=오른쪽
		$("#mList").css("transition","all 0.5s ease-out");
		if(dir==1){ //왼쪽 버튼 클릭
			lnum--;
			if(lnum==-1)lnum=0;
			$("#mList").css("left","-20"*lnum+"%");
		}//if문
		else if(dir==2){ //오른쪽 버튼 클릭
			lnum++;
			if(lnum==7)lnum=6;
			$("#mList").css("left","-20"*lnum+"%");
		}//else if문
	});//click
	
}//goLineup 함수























