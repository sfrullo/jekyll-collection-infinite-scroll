requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'bower_components/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        masonry: 'masonry/masonry',
        imagesloaded: 'imagesloaded/imagesloaded',
        infinitescroll: 'infinite-scroll/dist/infinite-scroll.pkgd',
        photoswipe: 'photoswipe/dist/photoswipe',
        photoswipeui: 'photoswipe/dist/photoswipe-ui-default',
        utils: '../scripts/app/utils',
        consts: '../scripts/app/consts',
        layout: '../scripts/app/layout'
    }
});

// Start the main app logic.
requirejs(['layout'], function (layout) {

    layout.init();

});