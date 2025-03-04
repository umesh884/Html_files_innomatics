let marks = 75;
let attendance = 91;
function calculateGrade(marks, attendance){
    if(attendance > 90){
        marks += 5;
    }
    if(marks >= 90){
        console.log("Grade: A");
        console.log(`Your attendance is ${attendance}`);
    }
    else if(marks >= 80 && marks < 90){
        console.log("Grade: B");
        console.log(`Your attendance is ${attendance}`);
    }
    else if(marks >= 70 && marks < 80){
        console.log("Grade: C");
        console.log(`Your attendance is ${attendance}`);
    }
    else if(marks >= 60 && marks < 70){
        console.log("Grade: D");
        console.log(`Your attendance is ${attendance}`);
    }
    else if(marks < 60){
        console.log("Fail: F");
        console.log(`Your attendance is ${attendance}`);
    }
   
   return marks;
}
console.log(calculateGrade(marks, attendance))