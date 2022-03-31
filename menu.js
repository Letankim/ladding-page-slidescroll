var btnBar = document.querySelector(".btn-bars");
var headerMobile = document.querySelector(".header-on-mobile");
var overlay = document.querySelector(".overplay");
var closeBar = document.querySelector(".btn-close");

var controlClose = [overlay, closeBar];

btnBar.onclick = function() {
    headerMobile.classList.add("header-mobile-active");
}

controlClose.forEach(function (itemClose) {
    itemClose.onclick = function() {
        headerMobile.classList.remove("header-mobile-active");
    }
});

// nav control 

var listItemBar = document.querySelectorAll(".navbar-item");


listItemBar.forEach(function(itemBar) {
    itemBar.onclick = function() {
    removeClassActive();
    this.classList.add("nav-active");
    }
});

function removeClassActive() {
    listItemBar.forEach(function(itemBar) {
        itemBar.classList.remove("nav-active");
        headerMobile.classList.remove("header-mobile-active");
    });
}

