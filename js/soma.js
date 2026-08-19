var nome01 = 'jose';
var nome02 = "João";

var juncaoNome = nome01 + ' ' + nome02;

console.log("O primeiro nome é " + nome01 + " e o segundo nome é " + nome02 + " e a junção dos dois nomes é: " + juncaoNome);
console.log(5 + 6 * 10);

function mostrarResultado() {
	var input1 = document.querySelector('#numero01');
	var input2 = document.querySelector('#numero02');

	if (input1 && input2) {
		var val1 = input1.value.trim();
		var val2 = input2.value.trim();

		if (val1 === '' || val2 === '') {
			document.querySelector('#demo').innerHTML = 'Por favor, insira os dois números.';
			return;
		}

		var numero01 = Number(val1);
		var numero02 = Number(val2);

		if (isNaN(numero01) || isNaN(numero02)) {
			document.querySelector('#demo').innerHTML = 'Valores inválidos. Insira números.';
			return;
		}

		var soma = numero01 + numero02;
		document.querySelector('#demo').innerHTML = 'Resultado: ' + soma;
	} else {
		
		var numero01 = 10;
		var numero02 = 80;
		var soma = numero01 + numero02;
		document.querySelector('#demo').innerHTML = 'Resultado: ' + soma;
	}
}