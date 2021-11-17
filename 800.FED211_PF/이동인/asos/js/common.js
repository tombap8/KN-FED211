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
			window.location.href = "main.html";
		});//click
		
		$("#tb").click(function(){
				$("html,body").animate({scrollTop:0},500);
		});
	
	}); //jQB

window.onload=function(){
	var mmenu = document.getElementById("mmenu").getElementsByTagName("dt");
	mmenu.item(0).onclick=function(){location=href="sub1.html";}
	mmenu.item(1).onclick=function(){location=href="sub2.html";}
	mmenu.item(2).onclick=function(){location=href="sub3.html";}
	mmenu.item(3).onclick=function(){location=href="sub4.html";}
	
	var tmenu = document.getElementById("tmenu").getElementsByTagName("li");
	tmenu.item(3).onclick=function(){location=href="login.html";}
}

