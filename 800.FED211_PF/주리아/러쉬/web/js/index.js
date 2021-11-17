// JavaScript Document
//전역변수구역
var autocall, autocallT;//autocall- setInterval용 , autocallT - setTimeout용



$(document).ready(function(e) {
	
	
	//모바일 페이지로 분기여부 검사
	var currW = $(window).width();//현재창 가로크기
	if(currW <= 720)location.href="../mobile/index.html";
	$(window).resize(function(){//창사이즈변경시
		var currW = $(window).width();//현재창 가로크기
		if(currW <= 720)location.href="../mobile/index.html";
	});
	
/**************************************** 네비게이션 설정 ****************************************/


	//$(".navbox").css({"overflow":"hidden","height":"0","transition":"height 0.4s ease-in-out"}).show();
	
    $("#nav>ul>li").hover(
		function(){ // 오버시
			$(this).parent().css("height","350px");
			//$(".navbox").css({"height":"300px"});
			$(">a",this).stop().animate({"color":"#ffcf0e"},200);
			$(".navbox").hide();
			$(".navbox",this).show();
		},
		function(){ // 아웃시
			$(this).parent().css("height","50px");
			//$(".navbox").css({"height":"0"});
			$(">a",this).stop().animate({"color":"#fff"},200);
	}); // hover
	
	$(".navbox ul li a").hover(
		function(){
			$(this).stop().animate({
				"background-color":"#ffcf0e",
				"color":"#FFF",
				"font-weight":"bold"
		},300);
		},
		function(){
			$(this).stop().animate({
				"background-color":"#FFF",
				"color":"#000",				
				"font-weight":"normal"
		},300);
	}); // hover
	
	
/**************************************** 배너설정 ****************************************/

	autocallFunc();// 자동호출함수 호출

	
	//블릿클릭시
	$("#banner #slide_bullet>ul>li").click(function(){		
		recalling();//재호출실행함수
		
		var idx = $(this).index();
		if($(this).css("opacity")=="1")return false;//선택한 것이 현재놈이면 돌아가라!
		
		$("#slide_img img:visible").fadeOut(1000);
		$("#slide_img img").eq(idx).fadeIn(1000);
		iseq = idx;//전역변수에 블릿번호 일치!!!
		
		//블릿변경
		$("#banner #slide_bullet>ul>li").eq(idx).siblings().css({
			"background-position":"0px 0px", "opacity":"0.6"
		});
		$("#banner #slide_bullet>ul>li").eq(idx).css({
			"background-position":"-25px 0px", "opacity":"1"
		});		
	});//블릿클릭시
	
	
	//다음버튼 클릭시
	$("#slide_btn div").eq(0).click(function(){		
		recalling();//재호출실행함수
		fadeShow(1);
	});
	//이전버튼 클릭시
	$("#slide_btn div").eq(1).click(function(){
		recalling();//재호출실행함수
		fadeShow(0);
	});	
	
	
/**************************************** Part2 블릿 설정 ****************************************/
	
	
	$("#part2_bullet>ul>li").click(function(){
		var p2idx=$(this).index();
		if($(this).css("opacity")=="1")return false;//선택한 것이 현재놈이면 돌아가라!
		
		$("#part2 .part2_cont:visible").fadeOut(1000);
		$("#part2 .part2_cont").eq(p2idx).fadeIn(1000);
		
		//블릿변경
		$("#part2 #part2_bullet>ul>li").eq(p2idx).siblings().css({
			"background-position":"0px 0px", "opacity":"0.6"
		});		
		$("#part2 #part2_bullet>ul>li").eq(p2idx).css({
			"background-position":"-20px 0px", "opacity":"1"
		});
		
	}); // 블릿 클릭시
	
	
/**************************************** Part3 hover 설정 ****************************************/	
	
	
	/*$(".part3_cont>li").hover(
		function(){ // 오버시
			var p3idx=$(this).index();
			
			$(".part3_cover").eq(p3idx).css({top:"0"});
			$(".part3_txt").eq(p3idx).css({top:"50%", transform:"translateY(-50%)"});
		},
		function(){ // 아웃시
			$(".part3_cover").css({top:"100%"});
			$(".part3_txt").css({top:"100%",transform:"translateY(0)"});
	});*/
	
	
/**************************************** Part3 블릿 설정 ****************************************/	
	
	$("#part3_bullet>ul>li").click(function(){
		var p3bidx=$(this).index();
		//alert(p3bidx);
		if($(this).css("opacity")=="1")return false;//선택한 것이 현재놈이면 돌아가라!
		
		$("#part3 .part3_cont:visible").fadeOut(1000);
		$("#part3 .part3_cont").eq(p3bidx).fadeIn(1000);
		
		//블릿변경
		$("#part3 #part3_bullet>ul>li").each(function(index, element) {
            $(this).css({
				"background-position":"0px "+(index*-30)+"px", "opacity":"0.6"
			});	
        });		
			
		$("#part3 #part3_bullet>ul>li").eq(p3bidx).css({
			"background-position":"-50px "+(p3bidx*-30)+"px", "opacity":"1"
		});
		
	}); // 블릿 클릭시	
	
	
	
/**************************************** sub_con1 블릿 설정 ****************************************/	
	
	
	
	$("#sub_con1 #sub_txt ul li").click(function(){
		var scidx=$(this).index();
		// alert(scidx);
		// alert($(this).css("background-color"));
		if($(this).css("background-color")=="rgb(0, 0, 0)")return false;//선택한 것이 현재놈이면 돌아가라!
		
		$("#sub_con1 #sub_img>img:visible").fadeOut(1000);
		$("#sub_con1 #sub_img>img").eq(scidx).fadeIn(1000);
		
		//블릿변경
		$("#sub_con1 #sub_txt ul li").eq(scidx).siblings().css({
			"background-color":"#EEE"
		});
		$("#sub_con1 #sub_txt ul li .con1_txt").each(function(){
			$(this).css({"color":"#999"});
		});		
		$("#sub_con1 #sub_txt ul li .con1_txt2").each(function(){
			$(this).css({"color":"#000"});
		});
				
		
		$("#sub_con1 #sub_txt ul li").eq(scidx).css({
			"background-color":"#000"
		});
		$("#sub_con1 #sub_txt ul li .con1_txt").eq(scidx).css({
			"color":"#FFF"
		});		
		$("#sub_con1 #sub_txt ul li .con1_txt2").eq(scidx).css({
			"color":"#FFF"
		});
		
	}); // 블릿 클릭시	
	
	
/**************************************** sub_con1 today 블릿 설정 ****************************************/
	
	
	$("#sub_con1 #today #today_b ul li").click(function(){
		var tdidx=$(this).index();
		if($(this).css("opacity")=="1")return false;//선택한 것이 현재놈이면 돌아가라!
		
		$("#sub_con1 #today #today_img>img:visible").fadeOut(1000);
		$("#sub_con1 #today #today_img>img").eq(tdidx).fadeIn(1000);
		
		$("#sub_con1 #today #today_txt ul li:visible").fadeOut(1000);
		$("#sub_con1 #today #today_txt ul li").eq(tdidx).fadeIn(1000);
		
		//블릿변경
		$("#sub_con1 #today #today_b ul li").eq(tdidx).siblings().css({
			"background-position":"0px 0px", "opacity":"0.6"
		});		
		$("#sub_con1 #today #today_b ul li").eq(tdidx).css({
			"background-position":"-10px 0px", "opacity":"1"
		});
		
	}); // 블릿 클릭시		
	
	
	
/**************************************** ALL PRODUCT 블릿 설정 ****************************************/	
	
	var tit = ["SNOW","PLUM BLOSSOM","CUSHION PERFUME","CUSHION PERFUME","CUSHION PERFUME","CUSHION PERFUME","CUSHION PERFUME","CUSHION PERFUME"];
	var ktit = ["스노우_눈 (30ml)","플럼 플라썸_매화 (30ml)","아이슬란드 오로라","클리솝","화이트 머스크","스윗 베이비","퍼지 네이블","베이비 파우더"];
	var price = ["29,000원","29,000원","15,000원","15,000원","15,000원","15,000원","15,000원","15,000원"];
	var hal = ["19,800원","19,800원","12,900원","12,900원","12,900원","12,900원","12,900원","12,900원"];
	var juk = ["[390원 적립]","[390원 적립]","[250원 적립]","[250원 적립]","[250원 적립]","[250원 적립]","[250원 적립]","[250원 적립]"];
	var simg = ["<img src='images/sale.png' alt='sale'>","","<img src='images/sale.png' alt='sale'>","<img src='images/sale.png' alt='sale'>","","<img src='images/sale.png' alt='sale'>","","<img src='images/sale.png' alt='sale'>"];
	for(var i=0; i<8; i++){
		var val = '<div class="con4_box">';
		val +='<div class="con4_imgb">';
		val += '<img src="images/con4_0'+(i+1)+'.jpg" alt="con4_01">';
		val += '</div>';
		val += '<div class="con4_txtb">';
		val += '<p class="con4_txt">'+tit[i]+'</p>';
		val += ' <p class="con4_txt2">'+ktit[i]+'</p>';
		val += '<p class="con4_txt3">'+price[i]+'</p>';
		val += '<p class="con4_txt4">'+hal[i]+'<span>'+juk[i]+'</span></p>';
		val += '<p class="con4_txt5">'+simg[i]+'</p>';
		val += ' </div>';
		val += ' </div>';
		$("#con4_pr").append(val);
	}
	
	
}); // jQb



