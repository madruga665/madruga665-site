import '@testing-library/jest-dom';

if (typeof global.setImmediate === 'undefined') {
  global.setImmediate = (fn, ...args) => setTimeout(fn, 0, ...args);
}
if (typeof global.clearImmediate === 'undefined') {
  global.clearImmediate = (id) => clearTimeout(id);
}
if (typeof global.Request === 'undefined') {
  global.Request = class Request {
    constructor(input, init = {}) {
      this.url = typeof input === 'string' ? input : input.url;
      this.method = init.method || 'GET';
      this.headers = new Headers(init.headers || {});
      this._body = init.body;
    }
    async json() {
      return typeof this._body === 'string' ? JSON.parse(this._body) : this._body;
    }
    async text() {
      return typeof this._body === 'string' ? this._body : JSON.stringify(this._body);
    }
  };
}

if (typeof global.Response === 'undefined') {
  global.Response = class Response {
    constructor(body, init = {}) {
      this.body = body;
      this.status = init.status || 200;
      this.headers = new Headers(init.headers || {});
    }
    async json() {
      return typeof this.body === 'string' ? JSON.parse(this.body) : this.body;
    }
    async text() {
      return typeof this.body === 'string' ? this.body : JSON.stringify(this.body);
    }
  };
}

if (typeof global.Response.json === 'undefined') {
  global.Response.json = function(data, init = {}) {
    const res = new global.Response(JSON.stringify(data), init);
    return res;
  };
}
