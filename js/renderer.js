class Renderer {

    constructor(context, options, data) {
        this._context = context;
        this._options = options;
        this._data = data;
    }

    heading() {           //Prints the heading
        this.text(this._options.headingText, { size: 30, position: this._options.headingPosition })
    }

    // delimiter() {
    //     const fontString = Math.floor(30 * this._options.resizeValue) + "pt Comic Sans MS";
    //     const text = "Virtual Online Casino";
    //     this._context.font = fontString;
    //     this._context.fillStyle = 'white';
    //     this._context.textAlign = "center";
    //     this._context.fillText(text, this._options.canvasDimensions.w / 2,  this._options.canvasDimensions.h / 2);
    //     this._context.strokeStyle = 'red';
    //     this._context.strokeText(text, this._options.canvasDimensions.w / 2, this._options.canvasDimensions.h / 2);
    // }

    text(text, details) {
        const fontString = 
            details.bold ? "bold " : ""
            + Math.floor(details.size * this._options.resizeValue)
            + "pt "
            + (details.font || "Comic Sans MS");

        this._context.font = fontString;
        this._context.fillStyle = details.fillStyle || "white";
        this._context.textAlign = details.textAlign || "center";

        this._context.fillText(text, details.position.x, details.position.y);
        this._context.strokeStyle = details.strokeStyle || "red";
        this._context.strokeText(text, details.position.x, details.position.y);
    }

    sprite(sprite) {
        if (sprite.visible) {
            this._context.shadowBlur = 20;
            this._context.shadowColor = "black";
            this._context.drawImage (
                sprite.image, 
                sprite.position.x, 
                sprite.position.y, 
                sprite.width, 
                sprite.height
            );
            if (sprite.caption) {
                this._context.font = "bold " + Math.floor(30 * this._options.resizeValue) + "px Comic Sans MS";
                this._context.fillStyle = 'white';
                this._context.textAlign = "center";
                this._context.fillText (
                    sprite.caption, 
                    sprite.position.x + sprite.width / 2, 
                    sprite.position.y + sprite.height / 2 + 10 * this._options.resizeValue
                );
            }
        }
    }

    // position(position) {
    //     this._context.strokeRect(position.point.x + 3, position.point.y + 3, this._options.cardDimensions.w - 6, this._options.cardDimensions.h - 6);
    //     this._context.font = "bold " + Math.floor(30 * this._options.resizeValue) + "pt Comic Sans MS";
    //     this._context.fillStyle = 'red';
    //     this._context.textAlign = "center";
    //     this._context.fillText(position.name, position.point.x + this._options.cardDimensions.w / 2, position.point.y + this._options.cardDimensions.h / 2);
    // }

    buttons() {
        this._data.buttons.forEach(function(button) { this.sprite(button); });

        // this.render(this._data.button.image, this._options.buttonPosition, this._options.buttonSize, this._options.buttonSize);
        // this._context.font = "bold " + Math.floor(30 * this._options.resizeValue) + "px Comic Sans MS";
        // this._context.fillStyle = 'white';
        // this._context.textAlign = "center";
        // this._context.fillText("Hit", this._options.buttonPosition.x + this._options.buttonSize / 2, this._options.buttonPosition.y + this._options.buttonSize / 2 + 10);

    }

    field() {
        this.heading();
        this.render(this._data.deck.image, this._data.deck.currentPosition, this._options.cardDimensions.w, this._options.cardDimensions.h);
        this.buttons();  

        // for (let i = 0; i < this._data.positions.length; i += 1) {
        //     this.position(this._data.positions[i]);
        // }
        for (let i = 0; i < this._data.cards.length; i += 1) {
            if (!this._data.cards[i].deleted) {
                this.render(this._data.cards[i].image, this._data.cards[i].currentPosition, this._options.cardDimensions.w, this._options.cardDimensions.h);
                this._data.cards[i].move();
            }
        }
    }
}