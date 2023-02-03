var paises = [
    {name: "Brasil"},
    {name: "Estados_Unidos"},
    {name: "Mexico"},
    {name: "Canada"}
]

var imagem = document.getElementById("img");

function mostrarBandeira(indice){
    imagem.src = "./Imagens/" + paises[indice].name + ".png";
}

mostrarBandeira(0)