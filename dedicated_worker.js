
let jsonBodyMessage = null;

// importing scripts

importScripts('helper.js');

// proof of synchronous-ness of importScripts
console.log("after helper-loaded");


this.addEventListener("message", (e) => {
    if(typeof e.data == 'object'){
        console.log("json-data came", e.data);
        jsonBodyMessage = e.data;
    } else {
        console.log("data to worker_one:: ", e.data);
    }
    // closing the worker after receiving first message
    // this.close();
})

let variable = 0;

setInterval(
    function(){
        // this.postMessage(variable++);
    }.bind(this)
    , 100 );


setTimeout(
    function(){
        console.log('json-data: ', jsonBodyMessage);
    },
    2000);