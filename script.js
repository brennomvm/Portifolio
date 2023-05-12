const btnMobile = document.getElementById('line');


function toggleMenu(event) {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  
}

btnMobile.addEventListener('click', toggleMenu);