const linkedList = () => {
    
    const prepend = (value) => {
        let newNode = new Node(value);
        if (size() <= 0) {
            list['head'] = newNode;
        } else {
            let firstNode = head();
            newNode.nextNode = firstNode;
            list[`${size()}`] = firstNode;
            list['head'] = newNode;
        }
    }

    const size = () => {
        return Object.keys(list).length
    }

    const head = () => {
        return list['head']
    }

    const tail = () => {
        return list['tail']
    }

    const append = (value) => {
        if (size() <= 0){
            prepend(value)
        } else {
            let newNode = new Node(value);
            if (size() === 1) {
                let lastNode = head();
                lastNode.nextNode = newNode;
            } else {
                let lastNode = tail();
                lastNode.nextNode = newNode;
                list[`${size()}`] = lastNode;
            }
            list['tail'] = newNode;
        }
    }

    const at = (index, i = 0) => {
        let item = head();
        for (let i = 0; i < index; i++) {
            item = item.nextNode;
        }
        return item;
    }

    const pop = () => {
        let lastNode = tail();
        for (const item in list) {
            if (list[item].nextNode === lastNode) {
                let newLastNode = new Node(list[item].value);
                delete list[item];
                list['tail'] = newLastNode;
            }
        }
    }

    const contains = (value) => {
        let found = false;
        for (const item in list) {
            if (list[item].value === value) {
                found = true;
            }
        }
        return found
    }

    const find = () => {

    }

    const toString = () => {

    }

    const list = {};

    const getList = () => list;

    return { append, prepend, size, head, tail, getList, at, pop, contains, list }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export default linkedList;
export { Node } 