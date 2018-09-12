class Sprite {
    constructor(image, position, width, height) {
        this._position = position;
        this._image = image;
        this._width = width;
        this._height = height || width;
    }

    get position() {
        return this._position;
    }

    get image() {
        return this._image;
    }
}