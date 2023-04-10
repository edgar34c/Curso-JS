function tabuada(){
    var num = document.getElementById("txtN")
    var tab = document.getElementById("txtTab")
    

    if (num.value.length == 0) {
        alert("Digite um número!")
    } else {
        var n = Number(num.value)
    }
    tab.innerHTML = ''
    for(var c = 0; c <= 10; c++){
        var item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
}