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
// document.getElementById('btnbuscar')
//  .addEventListener('click', pesquisar);
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
    atendimentos.push(cliente);

    res.innerHTML = `

    Cliente : <Strong>${n}</Strong><br>
    Senha: <Strong>${senha}</Strong><br>
    Classificação:<Strong>${classe}</Strong>
    `;

    

    exibirLista();
    exibirEstatisticas();

    nome.value = '';
    idade.value = '';

    function exibirEstatisticas(){

        let prioritarios = atendimento.filter(
            cliente => cliente.idade >= 60
        );

        estatisticas.innerHTML = `
        Total de clientes: ${atendimentos.length}<br>
        Clientes prioritarios: ${Prioritarios.length}
        `;
    }

 }

 function exibirLista(){
    lista.innerHTML = '';

    for (let cliente of atendimentos){

        lista.innerHTML +=`
        <p>
        ${cliente.senha} - 
        ${cliente.nome} - 
        ${cliente.classe}
        </p>
        `;
    }
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
 function limparfila(){
    atendimentos = [];
    contador = 0;

    lista.innerHTML = '';
    estatisticas.innerHTML = '';
    res.textContent = 'Fila limpa com sucesso';
 }
 
