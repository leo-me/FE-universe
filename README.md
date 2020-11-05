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

``` js
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}

```

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
    value: function() {****
        console.log("meow ~");
    },
    enumerable: false,
    configurable: true,
    writable: true
};

descriptor = readonly(Cat.prototype, "say", descriptor) || descriptor;

Object.defineProperty(Cat.prototype, "say", descriptor);
```


# https 非对称加密过程


# 怎么监听 webpack 的生命周期中plugin怎么去监听事件 ？


# loader 解析 webpack的打包过程？


# v8的编译过程：javascript的执行过程

词法-语法-AST+执行上下文-字节码-机器码

为什么需要机器码：机器码的执行效率很高，但是占用内存较多，随着v8手机上的普及，内存占用问题暴露出来了，因此重构了

# react 的合成事件, fiber是什么？ 怎么写？


# 异步加载script的方式
1.asyn
2.defer(async 和defer 同时存在时，defer优先级要比asyn要高)
3.动态写入脚本： 动态加载即通过js往html中插入script标签
4.通过xhr加载,受同源策略限制
```js
    var xhr = new XMLHttpRequest();
    xhr.open("get", "js/defer.js",true)
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            eval(xhr.responseText);
        }
    }

```


# 浏览器渲染过程

1. 生成dom树（节点树），生成样式表
2. 计算节点样式属性
3. 创建布局树
4. 布局计算
5. 绘制（分层、图层绘制、栅格化、显示）


# 跨越解决方案

同源协议：同协议、同域名、同端口

## 简单请求：
(1)使用下列方法之一：

head
get
post

(2)请求的Header是

Accept
Accept-Language
Content-Language
Content-Type: 只限于三个值：application/x-www-form-urlencoded、multipart/form-data、text/plain


## 非简单请求：有预检请求
1）Access-Control-Request-Method：必选
  用来列出浏览器的CORS请求会用到哪些HTTP方法，上例是PUT。
2）Access-Control-Request-Headers：可选


## 解决方案

1. jsonp
   ```js
   var script = document.createElement('script');
   script.src = 'http:www.124.com/jsonp?callback=handlecallback';
   document.appendChild(script);

   // 回调函数
   handlecallback(res) {
       alert(JSON.parse(res));
   }
   ```
   实现一个jsonp

    ```js
   function jsonp({ url, params, callback }) {
     return new Promise((resolve, reject) => {
       let script = document.createElement('script')
       window[callback] = function(data) {
         resolve(data)
         document.body.removeChild(script)
       }
       params = { ...params, callback } // wd=b&callback=show
       let arrs = []
       for (let key in params) {
         arrs.push(`${key}=${params[key]}`)
       }
       script.src = `${url}?${arrs.join('&')}`
       document.body.appendChild(script)
     })
   }
   jsonp({
     url: 'http://localhost:3000/say',
     params: { wd: 'Iloveyou' },
     callback: 'show'
   }).then(data => {
     console.log(data)
   })
    ```

1. proxy

nginx 代理，node中间层

3. 后端设置跨越跨越

Access-Control-Allow-Origin

## 本地的跨越方式
4. postMessage，不限制任何东西

5. iframe


# ES6 模块导出规范：export import

```js
1.default 可以指定任意名字
a.js
export default function get() {

}

b.js
import ffff from 'a.js'

2. 常规用法

a.js

function foo() {

}

export {foo}

b.js

import {foo} from 'a.js'

```





# 链式调用
方法链一般适合对一个对象进行连续操作(集中在一句代码)。一定程度上可以减少代码量，缺点是它占用了函数的返回值。

add(1,3).max(2,3);

```js

class Math {
   constructor() {
       this.value = 0;
   }

    add(number) {
        this.value += number;
        return this;
    }
}

