// JavaScript Document

$(document).ready(function() {
		
	//////////////////SNS 클릭시 새창 이동//////////////////////
		$("#icons li a").click(function(e){
			e.preventDefault();//a링크 기본이동 막기!
			var seq = $(this).parent().index();//li의 순번
			switch(seq){
				case 0: window.open().location.href 
				= "https://www.facebook.com/AmericanApparel"; break;
				case 1: window.open().location.href 
				= "https://www.instagram.com/americanapparelusa/"; break;
				case 2: window.open().location.href 
				= "http://americanapparel.tumblr.com/"; break;
				case 3: window.open().location.href 
				= "https://kr.pinterest.com/americanapparel/"; break;
			}
		}); //click
		
		$("#logo").css("cursor","pointer").click(function(){
			//alert("홈으로!");
			window.location.href = "index.html";
		});//click
	
	///////////탭메뉴 클릭시 변경하기///////////
	$("#tabmenu>ul>li>a").click(function(e){
		e.preventDefault();//a링크 기본이동막기
		var seq = $(this).parent().index();//클릭한 li의 순번(0부터셈)
		// parent()는 선택요소의 부모요소로 이동함!
		//alert(seq);
		//클릭된 탭 메뉴 디자인변경(클릭된 a링크 글자,배경색변경 , 부모li의 아래테두리)
		$(this).css({"background-color":"#fde9f2"})//클릭된 a디자인변경
		.parent().siblings().find("a").css({"background-color":"#eeeeee"});
		//클릭된a의 부모 li의 형제 li의 자식 a의 css 디자인변경
		$(this).parent()//클릭된 a의 부모 li 디자인변경
		.siblings().css({"backgroune-color":"#eeeeee"});
		//클릭된 a의 부모 li의 형제 li의 디자인변경
		
		
		// 탭메뉴 li의 순번은 곧!!!!!!!! 탭컨텐츠 div의 순번과 같다!!!!!
		//show()에 시간이 없으면 display보이기
		$("#tabmenu>section>nav").eq(seq).show()//클릭된 순번과 같은 div 보이게
		.siblings().hide();//나머지 형제div는 모두 안보이게
	});//탭메뉴클릭시
	
	
	var hamsts = 0; //햄버거 버튼 상태값(0-닫힘, 1-열림)
	$("#ham").click(function(){
		
		if(hamsts===0){
			///////햄버거 버튼 액션//////
			$("#ham div").eq(0).css({"top":"10px","transform":"rotate(45deg)"});
			$("#ham div").eq(1).css({"width":"0","left":"0px"});
			$("#ham div").eq(2).css({"top":"10px","transform":"rotate(-45deg)"}); //////////// 햄버거 버튼 액션////////////////
			///////// 메뉴 변경 애니메이션/////
			$("#menu").animate({left:"0%"},800,function(){
				$("body").css("overflow-y","hidden"); //스크롤막기
				hamsts=1;//상태값 변경
			});
		}////////if문//////////
		else if(hamsts===1){
			///////햄버거 버튼 액션//////
			$("#ham div").eq(0).css({"top":"0px","transform":"rotate(0deg)"});
			$("#ham div").eq(1).css({"width":"100%","left":"0px"});
			$("#ham div").eq(2).css({"top":"20px","transform":"rotate(0deg)"});///////////// 햄버거 버튼 액션////////////////
			///////// 메뉴 변경 애니메이션/////
			$("#menu").animate({left:"100%"},800,function(){
				$("body").css("overflow-y","visible"); //스크롤막기
				hamsts=0;//상태값 변경
			});
		}//////else if문////////	
		
	});//////////////햄버거 클릭시//////////////////	
	
	$("#Bo").click(function(){
		window.location.href = "sub.html";
	});
	
	$("#tb").click(function(){
			$("html,body").animate({scrollTop:0},500);
		});
	
	}); //jQB