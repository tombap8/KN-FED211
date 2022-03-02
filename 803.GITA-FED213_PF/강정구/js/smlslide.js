window.addEventListener("load", function () {
    let slide = document.querySelectorAll(".slide_imgbox2");
    let slideList = document.querySelectorAll(".slide_imgbox2 li");
    let nbtn = document.querySelectorAll(".sri");
    let pbtn = document.querySelectorAll(".sli");
    let slideLength = slide.length;


    const goSlide = (dir, seq) => {
        if(dir){
            slide[seq].style.left = "-900px";
            slide[seq].style.transition = ".5s";

            this.setTimeout(()=>{
                slide[seq].appendChild(slide[seq].querySelector("li"))
                slide[seq].style.left = "-600px";
                slide[seq].style.transition = "none";
            },500)
        } else {
            slide[seq].insertBefore(
                slide[seq].querySelectorAll("li")[7],
                slide[seq].querySelectorAll("li")[0]);
            slide[seq].style.left = "-900px"
            slide[seq].style.transition = "none";
            
            this.setTimeout(()=>{
                slide[seq].style.left = "-600px";
                slide[seq].style.transition = ".5s";
            },10)
        }

    }

    for(let i = 0; i < nbtn.length; i++){
        nbtn[i].onclick = () => {
            goSlide(1,i);
        }
    }
    for (let i = 0; i < pbtn.length; i++) {
        pbtn[i].onclick = () => {
            goSlide(0, i);
        }
    }

})