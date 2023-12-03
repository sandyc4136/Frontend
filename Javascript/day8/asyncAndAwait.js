// Async and await with promise

function sum(a,b){
    var sumPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var c=a+b;
            console.log("Sum is ",c);
            resolve(c);
        },2000);  
    });
    return sumPromise;
}

function cube(n) {
    var cubePromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var res=n*n*n;
            console.log("Cube is ",res);
            resolve(res);
        },3000);
    });
    return cubePromise;
}

function factorial(n){
    var fact=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var f=1;
            for(i=1;i<=n;i++)
            f*=i;
            console.log("Factorial is ",f);
            resolve(f);
        },4000);
    });
    return fact;
}

async function handlePromise(){
    try{
        var result=await sum(1,1);
        var cubeResult=await cube(result);
        var fact=await factorial(cubeResult);
    }
    catch(error){
        console.log(error);
    }
}
handlePromise();