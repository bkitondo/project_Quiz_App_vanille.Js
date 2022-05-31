let MainPAge=document.querySelector("main");
let StartPage=document.querySelector(".StartPage");
let email=document.querySelector("#email");
let nom=document.querySelector("#nom");
let allInputs=document.querySelectorAll('[type|="radio"]');
// Create elements of EndPAges
let EndPage=document.createElement("div"); 
EndPage.classList.add("EndPage");
MainPAge.appendChild(EndPage);
let InputName=document.createElement("h2"); 
InputName.classList.add("second-title");
EndPage.appendChild(InputName);
let InputMail=document.createElement("p");
InputMail.classList.add("UserMail");
EndPage.appendChild(InputMail);

let IconeEndPage = document.createElement("img");
EndPage.appendChild(IconeEndPage);

let InputScore=document.createElement("p");
InputScore.classList.add("score");
EndPage.appendChild(InputScore);

let EndButton=document.createElement("button");
EndButton.classList.add("EndButton","style-of-button");
EndPage.appendChild(EndButton);
// Create page of Quiz
let MainPAgeOfQUiz=document.createElement("div"); 
MainPAgeOfQUiz.classList.add("DivQuiz");
MainPAge.appendChild(MainPAgeOfQUiz);

let Questionnaire = document.createElement("p");
Questionnaire.classList.add("Quiz");
MainPAgeOfQUiz.appendChild(Questionnaire); 
// Number of questions
let IndexQuizAndChrono=document.createElement("p");
IndexQuizAndChrono.classList.add("Quiz-number-and-chrono");

let IndexOfQuiz=document.createElement("span");
IndexOfQuiz.classList.add("number-of-Quiz");
IndexQuizAndChrono.appendChild(IndexOfQuiz);

let chrono=document.createElement("span");
chrono.classList.add("chrono");
IndexQuizAndChrono.appendChild(chrono);
MainPAgeOfQUiz.appendChild(IndexQuizAndChrono);
// Progressbar
let progressBar=document.createElement("div");
progressBar.classList.add("progress-bar");
MainPAgeOfQUiz.appendChild(progressBar);

let progressBarContained=document.createElement("span");
progressBarContained.classList.add("progress-bar-contained");
progressBar.appendChild(progressBarContained);
//  Create container of each Answer
let AnswerList=document.createElement("div");
AnswerList.classList.add("choice-list");
MainPAgeOfQUiz.appendChild(AnswerList);

let AnswerOne=document.createElement("div");
AnswerOne.classList.add("choice-list__element");
AnswerList.appendChild(AnswerOne);

let AnswerTwo=document.createElement("div");
AnswerTwo.classList.add("choice-list__element");
AnswerList.appendChild(AnswerTwo);

let AnswerTree=document.createElement("div");
AnswerTree.classList.add("choice-list__element");
AnswerList.appendChild(AnswerTree);

let AnswerFour=document.createElement("div");
AnswerFour.classList.add("choice-list__element");
AnswerList.appendChild(AnswerFour);
// Create AllButton 
let AllButton=document.createElement("div");
AllButton.classList.add("AllButton");
AnswerList.appendChild(AllButton);

let ExitButton=document.createElement("button");
ExitButton.classList.add("button-quit", "style-of-button");
ExitButton.textContent="Quitter";
AllButton.appendChild(ExitButton);

let NextButton=document.createElement("button");
NextButton.classList.add("button-next", "style-of-button");
NextButton.textContent="Suivant";
AllButton.appendChild(NextButton);
//Create of Answers to Choose from
// InputRadio of First Choice
let FirstChoice=document.createElement("input");
FirstChoice.setAttribute("type","radio");
FirstChoice.setAttribute("id","AnswerOne");
FirstChoice.setAttribute("name","choice");
AnswerOne.appendChild(FirstChoice);
// label of First Choice
let label1=document.createElement("label");
label1.classList.add("inputRadio");
label1.setAttribute("for","AnswerOne");
AnswerOne.appendChild(label1);
// InputRadio of second Choice
let SecondChoice=document.createElement("input");
SecondChoice.setAttribute("type","radio");
SecondChoice.setAttribute("id","AnswerTwo");
SecondChoice.setAttribute("name","choice");
AnswerTwo.appendChild(SecondChoice);
// label of second Choice
let label2=document.createElement("label");
label2.classList.add("inputRadio");
label2.setAttribute("for","AnswerTwo");
AnswerTwo.appendChild(label2);
// InputRadio of Third Choice
let ThirdChoice=document.createElement("input");
ThirdChoice.setAttribute("type","radio");
ThirdChoice.setAttribute("id","AnswerTree");
ThirdChoice.setAttribute("name","choice");
AnswerTree.appendChild(ThirdChoice);
// label of Third Choice
let label3=document.createElement("label");
label3.classList.add("inputRadio");
label3.setAttribute("for","AnswerTree");
AnswerTree.appendChild(label3);
// InputRadio of Fourth Choice
let FourthChoice=document.createElement("input");
FourthChoice.setAttribute("type","radio");
FourthChoice.setAttribute("id","AnswerFour");
FourthChoice.setAttribute("name","choice");
AnswerFour.appendChild(FourthChoice);
// label of Fourth Choice
let label4=document.createElement("label");
label4.classList.add("inputRadio");
label4.setAttribute("for","AnswerFour");
AnswerFour.appendChild(label4);

