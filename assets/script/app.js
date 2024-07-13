function ExibirTexto() {
    var textoUsuario = document.getElementById("texto-usuario").value;
    var textoCriptografado = textoUsuario.replace(/e/g, "enter")
                                         .replace(/i/g, "imes")
                                         .replace(/a/g, "ai")
                                         .replace(/o/g, "ober")
                                         .replace(/u/g, "ufat")
                                         .replace(/ /g, "cq");
    document.getElementById("texto-resultado").innerHTML = textoCriptografado;
}

function Descriptografar() {
    var textoUsuario = document.getElementById("texto-usuario").value;
    var textoDescriptografado = textoUsuario.replace(/enter/g, "e")
                                         .replace(/imes/g, "i")
                                         .replace(/ai/g, "a")
                                         .replace(/ober/g, "o")
                                         .replace(/ufat/g, "u")
                                         .replace(/cq/g, " ");
    document.getElementById("texto-resultado").innerHTML = textoDescriptografado;
}

function CopyText() {
    var texto = document.getElementById("texto-resultado").innerText;
    navigator.clipboard.writeText(texto);
}