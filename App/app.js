'use strict';
let engine = factories.engine({});

let updateGameTime = () => {
  let element = document.getElementById('game-time');
  element.innerHTML = `Running for: ${engine.getRunningTimeInSeconds()} seconds`;
};

engine.subscribe(updateGameTime);

let stop = () => {
  engine.stop();
};

let start = () => {
  engine.start();
};

start();
