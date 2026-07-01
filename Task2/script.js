function printHelloWorld() {
    console.log("Hello World");
}

function addButtonClickEvent() {
    const button = document.getElementById("clickButton");


    button.addEventListener("click", printHelloWorld);
}

addButtonClickEvent();