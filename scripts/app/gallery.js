define(["photoswipe", "photoswipeui", "utils", "consts"], function(PhotoSwipe, PhotoSwipeUI, Utils, Consts) {

    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function PhotoSwipeGallery() {
        _classCallCheck(this, PhotoSwipeGallery);
        this.pswpElement = document.querySelectorAll(Consts.photoswipe.root)[0];
        // define options (if needed)
        this.options = {
            // optionName: 'option value'
            // for example:
            index: 0 // start at first slide
        };
        this.galleryItems = [];
    }

    PhotoSwipeGallery.prototype.__openGallery = function __openGallery() {
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI, this.galleryItems, this.options);
        gallery.init();
    }

    PhotoSwipeGallery.prototype.__setGalleryItems = function __setGalleryItems(items) {
        this.galleryItems = items;
    }

    PhotoSwipeGallery.prototype.__createGalleryItem = function __createGalleryItem(el) {
        var image = el.querySelectorAll("img");
        return {
            src: image.getAttribute('src'),
            w: image.width,
            h: image.height
        };
    }

    PhotoSwipeGallery.prototype.__searchItemsByClassName = function __searchItemsByClassName(className) {
        var galleryItems = [];
        var items = document.querySelectorAll("." + className);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            galleryItems.push(this.__createGalleryItem(item));
        }
        this.__setGalleryItems(galleryItems);
    }

    PhotoSwipeGallery.prototype.__createGalleryByClassName = function __createGalleryByClassName(className) {
        this.__searchItemsByClassName(className);
        this.__openGallery();
    }

    return PhotoSwipeGallery

})