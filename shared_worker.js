// demo for multiple context execution

let ports=[],
    index=0;


this.addEventListener('connect', (e) => {
    console.log("connection from shared worker");

    let port = e.ports[0];

    // storing ports
    ports.push(port);


    // starting the port
    // if this is not done, communication or events won't get fired
    port.start();

    port.addEventListener('message', (e)=>{
        console.log("received message in shared worker: ", e.data);
    });

    setInterval(()=>{
        index++;
        ports.forEach((portX) => {
            // this message will be sent over all context
            // can be received from any tab
            portX.postMessage("sending from shared_worker: "+ index);
        }, 1000);

    });


})