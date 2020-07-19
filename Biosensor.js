let getRandomArbitrary =function(min,max){
    return parseInt(Math.random() * (max-min) + min);
}

class Biosensor{

    constructor(name){
        this.name = name;
        this.live();        
    }

    heartBeat(){
        let heartRate = getRandomArbitrary(60,80);
        console.log(this.name +' heartbeat = '+heartRate);
    }

    live(){
        setInterval(()=>{
            this.heartBeat();
        },1000);
    }
}
clearInterval();
let James = new Biosensor('James');
let Andrea = new Biosensor('Andrea');
