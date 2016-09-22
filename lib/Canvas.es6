import { Container } from 'constitute';
import Core from './core/Core';
export { Base } from './core/Base';

export class Canvas {
  static constitute () { return [ Container ]; }
  constructor(container) {
    // create the DI
    this._ = container.constitute(Core);
  }
  init(config = {}) {
    this._.init(config);
  }
  $get(dependenceName){
    return this._.$get(dependenceName);
  }
  destroy() { this._.get('eventBus').emit('d3canvas.destroy'); }
  clear() { this._.get('eventBus').emit('d3canvas.clear'); }
  resized() { this._.get('eventBus').emit('d3canvas.resize'); }
}
