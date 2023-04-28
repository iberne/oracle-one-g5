function encriptar() {
     var texto = document.getElementById("ingresar").value.toLowerCase();
     cifrado = texto.replace(/e/igm,"enter")
     cifrado = cifrado.replace(/o/igm,"ober")
     cifrado = cifrado.replace(/i/igm,"imes")
     cifrado = cifrado.replace(/a/igm,"ai")
     cifrado = cifrado.replace(/u/igm,"ufat")

    document.getElementById("chico").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("mensaje").innerHTML = cifrado;

    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("ingresar").value.toLowerCase();
     cifrado = texto.replace(/enter/igm,"e")
     cifrado = cifrado.replace(/ober/igm,"o")
     cifrado = cifrado.replace(/imes/igm,"i")
     cifrado = cifrado.replace(/ai/igm,"a")
     cifrado = cifrado.replace(/ufat/igm,"u")

    document.getElementById("chico").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("mensaje").innerHTML = cifrado;

    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}


function copiar(){
    var copiartexto = document.getElementById("mensaje").innerText;
    navigator.clipboard.writeText(copiartexto).then(function(){
        console.log("texto copiado con exito");
    })
}
