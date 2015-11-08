'use strict';

let engineOpts = {
  fps: 60,
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

let c = engine.drawCircle({x: 10, y: 10, r: 10});

let distance = 20;
window.addEventListener('keydown', (e) => {
  if (e.keyIdentifier === 'Left' ||
      e.keyIdentifier === 'Right' ||
      e.keyIdentifier === 'Up' ||
      e.keyIdentifier === 'Down') {
        c.move(e.keyIdentifier, distance)
      }
});

start();
