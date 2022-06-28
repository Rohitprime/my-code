const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const sc1 = document.querySelector('#sc1');
const sc2 = document.querySelector('#sc2');
let i=0;
let j=0;
const selected = document.querySelector('#game');
let value =0;
selected.addEventListener('input',function(evt){
         const options = selected.options[selected.selectedIndex];
         value = options.value;
})


btn1.addEventListener('click',function(evt){
    i+=1;
    if(i == value)
    {
        decider(i,j);
    }
    else{

        sc1.innerText= `${i}`;
    }
})

btn2.addEventListener('click',function(evt){
    
    j+=1;
    if(j == value)
    {
        decider(i,j);
    }
    else
    {
        sc2.innerText=`${j}`;
    }
})

btn3.addEventListener('click',function(evt){
                 i=0;
                 j=0;
                 sc1.innerText='0';
                 sc1.style.color = 'black'
                 sc2.innerText='0';
                 sc2.style.color = 'black'
                 btn1.disabled = false;
                 btn2.disabled = false;
})

const decider = function(i,j){
    if(i > j)
    {
        sc1.innerText = `Winer [${i}]`;
        sc1.style.color = "green";
        sc2.innerText = `Loss [${j}]`;
        sc2.style.color = "red";
    }
    else if(j > i){
        sc1.innerText = `Loss [${i}]`;
        sc1.style.color = "red";
        sc2.innerText = `Winer [${j}]`;
        sc2.style.color = "green";
    }

    btn1.disabled = true;
    btn2.disabled = true;
  
}

let container = document.querySelector('.colum');

const makeChange = (color,delay) =>{
  return  new Promise((resolve,reject) => {
        setTimeout(()=>{
         container.style.backgroundColor = color;
         resolve();
         tochange();
        },delay);
    } );
}

async function tochange(){
    await makeChange("blue",2000)
    await makeChange("red",2000) 
    await makeChange("yellow",2000)
    await makeChange("green",2000)
}

tochange();

 