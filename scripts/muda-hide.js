var engrenagem = document.querySelector("img#engrenagem")
var mudaHide = document.querySelector("section#muda-hide")

engrenagem.addEventListener('click', function(){
    if(mudaHide.style.display != 'none'){
        mudaHide.style.display = 'none'
    }else if (mudaHide.style.display = 'none') {
        mudaHide.style.display = 'block'
    }
})