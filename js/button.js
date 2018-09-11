class Button extends Sprite {
    constructor(position, width, caption, size) {
        super(position);

        // this._redImage = loadImage('./images/red-button.png', width, width);
        // this._blueImage = loadImage('./images/blue-button.png', width, width);
        this._pressed = false;
        this._options = options;
        this._caption = caption;
    }

    get caption() {
        return this._caption;
    }

    get deck() {
        return this._deck;
    }

    togglePressed() {
        this._pressed = !this._pressed;
    }

    ClickOnButton(positionToTest) {       //tests whether the mouse click is on the button
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