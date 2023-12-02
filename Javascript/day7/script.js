var sum=(a,b)=>{
    console.log("Sum is ",a+b);
}
 var fact=(n)=>{
    var f=1;
    for(i=1;i<=n;i++)
    f*=i;
    console.log("Factorial is ",f);
 }

 var cube=(n)=>{
    var c=n*n*n;
    console.log("Cube is ",c);
 }

//  sum(2,4);
//  fact(5);
//  cube(4);

setTimeout(sum/*callback function */,2000/* time in milisecond */,3,5 /*parameter for callback func */);
setTimeout(fact,5000,6);
setTimeout(cube,3000,4);
 