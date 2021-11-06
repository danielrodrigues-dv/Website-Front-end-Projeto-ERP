function dan(){
 alert('Em manutenção')
}

function entrar(){
    var a = document.getElementById('btnuser').value
    var b = document.getElementById('btnpassword').value

    if(a == 'daniel' && b == 123){
        location.replace ('index.html')
    }else if(a== 0 && b ==0){
        alert('Por favor, preencha todos os campos obrigatórios!')
    }
    else if(a== 'daniel' && b ==0){
        alert('Por favor, preencha o campo da senha!')
    }
    else if(a== 0 && b ==123){
        alert('Por favor, preencha o campo do usuário!')
    }
    else{
        alert('Senha invalida')
    }
}


