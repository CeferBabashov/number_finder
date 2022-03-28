let random_number = Math.round(Math.random() * 10);
console.log(random_number);


// alert("Start the game");

let chance = 3;
function Game1() {



  let inp1 = document.getElementById('inp1').value;
  console.log(inp1);

  if (inp1 == random_number) {
    alert("Congrulations,you won the game!");
    location.reload();
  }
  else if (inp1.length == 0 && inp1.length == " ") {
    alert("Please, write the numbers");
  }
  else if (inp1 > random_number) {
    alert("Your number is bigger than random number");
  }
  else if (inp1 < random_number) {
    alert("Your number is smaller than random number");
  }

  function Chance() {
    let inp1 = document.getElementById('inp1');
    let btn1 = document.getElementById('btn1');

    chance--;
    if (chance == 0) {
      alert("You lost the game");
      location.reload();
    }
  }
  Chance();
}


function Show1() {

  let inp1 = document.getElementById("inp1");
  let eye1 = document.getElementById("eye1");

  if (inp1.type == "text") {
    inp1.type = 'password';
  }
  else {
    inp1.type = 'text';
  }
}


function Check() {
  let inp1 = document.getElementById("inp1");
  let span = document.getElementById("span");
  if (inp1.value.length >= 8) {
    span.innerHTML = 'Strong password';
    span.style.color = 'green';
  }
  else {
    span.innerHTML = 'Weak password';
    span.style.color = 'red';
  }
}

 inp1.onblur=function(){
   span.style.display='none';
 }

 inp1.onfocus=function(){
   if(inp1.value.length>1){
     span.style.display='inline';
   }
  
}


// oyunda  hecne yazmadan buttona vuranda boslugu goturur why?
//  alqoritmde problem var eger reqemi 3 cu defede tapdiqda yenede you lost game alerti isdiyir.

let random_number2 = Math.round(Math.random() * 26);
console.log(random_number2);

let Sans = 5;
function Game2() {
  let inp2 = document.getElementById("inp2").value;
  let btn2 = document.getElementById("btn2");
  console.log(inp2);

  if (inp2 == random_number2) {
    alert("Congrulations,you won the game!");
    location.reload();
  }
  else if (inp2.length == 0 && inp2.length == " ") {
    alert("Please, write the numbers");
  }
  else if (inp2 > random_number2) {
    alert("Your number is bigger than random number");
  }
  else if (inp2 < random_number2) {
    alert("Your number is smaller than random number");
  }

  function Sans() {
    let inp2 = document.getElementById("inp2");
    let btn2 = document.getElementById("btn2");

    Sans--;
    if (Sans == 0) {
      alert("You lost the game");
      location.reload();
    }
  }
  Sans();
}

function Show2() {

  let inp2 = document.getElementById('inp2');
  let eye2 = document.getElementById('eye2');

  if (inp2.type == "text") {
    inp2.type = 'password';
  }
  else {
    inp2.type = 'text';
  }
}

function Check1() {
  let inp2 = document.getElementById("inp2");
  let span2 = document.getElementById("span2");
  if (inp2.value.length >= 8) {
    span2.innerHTML = 'Strong password';
    span2.style.color = 'green';
  }
  else {
    span2.innerHTML = 'Weak password';
    span2.style.color = 'red';
  }
}

 inp2.onblur=function(){
   span2.style.display='none';
 }

 inp2.onfocus=function(){
   if(inp2.value.length>1){
     span2.style.display='inline';
   }
}