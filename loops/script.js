document.write("These are the values generate from for loop:<br>");
///for loop
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];

for(var increment=0; increment<12; increment++){
	document.write(months[increment]+"<br>");
}


document.write("<br>");

document.write("These are the values generate from while loop:<br>");
///while loop
var i=0;
while(i<12){
	document.write(months[i]+"<br>");
	i++;
}

document.write("<br>");


document.write("These are the values generate from do while loop:<br>");
///do while loop
var a=0;
do{
	document.write(months[a]+"<br>");
	a++;
}while(a<12);