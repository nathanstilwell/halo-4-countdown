define([
  'jquery'
],

function ($) {
  var timeUntil,
      formatTime,
      tick,
      init,

      aSecond = 1000,
      aMinute = 60 * aSecond,
      anHour = 60 * aMinute,
      aDay = 24 * anHour,

      elem,
      launch,
      stop;

  timeUntil = function timeUntil () {
    var now = new Date(),
        countdown = launch - now,
        days,
        hours,
        minutes,
        seconds;

        days = Math.floor(countdown / aDay);
        countdown -= days * aDay;
        hours = Math.floor(countdown / anHour);
        countdown -= hours * anHour;
        minutes = Math.floor(countdown / aMinute);
        countdown -= minutes * aMinute;
        seconds = Math.floor(countdown / aSecond);

    return {
      days : days,
      hours : hours,
      minutes : minutes,
      seconds : seconds
    };
  };

  formatTime = function formatTime (time) {
    var days    = time.days < 10 ? "0" + time.days : time.days,
        hours   = time.hours < 10 ? "0" + time.hours : time.hours,
        minutes = time.minutes < 10 ? "0" + time.minutes : time.minutes,
        seconds = time.seconds < 10 ? "0" + time.seconds : time.seconds;
    return days + ":" + hours + ":" + minutes + ":" + seconds;
  };

  tick = function tick () {
    if(!stop){
      elem.html(formatTime(timeUntil()));
      setTimeout(tick, 1000);
    }
  };

  stopTheClock = function () {
    stop = true;
  };

  init = function (el, launchDate) {
    elem = $(el);
    launch = new Date(launchDate),
    stop = false;

    tick();
  };

  return {
    init : init,
    stop : stopTheClock
  };
});