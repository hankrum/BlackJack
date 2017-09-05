class Position {
    constructor(name, point) {
        this._name = name;
        this._point = point;
        this._empty = true;
    }

    get name() {
        return this._name;
    }

    get point() {
        return this._point;
    }

    get empty() {
        return this._empty;
    }

    static isClickOnPosition(positionToTest, options, positions) {        //tests whether the mouse click is on positions A or B
        for (let i = 3; i <= 4; i += 1) {
            const onPosition = positionToTest.x > positions[i].point.x && positionToTest.x < positions[i].point.x + options.cardDimensions.w &&
                positionToTest.y > positions[i].point.y && positionToTest.y < positions[i].point.y + options.cardDimensions.h;
            if (onPosition) {
                return i;
            }
        }
        return -1;
    }
}
