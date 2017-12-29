$(document).ready(function () {
    var showDetails = function () {
        var $cards = $('.detail-wrapper .card');
        $cards.mouseenter(function () {
            var self = $(this);
            $cards.removeClass('active');
            self.addClass('active');
            var section = self.parents('section').attr('id');
            var $descriptions = $('#' + section + ' .d-item');
            $cards = $('#' + section + ' .card');
            var n = $cards.index(self);
            $descriptions.parent().not($($descriptions[n]).parent()).addClass('hide');
            $($descriptions[n]).parent().fadeIn("slow").removeClass('hide').addClass('active');
        });
        $cards.mouseleave(function () {
            var self = $(this);
            var section = self.parents('section').attr('id');
            var $descriptions = $('#' + section + ' .d-item');
            $cards = $('#' + section + ' .card');
            var n = $cards.index(self);
            $descriptions.parent().not($($descriptions[n]).parent()).removeClass('active').addClass('hide');
        });
        $cards.click(function () {
            var self= $(this);
            self.data('url') ? window.open(self.data('url'), '_blank') : false;
        });
        $cards.on('touchstart', function (e) {
            var self= $(this);
            self.mouseenter();
            e.stopPropagation(); e.preventDefault();
        })
    };
    showDetails();
});