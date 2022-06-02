let mainPage=document.querySelector("main");
let startPage=document.querySelector(".startPage");
let email=document.querySelector("#email");
let nom=document.querySelector("#nom");
let allInputs=document.querySelectorAll('[type|="radio"]');
let alertName =document.querySelector(".alertName");
let alertMail =document.querySelector(".alertMail");
// Create elements of EndPAges
let endPage=document.createElement("div"); 
endPage.classList.add("endPage"); mainPage.appendChild(endPage);
let displayGamerName=document.createElement("h2"); 
displayGamerName.classList.add("secondTitle");
endPage.appendChild(displayGamerName);
let displayGamerMail=document.createElement("p");
displayGamerMail.classList.add("gamerMail");
endPage.appendChild(displayGamerMail);

let iconeEndPage = document.createElement("img");
endPage.appendChild(iconeEndPage);

let displayGamerScore=document.createElement("p");
displayGamerScore.classList.add("score");
endPage.appendChild(displayGamerScore);

let endButton=document.createElement("button");
endButton.classList.add("endButton","styleOfButton");
endPage.appendChild(endButton);
// Create page of Quiz
let mainPAgeOfQUiz=document.createElement("div"); 
mainPAgeOfQUiz.classList.add("divQuiz"); mainPage.appendChild(mainPAgeOfQUiz);

let questions = document.createElement("p");
questions.classList.add("quiz");
mainPAgeOfQUiz.appendChild(questions); 
// Number of questions
let indexQuizAndChrono=document.createElement("p");
indexQuizAndChrono.classList.add("quizNumberAndChrono");

let indexOfQuiz=document.createElement("span");
indexOfQuiz.classList.add("numberOfQuiz");
indexQuizAndChrono.appendChild(indexOfQuiz);

let chrono=document.createElement("span");
chrono.classList.add("chrono");
indexQuizAndChrono.appendChild(chrono);
mainPAgeOfQUiz.appendChild(indexQuizAndChrono);
// Progressbar
let progressBar=document.createElement("div");
progressBar.classList.add("progressBar");
mainPAgeOfQUiz.appendChild(progressBar);

let progressBarContained=document.createElement("span");
progressBarContained.classList.add("progressBarContained");
progressBar.appendChild(progressBarContained);
//  Create container of each Answer
let answerList=document.createElement("section");
answerList.classList.add("choiceList");
mainPAgeOfQUiz.appendChild(answerList);

let answerOne=document.createElement("div");
answerOne.classList.add("choiceListElement");
answerList.appendChild(answerOne);

let answerTwo=document.createElement("div");
answerTwo.classList.add("choiceListElement");
answerList.appendChild(answerTwo);

let answerTree=document.createElement("div");
answerTree.classList.add("choiceListElement");
answerList.appendChild(answerTree);

let answerFour=document.createElement("div");
answerFour.classList.add("choiceListElement");
answerList.appendChild(answerFour);
// Create containerOfButton 
let containerOfButton=document.createElement("div");
containerOfButton.classList.add("containerOfButton");
answerList.appendChild(containerOfButton);

let exitButton=document.createElement("button");
exitButton.classList.add("buttonExit", "styleOfButton");
exitButton.textContent="Quitter";
containerOfButton.appendChild(exitButton);

let nextButton=document.createElement("button");
nextButton.classList.add("buttonNext", "styleOfButton");
nextButton.textContent="Suivant";
containerOfButton.appendChild(nextButton);
//Create of Answers to Choose from
// InputRadio of First Choice
let firstChoice=document.createElement("input");
firstChoice.setAttribute("type","radio");
firstChoice.setAttribute("id","answerOne");
firstChoice.setAttribute("name","choice");
answerOne.appendChild(firstChoice);
// label of First Choice
let label1=document.createElement("label");
label1.classList.add("inputRadio");
label1.setAttribute("for","answerOne");
answerOne.appendChild(label1);
// InputRadio of second Choice
let secondChoice=document.createElement("input");
secondChoice.setAttribute("type","radio");
secondChoice.setAttribute("id","answerTwo");
secondChoice.setAttribute("name","choice");
answerTwo.appendChild(secondChoice);
// label of second Choice
let label2=document.createElement("label");
label2.classList.add("inputRadio");
label2.setAttribute("for","answerTwo");
answerTwo.appendChild(label2);
// InputRadio of Third Choice
let thirdChoice=document.createElement("input");
thirdChoice.setAttribute("type","radio");
thirdChoice.setAttribute("id","answerTree");
thirdChoice.setAttribute("name","choice");
answerTree.appendChild(thirdChoice);
// label of Third Choice
let label3=document.createElement("label");
label3.classList.add("inputRadio");
label3.setAttribute("for","answerTree");
answerTree.appendChild(label3);
// InputRadio of Fourth Choice
let fourthChoice=document.createElement("input");
fourthChoice.setAttribute("type","radio");
fourthChoice.setAttribute("id","answerFour");
fourthChoice.setAttribute("name","choice");
answerFour.appendChild(fourthChoice);
// label of Fourth Choice
let label4=document.createElement("label");
label4.classList.add("inputRadio");
label4.setAttribute("for","answerFour");
answerFour.appendChild(label4);

