class LinkedList {
    constructor() {
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

module.exports = {LinkedList, Node}