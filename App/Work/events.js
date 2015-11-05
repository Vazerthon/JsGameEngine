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
      makeEvent('Test', 100, 'Test Message')
    ];
  };

  return {
    getEvents
  };
})();
