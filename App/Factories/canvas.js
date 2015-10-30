'use strict'

var factories = factories || {};
factories.canvas = (state, options) => {
  let createCanvas = () => {
    if (!options.hasOwnProperty('elementId')) {
      throw 'options.elementId must be supplied'
    }

    if (!options.hasOwnProperty('width')) {
      throw 'options.width must be supplied'
    }

    if (!options.hasOwnProperty('height')) {
      throw 'options.height must be supplied'
    }

    let element = document.getElementById(options.elementId);

    if (!element) {
      throw `element "#${options.elementId}" could not be found`;
    }

    let gameCanvas = document.createElement('canvas')
    gameCanvas.setAttribute('style', `width: ${options.width}; height: ${options.height}; background-color: ${options.background};`);

    element.appendChild(gameCanvas);
  };

  let init = () => {
    createCanvas();
  }();

  return {

  };
};
