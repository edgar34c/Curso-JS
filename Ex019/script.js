let num = document.getElementById("txtNum")
let lista = document.getElementById("sel")
let nums = []

function isNum(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function analisar(){
    if (isNum(num.value) && !inLista(num.value, nums)) {
        nums.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
    } else {
        alert("O valor inválido ou já está na lista!")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(nums.length != 0){
        var res = document.getElementById("res")
        var maior = Math.max.apply(null, nums)
        var menor = Math.min.apply(null, nums)
        var s = nums[0]
        for(c = 1; c < nums.length; c++){
            s = s + nums[c]
        }
        
        res.innerHTML = `<p>Ao todo, temos ${nums.length} valores cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p> `
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${s}</p>`
        s = s/nums.length
        res.innerHTML += `<p>A média dos valores digitados é ${s}</p>`
    }else{
        alert('adicione valores antes de finalizar!')
    }

}