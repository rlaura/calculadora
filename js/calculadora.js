var val1 = ''
	var val2 = ''
	var signo = ''

	function guardarValor(valor) {
		if(val2 == 0 && signo == ''){
			val1 += valor.toString()
			document.getElementById('calculadora').value += valor
		
		} else {
			val2 += valor.toString()
			document.getElementById('calculadora').value += valor
		}
	}

	function guardarSigno(valor) {
		
		if (val2 == ''){
			signo = valor
			document.getElementById('calculadora').value = ''
		} else {	
			let aux = total();
			document.getElementById('calculadora').value = total()
			limpiar();
			val1 = aux
		}
	}

	$('button').click(function () {
		var valor = $(this).attr('value');
		var control = document.getElementById('calculadora').value
		if(control != '' && val1 == '' && val2 == ''){
			document.getElementById('calculadora').value = '';
		}
		switch (valor){
			case '1':
				guardarValor(1);
				break;
			case '2':
				guardarValor(2);
				break;
			case '3':
				guardarValor(3);
				break;
			case '4':
				guardarValor(4);
				break;
			case '5':
				guardarValor(5);
				break;
			case '6':
				guardarValor(6);
				break;
			case '7':
				guardarValor(7);
				break;
			case '8':
				guardarValor(8);
				break;
			case '9':
				guardarValor(9);
				break;
			case '0': 
				guardarValor(0);
				break;
			case '+':
				guardarSigno('+');	
				break;
			case '-':
				guardarSigno('-');
				break;
			case '*':
				guardarSigno('*');
				break;
			case '/':
				guardarSigno('/');
				break;
			case '.':
				let n = ''
				if(signo == ''){
					let str = val1.toString();
					n = str.includes(".");
				} else {
					let str = val2.toString();
					n = str.includes(".");
				}
				
				if(n){

				}else{
					guardarValor('.');
				}
				
				break;	
			case 'reset':
				limpiar()
				document.getElementById('calculadora').value = ''
				break;
			case 'ac':
				if(val2 == ''){
					let last = val1.toString()
					last = last.slice(0,-1);
					console.log(last)
					val1 = last
					console.log(val1)
					document.getElementById('calculadora').value = last
				} else {
					let last = val2.toString();
					last = last.slice(0,-1);
					console.log(last)
					val2 = last
					console.log(val2)
					document.getElementById('calculadora').value = last
				}
				break;
			case '=':
				let res = total()
				document.getElementById('calculadora').value = total()
				limpiar();
				val1 = res
				
				break;
			case 'mm':
				if(val2 == ''){
					val1 = val1*(-1);
					document.getElementById('calculadora').value = val1
				} else {
					val2 = val2*(-1);
					document.getElementById('calculadora').value = val2
				}
				break;
			default:
				alert()
		}
	})

	function limpiar() {
		val1 = ''
		val2 = ''
		signo = ''

	}

	function total() {
		let resultado = 0
		switch(signo){
			case "+":
				resultado = (Number(val1)+Number(val2))
				
				break;
			case "-":
				resultado = (Number(val1)-Number(val2))
				
				break;	
			case "*":
				resultado = (Number(val1)*Number(val2))
				
				break;
			case "/":
				resultado = (Number(val1)/Number(val2))
				break;
			default: 
				resultado = val1	
			}

		return resultado
	}