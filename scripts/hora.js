var msg = document.querySelector("h1#horario")
var hora = new Date().getHours()

function carregar(){

    if(hora >= 6 && hora < 12){
        let frase = "Bom dia"
        typeWriter(frase)
    }else if(hora >= 12 && hora < 18){
        let frase = "Boa tarde"
        typeWriter(frase)
    }else if(hora >= 18 && hora < 24){
        let frase = "Boa noite"
        typeWriter(frase)
    }else if(hora >= 00 && hora < 6){
        let frase = "Boa madrugada"
        typeWriter(frase)
    }

    function typeWriter(frase){
        let fraseArray = frase.split('')
            fraseArray.forEach((letra, i) => {
                setTimeout(function(){
                    msg.innerHTML += letra
                }, 100 * i)
        })
    }

}

/*function carregar(){

    if(hora >= 6 && hora < 12){
        msg.innerHTML = "Bom dia"
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML = "Boa tarde"
    }else if(hora >= 18 && hora < 24){
        msg.innerHTML = "Boa noite"
    }else if(hora >= 00 && hora < 6){
        msg.innerHTML = "Boa madrugada"
    }

}*/
