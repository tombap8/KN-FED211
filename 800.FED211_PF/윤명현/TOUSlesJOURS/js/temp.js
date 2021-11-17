// JavaScript Document

$(document).ready(function(e) {
	

	///////////////////////// 로고 클릭시 홈으로 설정///////////////////////
	$(".logo>ul>li>img").first().css("cursor","pointer").click(function(){
		location.href = "index.html";
	});/////로고 클릭 홈으로////////

	$("#navibar>ul>li:nth-child(4)").click(function(){
		location.href = "sub1.html";
	});

	$("#navibar>ul>li:nth-child(2)>ul>li:nth-child(2)").click(function(){
		location.href="sub2.html";
	});
	
	$("#navibar>ul>li:nth-child(3)>ul>li:nth-child(1)").click(function(e){
		e.preventDefault();
		location.href="sub3.html";
	});
	
	
	
	//////////////////   풋터 링크페이지  /////////////
	$(".right>li>img").click(function(){
		var cimg = $(this).attr("alt");/*attr(단어)= 괄호안에 값이 들어가는 모든걸 캐치한다.*/
		//alert(cimg);
		//페이지이동
		switch(cimg){
			case "image1":window.open().location.href="http://www.spcsamlip.co.kr/";break;
			case "image2":window.open().location.href="https://www.dunkindonuts.co.kr/";break;
			case "image3":window.open().location.href="https://www.caffe-pascucci.co.kr/";break;
			case "image4":window.open().location.href="http://www.happypointcard.com/";break;
			case "image5":window.open().location.href="http://www.baskinrobbins.co.kr/";break;
			case "image6":window.open().location.href="http://www.spcsamlip.co.kr/";break;
		}//스위치문
		
	});//click
	
	
	
});//jQB/////////////////////////////////////////