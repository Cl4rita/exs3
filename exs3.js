let resposta = document.getElementById("resposta")
let vetor = []

function valorAleatorio(){
    // valor_aleatorio = Math.floor(Math.random() * (max - min + 1) ) + min
    let valor = Math.floor(Math.random() * (10 - 1 + 1) ) + 1
    // console.log(valor)
    return valor
}

function media(){
    let somaPar = 0, somaImpar = 0
    let val = Number(document.getElementById("val").value)
    if(val==5){
        for(let i=0;i<val;i++){
            vetor.push(valorAleatorio())
        }
        console.table(vetor)
        for(let i=0;i< val;i++){
            if(vetor[i] % 2 == 0){
                somaPar += vetor[i]
            }else if(vetor[i] % 2 == 1){
                somaImpar += vetor[i]
            }
        }
        console.log("A soma dos pares é: " + somaPar + "<br>")
        console.log(`A soma dos impares é: ${somaImpar}`)
        resposta.innerHTML = ""
        resposta.innerHTML += "A soma dos pares é: " + somaPar + "<br>"
        resposta.innerHTML += `A soma dos impares é: ${somaImpar}`
    }else{
        resposta.innerHTML = "Tente novamente!"
    }
}