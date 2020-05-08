# Promise
## 背景
在promise出现之前，javascript的异步都是通过回调来实现的。

回调的问题

1.回调不符合顺序执行的大脑允许逻辑
对程序员来说，编写异步事件代码，特别是当回调是唯一的实现手段时，困难之处就在于这种思考 / 计划的意识流对我们中的绝大多数来说是不自然的。

一个回调地狱的例子：

```js
listen( "click", function handler(evt){
 setTimeout( function request(){
 ajax( "http://some.url.1", function response(text){
 if (text == "hello") {
 handler();
 }
 else if (text == "world") {
 request();
 }
 } );
 }, 500) ;
} );
```

2.回调最大的问题是控制反转，它会导致信任链的完全断裂

支付的例子,回调的第三方工具不可靠的话，不得不创建大量的混乱逻辑

内部工具函数,这等价于那条地缘政治原则：“信任，但要核实"


回调并没有为我们提供任何东西来支持这一点。我们不得不自己构建全部的机制，
而且通常为每个异步回调重复这样的工作最后都成了负担。



# 闭包

## 概念

1.一个包含数据的函数，以环境的形式包含数据

2.包含数据的方式：作用域链

3.函数：一般的函数，作用域链运行完就销毁，闭包对变量还有引用，作用域链不会销毁


## 应用:

管理私有变量和私有方法，将对变量（状态）的变化封装在安全的环境中
将代码封装成一个闭包形式，等待时机成熟的时候再使用，比如实现柯里化和反柯里化
需要注意的,由于闭包内的部分资源无法自动释放，容易造成内存泄露

# New 的执行步骤

1.创建一个空对象，作为要返回的实例
2.将这个空对象的原型指向构造函数的prototype， {}._proto_ = Foo.prototype
3.将空对象赋值给构造函数的this
4.执行构造函数


# 节流(throttle) 防抖(debounce)

## throttle
```js
1.时间戳
function throttle(fn, delay) {
    let preTime = Date.now();
    return function(...args) {
        let now = Date.now();
        if(now - preTime > delay) {
            preTime = now;
            fn.apply(this, args);
        }
    }
}

2.timer
function throttle(fn, delay) {
    let timer = null;
    return function(...args) {
        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                clearTimeout(timer);
                timer = null;
            }, delay);
        }
    }
}


```
## debounce
``` js
function debounce(fn, delay) {
    let timer = null;
    return function(...args) {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

```

# 装饰器
给不同的类或者对象添加统一的属性或方法，但是不改变对象或者类本身

运用：mobx @observer  feedtab：@taxi()

```js
ES6 转 ES5

class Cat {
    say() {
        alert('hello');
    }
}

function Cat() {
    Object.defineProperty(Cat.prototype, 'say', {
        value: function () {alert('hello');},
        enumerable: false,
        configurable: true,
        writable: false
    });
}


类装饰器

function miu(target) {
    target.miu = function() {
        alert('miu');
    }
    return target;
}

@miu
class Cat {
    say() {
        alert('hello');
    }
}

Cat.miu();

等同于:

miu(funcion Cat() {
    Object.defineProperty...
});



属性装饰器
function readonly(target, name, descriptor) {
    discriptor.writable = false;
    return discriptor;
}

class Cat {
    @readonly
    say() {
        console.log("meow ~");
    }
}

var kitty = new Cat();

kitty.say = function() {
    console.log("woof !");
}

kitty.say()    // meow ~

等同于

let descriptor = {
    value: function() {
        console.log("meow ~");
    },
    enumerable: false,
    configurable: true,
    writable: true
};

descriptor = readonly(Cat.prototype, "say", descriptor) || descriptor;

Object.defineProperty(Cat.prototype, "say", descriptor);
```