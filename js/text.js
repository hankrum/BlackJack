class Text {
    constructor(details) {
        this._name = details.name;
        this._text = details.text;
        this._position = details.position;
        this._size = details.size;
        this._visible = details.visible;
        this._parameter = details.parameter || "";
    }

    get name() {
        return this._name;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get position() {
        return this._position;
    }

    get size() {
        return this._size;
    }

    get visible() {
        return this._visible;
    }

    set visible(value) {
        this._visible = value;
    }

    get parameter() {
        return this._parameter;
    }

    set parameter(value) {
        this._parameter = value;
    }
}