[toc]
## this和作用域的关系

1. 变量作用域就是一个变量可以使用的范围

2. 作用域：全局作用域、函数作用域、块级作用域 ，这些作用域都有自己的this值，函数本身没有this值，函数和this没有关系

3. call 和 apply 可以改变函数的作用域

4. 通常情况下，函数在哪里执行，this指的就是运行的所在位置的this值

5. 箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象

6. this永远指向最后调用它的那个对象



## 使用 new 操作符调用构造函数

1. 创建一个新对象
2. 新对象的原型指向构造函数的原型
3. 构造函数的this指向新对象
4. 执行构造函数中的代码（为这个新对象添加属性）
5. 返回 执行构造函数的结果或返回新对象

```javascript
function myNew(constructor,..args) {
    let obj = {};
    obj.__proto__ = constructor.prototype;

    let res = constructor.apply(obj, args);

    return typeof res === 'object' ? res : obj;

}
```

# ES6和ES5类的继承除了写法不同之外还有什么区别？

1. ES5的属性可以枚举，ES6的属性不可枚举

2. ES6会提升但不会赋值

3. ES6 class 不能直接调用

4. ES6 内部方法 无 constructor 无法用 new来调用




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

``` js
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}

```



