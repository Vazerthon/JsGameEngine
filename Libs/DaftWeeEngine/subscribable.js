'use strict'

var daftWeeEngine = daftWeeEngine || {};
daftWeeEngine.subscribable = (state) => {
  let subscribe = (func) => {
    state.subscribers.push(func);
  };

  let getSubscribers = () => {
    return state.subscribers;
  };

  return {
    subscribe,
    getSubscribers
  };
};
