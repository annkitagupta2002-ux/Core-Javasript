let fruits = ["apple", "mango", "cherry", "banana", "avocado"]
console.log(fruits[3])
console.log(fruits.length)
console.log(fruits[fruits.length - 1])
fruits.push("lichi")
console.log(fruits)
fruits.pop("lichi")
console.log(fruits)
fruits.unshift("strawberry")
console.log(fruits)
fruits.shift('strawberry')
console.log(fruits)
console.log(fruits.includes("cherry"))
fruits[3] = "grapes"
console.log(fruits)

//loops

pets=['dog','cat','parrot']
for(p of pets){
    console.log(`He is a ${p}`)
}
for(i=0;i<pets.length;i++){
    console.log(`${i}:${pets[i]}`)
}

let prices=[20,90,40,50]
let total=0
for(pri of prices){
    total+=pri
}
console.log("Total:",total)