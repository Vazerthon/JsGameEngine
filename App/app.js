'use strict'
let engine = factories.engine({
  elementId: 'game',
  width: 800,
  height: 600,
  background: '#000'
});

let loggerFactory = (message) => {
  return () => {
    console.log(message);
  }
}

let start = () => {
  console.log('starting...');
  engine.start();
  console.log('started');
};

let stop = () => {
  console.log('stopping...');
  engine.stop();
  console.log('stopped')
};

let sub = () => {
  console.log('adding subscriber...');
  engine.subscribe(loggerFactory(Date()));
  console.log('done')
};
