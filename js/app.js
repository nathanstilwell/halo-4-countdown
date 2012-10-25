define([
  'jquery',
  'src/countdown',
  'src/data'
], function ($, countdown, data) {
  countdown.init($('#clock'), data.launchDate);
});