let validate=false;
let index=0;
// Create QUizs
let quizOne=
    {
    Quiz: "Parmi les propositions suivantes, laquelle correspond à une déclaration et une initialisation de la variable ?",
    firstChoice: "variable myVariable = 12;",
    secondChoice: "let 12 = myVariable;",
    thirdChoice: "let myVariable = 12;",
    fourthChoice: "let my variable = 12;",
    googAnswer:"let myVariable = 12;"
    };
let quizTwo=
    {
    Quiz: " Quelle proposition correspond à un type primitif en JavaScript ?",
     firstChoice: " Array",
    secondChoice: "Boolean", 
    thirdChoice: "Object",
    fourthChoice: "Class",
    googAnswer:"Boolean"
    };
let quizThree=
    {
    Quiz: " Quelle est la valeur attendue de la variable numberOfCats à la fin de cet extrait de code ?                 {let numberOfCats=10;  numberOfCats+=5;  numberOfCats/=3; numberOfCats++;} ",
    firstChoice: "4",
    secondChoice: "5",
    thirdChoice: "6",
    fourthChoice: "7",
    googAnswer:"6"
    };
let quizFour=
    {
    Quiz: "En JavaScript, un object est déclaré comme une liste de paires clé/valeur entre…",
    firstChoice: "{}  accolades.",
    secondChoice: "[]  crochets.",
    thirdChoice: "()  parenthèses.",
    fourthChoice: "aucune des réponses ci-dessus.",
    googAnswer:"{}  accolades."
    };
let quizFive=
    {
    Quiz: "On déclare un array (tableau) comme une liste d'éléments, séparés par des virgules, entre…",
    firstChoice: "()  parenthèses.",
    secondChoice: "{}  accolades.",
    thirdChoice: "[]  crochets.",
    fourthChoice: "aucune des réponses ci-dessus.",
    googAnswer:"[]  crochets."
    };
let quizSix=
    {
    Quiz: "Comment feriez-vous pour calculer le nombre d'éléments dans l'array  onlineUsers  ?",
    firstChoice: "let numberOfUsers = onlineUsers.size;",
    secondChoice: "let numberOfUsers = onlineUsers.quantity;",
    thirdChoice: "let numberOfUsers = onlineUsers.index;",
    fourthChoice: "let numberOfUsers = onlineUsers.length;",
    googAnswer:"let numberOfUsers = onlineUsers.length;"
    };
let quizSeven=
    {
    Quiz: "Quelle phrase ci-dessous est  vraie au sujet des constantes ?",
    firstChoice: "leur valeur peut être modifiée apres la declaration.",
    secondChoice: "On peut déclarer une constante sans l'initialiser.",
    thirdChoice: "Leur type peut être modifié après déclaration.",
    fourthChoice: "Une fois déclarées, leur valeur ne peut être modifiée.",
    googAnswer:"Une fois déclarées, leur valeur ne peut être modifiée."
    };
let quizEight=
    {
    Quiz: "Quelle instruction permet d'ajouter un nouvel invité à la fin d'un array  ?",
    firstChoice: "array.push(\"value\");",
    secondChoice: "array.pop(\"value\");",
    thirdChoice: "array.add(\"value\");",
    fourthChoice: "array.unshiftguests.add(\"value\");",
    googAnswer:"array.push(\"value\");"
    };
let quizNine=
    {
    Quiz: "Comment accéderiez-vous à la propriété  title  de  l' objet  book  ?",
    firstChoice: "let title = book[title];",
    secondChoice: "let title = book.get('title');",
    thirdChoice: "let title = book.title;",
    fourthChoice: "let title = title.book;",
    googAnswer:"let title = book.title;"
    };
