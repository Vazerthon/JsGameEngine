'use strict'

var factories = factories || {};
factories.subscribable = () => {
  let subscribers = [];

  let subscribe = (func) => {
    subscribers.push(func);
  };

  let getSubscribers = () => {
    return subscribers;
  };

  return {
    subscribe: subscribe,
    getSubscribers: getSubscribers
  }
};
