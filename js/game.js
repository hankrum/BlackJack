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
        this._data.setChipsVisible(false);
        this._data.setTextVisible("dealer-wins", false);
        this._data.setTextVisible("player-wins", false);
        this._data.setTextVisible("push", false);
        //this._data.chips.forEach(function (chip) { chip.visible = false; });

        this._data.resetPlayerCards();

        for (let i = 0; i < 2; i++) {
            const destination = new Point(
                this._options.firstPlayerCardPosition.x
                + i * (this._options.cardDimensions.w + this._options.playerCardOffset * this._options.resizeValue),
                this._options.firstPlayerCardPosition.y
            );

            const card = this._dealCard(destination);
            this._data.playerCards.push(card);

            this._data.setTextParameter("player-hand", this._data.playerHandScore());
        }

        this._data.setTextParameter("player-hand", this._data.playerHandScore());
        this._data.setTextVisible("player-hand", true);

        this._data.resetDealerCards();

        for (let i = 0; i < 2; i++) {
            const destination = new Point(
                this._options.firstDealerCardPosition.x
                + i * (this._options.cardDimensions.w + this._options.dealerCardOffset * this._options.resizeValue),
                this._options.firstDealerCardPosition.y
            );
            const card = this._dealCard(destination);
            this._data.dealerCards.push(card);
        }

        this._data.dealerCards[1].hidden = true;

        this._data.setTextParameter("dealer-hand", this._data.dealerHandScore());
        this._data.setTextVisible("dealer-hand", true);

        if (this._data.hasPlayerBlackJack()) {
            if (this._data.hasDealerBlackJack()) {
                this._data.changePlayerFunds(this._data.bid);
                this._data.setTextVisible("push", true);
            }
            else {
                this._data.setTextParameter("player-hand", "BLACKJACK!!!");
                this._data.changePlayerFunds(this._data.bid * 2.5);

            }
            this._data.setButtonVisible("Deal", true);
            this._data.setButtonVisible("Clear", true);
        }

        this._data.setButtonVisible("Double", true);
        this._data.setButtonVisible("Hit", true);
        this._data.setButtonVisible("Stand", true);

        if (this._data.playerCards[0].shortNumber === this._data.playerCards[1].shortNumber) {
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
                    _this._data.setButtonVisible("Split", false);
                    _this._data.setButtonVisible("Double", false);
                    const lastDestination = _this._data.playerCards[_this._data.playerCards.length - 1].destination;
                    const destination = new Point(
                        lastDestination.x + _this._options.cardDimensions.w + _this._options.playerCardOffset * _this._options.resizeValue,
                        lastDestination.y
                    );
                    const card = _this._dealCard(destination);
                    _this._data.playerCards.push(card);

                    const playerHandScore = _this._data.playerHandScore();
                    _this._data.setTextParameter("player-hand", playerHandScore);

                    const loss = Number(playerHandScore) > 21;

                    if (loss) {
                        _this._loss();
                    }
                }
                else if (buttonName === "Stand") {
                    _this._data.setButtonVisible("Double", false);
                    _this._data.setButtonVisible("Split", false);
                    _this._data.dealerCards[1].hidden = false;

                    let dealRule = _this._data.dealerHandScore() < 17;
                    while (dealRule) {
                        const lastDestination = _this._data.dealerCards[_this._data.dealerCards.length - 1].destination;
                        const destination = new Point(
                            lastDestination.x + _this._options.cardDimensions.w + _this._options.playerCardOffset * _this._options.resizeValue,
                            lastDestination.y
                        );
                        const card = _this._dealCard(destination);
                        _this._data.dealerCards.push(card);

                        dealRule = _this._data.dealerHandScore() < 17;
                    }

                    const dealerHandScore = _this._data.dealerHandScore();
                    const playerWin = dealerHandScore > 21 || _this._data.playerHandScore() > dealerHandScore;

                    if (playerWin) {
                        this._data.setTextVisible("player-wins", true);

                    }
                }
                else if (buttonName === "Double") {
                    this._data.setButtonVisible("Split", false);
                    _this._data.changePlayerFunds(-_this._data.bid);
                    _this._data.changeBid(_this._data.bid);

                    _this._data.setButtonVisible("Double", false);
                    // TODO: fix only one card allowed to Hit
                }
            }
        });
    }

    _loss() {
        this._data.setTextVisible("dealer-wins", true);
        this._data.setButtonVisible("Hit", false);
        this._data.setButtonVisible("Stand", false);
        this._data.setButtonVisible("Split", false);
        this._data.setButtonVisible("Double", false);
        this._data.dealerCards[1].hidden = false;
        this._data.bidReset();
        this._data.setChipsVisible(true);
        this._data.setButtonVisible("Deal", true);
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
        this._data.setChipsVisible(true);
        this._data.bidReset();
        //this._data.chips.forEach(function (chip) { chip.visible = true; });

        this._renderer.field();

        this._engine();
    }

    start() {
        this._nextGame();
        this._gameLoop(); //thiscontext, options, data, renderer);
    }
}