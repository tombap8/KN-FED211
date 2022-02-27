window.addEventListener("load", function () {

    let nbtn = document.querySelectorAll(".ri");
    let pbtn = document.querySelectorAll(".li");
    let slide = document.querySelectorAll(".slide_imgbox1");

    for (let x of slide) {

        x.style.width = "400%";
    }



    const goSlide = (dir, seq) => {
        console.log("go", dir, seq);

        if (dir) {
            slide[seq].style.left = "-100%";
            slide[seq].style.transition = ".7s";
            setTimeout(() => {
                slide[seq].appendChild(slide[seq].querySelector("li"));
                slide[seq].style.left = "0";
                slide[seq].style.transition = "none";
            }, 700);
        } else {
            slide[seq].insertBefore(
                slide[seq].querySelectorAll("li")[3],
                slide[seq].querySelectorAll("li")[0]);
            slide[seq].style.left = "-100%";
            slide[seq].style.transition = "none";

            setTimeout(() => {
                slide[seq].style.left = "0";
                slide[seq].style.transition = ".7s";
            }, 10);
        }


    }

    for (let i = 0; i < nbtn.length; i++) {
        nbtn[i].onclick = () => {
            goSlide(1, i);
        }
    }


    for (let i = 0; i < pbtn.length; i++) {
        pbtn[i].onclick = () => {
            goSlide(0, i);
        }
    }





})