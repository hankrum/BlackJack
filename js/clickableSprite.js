class ClickableSprite extends Sprite {
    constructor(caption, clickImage, image, position, width, height) {
        super(image, position, width, height);
        this._clickImage = clickImage;
        this._clicked = false;
        this._caption = caption;
    }

    get caption() {
        return this._caption;
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
}