'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);

});

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () =>{
    navbarMenu.classList.toggle('open');
})


// Handle scrolling to contact when tapping 'Contact Me' button

const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})
 


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
   if (scrollY > homeHeight/2) {
       home.classList.add('home--transparent');
   } else {
       home.classList.remove('home--transparent');
   }

})

// Show "arrow-up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    } else{
        arrowUp.classList.remove('visible');
    }
})

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () =>{
    scrollIntoView('#home');
})