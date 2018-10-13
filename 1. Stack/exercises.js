// 1. Implement Stack Data Structure using string data type
// Operations you need to add are
// isEmpty() - returns true if the storage is empty
// push(value) - add a new value and returns the size of the storage
// pop() - remove one element and returns the deleted element
// peek() - displays the last pushed element in the storage
// size() - the size of the storage

class Stack {
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
  push(value) {
    this.storage += `##${value}`;
    return this.storage;
  }
  pop() {
    var lastValue = this.storage.lastIndexOf("##");
    var deletedVal = this.storage.slice(lastValue)
    this.storage = this.storage.substr(0, lastValue);
    return deletedVal;
  }
  peek() {
    return this.storage.substr(this.storage.lastIndexOf('##')); 
  }
  size() {
    let count = 0;
    for(let i = 0; i <= this.storage.length; i++) {
      if(String(this.storage[i]).includes('##')) {
        count++;
      }
    }
  return count+1;
  }
}

// 2. Implement every method given above using the 'object' data type.

class Stackobj {
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
  push(value) {
    if(Object.keys(this).length - 1 > this.capacity) {
      return "Max Capacity Reached.";
    }
    this[this.i] = value;
    let pushedValue = this[this.i] 
    this.i++;
    return pushedValue;
  }
   pop() {
    let delKey = this[this.i - 1];
    delete this[this.i - 1];
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
// Modify your stack to take max capacity as a parameter and once you exceed the size it should print message
// "Max capacity already reached. Remove element before adding a new one."


// Make a method named 'contains' which will return true if any of the value matches the value of object.
// stack.contains('hello') - true or false

// Write a method named sort() which sorts by value


// Use This For Testing

// var myStack = new Stack(3);
// console.log(myStack.push('a'), 'should be 1');
// console.log(myStack.push('b'), 'should be 2');
// console.log(myStack.push('c'), 'should be 3');
// console.log(myStack.push('d'), 'Max capacity already reached');
// console.log(myStack.pop(), 'should be c');
// console.log(myStack.count(), 'should be 2');
// console.log(myStack.peek(), 'should be b');
// console.log(myStack.count(), 'should be 2');