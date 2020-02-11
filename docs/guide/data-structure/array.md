# 数组

数组是我们最常见的的数据结构了，在平常的开发中经常会用到。数组用于存储一组数据，在js中每个元素的类型可以是不同的。数组会使用一组连续的内存来存储数据，而且可以使用下标直接访问数组元素；这一特性使得数组在访问数据这块很高效。

我们利用下标这个特性可以很块找到对应的数据，比如一个数组 **arr** ，我们要访问第一个元素，我们可以直接使用 **arr[0]** 来访问。注意：js中数组下标是从0开始的，一开始学习编程的时候我们会觉得奇怪，和我们平常的习惯不同，我们平常习惯于从1开始，我们可以把它看作偏移量，0表示没有偏移，1表示偏移一个地址，以此类推。。。主要还是很多编程语言都是基于C语言来设计的，现在大多数编程语言的数组下标设计都是从0开始。

既然大家都很熟悉，这里我就不过多讲了，下面介绍一些js中数组常用的API：

## 增删改查

#### **``push``** 在数组尾部添加一个元素
#### **``unshift``** 在数组头部添加一个元素
#### **``pop``** 删除数组尾部元素
#### **``shift``** 删除数组头部元素

```js
const arr = [1]

arr.push(2)
arr // [1, 2]

arr.unshift(3)
arr // [3, 1, 2]

arr.pop()
arr // [3, 1]

arr.shift()
arr // [1]
```

#### **``splice``** 可以进行插入、修改、删除操作

```js
const arr = [1, 2, 3]

// 将第一个元素修改为0
arr.splice(0, 1, 0)
arr // [0, 2, 3]

// 删除第一个元素
arr.splice(0, 1)
arr // [2, 3]
```

#### **``indexOf``** 查询某元素在数组中的位置，如果没有则返回-1
#### **``includes``** 判断某元素是否在数组中

```js
const arr = [1, 2, 3]

arr.indexOf(1) // 0
arr.indexOf(2) // 1
arr.indexOf(3) // 2
arr.indexOf(4) // -1

arr.includes(1) // true
arr.includes(2) // true
arr.includes(3) // true
arr.includes(4) // false
```

## 遍历

#### **``forEach``** 简单的遍历

```js
const arr = [1, 2, 3]

arr.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

/**
 * 1 0 [1, 2, 3]
 * 2 1 [1, 2, 3]
 * 3 2 [1, 2, 3]
 * /
```

#### **``map``** 将元素按指定条件运算并返回新数组

```js
const arr = [1, 2, 3]

const newArr = arr.map(item => item * 2)
newArr // [2, 4, 6]
```

#### **``filter``** 筛选出符合指定条件的元素并返回新数组

```js
const arr = [1, 2, 3]

const newArr = arr.filter(item => item > 1)
newArr // [2, 3]
```

#### **``some``** 判断是否有符合指定条件的元素，有则返回true，没有则返回false

```js
const arr = [1, 2, 3]

arr.some(item => item > 2) // true
arr.some(item => item > 3) // false
```

#### **``every``** 判断是否所有元素都符合指定条件，是则返回true，否则返回false

```js
const arr = [1, 2, 3]

arr.every(item => item > 0) // true
arr.every(item => item > 1) // false
```

#### **``reduce``** 对数组元素进行累计处理，返回该结果

```js
const arr = [1, 2, 3]

const sum = arr.reduce((prev, curr) => prev + curr, 0)
sum // 6
```

这里暂时就介绍这么多了，具体的可以去 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 文档上详细查阅。

对于数组遍历操作，我们在平常的使用中，应尽量使用这些方法；使用这些方法使得编程更加优雅，代码量也更少，方法配合使用功能更加强大，平常的开发中大家可以多思考思考这些方法更高级的使用。