let nume = parseFloat(window.prompt('digite o numerador'));
let deno = parseFloat(window.prompt('digite o denominador'));

if (deno === 0){
    window.alert(`não é possivel dividir por zero`);
}
else{
    let result = nume / deno
    window.alert(`a divisão é: ${result.toFixed(1)}`)
}

