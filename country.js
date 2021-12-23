$(window).resize(function () {
	$("#gnb li").css({
		lineHeight: ($(window).height() * 0.7 * 0.1) + "px"
	});
	$(".extxt").css({
		lineHeight: ($(window).height() * 0.92 * 0.1) + "px"
	});
});
$(function () {
	$("#gnb li, .colortxt").css({
		lineHeight: ($(window).height() * 0.7 * 0.1) + "px"
	});
	$(".extxt").css({
		lineHeight: ($(window).height() * 0.92 * 0.1) + "px"
	});
});

window.addEventListener("load", function () {
	var videos = document.getElementsByClassName("youtubeP");
	for (var i = 0; i < videos.length; i++) {
		var player;
		var youtube = videos[i];
		var iframe = document.createElement("iframe");
		var geturl = youtube.getAttribute("data-url")
		iframe.setAttribute("src",
			"https://www.youtube.com/embed/" + geturl +
			"?enablejsapi=1&html5-1");
		iframe.setAttribute('frameborder', 0);
		youtube.appendChild(iframe);
		youtube.onPlayerReady = function (event) {
			event.target.mute();
		}
		player = new YT.Player(youtube, {
			playerVars: {
				'width': '100%',
				'height': '100%',
				'autoplay': 1,
				'controls': 0,
				'autohide': 1,
				'wmode': 'opaque',
				'showinfo': 0,
				'loop': 1,
				'mute': 1,
				'rel': 0,
				'playlist': geturl
			},
			videoId: geturl,
			events: {
				'onReady': youtube.onPlayerReady
			}
		});
		//player
	} /// for문 ////


}); ////////// load구역 ////////////////////////
///////////////////////////////////////////////


var fnum = 0;

$(function () { /// jQB //////////////// 

	autocall = setInterval(chgcolor, 2000); //2초 후 인터발 계속!
	sautocall = setInterval("factslide(1)", 3000); // 3초 후 인터발 계속!

	///////////////////360/////////////////////////////

	for (var i = 1; i <= 50; i++) {
		$(".ex360box").append('<img class="exbox" src="images/countryman/360view/country' + i + '.jpg" alt="360view">');
	} /// for ////


	$(".exbox").hide().first().show();

	$("ex360box").click(function () {
		fnum++;
		if (fnum === 50) fnum = 0;
		$(".exbox:visible").hide();
		$(".exbox").eq(fnum).show();
	}); /////////ex360box _ click////////////


	var drag = 0;
	var point = 0; //클릭되었을때 위치값
	$(".drspace").bind("mousemove touchmove",function (e) {
		var seq = e.pageX % 2; //e.pageX- 마우스 포인터의 현재 X좌표를 3로나눈 나머지
		var num = 0; //방향 넘기기
		if (drag && !seq) { //나머지가 0이면 true로 하려고 !(Not)연산자 사용!!!
			var direc = point - e.pageX; // 방향을 알기위해 뺌
			if (direc < 0) {
				//				console.log("오른쪽이동");
				num = 0;
			} else if (direc > 0) {
				//				console.log("왼쪽이동");
				num = 1;
			}
			console.log(e.pageX);
			rotateCar(num); //0이면 오른쪽!

			//			setTimeout(function(){
			//				console.log(e.pageX);
			//				
			//			},500);
		} /// if //

	}); /////////////// mousemove ////////////////

	$(".drspace").mousedown(function (e) {
		drag = 1;
		point = e.pageX;
	}); /////////////// mousedown ////////////////

	$(".drspace").mouseup(function (e) {
		drag = 0;

	}); /////////////// mouseup ////////////////


	$(".drspace").css({
		transition: "all 5s ease-out"
	}); //css/////////


	///////////////////////////////////////////////////////
	///////////////// FAST FACT SLIDE /////////////////////
	///////////////////////////////////////////////////////

	var slidx = $(".photobox img").index();

	$(".fslide").eq(slidx).show().siblings().hide();

	$(".btnL").hover(function () { /// over /////
		$(this).text("◀");
	}, function () {
		$(this).text("◁");
	}); /// out /////
	$(".btnR").hover(function () { /// over /////
		$(this).text("▶");
	}, function () {
		$(this).text("▷");
	}); /// out /////

	/// .btnL click했을 때 이전 슬라이드 보여주기
	document.querySelector(".btnL")
		.onclick = function () {
			clearInterval(sautocall);
			clearTimeout(stcall);
			//            alert("나 왼쪽!");
      factslide(0);
    
      stcall = setTimeout(function(){
        sautocall = setInterval("factslide(1)", 3000); // 3초 후 인터발 계속!
      },5000);
			
		}; /////////// 왼쪽버튼 클릭 함수 ///////////
	document.querySelector(".btnR")
		.onclick = function () {
			clearInterval(sautocall);
			clearTimeout(stcall);
			//            alert("나 왼쪽!");
      factslide(1);
    
      stcall = setTimeout(function(){
        sautocall = setInterval("factslide(1)", 3000); // 3초 후 인터발 계속!
      },5000);
  };
	///////////////////////////////////////////////////////

	///////////////////////////////////////////////////////
	//////자동차 동그라미 블릿버튼 호버하기 //////
	///////////////////////////////////////////////////
	$(".colorbar li").hover(function () { /// over ///
		clearInterval(autocall); //인터벌 멈춤 
		var idx = $(this).index();
		console.log(idx);
		$(".ccar").eq(idx).show().siblings().hide();
	}, function () {
		autocall = setInterval(chgcolor, 2000); //2초 후 인터발 계속! 
	}); ////////// out //////////////////


	//////////////////////////////////////////////
	////////자동차 색 자동 넘김 //////////////
	/////////////////////////////////////////////
	$(".ccar").hide().first().show();

	//이미지 박스에 마우스 오버/아웃시 넘기기 멈춤 /계속하기 
	$(".self").hover(
		function () { ///over
			clearInterval(autocall); //인터벌 멈춤 
		},
		function () { ///out
			autocall = setInterval(chgcolor, 2000); //2초 후 인터발 계속! 
		}); /////////hover///////////////
	/*///////////////////////////////////////////////////////////////////////////////
					순환 fade 효과 원리
					1. 1번 이미지가 먼저 보이게 하려고 z-index :1 로 설정
					2. 2번 이미지가 안보이게 처리하고 (hide) z-index :1 로 변경  ( z-index 같으면 더 나중에 쓰인것이 보임.)
					3. 2번 이미지가 1번보다 위에 있으므로 fadeIn 애니메이션을 주면 1번을 서서히 가리면서 나타나게 된다. 
		///////////////////////////////////////////////////////////////////////////////*/

//  var winH = $(window).height();
//  var newH = Math.floor((winH - $(".sub").height())/3);
//  $(".sub").css({top:newH+"px"});
//  

}); ///// jQB ////////////////////
/////////////////////////////////
/////////////////////////////////









