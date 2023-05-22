const EventEmitter = require('events');

// Create event emitters for user events
const addEventEmitter = new EventEmitter();
const deleteEventEmitter = new EventEmitter();

module.exports = {
  addEventEmitter,
  deleteEventEmitter,
};
