//lists

var bands = ["band a", "band b", "band c", "band d", "band f"]
var ul = document.getElementById("bandlist");
for(i = 0; i < bands.length; i++){
	var li = document.createElement("li");
	li.innerHTML = bands[i];
	ul.appendChild(li);                              
}

//table
function mytable(row,col){
var table = document.getElementById("table");
var header = table.createTHead();

for(i = 0; i < row ; i++){
	var fila = document.createElement("tr");
	table.appendChild(fila);

for(j = 0; j < col ; j++){
	var columna = document.createElement("td");
	fila.appendChild(columna);	

}
}
}
mytable(4,8);
	

