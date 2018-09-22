class Card extends Sprite {
    constructor (
        number, 
        destination, 
        options, 
        // endPoint, 
        // speed, 
    ) {

        super({});

        // this._endPoint = endPoint;
        this._number = number;
        this._speed = options.speed;
        this._destination = destination;
        this._position = new Point(options.deckPosition.x, options.deckPosition.y);
        this._moveData = 1;
        this._reachedEndPoint = false;
        this._width = options.cardDimensions.w;
        this._height = options.cardDimensions.h;

        this.setNewMoveData();
        //this._deleted = false;

        this._hidden = false;

        const imageFileName = this.getCardFileName();
        console.log(imageFileName);
        this._image = document.getElementById("cards");
        this._visible = true;
        this._score = number % 13 > 10 ? 10 : number % 13;
    }

    get number() {
        return this._number;
    }
    
    get hidden() {
        return this._hidden;
    }

    set hidden(value) {
        this._hidden = value;
    }

    get image() {
        return this._hidden ? document.getElementById("card-back") : this._image;
    }

    // get cardOut() {
    //     return this._cardOut;
    // }

    get reachedEndPoint() {
        return this._reachedEndPoint;
    }

    get destination() {
        return this._positionDestination;
    }

    // get deleted() {
    //     return this._deleted;
    // }

    // set deleted(value) {
    //     this._deleted = value;
    // }

    setNewMoveData() {         //calculations for the movement of the cards
        const a = (this._destination.y - this._position.y) / (this._position.x - this._destination.x);

        this._moveData = a;

        return this;
    }

    move() {           //calculates the next movement step
        //const outEvent = new CustomEvent("cardOut");
        const speed = this._speed || 1;
        this._reachedEndPoint = this._reachedEndPoint || Math.abs(this._position.x - this._destination.x) < speed;

        if (! this._reachedEndPoint) {
        //     this._startPoint = this._endPoint;
        //     this._currentPosition = this._endPoint;
        //     if (this.cardOut) {
        //         document.dispatchEvent(outEvent);
        //     }
        // }
        // else {
            this._position.x -= speed;
            this._position.y = Number(this._position.y + speed * this._moveData);
        }

        return this;
    }

    // sendCardOut(outPoint) {
    //     this._endPoint = point(outPoint.x, outPoint.y);
    //     this._positionDestination = -1;
    //     this._reachedEndPoint = false;
    //     this._cardOut = true;

    //     return this;
    // }

    _getCardId() {
        const cardNames = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king" ];
        const cardColors = ["clubs", "diamonds", "hearts", "spades"];
    
        const cardName = cardNames[this._number % 13];
        const cardColor = cardColors[Math.floor(this._number / 13)];
        const cardId = cardName + "_of_" + cardColor;
    
        return cardId;
    }
    
    getCardFileName() {
        const pathCardImages = ".\\images\\cards\\";
    
        const cardId = this._getCardId();
        const cardFileName = pathCardImages + cardId + ".png";
    
        return cardFileName;
    }
    
}