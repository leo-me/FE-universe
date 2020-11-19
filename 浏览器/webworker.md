## service worker

service worker是用来做离线缓存的， 本质是web woker，web worker是独立与浏览器的主线程的独立线程，与主线程通过 postMessage来通信， 不能访问 window、document，适合处理密集运算型的处理。

1. 通过拦截请求来实现，作用域默认与网页的./相同，您在 //example.com/foo/bar.js 注册一个 Service Worker，则它的默认作用域为 //example.com/foo/
2. 通过路径来匹配，当访问响应的路径时，将结果返回
3. 生命周期：
   installing -> installed -> watting(可跳过) -> activating -> activated -> redundant（failed install or replace by new version）
4. 版本更新问题（不要设置不同的serviceworker名字、service worker 不要缓存）