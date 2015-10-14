'use strict'

var factories = factories || {};
factories.engine = () => {
  let state = {
    subscribers: []
  };

  let subscribable = factories.subscribable(state);
  let eventLoop = factories.eventLoop(state);

  return Object.assign(
    {},
    subscribable,
    eventLoop
  );
};
