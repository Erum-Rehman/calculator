function getNumber(num){
    var result =  document.getElementById("output")
    console.log(num)
    result.value += num;
}
function clearResult(){
    var result = document.getElementById("output")
    result.value = "";
}
function getResult(){
    var result = document.getElementById("output")
    result.value = eval(result.value);
}
