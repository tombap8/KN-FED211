$("#about .textbox:first-child .text").attr("data-aos","fade-up").attr("data-aos-duration","1500");
$("#news .cardbox .card").each(function(){
    $(this).attr("data-aos","fade-up").attr("data-aos-duration","1500");
    for(var i = 1; i <= $(".card").length; i++){
        var nth = Number(`${i+2}`);
        var num = Number(`${100*i}`);
        $(".cardbox > div:nth-child(" + nth + ")").attr("data-aos-delay",num);
    };
});
$(".textbox:last-child > div, .discography .album, .profileBox .profile").attr("data-aos","fade-up").attr("data-aos-duration","800").attr("data-aos-delay","200");
$(".textbox:last-child > div:first-child").removeAttr("data-aos-delay");
$(".bottom").removeAttr("data-aos");