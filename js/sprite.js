class Sprite {
    constructor(details) {
        this._position = details.position;
        this._image = details.image;
        this._width = details.width;
        this._height = details.height || width;
        this._visible = true;
        this._caption = details.caption;
    }

    get position() {
        return this._position;
    }

    get image() {
        return this._image;
    }

    get visible() {
        return this._visible;
    }

    get caption() {
        return this._caption;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }
}