// QUEUE = FIFO(FIRST IN FIRST OUT)


class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
        }
    }
}

const player = new Queue();
player.enqueue('Rakin');
player.enqueue('Naim');
player.enqueue('Badhon');
player.enqueue('Pial');
console.log(player.queue);

const winner = player.dequeue();
console.log(winner);
console.log(player.queue)