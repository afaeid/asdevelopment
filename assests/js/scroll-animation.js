const fadeInElement = document.querySelectorAll('.fade-in-animation');
window.addEventListener('scroll',()=>{
// fie = fadeInElement
fadeInElement.forEach((fie)=>{
 var fieHeight = fie.clientHeight;
 var fieTop = fie.offsetTop;
 if(pageYOffset >= (fieTop/2)){
   fie.classList.add('fade-in')
 }
 else{
   fie.classList.remove('fade-in')

 }
})
})
