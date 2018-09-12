class Data {
    constructor(options) {
        this._playerCards = [];
        this._dealerCards = [];
        this._bid = 0;
        this._deck = new Deck(options.deckPosition, options);

        this._options = options;
        this._buttonCaptions = ["Deal", "Hit", "Stand", "Double", "Split"]; // TODO: move in options
        // this._positions = [];
        // this._button = new Button(this._options.buttonPosition, this._options.buttonSize, this._options);
        // this._setPositions();
        // this._cards = this.setFirstCards();
    }

    get cards() {
        return this._cards;
    }

    get positions() {
        return this._positions;
    }

    get deck() {
        return this._deck;
    }

    get buttons() {
        return this._buttons;
    }

    setFirstCards() {       //initial cards for positions 1, 2, 3, A and B before pressing cards and button
        const cards = [];
        for (let i = 0; i < this._positions.length; i += 1) {
            const cn = Math.floor(Math.random() * this._deck.deck.length); //get a random card from the deck
            const card = new Card(
                point(this._options.deckPosition.x, this._options.deckPosition.y),
                point(this._positions[i].point.x, this._positions[i].point.y),
                this._deck.deck[cn],
                this._options.speed,
                i,
                this._deck.cardImages[this._deck.deck[cn]],
            );

            this._deck.deck.splice(cn, 1);
            cards.push(card);
        }
        return cards;
    }

    // _setPositions() {        //creates positions 1, 2, 3, A and B
    //     const names = ["1", "2", "3", "A", "B"];
    //     const wValues = [0.2, 0.4, 0.6, 0.4, 0.6];      //responsible for the place of the positions on the screen
    //     const hValues = [0.2, 0.2, 0.2, 0.6, 0.6];

    //     for (let i = 0; i < names.length; i += 1) {
    //         const pos = new Position(
    //             names[i],
    //             point(this._options.canvasDimensions.w * wValues[i], this._options.canvasDimensions.h * hValues[i])
    //         );
    //         this._positions.push(pos);
    //     }
    // }

}