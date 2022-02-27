
    const drop = document.querySelector('.drop');
    const Mytop = document.querySelector('.top');
    const ssmenu = document.querySelectorAll('.ssmenu');

    
    // Array.from(hov).forEach((e) => {
    //     e.addEventListener('mouseout', function(){
    //         drop.style.height = '90px';
    //         console.log("호버함")
    // });
    // for(var i=0; 6<hov.length; i++){
        //     console.log(ssmenu[i])
    //     };
    
    // hov.addEventListener('mouseover', function(){
    //     drop.style.height = '251.1px';
    //     console.log("호버함")
    // });
    // hov.addEventListener('mouseout', function(){
    //     drop.style.height = '90px';
    //     console.log("뻄")
    // });
  //  console.log(drop);
   // console.log(ssmenu);
  //  console.log(Array.from(ssmenu))
    
    ///작동함
        // for (let i = 0; i < ssmenu.length; i++) {
        //     ssmenu[i].addEventListener('mouseover', function(){
        //             drop.style.height = '251.1px';});
        //             console.log("호버함")
        // }
        // for (let i = 0; i < ssmenu.length; i++) {
        //     ssmenu[i].addEventListener('mouseout', function(){
        //             drop.style.height = '90px';});
        //             console.log("뻄")
        // }
    ////////////////////////
// $(()=>{

//     let myTop = $(".top,.drop");
//     const myRes = ()=>{
//         if($(window).width()<=980){
//             console.log("호호");
//             myTop.css({height:"60px"});
//         }
//         else{
//             myTop.css({height:"90px"});
//         }
//     }
    
//     $(window).resize(myRes);

//     myRes(); // 최초호출

//     let myDrop = $(".drop");
//     $(".ssmenu").hover(
//         ()=>{// hover
//             myDrop.css({height:"251.1px"});
//         },
//         ()=>{// out
//             myDrop.css({height:"90px"});
//         });




// })

    const loadFn = ()=>{
        // console.log("ㅎㅎ",window.innerWidth);
        if(window.innerWidth<=980){
            drop.style.height = "60px";
        }
        else{
            drop.style.height = "90px";
        }
        
    }

    loadFn();

    window.addEventListener("resize",loadFn);
    
    ////작동함////
    for (let hov of ssmenu){
        hov.addEventListener('mouseover', function(){
            drop.style.height = '251.1px';
        
        });
           // console.log("호버함")

    }
    for (let hov of ssmenu){
        hov.addEventListener('mouseout', function(){            
            drop.style.height = '90px';
        });
    }


    let mbtn = document.querySelector('.mobilebutton')
 
    /* 소메뉴 열고 닫기 창 */
   let here = function on(){
        document.getElementsByClassName("mobilemenu")[0]
        .classList.toggle("on")
        // document.getElementsByClassName("mobilebutton")[0]
        // .classList.toggle("on")
       mbtn.classList.toggle("on")
    };


    mbtn.addEventListener('click', here);
        
    