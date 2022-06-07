var lscore = 0
var rscore = 0

function button() {
    var pright = Math.floor((Math.random() * 3));  
    var pleft = Math.floor((Math.random() * 3)); 
    var hright = ['pic/p-right.jpg', 'pic/s-right.jpg', 'pic/r-right.jpg'];
    var hleft = ['pic/p-left.jpg', 'pic/s-left.jpg', 'pic/r-left.jpg'];
    document.querySelector('#right img').setAttribute("src", hright[pright]);
    document.querySelector('#left img').setAttribute("src", hleft[pleft]); 
    getWinner(pleft,pright);
} 

function getWinner(pleft,pright) { 
    var result = 'TIE'
    if (pleft==0) {
        if (pright==1) {
            result='Right Player Wins';
            rscore++;
        }
        if (pright==2) {
            result='Left Player Wins';
            lscore++;
        }
    }
    if (pleft==1) {
    if (pright==0) {
            result='Left Player Wins';
            lscore++;
        }
    if (pright==2) {
            result='Right Player Wins';
            rscore++;
        }
    }

    if (pleft==2) {
    if (pright==0) {
            result='Right Player Wins';
            rscore++;
        }
    if (pright==1) {
            result='Left Player Wins';
            lscore++;
    } 
    }
    if (rscore==5 || lscore==5) {
        result='GAMEOVER';
        drei.show();
        document.querySelector('#play').remove();
    }
    document.querySelector('#result').innerHTML= result;
    document.querySelector('#lefts').innerHTML= 'Left: ' + lscore;
    document.querySelector('#rights').innerHTML= 'Right: ' + rscore;
}

//$(document).ready(function(){
 // $("#myBtn").click(function(){
 //   $("#myModal").modal('show');
//  });
//});
var drei = new bootstrap.Modal(document.getElementById('modal'), {
  keyboard: false
}) 
