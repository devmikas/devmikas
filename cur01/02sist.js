
function contar() {
	let ini = document.getElementById('txti')
	let fim = document.getElementById('txtf')
	let passo = document.getElementById('txtp')
	let res = document.getElementById('res')

	if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
	  window.alert('[ERRO] Faltam dados!')
	} else {
	  res.innerHTML = 'Contando: '
	  let i = Number(ini.value)
	  let f = Number(fim.value)
	  let p = Number(passo.value)

	  // Verifica se o passo é maior que 0
	  if (p <= 0) {
		 window.alert('Passo inválido! Considerando Passo 1')
		 p = 1
	  }

	  // Contagem progressiva ou regressiva
	  if (i < f) {
		 // Contagem crescente
		 for (let c = i; c <= f; c += p) {
			res.innerHTML += ` ${c} \u{1F449}` // emoji de seta apontando para a direita
		 }
	  } else {
		 // Contagem regressiva
		 for (let c = i; c >= f; c -= p) {
			res.innerHTML += ` ${c} \u{1F449}` // emoji de seta apontando para a direita
		 }
	  }
	  res.innerHTML += ` \u{1F3C1}` // emoji de bandeira de chegada
	}
 }