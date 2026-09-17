// Q1
// let student=["Ankita","Siddhi","Tushar","vaibhav","Gayatri"]
// console.log(student);

// Q2
// let numbers=[10,20,30,40,50];
// let sum=0;
// for(let num of numbers){
//      sum = sum + num;
// }
// console.log(sum);

// Q3
// let fruits=["Mango","Strawberry","Cherry","Apple"];

// for(let temp of fruits){
//     console.log(temp);
// }

// Q4
// let numbers=[10,25,40,65,70,84];
// for(let num of numbers){
//      if(num %2==0){
//         console.log(num)
//        }
//     }

// Q5
// let student = {
//     name: "Ankita Borade",
//     age: 21,
//     course: "Computer Science",
//     marks: 95
// };

// console.log(student.name);
// console.log(student.age);
// console.log(student.course);
// console.log(student.marks);

// Q6
// let car = {
//     brand: "Toyota",
//     model: "Fortuner",
//     price: 5000000
// };
// console.log("Brand:", car.brand);
// console.log("Model:", car.model);
// console.log("Price:", car.price);

// Q7
// let students = [
//     {name: "Ankita"},
//     {name: "Siddhi"},
//     {name: "Tushar"}
// ];
// for (let temp of students) {
//     console.log(temp.name);
// }

// Q8
// let numbers = [10, 20, 30];
// let [first,second,third] = numbers;
// console.log(first);
// console.log(second);
// console.log(third);

// Q9
// const student = {
//     name: "Ankita",
//     age: 20,
//     course: "FULL stack"
// };
// const { name, age, course } = student;
// console.log(name);
// console.log(age);
// console.log(course);

// Q10
let numbers = [[1, 10], [2, 20], [3, 30]];

for (let [number, value] of numbers) {
    console.log(number, value);
}