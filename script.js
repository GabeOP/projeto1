var paises = [
    {name: "brasil"},
    {name: "estados unidos"},
    {name: "mexico"},
    {name: "canada"}
]

var indice_resposta = 0;

var imagem = document.getElementById("img");
var input = document.getElementById("input");
input.addEventListener("keyup", verificaTexto);

function mostrarBandeira(indice){
    imagem.src = "./Imagens/" + paises[indice].name + ".png";
}

function verificaTexto(){
    var str_resposta = input.value;
    if(str_resposta == paises[indice_resposta].name){
        console.log("Acertou!");
        mostrarBandeira(++indice_resposta);
        input.value = "";
    }
}

mostrarBandeira(indice_resposta)