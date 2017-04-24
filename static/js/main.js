'use strict';

$(function () {

    $('.banner__list').flickity({
        prevNextButtons: false,
        pageDots: true,
        lazyLoad: true,
        autoPlay: true
    });

    $('.banner').append($('.banner .flickity-page-dots'));
});
"use strict";

$(function () {});
'use strict';

$(function () {
    $('.block__list-link:not(.block__list-link_sub)').on('click', function (e) {
        $('.block__list_sub').hide();
        $(this).parent().find('.block__list_sub').show();
    });
});
"use strict";

$(function () {});
'use strict';

$(function () {
    $('.form__btn').on('click', function () {
        // Clear
        $('.form__field-err_show').removeClass('form__field-err_show');

        // Start
        var pass = true;

        var form = $(this).parent();
        var fields = $(form).find('input');

        [].forEach.call(fields, function (field) {
            if ($(field).val() === '') {
                $(field).next().addClass('form__field-err_show');
                pass = false;
            }
        });

        if (pass === true) {
            $(form).find('.form__message').fadeIn(300);
        }
    });
});
"use strict";

$(function () {});
"use strict";

$(function () {});
"use strict";

$(function () {});
"use strict";

$(function () {});
"use strict";

$(function () {});
"use strict";

$(function () {});
"use strict";

$(function () {});
'use strict';

$(function () {
    $('.slider__list').flickity({
        contain: true,
        wrapAround: true,
        pageDots: false,
        groupCells: true,
        freeScroll: true
    });
});