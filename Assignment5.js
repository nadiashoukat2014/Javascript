//Chapter1
//==================
//1
var greet=alert("welcome");
console.log(greet);

//2
console.log(alert("Please enter a valid password!"))

//3
console.log(alert("Welcome to js land\nHappy Coding!"))

//4
console.log(alert("Welcome TO JS"))
console.log(alert("Happy COding!"))

//5 
console.log(alert("Hello I can run JS throguh my broweser console"))

//==========================END CHAPTER1=======================================//

//CHAPTER 2

//================================================================//
//1
var username="Nado"
//2
var myName =username;
//3
var message="Hello World"
console.log(message)

//4
var StudentName="Johne Doe"
var years="15 years old!";
var CourseName="Certfied Mobile App Dev";
console.log(alert(StudentName))
console.log(alert(years));
console.log(alert(CourseName));

//5

var a="pizza"
for (var i = 0; i <= 5; i++)
{
    for(var j=a.length; j>=i; j--){
        document.write(a[i])
        }
        document.write("\n")
}

//6
var email="example@example.com";
console.log(alert("My Email adress is "+ email))

//7
var book="smarter way to learn JavaScript";
console.log(alert("I am trying to learn from the book "+ book))

//8
console.log("Yeah I can write HTMLthrough Javascipt")

//9
console.log(alert(("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")))

//* ======= Chapter No 3 ==========*//

//1
var age="15";
console.log(alert("I am "+ age +"yeas old."))

//2
var userVisited= 14 ;
alert("You have visited this site " + userVisited + " times");

//3
var birthYear="1990";
var findDataType = (typeof birthYear)
console.log(alert("My birth year is "+ birthYear))
console.log("Data type of my declare var is "+findDataType)

//4

var  VisitorsName="John Doe";
var  ProductTitle="T-shirt";
var Quantity="5"
document.write(VisitorsName + "ordered "+Quantity +"" +ProductTitle +" on XYZ Clothing store")


// * =================== CHAPTER NUMBER 5 ======*//
//1
var num1=3;
var num2=5;
var sum=num1+num2;
document.write("Sum of "+ num1 +"and "+ num2 + "is" +sum)

var a="pizza"
for (var i = 0; i <= 5; i++)
{
    for(var j=a.length; j>=i; j--){
        document.write(a[i])
        }
        document.write("\n")
}


//6
var email="example@example.com";
//document.write(alert("My Email adress is "+ email))


//7
var book="smarter way to learn JavaScript";
document.write(alert("I am trying to learn from the book "+ book))

//8
document.write("Yeah I can write HTMLthrough Javascipt")

// * =================== CHAPTER NUMBER 5 ======*//
//1
var num1=3;
var num2=5;
var sum=num1+num2;
var Subtraction=num1 - num2
var devision = num1 / num2
//2
document.write("Sum of "+ num1 +"and "+ num2 + "is" +sum + " and <br>"+
"Subtraction of "+num1 +"and "+ num2 +"is "+Subtraction + "<br>" +
"Devision of " + num1 +"and "+ num2 +"is" + devision + "<br>")
//3
var declareVar = "??"
var initialVal=5;
document.write("Value after variable declaration is: "+declareVar+"<br>"+
"Initial value: "+initialVal +"<br>");

var incrementVar = ++initialVal
document.write("Value after increment is:" +incrementVar++ +"<br>")

var additionVal = incrementVar + 7;
document.write("aftre 7 addition value is "+ additionVal +"<br>")

//4
var costOfMovieTicket ="600";
var numberOfTickets=5;
var totalCostOfTickets = costOfMovieTicket * numberOfTickets;
document.write("Total cost to buy "+numberOfTickets +"tickets to a movie is "+totalCostOfTickets +"PKR" +"<br><br>")

//5
for (var i=1; i<=10; i++)
{
    document.write(4 + " x " +i + " = " + i * 4)
    document.write("<br>")
}

//7
var priceOfItem1=650;
var priceOfItem2 =100;
 
