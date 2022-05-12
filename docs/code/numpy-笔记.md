---
date: 2022-05-11 09:41:50
categories: 
  - 编程
tags: 
  - numpy
author: 
  name: scucat
  link: https://github.com/scucat
---

# numpy-笔记
> [菜鸟-numpy](https://www.runoob.com/numpy/numpy-dtype.html)
## numpy 数组属性
numpy.array(object, dtype = None, copy = True, order = None, subok = False, ndmin = 0)

<CodeGroup>
  <CodeGroupItem title="代码">

```python
import numpy as np

n = np.array([[1,2,3,4],[5,6,7,8]])
attrs = [
  n.ndim,       # 维度 数量
  n.shape,      # 维度
  n.size,       # 元素 总数
  n.dtype,      # 元素 类型
  n.itemsize,   # 元素大小，以字节为单位
  n.flags,      # 对象内存信息
  n.real,       # 实部
  n.imag,       # 虚部
  n.data        # 数据 缓冲区
]

for attr in attrs:
  print(attr)
```
  </CodeGroupItem>

  <CodeGroupItem title="输出">

```shell:no-line-numbers
2
(2, 4)
8
int32
4
  C_CONTIGUOUS : True
  F_CONTIGUOUS : False
  OWNDATA : True
  WRITEABLE : True
  ALIGNED : True
  WRITEBACKIFCOPY : False
  UPDATEIFCOPY : False

[[1 2 3 4]
 [5 6 7 8]]
[[0 0 0 0]
 [0 0 0 0]]
<memory at 0x000002283CA7B1E0>
```

  </CodeGroupItem>
</CodeGroup>

### ndarray.reshape
<CodeGroup>
  <CodeGroupItem title="代码">

```python
n = np.array([[1,2,3,4],[5,6,7,8],[9,10,11,12]])
print(n)
print(n.shape)

n.shape = (4,3)
print(n)
print(n.shape)

m = n.reshape(3,4)
print(m)
print(m.shape)
```
  </CodeGroupItem>

  <CodeGroupItem title="输出">

```shell:no-line-numbers
[[ 1  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]
(3, 4)

[[ 1  2  3]
 [ 4  5  6]
 [ 7  8  9]
 [10 11 12]]
(4, 3)

[[ 1  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]
(3, 4)
```

  </CodeGroupItem>
</CodeGroup>

## numpy 创建数组

### np.empty
> 创建指定形状，未初始化的数组
>  
> numpy.empty(shape, dtype = float, order = 'C')

### np.zeros
> 全0数组
>
> numpy.zeros(shape, dtype = float, order = 'C')

### np.ones
> 全1数组
>
> numpy.zeros(shape, dtype = float, order = 'C')
<CodeGroup>
  <CodeGroupItem title="代码">

```python
empty = np.empty((2,3),dtype=float)
print("\n",empty)

zeros = np.zeros([2,4],dtype=int)
print("\n",zeros)

ones = np.ones([3,3],dtype=int)
print("\n",ones)
```
  </CodeGroupItem>

  <CodeGroupItem title="输出">

```shell:no-line-numbers
 [[0. 0. 0.]
 [0. 0. 0.]]

 [[0 0 0 0]
 [0 0 0 0]]

 [[1 1 1]
 [1 1 1]
 [1 1 1]]
```

  </CodeGroupItem>
</CodeGroup>

### np.asarray
> 将 数组、元组、多位列表等转为 ndarray
> 
> numpy.asarray(a, dtype = None, order = None)
<CodeGroup>
  <CodeGroupItem title="代码">

```python
m = [1,2,3]
n = np.asarray(m)
print("\n",n)

m = (4,5,6)
n = np.asarray(m,dtype=float)
print("\n",n)

m = [(1,2,3),(4,5)] 
n = np.asarray(m)
print("\n",n)
```
  </CodeGroupItem>

  <CodeGroupItem title="输出">

```shell:no-line-numbers
 [1 2 3]

 [4. 5. 6.]

 [(1, 2, 3) (4, 5)]
```

  </CodeGroupItem>
</CodeGroup>

### np.arange
> numpy.arange(start, stop, step, dtype)

### np.linspace
> 创建等差数列
> 
> np.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None)
- endpoint: 为true 时，数列中包含stop值，反之不包含，默认是True。
- retstep: 为 True 时，生成的数组中会显示间距，反之不显示。

