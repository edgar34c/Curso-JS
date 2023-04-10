function contar(){
    var ini = document.getElementById("txtI")
    var fim = document.getElementById("txtF")
    var passo = document.getElementById("txtP")
    var res = document.getElementById("res")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "impossível contar!"
    }else{
        res.innerHTML = "Contando: <br>"
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            alert("Passo inválido!! será considerado passo 1")
            p = 1
        }
        if(i < f){
            for(var c = i; c <= f; c+=p){
                res.innerHTML += `${c} 👉`
            }
        }else{
            for(var c = i; c >= f; c-= p){
                res.innerHTML += `${c} 👉`
            }
        }

        res.innerHTML += "🏴"
    }
}

