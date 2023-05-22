const express = require('express');
const router = express.Router();

const eventConfig = require('../config/eventConfig');
// const EventSource = require('eventsource');

// SSE handler for user events
router.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Create EventSource instance for the client
  const clientEventSource = res;

  // Register event listeners for user events
  eventConfig.addEventEmitter.on('userAdded', (data) => {
    clientEventSource.write(`event: userAdded\n`);
    clientEventSource.write(`data: ${JSON.stringify(data)}\n\n`);
  });

  eventConfig.deleteEventEmitter.on('userDeleted', (data) => {
    clientEventSource.write(`event: userDeleted\n`);
    clientEventSource.write(`data: ${JSON.stringify(data)}\n\n`);
  });

  // Handle SSE connection close
  req.on('close', () => {
    // Clean up event listeners for the client
    eventConfig.addEventEmitter.removeAllListeners('userAdded');
    eventConfig.deleteEventEmitter.removeAllListeners('userDeleted');
  });
});

module.exports = router;
