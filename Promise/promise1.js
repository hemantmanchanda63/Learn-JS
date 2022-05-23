// Promise All 


let p1= new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(document.getElementById('first').innerHTML="First Promise");
    },1000);
});
let p2= new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(document.getElementById('second').innerHTML="Second Promise");
    },2000);
});

let p3= new Promise(function(resolve,reject){
    setTimeout(() => {
        reject(document.getElementById('third').innerHTML=("Third Promise has Failed"));
    },3000);
});
// var total=0;
Promise.all([p1,p2,p3]).then((result)=>{
    console.log(`Results: ${result}`);
}).catch((error)=>{
    console.log(`Error Found: ${error}`);
}); 
