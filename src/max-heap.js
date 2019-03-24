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
		if(this.size === 0) {
			return;
		}
		if (!this.root) {
			detachRoot(this.root);
			
		}
		
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
		return this.parentNodes.length;
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
		if (node && node.left != null) {
			let maxIndex = this.parentNodes.indexOf(node);
			let leftIndex = this.parentNodes.indexOf(node.left);
			let maxPriorityNode;
			if (leftIndex <= this.parentNodes.length && node.left.priority > node.priority) {
				maxIndex = leftIndex;
				maxPriorityNode = node.left;
			} 
			let rightIndex = this.parentNodes.indexOf(node.right);
			if (node.right && rightIndex <= this.parentNodes.length && node.right.priority > node.left.priority) {
				maxIndex = rightIndex;
				maxPriorityNode = node.right;
			} 
			if (maxIndex == -1) {
				if (this.root == node) {
					this.root = maxPriorityNode;;
				}
				maxPriorityNode.swapWithParent();
				this.shiftNodeDown(node);
			}
			if (this.parentNodes.indexOf(node) != maxIndex && node.left != null) {
				let tmpParentIndex = this.parentNodes.indexOf(node);
				let tmpChild = this.parentNodes[maxIndex];
				if (this.root == node) {
					this.root = tmpChild;
					this.parentNodes[maxIndex] = node;
				} else {
					if (maxIndex > -1) {
						this.parentNodes[maxIndex] = node;
					}
					if (tmpParentIndex > -1) {
					this.parentNodes[tmpParentIndex] = tmpChild;
					}	
				}
	
				tmpChild.swapWithParent();

				this.shiftNodeDown(node);
				
			}
		}
		return;

	}
}

module.exports = MaxHeap;
