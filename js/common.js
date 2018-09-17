function getCardId(cardNumber) {
    const cardNames = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    const cardColors = ["clubs", "diamonds", "hearts", "spades"];

    const cardName = cardNames[cardNumber % 13];
    const cardColor = cardColors[Math.floor(cardNumber / 13)];
    const cardId = cardName + "_of_" + cardColor;

    return cardId;
}

function getCardFileName(number) {
    const pathCardImages = ".\\images\\cards\\";

    const cardId = getCardId(number);
    const cardFileName = pathCardImages + cardId + ".png";

    return cardFileName;
}

function loadImage(url, width, height) {
    const img = new Image();
    img.src = url;
    img.onload = function () {
        img.width = width;
        img.height = height || width;
    }
    return img;
}
