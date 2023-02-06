export class Timer{
    static text = document.getElementById("timer");
    static value = 0;
    static interval = 0;
    static is_running = false;

    static iniciar(){
        Timer.interval = setInterval(
            function(){ 
                Timer.value += 0.01;
                Timer.text.innerHTML = Timer.value.toFixed(2);
            }
            , 10 );
    }
    static finalizar(){
        Timer.limpar();
        Timer.text.innerHTML = "Tempo: " + Timer.value.toFixed(2);
    }
    static limpar(){
        clearInterval(Timer.interval);   
    }
}