class Promise {
    constructor(fn) {
        this.state = 'pending';// fulfilled rejected pending
        console.log('1111', fn);
    }

    then() {

    }

    reslove() {
        this.state = 'fulfilled';
    }

    reject() {
        this.state = 'rejected';
    }



}

function foo() {

}

let s = new Promise(foo);
