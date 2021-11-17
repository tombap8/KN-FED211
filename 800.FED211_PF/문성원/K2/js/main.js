/*전역변수 셋팅*/
var bsts = 0; // 배너 작동중 상태값 0-미작동, 1-작동중) => 광클릭 금지시키기 위한 초기작업
var scNum = 0; ///// 스크롤 페이지번호//////
var mob = 0; ////모바일여부(0-아님, 1-모바일)
var path = ""; /////모바일이미지경로
var acall, acallT;
var autocall, autocallT;

/////////////모바일인지 여부 조사//////
$(window).resize(function () {
	if ($(window).width() <= 1100) {
		mob = 1;
		path = "/mob";
	} else {
		mob = 0;
	}
});




$(document).ready(function () {
	"use strict"; //보다 엄격한 코드 검사를 위한 구문
	//////모바일 여부 조사///////
	if ($(window).width() <= 1100) {
		mob = 1;
		path = "/mob";
	} else {
		mob = 0;
	}
	/////////////////////////////////

	//////모바일일때  top버튼 보이기///
	if (mob === 1) {
		$("#tbtn").show();
	}

	/////////CSS 셋팅	 구역 /////////////
	if (mob === 0) { //DT일때만
		//남성페이지 셋팅
		$("#cont1 img").css({
			"top": "20%",
			"opacity": "0"
		});
		$("#cont1 h1").css({
			"top": "28%",
			"opacity": "0"
		});
		//여성페이지 셋팅
		$("#cont2 img").css({
			"top": "20%",
			"opacity": "0"
		});
		$("#cont2 h1").css({
			"top": "28%",
			"opacity": "0"
		});
		//KIDS 페이지 셋팅
		$("#cont3 img").css({
			"top": "20%",
			"opacity": "0"
		});
		$("#cont3 h1").css({
			"top": "28%",
			"opacity": "0"
		});
	}
	///////////////////////////////////////

	/////////////// 배너 자동호출 //////////////////
	autoFunc();
	//////////////////////////////////////////////////	


	$("#banner>ul>li:first").css("background", "url(images" + path + "/ban01.jpg) no-repeat top/cover"); /*첫번째 배너이미지 셋팅*/

	/*********  배너버튼 클릭시 이동함수 호출 *******/
	$(".abtn").click(function () {
		var idx = $(this).index(); //부모의 자식의 순번
		console.log(idx);
		if (idx === 1) {
			/*왼쪽버튼*/
			backSlide();
		} else if (idx === 2) {
			/*오른쪽버튼*/
			goSlide(1); // 파라미터를 넘겨서 버튼 호출임을 알림!!!!!
		}
	});

	///////////// 스크롤 발생시 한페이지씩 이동하기//////
	var mwEvt = (/Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel");
	////////////////// 마우스휠 이벤트 처리 ///////////////////

	var psts = 0; //////잠금용변수(0 미사용,1 사용중)
	$(document).on(mwEvt, function (e) {
		// e.preventDefault();// 기본스크롤링 막기!!!
		//////////모바일에서는 작동안되게하기/////
		if (mob === 1) {
			return true;
		}
		///////////////////////////////

		/////////만약에 현재 애니메이션이 진행중이면 잠금!!!!!
		if (psts === 1) {
			return true;
		} //돌아가세요
		psts = 1; //첫번째 온 이벤트가 잠그고 들어간다!
		///////////////////////////////////////////////////////////

		var evt = window.event || e;
		var delta = evt.detail ? evt.detail : evt.wheelDelta;
		if (/Firefox/i.test(navigator.userAgent)) {
			delta = -evt.originalEvent.detail;
		}

		if (delta > 0) { //윗방향
			scNum--;
			if (scNum === -1) {
				scNum = 0;
			} // 첫페이지 고정
		} /////////////////////////////////////////////////////////위
		else { //아랫방향
			scNum++;
			if (scNum === 6) {
				scNum = 5;
			} // 마지막번호 고정			
		} /////////////////////////////////////////////////////////아래		

		///////// 페이지 액션 함수 호출 //////////
		pageAction();

		// 페이지 위치값
		var pos = $("body>section").eq(scNum).offset().top;
		//클릭시 해당 아이디 위치로 이동

		$("html,body").animate({
			scrollTop: pos + "px"
		}, 700, "easeOutExpo", function () { //스크롤 애니메이션이 끝난후
			psts = 0; //잠금상태 해제~!!!!!
		});

		//console.log(scNum);//현재페이지번호

	}); ///////////마우스휠 이벤트 처리////////////////



	$("#top>ul>li>a").click(function (e) {
		e.preventDefault(); //기본이동막기

		/*
			스크롤바의 위치속성
			1. scrollTop -> 오른쪽 스크롤바의 top 위치값(px단위)
			2. scrollLeft -> 아래쪽 스크롤바의 left 위치값(px단위)
		*/
		/****** 클릭된 아이디의 실제 scrollTop위치값 알아내기 *******/
		var pid = $(this).attr("href"); //네비게이션 a 태그의 href에 담긴 아이디명
		//alert(pid);
		var posid = $(pid).offset().top; // 선택된 id의 top위치값 => 스크롤 top값과 일치 시킴!!!
		//alert($(pid).index());//이동할 id의 형제 순번
		// 클릭해서 이동했을때 전역변수 scNum을 변경해야함~!!!(스크롤씽크 맞춤)
		scNum = $(pid).index() - 1; //순번이 하나 적음

		////////// 페이지 액션 함수 호출!!!!////////////////
		pageAction();
		////////////////////////////////////

		//console.log("선택된id의 top값:"+posid);

		//클릭시 해당 아이디 위치로 이동
		$("html,body").animate({
			scrollTop: posid + "px"
		}, 700, "easeOutExpo", function () {
			//console.log("스크롤 이동된 후의 scrollTop값:" + $(window).scrollTop());
		});

	}); //click 이벤트



	//////////// 블릿 클릭시 배너 이동하기////////
	$("#banner>aside li").click(function () {
		var idx = $(this).index(); //블릿 li 순번
		directSlide(idx); //배너직접이동함수 호출!!!
	});

	//////////// 햄버거 버튼 클릭시 애니메이션 ///////////
	var hamsts = 0; //햄버거 버튼 상태값(0-닫힘, 1-열림)
	$("#ham").click(function () {
		if (hamsts === 0) {
			///////햄버거 버튼 액션//////
			$("#ham div").eq(0).css({
				"top": "10px",
				"transform": "rotate(45deg)"
			});
			$("#ham div").eq(1).css({
				"width": "0",
				"left": "20px"
			});
			$("#ham div").eq(2).css({
				"top": "10px",
				"transform": "rotate(-45deg)"
			}); //////////// 햄버거 버튼 액션////////////////
			///////// 메뉴 변경 애니메이션/////
			$("#menu").animate({
				width: "100%"
			}, 800, function () {
				hamsts = 1; //상태값 변경
			});
		} ////////if문//////////
		else if (hamsts === 1) {
			///////햄버거 버튼 액션//////
			$("#ham div").eq(0).css({
				"top": "0px",
				"transform": "rotate(0deg)"
			});
			$("#ham div").eq(1).css({
				"width": "35px",
				"left": "0px"
			});
			$("#ham div").eq(2).css({
				"top": "20px",
				"transform": "rotate(0deg)"
			}); //////////// 햄버거 버튼 액션////////////////
			///////// 메뉴 변경 애니메이션/////
			$("#menu").animate({
				width: "0%"
			}, 800, function () {
				hamsts = 0; //상태값 변경
			});
		} //////else if문////////

	}); //////////////햄버거 클릭시//////////////////


	//위로 이동버튼 클릭시 맨위로 
	$("#tbtn").click(function () {
		$("html,body").animate({
			scrollTop: 0
		}, 800, function () {
			if (mob = 0) { // DT일때만 실행
				scNum = 0; //전역변수초기화
				pageAction(); //메뉴변경 등 액션 담당 함수 호출!!
			}
		});
	}); /////위로이동/////	


	///////////// 모바일 일때 터치 스와이프 되도록 기능 /////////////
	if (mob === 1) {
		$("#banner>ul").swipe({
			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
				if (direction === "left") {
					goSlide(1); //오른쪽 버튼 클릭
				} else if (direction === "right") {
					backSlide(); //왼쪽 버튼 클릭
				} else if (direction === "up") { //위로 쓸면 아래로 스크롤 되게
					$("html,body").animate({
						scrollTop: "200px"
					}, 400);
				} else if (direction === "down") { //아래로 쓸면 위로 스크롤 되게
					$("html,body").animate({
						scrollTop: "0px"
					}, 400);
				}
			}
		});
	} ///////////// 터치 스와이프 if문



}); ///////////////////////////////////////////////////////////// jQB

