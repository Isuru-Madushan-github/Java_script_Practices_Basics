//var mainHeading=document.getElementById("main-heading");//
document.getElementById("main-heading").innerText="jav45454a";


var oddRows=document.getElementsByClassName("odd");
console.log(oddRows);
/*oddRows[0].style.background="red";
oddRows[2].style.background="red";*/

for(var i=0; i<oddRows.length; i++){
	oddRows[i].style.background="green";
	oddRows[i].style.color="white";
}

var subHeading=document.getElementsByTagName("h2");
for(var i=0; i<subHeading.length; i++){
subHeading[i].style.color="red";
}

var list=document.querySelectorAll(".list");
list[0].innerHTML=list[0].innerHTML+"<li>list 5</li>";

var mainHeading=document.getElementById("main-heading");
mainHeading.innerHTML=mainHeading.innerHTML+"<h1>hghghgh</h2>";