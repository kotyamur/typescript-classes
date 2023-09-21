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
  protected door: boolean = false;
  protected key: Key;
  protected tenants: object[] = [];
  constructor(key: Key) {
    this.key = key;
  }
  comeIn(obP: Person) {
    if (this.door) {
      this.tenants.push(obP);
    }
  }
  abstract openDoor(objKey: Key);
}

class MyHouse extends House {
    constructor(objKey: Key) {
    super(objKey);
    // super();
    // this.key = objKey; 
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

export { };
    
class House1 {
  private tenants: string[] = [];

  constructor(private readonly type: string, private street: string) {}

  public showAddress(this: House1) {
    console.log("Address: " + this.street);
  }

  public showType(this: House1) {
    console.log("House Type: " + this.type);
  }

  public addTenant(tenant: string) {
    this.tenants.push(tenant);
  }

  public showTenants() {
    console.log(this.tenants);
  }
}

class StoneHouse extends House1 {
  private chargeOfTheHouse: string; // Головний в домі

  constructor(street: string, generalTenant: string) {
    super("stone", street); // Виклик батьківського конструктора

    // Додаємо власника квартири.

    this.chargeOfTheHouse = generalTenant;

    this.addTenant(generalTenant);
  }

  public showTenants() {
    console.log("General: " + this.chargeOfTheHouse);

    // Запускаємо батьківський метод showTenants();

      super.showTenants(); //Ми перевизначили цей метод, 
    //щоб спочатку вивести головного жителя,
    // а потім застосували поведінку батьківського методу, яка нас влаштовує.
  }
}

const stoneHouse = new StoneHouse("Stone-world", "Max");

stoneHouse.addTenant("Anton");
stoneHouse.addTenant("Nikita");

stoneHouse.showTenants();
stoneHouse.showType();
stoneHouse.showAddress();
