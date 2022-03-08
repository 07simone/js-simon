// A) far visuazlizzare in pagina 5 numeri casuali con un timer di 30 secondi
//B) una volta scaduti i 30 secondi chiedere all'utente di inserire i numeri visti in precedenza
//C) se sono stati inseriti i numeri giusti allora il console.log ti dirà quanti e quali numeri sono stati individuati




// mi creo un timer che dopo 3 secondi mi fa visualizzare la scritta dal prompt
 
 function numeriRandom(){ 
    let max = 5; 
    let random = []; 
    for(let i = 0;i<max ; i++){ 
        let temp = Math.floor(Math.random()*max); 
        if(random.indexOf(temp) == -1)
        { random.push(temp); } 
        else i--; 
    } console.log(random) 
    } numeriRandom();

        
setTimeout(myfunction,3000)
function myfunction(){
    parseInt(prompt("quali numeri ci sono?"));
}  
 

/* function numeriRandom( min,max){
    random = Math.floor(Math.random() * ((max + 1) - min) + min);
    
return random;
}
    */ 


