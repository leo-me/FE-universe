### 压缩文件 非打包

```
tar -cvf  test.tar .   // 将所有文件打包为 test.tar
tar -czvf test.tar.gz a.c   //压缩 a.c文件为test.tar.gz
```

### 列出压缩文件内容

```
tar -tzvf test.tar.gz
: -rw-r--r-- root/root     0 2010-05-24 16:51:59 a.c
```

### 解压文件

```
tar -xzvf test.tar.gz
```