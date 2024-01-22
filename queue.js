export default class Queue {
  #list = [];
  #first = null;
  #last = null;
  #maxSize = 5;

  constructor(max = 5) {
    this.#maxSize = max;
  }

  size() {
    return this.#list.length;
  }

  enqueue(item) {
    if (this.isFull()) throw new Error("status code : the list is Full");
    if (this.isEmpty()) {
      this.#first = item;
    }

    this.#list.push(item);
    this.#last = item;
  }

  dequeue() {
    let item = this.#list.shift();
    this.#first = this.#list[0];
    return item;
  }

  peek() {
    return this.#first;
  }

  tail() {
    return this.#last;
  }

  isFull() {
    return this.#list.length === this.#maxSize;
  }

  isEmpty() {
    return this.#list.length === 0;
  }

  string() {
    return this.#list;
  }
}
