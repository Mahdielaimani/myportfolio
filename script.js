// ! set level animation
let skills = document.querySelector('.skills');
let levels = document.querySelectorAll('.skill span');

window.addEventListener('scroll', () => {
    if (window.scrollY > skills.offsetTop) {
        levels.forEach( level => {
            level.style.width = level.dataset.level
        })
    }else {
        levels.forEach( level => {
            level.style.width = '0'
        })
    }
})



// ! set project overlay
const img_warpper = document.querySelector('.img-warpper');
const overlay = document.querySelector('.overlay');

img_warpper.addEventListener('mouseover', () => {
    overlay.classList.add('overlay-class')
});

img_warpper.addEventListener('mouseleave', () => {
    overlay.classList.remove('overlay-class')
});

// ! scroll scroll-down to view about sec
const scroll_down = document.querySelector('.scroll-down');
const about_header = document.getElementById('about-header');

scroll_down.addEventListener('click', () => {
    about.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
})


// ! scroll hire me to contact section
const hire_me = document.querySelector('.hire_me');
const contact = document.querySelector('.contact');

hire_me.addEventListener('click', () => {
    contact.scrollIntoView({behavior: "smooth", block: "start", inline: "start"}) - 600;
})


// ! nav nar show
const links = document.querySelector('.links')
const bar = document.querySelector('.fa-bars');

document.querySelector('.fa-bars').addEventListener('click', () => {
    links.classList.toggle('show-bar');
})


// ! slider
// const fa_arrow_left = document.querySelector('.fa-arrow-left');
// const fa_arrow_right = document.querySelector('.fa-arrow-right');
// let images = ['images/one.jpeg', 'images/two.jpeg', 'images/three.jpeg', 'images/four.jpeg', 'images/four.jpeg', 'images/five.jpeg', 'images/seven.jpeg', 'images/eight.jpeg', 'images/nine.jpeg', 'images/ten.jpeg', 'images/eleven.jpeg'];

// let slide_img = document.querySelector('.slide-img');

// let count = 0;
// fa_arrow_right.addEventListener('click', () => {
//     slide_img.src = images[count];
//     count++;

//     if (count > images.length - 1) {
//         count = 0;
//     }
// })

// fa_arrow_left.addEventListener('click', () => {
//     slide_img.src = images[count];
//     count--;

//     if (count < 1) {
//         count = images.length - 1;
//     }
// })