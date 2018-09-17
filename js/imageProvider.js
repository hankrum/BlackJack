class ImageProvider {
    static loadImage(url, width, height) {
        const img = new Image();
        img.src = url;
        img.onload = function () {
            img.width = width;
            img.height = height || width;
        }
        return img;
    }
    
}