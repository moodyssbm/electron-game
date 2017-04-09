// html objs
let container = document.getElementById('container');

//globals
let deck = [],
myPile = [],
myHand = [],
aiPile = [],
aiHand = [],
playPile =  [];

// deck setup
function deckSetup() {
  deck = [];

  for(i=2; i!=15; i++) {
    for(n=0; n!=4; n++) {
      deck.push(i);
    }
  }
}

//main funcs and operations
window.onload = function() {
  deckSetup();
  
}
