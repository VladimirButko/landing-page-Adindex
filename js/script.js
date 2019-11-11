let preloaderEl = document.querySelector('.preloader');
preloaderEl.classList.add('stopping');
setTimeout(()=>{
    preloaderEl.classList.remove('stopping');
    preloaderEl.classList.add('stop');
    checkShow()
}, 1000);
// Вылет анимации
function checkShow(){
    let animateShowEls = document.querySelectorAll('.animate-show');
    if( preloaderEl.classList.contains('stop') ){
        animateShowEls.forEach((el)=>{

            let coord = el.getBoundingClientRect();
            // console.log(coord);
            if( coord.top <= window.innerHeight && coord.top > 0){
                el.classList.add('show');
            }
        });
    }
}
window.addEventListener('scroll', ()=>{
    checkShow();
});