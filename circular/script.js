// typewirter effect with letters

const first = document.getElementById('1');
const second = document.getElementById('2');
const third = document.getElementById('3');
const fourth = document.getElementById('4');
const fifth = document.getElementById('5');
const sixth = document.getElementById('6');
const seventh = document.getElementById('7');
const eighth = document.getElementById('8');


const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomletter(){
    const weight = Math.floor(Math.random() * 26)
    



    return alphabet[weight];
}

async function animate(num, times, beforestart, endletter){
    await sleep(beforestart)
    
    for(let i=0; i<= times; i++) {
        document.getElementById(`${num}`).innerText = randomletter().toUpperCase()
        await sleep(50)
        
    } 
    document.getElementById(`${num}`).innerText = endletter
}


async function stop(){
    await sleep(5500)
    document.getElementById(`9`).classList.remove('blink')
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('document is ready. I can sleep now');
    animate(1, 7, 1000, 'C')
    animate(2, 8, 1200, 'I')
    animate(3, 9, 1400, 'R')
    animate(4, 10, 1600, 'C')
    animate(5, 11, 1800, 'U')
    animate(6, 12, 2000, 'L')
    animate(7, 13, 2200, 'A')
    animate(8, 14, 2400, 'R')
    stop()
    // animate( the number letter in the list you want to animate, how many times you want to animate, time until animation starts, letter to end on)
 });