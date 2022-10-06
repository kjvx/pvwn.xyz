// typewirter effect with letters




const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const numbers = ['1','2','3','4','5','6','7','8','9','0']
const symbols = ['#','<','>','@','&','%','$','!','*']
const all = [...alphabet,...symbols,...numbers]


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomletter(){
    const weight = Math.floor(Math.random() * 40)
    



    return all[weight];
}



// TODO: add randomly tall columns of elements, done with a css grid and a random number that will be the amount of elems in a column

async function animate(num, times, beforestart, endletter){
    await sleep(beforestart)
    
    for(let i=0; i<= times; i++) {
        document.getElementById(`${num}`).innerText = randomletter().toUpperCase()
        await sleep(50)
        
    } 
    document.getElementById(`${num}`).innerText = endletter
}
function addelems() {
   
        let htmlToAdd = "";
        let numberOfItems = 1000;
      
        for (let i = 0; i < 5000; i++) {
          let num = Math.random() * 10000;
          let emoji = randomletter();
      
          htmlToAdd += `<p>${emoji}  </p>`;
        }
      
        document.getElementById('cont').innerHTML = htmlToAdd;
        document.getElementById('cont').replaceChildren(`<p>${emoji}  </p>`)
  

}

function start() {
    const speed = prompt('How fast should it alternate?(in MS) the lower the number the faster it will alternate')
    setInterval(addelems, speed);
}
function text(col) {
    document.querySelector('#sample').style.color = col
    document.querySelector('#cont').style.color = col
}
function setbg(col) {
    document.querySelector('html').style.backgroundColor = col
 }
 function setelemprops(id, col) {
    document.querySelector(`#${id}`).style.backgroundColor = col

 }


document.addEventListener('DOMContentLoaded', function() {
    console.log('document is ready. I can sleep now');
    
    


  
    // animate( the number letter in the list you want to animate, how many times you want to animate, time until animation starts, letter to end on)
 });

