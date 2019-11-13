// Nim Super Duper Simple (no input validation)
var count = 0; var playerInput = 0; var cpuInput = 0; var winner=null;
alert("Welcome to Nim! You go first.");
while (count<21) {
   winner="CPU"; 
   count+=playerTurn();
   alert("Current count is "+count);
   if (count<21) {
      winner="you"; 
      count+=cpuTurn();
      alert("Current count is "+count);
   }
}
alert(winner+" won!");

function playerTurn(){
  while(turn!=1||turn!=2||turn!=3){
	var turn = prompt("Count how many? (1-3)");
	if(turn==1||turn==2||turn==3){
	return Number(turn);
	}
	else{
		alert("Invalid input. 1,2,or3");
	}
  }
}

function cpuTurn(){
  var turn=Math.floor(Math.random()*3)+1;
  alert("CPU counts "+turn+".");
  return turn;
}

