class Deck extends Sprite {
    constructor(details) {
        super(details);

        this.image = ImageProvider.loadImage('./images/card-back.png', this.width, this.height);

        // this._deck = [];
        // this._cardImages = [];
        // for (let i = 0; i < 51; i += 1) {
        //     this._deck.push(i);
        //     const image = loadImage(getCardFileName(i), options.cardDimensions.w, options.cardDimensions.h);
        //     this._cardImages.push(image);
        // }
    }

    // get deck() {
    //     return this._deck;
    // }

    // get image() {
    //     return this._image;
    // }

    // get cardImages() {
    //     return this._cardImages;
    // }
}