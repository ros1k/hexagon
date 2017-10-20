require('../scss/main.scss');

document.addEventListener("DOMContentLoaded",function (e) {

    let bgimage = $("#company .background--image");
    let counter = 1;
        let changeImage = setInterval(function (e) {
            counter++
            if(counter > 3){
                counter = 1;
            }
            bgimage.css("background-image",`url("../assets/testslider-${counter}.jpg")`);
        },8000);




})