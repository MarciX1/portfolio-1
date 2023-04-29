const body = document.querySelector('body');
const toggleTwo = document.querySelector('.toggle')
const toggle = document.getElementById('toggle');
const togglebox = document.getElementById('togglebox');
const html = document.querySelector('html');

// Light-Dark Toggle
toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}

// Navbar Fix
toggleTwo.onclick = function() {
    html.classList.toggle('active');
}

// Typewriter
var typed = new Typed(".span-1", {
    strings: ["Frontend Developer", "Gamer", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})