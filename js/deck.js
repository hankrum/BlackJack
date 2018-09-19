class Deck extends Sprite {
    constructor(details) {
        super(details);

        this._image = document.getElementById("card-back");//ImageProvider.loadImage('./images/card-back.png', this.width, this.height);
        this.resetCards();
    }

    get cards() {
        return this._cards;
    }

    resetCards() {
        this._cards = [];
        for (let i = 0; i < 51; i += 1) {
            this._cards.push(i);
        }
    }

    takeOutCard(number) {
        const index = this._cards.indexOf(number);
        if (index >= 0) {
            this._cards.splice(index, 1);
        }
    }

    // get image() {
    //     return this._image;
    // }

    // get cardImages() {
    //     return this._cardImages;
    // }
}