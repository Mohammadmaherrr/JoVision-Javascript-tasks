function createObj(){

    let now = new Date();

    let nameVal = document.getElementById("1").value;
    let ageVal = document.getElementById("2").value;


    const obj = {

        name: nameVal,
        age: ageVal,
        timestamp: now
    }

    const {name, age, timestamp} = obj;

    alert(`Your name: ${name}\nYour Age: ${age}\nTime Stamp: ${timestamp}`);
}

function clkButton(){

    const button = document.getElementById("clk");
    button.addEventListener("click", createObj);
}

clkButton();