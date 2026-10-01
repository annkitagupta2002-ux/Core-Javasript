function check_even(num){
    if(num%2==0){
        console.log("Even Number")
    }
    else {
        console.log("ODD Number")
    }
}
check_even(4)
check_even(5)
check_even(17)

function sum(a,b){
    return a+b
}
const No =sum(2,3)
console.log(No)

//variable based function
const check_odd=function(no){
    if(no%2!=0)
        return "True"
}
const Number=check_odd(5)
console.log(Number)
//arrow function
const isEven=(n)=>{
    if (n%2==0)
        return "Even"
}
let Num=isEven(6)
console.log(Num)