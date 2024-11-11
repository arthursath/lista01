/*
Pedro está organizando seus filmes favoritos. Crie um array chamado filmesFavoritos com três filmes de sua escolha. 
Modifique o primeiro filme para um novo título. Verifique se o último filme da lista é "Harry Potter". 
Se não for, adicione "Harry Potter" ao final da lista. Imprima a lista de filmes favoritos no final.
*/

let filmesFavoritos = ["star wars", "star wars 2", "star wars 3" ]

filmesFavoritos[0] = "star wars 4";

if(filmesFavoritos[filmesFavoritos.length - 1] !== "star wars 4"){
    filmesFavoritos.push("star wars")
}