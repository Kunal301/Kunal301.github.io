window.onscroll = function () {
    scrollRotate();
    scrolRotate();
};

function scrollRotate() {
    let image = document.getElementById("rotate2");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

function scrolRotate() {
    let image = document.getElementById("rotate3");
    image.style.transform = "rotate(" + window.pageYOffset/3 + "deg)";
}