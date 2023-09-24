var laugh = ", ngek nag calculator pajud"
function ac(){
   document.getElementById('display').value='';
}
function del(){
   document.getElementById('display').value=document.getElementById('display').value.toString().slice(0, -1);
}
function divide(){
   document.getElementById('display').value+='/';
}
function multiply(){
   document.getElementById('display').value+='*';
}
function nine(){
   document.getElementById('display').value+='9';
}
function eight(){
   document.getElementById('display').value+='8';
}
function seven(){
   document.getElementById('display').value+='7';
}
function minus(){
   document.getElementById('display').value+='-';
}
function six(){
   document.getElementById('display').value+='6';
}
function five(){
   document.getElementById('display').value+='5';
}
function four(){
   document.getElementById('display').value+='4';
}
function addition(){
   document.getElementById('display').value+='+';
}
function three(){
   document.getElementById('display').value+='3';
}
function two(){
   document.getElementById('display').value+='2';
}
function one(){
   document.getElementById('display').value+='1';
}
function dot(){
   document.getElementById('display').value+='.';
}
function zeron(){
   document.getElementById('display').value+="00";
}
function zero(){
   document.getElementById('display').value+='0';
}
function equal(){
   document.getElementById('display').value=eval(document.getElementById('display').value)+ laugh;
}