var qtyOfItem1 =3;
var qtyOfItem2=7;
var shippingCharges=100;

var totalPriceOfItem1 = priceOfItem1 * qtyOfItem1;
var totalPriceOfItem2 = priceOfItem2 * qtyOfItem2;
var totalCost = totalPriceOfItem1 + totalPriceOfItem2 + shippingCharges;


document.write("<br>" +"Price of item1 is " + priceOfItem1 +" <br>"+
"Qty of item 1 is "+qtyOfItem1 +"<br>")

document.write("Price of item2 is " + priceOfItem2 +" <br>"+
"Qty of item 2 is "+qtyOfItem2 +" <br> " +
"Shipping Charges is "+shippingCharges +"<br>")

document.write("TOtal cost of your order is "+ totalCost + "<br> <br>")

//8
var totalMarks = 980;
var MarksObtained = 804;
var percentage = MarksObtained / totalMarks *100;
document.write("TOtal Marks is "+ totalMarks + "<br>" +
"Marks Obtained is "+ MarksObtained +"<br>")
document.write("Percentage is "+ percentage)

//12
var radius = 20 ;
var pie = 3.142;
var cercum = 2 * pie * radius;
var area = pie * radius*radius;
document.write("<h2>"+"The Geometerizer"+"</h2>"+"<br>"+"Radius of a circle: "+radius+"<br>"
+"The cercumference is: "+cercum+"<br>"+"The area is: "+area);

//13

var favrouit = "choclate chip";
var current = 15;
var estimate = 65;
var snacks = 3;
var totalsnacks = (estimate - current) * snacks;
document.write("<h1>"+"The Lifetime Supply Calculator"+"</h1>"+"<br><br>"+"Current age: "+current+"<br>"+
"Estimated maximum age: "+estimate+"<br>"+"Amount of snacke per day: "+snacks+"<br>"+"You will need "+totalsnacks+
 favrouit+" to last you until the ripe old age of 65" + "<br>");

 //* ============= Chapter 6 - 9 ========== *//

 

//3
//var name = prompt("Enter your name");
//document.write(" <br>Welcome "+ name + "<br>")

//5
var userInput = prompt("ENter number")
if(userInput == "")
{
    for (var i=1; i<=10; i++)
    {
        document.write(5 + " x " +i + " = " + i * 5)
        document.write("<br>")
    } 
}
else{
    for (var i=1; i<=10; i++)
    {
        document.write(userInput + " x " +i + " = " + i * userInput)
        document.write("<br>")
    }
}

//6
var sub1= prompt("Enter your first subject name");
var sub2= prompt("Enter your second subject name");
var sub3= prompt("Enter your third subject name");
totalMarksOfEachSubj =100;

var marksObtOfSubj1 = prompt("obtained Marks")
var marksObtOfSubj2 = prompt("obtained Marks")
var marksObtOfSubj3 = prompt("obtained Marks")

var percentage1 = marksObtOfSubj1/totalMarksOfEachSubj *100;
var percentage2 = (marksObtOfSubj2/totalMarksOfEachSubj)*100;
var percentage3 = (marksObtOfSubj3/totalMarksOfEachSubj)*100;

var totoalMarksOfStuents = marksObtOfSubj1 + marksObtOfSubj2 + marksObtOfSubj3
 document.write("Subject = " +"<br>"+ sub1 +"<br>" + sub2 +" <br>"+ sub3 +"<br>"+
 "Total Marks " + totalMarksOfEachSubj + "<br>" 
 +"Percentage of subj 1 is " +percentage1 + "%"+"<br>"
 + "Percentage of subj 2 is" +percentage2 + "%"+"<br>" +
 "Percentage of subj 3 is" + percentage3+ "%"+"<br>")


 //* ============= Chapter 9 - 12 ========== *//

 //1
 var cityName = prompt("Please enter City Name ")
 if(cityName == "karachi")
 {
    document.write("Welcome to the city of Lights!")   
 }
 else{
     document.write("Welcome")
 }
 
 //2
 var gender = prompt("Gender?")
 if(gender == "male")
 {
    document.write("Good Morning Sir")
 }
 else if(gender == "female"){
    document.write("Good Morning Ma’am")
 }
 else{
    document.write("Please type correct") 
 }

 //3
 var signalColor = prompt("which color of signal is on now?")
  if(signalColor == "red")
  {
    document.write("vehicles must stop")
  }
  else if (signalColor == "yellow")
  {
    document.write("vehicles should get ready to move")
  }

  else if (signalColor == "green")
  {
    document.write("vehicles can move now")
  }
  else{
    document.write("Please type correct color of signal")
  }

  //4
  var remianingFule = prompt("Plase enter remaining fuel in litres")
