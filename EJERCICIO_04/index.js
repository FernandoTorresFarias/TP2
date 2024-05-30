function calculos(){
    let peso = document.getElementById("peso").value  
    let altura = document.getElementById("altura").value
    
    if ( peso > 0 && altura > 0) {
        let resultado = peso / altura
        alert(`Su IMC: ${resultado}`)
    }
    else{
        alert("Ingrese valores positvos ")
    }
}

