class Data {
    constructor(options) {

        this._playerCards = [];
        this._dealerCards = [];
        this._buttons = [];
        this._chips = [];
        this._texts = [];

        this._options = options;

        this._bid = this._options.minBid;
        this._deck = new Deck(
            {
                position: this._options.deckPosition,
                width: this._options.cardDimensions.w,
                height: this._options.cardDimensions.h,
                visible: true,
            }
        );

        this._buttons = this.setButtons();
        this._chips = this.setChips();
        this._texts = this.setTexts();

        this._playerFunds = this._options.playerFunds; // TODO: load from browser memory
        // this._setImages();
        // this._positions = [];
        // this._button = new Button(this._options.buttonPosition, this._options.buttonSize, this._options);
        // this._setPositions();
        // this._cards = this.setFirstCards();
    }

    get playerCards() {
        return this._playerCards;
    }

    get dealerCards() {
        return this._dealerCards;
    }

    // get positions() {
    //     return this._positions;
    // }

    get deck() {
        return this._deck;
    }

    get buttons() {
        return this._buttons;
    }

    get chips() {
        return this._chips;
    }

    get texts() {
        return this._texts;
    }

    // get cards() {
    //     return this._playerCards.concat(this._dealerCards);
    // }

    get bid() {
        return this._bid;
    }

    get playerFunds() {
        return this._playerFunds;
    }

    nextGame() {
        this.resetDealerCards();
        this.resetDealerCards();
    }

    resetPlayerCards() {
        this._playerCards = [];
    }

    resetDealerCards() {
        this._dealerCards = [];
    }

    changeBid(value) {
        const sufficientFunds = value <= this._playerFunds;
        if (sufficientFunds) {
            this._bid += value;
        }
        this.setTextParameter("bid", this._bid);
    }

    bidReset() {
        this._bid = this._options.minBid;
        this.setTextParameter("bid", this._bid);
    }

    changePlayerFunds(value) {
        const newFunds = this._playerFunds + value;
        if (newFunds >= 0) {
            this._playerFunds = newFunds;
        }
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

    setButtons() {
        const buttons = this._options.buttonsDetails.map(function (details) { return new Button(details); });

        return buttons;
    }

    getButtonIndexByName(name) {
        const buttonNames = this._buttons.map(function (button) { return button.caption });
        return buttonNames.indexOf(name);
    }

    setButtonVisible(name, value) {
        const index = this.getButtonIndexByName(name);
        this._buttons[index].visible = value;
    }

    setTexts() {
        const texts = this._options.textsDetails.map(function (detail) { return new Text(detail); });

        return texts;
    }

    getTextIndexByName(name) {
        const textNames = this._texts.map(function (text) { return text.name });
        return textNames.indexOf(name);
    }

    setTextVisible(name, value) {
        const index = this.getTextIndexByName(name);
        this._texts[index].visible = value;
    }

    setTextParameter(name, value) {
        const index = this.getTextIndexByName(name);
        this._texts[index].parameter = value;
    }

    setChips() {
        const chips = this._options.chipsDetails.map(function (details) { return new Chip(details); });

        return chips;
    }

    playerHandScore() {
        this._playerCards.reduce(function (sum, card) { return sum + card.score; });
    }

    dealerHandScore() {
        this._dealerCards.reduce(function (sum, card) { return sum + card.score; });
    }

    _playerHas(cardScore) {
        this._playerCards.some(function (card) { card.score === cardScore });
    }

    _dealerHas(cardScore) {
        this._dealerCards.some(function (card) { card.score === cardScore });
    }

    hasPlayerBlackJack() {
        return this._playerHas(10) && this._playerHas(1);
    }

    hasDealerBlackJack() {
        return this._dealerHas(10) && this._dealerHas(1);
    }

    // _setImages() {
    //     // debugger;
    //     this._deck.image = ImageProvider.loadImage('./images/card-back.png', this._options.cardDimensions.w, this._options.cardDimensions.h);

    // }

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