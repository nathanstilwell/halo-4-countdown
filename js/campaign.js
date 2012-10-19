define([
  'jquery',
  'underscore',
  'handlebars'
], function ($, _, Handlebars) {
  return function (campaign) {
    var
      // missionsLeft = $('.mission').filter(':not(.done)').length,
      // missionsFinished = $('.mission').filter('.done').length,
      missionsLeft = 0,
      missionsFinished = 0,
      left,
      done;

    var source = $('#campaign-game').html();
    var template = Handlebars.compile(source);
    var missions = $('<div />', { 'class' : 'missions' });

// Print All
    _.each(campaign, function (game) {
      console.log(game.gameId);
      missions.append(template(game));
      _.each(game.missions, function (mission) {
        if (mission.status === 'done') {
          missionsFinished += 1;
        } else {
          missionsLeft += 1;
        }
      });
    });






    $('#missions-left').html(missionsLeft + ' left');
    $('#missions-finished').html(missionsFinished + ' done');




    $('#road-to-requiem').append(missions);





/*

    // hide finished missions
    $('.mission.done').hide();
*/
    $('#road-to-requiem').show();
  };
});