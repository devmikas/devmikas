
function tabuada() {
	let num = document.getElementById("txtn");
	let tab = document.getElementById("seltab");

	if (num.value.length == 0) {
	  // Corrigido para verificar o valor do campo corretamente
	  window.alert("Por favor, digite um número!");
	} else {
	  let n = Number(num.value);
	  let c = 1;
	  tab.innerHTML = ""; // Limpa o campo de tabuada antes de gerar

	  while (c <= 10) {
		 let item = document.createElement("option"); // Corrigido "intem" para "item"
		 item.text = `${n} x ${c} = ${n * c}`; // Texto da tabuada
		 tab.appendChild(item); // Adiciona a opção ao select
		 c++; // Incrementa o contador
	  }
	}
 }