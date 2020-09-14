class Node{
    constructor(value,left,right){
        this.value=value
        this.left=left // minor
        this.right=right //bigger
    }
}

class Tree{
    constructor(){
        this.root=null
        this.info= []
    }
    add(value){
        if(this.root==null){
            this.root= new Node(value,null,null)
            return
        }
        let currentNode=this.root
        while(true){
            if(value<currentNode.value){
                if(currentNode.left==null){
                    currentNode.left=new Node(value,null,null)
                    return;
                }else{
                    currentNode=currentNode.left
                }
            }else{
                if(currentNode.right==null){
                    currentNode.right=new Node(value,null,null)
                    return;
                }else{
                    currentNode=currentNode.right
                }
            }
        }

    }

    contains(value){
        let currentNode=this.root
        while(currentNode !=null){
            if(currentNode.value=value){
                return true;
            }else{
                if(value<currentNode.value){
                    currentNode = currentNode.left
                } else{
                    currentNode=currentNode.right
                }
            }
        }
        return false;
    }

    toArray(node) {
        this.info.push(node.value)
        if (node.left != null) {
            this.toArray(node.left)
        }
        if (node.right != null) {
            this.toArray(node.right)
        }
    }


}

const a = new Tree()
const b = new Tree()
const c = new Tree()

a.add(7)
a.add(5)
a.add(6)
a.add(3)
a.add(9)
a.add(11)
a.add(12)
a.add(8)
a.add(10)
a.toArray(a.root)

b.add(7)
b.add(5)
b.add(6)
b.add(3)
b.add(9)
b.add(11)
b.add(12)
b.add(8)
b.add(10)
b.toArray(b.root)

c.add(7)
c.add(5)
c.add(6)
c.add(3)
c.add(9)
c.add(11)
c.add(8)
c.add(10)
c.toArray(c.root)

console.log(a.info)
console.log(b.info)
console.log(c.info)

function compare(uno,dos){
    if(uno.length !== dos.length){
        return false
    }
    for(let i = 0; i<uno.length; i++){
        if(uno[i]!=dos[i]){
           return false
        }
    }
    return true
}

console.log(compare(a.info,b.info))
console.log(compare(a.info,c.info))