'use strict'
var engine = factories.engine();

var bla = () => { console.log('I am bla!'); }
engine.start();

setTimeout(() => {
  engine.subscribe(bla);
}, 1000);
