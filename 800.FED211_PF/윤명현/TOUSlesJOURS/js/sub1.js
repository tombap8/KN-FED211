// JavaScript Document
$(document).ready(function(e) {
	$("a").click(function(e){
		e.preventDefault();
	});
	
	
	//영상 갤러리 사진클릭시 테두리 색깔 채우기기
	var pidx = $("#mlist>ul>li>a>img").index;
	
	$("#mlist>ul>li>a>img").click(function(){
		var idx = $(this).parent().parent().index();
//		alert(idx);
		$(this).css({"border":"4px solid #0074d7","border-radius":"15px"})
		.parent().parent().siblings().find("a>img").css({"border":"4px solid #797979","border-radius":"15px"});
		
		$("#pbox>p").eq(idx).css("display","block").siblings().css("display","none");
		
	});//click
	
	$("#mlist>ul>li>a>img").click(function(){
		
	});//click
	
	
	
	
	
});	//jQB

	function goMv(code){//code는 변수임-동영상고유코드를 담는 변수
		//alert(먹이);
		
		document.getElementById("myVideo").src = "https://www.youtube.com/embed/"+code+"?autoplay=1/loop ";
		//스크린을 위로 올려주기(z-index)-> 스크린 커버가 덮고 있으므로
		document.getElementById("screen").style.zIndex = 1;
		
	};
