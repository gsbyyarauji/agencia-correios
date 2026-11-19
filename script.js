let atendimentos = [];
const botao = document.getElementById('btn');
const nome = documemt.getElementById('txtnome');
const idade = document.getElementById('txtidade');
const res = document.getElementById('res');
const lista = document.getElementById('listaAtendimentos');
const busca = documemt.getElementById('txtbusca');
const resultadoBusca = document.getElementById('resultadoBusca');
const estatisticas = document.getElementById('estatistica');
let contador = 0;

botao.addEventListener('click', processar);
document.getElementById('btnbuscar')
 .addEventListener('click', pesquisar);
 documemt.getElementById('btnlimpar')
 .addEventListener('click', limparfila);

 function processar() {
    let n = nome.value.trim().ToUpperCase();
    let i = Number(idade.value);
    
    if(n ===''|| idade.value === ''){
        res.textContent = 'Preencha todos os campos';
        return;
    }
    if(!Number.isInteger(i) || 1 < 1 || i > 120) {
        res.textContent = 'idade invalida';
        return;
    }
    if (i < 18) {
        res.textContent = 'atendimento recusado';
        return;
    }
    let classe = classficar(i);

     contador++;

    let senha = 'A-' + String(contador).padStart(3, '0');

    let Cliente ={
        nome: n,
        idade: i,
        senha: senha,
        classe: classe
    };
 }
   

 function classficar(idade){
    if (idade <18){
        return'Menor de idade';
    }
    else if (idade < 60){
        return'Comun';
    }
    else if(idade <80){
        return 'Prioritario';
    }
    else{
        return 'Especial';
    }

 }
 
