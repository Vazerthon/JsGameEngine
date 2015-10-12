'use strict'
var eng = engine();

var bla = () => { console.log('I am bla!'); }
eng.subscribe(bla);
console.log(eng.getSubscribers());

eng.start();
