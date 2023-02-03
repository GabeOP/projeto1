var paises = [
    {name: "brasil"},
    {name: "estados unidos"},
    {name: "mexico"},
    {name: "canada"}
]


let container = document.querySelector(".container-select");
let imagem = document.getElementById("img");
let input = document.getElementById("input");
input.addEventListener("keyup", verificaTexto);


let indice_resposta = 0;

console.log(container)
paises.forEach(bandeira => {
    let img = document.createElement("img");
    img.src = "./Imagens/" + bandeira.name + ".png";
    container.appendChild(img);
} );

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