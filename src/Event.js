class Event {
  static pressing = false;
  static init(fn) {
    this.eventStart = this.touchEnabled() ? 'ontouchstart' : 'onmousedown';
    this.eventMove = this.touchEnabled() ? 'ontouchmove' : 'onmousemove';
    this.eventEnd = this.touchEnabled() ? 'ontouchend' : 'onmouseup';
    document[this.eventMove] = fn;
    document[this.eventStart] = (e) => this.pressing = true;
    document[this.eventEnd] = (e) => this.pressing = false;
  }
  static touchEnabled() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
}

export default Event;