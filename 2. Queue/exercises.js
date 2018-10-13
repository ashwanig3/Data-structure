// 1. Implement Queue Data Structure using String
// Operations you need to add are
// isEmpty() - returns true if the storage is empty
// enqueue(value) - add a new value and returns the size of the storage
// dequeue() - remove one element and returns the deleted element
// peek() - displays the latest element in the storage
// size() - the size of the storage

class Queue {
  constructor(storage) {
    this.storage = storage;
  }
  isEmpty() {
    if(this.storage.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  enqueue(value) {
    let addValue = `${value}##`;
    let newStr = `${addValue}${this.storage}`;
    this.storage = newStr;
    return this.storage; 
  }
  dequeue() {
    let index = this.storage.lastIndexOf('##');
    let deletedValue = this.storage.substr(index);
    this.storage = this.storage.substr(0, index);
    return deletedValue;
  }
  peek() {
    return this.storage.substr(0,this.storage.indexOf('##'));
  }
  size() {
    let count = 0;
    for(var i = 0; i <= this.storage.length; i++) {
      if(String(this.storage[i]).includes('##')) {
        count++;
      }
    }
    return count +1;
  }

}
// Implement all above methods using Object data type

class Queueobj {
  constructor(capacity) {
    this.capacity = capacity;
    this.i = Object.keys(this).length;
  }

  isEmpty() {
    if(this.i - 1 === 0) {
      return true;
    } else {
      return false;
    }
  }
  enqueue(value) {
    if(Object.keys(this).length - 1 > this.capacity) {
      return "Max Capacity Reached.";
    }
    this[this.i] = value;
    let pushedValue = this[this.i] 
    this.i++;
    return pushedValue;
  }
  dequeue() {
    let delKey = this[this.i - (this.i - 1)];
    delete this[this.i - (this.i - 1)];
    this.i--;
    return delKey;
  }
  peek() {
    return this[this.i - 1];
  }
  size() {
    return this.i - 1;
  }
  contains(value) {
    Object.values(this).forEach(prevValue => {
      if(prevValue === value) {
        return true;
      }
    }); 
  return false;
  }
  sort() {
    return Object.values(this).sort();
  }
}


// Additionals:
// Modify your queue to take max capacity as a parameter and once you exceed the size it should print message
// "Max capacity already reached"


// Make a method named 'contains' which will return true if any of the value matches the value of object.
// queue.contains('hello') - true or false

// Write a method named sort() which sorts by value

