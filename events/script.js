var button=document.getElementById("clickme");
button.addEventListener("click",dosomething);

//event ekak wenakota event kyala object ekak create wenwa
function dosomething(event){
	console.log(event);
}
 document.addEventListener("keyup",function(event){
 	console.log(event.keyCode);
 })