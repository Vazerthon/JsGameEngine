'use strict'

var factories = factories || {};
factories.eventLoop = (state, options) => {
  let started = false;
  let interval = undefined;
  let startedDate = undefined;
  let loggedTime = 0;
  let fps = options.fps;

  let start = () => {
    if (started) {
      return;
    }

    started = true;
    startedDate = new Date();

    interval = setInterval(() => {
      state.subscribers.forEach((sub) => {
        sub();
      });
    }, 1000 / fps);
  };

  let stop = () => {
    clearInterval(interval);
    loggedTime = getRunningTimeInSeconds();
    started = false;
  };

  let getRunningTimeInSeconds = () => {
    let dateDiff = new Date(new Date() - startedDate);
    let wholeMinutesAsSeconds = dateDiff.getMinutes() * 60;
    let secondsOfCurrentMinute = dateDiff.getSeconds();

    return wholeMinutesAsSeconds + secondsOfCurrentMinute + loggedTime;
  };

  return {
    start,
    stop,
    getRunningTimeInSeconds
  };
};
