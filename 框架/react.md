[toc]

# react 的合成事件, fiber是什么？ 怎么写？




# virtual DOM 的原理，与 vue的有什么区别

1. 虚拟 dom 是react 实现框架的核心，react 通过 一个javascript 对象 来描述 html中的dom结构。这个对象通常包含：children、data、property 三类属性。
2. react 通过 这个javascript 对象 来生成最终浏览器的html 节点
3. react 视图更新也是通过 虚拟dom 的 比较来实现的，一旦数据有更新，会用新生成的虚拟dom 和 当前视图的虚拟 dom 进行对比，只去更新有变化的部分。
4. 与vue的虚拟dom的区别：react 的虚拟dom 是自上而下全部的组件的虚拟dom的watch，vue的虚拟dom是局部的基于单个组件的watch。