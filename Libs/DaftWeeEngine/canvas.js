'use strict'

var daftWeeEngine = daftWeeEngine || {};
daftWeeEngine.canvas = (state, options, subscribable) => {
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

  let addDrawable = (drawable) => {
    if (!drawable.hasOwnProperty('draw')) {
      throw 'Drawables must contain a draw() function';
    }

    drawables.push(drawable);
  };

  //todo: remove drawable

  let getDrawingContext = () => {
    return context;
  }

  let init = () => {
    createCanvas();
    subscribeRedraw();
  }();

  return {
    getDrawingContext,
    addDrawable
  };
};
