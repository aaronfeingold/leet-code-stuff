class Animal {
    belly = [];
    eat() {
      this.belly.push('food');
    }
    barf () {
        console.log(this.belly)
    }
}
let a = new Animal();
a.eat();
a.barf();
