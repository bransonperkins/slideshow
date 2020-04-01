var slideshow = {
    photoList: ['giraffe', 'lion', 'zebra', 'elephant', 'leopard', 'honey badger'],

    currentPhotoIndex: 0,

    nextPhoto: function() {
        if(this.currentPhotoIndex < this.photoList.length) {
            console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]);
            this.currentPhotoIndex++;
        } else {
            console.log('End of Slideshow');
<<<<<<< HEAD
              this.pause();
=======
            this.pause();
>>>>>>> async_BransonPerkins
        }
    },

    prevPhoto: function() {
        if(this.currentPhotoIndex > this.photoList.length) {
            console.log('currentPhoto is: ' + this.photoList[this.currentPhotoIndex]);
            this.currentPhotoIndex--;
        } else {
            console.log('Start of Slideshow');
        }
    },

    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];  
    },

    playInterval: null,

    play: function() {
        var self = this;
        this.playInterval = setInterval(function() {
            self.nextPhoto()
        }, 2000)
<<<<<<< HEAD
=======
        return slideshow.nextPhoto();
>>>>>>> async_BransonPerkins
    },

    pause: function() {
        clearInterval(this.playInterval);
<<<<<<< HEAD
    }

}

console.log(slideshow.play());
=======
    },

}

slideshow.play();
>>>>>>> async_BransonPerkins
