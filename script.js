
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





// let fname="Himanshu";
// let lname="Manchanda";
// let designation="developer";

// let student=(fname, lname, designation)=>{
// let fullname= fname + " " +lname;
// return {fullname,designation};
// }



// document.write(student(fname,lname,designation));


// // Destructring Object 

// let user={
//     name:"Himanshu",
//     age:21,
//     city:"Delhi"
// };
// let {name,age,city}=user;
// console.log(name);
// console.log(age);
// console.log(city);

// How to use Class 

class hello{
message(){
    console.log("Hi Himanshu")
}
naughty(){
    document.write("Hello Babe <br>")
}
}

let a = new hello();
a.message();
a.naughty();


// Constructor will call automatically
class student{
    constructor(name,age){
        this.sname=name;
        this.age=age;
        console.log("constructor Function");
    }
    hello(){
        console.log(`hello World ${this.sname}   ${this.age}`);
        document.write(`Hello ${this.sname} Your age is:${this.age} <br>`);
    }
    static staticmethod(){
        console.log("Static function");
    }
}

let hi = new student("Himanshu Manchanda", 50);
// hi.mobile="Himanshu Manchanda";
let fuddu = new student("hihi",20)
hi.hello();
fuddu.hello();
student.staticmethod();



// Inheritance 

class fruits{
    constructor(name,age,salary){
    this.empname= name;
    this.empage= age;
    this.empsalary= salary;
        document.write("<br> Hello Himanshu <br>");
    }

    alu(){
        document.write(`<h1>Employee Salary</h1><br>Hi ${this.empname} , Your age is ${this.empage} and salary is ${this.empsalary} `)
    }
}
class vegetables extends fruits{
    alu(){
        // super.alu();
        let wifi=2500;
        let hello=1000;
        let totalsalary= this.empsalary + wifi + hello;
        // console.log(totalsalary);
        document.write(`<h1>Manager Salary</h1><br>Hi ${this.empname} , Your age is ${this.empage} and salary is ${totalsalary} `)
    }
}

// let f= new fruits();
let v= new vegetables("Himanshu",21 ,30000);
let acer= new fruits("Kumari",29,50000);
acer.alu();
v.alu();


// Promise in JS 

// 3 stages of promise are :-

// pending - wait for next day
// fullfilled- Restaurant
// Reject - See you another Day 


console.clear();

function prom(x, y ){
    return new Promise(function(resolve,reject){
        document.write("<br><br>Fetching Data Please Wait");
        // var c=x/y;
        setTimeout(()=>{
            // if(x, y){
            //     resolve(`Your answer is: ${c}`);
            //     }
            //     else{
            //     reject("Failed to calculate");
            //     }
            $.get("https://jsonplaceholder.typicode.com/posts",function(data){
                resolve(data);
            }).fail(errors=>{
                reject("Failed to load JSON. ")
            })
        },4000);
        });
}

// let onfullfilment =(result)=>{
//     console.log(result);
//     document.getElementById('result').innerHTML=(result);
// }
// let onrejection=(error)=>{
//     console.log(error);
// }
// prom(true).then(onfullfilment).catch(onrejection);

prom().then((result)=>{
    console.log(result);
    document.getElementById('result').innerHTML=(result);
}).catch((error)=>{
    document.getElementById('result').innerHTML=(error);
    });



console.clear();