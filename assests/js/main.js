var menuButton = document.querySelector("header nav .menu-button");
var menu = document.querySelector('header .nav-links');
menuButton.addEventListener('click',()=>{
menuButton.classList.toggle('openMenu');
if(menuButton.classList.contains('openMenu')){
  menu.style.display = 'block';
}
else{
  menu.style.display = 'none';
}
}) 
