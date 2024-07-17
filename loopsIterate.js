 
// Q2.Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"


// for(var i =0;i<=15;i++){
// if(i%2==0){
//     document.write(`${i} is even <br>`);
    

// }else if(i%2!=0) {
// document.write(`${i} is odd <br>` );
// }
// }



// Q3.Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Bizz". For numbers multiples of both three and five print "FizzBizz".


// for(var i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         document.write(` FIZZBIZZ <br>` );

//     }else if(i%3==0){
//         document.write(` FIZZ <br>`);


//     }else if(i%5==0 ){
//         document.write(` BIZZ <br>`);

//     }else{
//         document.write(`${i}<br>`)
//     }

// }





// Q.4 - Design Half Faulty Calculator-

// Design a calculator which will correctly solve all the problems except
// # the following ones:

// # 45 * 3 = 555, 56+9 = 77, 56/6 = 4  

  
// # Your program should take operator  and the two numbers as input from the user
// # and then return the result


// var num1 = parseFloat(prompt("Enter the first num1: "));
// var operator = prompt("Enter the operator +,-,/")
// var num2 = parseFloat(prompt("Enter the second num2: "));
// var result;

// if(operator = "+"){
//     if(num1 = 56 && num2 ==9){
//         result =77;

//     }else{
//         result=num1+num2;
//     }


// }else if(operator="-"){
//     result = num1 - num2;


// }else if(operator="*"){
//     if(num1 = 45 && num2==3){

//     }else{
//     result =num1 * num2;
// }
// }
// else if(operator = "/"){
//     if(num1 = 56 && num2 ==6){
//         result = 4;


//     }else{
//         if(num2!=0){
//             result = num1 / num2;


//         }else{
//             result = "Error : Division by zero !";

//         }



//     }
    
// }else{
//     result = "Error : Invalid operator !";
// }
// document.write("Result:"+result);



//   Q.5.To ask user that how many days in a leap year. 
//   a. if user will get correct ans -
//       then print "You have cleared the first level" and ask again another que "What month has an extra day in leap year?" if user will      	get correct answer then display message "Congratulations !!You have cleared the test" otherwise "You have failed the test".

// b.otherwise print following msg-

//     "Your input is wrong, please try again."


var leap_year = prompt("How many days in leap year ?");

if(leap_year ==366){
    alert("You have cleared the first level");
    var month_in_year = prompt("What month has an extra day in leap year ?");
   
    if(month_in_year == "february" || month_in_year == "February"){
        alert("Congratulations !!You have cleared the test.");


    }else{
        alert("You have failed the test");

    }

}else{
    alert("Your input is wrong, please try again.");

}