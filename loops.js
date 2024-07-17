var a = prompt("Enter number: ");
var b = prompt("Enter number: ");

if(a<b){
    for(var i =a; i<=b;i++){
       document.write(`${i}<br>`);

    }

}else{
    for(var i = a; i>=b;i--){

        document.write(`${i} <br>`);
    }
}