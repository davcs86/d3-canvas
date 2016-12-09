'use strict';

/**
 * ElementBuilder description
 *
 * @class
 * @constructor
 *
 */

function ElementBuilder(elementRegistry) {
  this._elementRegistry = elementRegistry;
}

ElementBuilder.$inject = [
  'elementRegistry'
];

module.exports = ElementBuilder;

ElementBuilder.prototype.create = function(definition, builder, builderContext){
  this._elementRegistry.claim(definition);
  if (!this._elementRegistry.get(definition.id)) {
    this._elementRegistry.register(
      definition.id,
      builder.call(builderContext, definition)
    );
  } else {
      builder.call(builderContext, definition, true);
  }
};