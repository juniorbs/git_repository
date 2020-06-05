
let res = num(5);
console.log(`A dezena referente é ${res}`)

function num(inp){
    console.log(`O número digitado foi ${inp}`)
    let num = Number(inp)
    let dez = num * 10
    return (dez)
}

