define([
  'jquery',
  'src/countdown',
  'src/campaign',
  'src/data'
], function ($, countdown, campaign, data) {
  console.dir(data);

  countdown.init($('#clock'), data.launchDate);
  campaign();
});

