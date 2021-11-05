var autocall;//setInterval용변수
var autocallT;//setInterval용변수
var rbsts=0;//왼쪽버튼 클릭막기(0 허용, 1 불허용)
var lbsts = 0;//왼쪽버튼막기(0허용, 1불허용)
var bansts = 0;//0은 자동호출일때, 1은 버튼클릭호출일때

$(document).ready(function(e) {



 /// 부드러운 스크롤 호출!(제이쿼리 아님!)
 startSS();


//**************네비게이션 작동 코드*****************S


	$("#submenu, .sub").css("height","0");
	$("#menu li").hover(
		function(){//오버시
			$("#submenu").stop().animate({height:"200px"},400);
			$(".sub").stop().animate({height:"200px"},400);
			
		},
		function(){//아웃시
			$("#submenu").stop().animate({height:"0px"},400);
			$(".sub").stop().animate({height:"0px"},400);
	});	
	
	
/************************배너*********************/
	
	 //배너 오른쪽에서 왼쪽으로 이동하기
	$(".btnR").click(function(){	
		clearInterval(autocall);
		clearTimeout(autocallT);
		chgBanner(0);
		autocallT = setTimeout("autoFunc()",9000);//자동넘김재설정
	});//click
	
	
	//왼쪽에서 오른쪽으로 이동
	$(".btnL").click(function(){	
		clearInterval(autocall);
		clearTimeout(autocallT);
		chgBanner(1);
		autocallT = setTimeout("autoFunc()",9000);//자동넘김재설정
	});//click
	
//***********블릿을 클릭해서 이동하기***********************
	$("#bullet").find("img").css("cursor","pointer").click(function(){
		var seq = $(this).index();
		var currseq = $("#cont .b1:visible").index();
		//alert(seq);
		//같은메뉴 클릭시 돌아갓
		if(seq==currseq)return false;
		
		$("#cont .b1:visible").fadeOut(500);
		$("#cont .b1").eq(seq).fadeIn(500);
			
			//블릿변경
			$("#bullet").find("img").attr("src","images/bullet_off.png");
			$("#bullet").find("img").eq(seq)
			.attr("src","images/bullet.png");
			
			//배경이미지 변경			
			$("#banner1").find("img").eq(seq).siblings().fadeOut(500);
			$("#banner1").find("img").eq(seq).fadeIn(500);
			
			
	});//click
	
	//배너 버튼에 마우스가 오버/아웃시 이미지 효과 변경
	$(".buttb").hover(
		function(){
			$(this).stop().animate({"background-color":"#cf5632"});
			$(this).css({"cursor":"pointer"});
			$(this).find("p").css({"color":"#fff"});	
		},
		
		
		function(){
			$(this).stop().animate({"background-color":"#fff"});
			$(this).find("p").css({"color":"#cf5632"});
			
		
		});
		
		//두번째 배너 마우스 오버/아웃
		$(".buttb2").hover(
		function(){
			$(this).stop().animate({"background-color":"#528daf"});
			$(this).css({"cursor":"pointer"});
			$(this).find("p").css({"color":"#fff"});	
		},
		
		
		function(){
			$(this).stop().animate({"background-color":"#fff","cursor":"pointer"});
			$(this).find("p").css({"color":"#528daf"});
			
		
		});
		
		//세번째 배너 마우스 오버/아웃
		$(".buttb3").hover(
		function(){
			$(this).stop().animate({"background-color":"#ff5353"});
			$(this).css({"cursor":"pointer"});
			$(this).find("p").css({"color":"#fff"});	
		},
		
		
		function(){
			$(this).stop().animate({"background-color":"#fff"});
			$(this).find("p").css({"color":"#ff5353"});
			
		
		});

		//네번째 배너 마우스 오버/아웃
		$(".buttb4").hover(
		function(){
			$(this).stop().animate({"background-color":"#083d62"},500);
			$(this).css({"cursor":"pointer"});
			$(this).find("p").css({"color":"#fff"});	
		},
		
		
		function(){
			$(this).stop().animate({"background-color":"#fff"});
			$(this).find("p").css({"color":"#083d62"});
			
		
		});


	
	//버튼에에 마우스가 오버/아웃시 이미지 효과 변경
	$(".butt").hover(
		function(){//오버시
			$(this).css({"background-color":"#F60","cursor":"pointer"});//버튼 색상바꾸기
			$(this).find("p").css({"color":"#fff"});//버튼 글자색상 바꾸기
			
		},
	
		
		function(){//아웃시
			$(this).css({"background":"none","cursor":"pointer"});//반투명 사라짐
			$(this).find("p").css({"color":"#F60"});//버튼 글자색상 바꾸기
			
		});
		

//scroll(함수) 메서드 - 스크롤이벤트가 발생할때 실행되는 구역
var sts1=0, sts2=0, sts3=0;//각 페이지별 실행상태 표시변수(0실행전,1실행후)
$(window).scroll(function(){
	//scrollTop 값을 알아야함->스크롤바 트랙 상단에서 스크롤바 맨위까지거리
	//scrollLeft 값 -> 아래쪽 스크롤바 트랙 왼쪽 끝까지의 거리
	var currT = $(window).scrollTop();
	
	//각 페이지 높이값
	var set = $("#banner").offset().top;//1번페이지
	var menuinfo = $("#menuinfo").offset().top;//2번페이지
	var set = $("#set").offset().top;//3번페이지
	//var black = $("#black").offset().top;//4번페이지
	//console.log(red+"/"+blue+"/"+yellow+"/"+black);
	
	//2번 페이지와 3번 페이지 사이에 올때 액션주기
	if(currT >= menuinfo && currT < set){
		//문막기!!
		if(sts1==1)return;//돌아갓!
		sts1=1;//실행상태변경
		

		$("#set").append("<div id='act1'>특별한날에 온더보더와함께 하는!!</div>");
			if($(window).width() <720){
				$("#act1").css({
					"position":"absolute","width":"70%","height":"30px","top":"-15%","left":"50%",
					"transform":"translate(-50%,-50%)","font":"bold 1em/30px Nanumgothic",
					"color":"#fff", "text-align":"center"	
				
					});
					$("#act1").delay(1000).animate({top:"15%"},1000)
				}
				
			else{
				$("#act1").css({
					"position":"absolute","width":"50%","top":"15%","left":"-100%",
					"transform":"translate(-50%,-50%)","font":"bold 18px/70px Nanumgothic",
					"color":"#fff", "text-align":"center"
					});
					$("#act1").delay(500).animate({left:"50%"},1000)
				}			
					
				
		
			$("#set").append("<div id='act2'>SPECIAL SET</div>");
				if($(window).width() <720){
					$("#act2").css({
						"position":"absolute","width":"100%","height":"50px","top":"-20%","left":"50%",
						"transform":"translate(-50%,-50%)","font":"bold 3em/50px Nanumgothic",
						"color":"#e34108", "text-align":"center"
					});
					$("#act2").delay(1200).animate({top:"20%"},1000)
				}
				else{
					$("#act2").css({
						"position":"absolute","width":"50%","top":"23%","left":"-100%",
						"transform":"translate(-50%,-50%)","font":"bold 72px/70px NanumMyeongjo",
						"color":"#e34108", "text-align":"center"
					});
				}
				
				$("#act2").delay(800).animate({left:"50%"},1000),
				
		
			$("#set").append("<div id='act3'>온더보더 스페이셜 세트메뉴 출시!</div>");
				if($(window).width() <720){
					$("#act3").css({
						"position":"absolute","width":"100%","height":"50px","top":"-25%","left":"50%",
						"transform":"translate(-50%,-50%)","font":"bold 1em/50px Nanumgothic",
						"color":"#fff", "text-align":"center"
					});
					$("#act3").delay(1400).animate({top:"25%"},1000)
				}
				else{
					$("#act3").css({
							"position":"absolute","width":"50%","top":"30%","left":"-100%",
							"transform":"translate(-50%,-50%)","font":"bold 20px/70px Nanumgothic",
							"color":"#fff", "text-align":"center"
						});
				}
				$("#act3").delay(1100).animate({left:"50%"},1000),
				
				
		
				//세트 1번 이미지
				$("#set").append("<div id='act4'><img src=images/set_1.png></div>");
					if($(window).width() <720){
					$("#act4 img").css({"width":"235px"});
					$("#act4").css({
						"position":"absolute","width":"50%","top":"40%","left":"0%"
						});
					}
					else{
						$("#act4 img").css({"width":"350px"});
						$("#act4").css({
						"position":"absolute","width":"50%","top":"40%","left":"30%"
						});					
					}
					$("#act4").hide().delay(5000).fadeIn(1500),
					
					
				//세트 1번 제목	
				$("#set").append("<div id='act5'>Special SET1.</div>");
					if($(window).width() <720){
						$("#act5").css({
							"position":"absolute","width":"60%","height":"50px","top":"38%","left":"70%",
							"transform":"translate(-50%,-50%)","font":"bold 2em/50px Nanumgothic",
							"color":"#fff","text-align":"left"
						});	
					}
					else{
						$("#act5").css({
							"position":"absolute","width":"50%","top":"40%","left":"50%",
							"transform":"translate(-50%,-50%)","font":"bold 2.5em/70px Nanumgothic",
							"color":"#fff", "text-align":"center"
						});	
					}
					$("#act5").hide().delay(5000).fadeIn(1500),
				
				//세트 1번 설명	
				$("#set").append("<div id='act6'>스톤 빅등심 스테이크 +<br>에이드 2잔 +샐러드바2인.</div>");
					if($(window).width() <720){
						$("#act6").css({
								"position":"absolute","width":"180px","top":"45%","left":"75%",
								"transform":"translate(-50%,-50%)","font":"bold 1em/20px Nanumpenscript",
								"color":"#e34108", "text-align":"left"
								});
					}
					else{
						$("#act6").css({
							"position":"absolute","width":"50%","top":"47%","left":"73%",
							"transform":"translate(-50%,-50%)","font":"bold 1.25em/20px Nanumpenscript",
							"color":"#e34108", "text-align":"left"	
						
						});
					}
					
				$("#act6").hide().delay(5000).fadeIn(1500),
				
					//세트 2번 이미지
				$("#set").append("<div id='act7'><img src=images/set_2.png></div>");
					if($(window).width() <720){
						$("#act7 img").css({"width":"250px"});
						$("#act7").css({
							"position":"absolute","width":"250px","top":"53%","left":"38%"
							
						});
					}
					else{
						$("#act7 img").css({"width":"400px"});
						$("#act7").css({
							"position":"absolute","width":"50%","top":"47%","left":"50%"
							});
						
					}
					$("#act7").hide().delay(6000).fadeIn(1500),
					
					//세트 2번 제목	
				$("#set").append("<div id='act8'>Special SET2.</div>");
					if($(window).width() <720){
						$("#act8").css({
							"position":"absolute","width":"50%","top":"82%","left":"30%",
							"transform":"translate(-50%,-50%)","font":"bold 2em/70px Nanumgothic",
							"color":"#fff", "text-align":"center"
						});
					}
					else{
						$("#act8").css({
							"position":"absolute","width":"50%","top":"75%","left":"43%",
							"transform":"translate(-50%,-50%)","font":"bold 2.5em/70px Nanumgothic",
							"color":"#fff", "text-align":"center"
							});	
					
					}
						$("#act8").hide().delay(6000).fadeIn(1500),
				
				//세트 2번 설명	
				$("#set").append("<div id='act9'>랍스터 & 스큐어플레터 +<br>에이드 2잔 + 샐러드바 2인.</div>");
				if($(window).width() <720){
					$("#act9").css({
						"position":"absolute","width":"50%","top":"90%","left":"40%",
						"transform":"translate(-50%,-50%)","font":"bold 1em/20px Nanumpenscript",
						"color":"#e34108", "text-align":"left"
					});
				}
				
				else{
					$("#act9").css({
						"position":"absolute","width":"50%","top":"82%","left":"65%",
						"transform":"translate(-50%,-50%)","font":"bold 1.25em/20px Nanumpenscript",
						"color":"#e34108", "text-align":"left"
					});
					
				}
				
					$("#act9").hide().delay(6000).fadeIn(1500),
					
					//자세히보기
				$("#set").append("<div id='act10'>자세히보기</div>");
				if($(window).width() <720){
					$("#act10").css({
					"position":"absolute","width":"100px","height":"25px","top":"32%","right":"0%",
					"transform":"translate(-50%,-50%)","font":"bold 1em/25px Nanumgothic",
					"color":"#e34108", "text-align":"center", "border":"2px solid #e34108 ","background-color":"#fff","border-radius":"5px","cursor":"pointer"
					});
				}
					
					else{
						$("#act10").css({
						"position":"absolute","width":"120px","height":"30px","top":"35%","right":"30%",
						"transform":"translate(-50%,-50%)","font":"bold 1em/30px Nanumgothic",
						"color":"#e34108", "text-align":"center", "border":"2px solid #e34108 ","background-color":"#fff","border-radius":"5px","cursor":"pointer"
					   });
					
					}
					$("#act10").hide().delay(8000).fadeIn(1000)
						
						
				
					
						
					
		
}//set scroll animation

	
	
	
	
	
});//scroll

	//모든 서브메뉴 감추기
	$(".t1").hide(); 
	$(".t1").first().show();//첫번째 서브만 보이게!
	
	//메뉴 클릭시 서브 보이기!(나머지는 감추기)
	$(".Cbox").click(function(){
		$(this).css({"cursor":"pointer"});
		if($(this).next().css("display")=="none")//서브가 닫힌것만 실행
		{
			$(".t1:visible").slideUp(300);//보이는 서브메뉴 모두 닫기
			$(this).next().slideDown(300);	//선택한 서브메뉴 보이기

		}
		else{//dispaly:none 아닌경우
			$(this).next().slideUp(300);//자기자신 서브메뉴 닫기
		}
	});//click
	
	
	
	/******************공지사항 부분*******************/
	$(".n1").hover(
	function(){
		$(this).css({"color":"#bb471e","cursor":"pointer"});
			},
		function(){
		$(this).css({"color":"#000"});
		
		
	});
	
	$(".n2").hover(
	function(){
		$(this).css({"color":"#9b3915","cursor":"pointer"});
			},
		function(){
		$(this).css({"color":"#000"});
		
		
	});
	
	$(".n3").hover(
	function(){
		$(this).css({"color":"#a40000","cursor":"pointer"});
			},
		function(){
		$(this).css({"color":"#000"});
		
		
	});
	
	
	
	
	/***********이벤트 이미지 마우스 오버시 ************/
	
	$(".ev").hover(
		function(){//마우스 오버시
			$(this).siblings().stop().animate({"opacity":"0.7"},300);
			$(this).css({"cursor":"pointer"});
		},
		
		function(){//마우스 아웃시
			$(this).siblings().stop().animate({"opacity":"1"},300);
		
		
	});
	
	$(".at").hover(
		function(){//마우스 오버시
			$(this).siblings().stop().animate({"opacity":"0.5"},300);
			$(this).css({"cursor":"pointer"});
		},
		
		function(){//마우스 아웃시
			$(this).siblings().stop().animate({"opacity":"1"},300).css({"border":"none"});;
		
		
	});



/********************모바일 햄버거 버튼 클릭시*****************************/
$(".hbtn").eq(2).click(function(){
	$("#msub").stop().animate({"right":"0px"},400);

	
});//click

$("#CL").click(function(){
	$("#msub").stop().animate({"right":"-200px"},400);
});//click










/*모바일 슬라이드 메뉴*/

	//모든 서브메뉴 감추기
	$(".msub1").hide(); 
	$(".msub1").first().show();//첫번째 서브만 보이게!
	
	//메뉴 클릭시 서브 보이기!(나머지는 감추기)
	$(".mtitle").click(function(){
		if($(this).next().css("display")=="none")//서브가 닫힌것만 실행
		{
			$(".msub1:visible").slideUp(400);//보이는 서브메뉴 모두 닫기
			$(this).next().slideDown(400);	//선택한 서브메뉴 보이기
		}
		else{//dispaly:none 아닌경우
			$(this).next().slideUp(400);//자기자신 서브메뉴 닫기
		}
	});//click   
	
	//배너 자동넘김 함수 호출!!!
	autoFunc();


	
	
});//jQb

//자동실행배너 호출함수

function autoFunc(){
	autocall = setInterval(function(){
		chgBanner(0);
	},3000);
}

//메인 베너 변경함수
function chgBanner(sts){//sts - 0오른쪽, 1왼쪽
		
		var currseq = $("#cont .b1:visible").index();
		//console.log(currseq);
		if(sts==0){//오른쪽방향
			currseq++;
			if(currseq==4)currseq=0;//한계수
		}
		else if(sts==1){//왼쪽방향
			currseq--;
			if(currseq==-1)currseq=3;//한계수
		}
		
		$("#cont .b1:visible").fadeOut(500);
		$("#cont .b1").eq(currseq).fadeIn(500);
			
			//블릿변경
			$("#bullet").find("img").attr("src","images/bullet_off.png");
			$("#bullet").find("img").eq(currseq)
			.attr("src","images/bullet.png");
			
			//배경이미지 변경			
			$("#banner1").find("img").eq(currseq).siblings().fadeOut(500);
			$("#banner1").find("img").eq(currseq).fadeIn(500);
		
	
}//function

