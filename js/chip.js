class Chip extends ClickableSprite {
    constructor(caption, clickImage, image, position, width) {
        super(caption, clickImage, image, position, width);

        this._price = Number(this._caption);
    }

    get price() {
        return this._price;
    }
}