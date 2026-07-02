function f1(){

    let arr1 = [];

    for (let i = 0; i <= 100; i++) {
        arr1[i] = i;

        if(!(i%3)){
            arr1.pop();
        }
        
    }

    console.log(arr1);


}


function f2(){

    let arr2 = [];

    for (let i = 0; i <= 100; i++) {
        arr2[i] = i;
    }

    for (let j = 100; j <= 150; j++) {
        arr2.push(j);
    }

    console.log(arr2);
}

function f3(){
    let arr3 = [];

    for (let z = 0; z <= 100; z++) {
        let x;
        x = z+3;
        arr3[z] = x;
 
    }

    console.log(arr3);
}

function f4(){

    let arr4 = [];

    for (let y = 0; y <= 100; y++) {
        arr4[y] = y

        if(y >= 20 && y<=40){
            console.log(arr4[y]);
        }
    }



}

function f5(){

    let arr5 = [];

    for (let w = 0; w <= 100; w++) {
        arr5[w] = w;   
    }

    function shuffleArray(array) {
    for (let i = 99; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [arr5[i], arr5[j]] = [arr5[j], arr5[i]];
    }

    console.log(arr5);
}

shuffleArray(arr5);
       
}

function buttonClick(){


    const button1 = document.getElementById("B1");
    button1.addEventListener("click", f1);

    const button2 = document.getElementById("B2");
    button2.addEventListener("click", f2);

    const button3 = document.getElementById("B3");
    button3.addEventListener("click", f3);

    const button4 = document.getElementById("B4");
    button4.addEventListener("click", f4);

    const button5 = document.getElementById("B5");
    button5.addEventListener("click", f5);

}


buttonClick();