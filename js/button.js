class Button extends ClickableSprite {
    constructor(caption, clickImage, image, position, width) {
        super(caption, clickImage, image, position, width);

        // this._redImage = loadImage('./images/red-button.png', width, width);
        // this._blueImage = loadImage('./images/blue-button.png', width, width);
        //this._pressed = false;
        //this._options = options;
        //this._caption = caption;
    }

    // get deck() {
    //     return this._deck;
    // }

    toggleClicked() {
        this.clicked = !this.clicked;
    }
}