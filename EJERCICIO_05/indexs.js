function calculos(){
    let A = document.getElementById("A").value
    let B = document.getElementById("B").value
    let C = document.getElementById("C").value

    if (A > 0 && B > 0 && C > 0 && A > C) {
        let triangulo = B * (A-C) / 2;
        let rectangulo =  A * B
        let resultado = triangulo+rectangulo
        alert(`Su Area es: ${resultado}`)
    }
    else{
        alert("Error,debe ingresar numeros positivos y/o corregir sus lados")
    }

    
}

