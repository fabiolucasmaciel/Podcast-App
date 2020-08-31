var msg = document.querySelector("h1#horario")

function carregar(){
    var hora = new Date().getHours()

    if(hora = 6 && hora < 12){
        msg.innerHTML = "Bom dia"
    }else if(hora = 12 && hora < 18){
        msg.innerHTML = "Boa tarde"
    }else if(hora = 18 && hora < 00){
        msg.innerHTML = "Boa noite"
    }else if(hora = 00 && hora < 6){
        msg.innerHTML = "Boa madrugada"
    }
}
