
class DummySocket {
  constructor() {
    this._listeners = [];
  }

  on(path, handler) {
    this._listeners.push({ path, handler });
  }

  getByPath(search) {
    return this._listeners.find(({ path, handler }) => path === search);
  }

  get listenerLength() {
    return this._listeners.length;
  }
}

module.exports = DummySocket;