/*//////////////////////////////
	함수명:  rotateCar
	기능: 차돌리기
    */ //////////////////////////
function rotateCar(dir) { //방향 dir-0오른쪽, 1왼쪽
	if (dir) { /// 1이면	왼쪽
		fnum++;
		if (fnum === 50) fnum = 0;
	} else { /// 0이면 오른쪽
		fnum--;
		if (fnum === -1) fnum = 50;
	}
	$(".exbox:visible").hide();
	$(".exbox").eq(fnum).show();

} // rotateCar 함수 ///////////////////////

/*FASTS FACT 전역변수*/
var snum = 0;
var sautocall; // slide 인터발용 전역변수
var stcall;//timeout용
/*/////////////////////////////////////////
	함수명 : factslide
	기능 : slide 넘기기
//////////////////////////////////////////*/
function factslide(dir) {//dir - 방향(0-왼쪽,1-오른쪽)
  dir?snum++:snum--;
  snum===3?snum=0:snum===-1?snum=2:snum;
	$(".fslide").eq(snum).fadeIn(600).siblings().fadeOut(600);
} ///// factslide 함수 ///////////////////////


/*MAKE YOURSELF 전역변수*/
var cnum = 0;
var autocall; //인터발용 전역변수 

/*********************************************
	함수명 : chgcolor
	기능 : 차 컬러(ccar) 순서대로 fadeIn 효과 애니메이션을 준다. 
********************************************/
function chgcolor() {
	cnum++;
	if (cnum === 7) cnum = 0;
	$(".ccar").eq(cnum).show().siblings().hide();
	//	var cimg = $(".self img").first(); //1번 이미지 
	//	var nimg = cimg.next(); //2 번 이미지 
	//	//1)2번 이미지를 안보이게 하고 class="active"를 설정함
	//	//2)fadeIn 으로 애니메이션 함.
	//	//3) 애니메이션 후 1번 이미지를 잘라 맨 뒤로 이동시키고 
	//	//		class="active"도 제거한다. 
	//	nimg.hide().addClass("active").fadeIn(800, function () {
	//		$(".self").append(cimg); //맨 뒤로 옮기고 
	//		cimg.removeClass("active"); //class 지우기 
	//	}); ///fadeIn //////////////////////////////////////////


} /////////////// chgcolor 함수 ////////////////////////