let AlertName =document.querySelector(".AlertName");
let AlertMail =document.querySelector(".AlertMail");
let validate=false;
let index=0;
// Create QUizs
let QuizOne=
    {
    Quiz: "Parmi les propositions suivantes, laquelle correspond à une déclaration et une initialisation de la variable ?",
    FirstChoice: "variable myVariable = 12;",
    SecondChoice: "let 12 = myVariable;",
    ThirdChoice: "let myVariable = 12;",
    FourthChoice: "let my variable = 12;",
    GoogAnswer:"let myVariable = 12;"
    };
let QuizTwo=
    {
    Quiz: " Quelle proposition correspond à un type primitif en JavaScript ?",
     FirstChoice: " Array",
    SecondChoice: "Boolean", 
    ThirdChoice: "Object",
    FourthChoice: "Class",
    GoogAnswer:"Boolean"
    };
let QuizThree=
    {
    Quiz: " Quelle est la valeur attendue de la variable numberOfCats à la fin de cet extrait de code ?                 {let numberOfCats=10;  numberOfCats+=5;  numberOfCats/=3; numberOfCats++;} ",
    FirstChoice: "4",
    SecondChoice: "5",
    ThirdChoice: "6",
    FourthChoice: "7",
    GoogAnswer:"6"
    };
let QuizFour=
    {
    Quiz: "En JavaScript, un object est déclaré comme une liste de paires clé/valeur entre…",
    FirstChoice: "{}  accolades.",
    SecondChoice: "[]  crochets.",
    ThirdChoice: "()  parenthèses.",
    FourthChoice: "aucune des réponses ci-dessus.",
    GoogAnswer:"{}  accolades."
    };
let QuizFive=
    {
    Quiz: "On déclare un array (tableau) comme une liste d'éléments, séparés par des virgules, entre…",
    FirstChoice: "()  parenthèses.",
    SecondChoice: "{}  accolades.",
    ThirdChoice: "[]  crochets.",
    FourthChoice: "aucune des réponses ci-dessus.",
    GoogAnswer:"[]  crochets."
    };
let QuizSix=
    {
    Quiz: "Comment feriez-vous pour calculer le nombre d'éléments dans l'array  onlineUsers  ?",
    FirstChoice: "let numberOfUsers = onlineUsers.size;",
    SecondChoice: "let numberOfUsers = onlineUsers.quantity;",
    ThirdChoice: "let numberOfUsers = onlineUsers.index;",
    FourthChoice: "let numberOfUsers = onlineUsers.length;",
    GoogAnswer:"let numberOfUsers = onlineUsers.length;"
    };
let QuizSeven=
    {
    Quiz: "Quelle phrase ci-dessous est  vraie au sujet des constantes ?",
    FirstChoice: "leur valeur peut être modifiée apres la declaration.",
    SecondChoice: "On peut déclarer une constante sans l'initialiser.",
    ThirdChoice: "Leur type peut être modifié après déclaration.",
    FourthChoice: "Une fois déclarées, leur valeur ne peut être modifiée.",
    GoogAnswer:"Une fois déclarées, leur valeur ne peut être modifiée."
    };
let QuizEight=
    {
    Quiz: "Quelle instruction permet d'ajouter un nouvel invité à la fin d'un array  ?",
    FirstChoice: "array.push(\"value\");",
    SecondChoice: "array.pop(\"value\");",
    ThirdChoice: "array.add(\"value\");",
    FourthChoice: "array.unshiftguests.add(\"value\");",
    GoogAnswer:"array.push(\"value\");"
    };