### np.logspace
> 创建等比数列
>
> np.logspace(start, stop, num=50, endpoint=True, base=10.0, dtype=None)
- base: 对数 log 的底数，默认为10。
<CodeGroup>
  <CodeGroupItem title="代码">

```python
n = np.arange(1,10,1,dtype=int)
print("\n",n)

n = np.linspace(1,10,10)
print("\n",n)

n = np.linspace(1,10,10, endpoint =  False) 
print("\n",n)

n = np.linspace(1,10,10,retstep= True)
print("\n",n)

n = np.logspace(1.0,  2.0, num =  10) 
print("\n",n)

n = np.logspace(0,9,10,base=2)
print("\n",n)
```
  </CodeGroupItem>

  <CodeGroupItem title="输出">

```shell:no-line-numbers
 [1 2 3 4 5 6 7 8 9]

 [ 1.  2.  3.  4.  5.  6.  7.  8.  9. 10.]

 [1.  1.9 2.8 3.7 4.6 5.5 6.4 7.3 8.2 9.1]

 (array([ 1.,  2.,  3.,  4.,  5.,  6.,  7.,  8.,  9., 10.]), 1.0)

 [ 10.          12.91549665  16.68100537  21.5443469   27.82559402
  35.93813664  46.41588834  59.94842503  77.42636827 100.        ]

 [  1.   2.   4.   8.  16.  32.  64. 128. 256. 512.]
```

  </CodeGroupItem>
</CodeGroup>

## numpy 切片和索引
### 简单索引
<CodeGroup>
  <CodeGroupItem title="代码">

```python
n = np.arange(10)
print(n)

s = slice(2,9,3) # 从索引 2 开始到索引 9 停止，间隔为 3
print(n[s])
print(n[2:9:3]) 
print(n[2:5])

n = np.array([[1,2,3],[3,4,5],[4,5,6]])
print("\n",n)
print("\n",n[1:])
print("\n",n[...,1])   # 所有行，索引为1的列
print("\n",n[1,...])   # 索引为1的行，所有列
print("\n",n[...,1:])  # 所有行，索引大于等于1的列
```
  </CodeGroupItem>

  <CodeGroupItem title="输出">

```shell:no-line-numbers
[0 1 2 3 4 5 6 7 8 9]
[2 5 8]
[2 5 8]
[2 3 4]

 [[1 2 3]
 [3 4 5]
 [4 5 6]]

 [[3 4 5]
 [4 5 6]]

 [2 4 5]

 [3 4 5]

 [[2 3]
 [4 5]
 [5 6]]
```

  </CodeGroupItem>
</CodeGroup>

### 复杂索引
<CodeGroup>
  <CodeGroupItem title="代码">

```python
print("获取数组中(0,0)，(1,1)和(2,0)位置处的元素:")
n = np.array([[1,  2],  [3,  4],  [5,  6]]) 
m = n[[0,1,2],  [0,1,0]]  
print("n:\n",n)
print("m:\n",m)

print("\n获取数组中大于5的元素:")
n = np.array([[  0,  1,  2],[  3,  4,  5],[  6,  7,  8],[  9,  10,  11]])  
m = n[n>5]
print("n:\n",n)
print("m:\n",m)

print("\n获取数组中大于5,小于10的元素:")
m = n[(n>5) & (n<10)]
print("m:\n",m)

print('\n使用np.logical_and方法：')
print(n[np.logical_and(n > 5, n < 10)])

print('\n使用np.all方法：')
print(n[np.all([n > 5, n < 10],axis=0)])

print("\n使用了 ~（取补运算符）来过滤 NaN:")
n = np.array([np.nan,  1,2,np.nan,3,4,5])
m = n[~np.isnan(n)]
print("n:\n",n)
print("m:\n",m)

print("\n过滤掉非复数元素:")
n = np.array([1,  2+6j,  5,  3.5+5j]) 
m = n[np.iscomplex(n)]
print("n:\n",n)
print("m:\n",m)

n = np.arange(32).reshape((8,4))
print("\nn:\n",n)
print("\n按指定顺序获取行:")
m = n[[4,2,1,7]]
print("m:\n",m)

print("\n按指定倒序获取行:")
m = n[[-4,-2,-1,-7]]
print("m:\n",m)

print("\n按指定顺序获取行，并按指定顺序获取列:")
m = n[np.ix_([1,5,7,2],[0,3,1,2])]
print("m:\n",m)
```
  </CodeGroupItem>

  <CodeGroupItem title="输出">

