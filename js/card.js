class Card extends Sprite {
    constructor (
        number, 
        destination, 
        endPoint, 
        speed, 
        image, 
        position) {

        super(image, position)


        this._endPoint = endPoint;
        this._number = number;
        this._speed = speed;
        this._destination = destination;
        this._moveData = 1;
        this._reachedEndPoint = false;
        this._width = options.baseCardDimensions.w;
        this._height = options.baseCardDimensions.h;

        this.setNewMoveData();
        this._deleted = false;
    }

    get currentPosition() {
        return this._currentPosition;
    }

    get number() {
        return this._number;
    }

    get cardOut() {
        return this._cardOut;
    }

    get reachedEndPoint() {
        return this._reachedEndPoint;
    }

    get destination() {
        return this._positionDestination;
    }

    get deleted() {
        return this._deleted;
    }

    set deleted(value) {
        this._deleted = value;
    }

    setNewMoveData() {         //calculations for the movement of the cards
        const a = (this._endPoint.y - this._currentPosition.y) / (this._currentPosition.x - this._endPoint.x);

        this._moveData = a;

        return this;
    }

    move() {           //calculates the next movement step
        const outEvent = new CustomEvent("cardOut");

        const speed = this._speed >= 0 ? this._speed : 1;
        this._reachedEndPoint = Math.abs(this._currentPosition.x - this._endPoint.x) < speed;

        if (this._reachedEndPoint) {
            this._startPoint = this._endPoint;
            this._currentPosition = this._endPoint;
            if (this.cardOut) {
                document.dispatchEvent(outEvent);
            }
        }
        else {
            this._currentPosition.x -= speed;
            this._currentPosition.y = Number(this._currentPosition.y + speed * this._moveData);
        }

        return this;
    }

    sendCardOut(outPoint) {
        this._endPoint = point(outPoint.x, outPoint.y);
        this._positionDestination = -1;
        this._reachedEndPoint = false;
        this._cardOut = true;

        return this;
    }
}