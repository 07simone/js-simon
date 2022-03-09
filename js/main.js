// A) far visuazlizzare in pagina 5 numeri casuali con un timer di 30 secondi
//B) una volta scaduti i 30 secondi chiedere all'utente di inserire i numeri visti in precedenza
//C) se sono stati inseriti i numeri giusti allora il console.log ti dirà quanti e quali numeri sono stati individuati


const numbers = [];
/* genero per  5 volte un array vuoti di numeri */
for( let i = 0; i < 5; i++){
    numbers.push(numeriRandom(numbers, 0 , 100));

}  
document.getElementById("listaNumeri").innerHTML=numbers.join(",")
console.log(numbers);



setTimeout(mytimer,3000,numbers)


function mytimer(numeriCorrenti){
    
    document.getElementById("listaNumeri").innerHTML ="";          
    const user =[];
    const numeriGiusti =[]
    for ( let i = 0; i < 5; i++){
       const numeriScelti = parseInt(prompt("quali numeri ci sono?")); 
    if ( !isNaN(numeriScelti)){
        user.push(numeriScelti)
    } if(numeriCorrenti.includes(numeriScelti)){
         numeriGiusti.push(numeriScelti)
    }
}
document.getElementById("listaNumeri").innerHTML = `Hai indovinato ${numeriGiusti.length} numero validi` ; 

}






function numeriRandom( numsBlacklist, min, max){
    let check = false;
    let randomInt;

    while ( !check ){
        randomInt  = Math.floor(Math.random() * ((max + 1) - min) + min);
        if ( !numsBlacklist.includes(randomInt) ){
            check = true;
        }
    }
    return randomInt;
}





