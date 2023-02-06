export class Timer{
    static value;
    static interval;

static start(){
    interval = setInterval(
        function(){ 
            value += 0.01;
        }
        , 10 );
}
static clear(){
    clearInterval(interval);   
}
}