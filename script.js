import {Timer} from "./Timer.js";
import {retornaArrayNumeros, addBandeiras, removerBandeira, mostrarBandeira} from "./Funcoes.js";
import {countries} from "./countries_pt_br.js";

let imagem = document.getElementById("img");
let input = document.getElementById("input");
let indice_resposta = 0;                                                        // índice do array da bandeira "atual"
let numeros = [];
let paises = [];

numeros = retornaArrayNumeros(Timer.qtd_bandeiras, countries.length);
for(let i=0 ; i<numeros.length ; i++){
    paises.push(countries[numeros[i]]);
}

mostrarBandeira(indice_resposta, paises)
addBandeiras(paises);

input.addEventListener("keyup", verificarTexto);
//input.addEventListener("click", Timer.iniciar);

console.log(paises); //teste

function verificarTexto(){
    if(Timer.is_running === false){
        Timer.iniciar();
        Timer.is_running = true;
    }

    let str_resposta = input.value;
    if(str_resposta.length == paises[indice_resposta].name.length){         // evita de comparar string com string a cada digitação, comparando apenas se o tamanho das duas for igual
        if(str_resposta.toLowerCase() == paises[indice_resposta].name.toLowerCase()){
            input.value = "";
            if(indice_resposta < paises.length - 1){                        // verifica se ainda há bandeiras para responder
                indice_resposta++;
                removerBandeira(indice_resposta);
                console.log(indice_resposta)
                mostrarBandeira(indice_resposta, paises);
            }else{
                //fim
                Timer.finalizar();
                let parent = imagem.parentElement;
                parent.removeChild(imagem);
            }
        }
    }
}