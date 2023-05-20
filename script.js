var stars = document.getElementsByClassName('star');
var currentRate = -1;
var s = -1;


function rate(star) {
    s = -1;
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove('stared')
    }
    star.classList.add('stared')
    for (let i = 0; i < stars.length; i++) {
        if (stars[i] === star) {
            if (i > currentRate) {
                for (let j = currentRate + 1; j <= i; j++) {
                    s++;
                    stars[j].style.animation = `linear .4s addStar`;
                    stars[j].style.animationDelay = `${s * .1}s`;
                    setTimeout(() => {
                        stars[j].style.backgroundImage = `url("./images/starsFrams/wired-11.png")`;
                    }, s * 100);
                }
            }else if (i < currentRate){
                for (let j = currentRate; j > i; j--) {
                    s++;
                    stars[j].style.animation = `linear .4s removeStar`;
                    stars[j].style.animationDelay = `${s * .1}s`;
                    setTimeout(() => {
                        stars[j].style.backgroundImage = `url("./images/starsFrams/wired-0.png")`;
                    }, s * 100);
                }
            }
            currentRate = i;
        }
    }
    console.log(currentRate + 1);
}
