// Escribe una función que dado un 
// árbol binario A, obtenga una copia B del mismo. 

// Cuando una funciòn se llama asì misma se llama recursividad y puede iterar toda la función si la programas correctamente

class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left //minor 
        this.right = right //bigger
    }
}

class Tree {
    constructor() {
        this.root = null
        this.countNodes = 0
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

    contains(value) {
        let currentNode = this.root
        while (currentNode != null) {
            if (value == currentNode.value) {
                return true;
            } else {
                if (value < currentNode.value) {
                    currentNode = currentNode.left
                } else {
                    currentNode = currentNode.right
                }
            }
        }
        return false
    }

    recorrer(node, tree) {
        tree.add(node.value)
        if (node.left != null) {
            this.recorrer(node.left, tree)
        }
        if (node.right != null) {
            this.recorrer(node.right, tree)
        }
    }

    copy() {
        const b = new Tree()
        this.recorrer(this.root, b)
        return b
    }

    //Escribe una función que visualice los nodos que están en el nivel n de un árbol binario. 

    recorrerLevels(node, level, levelSearch) {
        if (level == levelSearch) {
            this.countNodes = this.countNodes + 1
            return
        }
        if (node.left != null) {
            this.recorrerLevels(node.left, level + 1, levelSearch)
        }
        if (node.right != null) {
            this.recorrerLevels(node.right, level + 1, levelSearch)
        }
    }

    countNode(n) {
        this.recorrerLevels(this.root, 0, n)
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

console.log(JSON.stringify(a.copy()))

a.countNode(2)

console.log(a.countNodes)




