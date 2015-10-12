'use strict'

const eventLoop = () => {
  var running = false;

  let start = () => {
    running = true;
  };

  let stop = () => {
    running = false;
  };

  return {
    start: start,
    stop: stop
  }
};
