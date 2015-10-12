'use strict'

const engine = () => {
  let engine = {
    running: false
  };

  return Object.assign(
    engine,
    subscribable(),
    eventLoop()
  );
};
