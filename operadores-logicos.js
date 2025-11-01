
const notaFinal = 6;
const faltas = 5;

if(notaFinal <7 || faltas > 4){
    console.log('Reprovado, boas festas');
}else{
    console.log('Não foi reporvado por faltas');
}

if(notaFinal <7 && faltas > 4){
    console.log('Reprovado, boas festas');
}else{
    console.log('Não foi reporvado por faltas');
}

const advertencias = 0;

if(notaFinal >=2 && !advertencias){
    console.log('Recebeu bonus');
}else{
    console.log('Não recebeu bonus');
}

if(notaFinal >=2 && advertencias){
    console.log('Recebeu bonus');
}else{
    console.log('Não recebeu bonus');
}


