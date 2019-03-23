const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.size = 0;
		this.parentNodes = [];
	}

	push(data, priority) {
		 
	}

	pop() {
		
	}

	detachRoot() {
		let detachedRoot = this.root;
		this.parentNodes.shift();
		this.root = null;
		shiftNodeDown(this.parentNodes[this.parentNodes.length - 1]);
		return detachedRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.size;
	}

	isEmpty() {
		return this.parentNodes.length === 0;
	}

	clear() {
		
	}

	insertNode(node) {
		if (this.parentNodes[1] === 0) {
			this.root = node;
			this.parentNodes.push(node);
		} else {
			this.parentNodes.push(node);
			shiftNodeUp(node);
		}
		
	}

	shiftNodeUp(node) {
		if (!node.parent) {
			return;
		}
		
		if (node.parent.priority < node.priority) {
			
			if (node.parent == this.root) {
				this.root = node;
			} 
			let indexNode = this.parentNodes.indexOf(node);
			let indexParentNode = this.parentNodes.indexOf(node.parent);

			if(indexParentNode > -1) {
				this.parentNodes[indexParentNode] = node;
			}
			if(indexNode > -1) {
				this.parentNodes[indexNode] = node.parent;
			}

			node.swapWithParent();
			this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {
		if (!node) return;
		let maxIndex = this.parentNodes.indexOf(node);
		let leftIndex = 2 * maxIndex;
		if (leftIndex <= this.parentNodes.length && this.parentNodes[leftIndex].priority > this.parentNodes[maxInex].priority) {
			maxIndex = leftIndex;
		} 
		let rightIndex = 2 * maxIndex + 1;
		if (rightIndex <= this.parentNodes.length && this.parentNodes[rightIndex].priority > this.parentNodes[maxInex].priority) {
			maxIndex = rightIndex;
		} 
		if (this.parentNodes.indexOf(node) != maxIndex) {
			
			this.parentNodes[maxIndex].swapWithParent();

			shiftNodeDown(maxIndex);
		}
	}
}

module.exports = MaxHeap;
