// @ts-check
var slideshow = {
    photoList: ['giraffe', 'lion', 'zebra', 'elephant', 'leopard', 'honey badger'],
    currentPhotoIndex: Math.floor((Math.random() * (6 - 0)) + 0),
    nextPhoto: function() {
        if (this.currentPhotoIndex <= this.photoList.length) {
            console.log(this.currentPhotoIndex + 1);
        } else {
            console.log("End of slideshow")
        }
    },
    prevPhoto: function() {
        if (this.currentPhotoIndex >= this.photoList.length) {
            console.log(this.currentPhotoIndex - 1);
        } else {
            console.log("End of slideshow")
        }
    },
    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];
    }
}

console.log(slideshow.getCurrentPhoto());