(function ($) {
    "use strict";
    var deshiServerApp = {
        initialize_plugin: function () {
            //Faq
            $('.faq-wrapper .faq-title').on('click', function (e) {
                var f_info = $(this).parent('.faq-info');
                var element = $(this).parent('.faq-info').parent('.faq-item');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('.faq-content').removeClass('open');
                    element.find('.faq-content').slideUp(300);
                } else {
                    element.addClass('open');
                    f_info.children('.faq-content').slideDown(300);
                    element.siblings('.faq-item').find('.faq-content').slideUp(300);
                    element.siblings('.faq-item').removeClass('open');
                    element.siblings('.faq-item').find('.faq-title').removeClass('open');
                    element.siblings('.faq-item').find('.faq-content').slideUp(300);
                }
            });
        },
        initializ: function () {
            deshiServerApp.initialize_plugin();
        }
    };
    $(function () {
        deshiServerApp.initializ();
    });
})(jQuery);