
this.a = "sahil";

this.addEventListener("message", (e) => {
    // 
    console.log("data to worker abc:: ", e.data);
})

let variable = 0;

setInterval(
    function(){
        this.postMessage(variable++);
    }.bind(this)
    , 100 );