'use strict'

var daftWeeEngine = daftWeeEngine || {};
daftWeeEngine.create = (options) => {
  let state = {
    subscribers: []
  };

  let subscribable = daftWeeEngine.subscribable(state);
  let eventLoop = daftWeeEngine.eventLoop(state, options);

  let canvas = undefined;
  if (options.hasOwnProperty('canvas')) {
    canvas = daftWeeEngine.canvas(state, options.canvas, subscribable);
  }

  return Object.assign(
    {},
    subscribable,
    eventLoop,
    canvas
  );
};
