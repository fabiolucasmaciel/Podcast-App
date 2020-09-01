const titul = document.querySelector("h1#titul")

typeWriter(titul)

function typeWriter(frase){
        const fraseArray = frase.innerHTML.split('')
        frase.innerHTML = ""
        frase.style.visibility = "initial";
        fraseArray.forEach((letra, i) => {
            setTimeout(function(){
                titul.innerHTML += letra
            }, 75 * i)
        })
}

