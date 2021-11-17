// 포스코건설 모바일 메인 페이지 js

var autocall;//setInterval용 변수
var autocallT; //setTimeout용 변수
var lck=0; //언어선택창 클릭 시 창 열고닫기 (닫은상태-0, 연 상태-1)
var sck=0; //SNS창 클릭 시 창 열고닫기 (닫은상태-0, 연 상태-1)
var fck=0; //계열사 바로가기 클릭 시 창 열고닫기 (닫은상태-0, 연 상태-1)


//////////////// 모바일/DT 페이지 자동넘기기 ///////////////////
var winW=$(window).width();//현재 브라우저 가로폭(숫자로된 px단위)
if(winW>1100){
	location.href="../index.html";//DT index페이지
}
$(window).resize(function(){//창크기를 변경할 경우 다시 체크
	var winW=$(window).width();//현재 브라우저 가로폭(숫자로된 px단위)
	if(winW>1100){
	location.href="../index.html";//DT index페이지
	}
});

//////////////// 모바일/DT 페이지 자동넘기기 끝 ///////////////////


$(document).ready(function() {
	////////////////햄버거 클릭 시 메뉴 등장 ///////////////
	$("#ham").click(function(){	
		$("body,#top").css({"right":"80%"});//기존 메인 숨기기
		$("#menu").css({"right":"0%"}).children("#gnbbg").delay(300).animate({"opacity":"0.6"},300);//메뉴 등장
	});
	///////////////닫기버튼 혹은 배경 클릭 시 메뉴 닫기 ///////////////
	$("#close,#gnbbg").click(function(){	
		$("#gnbbg").css({"opacity":"0"});//배경 지우기
		$("#menu").css("right","-100%");//메뉴 지우기
		$("body,#top").css({"right":"0%"});//기존 메인 보이기
		
		
		//메인,서브메뉴 처음 것만 보이기
		$(".sub").hide();//모든 서브메뉴 숨기기
		$(".sub").first().show();//첫번째 서브메뉴 보이기
		
		
		if(lck==1){////언어선택창이 열린경우 닫기
			lck=0;//닫기
			$("#lang>a").html("KOR ▼").css({"height":"100%"});
			$("#lang>a").parent().css({"height":"30px","background-color":"transparent"});//선택가능한 언어 숨기기
		}//if문
		
	});
	
	
	////////////////메뉴에서 언어선택창 클릭 시///////////////
	$("#lang>a").click(function(e){
		e.preventDefault();//기본이동 막기
		if(lck==0){//닫힌경우
			lck=1;//열기
			$(this).html("KOR ▲").css({"height":"30px"});
			$(this).parent().css({"height":"240px","border":"1px solid #ccc","right":"50px","top":"9px"});//선택가능한 언어 보이기
		}
		else if(lck==1){//열린경우
			lck=0;//닫기
			$(this).html("KOR ▼").css({"height":"100%"});
			$(this).parent().css({"height":"30px","border":"none","right":"51px","top":"10px"});//선택가능한 언어 숨기기
		}
	});
	
	
	//////////////메인메뉴 클릭 시 서브메뉴 보이기 ////////////////
	 $(".sub").hide();//모든 서브메뉴 숨기기
	$(".sub").first().show();//첫번째 서브메뉴 보이기
	
	///////// .title을 클릭하면 다음요소인 sub가 슬라이드 애니메이션된다.
	$(".title").click(function(){
		if($(this).next().css("display")=="none"){//닫힌 메뉴에만 작동! 이미 열려있는 경우 작동되지 않도록
			$(this).children("a").children("div").css("background-position","bottom").parent().parent().parent().siblings().children(".title").children("a").children("div").css("background-position","top");//화살표 변경
			$(".sub:visible").slideUp(400);//현재 열려서 보이는 서브메뉴 닫기
			$(this).next().slideDown(400);;//선택된 sub메뉴 열기
		}
		else{//서브메뉴가 열려있는 경우 닫기
			$(this).children("a").children("div").css("background-position","top").parent().parent().parent().siblings().children(".title").children("a").children("div").css("background-position","top");//화살표 변경
			$(this).next().slideUp(400);
		}
		
	});
	
	
	
	
	//////////////배너자동넘김/////////////////////
	autoFunc(); 
	
	/////////////////배너 swipe 시 배너이동 /////////////////	
		$("#slider,.opbg,.maintxt").swipe({
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			if(direction=="left"){
				clearInterval(autocall);
				fadeSlide("R");
			}
				
			else if(direction=="right"){
				clearInterval(autocall);
				fadeSlide("L");				
			}
		}
	  });
	
	//////////////////Main 페이지 불릿을 클릭했을 때 해당 배너로 이동///////////////////
	$(".bul").click(function(){
		//alert($(".bul").css("background-color"));
		if($(this).css("background-color")=="rgb(255, 255, 255)")return false;//클릭된 불릿 광속클릭 방지
		else{
			var idx=$(this).index(); //이미지 순번(숫자)
			//alert(idx);
			//var bsts=0;//////잠금용변수(0 미사용,1 사용중)
			
			//자동실행 멈춤
			clearInterval(autocall);
			
			//넘기기함수 호출
			fadeSlide(idx); //해당 슬라이드 번호를 파라미터로 넘김
		}
	});//click
	
	
	
	
	
	////////////////////Recruit 직무소개 탭 클릭 시 사진 변경////////////////////
	$("#jobintro>ul>li:first-child").click(function(){//첫번째 탭(건설) 클릭
		$(this).css({"color":"#fff","font-weight":"bold","background-color":"#003f63"}).siblings().css({"color":"#000","font-weight":"normal","background-color":"#ddd"});//탭 디자인 변경
		$(".encSlider").css("left","20px");//left값 원상복귀
		$("#poscoc").show();//포스코건설 사진박스 보이기
		$("#poscoe").hide();//엔지니어링 사진박스 숨기기
	});
	$("#jobintro>ul>li:last-child").click(function(){//두번째 탭(엔지니어링) 클릭
		$(this).css({"color":"#fff","font-weight":"bold","background-color":"#003f63"}).siblings().css({"color":"#000","font-weight":"normal","background-color":"#ddd"});//탭 디자인 변경
		$(".encSlider").css("left","20px");//left값 원상복귀
		$("#poscoe").show();//엔지니어링 사진박스 보이기
		$("#poscoc").hide();//건설 사진박스 숨기기
	});
	
	///////////////////Recruit 직무소개 swipe 이동//////////////////	
		$(".poscoenc").swipe({
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
				event.preventDefault();
				event.stopPropagation();
			if(direction=="left"){//왼쪽 swipe (오른쪽으로 이동)
				//alert(11);
				var mpos=$(this).children(".encSlider").offset().left;//왼쪽 한계수치
				var fpoint=$(window).width()-20; //오른쪽 한계수치(화면크기-20px)
				var lpoint=$(this).children(".encSlider").width()-fpoint;//마지막 이미지 위치 한계값 (이미지 전체 width-오른쪽 한계수치)
				//alert(-mpos+"/"+lpoint);
				if(lpoint<0)return false;//이미지 전체 width보다 화면이 더 크므로 이동하지 않는다.

				if(mpos-300<=-lpoint){//left값이 한계값보다 멀리 가면
					$(this).children(".encSlider").css("left",-lpoint+"px");//한계값 고정
				}
				else{
					$(this).children(".encSlider").css({left:-300+mpos+"px"});//오른쪽으로 슬라이드
				}//else
			}//왼쪽 swipe
			else if(direction=="right"){//오른쪽 swipe (왼쪽으로 이동)
				//alert(22);
				var mpos=$(this).children(".encSlider").offset().left;//왼쪽 한계수치
				//alert(mpos);
				if(mpos+300>=20){//left가 20px보다 커지면 고정 (300을 추가하지 않으면 한계에 도달했을 시 if문이 인식되지 않아 left 한번 더 당겨짐, 그래서 미리 300을 추가해 놓은 것)
					$(this).children(".encSlider").css({left:"20px"});
				}
				else{
					$(this).children(".encSlider").css({left:300+mpos+"px"});//왼쪽으로 슬라이드
				}//else
			}//오른쪽 swipe
		}//swipe:function
	  });//swipe
	
	
	
	
	//////////////////SNS 선택창 클릭 시////////////////////
	$("#sns").click(function(e){
		e.preventDefault();//기본이동 막기
		if(sck==0){
			sck=1;//열기
			if(fck==1){
				fck=0;//계열사 바로가기 창 열려있는 경우 닫기
				$("#fsite").css({"background-color":"transparent","border-top":"1px solid #ccc"}).children("div").css("background-position","top").siblings("span").css("font-weight","normal");//선택창 디자인 복원
				$("#fsite").children("aside").css({"height":"0px","border":"none"});//선택가능한 sns ul 숨기기
			}
			$(this).css({"background-color":"#fff","border-top":"1px solid #fff"}).children("div").css("background-position","bottom").siblings("span").css({"font-weight":"bold","color":"#003f63"});//선택창 디자인 변경
			$(this).children("ul").css({"border":"1px solid #ccc","border-bottom":"none","height":"auto"});//선택가능한 sns ul 보이기
		}
		else if(sck==1){
			sck=0;//닫기
			$(this).css({"background-color":"transparent","border-top":"1px solid #ccc"}).children("div").css("background-position","top").siblings("span").css({"font-weight":"normal","color":"#333"});//선택창 디자인 복원
			$(this).children("ul").css({"height":"0px","border":"none"});//선택가능한 sns ul 숨기기
		}
	});
	
	///////////////////////계열사 바로가기 클릭 시////////////////////
	$("#fsite").click(function(e){
		e.preventDefault();//기본이동 막기
		if(fck==0){
			fck=1;//열기
			if(sck==1){
				sck=0;//sns창 열려있는 경우 닫기
				$("#sns").css({"background-color":"transparent","border-top":"1px solid #ccc"}).children("div").css("background-position","top").siblings("span").css("font-weight","normal");//선택창 디자인 복원
				$("#sns").children("ul").css({"height":"0px","border":"none"});//선택가능한 sns ul 숨기기
			}
			$(this).css({"background-color":"#fff","border-top":"1px solid #fff"}).children("div").css("background-position","bottom").siblings("span").css({"font-weight":"bold","color":"#003f63"});//선택창 디자인 변경
			$(this).children("aside").css({"border":"1px solid #ccc","border-bottom":"none","height":"auto"});//선택가능한 sns ul 보이기
		}
		else if(fck==1){
			fck=0;
			$(this).css({"background-color":"transparent","border-top":"1px solid #ccc"}).children("div").css("background-position","top").siblings("span").css({"font-weight":"normal","color":"#333"});//선택창 디자인 복원
			$(this).children("aside").css({"height":"0px","border":"none"});//선택가능한 sns ul 숨기기
		}
	});
	
	
});////////////jQB//////////////






