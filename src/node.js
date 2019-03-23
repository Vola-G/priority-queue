class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;

	}

	appendChild(node) {
		if (!node) {
			return;
		}

		if (!this.left) {
			this.left = node;
			node.parent = this;
		} else if (!this.right) {
			this.right = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if (!node) {
			return;
		}

		if (node === this.left) {
			node.parent = null;
			this.left = null;
		} else if (node === this.right) {
			node.parent = null;
			this.right = null;
		} else {
			 throw new Error('Passed node is not a child of this node');
		}
	}

	remove() {
		if(this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent) {
			let currentNode = this;
			let currentLeft = this.left;
			let currentRight = this.right;
			let currentNodeParent = this.parent;
			let currentNodeParentLeft = this.parent.left;
			let currentNodeParentRight = this.parent.right;
			let currentNodeParentParent = this.parent.parent;
			
			if (currentLeft) {
				currentLeft.remove();
			};
			if (currentRight) {
				currentRight.remove();
			};
			if (currentNodeParentLeft) {
				currentNodeParentLeft.remove();
			}
			if (currentNodeParentRight) {
				currentNodeParentRight.remove();
			}

			if (currentNodeParentParent) {
				currentNodeParent.remove();
				currentNodeParentParent.appendChild(currentNode);	
			}
			
			if (currentNodeParentLeft === currentNode) {
				currentNode.appendChild(currentNodeParent);
				currentNode.appendChild(currentNodeParentRight)
			}

			if (currentNodeParentRight === currentNode) {
				currentNode.appendChild(currentNodeParent);
				currentNode.appendChild(currentNodeParentLeft)
			}

			currentNodeParent.appendChild(currentLeft);
			currentNodeParent.appendChild(currentRight);
		}
	}
}
module.exports = Node;
