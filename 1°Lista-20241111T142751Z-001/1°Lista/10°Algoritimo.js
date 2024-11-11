/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

let array = [1,2,3,4,5,6,7,8,2,10]

alert(array)

let pedido = prompt("Digite o numero para a busca: ")

let posicao = []

for(let i = 0; i < array.length; i++){

    if(array[i] == pedido){
        posicao.push(i)
    }
}

if(posicao.length > 0){
    alert("Seu numero foi encontrado! \nSeu numero foi: " + pedido + " Nas seguintes casas: " + posição)
} else{
    alert("Seu numero nao foi encontrado.")
}
