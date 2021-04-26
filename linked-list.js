class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }
    add(value) {
        const newNode = new Node(value);
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
    remove(value) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if (current.value === value) {
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    }
}

const head = new Node(1000);
const list = new LinkedList(head);
list.add(29)
list.add(23)
list.add(88)
list.add(45)
list.add(16)

console.log(JSON.stringify(list))