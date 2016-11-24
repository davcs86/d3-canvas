module.exports = {
  //__depends__: [ require('../draw') ],
  __init__: [ 'canvas' ],
  canvas: [ 'type', require('./Canvas') ],
  eventBus: [
    'type', require('eventemitter3')
    //'type', require('./EventBus')
  ]
};