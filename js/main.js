// A) far visuazlizzare in pagina 5 numeri casuali con un timer di 30 secondi
//B) una volta scaduti i 30 secondi chiedere all'utente di inserire i numeri visti in precedenza
//C) se sono stati inseriti i numeri giusti allora il console.log ti dirà quanti e quali numeri sono stati individuati




function numeriRandom (minvalue, maxvalue){ 
if (isNaN(parseInt(minvalue)) || isNaN (parseInt(maxvalue))){
    
}return (Math.floor(Math.random() * ((maxvalue + 1) - minvalue) + minvalue))

} 

for( let i = 0; i < 5; i++){
    console.log(numeriRandom(0, 100))
    let listaNumeri = numeriRandom(0, 100); 
    document.getElementById("number").innerHTML= listaNumeri;

    
}
// mi creo un timer che dopo 3 secondi mi fa visualizzare la scritta dal prompt
setTimeout(myfunction,3000)
function myfunction(){
    parseInt(prompt("quali numeri ci sono?"));
}  





