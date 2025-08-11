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
$('.hamburger__menu--back-to-top').on('click', function(event) {
    menu.removeClass('hamburger__menu-active');
});