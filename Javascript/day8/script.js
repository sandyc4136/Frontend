// class Student{
//     constructor(x){
//         console.log("I am a student ",x);
//     }
// }
// var s1=new Student(1);
// var s2=new Student(2);

// class Employee{   // acts like Default constructor
//     constructor(){
//         this.id=1;
//         this.name="Sandip";
//     }
// }
// var e1=new Employee();
// var e2=new Employee();
// console.log(e1);
// console.log(e2);
// console.log(e1.id,e1.name);


// class Employee{    // acts like parameterised Constructor
//         constructor(id,name){ 
//             this.id=id;
//             this.name=name;
//         }
//     }

//     var s1=new Employee(1,"Sandip");
//     var s2=new Employee(2,"Sankalpa");

//     console.log(s1.id,s1.name);
//     console.log(s2.id,s2.name);

// Funxtion into a class

pi=3.14;

class Employee{    
        constructor(id,name){ 
            this.id=id;
            this.name=name;
        }
        show(){
            console.log("id = ",this.id, "Name = ", this.name);
        }
    }

        var s1=new Employee(1,"Sandip");
        s1.show();
        var s2=new Employee(2,"Sankalpa");
        s2.show();


        class circle{
            constructor(radius){
                this.radius=radius;
            }
            getArea(){
                return pi*this.radius*this.radius;
            }
            getPerimeter(){
                return pi*2*this.radius;
            }
        }

        var c1=new circle(4);
        var area=c1.getArea();
        var perim=c1.getPerimeter();
        console.log("Area is ",area, "perimeter is ",perim);