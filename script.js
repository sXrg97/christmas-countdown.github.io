///////////////
// TIMER
///////////////


const christmas = new Date("24 Dec 2021"); //Christmas date
let timeNow = new Date(); // date now

let timer = christmas - timeNow; // time till christmas

let seconds = Math.floor(timer/1000);
console.log(seconds);



//SNOWFLAKES

setInterval(createSnowflake, 1);

function createSnowflake() {
    let snowflake = document.createElement('i');
    snowflake.classList.add('fas');
    snowflake.classList.add('fa-snowflake');
    snowflake.style.left = (Math.random() * 100) + 'vw';
    snowflake.style.opacity = Math.random() * 0.8;
    snowflake.style.transform = 'scale(' + (Math.random() + 0.2) + ')';
    snowflake.style.animationDuration = (Math.random() + 0.4) * 2 + 's';
    document.body.appendChild(snowflake);
    setTimeout(function(){snowflake.remove();}, 3000);
}