let quizTen=
    {
    Quiz: "Combien de fois la phrase  \"Oh hey!\"  sera affichée dans la console ?        for (let i = 0; i < 5; i++) console.log('Oh hey!');",
    firstChoice: "4",
    secondChoice: "5",
    thirdChoice: "6",
    fourthChoice: "7",
    googAnswer:"5"
    };
let quizEleven=
    {
    Quiz: "Quel est le type d'un fichier javascript",
    firstChoice: ".js",
    secondChoice: "js",
    thirdChoice: ".jt",
    fourthChoice: ".jv",
    googAnswer:".js"
    };
let quizTwelve=
    {
    Quiz: "Parmi les solutions suivantes, laquelle crée correctement une nouvelle instance de cette classe ?",
    firstChoice: "let firstMovie = Movie(\"value\");",
    secondChoice: "let firstMovie = new Movie(\"value\");",
    thirdChoice: "let firstMovie = class Movie(\"value\");",
    fourthChoice: "let firstMovie(\"value\");",
    googAnswer:"let firstMovie = new Movie(\"value\");"
    };
let quizThirteen=
    {
    Quiz: "Quel est la syntaxe correcte pour utiliser un fichier javascript?",
    firstChoice: "\<script src=\"xxx.js\"\>",
    secondChoice: "\<script href=\"xxx.js\"\>",
    thirdChoice: "\<script path=\"xxx.js\"\>",
    fourthChoice: "\<script link=\"xxx.js\"\>",
    googAnswer:"\<script src=\"xxx.js\"\>"
    };
let quizFourteen=
    {
    Quiz: "Comment pouvons-nous déclarer une fonction en Javascript?",
    firstChoice: "function myFunction(...)",
    secondChoice: "myFunction function(...)",
    thirdChoice: "let function myFunction(...)",
    fourthChoice: "var function myFunction(...)",
    googAnswer:"function myFunction(...)"
    };
let quizFifteen=
    {
    Quiz: "Comment utiliser \"While\" en Javascript ?",
    firstChoice: "do while (...) {...} then {...}",
    secondChoice: "while(...){...}",
    thirdChoice: "while ... ...",
    fourthChoice: "(while ...){...}",
    googAnswer:"(while ...){...}"
    };
let quizList = [quizOne, quizTwo, quizThree, quizFour, quizFive, quizSix, quizSeven, quizEight, 
                    quizNine, quizTen, quizEleven, quizTwelve, quizThirteen, quizFourteen, quizFifteen];

let time=60;
let timeWidth=100;
let realTime=60;

function timeWidthFunction () 
    {
    realTime-=0.0098;
    progressBarContained.style.width=`${(100/60)*realTime}%`;
    progressBarContained.style.backgroundColor="#028A3D";
    }
    function countDown(){
        if (time==0) {
            nextButton.disabled=false;
            nextButton.click();
        }
        else {
            chrono.textContent=time;
            time--;
        }
    }
function displayQuestionAndChoice () 
    {
    nextButton.disabled=true;
    nextButton.style.backgroundColor="rgba(2, 138, 61, 0.42)";
    time=60;
    realTime=60;
    questions.textContent=quizList[index].Quiz;
    indexOfQuiz.textContent="Question "+(index+1) +"/"+quizList.length;
    firstChoice.setAttribute("value",quizList[index].firstChoice);
    secondChoice.setAttribute("value",quizList[index].secondChoice);
    thirdChoice.setAttribute("value",quizList[index].thirdChoice);
    fourthChoice.setAttribute("value",quizList[index].fourthChoice);
    label1.textContent=quizList[index].firstChoice;
    label2.textContent=quizList[index].secondChoice;
    label3.textContent=quizList[index].thirdChoice;
    label4.textContent=quizList[index].fourthChoice;    
}

