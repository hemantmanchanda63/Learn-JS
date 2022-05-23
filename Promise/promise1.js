// Promise All 


let promisecall= function(message){
    return function(resolve,rejct){
    setTimeout(() => {
        resolve(document.getElementById('firsts').innerHTML=` ${message}First Promise`);
    },1000);}
};
let p1 = new Promise(promisecall("Hi Himanshu"))
// var total=0;
Promise.all([p1,p2,p3]).then((result)=>{
    
    console.log(`Results: ${result}`);
}).catch((error)=>{
    console.log(`Error Found: ${error}`);
}); 
