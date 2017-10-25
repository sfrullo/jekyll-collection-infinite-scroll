requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'bower_components/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../scripts/app'
    }
});

// Start the main app logic.
requirejs( [
    'masonry/masonry',
    'imagesloaded/imagesloaded',
    'infinite-scroll/dist/infinite-scroll.pkgd',
    'app/utils',
    ],
    function( Masonry, imagesLoaded, InfiniteScroll, Utils ) {

        console.log('Init ...');

        var container = document.getElementById("#container");

        console.log('Load ...');
        Utils._load("pages/index.html", "container");

        console.log('Init masonry ...');
        var msnry = new Masonry( '#container', {
            itemSelector: '.pagination__item', // select none at first
            columnWidth: '.grid__col-sizer',
            gutter: '.grid__gutter-sizer',
            percentPosition: false,
            stagger: 100,
            // nicer reveal transition
            visibleStyle: { opacity: 1 },
            hiddenStyle: { opacity: 0 },
        });

        // make imagesLoaded available for Infinite Scroll
        InfiniteScroll.imagesLoaded = imagesLoaded;

        console.log('Init infiniteScroll ...');
        var infScroll = new InfiniteScroll( '#container', {
            // options...
            path: '/pages/{{#}}',
            append: '.pagination__item',
            status: '.page-load-status',
            hideNav: '.pagination',
            outlayer: msnry,
        });

    });