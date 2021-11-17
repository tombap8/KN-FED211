// JavaScript Document


$(document).ready(function() {

	
    $(".tap>ul li").click(function(){
		var idx=$(this).index();// 탭메뉴 순번
		$(".tapimg img").attr("src","imges/sub2_menu"+(idx+1)+".png").css("opacity","1");	
	});// click
	
	$(".tap>ul li").click(function(){
		$(this).css("background-position", "-80px 0px")
		.siblings().css("background-position", "0px 0px");
	});
	
	////////    TOP버튼클릭시 위로 이동 /////////////

$("#topnav").click(function(e){
	e.preventDefault();
	$("html,body").animate({scrollTop:0},800);
});
////////////////////////////////////////////////	
	
});//jQB

