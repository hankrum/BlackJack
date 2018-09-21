class Button extends ClickableSprite {
    constructor(details) {
        super(details);

        this._visible = details.visible || false;
        this._image = document.getElementById("red-button"); // ImageProvider.loadImage('./images/red-button.png', details.width);
        this._clickImage = document.getElementById("blue-button"); // ImageProvider.loadImage('./images/blue-button.png', details.width);
        //this._pressed = false;
        //this._options = options;
        //this._caption = caption;
    }

    // get deck() {
    //     return this._deck;
    // }
}