/*
	함수명 : goSlide
	기능 : 메인 배너 이미지 슬라이드 하기
			이미지를 먼저 만들고... 자리로 들어오고.... 지우는 방식
*/

var bnum = 1; //배너 이미지 순번
function goSlide(sts) { //sts - 자동호출인지 여부(0-자동, 1-클릭)
	"use strict";

	// 함수 잠금장치 => 광클릭 금지
	if (bsts === 1) {
		return true;
	} // 돌아갓~!!!
	bsts = 1; // 상태값 변경

	// 배너순번 증가
	bnum++;
	if (bnum === 5) {
		bnum = 1;
	} //한계수

	//배너 ul의 자식으로 li를 뒤에 추가함
	$("#banner>ul").append("<li></li>").find("li").last().css("background", "url(images" + path + "/ban0" + bnum + ".jpg) no-repeat top/cover");
	//append는 앞에 요소를 그대로 두고 뒤에 추가하는 기능

	// 배너 슬라이드 이동 및 첫번째 li를 지우기
	$("#banner>ul").animate({
			left: "-100%"
		}, 1500, "easeOutQuint",
		function () {
			$(this).find("li").first().remove(); //첫번째 li제거
			$(this).css("left", "0"); //위치값 초기화
			bsts = 0; // 함수 잠금장치 풀기 
		});

	//블릿 변경하기
	$("#banner>aside li").eq(bnum - 1).css("background-position", "0 -12px").siblings().css("background-position", "0 0");

	////// 버튼 클릭시 일정시간 후 자동실행 하기
	if (sts == 1) {
		clearInterval(acall);
		clearTimeout(acallT);
		acallT = setTimeout("autoFunc()", 5000);
	}

} /////////////////////// goSlide 함수

