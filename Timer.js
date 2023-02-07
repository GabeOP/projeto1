export class Timer{
    static qtd_bandeiras = 5;
    static text = document.getElementById("timer");
    static max_time = this.qtd_bandeiras * 3;
    static time = 0;
    static interval = 0;
    static is_running = false;
    static wrap_bandeira = document.querySelector(".wrap-bandeira");


    static iniciar(){
        Timer.interval = setInterval(
            function tempo(){ 
                Timer.max_time -= 1;
                Timer.time += 1;
                Timer.text.innerHTML = Timer.max_time + 's';
                if(Timer.max_time < 0) {
                    Timer.text.innerHTML = 'Fim do tempo';
                    Timer.limpar()
                    let input = document.getElementById("input")
                    Timer.wrap_bandeira.removeChild(input);
                }
            }
            , 1000);     
    }
    static finalizar(){
        Timer.limpar();
        let input = document.getElementById("input")
        Timer.wrap_bandeira.removeChild(input)
        Timer.text.innerHTML = 'Finalizado em: ' + Timer.time + 's';
    }
    static limpar(){
        clearInterval(Timer.interval);   
    }
}