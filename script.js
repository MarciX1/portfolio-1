const body = document.querySelector('body');
const toggleTwo = document.querySelector('.toggle')
const toggle = document.getElementById('toggle');
const togglebox = document.getElementById('togglebox');
const html = document.querySelector('html');
const navList = document.getElementById('nav-list');
const hamburger = document.getElementById('hamburger');

// Light-Dark Toggle
toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}

// Navbar Fix
toggleTwo.onclick = function() {
    html.classList.toggle('active');
    navList.classList.toggle('active');
    togglebox.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Navbar outside click
document.onclick = function(t) {
    if(t.target.id !== 'nav-list' && t.target.id !== 'togglebox') {
        html.classList.remove('active');
        navList.classList.remove('active');
        togglebox.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

// Typewriter
var typed = new Typed(".span-1", {
    strings: ["Frontend Developer", "Gamer", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})