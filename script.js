var paises = [
    {name: "brasil"},
    {name: "estados unidos"}
   // {name: "mexico"},
    //{name: "canada"}
]

let container_bandeira = document.querySelector(".container-bandeira");
let container_select = document.querySelector(".container-select");
let imagem = document.getElementById("img");
let input = document.getElementById("input");
let h1_timer = container_bandeira.appendChild(document.createElement("h1"));    // mudar depois(colocar no arquivo html)... coloquei so pra nao alterar o html
let timer = 0;
let interval;                                                                   // vai guardar o setInterval
let indice_resposta = 0;                                                        // índice do array da bandeira "atual"

/*
* Inicia o tempo
*/
function iniciar(){
    interval = setInterval(
        function(){ 
            timer += 0.01;
            h1_timer.innerHTML = timer.toFixed(2);                              // tava bugando dando 0.9999999 ent botei assim
        }
        , 10 );
}

/*
*   Adiciona as bandeiras no container-select
*/
function addBandeiras(){
    for(i=0 ; i<paises.length ; i++){
        let img = document.createElement("img");                            // cria elemento imagem que vai ser inserido no container-select
        img.id = "bandeira" + i;                                            // cada elemento recebe o id -> "bandeira" + numero
        img.src = "./Imagens/" + paises[i].name + ".png";                   // src = caminho da imagem
        container_select.appendChild(img);                                  // adiciona o elemento no container-select
    }
}

/*
* Remove a bandeira do container-select com base no índice
*/
function removerBandeira(indice){
    let temp_img = document.getElementById("bandeira" + indice);            // retorna o id da bandeira no container-select
    container_select.removeChild(temp_img);                                 // remove bandeira do container-select
}

/*
* Mostra a bandeira com base no índice
*/
function mostrarBandeira(indice){
    imagem.src = "./Imagens/" + paises[indice].name + ".png";               // caminho da imagem
}

/*
* Verifica se o texto do input está certo
* Se estiver, remove esta da lista e avança pra próxima bandeira
*/
function verificaTexto(){
    let str_resposta = input.value;
    if(str_resposta.length == paises[indice_resposta].name.length){         // evita de comparar string com string a cada digitação, comparando apenas se o tamanho das duas for igual
        if(str_resposta == paises[indice_resposta].name){
            input.value = "";
            removerBandeira(indice_resposta);
            if(indice_resposta < paises.length - 1){                        // verifica se ainda há bandeiras para responder
                mostrarBandeira(++indice_resposta);
            }else{
                //fim
                clearInterval(interval);                                     // adiciona o h1
                let parent = imagem.parentElement;                          // retorna pai do elemento imagem
                let h = document.createElement("h1");                       // cria h1 -> "fim"
                h.innerText = "fim"                                         // ----------------
                parent.removeChild(imagem);                                 // remove elemento html da imagem
                parent.appendChild(h); 
            }
        }
    }
}

mostrarBandeira(indice_resposta)
addBandeiras();

input.addEventListener("keyup", verificaTexto);
input.addEventListener("click", iniciar);
