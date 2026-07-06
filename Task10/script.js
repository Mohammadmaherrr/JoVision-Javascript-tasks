function getIp(){

    fetch('https://api.ipify.org/')
    .then(handleResponse)
    .then(replaceTxt)
    .catch(handleError);
}

function handleResponse(response){

    return response.text();
}

function replaceTxt(ip){

    const button = document.getElementById("clkButton");
    button.textContent = ip;

}

function handleError(error){

    console.error("Error: " , error);
}

function clkButton(){

    const button = document.getElementById("clkButton");

    button.addEventListener("click", getIp);
}

clkButton();