function trueCurrying(fn, ...args) {
  if (args.length >= fn.length) {

    return fn(...args);
  }

  return function(...args2) {
    return trueCurrying(fn, ...args, ...args2);
  };
}

function curry(fn, ...args1) {
    return function(...args2) {
        return fn(...args1, ...args2)
    }
}

function add(x, y) {
  return x + y;
}

// let t = trueCurrying(add, 2);

// t(3);

// let s = curry(add, 2);



// console.log(s(3));
// console.log(s(2));


// function link() {
//     let value = 0;
//     this.add =  (x, y) =>{
//         value = x+y;
//         return this;
//     }
//     return this;
// }

// let s = link().add(2,4);
// s.add(4,5);

// console.log(s.add(4,5));

// es6 链式调用

// class link {
//     constructor() {
//         // this.foo = new link();
//         this.value = 0;
//     }
//     add(x, y) {
//         this.value = x+y;
//         return this;
//     }

//     multi(x,y) {
//         this.value = x*y;
//         return this;
//     }

// }

// 一个简单的 es5 链式调用 的例子

function link() {

}

link.prototype.value = 0;

link.prototype.add = function(x,y) {
    this.value += x+y;
    return this;
}

link.prototype.multi = function(x, y) {
    this.value += x*y;
    return this;
}


let s = new link();
let res = s.add(2,4).multi(3,4).add(5,6);


console.log('111', s, res);


