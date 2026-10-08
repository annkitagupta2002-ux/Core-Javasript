let random_num= Math.floor(Math.random()*10)+1
let guess_input=document.getElementById('num')
let result=document.getElementById('result')
let check=document.getElementById('check')
 

check.addEventListener('click',()=>{
    guess_num=Number(guess_input.value)
    if(guess_num<1 || guess_num>10){
        result.innerText="Please Enter a Number between 1 to 10"
    }
    else if(guess_num === random_num){
        result.innerText="Congratulations You Won!"
    }
    else if(guess_num > random_num){
        result.innerText="Too high! Try again."
    }
    else{
        result.innerText="Too low! Try again"
    }
})

