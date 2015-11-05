'use strict';

let events = (() => {
  let makeEvent = (name, time, message) => {
    return {
      Name: name,
      Time: time,
      Message: message
    };
  };

  let getEvents = () => {
    return [
      makeEvent('Test', 5, 'Test Message 1'),
      makeEvent('Test 2', 10, 'Test Message 2'),
      makeEvent('Test 3', 20, 'Test Message 3'),
      makeEvent('Test 4', 30, 'Test Message 4')
    ];
  };

  return {
    getEvents
  };
})();
