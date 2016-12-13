'use strict';

var Ids = require('ids');

/**
 * ElementRegistry description
 *
 * @class
 * @constructor
 */

function ElementRegistry() {
  this._ids = new Ids([1, 24, 86]);
  this._elements = {};
}

module.exports = ElementRegistry;

ElementRegistry.prototype.claim = function(element) {
  element.id = element.id || this._ids.nextPrefixed(element.$descriptor.ns.localName + '_', element);
  this._ids.claim(element.id, element);
  return this;
};

ElementRegistry.prototype.register = function(id, element) {
  this._elements[id] = element;
};

ElementRegistry.prototype.unClaim = function(element) {
  this._ids.unclaim(element.id);
};

ElementRegistry.prototype.unRegister = function(element) {
  delete this._elements[element.id];
};

ElementRegistry.prototype.get = function(id){
  return this._elements[id] || false;
};

ElementRegistry.prototype.getAll = function(){
  return this._elements || {};
};