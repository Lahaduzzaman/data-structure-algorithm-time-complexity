class Dictionary {
    constructor(){
        this.dictionary = {};
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add('Arjun', '0171724344');
phoneBook.add('Siam', '01917052157');
phoneBook.add('Sabila', '01513417070');
console.log(phoneBook.dictionary);

const sabila = phoneBook.get("Sabila")
console.log(sabila);