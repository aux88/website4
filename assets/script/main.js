var hamburger_button = $('.hamburger__menu-icon');
var menu = $('.hamburger__menu');

// ハンバーガーメニューをクリックしたら
hamburger_button.on('click', function () {
    // .menuの表示・非表示を繰り返す
    menu.toggleClass('hamburger__menu-active');
});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
    // ハンバーガーメニューを閉じる
    menu.removeClass('hamburger__menu-active');
});

// ハンバーガーメニューの現在のページのリンクをクリックした時はメニューを閉じる
$('.hamburger__menu-link').on('click', function (e) {
    if ($(this).attr('href') === '#') {
        menu.removeClass('hamburger__menu-active');
    }
});

// カルーセル
$(document).ready(function () {
    if ($('.swiper').length > 0) {
        const swiper = new Swiper(".swiper", {
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true
            },
            loop: true,
            spaceBetween: 30,
            autoplay: {
                delay: 5000
            }
        });
    }
});

// アコーディオンのタイトルがクリックされたら
$('.faq__question').on('click', function (e) {

    // .faq__answerを選択
    var content = $(this).next();

    // .faq__answerを表示・非表示
    content.slideToggle();

    // クリックされた要素の中、または近くのアイコンを探す
    var icon = $(this).find('.toggle-icon');

    // アイコンのクラスを切り替え
    if (icon.hasClass('is-open')) {
        icon.removeClass('is-open');
    } else {
        icon.addClass('is-open');
    }

});