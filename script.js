// close all pages
let question1= document.getElementById("question1");
question1.style=" display: none";
let question2= document.getElementById("question2");
question2.style=" display: none";
let question3= document.getElementById("question3");
question3.style=" display: none";
let question4= document.getElementById("question4");
question4.style=" display: none";
let question5= document.getElementById("question5");
question5.style=" display: none";
let question6= document.getElementById("question6");
question6.style=" display: none";
let question7= document.getElementById("question7");
question7.style=" display: none";
let question8= document.getElementById("question8");
question8.style=" display: none";
let question9= document.getElementById("question9");
question9.style=" display: none";
let question10= document.getElementById("question10");
question10.style=" display: none";
let question11= document.getElementById("question11");
question11.style=" display: none";
let question12= document.getElementById("question12");
question12.style=" display: none";
let question13= document.getElementById("question13");
question13.style=" display: none";
let question14= document.getElementById("question14");
question14.style=" display: none";
let question15= document.getElementById("question15");
question15.style=" display: none";
let pageFinale = document.getElementById("pageFinale");
pageFinale.style="display: none";

let nom =document.getElementById("nom");
let email=document.getElementById("email");
let username;
let usermail;
let resultat = 0;
// open only page asked
let accueil= document.getElementById("accueil");
const form = document.querySelector("form");
let commencer = document.getElementById("submit");
form.addEventListener("submit", function(event){
    event.preventDefault();
    username = nom.value;
    usermail = email.value;
    //console.log(username);
    accueil.style=" display: none";
    question1.style=" display: block";
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
// quiz-1
let suivant1 = document.getElementById("suivant1");
let Quiz1= document.getElementById("Quiz1");
if(Quiz1.checked) resultat= resultat+1;
suivant1.addEventListener("click", function(){
question2.style="display: block";
question1.style="display: none";
});
// quiz-2
let suivant2 = document.getElementById("suivant2");
let Quiz2= document.getElementById("Quiz2");
if(Quiz2.checked) resultat= resultat+1;
suivant2.addEventListener("click", function(){
question3.style="display: block";
question2.style="display: none";
});
// quiz-3
let suivant3 = document.getElementById("suivant3");
let Quiz3= document.getElementById("Quiz3");
if(Quiz3.checked) resultat= resultat+1;
console.log(resultat);
suivant3.addEventListener("click", function(){
question4.style="display: block";
question3.style="display: none";
});
// quiz-4
let suivant4 = document.getElementById("suivant4");
suivant4.addEventListener("click", function(){
question5.style="display: block";
question4.style="display: none";
});
// quiz-5
let suivant5 = document.getElementById("suivant5");
suivant5.addEventListener("click", function(){
question6.style="display: block";
question5.style="display: none";
});
// quiz-6
let suivant6 = document.getElementById("suivant6");
suivant6.addEventListener("click", function(){
question7.style="display: block";
question6.style="display: none";
});
// quiz-7
let suivant7 = document.getElementById("suivant7");
suivant7.addEventListener("click", function(){
question8.style="display: block";
question7.style="display: none";
});
// quiz-8
let suivant8 = document.getElementById("suivant8");
suivant8.addEventListener("click", function(){
question9.style="display: block";
question8.style="display: none";
});
// quiz-9
let suivant9 = document.getElementById("suivant9");
suivant9.addEventListener("click", function(){
question10.style="display: block";
question9.style="display: none";
});
// quiz-10
let suivant10 = document.getElementById("suivant10");
suivant10.addEventListener("click", function(){
question11.style="display: block";
question10.style="display: none";
});
// quiz-11
let suivant11 = document.getElementById("suivant11");
suivant11.addEventListener("click", function(){
question12.style="display: block";
question11.style="display: none";
});
// quiz-12
let suivant12 = document.getElementById("suivant12");
suivant12.addEventListener("click", function(){
question13.style="display: block";
question12.style="display: none";
});
// quiz-13
let suivant13 = document.getElementById("suivant13");
suivant13.addEventListener("click", function(){
question14.style="display: block";
question13.style="display: none";
});
// quiz-14
let suivant14 = document.getElementById("suivant14");
suivant14.addEventListener("click", function(){
question15.style="display: block";
question14.style="display: none";
});
// quiz-15
let suivant15 = document.getElementById("suivant15");
suivant15.addEventListener("click", function(){
pageFinale.style="display: block";
question15.style="display: none";
});

let EndButton = document.getElementById("EndButton");
EndButton.addEventListener("click", function(){

    accueil.style="display: block";
    pageFinale.style="display: none";
    });
//  event of Exitbutton 
let ExitButton = document.querySelectorAll(".quitter");
for( let i=0; i < ExitButton.length; i++ )
{ExitButton[i].addEventListener("click", function()
{   pageFinale.style="display: block";
    question1.style=" display: none";
    question2.style=" display: none";
    question3.style=" display: none";
    question4.style=" display: none";
    question5.style=" display: none";
    question6.style=" display: none";
    question7.style=" display: none";
    question8.style=" display: none";
    question9.style=" display: none";
    question10.style=" display: none";
    question11.style=" display: none";
    question12.style=" display: none";
    question13.style=" display: none";
    question14.style=" display: none";
    question15.style=" display: none";
    accueil.style="display: none";
})};
// Inactivation of NextButton
// let NextButton = document.querySelectorAll(".suivant");
// for( let j=0; j < NextButton.length; j++ )
// { NextButton[j].disabled = true;
//     NextButton[j].style="backgroung : red";
// }