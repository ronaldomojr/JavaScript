
let lista = [];


lista.push("Maçã");
lista.push("Pão");
lista.push("Leite");
console.log("Após PUSH:", lista);


lista.unshift("Ovos");
console.log("Após UNSHIFT:", lista);


let removido1 = lista.pop();
console.log("POP removeu:", removido1);
console.log("Lista:", lista);


let removido2 = lista.shift();
console.log("SHIFT removeu:", removido2);
console.log("Lista final:", lista);
