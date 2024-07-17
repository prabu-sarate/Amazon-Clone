//javascript is  client side scripting language
//javascript is interact with the elements of web pages.

var Stu_Roll = prompt("Enter Roll");
var Stu_Name = prompt("Enter Name");
var m1 = parseInt(prompt("Enter Sub1 Marks"));
var m2 = parseInt(prompt("Enter Sub2 Marks"));
var m3 = parseInt(prompt("Enter Sub3 Marks"));
var grade ;
var total = m1+m2+m3;
var per = parseInt(total/3);

if(per>=70){
grade="distiction";

}
else if(per>=60&&per<70){
    grade ="First Class";

}
else if(per>=50 && per<60){
    grade = "Second Class";

}
else if(per>=40 && per<50){
    grade="Pass Class";

}
else{
    grade="Fail";
}


document.write("<table border=4 align=center width='400px' cellpadding=5><caption><h1>Student Marksheet</h1></caption><tr><th>Roll no</th> <th> Student Name</th> <th>m1</th> <th>m2</th> <th>m3 </th> <th> Total</th> <th> Percentage</th> <th>Grade</th> </tr>");

document.write("<tr> <td>"+Stu_Roll+"</td> <td>"+Stu_Name+"</td> <td>"+m1+"</td> <td>"+m2+"</td> <td>"+m3+"</td> <td>"+total+"</td> <td>"+per+"</td> <td>"+grade+"</td> </tr> </table>");

