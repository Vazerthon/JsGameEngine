'use strict'

var factories = factories || {};
factories.canvas = (state, options, subscribable) => {
  let gameCanvas = undefined;
  let context = undefined;
  let drawables = [];

  let createCanvas = () => {
    if (!options.hasOwnProperty('elementId')) {
      throw 'options.elementId must be supplied'
    } else if (!options.hasOwnProperty('width')) {
      throw 'options.width must be supplied'
    } else if (!options.hasOwnProperty('height')) {
      throw 'options.height must be supplied'
    } else if (!options.hasOwnProperty('background')) {
      throw 'options.background must be supplied'
    }

    let element = document.getElementById(options.elementId);

    if (!element) {
      throw `element "#${options.elementId}" could not be found`;
    }

    gameCanvas = document.createElement('canvas');

    gameCanvas.setAttribute('height', options.height);
    gameCanvas.setAttribute('width', options.width);
    gameCanvas.setAttribute('style', `background-color: ${options.background};`);

    element.appendChild(gameCanvas);
    context = gameCanvas.getContext('2d');
  };

  let redraw = () => {
    context.clearRect(0,0,gameCanvas.width, gameCanvas.height);

    drawables.forEach((drawable) => {
      drawable.draw();
    });
  };

  let subscribeRedraw = () => {
    subscribable.subscribe(redraw);
  };

  let addCircle = (opts) => {
    let x = opts.x;
    let y = opts.y;

    let getX = () => { return x; };
    let getY = () => { return y; };
    let setX = newX => { x = newX; };
    let setY = newY => { y = newY; };

    let circle = {
      getX: getX,
      getY: getY,
      setX: setX,
      setY: setY,
      draw: () => {
        context.beginPath();
        context.arc(getX(),getY(),opts.r,opts.sAngle,opts.eAngle);
        context.fill();
      }
    };

    drawables.push(circle);
    redraw();
    return circle;
  };

  let init = () => {
    createCanvas();
    subscribeRedraw();
  }();

  return {
    addCircle
  };
};
