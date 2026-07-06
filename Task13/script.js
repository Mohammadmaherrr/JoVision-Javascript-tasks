 function clkHandler(){

    const nameVal = document.getElementById("1").value;
    fetch(`https://api.agify.io?name=${nameVal}`)
        .then(responseHandler)
        .then(display)
        .catch(errorHandler);
}
function responseHandler(response){

    return response.json();
}

function display(data){

    const {name,age} = data;

    alert(`Your name: ${name}\n Your age: ${age}`);

}

function errorHandler(error){
    console.error("Error: ", error);
}

function clkButton(){

    const button = document.getElementById("clk");
    button.addEventListener("click", clkHandler);
}

clkButton();


