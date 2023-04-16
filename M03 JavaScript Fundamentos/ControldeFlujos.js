function viajar(destino){
    if(destino === "Brasil"){
        console.log("Gire a la IZQUIERDA")
    }
    else if(destino === "Argentina"){
        console.log("Gire a la DERECHA")
    }
    else{
        console. log("Perdido")
    }
}

viajar("Brasil")

viajar("Argentina")

viajar("Paraguay")

function puede_manejar(edad){
    if (edad >= 18){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

puede_manejar(20)