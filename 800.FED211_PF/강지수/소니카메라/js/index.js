
var autocall, autocallT;//자동호출변수 이벤트 배너
var m_autocall, m_autocallT;//자동호출변수 이벤트 배너

$(document).ready(function(){
	
	$("a").click(function(e){/*a링크 막기*/
		e.preventDefault();
	});
	
	
autocall=setInterval("goSlide()",3000);
$("#bmenu img").click(function(){
	var idx=$(this).index();//클릭된 것의 순번
	console.log(idx);
	bseq=idx;//전역변수 일치!
		
	$("#bmenu img").eq(idx).attr("src","images/123456_03.png").siblings().attr("src","images/123456_05.png");
	$("#slider li:visible").css("opacity","0");
	$("#slider li").eq(idx).css("opacity","1");
		
	clearInterval(autocall);
	clearTimeout(autocallT);
		
	autocallT=setTimeout(function(){
		autocall=setInterval("goSlide()",3000);
	},1500);
});//블릿 이미지 click
	
	
	//오른쪽 버튼 클릭시
	document.getElementsByClassName("gR").item(0).onclick=function(){
		rolling(0);	
	}//onclick
	
	//왼쪽버튼 클릭시
	document.getElementsByClassName("gL").item(0).onclick=function(){
		rolling(1);	
	}//onclick
	
	//자동호출
	m_autocall = setInterval("rolling(3)",3000);
	
	
	
	/*모바일때 터치 스와프 기능 넣기*/
	$("#mobpro").swipe({
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			if(direction=="left"){
				rolling(0);//오른쪽 버튼 클릭	
			}
			else if(direction=="right"){
				rolling(1);//왼쪽 버튼 클릭	
			}
		}
	});
	
});//////////////////////////////////jQB
	
		
/**********
	함수명: goSlide
	기능: 배너이미지 넘어가기
***********/
var bseq=0;
function goSlide(){
	$("#slider li").eq(bseq).css("opacity","0");
	bseq++;//1씩증가
	if(bseq==4)bseq=0;
		
	$("#bmenu img").eq(bseq).attr("src","images/123456_03.png").siblings().attr("src","images/123456_05.png");
		
	$("#slider li").eq(bseq).css("opacity","1");
}//////goSlide


/*
	함수명:rolling()
	기능: 이미지를 잘라서 이동한 후 클래스를 다시 부여하여 애니메이션 기능을 완성함.
*/
var rollingsts=0;//동작중 막기
function rolling(dir){//dir - 방향값(0 - 오른쪽, 1 - 왼쪽, 3 - 자동호출)
	if(rollingsts==1){return false;}
	rollingsts=1;//함수잠금
	
	//변경대상
	var tg=document.getElementById("mobpro");
	var first=tg.getElementsByTagName("img").item(0);//첫번째 이미지
	var last=tg.getElementsByTagName("img").item(4);//마지막 이미지
	
	if(dir==0 || dir==3){//오른쪽버튼
		tg.appendChild(first);//첫번째 이미지가 맨 뒤로 이동
	}
	
	else if(dir==1){ //왼쪽버튼
		tg.insertBefore(last,first);//마지막 이미지를 맨앞으로 이동
	}
	
	//클래스 다시 부여하기
	for(var i=0; i<5; i++){
		tg.getElementsByTagName("img").item(i).setAttribute("class","img"+(i+1));	
		tg.getElementsByTagName("img").item(i).style.transition="all 0.4s ease-in-out";
	}
	
	if(dir!=3){
		clearInterval(m_autocall);
		clearTimeout(m_autocallT);

		m_autocallT=setTimeout(function(){
			m_autocall=setInterval("rolling(3)",3000);
		},3000);
	}
	
	setTimeout(function(){rollingsts=0;},400);//잠금풀기
}//rolling함수	














		