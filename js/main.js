const elchooseLink = document.querySelector('.choose-pricing');
const elannually =document.querySelector('.annually');
const elmonthly =document.querySelector('.monthly');
elchooseLink.addEventListener('click', function(){
elannually.classList.toggle('choose-pricing-active');
elmonthly.classList.toggle('choose-pricing-active');
});