```



# webpack 打包编译过程

术语：

entry: 打包入口

loader: 对文件进行转换，如：cssloader、url-loader、babel-loader

plugin: 解决 loader 无法实现的其他事，loader 解析过程中会广播事件，通过监听这些事件做一些处理。
更好的一个关于plugin的解释：Plugin 是用来扩展 Webpack 功能的，通过在构建流程里注入钩子实现

module: 模块化，文件更小的模块化，易于测试

chunk: 可以用于代码分离，按需加载

vender：第三方包，可用于做长效缓存

流程：

从入口文件递归解析出所有的依赖



1.loader解析过程

规则1: Loader 的执行顺序是由后到前的


2.webpack 的生命周期中plugin怎么去监听事件




# https 非对称加密过程


# 偏函数 和 柯里化

偏函数：把函数的参数转换为两部分，链式调用

```js
function link() {
    let value = 0;
    return function(b) {
        value += a;
        return this;
    }
}

```


柯里化： 函数多参数都转换成一个参数一个参数的函数调用

```js
function currying(fn, ...args1) {
    return function(...args2) {
        currying(fn,...args1, ...args2);
    }
}

```


# flex

flex：0 1 auto； 根据自身的宽高来确定尺寸，当尺寸大于容器宽度时，会缩短自身来适应容器，但是不会伸展自身来适应容器剩余的宽度

0是 flex-grow：

1是 flex-shrink

auto是 flex-basis

intial： 0 1 auto

auto： 1 1 auto；

none：0 0 auto


# Set  Map  weakSet  weakMap


## Set

类似数组，没有key，value即key

唯一，不可重复

可遍历 Object.keys Object.values Object.entries

add、delete、has

## weakSet

成员都是对象

弱引用（可被GC回收）

不可遍历

## map

类似于key-value的集合

可遍历

get、set、delete、has


## weakMap

弱引用（可被GC回收）

不可遍历

只接受对象为key


# 深度优先和广度优先

## 深度优先遍历
回溯



## 广度优先遍历
回溯

# 深度优先和广度优先来实现一个深拷贝函数




# ES6和ES5类的继承除了写法不同之外还有什么区别？

## ES5的属性可以枚举，ES6的属性不可枚举

## ES6会提升但不会赋值

## ES6 class 不能直接调用

## ES6 内部方法 无 constructor 无法用 new来调用


# 非匿名自执行函数，函数名只读
```js
var b = 10;
(function b(){
    b = 20;
    console.log(b);
})();
```

输出： function b(){...}



# http2多路复用

HTTP/2 复用 TCP 连接，在一个连接里，客户端和浏览器都可以同时发送多个请求或回应，而且不用按照顺序一一对应。


# 介绍下 npm 模块安装机制，

1.查看node_modules 里是否有相应的包，有的话就不重复加载
2. 如果本地没有对应的包，查询registry对应的地址
3. 拉包到.npm文件中
4. 解压到.node_modules中


# 算法题
## '1, 3, 5, 7, 8, 10' =>  1,3,5,7~8,10

function getContinueNum(string) {
  let arr = string.split(",");
  let res = [];
  let start = 0;
  let end = 1;
  arr = arr.map(item => +item);

  for (let i = 0; i < arr.length; i++) {
    if(i === arr.length - 1) {
        if(start === i) {
            res.push(`${arr[start]}`)
        } else {
            res.push(`${arr[start]}~${arr[i]}`)
        }
    } else {
        if(arr[i]+1 === arr[end]) {
            end++;
        } else if(arr[i]+1 < arr[end]) {
          if(start === i) {
              res.push(`${arr[start]}`)
          } else {
              res.push(`${arr[start]}~${arr[i]}`)
          }
          start=end;
          end++;
        }
    }
  }
  return res.join(',');
}

getContinueNum('1, 3, 5, 7, 8, 10');


const nums1 = [1, 2, 3, 5, 7, 8, 10];
function simplifyStr(num) {
  var result = [];
  var temp = num[0]
  num.forEach((value, index) => {
    if (value + 1 !== num[index + 1]) {
      if (temp !== value) {
        result.push(`${temp}~${value}`)
      } else {
        result.push(`${value}`)
      }
      temp = num[index + 1]
    }
  })
  return result;
}
console.log(simplifyStr(nums1).join(','))