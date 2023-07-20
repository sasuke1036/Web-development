
var random_number1 =  Math.floor(Math.random() *6) +1;

var random_image1 = "dice" + random_number1 + ".png";
var random_source = "images/" + random_image1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",random_source);

var random_number2 = Math.floor(Math.random()*6)+1;
var random_image2 = "images/dice" +random_number2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",random_image2);

if(random_number1>random_number2)
{
    document.querySelector("h1").innerHTML = "Player1 wins";
}
else if(random_number1<random_number2)
{
    document.querySelector("h1").innerHTML = "Player2 wins";
}
else
document.querySelector("h1").innerHTML = "Draw!!"