let score=0;
function ckeckTheChoice () {
    if  (firstChoice.checked==true && firstChoice.value==quizList[index].googAnswer) score+=1;
    else if  (secondChoice.checked==true && secondChoice.value==quizList[index].googAnswer) score+=1;
    else if  (thirdChoice.checked==true && thirdChoice.value==quizList[index].googAnswer) score+=1;
    else if  (fourthChoice.checked==true && fourthChoice.value==quizList[index].googAnswer) score+=1;   

    firstChoice.checked=false;
    secondChoice.checked=false;
    thirdChoice.checked=false;
    fourthChoice.checked=false;
}
let inputGamer={nom: "", email:""};
function displayResult () {
    displayGamerName.textContent=inputGamer.nom;
    displayGamerMail.textContent=inputGamer.email;
    if (score>(quizList.length/2)) {
        iconeEndPage.src="./reussi.png";
    } 
    else {iconeEndPage.src="./echec.png";}
    displayGamerScore.textContent=score+"/"+quizList.length;
    endButton.textContent="Accueil";
}
// validation
let form=document.querySelector("form");
form.addEventListener("submit",function (event) {
    event.preventDefault();
    if (nom.value=="" || email.value=="") 
        {
        if (nom.value=="") {
            alertName.style.display="block";
            nom.style="border: solid 1px red"; } 
                else {alertName.style.display="none";
                    nom.style="border: solid 1px #DDDDDD";}
        if (email.value=="") {
            alertMail.style.display="block";
            email.style="border: solid 1px red"; }
            else { alertMail.style.display="none";
            email.style="border: solid 1px #DDDDDD";}
        } 
    else {
        inputGamer.nom=nom.value;
        inputGamer.email=email.value;
        startPage.style.display="none";
        mainPAgeOfQUiz.style="display : block";
        let x=setInterval(() => countDown(), 1000);
        let y=setInterval(() => timeWidthFunction(), 10);
        displayQuestionAndChoice ();
    }

});

let radioselected="";
nextButton.addEventListener("click", function (event) {
    // the folliwing line disable the green border on the selected
    document.getElementById(`${radioselected}`).parentElement.style.border="1px solid #DDDDDD";
    if (index<quizList.length) {
        ckeckTheChoice();
        if (index==quizList.length-1) {
            mainPAgeOfQUiz.style.display="none";
            endPage.style.display="flex";
            displayResult();
        } 
        else {
            index++;
            displayQuestionAndChoice();
        }
        if (index==quizList.length-1)
            {nextButton.textContent="Terminer";}      
    }    
});

endButton.addEventListener("click", function (event) {
    location.reload();
});

firstChoice.addEventListener("click", function (event){
    nextButton.disabled=false;
    nextButton.style.backgroundColor="#028A3D";
    if (radioselected=="") {
        radioselected=""+firstChoice.id;
        firstChoice.parentElement.style.border="1px solid #028A3D";
    }
    else {
        firstChoice.parentElement.style.border="1px solid #028A3D";
        document.getElementById(`${radioselected}`).parentElement.style.border="1px solid #DDDDDD";
        radioselected=""+firstChoice.id;
    }
})
secondChoice.addEventListener("click", function (event){
    nextButton.disabled=false;
    nextButton.style.backgroundColor="#028A3D";
    if (radioselected=="") {
        radioselected=""+secondChoice.id;

        secondChoice.parentElement.style.border="1px solid #028A3D";
    }
    else {
        secondChoice.parentElement.style.border="1px solid #028A3D";
        document.getElementById(`${radioselected}`).parentElement.style.border="1px solid #DDDDDD";
        radioselected=""+secondChoice.id;
    }
})
thirdChoice.addEventListener("click", function (event){
    nextButton.disabled=false;
    nextButton.style.backgroundColor="#028A3D";
    if (radioselected=="") {
        radioselected=""+thirdChoice.id;
        thirdChoice.parentElement.style.border="1px solid #028A3D";
    }
    else {
        thirdChoice.parentElement.style.border="1px solid #028A3D";
        document.getElementById(`${radioselected}`).parentElement.style.border="1px solid #DDDDDD";
        radioselected=""+thirdChoice.id;
    }
})
fourthChoice.addEventListener("click", function (event){
    nextButton.disabled=false;
    nextButton.style.backgroundColor="#028A3D";
    if (radioselected=="") {
        radioselected=""+fourthChoice.id;
        fourthChoice.parentElement.style.border="1px solid #028A3D";
    }
    else {
        fourthChoice.parentElement.style.border="1px solid #028A3D";
        document.getElementById(`${radioselected}`).parentElement.style.border="1px solid #DDDDDD";
        radioselected=""+fourthChoice.id;
    }
})

exitButton.addEventListener("click", function(event) {
    mainPAgeOfQUiz.style.display="none";
    endPage.style.display="flex";
    displayResult();
})