////// scroll//////////
$(window).scroll(function(){
	var sT = $(window).scrollTop();
	//console.log(sT);
	if(sT>320){//스크롤 내리면 상단바 디자인 변경
		$("#top>div:first-of-type").css({backgroundColor:"#fff",opacity:"1"}).siblings("#logo").css("background-position","bottom").siblings("#topline").css("opacity","1").siblings("#ham").children("div").children("div").css("background-color","#000");
	}
	else{//스크롤 올리면 상단바 디자인 복구
		$("#top>div:first-of-type").css({backgroundColor:"#000",opacity:"0.2"}).siblings("#logo").css("background-position","top").siblings("#topline").css("opacity","0").siblings("#ham").children("div").children("div").css("background-color","#fff");
	}
	
});/////scroll///////////




/*
	함수명 : autoFunc
	기능 : 배너 자동넘김 세팅
*/
function autoFunc(){                
    autocall=setInterval("fadeSlide('s')",5000); //슬라이드변경 함수 호출 - 자동(변수 s)
}//autoFunc

/*
	함수명 : fadeSlide()
	기능 : 배너슬라이드가 순서대로 fade효과로 넘어간다.
*/
var snum=0; //슬라이드 순번
var fsts=0;//배너함수 사용중 여부 전역변수 (휴식-0, 사용-1) : 사용중인경우 클릭 못하게하기 (광클방지 잠금장치)
function fadeSlide(sts){ //sts - 클릭,자동 구분(숫자가 넘어오면 클릭, s가 넘어오면 자동)
	//함수 작동 중 잠금장치
	if(fsts==1)return false; //하단코드를 실행하지 않고 나간다.
	fsts=1; //잠금
	//alert(sts);
	$("#slider>li").css("opacity","0");//이미지 안보이게
	$(".maintxt").fadeOut(900);//글상자 안보이게
	
	if(sts=="s"||sts=="R"){//자동호출이면 또는 오른쪽swipe 호출이면(R이 넘어온 경우)
		snum++;
		if(snum==6)snum=0; //한계수 설정
	}
	else if(sts=="L"){//왼쪽swipe 호출이면
		snum--;
		if(snum==-1)snum=5; //한계수 설정
	}
	else{//불릿클릭호출이면(숫자가 넘어온 경우)
		snum=sts; //전역변수에 현재 클릭된 번호(idx=sts)를 넣는다
	}
	
	$("#slider>li").eq(snum).css("opacity","1");//이미지 변경
	$(".maintxt").eq(snum).fadeIn(900);//글상자 변경

	//불릿 변경처리
	$(".bul").eq(snum).css("background-color","#fff").siblings().css("background-color","transparent");

	//자동넘김 호출이 아닌 경우 (클릭호출인 경우) 5초후 자동넘김 세팅 다시 실행하기
	if(sts!="s"){
		clearInterval(autocall);//자동넘김 지움
		clearTimeout(autocallT);//클릭호출 지움
		autocallT=setTimeout("autoFunc()",8000);
	}
	
	//함수 잠금장치 해제
	setTimeout(function(){fsts=0;},900);
	
}//fadeSlide함수