```shell:no-line-numbers
获取数组中(0,0)，(1,1)和(2,0)位置处的元素:
n:
 [[1 2]
 [3 4]
 [5 6]]
m:
 [1 4 5]

获取数组中大于5的元素:
n:
 [[ 0  1  2]
 [ 3  4  5]
 [ 6  7  8]
 [ 9 10 11]]
m:
 [ 6  7  8  9 10 11]

获取数组中大于5,小于10的元素:
m:
 [6 7 8 9]

使用np.logical_and方法：
[6 7 8 9]

使用np.all方法：
[6 7 8 9]

使用了 ~（取补运算符）来过滤 NaN:
n:
 [nan  1.  2. nan  3.  4.  5.]
m:
 [1. 2. 3. 4. 5.]

过滤掉非复数元素:
n:
 [1. +0.j 2. +6.j 5. +0.j 3.5+5.j]
m:
 [2. +6.j 3.5+5.j]

n:
 [[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]
 [12 13 14 15]
 [16 17 18 19]
 [20 21 22 23]
 [24 25 26 27]
 [28 29 30 31]]

按指定顺序获取行:
m:
 [[16 17 18 19]
 [ 8  9 10 11]
 [ 4  5  6  7]
 [28 29 30 31]]

按指定倒序获取行:
m:
 [[16 17 18 19]
 [24 25 26 27]
 [28 29 30 31]
 [ 4  5  6  7]]

按指定顺序获取行，并按指定顺序获取列:
m:
 [[ 4  7  5  6]
 [20 23 21 22]
 [28 31 29 30]
 [ 8 11  9 10]]
```

  </CodeGroupItem>
</CodeGroup>

## numpy 方法
### np.tile
> numpy.tile(A , reps)
这里的 A 就是数组，reps 可以是一个数，一个列表、元组或者数组等，就是类数组的类型。先要理解准确，先把 A 当作一个块（看作一个整体，别分开研究每个元素）。

（1）如果 reps 是一个数，就是简单的将 A 向右复制 reps - 1 次形成新的数组，就是 reps 个 A 横向排列：
<CodeGroup>
  <CodeGroupItem title="代码">

```python
a = np.array([[1,2],[3,4]],dtype='i1')
print(a,'\n')
b = np.tile(a,2)  #向右复制，两个 A 横向排列
print(b)
```
  </CodeGroupItem>
  <CodeGroupItem title="输出">

```shell:no-line-numbers
[[1 2]
 [3 4]] 

[[1 2 1 2]
 [3 4 3 4]]
```
  </CodeGroupItem>
</CodeGroup>
（2）如果 reps 是一个 array-like（类数组的，如列表，元组，数组）类型的，它有两个元素，如 [m , n]，实际上就是将 A 这个块变成 m * n 个 A 组成的新数组，有 m 行，n 列 A：
<CodeGroup>
  <CodeGroupItem title="代码">

```python
import numpy as np

a = np.array([[1,2],[3,4]],dtype='i1')
print(a,'\n')
b = np.tile(a,(2,3))  #2 * 3 个 A 组成新数组
print(b)
```
  </CodeGroupItem>
  <CodeGroupItem title="输出">

```shell:no-line-numbers
[[1 2]
 [3 4]] 

[[1 2 1 2 1 2]
 [3 4 3 4 3 4]
 [1 2 1 2 1 2]
 [3 4 3 4 3 4]]
```
  </CodeGroupItem>
</CodeGroup>

### np.transpose
> numpy.transpose(arr, axes)
<CodeGroup>
  <CodeGroupItem title="代码">

```python
n = np.arange(12).reshape(3,4)
print ('n:\n',n) 

m = np.transpose(n)
print('m:\n',m)

t = n.T
print('t:\n',t)
```
  </CodeGroupItem>
  <CodeGroupItem title="输出">

```shell:no-line-numbers
n:
 [[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]
m:
 [[ 0  4  8]
 [ 1  5  9]
 [ 2  6 10]
 [ 3  7 11]]
```
  </CodeGroupItem>
</CodeGroup>


### np.rollaxis
> 难理解
### np.swapaxes
> 难理解