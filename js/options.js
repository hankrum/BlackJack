class Options {
    constructor() {
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
            y: canvasDimensions.h * 0.3
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
        
        this.buttonSize = 80 * resizeValue;
        this.buttonDetails = [
            {
                caption: "Deal",
                position: new Point (
                    canvasDimensions.w * 0.6,
                    canvasDimensions.h * 0.8
                ),
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
        
        this.buttonDetails.forEach(function(x){ x.width = this.buttonSize });

        this.outPoint = {
            x: canvasDimensions.w * 0.3,
            y: canvasDimensions.h
        };
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
