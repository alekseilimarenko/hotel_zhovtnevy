function startGallery() {
    var myGallery = new gallery($('myGallery'),
    {
        timed: true,
        delay: 6000,
        slideInfoZoneOpacity: 0.8,
        showCarousel: false
    });
}

window.addEvent('domready', startGallery);