let QuizNine=
    {
    Quiz: "Comment accéderiez-vous à la propriété  title  de  l' objet  book  ?",
    FirstChoice: "let title = book[title];",
    SecondChoice: "let title = book.get('title');",
    ThirdChoice: "let title = book.title;",
    FourthChoice: "let title = title.book;",
    GoogAnswer:"let title = book.title;"
    };
let QuizTen=
    {
    Quiz: "Combien de fois la phrase  \"Oh hey!\"  sera affichée dans la console ?        for (let i = 0; i < 5; i++) console.log('Oh hey!');",
    FirstChoice: "4",
    SecondChoice: "5",
    ThirdChoice: "6",
    FourthChoice: "7",
    GoogAnswer:"5"
    };
let QuizEleven=
    {
    Quiz: "Quel est le type d'un fichier javascript",
    FirstChoice: ".js",
    SecondChoice: "js",
    ThirdChoice: ".jt",
    FourthChoice: ".jv",
    GoogAnswer:".js"
    };
let QuizTwelve=
    {
    Quiz: "Parmi les solutions suivantes, laquelle crée correctement une nouvelle instance de cette classe ?",
    FirstChoice: "let firstMovie = Movie(\"value\");",
    SecondChoice: "let firstMovie = new Movie(\"value\");",
    ThirdChoice: "let firstMovie = class Movie(\"value\");",
    FourthChoice: "let firstMovie(\"value\");",
    GoogAnswer:"let firstMovie = new Movie(\"value\");"
    };
let QuizThirteen=
    {
    Quiz: "Quel est la syntaxe correcte pour utiliser un fichier javascript?",
    FirstChoice: "\<script src=\"xxx.js\"\>",
    SecondChoice: "\<script href=\"xxx.js\"\>",
    ThirdChoice: "\<script path=\"xxx.js\"\>",
    FourthChoice: "\<script link=\"xxx.js\"\>",
    GoogAnswer:"\<script src=\"xxx.js\"\>"
    };
let QuizFourteen=
    {
    Quiz: "Comment pouvons-nous déclarer une fonction en Javascript?",
    FirstChoice: "function myFunction(...)",
    SecondChoice: "myFunction function(...)",
    ThirdChoice: "let function myFunction(...)",
    FourthChoice: "var function myFunction(...)",
    GoogAnswer:"function myFunction(...)"
    };
let QuizFifteen=
    {
    Quiz: "Comment utiliser \"While\" en Javascript ?",
    FirstChoice: "do while (...) {...} then {...}",
    SecondChoice: "while(...){...}",
    ThirdChoice: "while ... ...",
    FourthChoice: "(while ...){...}",
    GoogAnswer:"(while ...){...}"
    };
let QuizList = [QuizOne, QuizTwo, QuizThree, QuizFour, QuizFive, QuizSix, QuizSeven, QuizEight, 
                    QuizNine, QuizTen, QuizEleven, QuizTwelve, QuizThirteen, QuizFourteen, QuizFifteen];

let time=60;
let timeWidth=100;
let realTime=60;

function timeWidthFunction () 
    {
    realTime-=0.0098;
    progressBarContained.style.width=`${(100/60)*realTime}%`;
    progressBarContained.style.backgroundColor="#028A3D";
    }
 // COUNTDOWN FUNCTION
    function countDown(){
        if (time==0) {
            NextButton.disabled=false;
            NextButton.click();
        }
        else {
            chrono.textContent=time+" " +"S";
            time--;
        }
    }
function displayQuestionAndChoice () 
    {
    NextButton.disabled=true;
    NextButton.style.backgroundColor="rgba(2, 138, 61, 0.42)";
    time=60;
    realTime=60;
    Questionnaire.textContent=QuizList[index].Quiz;
    IndexOfQuiz.textContent="Question "+(index+1) +"/15";
    FirstChoice.setAttribute("value",QuizList[index].FirstChoice);
    SecondChoice.setAttribute("value",QuizList[index].SecondChoice);
    ThirdChoice.setAttribute("value",QuizList[index].ThirdChoice);
    FourthChoice.setAttribute("value",QuizList[index].FourthChoice);
    label1.textContent=QuizList[index].FirstChoice;
    label2.textContent=QuizList[index].SecondChoice;
    label3.textContent=QuizList[index].ThirdChoice;
    label4.textContent=QuizList[index].FourthChoice;    
}

