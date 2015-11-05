'use strict';
let engine = factories.engine({fps: 1});

//-----------------------------------------------
let updateGameTime = () => {
  let element = document.getElementById('game-time');
  element.innerHTML = `Running for: ${engine.getRunningTimeInSeconds()} seconds`;
};

engine.subscribe(updateGameTime);

//-----------------------------------------------
let drawEvents = () => {
  let eventsToDraw = events.getEvents().filter((e) => {
    return e.Time <= engine.getRunningTimeInSeconds();
  });

  let element = document.getElementById('fired-events');
  element.innerHTML = '';

  eventsToDraw.forEach((e) => {
    let draw = document.createElement('li');
    draw.innerHTML = `${e.Name} - ${e.Message}`
    element.appendChild(draw);
  });
};

engine.subscribe(drawEvents);

//-----------------------------------------------
let stop = () => {
  engine.stop();
};

let start = () => {
  engine.start();
};

start();
