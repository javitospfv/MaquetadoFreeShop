var AppSite = function () {
};

AppSite.prototype = {
    selectores: {
        next: '.next',
        prev: '.prev',
        btnSelect: '.dot'
    },
    values: {
        slideIndex: 0 
    },
    init: function () {
        var self = this;
        self._setSlide(self.values.slideIndex);
        self.setSlide();
        self.prevSlide();
        self.nextSlide();
    },
    prevSlide: function () {
        var self = this;
        $(self.selectores.prev).on('click', function () {
            console.log(self.values.slideIndex);
            if (self.values.slideIndex <= 0 ) {
                self.values.slideIndex = $(self.selectores.btnSelect).length - 1;
            }
            self._setSlide(self.values.slideIndex);
        })
    },
    nextSlide: function () {
        var self = this;       
        $(self.selectores.next).on('click', function () {
            var position = self.values.slideIndex + 1;
            if (position >= $(self.selectores.btnSelect).length) {
                position = 0;
            }
            self._setSlide(position);
        })
    },
    setSlide: function () {
        var self = this;
        $(self.selectores.btnSelect).on('click', function () {
            var position = $(this).data('num');
            self._setSlide(position);
        })
    },
    _setSlide: function (value) {
        var self = this;
        self.values.slideIndex = value;
        $('.mySlides').hide();
        $('.mySlides:eq(' + value + ')').show();
    }
};

$(document).ready(function () {
    var appSiteAll = new AppSite();
    appSiteAll.init();
});