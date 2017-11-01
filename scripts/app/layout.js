define("layout", [
    'masonry',
    'imagesloaded',
    'infinitescroll',
    'utils',
    'consts'], function( Masonry, imagesLoaded, InfiniteScroll, Utils, consts ) {

        return {

            init : function (){

                console.log('Init ...');
                var container = document.getElementById(consts.masonry.container);

                console.log('Init masonry ...');
                var msnry = new Masonry( container, {
                    itemSelector: 'none', // select none at first
                    columnWidth: '.' + consts.masonry.columnWidth,
                    gutter: '.' + consts.masonry.gutter,
                    percentPosition: false,
                    stagger: 100,
                    fitWidth: true,
                    visibleStyle: { opacity: 1 },
                    hiddenStyle: { opacity: 0 },
                });

                console.log('Load ...');
                Utils.__load("pages/index.html", container.id, function ( response ) {
                    Utils.__append(response, container.id, function ( element ) {
                        imagesLoaded( element, function() {
                            msnry.options.itemSelector = "." + consts.infiniteScroll.appendSelector;
                            var items = element.getElementsByClassName(consts.infiniteScroll.appendSelector);
                            msnry.appended(items);
                            msnry.layout();
                        });
                    });
                });

                // make imagesLoaded available for Infinite Scroll
                InfiniteScroll.imagesLoaded = imagesLoaded;

                console.log('Init infiniteScroll ...');
                var infScroll = new InfiniteScroll( container, {
                    // options...
                    path: '/pages/{{#}}',
                    append: "." + consts.infiniteScroll.appendSelector,
                    status: '.page-load-status',
                    hideNav: '.pagination',
                    outlayer: msnry,
                });
            }

        }


    })