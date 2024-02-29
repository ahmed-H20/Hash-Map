class HashMap{
    constructor(){
        this.size = 0;
        this.items = {};
    }
    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        
        return hashCode;
    }
      
    // Takes two arguments, the first is a key and the second is a value that is assigned to this key.
    set(key, value){
        if(!this.items.hasOwnProperty(key)){
            this.size++;
        }
        this.items[key] = value;
    }

    // Takes one argument as a key and returns the value that is assigned to this key.
    get(key){
        return this.items[key];
    }

    // Takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
    has(key){
        return this.items.hasOwnProperty(key);
    }

    //  It should remove the entry with that key 
    remove(key){
        if(this.items.hasOwnProperty(key)){
            this.size--;
            delete this.items[key];
            return true;
        }
        return false;
    }

    //  returns the number of stored keys in the hash map.
    length(){
        return this.size;
    }

    // removes all entries in the hash map.
    clear(){
        this.items = {};
    }

    //(Test and write agin !!) returns an array containing all the keys inside the hash map.
    keys(){
        let arr = []
        for (let i=0; i<this.size; i++){
            this.items[key];
        }
    }

    // eturns an array containing all the values.
    values(){

    }

    // returns an array that contains each key, value pair. 
    entries(){

    }
}

const li = new HashMap;
console.log(li.keys());