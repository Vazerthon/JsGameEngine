'use strict'

var factories = factories || {};
factories.engine = (options) => {
  let state = {
    subscribers: []
  };

  let subscribable = factories.subscribable(state);
  let eventLoop = factories.eventLoop(state);
  let canvas = factories.canvas(state, options, subscribable);

  return Object.assign(
    {},
    subscribable,
    eventLoop,
    canvas
  );
};
