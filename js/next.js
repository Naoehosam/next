window.addEventListener("scroll", dealWithScroll);

var headerInner = document.querySelector('.header');

function dealWithScroll() {
    if(screen.width <= 640){
        if (window.pageYOffset >= 50) {
            headerInner.classList.add('fixed');
        } else {
            headerInner.classList.remove('fixed');
        }
    }else{
        if (window.pageYOffset >= 50) {
            headerInner.classList.add('fixed');
        } else {
            headerInner.classList.remove('fixed');
        }
    }
}
function menuMobile(){
    console.log('asdasd')
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}