/*
	함수명 : autoFunc
	기능 : 배너 자동실행 함수
*/
function autoFunc() {
	acallT = setInterval("goSlide(0)", 3000);
} /////////// autoFunc 함수

/*
	함수명 : backSlide
	기능 : 메인 배너 이미지 슬라이드 하기
			이미지를 먼저 만들고... 자리로 들어오고.... 지우는 방식
*/
function backSlide() {
	"use strict";

	//함수 잠금장치
	if (bsts === 1) {
		return true;
	} //돌아가세요
	bsts = 1; //상태값 변경

	//배너 순번 감소
	bnum--;
	if (bnum === 0) {
		bnum = 4;
	} //한계수

	// 배너 ul의 자식으로 li를 앞에 추가함
	$("#banner>ul").prepend("<li></li>").css("left", "-100%").find("li").first().css("background", "url(images" + path + "/ban0" + bnum + ".jpg) no-repeat top/cover");
	//prepend는 뒤에 요소를 그대로 두고 앞에 추가하는 기능

	// 배너 슬라이드 이동 및 마지막 li를 지우기
	$("#banner>ul").animate({
			left: "0%"
		}, 2000, "easeOutQuint",
		function () {
			$(this).find("li").last().remove(); //마지막 li제거 => 아래부분 위치값 초기화 하는 부분은 필요없음~!!
			bsts = 0; // 함수 잠금장치 풀기 
		});

	//블릿 변경하기
	$("#banner>aside li").eq(bnum - 1).css("background-position", "0 -12px").siblings().css("background-position", "0 0");

	//자동호출 지우기, 일정시간 후 다시 자동호출
	clearInterval(acall);
	clearTimeout(acallT);
	acallT = setTimeout("autoFunc()", 5000);



} //backSlide 함수

/*
	함수명 : directSlide
	기능 : 블릿을 클릭했을 때 배너를 바로 이동하기
*/


