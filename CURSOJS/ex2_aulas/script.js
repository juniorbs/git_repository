 function verificar(){
    var actualdate = new Date() //DECLARA VARIÁVEL E ARMAZENA A DATA
    var actualyear = actualdate.getFullYear() //DECLARA VARIÁVEL E ARMAZENA O ANO DA DATA
    var year_i = document.getElementById("txtano")//DECLARA VARIÁVEL E A ATRIBUI PARA UM ELEMENTO DO HTML
    var res = document.getElementById("res") //DECLARA VARIÁVEL E A ATRIBUI PARA UM ELEMENTO DO HTML

    if(year_i.value.length = 0 || Number(year_i.value) > actualyear){//SE O ANO DIGITADO PELO USUÁRIO FOR BRANCO OU SE > QUE O ANO ATUAL, ERRO.
        window.alert("[ERR] Verifique os dados e tente novamente")
    }else{
        var rsex_i = document.getElementsByName("radsex")
        var age = actualyear - Number(year_i.value)

        var img = document.createElement("img")//DECLARA VARIAVEL IMG, CRIANDO UM ELEMENTO HTML PARA ELA.
       // img.setAttribute("id", "foto")
        //res.innerHTML = `Idade calculada ${age}`
        
        var gen = ''//INICIALIZA GEN COMO BRANCO, POIS MUDARÁ DE ACORDO COM O CHECK ESCOLHIDO
        if(rsex_i[0].checked){//VERIFICAR SE O PRIMEIRO CHECK FOI CLICADO
            gen = "Masculino"
            if(age >= 0 && age <= 10){
                //menino
                img.setAttribute('src','foto-bebem.png')//SETA ATRIBUTO SRC, E DETERMINADA IMAGEM PARA O "ELEMENTO" IMG.
            }else if(age < 21){
                //jovem
                img.setAttribute('src','foto-jovemm.png')
            }else if(age < 50){
                //adulto
                img.setAttribute('src','foto-adultom.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idosom.png')
                 }
            }
        else{
            gen = "Feminino"
            if(age >= 0 && age <= 10){
                //menina
                img.setAttribute('src','foto-bebef.png')
            }else if(age < 21){
                //jovem
                img.setAttribute('src','foto-jovemf.png')
            }else if(age < 50){
                //adulta
                img.setAttribute('src','foto-adultof.png')
            }else{
                //idosa
                img.setAttribute('src','foto-idosof.png')
                 }
        }
         res.innerHTML = `Sexo ${gen} com ${age} anos`//ATRIBUI SAIDA PARA ELEMENTO RES DO HTML
         res.appendChild(img)//IMAGEM É MOSTRADA NA TELA, DE ACORDO COM A CONDIÇÃO 
    }
}
