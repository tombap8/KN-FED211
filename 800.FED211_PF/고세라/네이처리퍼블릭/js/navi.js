// 내비게이션 자바스크립트
$(document).ready(function(){
	"use strict";
	$("#searchBox>img").click(function(){
		$("#search").animate({"margin-right":"-10px"},400);
		$(this).parent().animate({"width":"165px"},400,function(){
			$(".search").css("display","block");
			$("#search>span").fadeIn(400);
		});
		$(this).css("marginTop","-28px");
	});//click
	$("#search>span").click(function(){
		$("#search").animate({"margin-right":"120px"},400);
		$("#search>span").fadeOut(100);
		$(".search").css("display","none");
		$("#searchBox").animate({"width":"35px"},400);
		$("#searchBox>img").css("marginTop","0px");
		$("#searchBox>input").val("");
	});//click
});//jQB