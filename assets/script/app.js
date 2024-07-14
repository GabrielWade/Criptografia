//----------------------------------------------------------------------------------------------
function ExibirTexto() {
    var textoUsuario = document.getElementById("texto-usuario").value;
    var textoCriptografado = textoUsuario.replace(/e/g, "enter")
                                         .replace(/i/g, "imes")
                                         .replace(/a/g, "ai")
                                         .replace(/o/g, "ober")
                                         .replace(/u/g, "ufat")
                                         .replace(/ /g, "cq");
    var textoResultado = document.getElementById("texto-resultado");
    var pageNotFound = document.getElementById("page-not-found");
    var botaoCopiar = document.querySelector(".container-conteudo-resultado input.btn");

    if (textoCriptografado.trim() === "") {
        pageNotFound.style.display = "block";
        document.getElementById("texto-resultado").value = "";
        botaoCopiar.style.display = "none";
    } else {
        textoResultado.innerHTML = textoCriptografado;
        pageNotFound.style.display = "none";
        textoResultado.style.display = "block";
        botaoCopiar.style.display = "inline-block"; 
    }

    document.getElementById("texto-usuario").value = "";
}
function Descriptografar() {
    var textoUsuario = document.getElementById("texto-usuario").value;
    var textoDescriptografado = textoUsuario.replace(/enter/g, "e")
                                         .replace(/imes/g, "i")
                                         .replace(/ai/g, "a")
                                         .replace(/ober/g, "o")
                                         .replace(/ufat/g, "u")
                                         .replace(/cq/g, " ");

    var textoResultado = document.getElementById("texto-resultado");
    var pageNotFound = document.getElementById("page-not-found");
    var botaoCopiar = document.querySelector(".container-conteudo-resultado input.btn");

    if (textoDescriptografado.trim() === "") {
        pageNotFound.style.display = "block";
        document.getElementById("texto-resultado").value = "";
        botaoCopiar.style.display = "none";
    } else {
        textoResultado.innerHTML = textoDescriptografado;
        pageNotFound.style.display = "none";
        textoResultado.style.display = "block";
        botaoCopiar.style.display = "inline-block";
    }

    document.getElementById("texto-usuario").value = "";
}


function CopyText() {
    var texto = document.getElementById("texto-resultado").value;
    navigator.clipboard.writeText(texto).then(function() {
        alert('Texto copiado com sucesso!');
    }).catch(function(err) {
        alert('Erro ao copiar texto: ' + err);
    });
}


//----------------------------------------------------------------------------------------------