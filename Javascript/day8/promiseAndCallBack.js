// promise resolving the callback hell with setTimeout

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

// sum(1,1).then((result)=>{
//     return cube(result);
// }).then((rs)=>{
//     return factorial(rs);
// }).then((f)=>{
//     console.log("Operation finished....");
// }).catch(()=>{
//     console.log("Error");
// })

sum(1,1).then((result)=>{
 cube(result).then((rs)=>{
    factorial(rs).then((f)=>{
        console.log("Operation finished....");
        });
    });
}).catch(()=>{
    console.log("Error");
})