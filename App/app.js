'use strict'
let running = false;

let engineOpts = {
    canvas: {
    elementId: 'game',
    width: 800,
    height: 600,
    background: '#fff'
  }
};

let engine = factories.engine(engineOpts);

let circle = engine.addCircle({
  x: 50,
  y: 50,
  r: 50,
  sAngle: 0,
  eAngle: 2 * Math.PI
});

let loggerFactory = (message) => {
  return () => {
    console.log(message);
  }
}

let start = () => {
  engine.start();
  running = true;
  console.log('engine started');
};

let stop = () => {
  engine.stop();
  running = false;
  console.log('engine stopped')
};

let move = (direction) => {
  if (!running) {
    console.log('Engine not running!');
  }

  if (direction === 'left') {
    circle.setX(circle.getX() - 10);
  } else if (direction === 'right') {
    circle.setX(circle.getX() + 10);
  } else if (direction === 'up') {
    circle.setY(circle.getY() - 10);
  } else if (direction === 'down') {
    circle.setY(circle.getY() + 10);
  }
};

let sub = () => {
  console.log('adding subscriber...');
  engine.subscribe(loggerFactory(Date()));
  console.log('done')
};
