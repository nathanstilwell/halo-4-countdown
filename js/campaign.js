define([
  'jquery'
], function ($) {
  return function () {
    var missionsLeft = $('.mission').filter(':not(.done)').length,
        missionsFinished = $('.mission').filter('.done').length;

    console.log("Campaign Module");

    $('#missions-left').html(missionsLeft + ' left');
    $('#missions-finished').html(missionsFinished + ' done');

    // hide finished missions
    $('.mission.done').hide();

    $('#road-to-requiem').show();
  };
});