'use strict'

var factories = factories || {};
factories.eventLoop = (state) => {
  let interval = undefined;
  let fps = 60;

  let start = () => {
    interval = setInterval(() => {
      state.subscribers.forEach((sub) => {
        sub();
      });
    }, 1000 / fps);
  };

  let stop = () => {
    clearInterval(interval);
  };

  return {
    start,
    stop
  };
};
