function load(){

    var actualdate = new Date()
    var actualtime = actualdate.getHours()
    var actualmin  = actualdate.getMinutes()
    var time = window.document.getElementById("time")
    var pic  = window.document.getElementById("pic")
    
    time.innerHTML = `Agora são ${actualtime} horas e ${actualmin} minutos`
    if (actualtime >= 6 && actualtime <= 12){
       //Bom dia
       pic.src = "/CURSOJS/ex1_aulas/images/morning.png"//ATRIBUI SRC=IMAGEM, PARA PIC, ELEMENTO DO HTML.
       document.body.style.background = "#C4A650"//MUDA O BACKGROUND COLOR DO CORPO DO HTML
    }else if(actualtime > 12 && actualtime < 18){
       //Boa tarde 
       pic.src = "/CURSOJS/ex1_aulas/images/afternoon.png"
       document.body.style.background = "#B4A360"
    }else{
       // Boa Noite
       pic.src = "/CURSOJS/ex1_aulas/images/night.png"
       document.body.style.background = "#3A5460"
    }
  
}

