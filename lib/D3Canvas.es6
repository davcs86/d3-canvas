import { Container } from 'constitute';
import { Canvas } from './canvas/Canvas';

export default class D3Canvas {
  constructor(config = {}) {
    // create the DI
    let container = new Container();
    this._canvas = container.constitute(Canvas);
    this._canvas.init(config);
  }
  destroy() { this._canvas.get('eventBus').emit('d3canvas.destroy'); }
  clear() { this._canvas.get('eventBus').emit('d3canvas.clear'); }
}
