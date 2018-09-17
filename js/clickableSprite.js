class ClickableSprite extends Sprite {
    constructor(details) {
        super(details);
        this._clickImage = details.clickImage;
        this._clicked = false;
        this._caption = details.caption;
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
        if (this._visible){
            const buttonCenter 
                = new Point(
                    this.position.x + this.width / 2, 
                    this.position.y + this.width / 2
                );
            const x = Math.abs(buttonCenter.x - positionToTest.x);
            const y = Math.abs(buttonCenter.y - positionToTest.y);
            const distancefromCenter = Math.sqrt(x * x + y * y);

            const isWithinButton = distancefromCenter <= this.width / 2;

            return isWithinButton;
        }
        else {
            return false;
        }

    }

    toggleClicked() {
        this.clicked = !this.clicked;
    }
}