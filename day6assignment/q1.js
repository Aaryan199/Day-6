//console.log('hello')
let colours=['red','blue','green'];
 colours.forEach(col => {
   document.body.style.backgroundColor=col
});
setInterval(colours,1000)
