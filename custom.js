//clear
document.querySelector("#clear").addEventListener("click", ()=>{
    document.querySelector("#display").value = "";
})

//Backspace Function
const backSpace = () =>{
    const num = document.querySelector("#display").value.slice(0, -1);
    document.querySelector("#display").value = num;
}

//One Function
const one = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "1";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "1";
    }
}
//Two Function
const two = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "2";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "2";
    }
}
//Three Function
const three = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "3";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "3";
    }
}
//Four Function
const four = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "4";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "4";
    }
}
//Five Function
const five = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "5";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "5";
    }
}
//Six Function
const six = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "6";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "6";
    }
}
//Seven Function
const seven = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "7";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "7";
    }
}
//Eight Function
const eight = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "8";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "8";
    }
}
//Nine Function
const nine = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "9";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "9";
    }
}
//Zero Function
const zero = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "0";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "0";
    }
}
//Point Function
const point = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = ".";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + ".";
    }
}
// Square Function
const square = () => {
    const currentValue = parseFloat(document.querySelector("#display").value);
    const squaredValue = currentValue * currentValue;
    document.querySelector("#display").value = squaredValue;
};
