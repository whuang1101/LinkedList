class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    prepend(node){
        node.next = this.head;
        this.head = node;
    }
    append(node){
        if (this.head === null){
            node.next = null;
            this.head = node;
        }
        else{
            let lastNode = findLastNode(this.head);
            lastNode.next = node;
            this.tail = node;
            node.next = null;
        }
    }
    size(){
        return findSize(this.head);
    }
    at(index){
        return findNode(index, this.head)
    }
    pop(){
        let secondToLast = findSecondToLast(this.head);
        this.tail = secondToLast;
        secondToLast.next = null;

    }
    toString(){
        let newString = ""
        let temp = this.head;
        while(this.head !== null){
            newString += `(${this.head.value}) -> `
            this.head = this.head.next;
        }
        newString += "null";
        this.head = temp;
        return newString;
    }
    contains(value){
        return containsValue(value,this.head);
    }
    find(value){
        return findIndex(value,this.head);
    }
    insertAt(value,index){
        let newNode = new Node(value);
        let previousIndex = findNode(index-1,this.head)
        newNode.next = previousIndex.next;
        previousIndex.next = newNode
    }
    removeAt(index){
        let previousIndex = findNode(index-1,this.head);
        let tempNode = previousIndex.next.next;
        previousIndex.next = tempNode;
        console.log(findNode(index-1,this.head));
    }
}


function containsValue(value, head){
    if(head.value === value){
        return true
    }
    if (head.next === null){
        return false;
    }
    return containsValue(value, head.next);
}
function findIndex(value, head,index = 0){
    if(head.value === value){
        return index
    }
    if (head.next === null){
        return null;
    }
    return findIndex(value, head.next, index+1);
}
function findSecondToLast(head){
    if (head.next.next === null){
        return head;
    }
    return findSecondToLast(head.next);
}

function findLastNode(head){
    if (head.next === null){
        return head
    }
    return findLastNode(head.next);
}
function findSize(head, size = 1){
    if (head === null){
        return 0;
    }
    if(head.next ===null){
        return size;
    }
    return findSize(head.next,size+1);
}
function findNode(index,head){
    if(index === 0){
        return head;
    }
    return findNode(index-1, head.next);
}
class Node {
    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }
}

let linkedList = new LinkedList();
let node1 = new Node(20);
let node2 = new Node(30);
let node3 = new Node(40);
let node4 = new Node(50);
linkedList.append(node1);
linkedList.append(node2);
linkedList.append(node3);
linkedList.append(node4);
console.log(linkedList.toString());
linkedList.pop();
console.log(linkedList.toString());
console.log(linkedList.contains(40));
console.log(linkedList.find(40));
linkedList.insertAt(25,1);
linkedList.insertAt(35,3);
linkedList.removeAt(3);
console.log(linkedList.toString())

// console.log(linkedList)
// console.log(linkedList.size())
// console.log(linkedList.head)
// console.log(linkedList.tail)
// console.log(linkedList.at(3))
// linkedList.pop();
// console.log(linkedList)