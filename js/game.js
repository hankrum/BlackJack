class Game {
    constructor() {
        this._init();
    }

    _init() {
        this._canvas = document.getElementById("blackJackCanvas");

        this._options = new Options();

        this._canvas.width = this._options.canvasDimensions.w;
        this._canvas.height = this._options.canvasDimensions.h;
        this._context = this._canvas.getContext("2d");

        this._data = new Data(this._options);
        this._renderer = new Renderer(this._context, this._options, this._data);
    }

    _handleBid(clickPoint) {
        const _this = this;
        const bidIndex = this._data.getTextIndexByName("bid");
        this._data.chips.forEach(function (chip) {
            if (chip.hasClick(clickPoint)) {
                _this._data.changeBid(chip.price);
                _this._data.changePlayerFunds(-chip.price);
            }
        });
        this._data.texts[bidIndex].parameter = this._data.bid;
    }

    _onClearButton() {
        this._data.changePlayerFunds(this._data.bid - _this._options.minBid);
        this._data.bidReset();
    }

    _dealCard(destination) {
        const cardIndex = Math.floor(Math.random() * this._data.deck.cards.length);
        const cn = this._data.deck.cards[cardIndex];
        this._data.deck.takeOutCard(cn);
        const card = new Card(
            cn,
            destination,
            this._options
        );
        card.setNewMoveData();

        return card;
    }

    _onDealButton() {
        this._data.deck.resetCards();
        this._data.setButtonVisible("Deal", false);
        this._data.setButtonVisible("Clear", false);
        this._data.chips.forEach(function (chip) { chip.visible = false; });

        this._data.resetPlayerCards();

        for (let i = 0; i < 2; i++) {
            const destination = new Point(
                this._options.firstPlayerCardPosition.x + i * (this._options.cardDimensions.w + 20 * this._options.resizeValue),
                this._options.firstPlayerCardPosition.y
            );

            const card = this._dealCard(destination);
            this._data.playerCards.push(card);
        }

        this._data.resetDealerCards();

        for (let i = 0; i < 2; i++) {
            const destination = new Point(
                this._options.firstDealerCardPosition.x + i * (this._options.cardDimensions.w + 20 * this._options.resizeValue),
                this._options.firstDealerCardPosition.y
            );
            const card = this._dealCard(destination);
            this._data.dealerCards.push(card);
        }

        this._data.dealerCards[1].hidden = true;

        // TODO: check for 21, loss and other buttons
        if (this._data.hasPlayerBlackJack()) {
            if (this._data.hasDealerBlackJack()) {
                this._data.changePlayerFunds(this._data.bid);
                // TODO: PUSH on the screen
            }
            else {
                // TODO: BLACKJACK! on the screen
                this._data.changePlayerFunds(this._data.bid * 1.5);

            }
            this._data.setButtonVisible("Deal", true);
            this._data.setButtonVisible("Clear", true);
        }

        this._data.setButtonVisible("Double", true);
        this._data.setButtonVisible("Hit", true);
        this._data.setButtonVisible("Stand", true);

        if (this._data.playerCards[0].score === this._data.playerCards[1].score){
            this._data.setButtonVisible("Split", true);
        }
    }

    _handleButtons(clickPoint) {
        const _this = this;
        this._data.buttons.forEach(function (button, buttonIndex) {
            if (button.hasClick(clickPoint)) {
                const buttonName = _this._data.buttons[buttonIndex].caption;

                if (buttonName === "Clear") {
                    _this._onClearButton();
                }
                else if (buttonName === "Deal") {
                    _this._onDealButton();
                }
                else if (buttonName === "Hit") {
                    const lastDestination = _this._data.playerCards[_this._data.playerCards.length - 1].destination;
                    const destination = new Point(
                        lastDestination.x + _this._options.cardDimensions.w + 20 * _this._options.resizeValue,
                        lastDestination.y
                    );
                    const card = _this._dealCard(destination);
                    _this._data.playerCards.push(card);

                    _this._data.setButtonVisible("Double", false);
                }
                else if (buttonName === "Stand") {
                    _this._data.dealerCards[1].hidden = false;

                    _this._data.setButtonVisible("Double", false);
                }
            }
        });

    }

    _handleClick() {
        const _this = this;
        this._canvas.addEventListener('click', function (e) {
            const clickPoint = new Point(e.clientX, e.clientY);

            _this._handleBid(clickPoint);
            _this._handleButtons(clickPoint);

        }, false);

    }

    _engine() {
        this._handleClick();

        window.addEventListener('resize', function (e) {
            this._options = new Options();
            location.reload();
            // canvas.width = options.canvasDimensions.w;
            // canvas.height = options.canvasDimensions.h;
        });

    }

    // TODO: !!
    _gameLoop() { //context, options, data, renderer) {        //animation loop
        const _this = this;
        _this._context.clearRect(0, 0, _this._options.canvasDimensions.w, _this._options.canvasDimensions.h);
        _this._renderer.field();
        requestAnimationFrame(function () { _this._gameLoop() }); //_this._context, options, data, renderer) });
    }

    _nextGame() {
        this._data.nextGame();
        this._data.setButtonVisible("Deal", true);
        this._data.setButtonVisible("Clear", true);
        this._data.chips.forEach(function (chip) { chip.visible = true; });

        this._renderer.field();

        this._engine();
    }

    start() {
        this._nextGame();
        this._gameLoop(); //thiscontext, options, data, renderer);
    }
}