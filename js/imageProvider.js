class ImageProvider {
    static loadImage(url, width, height) {
        const img = new Image();
        img.onload = function () {
            img.width = width;
            img.height = height || width;
        }
        img.src = url;
        return img;
    }
    
}