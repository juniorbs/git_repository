function contar(){
    var ini = document.getElementById("init")
    var fim = document.getElementById("fim")
    var pss = document.getElementById("passo")
    var res = document.getElementById("res")

    res.innerHTML = "Contando: "
    var init = Number(ini.value)
    var fimt = Number(fim.value)
    var psst = Number(pss.value)
     
    for(var i = init;i <= fimt;i += psst){
       // var resul = i
        res.innerHTML += `${i}  `
    }
}