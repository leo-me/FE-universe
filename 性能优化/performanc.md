[toc]

# window.performance

window.performance是浏览器提供的一个用于查看网页性能数据的API，主要包含三项：timing、memory、navigation，timeOrigin，页面起始时间。

## 1. timing，页面各类指标完成时间点，包含

```
connectEnd: 1606053727331
connectStart: 1606053727331
domComplete: 1606053727894
domContentLoadedEventEnd: 1606053727840
domContentLoadedEventStart: 1606053727840
domInteractive: 1606053727823
domLoading: 1606053727707
domainLookupEnd: 1606053727331
domainLookupStart: 1606053727331
fetchStart: 1606053727331
loadEventEnd: 1606053727895
loadEventStart: 1606053727895
navigationStart: 1606053727328
redirectEnd: 0
redirectStart: 0
requestStart: 1606053727352
responseEnd: 1606053727718
responseStart: 1606053727696
secureConnectionStart: 0
unloadEventEnd: 1606053727704
unloadEventStart: 1606053727704

```


1. 使用 performance.getEntries() 获取所有资源请求的时间数据
2. performance.now() 精确计算程序执行时间,返回百万分之已秒，date.now unix时间，计算可能阻塞
3. 使用 performance.mark() 也可以精确计算程序执行时间
4. window.performance.measure(name, mark1, mark2);
5. clearMarks('mark'), 不传清除所有，clearMeasures('measure'), 不传清除所有





## 2. memory 内存使用情况
```
jsHeapSizeLimit: 2172649472 - 内存大小限制
totalJSHeapSize: 9289424 - 可使用内存
usedJSHeapSize: 7731572 - 已使用内存

```


## 3.navigation 从哪里来，路由信息。