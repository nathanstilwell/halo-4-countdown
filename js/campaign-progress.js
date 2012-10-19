define([
  'jquery',
  'underscore',
  'handlebars'
], function ($, _, Handlebars) {
  return function (campaignData) {
    var
      remaining = 0,
      finished = 0,
      source = $('#mission-counter-template').html(),
      template = Handlebars.compile(source);

    _.each(campaignData, function (game) {
      _.each(game.missions, function (mission) {
        (mission.status === 'done') ? finished += 1 : remaining += 1;
      });
    });

    console.log(finished, remaining);
    // render template here.

    $('#campaign-progress').html(template({
      finished : finished,
      remaining : remaining
    })).show();
  };
});