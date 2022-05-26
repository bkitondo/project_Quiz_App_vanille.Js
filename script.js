let nom =document.getElementById("nom");
let email=document.getElementById("email");
let username;
let usermail;
let resultat = 0;
let NextButton = document.querySelectorAll(".suivant");
// close all pages exepted accueil
let Question = document.querySelectorAll(".question");
for ( let i=0; i < Question.length; i++)
    {
    Question[i].style="display: none";
    }
pageFinale.style="display: none";

let accueil= document.getElementById("accueil");
const form = document.querySelector("form");
let commencer = document.getElementById("submit");
form.addEventListener("submit", function(event){
    event.preventDefault();
    username = nom.value;
    usermail = email.value;
    accueil.style=" display: none";
    Question[0].style=" display: block";
    
    // create new elements of End-page 
let InputScore = document.createElement("p");
InputScore.textContent= resultat+"/15";

let pageFinaleMain = document.getElementById("pageFinaleMain");
let InputUsername = document.createElement("p");
InputUsername.textContent = username;
pageFinaleMain.appendChild(InputUsername);
console.log(InputUsername.textContent)

let InputUsermail = document.createElement("p");
InputUsermail.textContent= usermail;
pageFinaleMain.appendChild(InputUsermail);

let InputImage = document.createElement("p");
pageFinaleMain.appendChild(InputImage);
let Image = document.createElement("img");
InputImage.appendChild(Image);
if(resultat > 7 ) Image.src = "./reussi.png";
if(resultat < 8 ) Image.src ="./echec.png";

pageFinaleMain.appendChild(InputScore);
});
// open only page asked
for ( let i=0; i <= NextButton.length-1; i++)
{
    let NextButtonI = Question[i];
    if (i == Question.length-1)
    {
        NextButton[i].addEventListener("click", function()
        {
            pageFinale.style="display: block";
            Question[i].style="display: none";
            NextButtonI.style="display: none";
        });
    }
else
        NextButton[i].addEventListener("click", function()
        {
            Question[i+1].style="display: block";
            NextButtonI.style="display: none";
        });
}
//  event of Exitbutton 
let ExitButton = document.querySelectorAll(".quitter");
for( let i=0; i < ExitButton.length; i++ )
{ExitButton[i].addEventListener("click", function()
{   
    Question[i].style="display: none";
    accueil.style="display: none";
    pageFinale.style="display: block";
})};
// // Inactivation of NextButton
// // let NextButton = document.querySelectorAll(".suivant");
// // for( let j=0; j < NextButton.length; j++ )
// // { NextButton[j].disabled = true;
// //     NextButton[j].style="backgroung : red";
// // }