// JavaScript Document

const hamburger = document.getElementsByClassName('hamburger')[0]
const navLinks = document.getElementsByClassName('navlinks')[0]

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})