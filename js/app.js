define([
  'jquery',
  'src/countdown'
], function ($, countdown) {
  countdown.init($('#clock'), "November 6, 2012 00:00:00");
});

