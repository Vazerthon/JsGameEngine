'use strict'

var factories = factories || {};
factories.eventLoop = (subscribable) => {
  if (!subscribable) {
    throw 'eventLoop requires subscribable';
  }
  var running = false;

  let loop = () => {
    while (running) {
      console.log('loop started - ' + Date());

      let subs = subscribable.getSubscribers();
      console.log(subs.length);
      
      subs.forEach((sub) => {
        console.log(sub);
      });

      console.log('loop ended - ' + Date());
    };
  };

  let start = () => {
    running = true;
    loop();
  };

  let stop = () => {
    running = false;
    loop();
  };

  return {
    start: start,
    stop: stop
  }
};
