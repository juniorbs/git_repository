function alturaArvoreUtopica(ciclos){
    let verao = 1;
    let primavera = 2;
    let alturaArvore = 1;
    for(let i = 0; i <= ciclos; i--){
        if(ciclos > 2 ){
            alturaArvore = alturaArvore * primavera;
        }else{
            alturaArvore = alturaArvore + verao;
        }
        console.log(alturaArvore)

    }
}

alturaArvoreUtopica(3);

/*var nome = 'Junior';
var sobrenome = 'Santos';
var idade = 31;
var resultado = (nome + " "  + sobrenome + " " + "terá" + " " + idade + " " + "anos")
console.log(resultado)


function eNumeroDaSorte(num1){
    return  (num1 > 0 && (num1%2 || num1%3) && num1 != 15);
}
console.log(eNumeroDaSorte(7));

function possoIrAoBanco(diaDaSemana, horaAtual){
    return (diaDaSemana != 'Domingo' && diaDaSemana != 'Sábado' ) && (horaAtual >= 10 && horaAtual <= 15);
}

console.log(possoIrAoBanco('Sábado', 11))



function imprimirAzul4(){
    for (var i = 0; i < 4; i++){
            console.log("Azul");
    }
}

imprimirAzul4();

function imprimir5vezes5 (){
    for (var i = 0; i < 5 ;i++){
        console.log (5);
    }
}

imprimir5vezes5();


function passoAPasso(){
    for (var i = 0; i < 5 ; i++ ){
        console.log(i);
    }
}

passoAPasso();

function eNumeroDaSorte(num1){
    return  ((num1 > 0) && (num1%2 || num1%3) && (num1 != 15));
}
console.log(eNumeroDaSorte(7));

function passandoPor(){
    for (var i = 0; i < 4; i++)
    console.log('aqui eu tenho o valor' +  " " + i)
}

passandoPor();

function passandoPelosPares(){
    for(var i = 0;i<=10;i++){
        if(i%2 == 0){console.log('aqui eu tenho o valor de' + ' ' + i)}
    }    
}

passandoPelosPares();

var soma5 = 0;
function somar5MoedasDe25Centavos(){
        for (var i = 0; i<5;i++){
            soma5 = soma5 + 0.25;
            console.log(soma5) ;
        }
}

somar5MoedasDe25Centavos();

var somar = 0;
function somatoria(num){
    for(var i = 0;i<num;i++){
         somar = somar + i;
    }
    console.log(somar);
}

somatoria(5);


somarMoedas = 0;
function somarMoedasDe25(quantidadeDeMoedas){
    for(var i = 0; i < quantidadeDeMoedas;i++){
        somarMoedas = somarMoedas + 0.25
    }
    console.log(somarMoedas) ;
}
somarMoedasDe25(10);

//console.log(somarMoedasDe25(1));

var total = 0;
function somatoria(num){
    //for(var i = 0;i<num;i++){
    for(var i = 0;i <= num; i += 2){
        total = total + i;
        console.log(i);
    }
            return total;
}

console.log(somatoria(10));


var totalCalorias = 0;
var totalCaloriasPorVolta = 0;

function caloriasDeTrote(voltas){
    for(var i = 0; i <= voltas; i++ ){
            totalCaloriasPorVolta = 5 * i;
            totalCalorias = totalCalorias + totalCaloriasPorVolta;
    }
return totalCalorias;
}
caloriasDeTrote(1);
console.log(totalCalorias)

function mover(arrayUm, arrayDois){
    var num = arrayUm.pop();
    arrayDois.push(num)
}

var umArray = [1, 2, 3];
var outroArray = [4, 5];

mover(umArray, outroArray);
console.log(umArray,outroArray);


var diasDeTrabalho = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]

console.log(diasDeTrabalho[10])


quantidadeDeMesesComLucro([0, 3, -1, 5])
function quantidadeDeMesesComLucro(umPeriodo) {
    let quantidade= 0;
    for (let mes=0; mes < umPeriodo.length; mes++) {
      if (umPeriodo[mes] > 0){    
        quantidade = quantidade + 1;
  }
    }
    console.log(quantidade) ;
  }


  function saldoDeMesesComLucro(umPeriodo) {
    var novoarray = [];
    for (let i=0; i < umPeriodo.length; i++) {
      if (umPeriodo[i] > 0){   
        let num = umPeriodo[i];
        novoarray.push(num);
  }

    }
    console.log(novoarray)  ;

  }

  saldoDeMesesComLucro([10, -10, 2, 100])


  function naipeDeTruco(naipe) {
    var resultado = [];
    for (var i = 1; i <= 12; i++) {
      if (i == 8 || i == 9) {
       } else {
        resultado.push(i + " de " + naipe);
      }
    }
    console.log(resultado)// resultado;
  }

  naipeDeTruco('espadas')




  function acontece(alunosDaSegunda){
    var alunosNaHora = [ ];
    let qtdAlunoHr = 0;
    for (i = 0; i < alunosDaSegunda.length; i++){
        if(alunosDaSegunda[i] <= 0){
             let num = alunosDaSegunda[i];
             qtdAlunoHr = qtdAlunoHr + 1;
             alunosNaHora.push(num);
        }
    }
    console.log(alunosNaHora)
}

var alunosDaSegunda = [10, -5, 3, 0];
acontece(alunosDaSegunda);
*/

