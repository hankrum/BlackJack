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

    clicked(positionToTest) {       //tests whether the mouse click is there
        const buttonCenter 
            = point(
                position.x + width / 2, 
                position.y + width / 2
            );
        const x = Math.abs(buttonCenter.x - positionToTest.x);
        const y = Math.abs(buttonCenter.y - positionToTest.y);
        const distancefromCenter = Math.sqrt(x * x + y * y);

        return distancefromCenter <= size / 2;
    }
}