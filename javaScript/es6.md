[toc]

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


# 非匿名自执行函数，函数名只读
```js
var b = 10;
(function b(){
    b = 20;
    console.log(b);
})();
```

输出： function b(){...}
