var listShow = document.querySelectorAll(".speaker");
var listStament = document.querySelectorAll(".slogan h1");
var header = document.querySelector('.nav-wrapper');
window.onscroll = function() {
    if (window.scrollY > 0) {
        header.classList.add("maintain-header");
    } else {
        header.classList.remove("maintain-header");
    }
    function showStament(element) {
        var reacH1 = element.getClientRects();
        var heightScreen = window.innerHeight;
        if(!(reacH1[0].bottom < 0 || reacH1[0].top > heightScreen)) {
            element.classList.add("start");
        } else {
            element.classList.remove("start");
            
        };
    };
    listStament.forEach(function(item) {
        showStament(item);
    });
    listShow.forEach(function(item) {
        showStament(item);
    })
};


