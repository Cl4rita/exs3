let resposta = document.getElementById("resposta")
let vetor = []

function valorAlea(){
    let aleatorio = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    console.log(aleatorio)
    return aleatorio
}
valorAlea()

function media(){
    let soma = 0, media = 0
    let val = Number(document.getElementById("val").value)
    if(val==5){
        for(let i=0;i<val;i++){
            vetor.push(valorAlea())
        }
        console.table(vetor)
        for(let i=0;i< val;i++){
            soma += vetor[i]
        }
        media = soma / vetor.length
        console.log("A soma dos elementos é: " + soma + "<br>")
        console.log("A média dos elementos é: " + media.toFixed(2))
        resposta.innerHTML = ""
        resposta.innerHTML += "A soma dos elementos é: " + soma + "<br>"
        resposta.innerHTML += "A média dos elementos é: " + media.toFixed(2) + "<br>"
    }else{
        resposta.innerHTML = "Tente novamente!"
    }
}