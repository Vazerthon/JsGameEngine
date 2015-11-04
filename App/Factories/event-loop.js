'use strict'

var factories = factories || {};
factories.eventLoop = (state) => {
  let started = false;
  let interval = undefined;
  let fps = 60;

  let start = () => {
    if (started) {
      return;
    }

    started = true;
    interval = setInterval(() => {
      state.subscribers.forEach((sub) => {
        sub();
      });
    }, 1000 / fps);
  };

  let stop = () => {
    clearInterval(interval);
    started = false;
  };

  return {
    start,
    stop
  };
};
