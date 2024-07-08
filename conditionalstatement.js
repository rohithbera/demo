/*
CONDITIONAL STATEMENTS:
--> Simple if
--> if else
--> nested if else
--> else if ladder
--> switch case
*/
//------if else----------//
let a = 25;
if (a > 50) {
    console.log("Statement is true");
} else {
    console.log("Statement is false")
}

//---------else if ladder------//
// let ticketprice = 130;
// const ticketprice = prompt("enter the ticket price:");
// if(ticketprice>100 && ticketprice<=150){
//     console.log("seat from 1 to 20")
// } else if(ticketprice>150 && ticketprice<=200) {
//     console.log("seat from 21 to 40")
// }else if(ticketprice>200 && ticketprice<=500) {
//     console.log("seat from 41 to 50")
// } else {
//     console.log("special cabin");
// }

//--------nested if else--------//
/*
if (){
    if(){

    }
} else {

}
*/
// const age= prompt("Enter your age")
// if(age>10){
//     if(age>18){
//     console.log("can vote");
// }else {
//     console.log("cannot vote")
// }
// }else{
//     console.log("Entered age is invalid");
// }
/*
//------switch case-------//
switch(){
    case 1:
        statement 1;
        break;
    case 2:
        statement 2;
        break;
        .
        .
    case n:
        statement n;
        break;
    .
    .
    .
    default:
        statement;            
}
*/
// const lang= parseInt(prompt("Choose the number for language"));
// switch(lang){
//     case 1 :
//         console.log("selected tamil language");
//         break;
//     case 2 :
//         console.log("selected english language");
//         break;
//     case 3 :
//         console.log("selected kanada language");
//         break;
//     case 4 :
//         console.log("selected telugu language");
//         break;          

//     default :
//         console.log("selected french language");    
// }

/*
LOOPS:

while loop:
while()
{
    statement;
}

do...while loop: (-------EXIT CHECK LOOP-------)
do{
    statement;
}while()

for loop: (-------ENTRY CONTROLLED LOOP-------)
for(initialization;condition;increment/decrement)
{
    statement;
}
*/
 //--------while loop-------//
// let i = prompt("Enter the value");
// while(i<6){
//     console.log(i);
//     i++;
// }

//---------do while--------//

// let i = prompt("Enter the value");
// do {
//     console.log(i);
//     i++;
// }while(i<=10)
/*------for loop------*/
let n = prompt("Enter the value");
for(let i=n; i<20; i++) {
    console.log(i);
}
