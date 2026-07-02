function evenSum(){
    let arr = [];
    let sum = 0;

    for (let i = 0; i <= 100; i++) {
        arr[i] = i;
        if (!(i%2)) {
            sum+=i;
        }
        
    }
    console.log(sum);

}

    function onClick(){

        const button = document.getElementById("clickButton");
        button.addEventListener("click", evenSum);
    }

    onClick();


