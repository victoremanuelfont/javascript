
//Função sem parametros e sem Retorno
function exibeNome(){
    console.log('Caroline');
}
exibeNome();


//Função com parâMETROS
function exibeNomeEstudante(nome){
    console.log(nome);
}
exibeNomeEstudante('Victor');
exibeNomeEstudante('Vinicius');


function exibirInfosEstudante(nome, nota){
    console.log(nome,nota);
}
exibirInfosEstudante('victor',10);

//com retorno
function exibirInfos(nome, nota){
    return `O nome é ${nome} e a nota é ${nota}`;
}
console.log(exibirInfos('Victor', 1000));