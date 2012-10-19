define([
  'jquery',
  'src/countdown',
  'src/campaign-progress',
  'src/data'
], function ($, countdown, progress, data) {
  countdown.init($('#clock'), data.launchDate);
  progress(data.campaign);
});

