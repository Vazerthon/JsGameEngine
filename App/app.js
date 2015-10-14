'use strict'
var engine = factories.engine();

var loggerFactory = (message) => {
  return () => {
    console.log(message);
  }
}

var start = () => {
  console.log('starting...');
  engine.start();
  console.log('started');
};

var stop = () => {
  console.log('stopping...');
  engine.stop();
  console.log('stopped')
};

var sub = () => {
  console.log('adding subscriber...');
  engine.subscribe(loggerFactory(Date()));
  console.log('done')
};
