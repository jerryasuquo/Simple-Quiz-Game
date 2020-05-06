// jvnj
let btn = document.getElementById("button");
let ul = document.getElementById("ul");
let scoreCard = document.getElementById("scoreCard");
let quizBox = document.getElementById("questionBox");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");

let app = {
  questions: [
    {
      q: "HTML stands for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Markup Language",
        "Hyper Tabular Markup Language",
        "None of these",
      ],
      answer: 1,
    },
    {
      q:
        "Which of the following tag is used to mark the beginning of a paragraph?",
      options: ["TD", "br", "p", "tr"],
      answer: 3,
    },
    {
      q: "Correct HTML tag for the largest heading is?",
      options: ["h4", "h1", "h8", "h9"],
      answer: 2,
    },
    {
      q: "CSS stands for?",
      options: [
        "Cascading Style Sheets",
        "Cascaded Style Strong",
        "Content Style Sheets",
        "Cascading Sub Structure",
      ],
      answer: 1,
    },
    {
      q: "JS stands for?",
      options: ["JavaScreen", "JoomlaScript", "JavaScript", "JustifyStructure"],
      answer: 3,
    },
  ],
  index: 0,
  load: function () {
    if (this.index <= this.questions.length - 1) {
      quizBox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
      opt1.innerHTML = this.questions[this.index].options[0];
      opt2.innerHTML = this.questions[this.index].options[1];
      opt3.innerHTML = this.questions[this.index].options[2];
      opt4.innerHTML = this.questions[this.index].options[3];
      this.scoreCard;
    } else {
      quizBox.innerHTML = "Quiz Over....!!!";
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
      btn.style.display = "none";
    }
  },
  next: function () {
    this.index++;
    this.load();
  },
  check: function (ele) {
    let id = ele.id.split("");
    if (id[id.length - 1] == this.questions[this.index].answer) {
      this.score++;
      ele.className = "correct";
      ele.innerHTML = "Correct";
      this.scoreCard();
    } else {
      ele.className = "incorrect";
      ele.innerHTML = "Incorrect";
    }
  },
  notClickAble: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "none";
    }
  },
  clickAble: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "auto";
      ul.children[i].className = "";
    }
  },
  score: 0,
  scoreCard: function () {
    scoreCard.innerHTML = this.questions.length + "/" + this.score;
  },
};

window.onload = app.load();

function button(ele) {
  app.check(ele);
  app.notClickAble();
}

function next() {
  app.next();
  app.clickAble();
}
