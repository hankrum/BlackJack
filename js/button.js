class Button extends Sprite {
    constructor(basePoint, width, options) {
        super(basePoint);

        this._redImage = loadImage('./images/red-button.png', width, width);
        this._blueImage = loadImage('./images/blue-button.png', width, width);
        this._pressed = false;
        this._options = options;
    }

    get deck() {
        return this._deck;
    }

    get image() {
        if (this._pressed) {
            return this._blueImage;
        }
        else {
            return this._redImage;
        }
    }

    togglePressed() {
        this._pressed = !this._pressed;
    }

    static ClickOnButton(positionToTest, options) {       //tests whether the mouse click is on the button
        const buttonCenter = point(options.buttonPosition.x + options.buttonSize / 2, options.buttonPosition.y + options.buttonSize / 2);
        const x = Math.abs(buttonCenter.x - positionToTest.x);
        const y = Math.abs(buttonCenter.y - positionToTest.y);
        const distancefromCenter = Math.sqrt(x * x + y * y);

        return distancefromCenter <= options.buttonSize / 2;
    }
}