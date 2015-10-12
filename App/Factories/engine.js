'use strict'

var factories = factories || {};
factories.engine = () => {
  let engine = {
    running: false
  };

  let subscribable = factories.subscribable();
  let eventLoop = factories.eventLoop(subscribable);
  
  return Object.assign(
    engine,
    subscribable,
    eventLoop
  );
};
