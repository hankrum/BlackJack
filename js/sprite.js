class Sprite {
    constructor(details) {
        this._position = details.position;
        this._image = details.image;
        this._width = details.width;
        this._height = details.height || details.width;
        this._visible = details.visible || true;
        this._caption = details.caption;
    }

    get position() {
        return this._position;
    }

    get image() {
        return this._image;
    }

    // set image(image) {
    //     this._image = image;
    // }

    get visible() {
        return this._visible;
    }

    set visible(value) {
        this._visible = value;
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

    set image(value) {
        this._image = value;
    }
}