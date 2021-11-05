$(document).ready(function(){
	
//////////////////로고 클릭시 홈으로 설정
$("#top>header>aside").first().css("cursor","pointer").click(function(){
	location.href="index.html";
});//로고 클릭 홈으로
	
	
/////////////////GNB 링크 연결 설정
$("#gnb>dl>dt>a").click(function(e){
	var seq=$(this).parent().parent().index();//dl의 순번
	//alert(seq);
	switch(seq){
		case 0:location.href="sub01.html?pno=0"; break;	
		case 1:location.href="sub01.html?pno=0"; break;	
		case 2:location.href="sub03.html?pno=0"; break;	
		case 3:location.href="sub03.html?pno=0"; break;	
		case 4:location.href="sub01.html?pno=0"; break;	
		case 5:location.href="sub06.html?pno=0"; break;	
	}
});/////////////////////////GNB 상위메뉴 클릭
	
////////////////////GNB 하위메뉴 클릭시 이동 설정
$("#gnb>dl>dd>a").click(function(){
	var seq=$(this).parent().index();//하위요소 순번(1번부터)
	var idx=$(this).parent().parent().index();//상위메뉴 순번(0번부터)
	//alert(idx);
	location.href="sub0"+(idx+1)+".html?no="+(seq-1);
});//GNB 하위메뉴 클릭시
	

$(".fil").hide();/*로그인 필름 이미지 숨기기*/
$(".logbox").hover(/*로그인 오버시*/
	function(){//over
		$(".fil").slideDown(1300,"easeInOutQuad");
	},
	function(){//out
		$(".fil").slideUp(1300,"easeInOutQuad");
	});	

	

	
$("#logbg").hide();/*로그인창 숨겨두기*/
$(".logbox").click(function(){
		$("#logbg").fadeIn(500);
});//열기
$("#logbg>div").click(function(){
		$("#logbg").fadeOut(500);	
});//닫기
	
//////////// 햄버거 버튼 클릭시 애니메이션 ///////////
var hamsts = 0; //햄버거 버튼 상태값(0-닫힘, 1-열림)
$("#ham").click(function(){
	if(hamsts===0){
		///////햄버거 버튼 액션//////
		$("#ham div").eq(0).css({"top":"0px","transform":"rotate(45deg)"});
		$("#ham div").eq(1).css({"width":"0","left":"20px"});
		$("#ham div").eq(2).css({"top":"0px","transform":"rotate(-45deg)"});//////////// 햄버거 버튼 액션////////////////
		///////// 메뉴 변경 애니메이션/////
		$("#menu").animate({width:"100%"},800,function(){
			$("body").css("overflow-y","hidden");/*메뉴창 열렸을때 원래 페이지 스크롤 막기*/
			$("#menu").css("overflow-y","visible");/*메뉴창의 스크롤은 움직이게*/
			hamsts=1;//상태값 변경
		});
	}////////if문//////////
	else if(hamsts===1){
		///////햄버거 버튼 액션//////
		$("#ham div").eq(0).css({"top":"0px","transform":"rotate(0deg)"});
		$("#ham div").eq(1).css({"width":"30px","left":"0px"});
		$("#ham div").eq(2).css({"top":"20px","transform":"rotate(0deg)"});//////////// 햄버거 버튼 액션////////////////
		///////// 메뉴 변경 애니메이션/////
		$("#menu").animate({width:"0%"},800,function(){
			$("body").css("overflow-y","visible");/*메뉴창 닫혔을때 스크롤 풀기*/
			hamsts=0;//상태값 변경
		});
	}//////else if문////////
	
});//////////////햄버거 클릭시//////////////////
	
	
/////////tree형 하위 메뉴
$(".sub").hide();//모든 서브 메뉴 숨기기
$(".sub").first().show();//첫번째 서브메뉴 보이기
$(".title").click(function(){
	if($(this).next().css("display") == "none")//이미 열려있으면 못들어옴
	{
		$(".sub:visible").slideUp(400);//현재 열려서 보이는 서브메뉴 닫기
		$(this).next().slideDown(400);//선택된 sub메뉴 열기
	}
	else{//서브메뉴가 보이는 경우 닫기
		$(this).next().slideUp(400);
	}
});//click
	
	
	
////////////////패밀리 사이트 이동하기
$("#site").change(function(){
	var site=$(this).val();//선택값
	if(site=="PE") window.open().location.href="http://www.nikon.com/precision/index.htm";
	else if(site=="MS") window.open().location.href="http://www.nikon-inst.co.kr/new/main/main.php";
	else if(site=="IM") window.open().location.href="http://www.nikon-inst.co.kr/new/main/main.php"	
});////////////패밀리이동
	
	
////////SNS 클릭시 새창 이동
$("#snsmenu li a").click(function(e){
	e.preventDefault();//a링크 기본이동 막기!
	var seq = $(this).parent().index();//li의 순번
	//alert(seq);
	switch(seq){
		case 0:window.open().location.href="http://nikonblog.co.kr/"; break;	
		case 1:window.open().location.href="https://www.facebook.com/NikonImagingKorea"; break;
		case 2:window.open().location.href="https://www.youtube.com/user/nikonimagingkorea"; break;
		case 3:window.open().location.href="https://www.instagram.com/nikon1_j5_korea/"; break;
	}
});		
	
	
//TOP버튼 클릭시 맨위로
$(".top").click(function(){
	$("html,body").animate({scrollTop:0},500);
});////위로 이동
	


	
	

	
});//////////////////////////////////jQB


	




