// JavaScript Document

///////////////////// 모바일/DT 페이지 자동넘기기//////////////////////////
var winW = $(window).width();//현재 브라우저 가로폭(숫자로된 px단위)
if(winW <= 1100){
	location.href = "mob/index.html";//DT index페이지로 감
}
$(window).resize(function(){//창크기를 변경할 경우 다시 체크~!
	var winW = $(window).width();//현재 브라우저 가로폭(숫자로된 px단위)
	if(winW <= 1100){
		location.href = "mob/index.html";//DT index페이지로 감
	}
});
///////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
	
		$("#inst li a").click(function(e){
			e.preventDefault();//a링크 기본이동 막기!
			var seq = $(this).parent().index();//li의 순번
			switch(seq){
				case 0: window.open().location.href 
				= "https://www.instagram.com/americanapparelusa/"; break;
				case 1: window.open().location.href 
				= "https://www.instagram.com/americanapparelusa/"; break;
				case 2: window.open().location.href 
				= "https://www.instagram.com/americanapparelusa/"; break;
				case 3: window.open().location.href 
				= "https://www.instagram.com/p/BIf65M8Aauz/?taken-by=americanapparelusa"; break;
				case 4: window.open().location.href 
				= "https://www.instagram.com/americanapparelusa/"; break;
				case 5: window.open().location.href 
				= "https://www.instagram.com/americanapparelusa/"; break;
				case 6: window.open().location.href 
				= "https://www.instagram.com/p/BDl6Q5eHLwe/?taken-by=americanapparelusa"; break;
				case 7: window.open().location.href 
				= "https://www.instagram.com/americanapparelusa/"; break;
				case 8: window.open().location.href 
				= "https://www.instagram.com/americanapparelusa/"; break;
			}
		}); //click
		
		$("#now").css("cursor","pointer").click(function(){
			//alert("홈으로!");
			window.location.href = "main.html";
		});//click
	
	}); //jQB


///////////////////////////////////////////////////////////////시간표시
$(document).ready(function(){
		setInterval("showTime()",1000);
	});//jQB
	function showTime(){
		var ndate = new Date();
		$("#time").html(ndate.getDate()+"-"+(ndate.getMonth()+1)+"-"+ndate.getFullYear()+" "+ndate.getHours()+":"+ndate.getMinutes()+":"+ndate.getSeconds());
	}

