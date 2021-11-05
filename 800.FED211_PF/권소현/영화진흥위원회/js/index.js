
window.onload = function(){//html모두 로딩후



	//class가 smenu인 li의 하위 메뉴를 작동하게 하는 셋팅 for문~!!!
	for(var i=0; i<7;i++){
		//1. 하위메뉴가 있는 li에 마우스 오버시 하위메뉴가 나타나게 함.
		document.getElementsByClassName("main_m").item(i).onmouseover=function(){
			//this키워드 -> 이벤트가 걸린 대상 자신
			this.getElementsByTagName("ul").item(0).style.height="200px";
			this.getElementsByTagName("ul").item(0).style.transition="height 0.6s ease-in-out";
			document.getElementById("sub_bg").style.height="200px";
			document.getElementById("sub_bg").style.borderBottom="2px solid #ccc";
			}//마우스오버

		//마우스 아웃 시 하위메뉴 숨기기
		document.getElementsByClassName("main_m").item(i).onmouseout=function(){
			this.getElementsByTagName("ul").item(0).style.height="0px";
			document.getElementById("sub_bg").style.height="0px";
			document.getElementById("sub_bg").style.borderBottom="0px";
			}//마우스아웃
					
			}//for문
	
	setInterval("goSlide()",4000);//자동호출
	
}//window.onload




function chgMenu(sts, num, seq){
	//sts-마우스오버/아웃상태(1-오버,0-아웃)
	//num - 이미지번호
	//seq - 이미지 순번
	//alert(num);	
	var mimg = document.getElementsByClassName("mimg");//선택이미지
if(sts==1){//마우스 오버시
		//1. 이미지변경
		mimg.item(seq).src = "images/index_over_"+num+".png";
		//2. 하위메뉴 보이기
		document.getElementsByClassName("sub").item(seq).style.height = "140px";
	
		
	}
	else{//마우스 아웃시
		//1. 이미지변경
		mimg.item(seq).src = "images/index_"+num+".png";
		//2. 하위메뉴 숨기기
		document.getElementsByClassName("sub").item(seq).style.height = "0px";
		
	}
}//window.onload함수끝


function chgMenu2(sts, num, seq){
	var iimg = document.getElementsByClassName("iimg");//선택이미지
	if(sts==1){
		iimg.item(seq).src ="images/index_over_"+num+".png";	
			document.getElementsByClassName("icon").item(seq).getElementsByTagName("a").item(1).style.textDecoration = "underline";
			
	}
	
	else{
		iimg.item(seq).src = "images/index_"+num+".png";
			document.getElementsByClassName("icon").item(seq).getElementsByTagName("a").item(1).style.textDecoration = "none";
		}
	
	}


function goSlide(){
	var target = document.getElementById("slider");
	target.style.left = "-1920px";
	target.style.transition = "left 2.5s ease-in-out";
	
	//애니메이션이 끝난 후에 잘라서 이동 코드실행
	setTimeout(function(){	//이동 후 첫번째 이미지 끝으로 이동하기
	var fobj = target.getElementsByTagName("img").item(0);//첫번째이미지
	target.appendChild(fobj);//첫번재 이미지 끝으로 이동
	target.style.transition="none";//애니메이션 해제
	target.style.left="0px"; //left값 초기화


}, 2500);


}




