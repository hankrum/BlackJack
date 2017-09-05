class Renderer {
    constructor(context, options, data) {
        this._context = context;
        this._options = options;
        this._data = data;
    }

    heading() {           //Prints the heading
        const fontString = "bold " + Math.floor(30 * this._options.resizeValue) + "pt Comic Sans MS";
        const text = "Blackjack";
        this._context.font = fontString;
        this._context.fillStyle = 'white';
        this._context.textAlign = "center";
        this._context.fillText(text, this._options.canvasDimensions.w / 2, 70 * this._options.resizeValue);
        this._context.strokeStyle = 'red';
        this._context.strokeText(text, this._options.canvasDimensions.w / 2, 70 * this._options.resizeValue);
    }

    render(image, position, width, height) {
        this._context.shadowBlur = 20;
        this._context.shadowColor = "black";
        this._context.drawImage(image, position.x, position.y, width, height);
    }

    position(position) {
        this._context.strokeRect(position.point.x + 3, position.point.y + 3, this._options.cardDimensions.w - 6, this._options.cardDimensions.h - 6);
        this._context.font = "bold " + Math.floor(30 * this._options.resizeValue) + "pt Comic Sans MS";
        this._context.fillStyle = 'red';
        this._context.textAlign = "center";
        this._context.fillText(position.name, position.point.x + this._options.cardDimensions.w / 2, position.point.y + this._options.cardDimensions.h / 2);
    }

    button() {
        this.render(this._data.button.image, this._options.buttonPosition, this._options.buttonSize, this._options.buttonSize);
        this._context.font = "bold " + Math.floor(30 * this._options.resizeValue) + "px Comic Sans MS";
        this._context.fillStyle = 'white';
        this._context.textAlign = "center";
        this._context.fillText("Hit", this._options.buttonPosition.x + this._options.buttonSize / 2, this._options.buttonPosition.y + this._options.buttonSize / 2 + 10);

    }

    field() {
        this.heading();
        this.render(this._data.deck.image, this._data.deck.currentPosition, this._options.cardDimensions.w, this._options.cardDimensions.h);
        this.button();  

        for (let i = 0; i < this._data.positions.length; i += 1) {
            this.position(this._data.positions[i]);
        }
        for (let i = 0; i < this._data.cards.length; i += 1) {
            if (!this._data.cards[i].deleted) {
                this.render(this._data.cards[i].image, this._data.cards[i].currentPosition, this._options.cardDimensions.w, this._options.cardDimensions.h);
                this._data.cards[i].move();
            }
        }
    }
}