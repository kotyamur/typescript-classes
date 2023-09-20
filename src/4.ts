class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(objKey: Key) {
    this.key = objKey;
  }
  getKey() {
    return this.key;
  }
}

abstract class House {
  door: boolean = false;
  key: Key;
  tenants: object[] = [];
  comeIn(obP: Person) {
    if (this.door) {
      this.tenants.push(obP);
    }
  }
  abstract openDoor(objKey:Key);
}

class MyHouse extends House {
  constructor(objKey: Key) {
    super();
    this.key = objKey; 
  }
  openDoor(objKey: Key) {
    if (objKey.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
