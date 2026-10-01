const a={
    Name:"Ankita",
    Department:"MCA",
    Semester:"3rd"
}
console.log(a.Name)
a.Name="Preeti"
console.log(a)
a.Session="2025-27"
console.log(a)

//delete a object
delete a.Semester
console.log(a)

//object methods

const person={
    firstName:"Ankita",
    lastName:"kumari",
    age:23,
    Dob:"04-12-2003",

    fullname: function(){
        return this.firstName+" "+this.lastName
    }
}
console.log(person.fullname())

//object properties

//Accessing a property
console.log(person.age)
console.log(person["age"])

//Changing a property
person.age=50
console.log(person['age'])

//Adding a property

person.HouseNo=214
console.log(person)

//Deleting a property
delete person.age
console.log(person.age)

console.log(JSON.stringify(person))
