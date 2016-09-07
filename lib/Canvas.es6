import { Container } from 'constitute';
import Core from './core/Core';

export class Canvas {
  constructor(config = {}) {
    // create the DI
    let container = new Container();
    this._ = container.constitute(Core);
    this._.init(config);
  }
  destroy() { this._.get('eventBus').emit('d3canvas.destroy'); }
  clear() { this._.get('eventBus').emit('d3canvas.clear'); }
}
