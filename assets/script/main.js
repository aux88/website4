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

// 「トップ」のリンクをクリックしたらメニューを閉じる
$('.hamburger__menu--back-to-top').on('click', function (event) {
    menu.removeClass('hamburger__menu-active');
});

// カルーセル
const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination", //必須の設定：ページネーションのclass指定
        type: "bullets",
        clickable: "clickable"
    },
    loop: true, //繰り返し指定
    spaceBetween: 30, //スライド感の余白
    autoplay: {
        delay: 5000 //5秒ごとにスライダを切り替える
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