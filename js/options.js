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
            w: 150,
            h: 218
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
        this.buttonSize = 80 * resizeValue;
        this.buttonPosition = {
            x: canvasDimensions.w * 0.8,
            y: canvasDimensions.h * 0.8
        };
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
