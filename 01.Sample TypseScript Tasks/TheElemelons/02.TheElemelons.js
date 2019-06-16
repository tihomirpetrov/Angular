class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}
class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }
    toString() {
        return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }
    toString() {
        return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }
    toString() {
        return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }
    toString() {
        return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = [`Water`, `Fire`, `Earth`, `Air`];
    }
    morph() {
        let a = this.element.shift();
        this.element.push(a);
        return this;
    }
    toString() {
        return `Element: ${this.element[0]}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
let test = new Melon(100, "Test");
let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
