class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	get Data() {
		return this.data;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		const node = new Node(data);
		if (this.root === null) {
			this.root = node;
		} else {
            let current = this.root,
                parent = null;
			while (true) {
				parent = current;
				if (data < current.data) {
					current = current.left;
					if (current === null) {
						parent.left = node;
						break;
					}
				} else {
					current = current.right;
					if (current === null) {
						parent.right = node;
						break;
					}
				}
			}
		}
    }
    // 删除节点是二叉树的重点。
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node === null) { return null; }
        if (data === node.data) {
            if (node.left === null && node.right === null) {
                // 没有子节点
                return null;
            } else if (node.left !== null && node.right !== null) {
                // 有两个子节点
                const smallestOfRight = this.min(node.right);
                node.data = smallestOfRight.data; // 只保存数据
                node.right = this.removeNode(node.right, smallestOfRight.data);
                return node;
            } else {
                // 有一个子节点
                if (node.left === null) {
                    return node.right;
                } else {
                    return node.left;
                }
            }
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            // data > node.data
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }

    // 先序遍历，左根右
    preOrder(node){
        if(node === null) { return; }
        this.preOrder(node.left);
        console.log(node.Data);
        this.preOrder(node.right);
    }

	// 中序遍历，根左右
	inOrder(node) {
		if (node === null) { return; }
        console.log(node.Data);
        this.inOrder(node.left);
        this.inOrder(node.right);
    }
    
    // 后序遍历，左右根
    postOrder(node){
        if(node === null) { return; }
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.Data);
    }

    min(node = this.root) {
        // let node = this.root;
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    max(node = this.root) {
        // let node = this.root;
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }

    find(data) {
        let node = this.root;
        while (node !== null) {
            if (data === node.data) {
                return node;
            } else if (data < node.data) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return null;
    }
}

(function() {
	const bst = new BinarySearchTree();
	bst.insert(24);
	bst.insert(45);
	bst.insert(16);
	bst.insert(37);
	bst.insert(3);
	bst.insert(99);
	bst.insert(22);
	bst.insert(21);
	bst.insert(25);
	console.dir(bst.root);
	console.log('Preorder traversal: ');
	bst.preOrder(bst.root);
	console.log('Inorder traversal: ');
	bst.inOrder(bst.root);
	console.log('postorder traversal: ');
    bst.postOrder(bst.root);
    console.log('Min/Max: ');
    console.log(bst.min().data); 
    console.log(bst.max().data);
    console.log('********Remove 16********');
    bst.remove(16);
	console.dir(bst.root);
})();
