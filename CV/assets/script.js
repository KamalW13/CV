// NAV BAR

const navicon = document.querySelector('nav i.fa');
const navbar = document.querySelector('nav .navbar');
navicon.addEventListener('click', ()=>{
	navbar.classList.toggle('translate');
	navicon.classList.toggle('rotate15');
})

const naviconbar = document.querySelector('nav .navbar i.fa');
naviconbar.addEventListener('click', ()=>{
	navbar.classList.toggle('translate');
	navicon.classList.toggle('rotate15');
})


// Hubungi Saya
const buttonHub = document.querySelector('nav .navbar ul li.hubungi');
const mainHub = document.querySelector('div.hubungi');
const main = document.querySelector('main');
buttonHub.addEventListener('click', ()=>{
	mainHub.classList.toggle('translate');
	main.classList.toggle('scaleOut');
	navbar.classList.toggle('translate');
	navicon.classList.toggle('rotate15');
})


// Animasi myname
const myname = document.querySelector('span.myname');
const huruf = [...myname.textContent].map( huruf => `<span>${huruf}</span>`).join('');
console.log(huruf);

myname.innerHTML = huruf;

