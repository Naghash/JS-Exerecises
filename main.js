console.log("Starting javascript...");
	var myName = "Naghash";
console.log(myName);
	var myAge = 45;
console.log(myAge);
	var  ignasiAge = 32;
	var ageDiff = myAge - ignasiAge;
console.log(ageDiff);


if (myAge > 21){
	console.log("You are older than 21");
}else if (myAge < 21){
	console.log("You are not older than 21");
}


if (myAge < ignasiAge){
	console.log("Ignasi is older than you");
}else if (myAge > ignasiAge){
	console.log("Ignasi is younger than you");
}else if (myAge = ignasiAge){
	console.log("You have the same age as Ignasi");
}



var team = ["Alex", "Ana", "Jorge", "Mika", "Oscar",  "Ori",  "Pancho", "Rodrigo", "Yerar"];
for (let i= 0; i < team.length; i++){
	console.log(team[i]);
}

var teamage = [35, 45, 24, 28, 30, 25, 28, 37, 24];
var i=0;
while (i < teamage.length) {
	if(teamage[i] %2 ==0){
		console.log(teamage[i]);
	} 
  
	i++;

}

//var largest = 0;
//for ( var i = 0; i < teamage.length; i++){
//  if (teamage[i] > largest) {
//    largest = teamage[i];
//	  }
//	console.log(largest);
//}

var teamage = [35, 45, 21, 28, 30, 25, 28, 37, 24];
var min = Math.min.apply(Math, teamage)
console.log(min);

var teeamage = [35, 45, 21, 28, 30, 25, 28, 37, 24];
var max = Math.max.apply(Math, teamage)
console.log(max);


var num = 3;
function myFunction(index, array){
	console.log(array[index]);
    
}
myFunction(5, [3,5,8,7,6,5,4,3]);



var ages = [35, 45, 21, 28, 30, 25, 28, 37, 24,35];
	ages.sort()
	console.log(ages);

var index = i;
for (i = 0; i < ages.length; i++) { 
	if(ages[i]==ages[i+1]){	 
	console.log(ages[i], ages[i+1])	 }
}


var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.reverse());

var  numbers = [1,2,3,4,5,6];
	console.log(numbers.reverse());

var  letters = ["w","e","b","m","a","s","t","e","r"];
	console.log(letters.reverse());

function uppercase(str){
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("prince of persia"));


//"Web Development Tutorial"

//var words = ["Web", "Development", "Tutorial"]
//var index =0
//for(let i=0, i < words.length, i++){
//	if
//}

//	console.log(words)



function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("Web Development Tutorial"));


















