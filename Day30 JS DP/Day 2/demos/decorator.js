class Coffiee {
  cost() {
    return 5;
  }
  description() {
    return "Simple Coffie";
  }
}

class MilkCoffiee {
  constructor(coffiee) {
    this.coffiee = coffiee;
  }
  cost() {
    return ` ${this.coffiee.cost() + 2}$`;
  }
  description() {
    return "Simple Milk Coffie";
  }
}
class SugerCoffiee {
  constructor(coffiee) {
    this.coffiee = coffiee;
  }
  cost() {
    return ` ${this.coffiee.cost() + 1}$`;
  }
  description() {
    return "Suger Coffie";
  }
}

class Button {
  constructor(lable, onClick) {
    this.lable = lable;
    this.onClick = onClick;
  }

  render() {
    const btn = document.createElement("button");
    btn.textContent = this.lable;
    btn.onclick = this.onClick;
    return btn;
  }
}
class ElevatedButton {
  constructor(buttonComponent, level = 4) {
    this.component = buttonComponent;
    this.level = level;
  }
  render() {
    const btn = this.component.render();
    btn.style.boxShadow = `0px ${this.level}px ${this.level}px rgba(0, 0, 0, 0.5)`;
  }
}

let submitButton = new Button("Submit", () => {
  console.log("Submitted Successfully");
});

let shadowbtn = new ElevatedButton(
  new Button("Add To Cart", () => {
    console.log("Added");
  })
);
