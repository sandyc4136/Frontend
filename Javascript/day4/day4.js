a=[10,20,30,40,"Hello", true , null]
// console.log(a);
b=[11,45,24,80,9,14,10,80];
// console.log(a.length);
max=b[0];

for(i=1;i<a.length-1;i++)
{
    if(b[i]>max){
        max=b[i];
    }
} 
console.log(max);
// console.log(x);

student={
        id:101,
        name:"Sandip",
        phone:["948287242","8288424","84824774"],
        marks:97,
        address:{houseNo:"A-176",city:"mumbai",street:"ab",pincode: "388323"},
    };
console.log(student);
console.log(student.phone);
console.log(student.address.city);
