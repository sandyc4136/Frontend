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

student=[{
        id:101,
        name:"Sandip",
        phone:["948287242","8288424","84824774"],
        marks:97,
        address:{houseNo:"A-176",city:"mumbai",street:"afdfb",pincode: "384348323"},
    },
    {
        id:111,
        name:"Sudip",
        phone:["88248","2445","435324"],
        marks:97,
        address:{houseNo:"X-176",city:"rfvxc",street:"addb",pincode: "43"},
    },
    {
        id:101,
        name:"Samip",
        phone:["32564","243566","55422"],
        marks:97,
        address:{houseNo:"A-16",city:"mumbai",street:"ab",pincode: "434"},
    }];
console.log(student);
// console.log(student.phone);
// console.log(student.address.city);
//  console.log(student[0].address);

for(i=0;i<student.length;i++){
    console.log(student[i].name,student[i].id);
    console.log(student[i].address);
        for(j=0;j<student[i].phone.length;j++)
            console.log(student[i].phone[j]);
}
