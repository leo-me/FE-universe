[toc]
# 介绍下 npm 模块安装机制，

1.查看node_modules 里是否有相应的包，有的话就不重复加载
2. 如果本地没有对应的包，查询registry对应的地址
3. 拉包到.npm文件中
4. 解压到.node_modules中

