class Sprite {
    constructor(basePoint) {
        this._currentPosition = basePoint;
    }

    get currentPosition() {
        return this._currentPosition;
    }
}