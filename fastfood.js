class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.price = 0;
    this.calories = 0;
    this.toppings = [];
  }
  addTopping(topping) {
    if (topping == 'spice' || topping == 'mayo') {
      this.toppings.push(topping);
    } else return 'Topping not found';
  }
  removeTopping(topping) {
    this.toppings.forEach((item, index) => {
      if (item == topping) {
        this.toppings.splice(index, 1);
      }
    });
  }
  getToppings() {
    return this.toppings;
  }
  getSize() {
    return this.size;
  }
  getStuffing() {
    return this.stuffing;
  }
  calculatePrice() {
    if (this.size == 'small') this.price += 50;
    else if (this.size == 'big') this.price += 100;
    if (this.stuffing == 'cheese') this.price += 10;
    else if (this.stuffing == 'salad') this.price += 20;
    else if (this.stuffing == 'potato') this.price += 15;
    this.toppings.forEach((item) => {
      if (item == 'spice') this.price += 15;
      else if (item == 'mayo') this.price += 20;
    });
    return this.price;
  }
  calculateCalories() {
    if (this.size == 'small') this.calories += 20;
    else if (this.size == 'big') this.calories += 5;
    if (this.stuffing == 'cheese') this.calories += 20;
    else if (this.stuffing == 'salad') this.calories += 5;
    else if (this.stuffing == 'potato') this.calories += 10;
    this.toppings.forEach((item) => {
      if (item == 'spice') this.calories += 15;
      else if (item == 'mayo') this.calories += 20;
    });
    return this.calories;
  }
}
