function time(){

    const now = new Date();

    const clock = document.getElementById("ff");
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    clock.textContent = `${h}:${m}:${s}`;
 
}

setInterval(time,1000);