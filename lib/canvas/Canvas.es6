import Base from '../base/Base';
import EventEmitter from 'events';
import { Value } from 'constitute';
import * as d3 from 'd3';
import { assign } from 'lodash/object';
import { isNumber } from 'lodash/lang';

const Config = new Value({});

let ensurePx = (number) => {
  return isNumber(number) ? number + 'px' : number;
};

export class Canvas extends Base {
  static constitute() { return [ Config, EventEmitter ]; }
  constructor(config, eventBus) {
    super(new Map([
       ['config', config],
       ['eventBus', eventBus],
    ]));
    this.init();
  }
  init(){
    this._container = this.createContainer();
    let svg = this._drawingLayer = this._svg = d3.select(this._container).append('svg');

    svg.attr('fill', 'transparent')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('pointer-events', 'all');

    this._eventBus.on('d3canvas.init', () => {

      /**
       * An event indicating that the canvas is ready to be drawn on.
       *
       * @memberOf Canvas
       *
       * @event canvas.init
       *
       * @type {Object}
       * @property {Snap<SVGSVGElement>} svg the created svg element
       */
      this._eventBus.emit('canvas.init', {
        svg: svg
      });

      // fire this in order for certain components to check
      // if they need to be adjusted due the canvas size
      this.resized();

    });

    this._eventBus.emit('d3canvas.init');
  }
  createContainer(){
    let options = assign({}, { width: '100%', height: '100%' }, this._config);

    let container = options.container || document.body;

    // create a <div> around the svg element with the respective size
    // this way we can always get the correct container size
    // (this is impossible for <svg> elements at the moment)
    var parent = document.createElement('div');
    parent.setAttribute('class', 'djs-container');

    assign(parent.style, {
      position: 'absolute',
      overflow: 'hidden',
      width: ensurePx(options.width),
      height: ensurePx(options.height)
    });

    container.appendChild(parent);

    return parent;
  }
  resized(){
    this._eventBus.emit('canvas.resized');
  }
}