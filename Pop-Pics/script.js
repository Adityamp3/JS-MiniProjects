const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();

        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center")
    .addEventListener("mousemove",
        throttleFunction((dets) => {
            var div = document.createElement("div");
            div.classList.add('imagediv');

            div.style.left = dets.clientX + 'px';
            div.style.top = dets.clientY + 'px';

            var images = ["https://i1.wp.com/vak1969.com/wp-content/uploads/2012/11/shankara.jpg",
                "https://www.mygodpictures.com/wp-content/uploads/2015/07/Image-Of-MarkandeyaLord-Shiva-And-Yamraj.jpg",
                "https://www.lasociedadgeografica.com/blog/uploads/2011/04/ganga-devi.jpg",
                "https://th.bing.com/th/id/R.3513d4fdd13558782e03e4954bd2f0b8?rik=9MawxJ%2fSj6OCrQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-THjIkQD39yY%2fVNoFIo0d5FI%2fAAAAAAAAaPU%2fE-PbJ0Yuc_w%2fs1600%2fharihara-shiva-vishnu-form.jpg&ehk=qySRJmFE6362243h%2blezcKvmpi69LTNLBXzxHj%2bmqWw%3d&risl=&pid=ImgRaw&r=0",
                "https://wallpapercave.com/wp/wp7184928.jpg",
                "https://isha.sadhguru.org/mahashivratri/wp-content/uploads/2020/02/Shiva-Wallpaper-adiyogi-112ft.jpg",
                "https://wallpaperaccess.com/full/3704677.jpg"];


            // Get a random index
            var randomIndex = Math.floor(Math.random() * images.length);
            var img = document.createElement("img");
            img.src = images[randomIndex];
            div.appendChild(img);
            document.body.appendChild(div);

            gsap.to(img, {
                y: "0",
                ease: Power1,
                duration: 0.6,
            })
            gsap.to(img, {
                y: "100%",
                delay: .6,
                ease: Power2,
            })

            setTimeout(function () {
                div.remove();
            }, 2000)
        }, 150));