var currentFuel = prompt("Current Fuel?")

if(currentFuel <= 0.25+"litres")
{
    document.write("Please refill the fuel in your car")
}
//5
var a = 4;
if (++a === 5){
    document.write("given condition for variable a is true");
}

//output is (given condition for variable a is true)
//a

var a = 4;
if (++a === 5){
    document.write("given condition for variable a is true");
}

//output is (given condition for variable a is true)

//b
var b = 82;
if (b++ === 83){
    document.write("given condition for variable b is true");
}
//output is undefined

//c
var c = 12;
if (c++ === 13){
    document.write("condition 1 is true");
}
if (c === 13){
    document.write("condition 2 is true");
}
if (++c < 14){
    document.write("condition 3 is true");
}
if(c === 14){
    document.write("condition 4 is true");
}
//output is condition 2 is true and condition 4 is true

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    document.write("The cost equals");
}
//output is The cost equals

///7
var secretNum = prompt("secret number")
var guess = "9"
if(secretNum > guess)
{
    document.write("Incorrect")
}
else if (guess == secretNum)
{
    document.write("Bingo")

}
else if (guess == secretNum++)
{
    document.write("close enough")
}

//8
var num = prompt("Enter number")
if (num % 2)
{
    document.write(" number is divisible by 3")
}
else{
    document.write("Number is not divisible by 3")
}
/* question 9 */
var num =+prompt("enter number","");

if (num % 2 == 0){
    document.write("number is even");
}
else{
    document.write("number is odd");
}

//* ============= Chapter 12 - 13 ========== *//
///1
var ch= prompt("Enter any character","");
if (ch>=65 && ch<=90){
    document.write("Character is a capital letter");
}
else if (ch>=97 && ch<=122){
    document.write("Character is a small letter");
}
else if (ch>=48 && ch<=57){
    document.write("Character is a digit");
}

//2
var val1 = prompt("Enter 1st value");
var val2 = prompt("Enter 2nd value");
if(val1 == val2){
    document.write("Both Integars are equal")
   
}
else{
    document.write(Math.max(val1,val2))
}

//3
var number = +prompt("enter number","");
if(number>0){
    document.write("number is positive");

}
else if(number<=0){
    document.write("number is negative");
}
else if(number == 0){
    document.write("number is 0");  
}

//5
var pass1 = prompt("enter password");
var pass2 = prompt("confirm pass");
if(pass1==pass2){
    document.write("Correct! The password you entered matches");
}

else if (pass1 == ""){
    document.write(" Please enter your password");
}

else if(pass1!=pass2){
    document.write("Incorrect");
}
//6
var greeting;
var hour = 13;
if (hour < 18) {
document.write(greeting = "Good day");
}
else{
document.write(greeting = "Good evening")
}

//6
//* ============= Chapter 14 - 16 ========== *//
//1
var studentsName = [];
//3
var stringArray =["Nadia" , "Aisha"]
//4
var InitializaArray = [1,2,3];
//5
var boolArray = [true,false];
//6
var mixedArray = [1,2,3, "Nadia", "Aisha", true];
//7
var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.phil","phD"];

console.log("<h1>"+"Qualification:</h1>"+"<br>")
for(var i=1; i<=qualification.length; i++)
{
    console.log(qualification[i])
    
}    
console.log("<br>")    

//8









