
var count = prompt("enter the range");

// for(var i=0;i<=count;i++){
//     document.write(`<br>`);
// for(var j=1;j<=i;j++){
//     document.write(` * `);

// }
// }
 for( var i =0;i<=count;i++){
    document.write(`<br>`);
    for(var k =count-i;k>=1;k--){
        document.write(`&nbsp;&nbsp;`);


    }for(var j=1;j<=i;j++){
        document.write("");

    }

 }