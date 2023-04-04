function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.jpg'
        document.body.style.background = '#ffe181'
    } else if(hora >= 12 && hora <= 18){
        //tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#e6781e'
    }else{
        //noite
        img.src = 'noite.jpg'
        document.body.style.background = '#123142'
    }
}



