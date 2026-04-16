const formulario = document.getElementById('formulario');
const camposCep = document.getElementById('cep');
const camposLogradouro = document.getElementById('logradouro');
const camposNumero = document.getElementById('numero');
const camposUf = document.getElementById('uf');

camposCep.addEventListener('input', function() {
    let valor = this.value.replace(/\D/g, '');
    valor = valor.replace(/^(\d{5})(\d{3})/, '$1-$2');
    this.value = valor;
});

camposUf.addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});

camposNumero.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
});

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    limparErros();
    
    let cepValido = validarCep();
    let logradouroValido = validarLogradouro();
    let numeroValido = validarNumero();
    let ufValida = validarUf();
    
    if (cepValido && logradouroValido && numeroValido && ufValida) {
        alert('Endereço cadastrado com sucesso!');
        formulario.reset();
    }
});

function validarCep() {
    const valor = camposCep.value.trim();
    
    if (valor === '' || valor.length === 0) {
        mostrarErro(camposCep, 'CEP é obrigatório');
        return false;
    }
    
    const regexCep = /^\d{5}-\d{3}$/;
    
    if (!regexCep.test(valor)) {
        mostrarErro(camposCep, 'CEP deve estar no formato 00000-000');
        return false;
    }
    
    return true;
}

function validarLogradouro() {
    const valor = camposLogradouro.value.trim();
    
    if (valor === '') {
        mostrarErro(camposLogradouro, 'Logradouro é obrigatório');
        return false;
    }
    
    if (valor.length < 5) {
        mostrarErro(camposLogradouro, 'Logradouro deve ter no mínimo 5 caracteres');
        return false;
    }
    
    return true;
}

function validarNumero() {
    const valor = camposNumero.value.trim();
    
    if (valor === '') {
        mostrarErro(camposNumero, 'Número é obrigatório');
        return false;
    }
    
    const regexNumero = /^\d+$/;
    
    if (!regexNumero.test(valor)) {
        mostrarErro(camposNumero, 'Número deve conter apenas dígitos');
        return false;
    }
    
    return true;
}

function validarUf() {
    const valor = camposUf.value.trim();
    
    if (valor === '') {
        mostrarErro(camposUf, 'UF é obrigatório');
        return false;
    }
    
    const regexUf = /^[A-Z]{2}$/;
    
    if (!regexUf.test(valor)) {
        mostrarErro(camposUf, 'UF deve conter exatamente 2 letras maiúsculas (ex: SP)');
        return false;
    }
    
    return true;
}

function mostrarErro(campo, mensagem) {
    campo.classList.add('error');
    alert(mensagem);
}

function limparErros() {
    camposCep.classList.remove('error');
    camposLogradouro.classList.remove('error');
    camposNumero.classList.remove('error');
    camposUf.classList.remove('error');
}
