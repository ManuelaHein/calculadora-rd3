document.getElementById('calculate').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    

    /*If em caso de numero inválido*/
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1===0) {
        document.getElementById('result').textContent = 'Inválido';
        return;
    }

    /*armazena a conta em uma variavel. let é um valor q muda*/
    let result = (num3 * num2) / num1;


    /*exibir o resultado*/
    /**se o resultado for um numero inteiro, não aparecerá virgula */
    if (Number.isInteger(result)) {
        document.getElementById('result').textContent = result; 
    } else {
    document.getElementById('result').textContent = result.toFixed(2).replace('.', ','); /**tofixed = aparecem apenas duas caasas decimais */
    }
});