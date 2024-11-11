/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = []

listaCompras.push(prompt('item 1'));
listaCompras.push(prompt('item 2'));
listaCompras.push(prompt('item 3'));

if(listaCompras[listaCompras.length - 1] !== "leite"){
    listaCompras.push('leite')
}

alert(listaCompras);


// let produto1
// let produto2
// let produto3
 
// alert('Adicione 3 itens a sua lista.')
// produto1 = prompt("Digite o primeiro item.")
// produto2 = prompt("Digite o segundo item.")
// produto3 = prompt("Digite o terceiro item.")

// if(produto3 = 'leite'){
//     alert(listaCompras);
// }else{
//     listaCompras.push('leite');
//     alert(listaCompras);
// }