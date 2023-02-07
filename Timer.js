export class Timer{
    static text = document.getElementById("timer");
    static value = 20;
    static interval = 0;
    static is_running = false;


    static iniciar(){
        Timer.interval = setInterval(
            function tempo(){ 
                Timer.value -= 1;
                Timer.text.innerHTML = Timer.value + 's';
                if(Timer.value < 0) {
                    Timer.text.innerHTML = 'Fim do tempo'
                }
            }
            , 1000);     
    }
    static finalizar(){
        Timer.limpar();
        Timer.text.innerHTML = "Tempo: " + Timer.value.toFixed(2);
    }
    static limpar(){
        clearInterval(Timer.interval);   
    }
}