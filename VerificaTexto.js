export class VerificaTexto{
    static str_resposta;
    static paises;
    static{
        let input = document.getElementById("input");
        str_resposta = input.value;
        paises = 
    }

    verificar(){
        if(str_resposta.length == paises[indice_resposta].name.length){         // evita de comparar string com string a cada digitação, comparando apenas se o tamanho das duas for igual
            if(str_resposta == paises[indice_resposta].name){
                input.value = "";
                removerBandeira(indice_resposta);
                if(indice_resposta < paises.length - 1){                        // verifica se ainda há bandeiras para responder
                    mostrarBandeira(++indice_resposta);
                }else{
                    //fim
                    Timer.clear();                                     // adiciona o h1
                    let parent = imagem.parentElement;                          // retorna pai do elemento imagem
                    let h = document.createElement("h1");                       // cria h1 -> "fim"
                    h.innerText = "fim"                                         // ----------------
                    parent.removeChild(imagem);                                 // remove elemento html da imagem
                    parent.appendChild(h); 
                }
            }
        }
    }
}