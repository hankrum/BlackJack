class Sprite {
    constructor(image, position, clickImage, height, width) {
        this._position = position;
        this._image = image;
        this._height = height;
        this._width = width;
        this._clickImage = clickImage;
        this._clicked = false;
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