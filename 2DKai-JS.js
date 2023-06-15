const navLinks = document.querySelectorAll('ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

function scrollToSection(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    const targetPosition = targetSection.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

let menu = document.querySelector('#menu');
let nav = document.querySelector('.nav');

menu.onclick = () => {
  menu.classList.toggle('menu');
  nav.classList.toggle('open');
}

function changeImage(hovering) {
  var buttonImage = document.getElementById('button');

  if (hovering) {
    buttonImage.src = 'img/download_button_Pressed.png';
  } else {
    buttonImage.src = 'img/download_Button.png';
  }
}