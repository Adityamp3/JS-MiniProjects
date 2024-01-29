window.addEventListener("mousemove", function (details) {
    var rect = document.querySelector("#rect");

    var xval = gsap.utils.mapRange( 0, window.innerWidth, rect.getBoundingClientRect().width / 2, window.innerWidth - (rect.getBoundingClientRect().width / 2), details.clientX );
    var yval = gsap.utils.mapRange( 0, window.innerHeight, rect.getBoundingClientRect().height / 2,  window.innerHeight - (rect.getBoundingClientRect().height / 2), details.clientY );

    gsap.to("#rect", {
        left: xval,
        top: yval,
        ease: Power3,
    });
});
