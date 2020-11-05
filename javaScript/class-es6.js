class A {
    constructor() {
        // super(props);
        this.value = 0;

    }
    add(num) {
        return this.value += num;
    }
}

const a = new A;

let s = a.add(2);

console.log(s);