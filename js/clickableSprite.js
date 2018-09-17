class ClickableSprite extends Sprite {
    constructor(clickImage, details) {
        super(details);
        this._clickImage = clickImage;
        this._clicked = false;
        this._caption = caption;
    }

   set clicked(value) {
        this._clicked = value;
    }

    get position() {
        return this._position;
    }

    get image() {
        return this._clicked ? this._clickImage : this._image;
    }

    hasClick(positionToTest) {       //tests whether the mouse click is there
        const buttonCenter 
            = point(
                this.position.x + this.width / 2, 
                this.position.y + this.width / 2
            );
        const x = Math.abs(buttonCenter.x - positionToTest.x);
        const y = Math.abs(buttonCenter.y - positionToTest.y);
        const distancefromCenter = Math.sqrt(x * x + y * y);

        const isWithinButton = distancefromCenter <= this.width / 2;
        return isWithinButton;
    }

    toggleClicked() {
        this.clicked = !this.clicked;
    }
}