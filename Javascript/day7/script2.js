setTimeout((a, b) => {
    console.log("Sum is ", a + b);
    setTimeout((n) => {
        var f = 1;
          for (i = 1; i <= n; i++) f *= i;
          console.log("Factorial is ", f);
            setTimeout((n) => {
              var c = n * n * n;
              console.log("Cube is ", c);
            },3000,4);
        },5000,6);          
  },2000,3,5);





console.log("Hello");
