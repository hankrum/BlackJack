class Button extends ClickableSprite {
    constructor(details) {
        super(details);

        this._visible = false;
        this._image = loadImage('./images/red-button.png', width);
        this._clickImage = loadImage('./images/blue-button.png', width);
        //this._pressed = false;
        //this._options = options;
        //this._caption = caption;
    }

    // get deck() {
    //     return this._deck;
    // }
}