/*-------------------------------- Constants --------------------------------*/
const out = 1

/*-------------------------------- variables --------------------------------*

/*-------------------------------- Cached Element References--------------------------------*/



/*-------------------------------- Functions --------------------------------*/

function Add(){ 
  var outP = document.querySelector('.outPut')
var minus = document.querySelector('.minus')
var plus = document.querySelector('.plus')
var inP = parseInt(document.querySelector("#text").value)  
var cal;
 
cal = inP + 1

if(!inP>0.9 ){
  cal = 1 + 0
}

console .log(cal);

outP.innerHTML = `${cal}`
}

function minus(){
  var outP = document.querySelector('.outPut')
var minus = document.querySelector('.minus')
var plus = document.querySelector('.plus')
var inP = parseInt(document.querySelector("#text").value)  
var cal;
cal = 1 - inP
 
outP.innerHTML = `${cal}`
}