function directSlide(snum) { //snum 현재 클릭된 블릿순번
	"use strict";

	//함수 잠금장치
	if (bsts === 1) {
		return true;
	} ///돌아가세요
	bsts = 1; //상태값 변경

	//alert(snum);
	var diff = (bnum - 1) - snum;
	// 현재순번- 클릭된 순번
	// 음수가 나오면 오른쪽버튼 클릭효과
	// 양수가 나오면 왼쪽버튼 클릭효과
	//alert(diff);
	if (diff < 0) { //오른쪽에서 이동
		// 배너 ul의 자식으로 li를 뒤에 추가함
		$("#banner>ul").append("<li></li>").find("li").last()
			.css("background", "url(images" + path + "/ban0" + (snum + 1) + ".jpg) no-repeat top/cover");
		//prepend는 뒤에 요소를 그대로 두고 앞에 추가하는 기능

		//배너 슬라이드 이동 및 첫번째 li 지우기
		$("#banner>ul").animate({
				left: "-100%"
			}, 1500, "easeOutQuint",
			function () {
				$(this).find("li").first().remove(); //마지막 li제거 => 아래부분 위치값 초기화 하는 부분은 필요없음~!!
				$(this).css("left", "0"); //위치값 초기화
				bsts = 0; //잠금상태풀기
			});
	} ////////////////////////////////////////////////////////  if문 : 오른쪽에서 이동
	else if (diff > 0) { //왼쪽에서 이동
		// 배너 ul의 자식으로 li를 앞에 추가함
		$("#banner>ul").prepend("<li></li>").css("left", "-100%").find("li").first().css("background", "url(images" + path + "/ban0" + (snum + 1) + ".jpg) no-repeat top/cover");
		//prepend는 뒤에 요소를 그대로 두고 앞에 추가하는 기능

		// 배너 슬라이드 이동 및 마지막 li를 지우기
		$("#banner>ul").animate({
				left: "0%"
			}, 1500, "easeOutQuint",
			function () {
				$(this).find("li").last().remove(); //마지막 li제거 => 아래부분 위치값 초기화 하는 부분은 필요없음~!!
				bsts = 0; // 함수 잠금장치 풀기 
			});
	} ////////////////////////////////////////////////////////  else if 문 : 왼쪽에서 이동


	///////// 클릭된 블릿 순번을 전역 변수인 bnum에 업데이트!!!!!!!!!!!!!!!!!!
	bnum = snum + 1; // 현재 변경된 슬라이드 번호
	// 블릿변경하기
	$("#banner>aside li").eq(bnum - 1).css("background-position", "0 -12px").siblings().css("background-position", "0 0");


	clearInterval(acall);
	clearTimeout(acallT);
	acallT = setTimeout("autoFunc()", 5000);
} //directSlide 함수

/*
	함수명 : pageAction
	기능 : 각 페이지별 액션 주기
*/
function pageAction() {
	"use strict";
	// 1. 첫페이지에서만 상단메뉴가 투명배경 두껍게표시
	// 다른 하위 페이지에서는 반투명배경에 얇게 표시
	if (scNum === 0) { //1번 페이지
		$("#top>.obg").fadeTo(200, 0);
		$("#top>img").animate({
			width: "6%",
			marginTop: "3%"
		}, 200);
		$("#top>ul>li>a").css("color", "#fff"); //메뉴 글자색 모두 흰색

		$("#tbtn").fadeOut(300); //탑버튼 사라짐
	} //if
	else { //그 밖에 페이지
		$("#top>.obg").fadeTo(200, 0.4);
		$("#top>img").animate({
			width: "4%",
			marginTop: "1.2%"
		}, 200);

		//////////// 메뉴 글자 색상 변경 /////////
		$("#top>ul>li>a").eq(scNum - 1).css("color", "#fbea98").parent().siblings().find("a").css("color", "#fff");

		$("#tbtn").fadeIn(300); //탑버튼 나타남
	} //////// else /////////////

	//////////// 각 페이지 액션 ///////////////////
	if (scNum === 1) {
		/*남성페이지*/
		$("#cont1 img").animate({
			"top": "0%",
			"opacity": "1"
		}, 1200);
		$("#cont1 h1").delay(300).animate({
			"top": "45%",
			"opacity": "1"
		}, 1000);

	} else if (scNum === 2) {
		/*여성페이지*/
		$("#cont2 img").animate({
			"top": "0%",
			"opacity": "1"
		}, 1200);
		$("#cont2 h1").delay(300).animate({
			"top": "45%",
			"opacity": "1"
		}, 1000);

	} else if (scNum === 3) {
		/*KIDS페이지*/
		$("#cont3 img").animate({
			"top": "0%",
			"opacity": "1"
		}, 1200);
		$("#cont3 h1").delay(300).animate({
			"top": "45%",
			"opacity": "1"
		}, 1000);

	}
} //pageAction함수



var acall; // 자동슬라이드 호출용 전역변수
$(document).ready(function () {
	acall = setInterval("flowImg()", 20);

	//마우스가 오버시 멈춤, 아웃시 다시 실행
	$("#flowImg").hover(
		function () { //over
			clearInterval(acall);
		},
		function () { //out
			acall = setInterval("flowImg()", 20);
		});
}); ///////////////jQB


/*
	함수명 : flowImg
	기능 : 이미지를 왼쪽으로 이동하여 계속 흐름
*/
var fnum = 0; //이동픽셀수 전역변수
function flowImg() {
	var iw = $("#flowImg img").first().width(); //이미지하나의width
	fnum++;
	if (fnum >= iw) {
		$("#flowImg").append($("#flowImg li")
			.first()).css("left", "0");
		fnum = 1; //초기화
	}
	$("#flowImg").css("left", -fnum + "px")
} /////flowImg함수///