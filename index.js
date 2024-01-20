// Code your solutions in this file

//Use of for!
let namesArray = ["Charlie","Samip","Ali"]
let event = "Wedding";
function writeCards(namesArray, eventName) {
    let cards = [];
    

    for (let i =0; i < namesArray.length; i++){
    cards.push(`Thank you, ${namesArray}, for the wonderful ${eventName} gift!`);
}

return cards;
debugger;
}

let results = writeCards(["Charlie","Samip","ALi"], "Wedding");

console.log(results);

console.log(namesArray.length);
//Using while!!
function countDown(int) {
    let i= int;
    while(i>=0){
        console.log(i);
        i--;
        
    }
}

console.log(countDown(7));