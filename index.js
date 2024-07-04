const myVar = "foo"

function first (){
    console.log("inside first()");
    console.log("myVar is currently equal to:", myVar)
}
function second(){
    const myVar = "bar"
first()
}
console.log(second())

// function hisVar (){
//    const myVar = "club"
//     return myVar;
// } console.log(hisVar())
const hotel ="Boulevad"
function party (){
    const club= "quivers"
    function whereToGo (){
        console.log(` after his birthday dinner at ${ hotel}, we all decided to go to ${club} for some drinks.`)
    }
    return whereToGo();
}
console.log(party());