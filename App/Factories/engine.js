'use strict'

var factories = factories || {};
factories.engine = (options) => {
  let state = {
    subscribers: []
  };

  let subscribable = factories.subscribable(state);
  let eventLoop = factories.eventLoop(state, options);

  let canvas = undefined;
  if (options.hasOwnProperty('canvas')) {
    canvas = factories.canvas(state, options.canvas, subscribable);
  }

  return Object.assign(
    {},
    subscribable,
    eventLoop,
    canvas
  );
};
