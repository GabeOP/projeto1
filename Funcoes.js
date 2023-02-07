/*
* Função recursiva que adiciona números aleatórios a um array dado um intervalo e a quantidade de números desejada
* qtd: quantidade de numeros | inicio - fim: intervalo dos números | array: array que vai receber os números
*/
function recRandomArray(qtd ,inicio, fim, array){
    if(qtd < 0) {
        console.log("Erro: Quantidade negativa.");
        return ;
    }
    if(inicio > fim){
        console.log("Erro: Início > final.")
        return ;
    }
    if(qtd > fim - inicio + 1){
        console.log("Erro: Quantidade maior que o intervalo");
        return;
    }
    if(inicio == fim){
        if(qtd > 1 ) { console.log("Erro: Quantidade maior que os números") };
        array.push(inicio);
        return;
    }
    
    let random = inicio + parseInt(Math.random() * (fim - inicio + 1));
    
    if(qtd == 1 || qtd == 0){
        array.push(random);
        return;
    }
    //console.log(random)
    if(random == inicio){
        array.push(inicio);
        recRandomArray(qtd-1, inicio+1, fim, array);
    }else if(random == fim){
        array.push(fim);
        recRandomArray(qtd-1, inicio, fim-1, array);
    }else{
        let qtd1;
        let qtd2;
        let intervalo1 = random - inicio + 1;
        let intervalo2 = fim - random ;
        if( qtd % 2 == 1){
            let meio = (qtd-1) / 2;
            qtd1 = meio + 1;
            qtd2 = meio;
        }else{
            qtd1 = qtd2 = qtd/2;
        }
        while(qtd1 > intervalo1){
            qtd2++;
            qtd1--;
        }
        while(qtd2 > intervalo2){
            qtd1++;
            qtd2--;
        }
        recRandomArray(qtd1, inicio, random, array);
        recRandomArray(qtd2, random+1, fim, array);
    }
}

export function retornaArrayNumeros(qtd_numeros, total){
    let paises = new Array();
    recRandomArray(qtd_numeros, 0, total-1, paises);
    return paises;
}

/*
*   Adiciona as bandeiras no container-select
*/
export function addBandeiras(array){
    let container_select = document.querySelector(".container-select");
    for(let i=1 ; i<array.length ; i++){

        let path = "./Imagens/" + array[i].abbreviation.toLowerCase() + ".png";
        let img = document.createElement("img");                            // cria elemento imagem que vai ser inserido no container-select
        img.id = "bandeira" + i;                                            // cada elemento recebe o id -> "bandeira" + numero
        img.src = path;
        container_select.appendChild(img);
    }
}

/*
* Remove a bandeira do container-select com base no índice
*/
export function removerBandeira(indice){
    let container_select = document.querySelector(".container-select");
    let img_id = document.getElementById("bandeira" + indice);            // retorna o id da bandeira no container-select
    container_select.removeChild(img_id);                                 // remove bandeira do container-select
}

/*
* Mostra a bandeira com base no índice
*/
export function mostrarBandeira(indice, array){
    let imagem = document.getElementById("img");
    let path = "./Imagens/" + array[indice].abbreviation.toLowerCase() + ".png"; // caminho da imagem
    imagem.src = path;               
}

/*
* Término
*/
export function finalizar(){

}