// 포스코 건설 공통 js
var psts=0; //함수 사용중 여부 전역변수 (휴식-0, 사용-1) : 사용중인경우 클릭 못하게하기 (광클방지 잠금장치)
var lck=0; //언어선택창 클릭 시 창 열고닫기 (닫은상태-0, 연 상태-1)
var sck=0; //SNS창 클릭 시 창 열고닫기 (닫은상태-0, 연 상태-1)
var fck=0; //계열사 바로가기 클릭 시 창 열고닫기 (닫은상태-0, 연 상태-1)


$(document).ready(function() {
	//GNB 마우스오버 시
		$("#gnb").hover(
			function(){//오버시
				$("#top>div:first-of-type").css("opacity","0");//검은배경 안보이게
				$("#gnbline").css("opacity","1");//gnbline 보이게
				$("#logo").css("background-position","bottom");//로고 색상 변경
				$("#gnb dt>a").css("color","#000");//메인메뉴 글자색 변경
				$("#top").css({"height":"350px","background-color":"#fff"});//상단바 전체 내려오기
			},
			function(){//아웃시
				$("#top>div:first-of-type").css("opacity","0.2");//검은배경 보이게
				$("#gnbline").css("opacity","0");//gnbline 안보이게
				$("#logo").css("background-position","top");//로고 색상 복원
				$("#gnb dt>a").css("color","#fff");//메인메뉴 글자색 변경
				$("#top").css({"height":"80px","background-color":"transparent"});//상단바 전체 올라가기
			});
	//GNB 각 dl에 마우스오버 시
	$("#gnb>dl").hover(
		function(){//오버시
			var idx=$(this).index();
			//console.log(idx);
			$("#gnb>dl").eq(idx).children("dt").children("a").css({"height":"78px","border-bottom":"2px solid #003f63","color":"#003f63"});//메인메뉴 밑줄,글자색 변경
			//$("#gnb>dl").eq(idx).children("dt").children("a").css("color","#003f63");//메인메뉴 글자색 변경
			$("#gnb>dl").eq(idx).children("dd").first().css({"background-position":"bottom"});//아이콘 색상 변경
		},
		function(){//아웃시
			var idx=$(this).index();
			//console.log(idx);
			$("#gnb>dl").eq(idx).children("dt").children("a").css({"height":"80px","border-bottom":"none","color":"#000"});//메인메뉴 밑줄 제거
			//$("#gnb>dl").eq(idx).children("dt").children("a").css("color","#000");//메인메뉴 글자색 복원
			$("#gnb>dl").eq(idx).children("dd").first().css({"background-position":"top"});//아이콘 색상 복원
	});
	
	//언어선택창 클릭 시
	$("#lang>a").click(function(e){
		e.preventDefault();//기본이동 막기
		if(lck==0){
			lck=1;
			$(this).html("KOR ▲").css({"background-color":"#f2f2f2","height":"30px"});
			$(this).parent().css({"height":"240px","background-color":"#fff"});//선택가능한 언어 보이기
		}
		else if(lck==1){
			lck=0;
			$(this).html("KOR ▼").css({"background-color":"transparent","height":"100%"});
			$(this).parent().css({"height":"30px","background-color":"transparent"});//선택가능한 언어 숨기기
		}
	});
	//선택가능한 언어에 마우스오버 시
	$("#lang>ul>li>a").hover(
		function(){//오버시
			$(this).css({"background-color":"#003f63","color":"#fff"});//배경색, 글자색 변경
		},
		function(){//아웃시
			$(this).css({"background-color":"transparent","color":"#999"});//배경색, 글자색 복원
	});
	
	//SNS 선택창 클릭 시
	$("#sns").click(function(e){
		e.preventDefault();//기본이동 막기
		if(sck==0){
			sck=1;//열기
			if(fck==1){
				fck=0;//계열사 바로가기 창 열려있는 경우 닫기
				$("#fsite").css({"background-color":"transparent","border-top":"1px solid #ccc"}).children("div").css("background-position","top").siblings("span").css("font-weight","normal");//선택창 디자인 복원
				$("#fsite").children("ul").css({"height":"0px","border":"none"});//선택가능한 sns ul 숨기기
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
	
	//계열사 바로가기 클릭 시
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
			$(this).children("ul").css({"border":"1px solid #ccc","border-bottom":"none","height":"auto"});//선택가능한 sns ul 보이기
		}
		else if(fck==1){
			fck=0;
			$(this).css({"background-color":"transparent","border-top":"1px solid #ccc"}).children("div").css("background-position","top").siblings("span").css({"font-weight":"normal","color":"#333"});//선택창 디자인 복원
			$(this).children("ul").css({"height":"0px","border":"none"});//선택가능한 sns ul 숨기기
		}
	});
	
	
	
	
});//jQB

