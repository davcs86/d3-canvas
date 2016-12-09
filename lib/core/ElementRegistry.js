'use strict';

var _elements = {},
  _ids = require('ids');

/**
 * ElementRegistry description
 *
 * @class
 * @constructor
 */

function ElementRegistry() {
  _elements = {};
}

module.exports = ElementRegistry;

ElementRegistry.prototype.claim = function(element) {
  element.id = element.id || _ids.nextPrefixed(element.type + '_', element);
  return this;
};

ElementRegistry.prototype.register = function(id, element) {
  _elements[id] = element;
};

ElementRegistry.prototype.get = function(id){
  return _elements[id] || false;
};

ElementRegistry.prototype.getAll = function(){
  return _elements || {};
};