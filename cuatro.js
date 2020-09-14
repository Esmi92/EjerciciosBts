//Escribe una función que devuelva el número de hojas de un árbol binario.
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

class Tree {
    constructor() {
        this.root = null
        this.leaves = 0
    }

    add(value) {
        if (this.root == null) {
            this.root = new Node(value, null, null)
            return
        }
        let currentNode = this.root
        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left == null) {
                    currentNode.left = new Node(value, null, null)
                    return
                } else {
                    currentNode = currentNode.left
                }

            } else {
                if (currentNode.right == null) {
                    currentNode.right = new Node(value, null, null)
                    return
                } else {
                    currentNode = currentNode.right
                }

            }
        }
    }

    countLeaves(node){
        if(node.left == null && node.right == null){
            this.leaves = this.leaves + 1 
            return
        }
        if(node.left != null){
            this.countLeaves(node.left)
        }
        if(node.right != null){
            this.countLeaves(node.right)

        }

    }
}

const a = new Tree()

a.add(7)
a.add(5)
a.add(6)
a.add(3)
a.add(9)
a.add(11)
a.add(12)
a.add(8)
a.add(10)
console.log(JSON.stringify(a) + "\n")

a.countLeaves(a.root)

console.log(a.leaves)