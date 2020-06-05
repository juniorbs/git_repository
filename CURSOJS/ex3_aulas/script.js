function contar(){

    var ini = document.getElementById("init")
    var fim = document.getElementById("fim")
    var pss = document.getElementById("passo")
    var res = document.getElementById("res")
    
    res.innerHTML = "Contando: "
    var init = Number(ini.value)
    var fimt = Number(fim.value)
    var psst = Number(pss.value)

   
     if (ini.value.length ==  0){
        window.alert("Entre com um valor de INICIO")
     }else if(fim.value.length == 0){
        window.alert("Entre com um valor FINAL")
     }else if(pss.value.length == 0 || psst < 1){
        window.alert("Entre com um valor PASSO")
        return;
     }
     
     if(init < fimt){
        for(var i = init;i <= fimt;i += psst){
            res.innerHTML += `${i} `
          }
        }else{
            for(var j = init;j >= fimt;j -= psst){
                res.innerHTML += `${j} `//+= -> concatenação
            }
        }
    }
