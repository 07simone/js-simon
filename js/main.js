// A) far visuazlizzare in pagina 5 numeri casuali con un timer di 30 secondi
//B) una volta scaduti i 30 secondi chiedere all'utente di inserire i numeri visti in precedenza
//C) se sono stati inseriti i numeri giusti allora il console.log ti dirà quanti e quali numeri sono stati individuati




// mi creo un timer che dopo 3 secondi mi fa visualizzare la scritta dal prompt
/* let max = 5; 
let random = [];  */
const newDiv = document.createElement("div");


function numeriRandom(minvalue, maxvalue){ 
if (isNaN(parseInt(minvalue)) || isNaN (parseInt(maxvalue))){

}return (Math.floor(Math.random() * ((maxvalue + 1) - minvalue) + minvalue))

}

for( let i = 0; i < 5; i++){
    console.log(numeriRandom(0, 100))
}
/* setTimeout(myfunction,3000)
function myfunction(){
    parseInt(prompt("quali numeri ci sono?"));
}  
  */

/* function numeriRandom( min,max){
    random = Math.floor(Math.random() * ((max + 1) - min) + min);
    
return random;
}
    */ 


