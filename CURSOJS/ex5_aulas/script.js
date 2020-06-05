    let numb  = document.getElementById("numb")
    let lista = document.getElementById("lista")
    let res   = document.getElementById("res")
    let numeros = []

function adicionar(){

    if(isNumber(numb.value) && !inList(numb.value, numeros)){
        numeros.push(Number(numb.value))

        let item  = document.createElement("option");//criar elemento de forma dinamica
        item.text = `Valor adicionado.: ${numb.value}`
        lista.appendChild(item)
    }else{
        window.alert("Valor inválido ou já adicionado na lista")
    }
    numb.value = ' ';
    numb.focus();
}

function analisar(){
    if(numeros.length == 0){
        window.alert("Adicione valores")
    }else{
    
    let t_itens = numeros.length;
    let t_soma  = somar(numeros);
    let t_maior = ma_ordem(numeros);
    let t_menor = me_ordem(numeros);

    
    res.innerHTML = '';
    res.innerHTML += `<p>O total de itens adicionados: ${t_itens}</p>`;
    res.innerHTML += `<p>A soma de todos os itens: ${t_soma}</p>`;
    res.innerHTML += `<p> O maior valor digitado foi: ${t_maior}</p>`;
    res.innerHTML += `<p> O menor valor digitado foi: ${t_menor}</p>`;
    res.innerHTML += `<p>A média dos itens: ${(t_soma/t_itens)}</p>`;
    }
}

function limpar(){
    if (res.innerHTML.length != 0){
        res.innerHTML = ' ';
        lista.innerHTML = ' ';
    }
}

function ma_ordem(nums){
    t_maior = nums[0];

    for(pos in nums){
        if(nums[pos] > t_maior){
            t_maior = nums[pos]
        }
    }
    return t_maior
}

function me_ordem(nums){
    t_menor = nums[0];
    for(pos in nums){
        if(nums[pos] < t_menor){
            t_menor = nums[pos]
        }
    }
    return t_menor
}

function somar(nums){
   let soma = 0;
   for(var i=0;i < nums.length;++i){
       if(nums[i] >= 1){
        soma += nums[i]
       }
    }
    return soma
}

function media(){
    for(pos in numeros){
        
    }
}

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){// para saber se foi digitado um valor e este valor é válido, verificar se o valor esta entre 1 e 100
        return true
    }else{
        return false
    }
}

function inList(n, list){
    if(list.indexOf(Number(n)) != -1){//indexOf,procura um valor da lista, quando ñ é encontrado retorna -1
        return true
    }else{
        return false
    }
}
