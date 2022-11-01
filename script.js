






//display number in text box

var screen = document.getElementById('screen');
function displayNum(value){
    console.log(value);
    screen.value+=value
}



//clear text box

function clearBox(){
    screen.value="";
}


//3 evaluate expression()

function evaluateExpression(){
    exp=screen.value;
    output=eval(exp)
    screen.value=output;
}


//another way
// function evaluateExpression(){
// screen.value=eval(screen.value);
// }


//4remove last item

function removeLast(){
 currentexp=screen.value;
 screen.value=currentexp.slice(0,-1)

}



