function myFunction() {
   x.classList.toggle("change");
 }

 //adding the responsive menu bar
const menuBar = document.getElementsByClassName('menu_container')[0];
const navbarLinks = document.getElementsByClassName('exp');

menuBar.addEventListener('click', ()=>{
  navbarLinks.classList.toggle('active');
})