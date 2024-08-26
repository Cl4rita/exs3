let resposta = document.getElementById("resposta")
let vetor = []

function gravar(){
   let vals = Number(document.getElementById("vals").value)
    if(vetor.length < 5){
         vetor.push(vals)
        console.table(vetor)
    }else{
        resposta.innerHTML = "O número máximo de elementos é 5 itens!"
     }
}
function media(){
    let soma = 0
    let media = 0
    if(vetor.length == 5){
        for(let i=0;i<vetor.length;i++){
            soma = soma + vetor[i]
        }
        media = soma / vetor.length
        console.log("A soma dos elementos é: " + soma + "<br>")
        console.log("A média dos elementos é: " + media + "<br>")
        resposta.innerHTML += "A soma dos elementos é: " + soma + "<br>"
        resposta.innerHTML += "A média dos elementos é: " + media + "<br>"
    }else{
        resposta.innerHTML = "O número digitado é inferior a 5. Digite mais!"
    }
}

// let resposta = document.getElementById("resposta")
// let vetor = []

// function gravar(){
//     let vals = Number(document.getElementById("vals").value)
//     vetor.push(vals)
// }
// function media(){
//     let media,soma = 0
//     for(i=0;i<5;i++){
//         soma = soma + vetor[i]
//     }
// console.log(soma)
// media = soma / vetor.length
// console.log(media)

// resposta.innerHTML = "A média dos valores digitados é " + media
// }
