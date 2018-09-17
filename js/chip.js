class Chip extends ClickableSprite {
    constructor(details) {
        super(details);

        this._price = Number(this._caption);
        this._image = ImageProvider.loadImage('./images/chip.png', details.width);
        this._visible = true;
    }

    get price() {
        return this._price;
    }
}