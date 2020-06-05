function calcular(){
    let inpnumb = document.getElementById("inpnumb")
    let mult = Number(inpnumb.value)
    let res = document.getElementById("res")
    let att = document.getElementById("att")

    res.innerHTML = ' '; 
    att.innerHTML = ' ';
    if (inpnumb.value.length == 0){
        att.innerHTML = `Entre com um multiplicador`
        att.style.color = 'red'
    }else{
        for(let i = 0;i <= 10;i++){
        let item = document.createElement("option");
        item.text = `${mult} x ${i} = ${mult*i}`
        res.appendChild(item);    
     }
    }
}

