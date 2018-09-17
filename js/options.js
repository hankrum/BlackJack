class Options {
    constructor() {
        const _this = this;
        const baseScreenResolution = {
            w: 1460,        
            h: 700      
        };

        const baseCanvasDimensions = {
            w: baseScreenResolution.w * 0.98,
            h: baseScreenResolution.h * 0.98
        };

        this.baseCanvasDimensions = baseCanvasDimensions;

        const resizeValue = this.calculateInitialResize();       
        const canvasDimensions = {
            w: baseCanvasDimensions.w * resizeValue,
            h: baseCanvasDimensions.h * resizeValue,
        };
        const baseCardDimensions = {
            w: 100,
            h: 143
        };

        this.resizeValue = resizeValue;
        this.speed = 20;
        this.baseScreenResolution = baseScreenResolution;
        this.canvasDimensions = canvasDimensions;
        this.baseCardDimensions = baseCardDimensions;
        this.cardDimensions = {
            w: baseCardDimensions.w * resizeValue,
            h: baseCardDimensions.h * resizeValue
        };
        this.deckPosition = {
            x: canvasDimensions.w * 0.8,
            y: canvasDimensions.h * 0.1
        };

        this.firstPlayerCardPosition = {
            x: canvasDimensions.w * 0.1,
            y: canvasDimensions.h * 0.7
        }

        this.playerCardOffset = 0.1;
        
        this.firstDealerCardPosition = {
            x: canvasDimensions.w * 0.1,
            y: canvasDimensions.h * 0.2
        }

        this.dealerCardOffset = 0.1;
        
        this._buttonSize = 80 * resizeValue;
        this.buttonsDetails = [
            {
                caption: "Deal",
                position: new Point (
                    canvasDimensions.w * 0.6,
                    canvasDimensions.h * 0.8
                ),
                visible: true,
            },
            {
                caption: "Clear",
                position: new Point (
                    canvasDimensions.w * 0.05,
                    canvasDimensions.h * 0.15
                ),
                width: 60 * resizeValue,
                visible: true,
            },
            {
                caption: "Hit",
                position: new Point (
                    canvasDimensions.w * 0.7,
                    canvasDimensions.h * 0.8
                ),
            },
            {
                caption: "Stand",
                position: new Point (
                    canvasDimensions.w * 0.8,
                    canvasDimensions.h * 0.8
                ),
            },
            {
                caption: "Double",
                position: new Point (
                    canvasDimensions.w * 0.9,
                    canvasDimensions.h * 0.8
                ),
            },
            {
                caption: "Split",
                position: new Point (
                    canvasDimensions.w * 0.5,
                    canvasDimensions.h * 0.8
                ),
            },
            {
                caption: "Insure",
                position: new Point (
                    canvasDimensions.w * 0.4,
                    canvasDimensions.h * 0.8
                ),
            },
        ];

        this.buttonsDetails.forEach(function(detail){ detail.width = detail.width || _this._buttonSize });

        this._firstChipPosition = new Point(canvasDimensions.w * 0.05, canvasDimensions.h * 0.8);
        this._chipSize = 80 * this.resizeValue;
        this._chipOffset = this._chipSize + 20 * this.resizeValue;

        this._chipCaptions = ["5", "10", "50", "100"];

        this.chipsDetails = this._chipCaptions.map(function(chipCaption, i) {
            return{
                caption: chipCaption,
                position: new Point (_this._firstChipPosition.x + i * _this._chipOffset, _this._firstChipPosition.y),
            };
        });
        this.chipsDetails.forEach(function(detail){ detail.width = _this._chipSize });

        this.headingText = "BLACKJACK";
        this.headingPosition = new Point(this.canvasDimensions.w / 2, 70 * this.resizeValue);

        this.bidPosition = new Point(this.canvasDimensions.w * 0.1 , 80 * this.resizeValue);

        this.minBid = 5;
        this.playerFunds = 2495;
        this.playerFundsPosition = new Point(canvasDimensions.w * 0.07, canvasDimensions.h * 0.7);

        // this.outPoint = {
        //     x: canvasDimensions.w * 0.3,
        //     y: canvasDimensions.h
        // };
    }

    calculateInitialResize() {

        const currentWidth = window.innerWidth * 0.95;
        const currentHeight = window.innerHeight * 0.95;

        const sideFieldCorrection = 0;
        const downFieldCorrection = 0;

        const indexWidth = (currentWidth - sideFieldCorrection) / this.baseCanvasDimensions.w;
        const indexHeight = (currentHeight - downFieldCorrection) / this.baseCanvasDimensions.h;

        const result = indexWidth < indexHeight ? indexWidth : indexHeight;

        return result;
    }

}
