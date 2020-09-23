//alert(`Welsome to Nsa's Site. Have a look at our collections.`);
const collection = document.getElementById('collections');
const card = document.querySelectorAll('.card');
const link = document.querySelectorAll('li');
const darkMode = document.querySelector('.col-images');
const btn = document.querySelector('.btn');
const footer = document.querySelector('footer');
const bio = document.querySelectorAll('.bios');
const navbar = document.querySelector('.navbar');

let lightMode = true;

const switchMode = () => {
    if (lightMode) {
        darkMode.style.backgroundColor = 'black';
        for (let cur of link) {
            let a = cur.style;
            a.color = 'rgb(234, 234, 234)';
            a.fontWeight = 400;
        }
        for (let cur of card) {
            let a = cur.style;
            a.backgroundColor = 'rgb(2, 14, 10)'
            a.color = 'rgb(222, 222, 222';
            a.borderRadius = '.4em';
        }
        for (let cur of bio) {
            cur.style.color = 'red';
        }
        navbar.style.backgroundColor = 'rgb(14, 14, 14)';
        collection.style.backgroundColor = '#081c55';
        collection.style.color = 'white';
        footer.style.backgroundColor = 'rgb(30, 30, 30)';
        btn.textContent = 'Day-mode';
        
        lightMode = false;
    } else {
        darkMode.style.backgroundColor = 'white';
        for (let cur of link) {
            let a = cur.style;
            a.color = 'rgb(12, 12, 12)';
            a.fontWeight = 300;
        }
        for (let cur of card) {
            let a = cur.style;
            a.backgroundColor = 'rgb(222, 214, 210)'
            a.color = 'rgb(22, 22, 22';
            a.borderRadius = '.4em';
        }
        for (let cur of bio) {
            cur.style.color = 'white';
        }
        navbar.style.backgroundColor = 'rgb(244, 244, 244)';
        collection.style.backgroundColor = '#d0cfd6';
        collection.style.color = 'black';
        btn.textContent = 'Night-mode';
        footer.style.backgroundColor = 'rgb(192, 16, 169)';
        lightMode = true;
        }
}

const faders = document.querySelectorAll('.fade');
const appearOptions = {
    rootMargin: "0px 0px 60px 0px"
};
const slider = document.querySelectorAll('.sliders');

const appearOnScroll = new IntersectionObserver ((entries, appearOnScroll)=> {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})
 
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        //nav.classList.add('open');
        //menuNav.classList.add('open');
        //navItems.forEach(item => item.classList.add('open'));

        showMenu = true
    } else {
        hamburger.classList.remove('open');
        //nav.classList.remove('open');
        //menuNav.classList.remove('open');
        //navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}



/*
function doAnimation () {
    let animate = document.querySelector('.bio-header');
    let currentLeft = animate.offsetLeft;
    let newLocation;

    if (switchDirection) {
        newLocation = currentLeft + 2;

        if (currentLeft >= 365) {
            switchDirection = false;
        }
    } else {
        newLocation = currentLeft - 2;

        if (currentLeft <= 90) {
            switchDirection = true;
        }
    }
    animate.style.left = newLocation + 'px';
}

setInterval(doAnimation, 30);
*/

