document.getElementById('cep').addEventListener('blur', function(){
    let cep = this.value.replace(/\D/g, '');
    
    if (cep){
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if(!data.erro){
                document.getElementById('rua').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            }else{
                alert('CEP não encontrado!')
                clearAddresFields();
            }
        })
        .catch(error =>{
            alert('Erro ao localizar o CEP');
            clearAddresFields();
        })
    
    }else{
        clearAddresFields();
    }
});

function clearAddresFields(){
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}