## this和作用域的关系

1. 变量作用域就是一个变量可以使用的范围

2. 作用域：全局作用域、函数作用域、块级作用域 ，这些作用域都有自己的this值，函数本身没有this值，函数和this没有关系

3. call 和 apply 可以改变函数的作用域

4. 通常情况下，函数在哪里执行，this指的就是运行的所在位置的this值

5. 箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象

6. this总是指向调用它的对象




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