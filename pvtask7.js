// 1. Simple Function
function welcomeMessage() {
    console.log("Welcome to ODIZO Internship");
}

welcomeMessage();
welcomeMessage();


// 2. Student Information
function studentInfo() {
    console.log("Student Name: Palak Verma");
    console.log("College Name: RCM");
    console.log("Course: BCA");
    console.log("Semester: 1st");
}

studentInfo();


// 3. Addition Function
function addNumbers(num1, num2) {
    console.log("Sum =", num1 + num2);
}

addNumbers(10, 20);
addNumbers(15, 25);
addNumbers(30, 40);


// 4. Subtraction Function
function subtractNumbers(num1, num2) {
    console.log("Subtraction =", num1 - num2);
}

subtractNumbers(20, 10);
subtractNumbers(50, 15);


// 5. Multiplication Function
function multiplyNumbers(num1, num2) {
    console.log("Multiplication =", num1 * num2);
}

multiplyNumbers(5, 4);


// 6. Division Function
function divideNumbers(num1, num2) {
    console.log("Division =", num1 / num2);
}

divideNumbers(20, 5);


// 7. Even or Odd Checker
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " : Even Number");
    } else {
        console.log(number + " : Odd Number");
    }
}

checkEvenOdd(2);
checkEvenOdd(5);
checkEvenOdd(8);
checkEvenOdd(11);
checkEvenOdd(14);


// 8. Voting Eligibility Checker
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log(age + " : Eligible to Vote");
    } else {
        console.log(age + " : Not Eligible to Vote");
    }
}

checkVotingEligibility(16);
checkVotingEligibility(18);
checkVotingEligibility(21);


// 9. Grade Checker
function checkGrade(marks) {
    if (marks >= 90) {
        console.log("Grade A+");
    } else if (marks >= 80) {
        console.log("Grade A");
    } else if (marks >= 70) {
        console.log("Grade B");
    } else if (marks >= 60) {
        console.log("Grade C");
    } else if (marks >= 40) {
        console.log("Grade D");
    } else {
        console.log("Fail");
    }
}

checkGrade(95);
checkGrade(82);
checkGrade(65);
checkGrade(35);


// 10. Largest Number
function findLargest(num1, num2) {
    if (num1 > num2) {
        console.log("Largest Number =", num1);
    } else {
        console.log("Largest Number =", num2);
    }
}

findLargest(10, 20);
findLargest(50, 30);
findLargest(100, 200);


// 11. Return Practice
function squareNumber(number) {
    return number * number;
}

let squareResult = squareNumber(5);
console.log("Square =", squareResult);


// 12. Rectangle Area
function calculateRectangleArea(length, width) {
    return length * width;
}

let rectangleArea = calculateRectangleArea(10, 5);
console.log("Rectangle Area =", rectangleArea);


// 13. Circle Area
function calculateCircleArea(radius) {
    return 3.14 * radius * radius;
}

let circleArea = calculateCircleArea(7);
console.log("Circle Area =", circleArea);


// 14. Multiplication Table Using Function
function printTable(number) {
    console.log("Table of " + number);

    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

printTable(5);
printTable(8);


// 15. Final Challenge - Student Report
function studentReport(name, htmlMarks, cssMarks, jsMarks, attendance) {

    let totalMarks = htmlMarks + cssMarks + jsMarks;
    let averageMarks = totalMarks / 3;

    let grade;

    if (averageMarks >= 90) {
        grade = "A+";
    } else if (averageMarks >= 80) {
        grade = "A";
    } else if (averageMarks >= 70) {
        grade = "B";
    } else if (averageMarks >= 60) {
        grade = "C";
    } else if (averageMarks >= 40) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    let resultStatus;
    if (averageMarks >= 40) {
        resultStatus = "Pass";
    } else {
        resultStatus = "Fail";
    }

    let attendanceStatus;
    if (attendance >= 75) {
        attendanceStatus = "Good Attendance";
    } else {
        attendanceStatus = "Low Attendance";
    }

    console.log("----- Student Report -----");
    console.log("Name:", name);
    console.log("HTML Marks:", htmlMarks);
    console.log("CSS Marks:", cssMarks);
    console.log("JavaScript Marks:", jsMarks);
    console.log("Total Marks:", totalMarks);
    console.log("Average Marks:", averageMarks);
    console.log("Grade:", grade);
    console.log("Result Status:", resultStatus);
    console.log("Attendance:", attendance + "%");
    console.log("Attendance Status:", attendanceStatus);
    console.log("--------------------------");
}

studentReport("Palak Verma", 85, 90, 88, 92);
studentReport("Rahul Kumar", 65, 70, 60, 70);