pi=3.14;
r=4;
console.log("1. Area of circle with radius 4cm : "+ r +pi*r*r);
document.write("<br>1. Area of circle with radius 4cm : " + pi*r*r + " cm<sup>2</sup>");

// Simple Interest

p=10000;
r=10;
t=2;
console.log("2. Simple Interest : ", (p*r*t)/100);
document.write("<br>2. Simple Interest : " + (p*r*t)/100 + " rupees.");

//Area of triangle

b=20;
h=10;
console.log("3. Area of Triangle : ", .5*b*h);
document.write("<br>3. Area of Triangle : " + .5*b*h + " m<sup>2</sup>");

// Sum of a+b+c

a=20;b=40;c=30;
console.log("4. Result of expression a+b+c : " + (a+b+c));
document.write("<br>4. Result of expression a+b+c : " + (a+b+c));

// volume of Sphere
r1=7
console.log("5. Area of Sphere : " + 4/3*pi*(r1*r1*r1));
document.write("<br>5. Area of Sphere with radius 7cm : " + 4/3*pi*(r1*r1*r1) + " cm<sup>3</sup>");

// Swapping of two numbers

console.log(`6. Before swapping a=${a} and b=${b} ,`);
document.write(`<br>6. Before swapping a=${a} and b=${b} ,`);
temp=a;
a=b;
b=temp;
console.log(` After swapping a=${a} and b=${b}.`);
document.write(` After swapping a=${a} and b=${b}.`);

// Max of two numbers

if(a>b)
console.log("7. Max of a and b is " + a);
else
console.log("7. Max of a and b is " + b);
if(a>b)
document.write("<br>7. Max of a and b is " + a);
else
document.write("<br>7. Max of a and b is " + b);