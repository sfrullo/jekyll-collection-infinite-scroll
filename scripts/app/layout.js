define([
    'masonry',
    'imagesloaded',
    'infinitescroll',
    'utils',
    'consts'
], function(Masonry, ImagesLoaded, InfiniteScroll, Utils, Consts) {

    return {

        init: function() {

            console.log('Init ...');
            var container = document.getElementById(Consts.masonry.container);

            console.log('Init masonry ...');
            var msnry = new Masonry(container, {
                itemSelector: 'none', // select none at first
                columnWidth: '.' + Consts.masonry.columnWidth,
                gutter: '.' + Consts.masonry.gutter,
                percentPosition: false,
                stagger: 100,
                fitWidth: true,
                visibleStyle: {
                    opacity: 1
                },
                hiddenStyle: {
                    opacity: 0
                },
            });

            console.log('Load ...');
            Utils.__load("pages/index.html", container.id, function(response) {
                Utils.__append(response, container.id, function(element) {
                    ImagesLoaded(element, function() {
                        msnry.options.itemSelector = "." + Consts.infiniteScroll.appendSelector;
                        var items = element.getElementsByClassName(Consts.infiniteScroll.appendSelector);
                        msnry.appended(items);
                        msnry.layout();
                    });
                });
            });

            // make ImagesLoaded available for Infinite Scroll
            InfiniteScroll.imagesLoaded = ImagesLoaded;

            console.log('Init infiniteScroll ...');
            var infScroll = new InfiniteScroll(container, {
                // options...
                path: '/pages/{{#}}',
                append: "." + Consts.infiniteScroll.appendSelector,
                status: '.page-load-status',
                hideNav: '.pagination',
                outlayer: msnry,
            });
        }

    }


})