'use strict'

var daftWeeEngine = daftWeeEngine || {};
daftWeeEngine.circle = (canvas) => {
  let drawCircle = (opts) => {
    let x = opts.x;
    let y = opts.y;
    let r = opts.r;
    let context = canvas.getDrawingContext();

    let move = (direction, distance) => {
      if (direction === 'Left') {
        x -= distance;
      } else if (direction === 'Right') {
        x += distance;
      } else if (direction === 'Up') {
        y -= distance;
      } else if (direction === 'Down') {
        y += distance;
      }
    };

    let draw = () => {
      context.beginPath();
      context.arc(x, y, r, 0, 2 * Math.PI);
      context.fill();
    };

    let coords = () => {
      return {x, y};
    };

    let circle = {
      move,
      coords,
      draw
    };

    canvas.addDrawable(circle);
    return circle;
  };

  return {
    drawCircle
  };
};
