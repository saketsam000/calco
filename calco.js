function clear(){
    document.getElementById('result').value = ''
}
function display(value){
    document.getElementById("result").value+=value;
}
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }
   function calculatep(){
    var p = document.getElementById("result").value;
    var q = p/100;
    document.getElementById("result").value = q;
   }