export default class Base {
  constructor(deps) {
    this._deps = new Map(deps);
    for (let [k,v] of this._deps.entries()) {
      k=`_${k}`;
      this[k] = v;
    }
  }
  static get(dependenceName){
    return this._deps.get(dependenceName);
  }
}