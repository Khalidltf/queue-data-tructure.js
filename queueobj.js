export default class Queueobj {
  #startIndex = 0;
  #endIndex = 0;
  #length = 0;
  #items = {};
  #maxSize = 3;

  constructor(max = 3) {
    this.#maxSize = max;
  }

  size() {
    return this.#length;
  }

  enqueue(item) {
    if (this.isFull())
      throw new Error("the queue is full go off n come in half n hour/");

    if (this.isEmpty()) {
      this.#items[this.#startIndex] = item;
    }

    this.#items[this.#endIndex] = item;
    this.#endIndex++;
    this.#length++;
  }

  dequeue() {
    let item = this.#items[this.#startIndex];
    delete this.#items[this.#startIndex];

    this.#startIndex++;
    this.#length--;

    return item;
  }

  peek() {
    return this.#items[this.#startIndex];
  }

  tail() {
    return this.#items[this.#endIndex - 1];
  }

  isFull() {
    this.#length === this.#maxSize;
  }

  isEmpty() {
    this.#length === 0;
  }

  string() {
    return this.#items;
  }
}
