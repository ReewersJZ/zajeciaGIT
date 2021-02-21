const hiddenText = document.querySelectorAll('.hidden');
;


window.addEventListener('scroll', ()=>{

hiddenText.forEach((text)=>{
    let textPosition = text.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;
    if (textPosition < screenPosition) {
        text.classList.remove('hidden');
        text.classList.add('showText');
    } else {
        text.classList.remove('showText');
        text.classList.add('hidden');
    }
})
})