/**************************************** 배너 이미지 넘김 함수 ****************************************/


var iseq = 0;//이미지순번
function fadeShow(dir){//dir방향(0오른쪽, 1왼쪽)
	$("#slide_img img:visible").fadeOut(1000);
	
	if(dir==0)
	{
		iseq++;//1씩증가
		if(iseq==5)iseq=0;
	}
	
	else if(dir==1){
		iseq--;//1씩증가
		if(iseq==-1)iseq=4;
	}
	
	$("#slide_img img").eq(iseq).fadeIn(1000);
	
	//블릿변경
	$("#banner #slide_bullet>ul>li").eq(iseq).siblings().css({
		"background-position":"0px 0px", "opacity":"0.6"
	});
	$("#banner #slide_bullet>ul>li").eq(iseq).css({
		"background-position":"-25px 0px", "opacity":"1"
	});
	
}//func


/**************************************** 자동실행 호출 함수 ****************************************/
function autocallFunc(){
	autocall = setInterval("fadeShow(0)",4000);
}


/**************************************** 자동호출 지우고 일정시간뒤 재실행 함수 ****************************************/
function recalling(){
	clearInterval(autocall);//자동호출지우기
	clearTimeout(autocallT);//자동호출지우기
	
	//9초뒤 다시 자동호출실행
	autocallT = setTimeout(function(){
		autocallFunc();// 자동호출함수 호출
	},5000);
}











