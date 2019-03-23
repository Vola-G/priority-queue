const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap();

	}

	push(data, priority) {


	}

	shift() {

	}

	size() {
		return this.length;
	}

	isEmpty() {
		return this.length === 0;
	}
}

module.exports = PriorityQueue;
