//To show a closck in the page
const ctime = document.getElementById("time")
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock,1000)
//To take the name add it in title
const name = prompt("What is your name?","Anonymous")
user.innerText += name;
//To add darkmode
const dmode = document.getElementById('Dark');

dmode.onclick = function changeColor(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';
};
