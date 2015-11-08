'use strict';

let engineOpts = {
  fps: 5,
  canvas: {
    elementId: 'game',
    width: 800,
    height: 600,
    background: '#f00'
  }
};

let engine = daftWeeEngine.create(engineOpts);

//-----------------------------------------------
let stop = () => {
  engine.stop();
};

let start = () => {
  engine.start();
};

start();
