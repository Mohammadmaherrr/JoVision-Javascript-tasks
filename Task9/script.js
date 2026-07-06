function getIp(){

    fetch('https://api.ipify.org/')
        .then(handleResponse)
        .then(printIp)
        .catch(handleError);
        
}

function handleResponse(response){

    return response.text();
}

function printIp(ip){

    console.log(ip);
}

function handleError(error){

    console.error("Error: ", error);
}

function clickButton(){

    const Button = document.getElementById("clkButton");
    Button.addEventListener("click", getIp);
}

clickButton();