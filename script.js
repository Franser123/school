function countCalculator(){
    let first = parseInt(document.querySelector("#firstNumber").value);
    let second = parseInt(document.querySelector("#secondNumber").value);
    let selector = document.querySelector("#selector").value;
    let outcome = 0;

    switch(selector){
        case '+':
            outcome = first + second;
            break;
        case '-':
            outcome = first - second;
            break;
        case '*':
            outcome = first * second;
            break;
        case '/':
            outcome = first / second;
            break;              
        case '!':
            outcome = '<br>' + 'Pierwsza liczba:' + silnia(first) + '<br>' + 'Druga liczba:' + silnia(second);
            break;
    }
    document.querySelector(".outcome").innerHTML = `Wynik: ${outcome}`; 
}

function silnia(a){
    let result = 1;
    for (let i = 1; i <= a; i++){
        result *= i;
    }
    return result;
}

function checkWhatSelect(){
    // if (document.querySelector("#selector").value = '!') {
    //     document.querySelector("#secondNumber").disabled = true;
    // } else {
    //     document.querySelector("#secondNumber").disabled = false;
    // }
}