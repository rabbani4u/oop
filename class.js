class PenDrive {
  constructor(capacity, color, price) {
    this.capacity = capacity;
    this.color = color;
    this.price = price;
  }
}

const ignite = new PenDrive("35GB", "white", 1200);
const pny = new PenDrive("25GB", "Yellow");
console.log(ignite);
console.log(pny);
