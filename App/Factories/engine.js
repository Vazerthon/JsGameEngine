'use strict'

var factories = factories || {};
factories.engine = () => {
  let state = {
    subscribers: []
  };

  let subscribable = factories.subscribable(state);
  let eventLoop = factories.eventLoop(state);
  let canvas = factories.canvas(state);

  return Object.assign(
    {},
    subscribable,
    eventLoop,
    canvas
  );
};
