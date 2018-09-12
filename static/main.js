const iconsArray = [{
    'name': 'audio-description',
    'img': 'fa-audio-description',
},
{
    'name': 'backward',
    'img': 'fa-backward',
},
{   
    'name': 'broadcast-tower',
    'img': 'fa-broadcast-tower',
},
{
    'name': 'circle',
    'img': 'fa-circle',
},
{
    'name': 'fa-anchor',
    'img': 'fa-anchor',
},
{
    'name': 'closed-captioning',
    'img': 'fa-closed-captioning',
},
{
    'name': 'compress',
    'img': 'fa-compress',
},
{
    'name':'eject',
    'img':'fa-eject',
},
{
    'name':'expand',
    'img':'fa-expand',
},
{
    'name':'expand-arrows',
    'img':'fa-expand-arrows-alt',
},
{
    'name':'car',
    'img':'fa-car',
},
{
    'name':'fighter-jet',
    'img':'fa-fighter-jet',
},
{
    'name':'paper-plane',
    'img':'fa-paper-plane',
},
{
    'name':'helicopter',
    'img':'fa-helicopter',
},
{
    'name':'motorcycle',
    'img':'fa-motorcycle',
},
{
    'name':'rocket',
    'img':'fa-rocket',
},
{
    'name':'ship',
    'img':'fa-ship',
},
{
    'name':'space-shuttle',
    'img':'fa-space-shuttle',
},
{
    'name':'shuttle-van',
    'img':'fa-shuttle-van',
},
{
    'name':'fa-subway',
    'img':'fa-subway',
},
{
    'name':'ambulance',
    'img':'fa-ambulance',
},
{
    'name':'gas-pump',
    'img':'fa-gas-pump',
},
{
    'name':'battery',
    'img':'fa-battery-full',
},
{
    'name':'tachometer',
    'img':'fa-tachometer-alt',
},
{
    'name':'archive',
    'img':'fa-archive',
},
{
    'name':'fa-keyboard',
    'img':'fa-keyboard',
},
{
    'name':'hdd',
    'img':'fa-hdd',
},
{
    'name':'memory',
    'img':'fa-memory',
},
{
    'name':'save',
    'img':'fa-save',
},
{
    'name':'power-off',
    'img':'fa-power-off',
},
{
    'name':'tv',
    'img':'fa-tv',
},
{
    'name':'upload',
    'img':'fa-upload',
}

]

function handleClick(cardId) {
    console.log(cardId)
}

function showcards() {for (i = 0; i < cards.length; i++) { 
    var cardId = cards[i].id;
    cards[i].className = 'fa-eject';
    cards[i].addEventListener('click', handleClick(cardId))
 }}

function configure () {
    let x = config.x.value;
    let y = config.y.value;
    if (x == 0) {
        alert('please select value');
        return}
    else if (y == 0) {
        alert('please select value');
        return} 
    else {
    document.getElementById('config').style.display = 'none';
    //let gameGrid = iconsArray.concat(iconsArray);
    let chosengrid = []
    for (i=0; i < (x*y)/2; i++) {
        chosengrid.push(iconsArray[i])
    }
    let gameGrid = chosengrid.concat(chosengrid)
    let delay = 1200;
    gameGrid.sort(() => 0.5 - Math.random());
    const game = document.getElementById('game_area');
    const grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    grid.style.maxHeight = (60*x)+'px';
    grid.style.maxWidth = (60*y)+'px';
    game.appendChild(grid);

    gameGrid.forEach(item => {
        // Create a div
        const card = document.createElement('div');
      
        // Apply a card class to that div
        card.classList.add('card');
      
        // Set the data-name attribute of the div to the cardsArray name
        card.dataset.name = item.name;
      
        // Create front of card
        const front = document.createElement('i');
        front.classList.add('fas')
        front.classList.add('fa-address-card');
        front.classList.add('front');

        // Create back of card, which contains 
        const back = document.createElement('i');
        back.classList.add('back');
        back.classList.add('fas')
        back.classList.add(item.img)
        back.style.display = 'None'

        // Apply the background image of the div to the cardsArray image
        //card.style.backgroundImage = `url(${item.img})`;
        
        
        // Append the div to the grid section
        card.appendChild(front);
        card.appendChild(back);
        grid.appendChild(card);

        let count = 0;
        let firstGuess = '';
        let secondGuess = '';
        let previousTarget = null;

        // Add match CSS
        const match = () => {
        let selected = document.querySelectorAll('.selected');
        selected.forEach(selectedCard => {
            selectedCard.classList.remove('selected');
            selectedCard.classList.add('match');
        
        });
        }

        const resetGuesses = () => {
            firstGuess = '';
            secondGuess = '';
            count = 0;
          
            var selected = document.querySelectorAll('.selected');
            selected.forEach(selCard => {
                selCard.firstChild.style.display = ''
                selCard.firstChild.nextSibling.style.display = 'none'
                selCard.classList.remove('selected');
            });
          };

        grid.addEventListener('click', function (event) {
            if (event.target.className == "fas fa-address-card front"){
            // The event target is our clicked item
            let clicked = event.target;
            
            // Add selected class
            if (count < 2) {
                count++;
                if (count === 1) {
                  // Assign first guess
                  firstGuess = clicked.nextSibling.className;
                  clicked.style.display = 'none';
                  clicked.nextSibling.style.display = '';
                  clicked.parentNode.classList.add('selected');
                } else {
                  // Assign second guess
                  secondGuess = clicked.nextSibling.className
                  clicked.style.display = 'none';
                  clicked.nextSibling.style.display = '';
                  clicked.parentNode.classList.add('selected');
                }
                // If both guesses are not empty...
                if (firstGuess !== '' && secondGuess !== '') {
                  // and the first guess matches the second match...
                  if (firstGuess == secondGuess) {
                    // run the match function
                    setTimeout(match, delay) ;
                    setTimeout(resetGuesses, delay);
                  } else {
                    setTimeout(resetGuesses, delay);
                  }
                }
                previousTarget = clicked;  
              }
            }
           });
      });
}}