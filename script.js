
// let hi = (name, age)=>{
//     return(`Hello ${name} your age is  '${age}'  <br>`)
// }

// document.write(hi("Himanshu",27));


// var a = {
//     name:"Himanshu",
//     age:21,
//     country:"India"
// };
// console.log(a.name);
// console.log(a.age);
// console.log(a.country);


// If you Dont want to print this again and again then you have to just Use the forin Loop

// for(var i in a){
//     document.write(a[i] + "<br>")
// }


// function sum(num1, num2){
//     console.log(num1 + num2);
// }

// document.write(sum(20,500));


// We cant perform sum of these three arguments with these functions thats why we use for in Loop
// document.write(sum(20,500,100));
// Rest Operator 
// function plus(name, ...arguments){
//     document.write(`hello ${name} Your age is  `)
//     let plus=0;
//     for(let i in arguments){
//         plus += arguments[i];
//     }
//     document.write(plus);
// }
// let arr= [20, 40, 60];
// plus("Himanshu Manchanda ", ...arr);


// let hello=[100,50,200 ];
// console.log([...hello]);


// let n= "name";

// let obj={
//     [n + "Last"]: "hello",
//     fullname:"Himanshu Manchanda",
//     detail(){
//         return `${this.nameLast}  World I am ${this.fullname} `
//     }
// };

// console.log(obj['detail']());





let fname="Himanshu";
let lname="Manchanda";
let designation="developer";

let student=(fname, lname, designation)=>{
let fullname= fname + " " +lname;
return {fullname,designation};
}



document.write(student(fname,lname,designation));



let user={
    name:"Himanshu",
    age:21,
    city:"Delhi"
};
let {name,age,city}=user;
console.log(name);
console.log(age);
console.log(city);


