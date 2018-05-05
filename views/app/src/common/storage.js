class Storage {

  constructor() {
    this.local = localStorage;
    this.session = sessionStorage;
  }

  get(key, type = 'session') {
    switch (type) {
      case 'local':
        return this.local.getItem(key);
      case 'session':
        return this.session.getItem(key);
    }
  }

  set(key, value, type = 'session') {
    switch (type) {
      case 'local':
        this.local.setItem(key, value);
        break;
      case 'session':
        this.session.setItem(key, value);
        break;
    }
  }

}

const store = new Storage();

export default store;