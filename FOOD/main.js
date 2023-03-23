burger = document.querySelector('.burger')
navbar = document.querySeclector('.navbar')
navlist = document.querySeclector('.navlist')



burger.addEventListener('click', ()=>{
      navlist.classList.toggle('v-class-resp');
      navbar.classList.toggle('h-nav-resp');

})