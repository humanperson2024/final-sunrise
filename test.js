let num = Math.floor(Math.random() * 3)
let you = 0

function scissors() {
you = 0
console.log(String(you) + "you")
console.log(String(num) + "answer")
if (num = 0) {
    document.getElementById("iknowwhereyoulive").innerHTML = "win!";
}
if (you = num) {
  document.getElementById("iknowwhereyoulive").innerHTML = "draw!";
}
}

function paper() {
you = 1
console.log(String(you) + "you")
console.log(String(num) + "answer")
if (num = 1) {
    document.getElementById("iknowwhereyoulive").innerHTML = "win!";
}
if (you = num) {
  document.getElementById("iknowwhereyoulive").innerHTML = "draw!";
}
}

function rock() {
you = 2
console.log(String(you) + "you")
console.log(String(num) + "answer")
if (num = 0) {
    document.getElementById("iknowwhereyoulive").innerHTML = "win!";
}
if (you = num) {
  document.getElementById("iknowwhereyoulive").innerHTML = "draw!";
}
}

console.log(you)
