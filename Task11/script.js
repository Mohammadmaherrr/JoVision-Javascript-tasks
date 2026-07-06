function getIp(){

    fetch('https://api.ipify.orgx/')
        .then(handleResponse)
        .then(replaceIp)
        .catch(handleError);
}

function handleResponse(response){

    return response.text();

}

function replaceIp(ip){

    const button = document.getElementById("clk");

    button.textContent = ip;
}

function handleError(error){

    console.error("Error: ", error);
}

function clkButton(){

    const button = document.getElementById("clk");

    button.addEventListener("click", getIp);
}

clkButton();