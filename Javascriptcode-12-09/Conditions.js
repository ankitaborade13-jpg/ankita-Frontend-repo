//Q7
var a = 10;

if(a>0){
    console.log("Number is Positive");
}
 else if(a<0){
    console.log("Number is Negative");
}
else{
  console.log("Number is Z'ero");
}

// Q8
var num = 6;

if(num%2==0){
    console.log("Number is Even");
}else 
{
    console.log("Number is Odd");
}

//Q9
let marks = 90;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 60) {
    console.log("Grade C");
}
else if (marks >= 50) {
    console.log("Grade D");
}
else {
    console.log("Grade F");
}

//Q10
let a = 10;
let b = 25;
let c = 15;

if (a > b) {
    if (a > c) {
console.log("A is largest");
    }
    else {
console.log("C is largest");
    }
}
else {
    if (b > c) {
        console.log("B is largest");
    }
    else {
        console.log("C is largest");
    }
}