let score=0;
function ckeckTheChoice () {
    if  (FirstChoice.checked==true && FirstChoice.value==QuizList[index].GoogAnswer) score+=1;
    else if  (SecondChoice.checked==true && SecondChoice.value==QuizList[index].GoogAnswer) score+=1;
    else if  (ThirdChoice.checked==true && ThirdChoice.value==QuizList[index].GoogAnswer) score+=1;
    else if  (FourthChoice.checked==true && FourthChoice.value==QuizList[index].GoogAnswer) score+=1;   

    FirstChoice.checked=false;
    SecondChoice.checked=false;
    ThirdChoice.checked=false;
    FourthChoice.checked=false;
}
let gamer={nom: "", email:""};
function displayResult () {
    InputName.textContent=gamer.nom;
    InputMail.textContent=gamer.email;
    if (score>(QuizList.length/2)) {
        IconeEndPage.src="./reussi.png";
    } 
    else {IconeEndPage.src="./echec.png";}
    InputScore.textContent=score+"/"+QuizList.length;
    EndButton.textContent="Accueil";
}
//  check AllInput
let form=document.querySelector("form");
form.addEventListener("submit",function (event) {
    event.preventDefault();
    if (nom.value=="" || email.value=="") 
        {
        if (nom.value=="") {
            AlertName.style.display="block";
            nom.style="border: solid 1px red"; } 
                else {AlertName.style.display="none";
                    nom.style="border: solid 1px #DDDDDD";}
        if (email.value=="") {
            AlertMail.style.display="block";
            email.style="border: solid 1px red"; }
            else { AlertMail.style.display="none";
            email.style="border: solid 1px #DDDDDD";}
        } 
    else {
        gamer.nom=nom.value;
        gamer.email=email.value;
        StartPage.style.display="none";
        MainPAgeOfQUiz.style="display : block";
        let x=setInterval(() => countDown(), 1000);
        let y=setInterval(() => timeWidthFunction(), 10);
        displayQuestionAndChoice ();
    }

});

NextButton.addEventListener("click", function (event) {

    if (index<QuizList.length) {
        ckeckTheChoice();
        if (index==QuizList.length-1) {
            MainPAgeOfQUiz.style.display="none";
            EndPage.style.display="flex";
            displayResult();
        } else {
            index++;
            displayQuestionAndChoice();
        }
    }    
});

EndButton.addEventListener("click", function (event) {
    location.reload();
});

ExitButton.addEventListener("click", function(event) {
    MainPAgeOfQUiz.style.display="none";
    EndPage.style.display="flex";
    displayResult();
})
let ide="";
FirstChoice.addEventListener("click", function (event){
    NextButton.disabled=false;
    NextButton.style.backgroundColor="#028A3D";
    if (ide=="") {
        ide=""+FirstChoice.id;
        FirstChoice.parentElement.style.border="1px solid #028A3D";
    }
    else {
        FirstChoice.parentElement.style.border="1px solid #028A3D";
        document.getElementById(`${ide}`).parentElement.style.border="1px solid #DDDDDD";
        ide=""+FirstChoice.id;
    }
})
SecondChoice.addEventListener("click", function (event){
    NextButton.disabled=false;
    NextButton.style.backgroundColor="#028A3D";
    if (ide=="") {
        ide=""+SecondChoice.id;

        SecondChoice.parentElement.style.border="1px solid #028A3D";
    }
    else {
        SecondChoice.parentElement.style.border="1px solid #028A3D";
        document.getElementById(`${ide}`).parentElement.style.border="1px solid #DDDDDD";
        ide=""+SecondChoice.id;
    }
})
ThirdChoice.addEventListener("click", function (event){
    NextButton.disabled=false;
    NextButton.style.backgroundColor="#028A3D";
    if (ide=="") {
        ide=""+ThirdChoice.id;
        ThirdChoice.parentElement.style.border="1px solid #028A3D";
    }
    else {
        ThirdChoice.parentElement.style.border="1px solid #028A3D";
        document.getElementById(`${ide}`).parentElement.style.border="1px solid #DDDDDD";
        ide=""+ThirdChoice.id;
    }
})
FourthChoice.addEventListener("click", function (event){
    NextButton.disabled=false;
    NextButton.style.backgroundColor="#028A3D";
    if (ide=="") {
        ide=""+FourthChoice.id;
        FourthChoice.parentElement.style.border="1px solid #028A3D";
    }
    else {
        FourthChoice.parentElement.style.border="1px solid #028A3D";
        document.getElementById(`${ide}`).parentElement.style.border="1px solid #DDDDDD";
        ide=""+FourthChoice.id;
    }
})