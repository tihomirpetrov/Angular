abstract class Melon {
    weight: number;
    melonSort: string;

    protected constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    elementIndex: number;
    text: string ;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
        this.text = `Element: {Water/Fire/Earth/Air}\n Sort: ${melonSort}\n Element Index: ${this.elementIndex}`;
    }
}

class Firemelon extends Melon {
    elementIndex: number;
    text: string ;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
        this.text = `Element: {Water/Fire/Earth/Air}\n Sort: ${melonSort}\n Element Index: ${this.elementIndex}`;
    }
}

class Earthmelon extends Melon {
    elementIndex: number;
    text: string ;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
        this.text = `Element: {Water/Fire/Earth/Air}\n Sort: ${melonSort}\n Element Index: ${this.elementIndex}`;
    }
}

class Airmelon extends Melon {
    elementIndex: number;
    text: string ;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
        this.text = `Element: {Water/Fire/Earth/Air}\n Sort: ${melonSort}\n Element Index: ${this.elementIndex}`;
    }
}
