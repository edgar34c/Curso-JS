function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var txtAno = window.document.querySelector('input#txtAno')
    var res = window.document.querySelector('div#res')
    var img = window.document.querySelector('img#imagem')
    if(txtAno.value.length == 0 || txtAno.value > ano){
        window.alert('[ERRO] Verifique se o ano digitado etá correto')
    }else{
        var idade = ano - txtAno.value
        //pega dados do radio
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        //cria elemento img
        var img = document.createElement('img')
        //passa id para o img
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                //passa imagem para img criado com JS
                img.setAttribute('src', 'menino.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'jovem-homem.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto-homem.jpg')
            }else{
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'menina.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'jovem-mulher.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto-mulher.jpg')
            }else{
                img.setAttribute('src', 'idoso-mulher.jpg')
            }
        }

        //alinha texto no centro na div
        res.style.textAlign = 'center'
        //passa texto para a div
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //adiciona o elemento img na div
        res.appendChild(img)
    }
}