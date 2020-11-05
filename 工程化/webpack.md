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
