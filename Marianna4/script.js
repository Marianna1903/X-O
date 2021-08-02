let div = document.getElementsByClassName('divs');
let div_cubes = document.getElementsByClassName('div_cubes')[0];
let player1 = document.getElementsByClassName('player_1')[0];
let player2 = document.getElementsByClassName('player_2')[0];
let btn = document.getElementsByClassName('btn_replay')[0];
let span1 = document.getElementsByClassName('span_1')[0];
let span2 = document.getElementsByClassName('span_2')[0];
let message = document.getElementsByClassName('div_message')[0];
let count = 0;
var p1 = 0;
var p2 = 0;


let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let prompt1 = prompt("Player1");
let prompt2 = prompt("Player2");
player1.innerHTML = prompt1;
player2.innerHTML = prompt2;

for(let i=0;i<div.length;i++){
	div[i].addEventListener("click", function(){
		if(count%2==0){
			div[i].innerHTML = "X";
            div[i].style.pointerEvents = "none";
		}
		 if(count%2==1){
			div[i].innerHTML = "O";
            div[i].style.pointerEvents = "none";
		}
        count++;
        if(count==div.length){
            message.innerHTML = "Match Tie";
        }
      
    
        for(let j=0;j<winningConditions.length;j++){
                if(div[winningConditions[j][0]].innerHTML=="X" && div[winningConditions[j][1]].innerHTML=="X" && div[winningConditions[j][2]].innerHTML=="X"){
                    
                    message.innerHTML = prompt1+" win";
                    p1+=1; 
                    span1.innerHTML = " "+p1;
                    // div[i].style.pointerEvents = "none";
                }
                else if(div[winningConditions[j][0]].innerHTML=="O" && div[winningConditions[j][1]].innerHTML=="O" && div[winningConditions[j][2]].innerHTML=="O"){
                    
                    message.innerHTML = prompt2+" win";
                    p2+=1;
                    span2.innerHTML = " "+p2;
                //    div[i].style.pointerEvents = "none";
                    
                }
                
          
              
    
           

        }

        btn.addEventListener("click",function(){
            count = 0;
            message.innerHTML = "";
            div[i].innerHTML = "";
            div[i].style.pointerEvents = "auto";
            div_cubes.style.pointerEvents = "auto";
        })


         
       
	})
}
