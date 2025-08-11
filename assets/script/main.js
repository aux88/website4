var hamburger_button = $('.header__menu-icon');
var menu = $('.header__menu');

// ハンバーガーメニューをクリックしたら
hamburger_button.on('click', function () {
  // .menuの表示・非表示を繰り返す
  menu.toggleClass('header__menu-active');
});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // ハンバーガーメニューを閉じる
  menu.removeClass('header__menu-active');
});

// 「トップ」のリンクをクリックしたらメニューを閉じる
$('.header__menu--back-to-top').on('click', function(event) {
    menu.removeClass('header__menu-active');
});