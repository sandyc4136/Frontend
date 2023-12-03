
// var n=9;
 
// var evenPromise=new Promise((resolve,reject)=>{
//     if(n%2==0) {resolve();}
//     else reject();
// });

// evenPromise.then(()=>{
//     console.log("No. is even");
// }).catch(()=>{
//     console.log("No. is Odd");
// });

// evenPromise.then(()=>{
//     console.log("No. is even");
// })
// evenPromise.catch(()=>{
//     console.log("No. is Odd");
// }); // this will give an error as there we can't write catch differently


// passing argument to the result() and resolve()

// var n=8;
// var evenPromise=new Promise((resolve,reject)=>{
//     if(n%2==0){
//         var msg="No. is even";
//         resolve(msg);
//     }
//     else {
//         var err="No. is odd. Promise not fulfilled"
//         reject(err);
//     }
// });

// evenPromise.then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// });

// Function to execute promise

// function checkEven(num){
//     var evenPromise=new Promise((resolve,reject)=>{
//         if(num%2==0){
//             var msg="No. is even";
//             resolve(msg);
//         }
//         else {
//             var err="No. is odd. Promise not fulfilled"
//             reject(err);
//         }
//     });
//     return evenPromise;
// }

// var result=checkEven(11).then((msg)=>{
//     console.log(msg);
//     }).catch((err)=>{
//         console.log(err);
//     });