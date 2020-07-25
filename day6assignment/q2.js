let y=document.getElementById("table")
let input = prompt("write a number")
var table=""
var number=1
for(i=1;i<=10;i++){
  number = input*i;
  table += input + "*" + i + "=" + number + "\n"
}
//y.innerText+= `table`;
console.log(table)
