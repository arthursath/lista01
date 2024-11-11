/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

let tarefas = []

tarefas.push(prompt("Adicione 1 tarefa à sua lista"))
tarefas.push(prompt("Adicione 2 tarefa à sua lista"))
tarefas.push(prompt("Adicione 3 tarefa à sua lista"))

tarefas.splice(1,1)

tarefas.push("ligar para o médico")
alert(tarefas)