/*function aberturas(entraDaSemana, qtdMin){
    var alunosNaHora = [];
    let  qtdAlunoHr = 0;
    console.log(entraDaSemana.length);
    for (i = 0; i < entraDaSemana.length; i++){
        if(entraDaSemana[i] <= 0){
            let num = alunosDaSegunda[i];
            qtdAlunoHr = qtdAlunoHr + 1;
            alunosNaHora.push(num);
        }
    }
    if(qtdAlunoHr < qtdMin){
        return false;
    }else{
        return true;
    }
}


function teste(semana,qtd){
    console.log(semana.length)
    console.log(semana[1][1])
    let newarray = [];

    for(var i = 0; i < semana.length; i++){
       for(var j = 0; j < semana[i].length;j++){
        newarray.push(semana[i][j])
    }
}
console.log(newarray)
}

var alunosDaSegunda = [10, -5, 4, 0];
var alunosDaTerça = [10, -5, 0, 0];
var alunosDaQuarta= [10, -5, -1, 0];
console.log(teste([alunosDaSegunda,alunosDaTerça,alunosDaQuarta],2))
*/

function acontece(alunosDaSegunda, qtdMin){
    let qtdAlunoHr = 0;
    for (var i = 0; i < alunosDaSegunda.length; i++){
        if( alunosDaSegunda[i] <= 0 ){
             qtdAlunoHr = qtdAlunoHr + 1;
        }
    }
    if(qtdAlunoHr >= qtdMin){
        return true;
    }else{
        return false;
    }
}

/*
function acontece (alunosDia, quorum){
    let presentes = 0;
    for (let i = 0; i < alunosDia.length; i++){
    if (alunosDia[i] <= 0){
       presentes++; 
    }   

    if (presentes >= quorum) {
              return true;

    }
  }
  return false;  
}*/


/*function aberturas(entradaSemana, qtdMin){
    var alunosNaHoraSemana = [];
    let newValue = [] 
    for (i = 0; i < entradaSemana.length; i++){
  //console.log(entradaSemana[i])
  newValue.push(acontece(entradaSemana[i],qtdMin))
  //alunosNaHoraSemana.push(newValue); 
    }
    console.log(newValue)
  //console.log(alunosNaHoraSemana) ;
}

var alunosDaSegunda = [10, -5, 4, 1];
var alunosDaTerça   = [10, -5, 0, 0];
var alunosDaQuarta  = [10, -5, 7, 1];
aberturas([alunosDaSegunda,alunosDaTerça,alunosDaQuarta],2)*/


/*function acontece (alunosDia, quorum){

    let presentes = 0;
 
    for (let i = 0; i < alunosDia.length; i++){
      if (alunosDia[i] <= 0){
         presentes++; 
      }   
 
      if (presentes >= quorum) {
                return true;

      }
    }
    return false;  
 }
 
 function aberturas (alunosDia, quorum){
 
    let resultadoArray = [];
 
    for (let i = 0; i < alunosDia.length; i++){
 
     resultadoArray.push(acontece(alunosDia[i], quorum));
 
    }
 
    return resultadoArray;  
 
 } 
 */


/*function fatorial(num){
    let resul = 1;
    for(let i = num; i > 1; i--){
        resul = resul * i;

    }
    console.log('Valor de resultado2OUT:',resul);
}

fatorial(5);*/

/*function maisMenos(numArray){
    let newArray = [];
    let resulPos, pos = 0;
    let resulNeg, neg = 0;
    let resulZero, zero = 0;
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            pos++;
        }if(numArray[i] < 0){
            neg++;
        }if(numArray[i] == 0){
            zero++;
        }
    }
    resulPos = pos/numArray.length;
    resulNeg = neg/numArray.length;
    resulZero = zero/numArray.length;
    newArray.push(resulPos, resulNeg, resulZero);
    
    console.log(newArray); 
}

maisMenos([1, 0])


function escada(num){
    var degrau = [];
    for(var i = 1; i <= num; i++){
            espaco = num-i
       degrau.push(" ".repeat(espaco) + "#".repeat(i));
       console.log(degrau) ;

    }
}

escada(5);*/
