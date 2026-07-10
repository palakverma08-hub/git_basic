// =====================================
// Task - 3
// =====================================

// Student Details
const studentName = "Palak Verma";
let age = 18;
let javascriptMarks = 85;
let htmlMarks = 90;
let cssMarks = 80;
let attendancePercentage = 90;
const isStudent = true;

console.log("===== STUDENT DETAILS =====");
console.log("Student Name : " + studentName);
console.log("Age : " + age);
console.log("JavaScript Marks : " + javascriptMarks);
console.log("HTML Marks : " + htmlMarks);
console.log("CSS Marks : " + cssMarks);
console.log("Attendance : " + attendancePercentage + "%");
console.log("Is Student : " + isStudent);

//voting eligibility

console.log(" ");
console.log("===== VOTING ELIGIBILITY =====");

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}
// Even or Odd Checker


console.log(" ");
console.log("===== EVEN OR ODD CHECKER =====");

let number = 15;

if (number % 2 == 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}


// Student Grade Checker


console.log(" ");
console.log("===== GRADE CHECKER =====");

let averageMarks = (htmlMarks + cssMarks + javascriptMarks) / 3;

console.log("Average Marks : " + averageMarks);

if (averageMarks >= 80) {
    console.log("Grade A");
}
else if (averageMarks >= 60) {
    console.log("Grade B");
}
else if (averageMarks >= 40) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}


// Internship Eligibility


console.log(" ");
console.log("===== INTERNSHIP ELIGIBILITY =====");

if (age >= 18 && attendancePercentage >= 75 && isStudent) {
    console.log("Eligible for Internship");
} else {
    console.log("Not Eligible for Internship");
}


// Logical Operators


console.log(" ");
console.log("===== LOGICAL OPERATORS =====");

console.log("AND (&&) : " + (age >= 18 && attendancePercentage >= 75));

console.log("OR (||) : " + (javascriptMarks >= 90 || htmlMarks >= 90));

console.log("NOT (!) : " + (!isStudent));


// Comparison Operators


console.log(" ");
console.log("===== COMPARISON OPERATORS =====");

console.log("javascriptMarks > htmlMarks : " + (javascriptMarks > htmlMarks));

console.log("javascriptMarks < htmlMarks : " + (javascriptMarks < htmlMarks));

console.log("javascriptMarks >= cssMarks : " + (javascriptMarks >= cssMarks));

console.log("cssMarks <= htmlMarks : " + (cssMarks <= htmlMarks));

console.log("javascriptMarks == htmlMarks : " + (javascriptMarks == htmlMarks));

console.log("javascriptMarks === htmlMarks : " + (javascriptMarks === htmlMarks));

console.log("javascriptMarks != htmlMarks : " + (javascriptMarks != htmlMarks));

// ======================================
// JavaScript Task 4 - For Loop Practice
// Student Name: Palak Verma
// ======================================

// 1. Number Printing (1 to 10)

console.log("===== Numbers from 1 to 10 =====");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Reverse Number Printing


console.log(" ");
console.log("===== Numbers from 10 to 1 =====");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// 3. Even Numbers (1 to 20)


console.log(" ");
console.log("===== Even Numbers =====");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 4. Odd Numbers (1 to 20)


console.log(" ");
console.log("===== Odd Numbers =====");

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// 5. Multiplication Table


console.log(" ");
console.log("===== Multiplication Table =====");

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// 6. Sum of Numbers (1 to 10)


console.log(" ");
console.log("===== Sum of Numbers =====");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log("Sum = " + sum);


// 7. Divisible by 3


console.log(" ");
console.log("===== Numbers Divisible by 3 =====");

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


// 8. Loop Increment Practice


console.log(" ");
console.log("===== Increment by 2 =====");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// 9. Loop Decrement Practice


console.log(" ");
console.log("===== Decrement by 2 =====");

for (let i = 20; i >= 0; i -= 2) {
    console.log(i);
}


// 10. Conditions with Loop


console.log(" ");
console.log("===== Divisible by 3 and 5 =====");

for (let i = 1; i <= 15; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Divisible by 3 and 5");
    }
    else {
        console.log(i);
    }

}


// 21. Divisible by 3 and 5


console.log(" ");
console.log("===== DIVISIBLE BY 3 AND 5 =====");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        console.log(i);

    }

}


// 22. Divisible by 3 or 5


console.log(" ");
console.log("===== DIVISIBLE BY 3 OR 5 =====");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 || i % 5 === 0) {

        console.log(i);

    }

}


// 23. Number Classification


console.log(" ");
console.log("===== NUMBER CLASSIFICATION =====");

for (let i = 1; i <= 30; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        console.log(i + " - Divisible by 3 and 5");

    }
    else if (i % 3 === 0) {

        console.log(i + " - Divisible by 3");

    }
    else if (i % 5 === 0) {

        console.log(i + " - Divisible by 5");

    }
    else {

        console.log(i);

    }

}


// 24. Counting Even Numbers


console.log(" ");
console.log("===== COUNT EVEN NUMBERS =====");

let evenCount = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 2 === 0) {

        evenCount++;

    }

}

console.log("Total Even Numbers : " + evenCount);


// 25. Counting Odd Numbers


console.log(" ");
console.log("===== COUNT ODD NUMBERS =====");

let oddCount = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 2 !== 0) {

        oddCount++;

    }

}

console.log("Total Odd Numbers : " + oddCount);


// 26. Count Numbers Divisible by 3


console.log(" ");
console.log("===== COUNT DIVISIBLE BY 3 =====");

let divisibleBy3Count = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0) {

        divisibleBy3Count++;

    }

}

console.log("Numbers Divisible by 3 : " + divisibleBy3Count);


// 27. FizzBuzz Challenge


console.log(" ");
console.log("===== FIZZBUZZ =====");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz");

    }
    else if (i % 3 === 0) {

        console.log("Fizz");

    }
    else if (i % 5 === 0) {

        console.log("Buzz");

    }
    else {

        console.log(i);

    }

}


// 28. Number Pattern


console.log(" ");
console.log("===== NUMBER PATTERN =====");

for (let i = 1; i <= 5; i++) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {

        pattern = pattern + j;

    }

    console.log(pattern);

}


// 29. Star Pattern


console.log(" ");
console.log("===== STAR PATTERN =====");

for (let i = 1; i <= 5; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {

        stars = stars + "*";

    }

    console.log(stars);

}


// 30. Reverse Star Pattern


console.log(" ");
console.log("===== REVERSE STAR PATTERN =====");

for (let i = 5; i >= 1; i--) {

    let stars = "";

    for (let j = 1; j <= i; j++) {

        stars = stars + "*";

    }

    console.log(stars);

}

// 31. Final Student Report


console.log(" ");
console.log("========================================");
console.log("      FINAL STUDENT REPORT");
console.log("========================================");

console.log("Student Name          : " + studentName);
console.log("Age                   : " + age);

console.log("----------------------------------------");

console.log("HTML Marks            : " + htmlMarks);
console.log("CSS Marks             : " + cssMarks);
console.log("JavaScript Marks      : " + javascriptMarks);

console.log("----------------------------------------");

console.log("Total Marks           : " + totalMarks);
console.log("Average Marks         : " + averageMarks);
console.log("Grade                 : " + grade);

console.log("----------------------------------------");

console.log("Attendance Percentage : " + attendance + "%");
console.log("Attendance Status     : " + attendanceStatus);

console.log("----------------------------------------");

console.log("Overall Result        : " + overallResult);
console.log("Internship Eligibility: " + internshipStatus);

console.log("========================================");
console.log("       END OF REPORT");
console.log("========================================");