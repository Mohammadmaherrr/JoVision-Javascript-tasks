function numbers(){
   
    const arr = [];
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        arr[i] = i;
        sum +=i;
    }
    console.log(sum);
    
   }
    

   function addClick(){

    const button = document.getElementById("clickButton");

    button.addEventListener("click", numbers);
   }

   addClick();
