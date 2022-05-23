// Promise All 


let p1= new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(document.getElementById('firstprom').innerHTML="First Promise");
    },1000);
});
let p2= new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(document.getElementById('secondprom').innerHTML="Second Promise");
    },2000);
});

let p3= new Promise(function(resolve,reject){
    setTimeout(() => {
        
        resolve(document.getElementById('thirdprom').innerHTML=("Third Promise has Failed"));
    },3000);
});
var total=0;
Promise.all([p1,p2,p3]).then((result)=>{
    console.log(`Results: ${result}`);
}).catch((error)=>{
    console.log(`Error Found: ${error}`);
}); 
