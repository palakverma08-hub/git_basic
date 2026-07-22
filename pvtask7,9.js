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


// ==========================================
// js task --9
// ==========================================

// Question 1 : Students Array

const students = [
    "Palak",
    "Rahul",
    "Priya",
    "Aman",
    "Sneha",
    "Rohit",
    "Anjali",
    "Vikas",
    "Neha",
    "Karan"
];

console.log("Students Array:");
console.log(students);

console.log("First Student:", students[0]);
console.log("Middle Student:", students[Math.floor(students.length / 2)]);
console.log("Last Student:", students[students.length - 1]);

// Question 2 : Numbers Array


const numbers = [12, 45, 67, 89, 23, 56, 91, 38, 74, 15, 62, 44, 29, 81, 100];

console.log("\nNumbers Array:");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Question 3 : Sum Function


function calculateSum(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log("\nTotal Sum:", calculateSum(numbers));

// Question 4 : Average Function

function calculateAverage(arr) {

    let total = calculateSum(arr);

    return total / arr.length;
}

console.log("Average:", calculateAverage(numbers));

// Question 5 : Largest Number

function findLargest(arr) {

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i];
        }

    }

    return largest;
}

console.log("Largest Number:", findLargest(numbers));

// Question 6 : Smallest Number


function findSmallest(arr) {

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < smallest) {
            smallest = arr[i];
        }

    }

    return smallest;
}

console.log("Smallest Number:", findSmallest(numbers));

// Question 7 : Even Odd Counter

function countEvenOdd(arr) {

    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 == 0) {
            even++;
        }
        else {
            odd++;
        }

    }

    console.log("Even Numbers:", even);
    console.log("Odd Numbers:", odd);

}

countEvenOdd(numbers);

// Question 8 : Search Element


function searchElement(arr, value) {

    let found = false;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === value) {
            found = true;
            break;
        }

    }

    if (found) {
        console.log(value, "Element Found");
    }
    else {
        console.log(value, "Element Not Found");
    }

}

searchElement(numbers, 56);
searchElement(numbers, 500);

// Question 9 : Reverse Printing


function reverseArray(arr) {

    console.log("\nReverse Array:");

    for (let i = arr.length - 1; i >= 0; i--) {

        console.log(arr[i]);

    }

}

reverseArray(numbers);

// Question 10 : Student Marks Report


const studentNames = [
    "Palak",
    "Rahul",
    "Priya",
    "Aman",
    "Sneha"
];

const studentMarks = [
    95,
    76,
    58,
    34,
    88
];

console.log("\nStudent Marks Report");

for (let i = 0; i < studentNames.length; i++) {

    let result;

    if (studentMarks[i] >= 40) {
        result = "Passed";
    }
    else {
        result = "Failed";
    }

    console.log(studentNames[i] + " - " + studentMarks[i] + " - " + result);

}

// Question 11 : Grade Report

console.log("\nGrade Report");

for (let i = 0; i < studentMarks.length; i++) {

    let grade;

    if (studentMarks[i] >= 90) {
        grade = "A+";
    }
    else if (studentMarks[i] >= 80) {
        grade = "A";
    }
    else if (studentMarks[i] >= 70) {
        grade = "B";
    }
    else if (studentMarks[i] >= 60) {
        grade = "C";
    }
    else if (studentMarks[i] >= 40) {
        grade = "D";
    }
    else {
        grade = "Fail";
    }

    console.log(studentNames[i] + " : " + grade);

}




// Question 12 : Attendance Report

const attendance = [
    95,
    80,
    72,
    55,
    90
];

console.log("\nAttendance Report");

for (let i = 0; i < attendance.length; i++) {

    let status;

    if (attendance[i] >= 90) {
        status = "Excellent Attendance";
    }
    else if (attendance[i] >= 75) {
        status = "Good Attendance";
    }
    else if (attendance[i] >= 60) {
        status = "Average Attendance";
    }
    else {
        status = "Poor Attendance";
    }

    console.log(studentNames[i] + " - " + status);

}

// Question 13 : Multiplication Tables

const tableNumbers = [2, 3, 4, 5];

function printTable(number) {

    console.log("\nTable of", number);

    for (let i = 1; i <= 10; i++) {

        console.log(number + " x " + i + " = " + number * i);

    }

}

for (let i = 0; i < tableNumbers.length; i++) {

    printTable(tableNumbers[i]);

}

// Question 14 : Positive Negative Zero

const values = [
    5,
    -3,
    0,
    10,
    -8,
    0,
    7,
    -1,
    15
];

function countValues(arr) {

    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            positive++;
        }
        else if (arr[i] < 0) {
            negative++;
        }
        else {
            zero++;
        }

    }

    console.log("\nPositive:", positive);
    console.log("Negative:", negative);
    console.log("Zero:", zero);

}

countValues(values);

// Question 15 : Bonus Challenge

const htmlMarks = [90, 75, 65, 30, 88];
const cssMarks = [95, 70, 60, 40, 82];
const jsMarks = [92, 80, 55, 35, 90];

function generateStudentReport(names, html, css, js, attendance) {

    console.log("\n===== Student Report =====");

    for (let i = 0; i < names.length; i++) {

        let total = html[i] + css[i] + js[i];
        let average = total / 3;

        let grade;

        if (average >= 90) {
            grade = "A+";
        }
        else if (average >= 80) {
            grade = "A";
        }
        else if (average >= 70) {
            grade = "B";
        }
        else if (average >= 60) {
            grade = "C";
        }
        else if (average >= 40) {
            grade = "D";
        }
        else {
            grade = "Fail";
        }

        let result;

        if (average >= 40) {
            result = "Pass";
        }
        else {
            result = "Fail";
        }

        let attendanceStatus;

        if (attendance[i] >= 90) {
            attendanceStatus = "Excellent";
        }
        else if (attendance[i] >= 75) {
            attendanceStatus = "Good";
        }
        else if (attendance[i] >= 60) {
            attendanceStatus = "Average";
        }
        else {
            attendanceStatus = "Poor";
        }

        console.log("----------------------------");
        console.log("Name:", names[i]);
        console.log("HTML:", html[i]);
        console.log("CSS:", css[i]);
        console.log("JavaScript:", js[i]);
        console.log("Total:", total);
        console.log("Average:", average.toFixed(2));
        console.log("Grade:", grade);
        console.log("Result:", result);
        console.log("Attendance:", attendanceStatus);

    }

}

generateStudentReport(studentNames, htmlMarks, cssMarks, jsMarks, attendance);