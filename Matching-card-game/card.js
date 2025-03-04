document.addEventListener('DOMContentLoaded', () => {
    const animals = ['cat', 'dog', 'cow', 'horse', 'lion', 'pig'];
    const cards = [...animals, ...animals]; 
    let flippedCards = [];
    let matchedCards = [];

    const gameBoard = document.getElementById('game-board');

    // Shuffle the cards
    cards.sort(() => 0.5 - Math.random());

    // Create card elements
    cards.forEach((animal, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.animal = animal;
        card.innerHTML = `
            <div class="front">
                <img src="${animal}.jpeg" alt="${animal}">
            </div>
            <div class="back">?</div>
        `;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });

    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
            this.classList.add('flipped');
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(checkForMatch, 1000);
            }
        }
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;
        if (card1.dataset.animal === card2.dataset.animal) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedCards.push(card1, card2);

            if (matchedCards.length === cards.length) {
                alert('Congratulations! You won the game!');
            }
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }
        flippedCards = [];
    }
});