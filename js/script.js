(function(global, doc, $, _, launchDate, undefined){
/*
    Countdown Clock
*/
  var clock = (function () {
    var timeUntil,
        formatTime,
        tick,
        init,

        elem = null,
        launch = new Date(launchDate),
        stop = false;

    timeUntil = function timeUntil () {
      var now = new Date(),

          countdown = launch - now,

          aSecond = 1000,
          aMinute = 60 * aSecond,
          anHour = 60 * aMinute,
          aDay = 24 * anHour,

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

    init = function (el) {
      elem = $(el);
      tick();
    };

    return {
      init : init,
      stop : stopTheClock
    };
  }()),


/*
    Mission List
*/

  campaign = (function () {
    var missionsLeft = $('.mission').filter(':not(.done)').length,
        missionsFinished = $('.mission').filter('.done').length;

    $('#missions-left').html(missionsLeft + ' left');
    $('#missions-finished').html(missionsFinished + ' done');

    // hide finished missions
    $('.mission.done').hide();

    $('#road-to-requiem').show();
  }());








  $(function () {

    clock.init($('#clock'));


    global.trythis = function () {
      clock.stop();
    };

  });
}(this, this.document, this.jQuery, this._, "November 6, 2012 00:00:00"));