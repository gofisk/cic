$(function () {
  var $form = $('.color-card');
  var $formSub = $('.color-card > .color-card__button');
  $reset = $('#demo-reset');

  $formSub.click(function () {
    $form.addClass('submitted').delay(3500).queue(function (next) {
      $form.removeClass('submitted').addClass('success').dequeue();
    });
  });
  $reset.click(function () {
    $form.removeClass('success');
  });
});