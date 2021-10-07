---
layout: post
title:  JavaScript数组方法的总结与应用
subtitle: 整理并总结了一下JS中数组的方法
date: 2021-06-05
tags:
 - JavaScript
catalog: true
header_img: /images/header-bg/21-6-5-1.gif
header_style: image
---


# JavaScript数组方法的总结与应用

在ECMAScript中除了Object，最常使用的应该就是Array类型了。Array也内置了非常多的方法来帮助我们在开发中操控数组中的元素。由于方法较多，时间一长有些方法就记不太清楚了。所以该篇文章主要总结了ES3~ES6+上的数组方法，方便后期使用时查询，也算对该部分知识的一个回顾与总结。

![array methods in javascript](https://i.loli.net/2021/10/06/J8f9wCGWMhaY4H5.png)

## 一、数组方法的分类

数组有很多的方法，在浏览器中查看一下，真的有很多看起来是不是很秃头🤯。但是根据方法的使用场景进行分类，则会清晰很多。

![image-20211006161003548](https://i.loli.net/2021/10/06/3kFbDaNAI7UTuj8.png)

下面将会对数组方法分类成以下几种进行总结，该分类参考《JavaScript高级程序指南——第四版》进行分类。

![数组方法分类](https://i.loli.net/2021/10/06/SgioK3XWtTA1ynZ.png)



## 二、 数组方法的使用

---

### 1. 转换方法 🥝

#### 1.1 Array.prototype.toString()

- 作用：将数组元素拼接成字符串，并数组元素之间用逗号进行分隔。也就是说，对数组元素中的每个指调用`toString()`方法得到最后的字符串。

- 是否改变原数组：❎不会改变原数组

```javascript
let colors = ['red', 'yellow', 'green']
console.log(color.toString())  // red, yellow, green
```

- 扩展：toString()方法可以用于扁平化数组

```javascript
// 扁平化简单的二维数组
let arr = [11, [22, 33], [44, 55], 66];
let flatArr = arr.toString().split(','); // ["11", "22", "33", "44", "55", "66"]
```

#### 1.2 Array.prototype.toLocalString()

- 作用：`toLocaleString()` 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 `toLocaleString` 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开
- 是否改变原数组：❎不会改变原数组

```javascript
let array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')]
let localeString = array1.toLocaleString('en', { timeZone: 'UTC' })
console.log(localeString)
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
```

#### 1.3 Array.prototype.join()

- 作用：将数组里的所有元素拼接成一个字符串返回，该方法中可以传递一个参数用来指定分隔符进行分隔。如果省略该参数，则默认使用“逗号”进行分隔。
- 是否改变原数组：❎不会改变原数组

```javascript
let elements = ['Fire', 'Air', 'Water']
console.log(elements.join())  // "Fire,Air,Water"
console.log(elements.join(''))  // "FireAirWater"
console.log(elements.join('-'))  // "Fire-Air-Water"
```



### 2. 堆栈方法 🍇

#### 2.1 Array.prototype.push()

- 作用：`push()`方法接收任意数量的参数，将其添加在数组的`末尾`，`返回数组的最新长度`
- 是否改变原数组：✅会改变原数组

```javascript
let animals = ['pigs', 'goats', 'sheep']
let count = animals.push('cows')
console.log(count)  // 4
console.log(animals)  // ["pigs", "goats", "sheep", "cows"]
```

#### 2.2 Array.prototype.pop()

- 作用：`pop()`方法删除数组的最后一项，同时减少数组的length值，`返回被删除的元素项`
- 是否改变原数组：✅会改变原数组

```javascript
let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
console.log(plants.pop())  // "tomato"
console.log(plants)  // ["broccoli", "cauliflower", "cabbage", "kale"]
```

#### 2.3 Array.prototype.unshift()

- 作用：`unshift()`方法接收任意数量的参数，将其添加在数组的`开头`，`返回数组的最新长度`

- 是否改变原数组：✅会改变原数组

```javascript
let array1 = [1, 2, 3]
console.log(array1.unshift(4, 5))  // 5
console.log(array1)  // [4, 5, 1, 2, 3]
```

#### 2.4 Array.prototype.shift()

- 作用：`shift()`方法删除数组的第一项，同时减少数组的length值，`返回被删除的元素项`
- 是否改变原数组：✅会改变原数组

```javascript
let array1 = [1, 2, 3]
console.log(array1.shift())  // 1
console.log(array1)   // [2, 3]
```



### 3. 排序方法 🍉

#### 3.1 Array.prototype.sort()

- 作用：对数组元素进行排序，不传入参数的时候，`sort()`方法会对每项数组元素调用toString()方法，然后根据其字符串的Unicode码进行顺序排序。
- 传参：`arr.sort([compareFunction])`， sort()方法中可以传入一个比较函数，用来指定按某种顺序进行排列的函数。比较函数的内部也可以传递两个参数`arr.sort(fn(secondValue, firstValue))`。其实sort底层是封装了排序算法的，V8 引擎 `sort` 函数只给出了两种排序 `InsertionSort` 和 `QuickSort`，数量小于10的数组使用 `InsertionSort`，比10大的数组则使用 `QuickSort`。[点击githubV8-Arrray.js源码地址](https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js)

- 是否改变原数组：✅会改变原数组

- 使用

  (1) 升序排列 

```javascript
let arr = [4, 2, 3, 6, 9, 1]
console.log(arr.sort((a, b)=> a-b))
// [1, 2, 3, 4, 6, 9]　	
```

​	(2) 降序排列

```javascript
let arr = [4, 2, 3, 6, 9, 1]
console.log(arr.sort((a, b)=> b-a))
// [9, 6, 4, 3, 2, 1]
```

​	(3) 对于复杂的数据数组，我们可以封装属于自己排序方法

```javascript
let students = [
    {name: "tom", age: 18},
    {name: "jack", age: 26},
    {name: "rose", age: 20}
]
let sortByAge = (a, b) => a.age - b.age
students.sort(sortByAge)
/* 最后输出
[{name: "tom", age: 18},
 {name: "rose", age: 20},
 {name: "jack", age: 26}]
*/
```

​	(4) 其实我们还可以写的再灵活一点，更低耦合点

```javascript
// 先想一下如果还有学生身高数据，要我们按身高来进行排序，如果按上面那种写法
// 我们得封装两个方法，如果以后还有更多的属性，这样是不是很麻烦
// 看下面↓
let students = [
    {name: "tom", age: 18, height: 177},
    {name: "jack", age: 26, height: 170},
    {name: "rose", age: 20, height: 166}
]
let sortBy = (attr) => {return (a, b)=> a[attr] - b[attr]}
students.sort(sortBy("height"))
/*输出
0: {name: "rose", age: 20, height: 166}
1: {name: "jack", age: 26, height: 170}
2: {name: "tom", age: 18, height: 177}
*/
students.sort(sortBy("age"))
/*输出
0: {name: "tom", age: 18, height: 177}
1: {name: "rose", age: 20, height: 166}
2: {name: "jack", age: 26, height: 170}
*/
```

#### 3.2 Array.prototype.reverse()

- 作用：`reverse()` 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个
- 是否改变原数组：✅会改变原数组

```javascript
let arr = [11, 12, 14, 13]
console.log(arr.reverse())   // [13, 14, 12, 11]
console.log(arr)             // [13, 14, 12, 11]
```



### 4. 操作方法 🍊

#### 4.1 Array.prototype.concat()

- 作用： `concat()` 方法用于合并两个或多个数组，在数组上调用该方法，首先会创建一个当前数组的副本，然后将其参数添加至副本的末尾。
- 传参：array.concat(arr1, arr2.....)
- 是否改变原数组：❎不会改变原数组

```javascript
let arr1 = [1, 2, 3],arr2 = [4, 5, 6];
let arr = arr1.concat(arr2);
console.log(arr);     //[1, 2, 3, 4, 5, 6]
```

#### 4.2 Array.prototype.slice()

- 作用：选取数组的一部分，可以传入两个参数分别是开始选取的索引以及结束的索引（不包括结束索引元素）。slice()方法是原数组的浅拷贝。
- 传参：array.slice(startIndex，endIndex)
- 是否改变原数组：❎不会改变原数组

```javascript
let animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(animals.slice(2))  // ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4))  // ["camel", "duck"]
console.log(animals.slice(1, 5))  // ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2))  // ["duck", "elephant"]
console.log(animals.slice(2, -1))  // ["camel", "duck"]
```

#### 4.3 Array.prototype.splice()

- 作用：`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回`被删除的元素`。
- 传参：array.splice(startIndex，deleteCount，insertItem1, insertItem2....)
- 是否改变原数组：✅会改变原数组

```javascript
let arr1 = ['a', 'b', 'c', 'd']
console.log(arr1.splice(2,0,1))   // []
console.log(arr1)                 // ["a", "b", 1, "c", "d"]
let arr2 = ['a', 'b', 'c', 'd']
console.log(arr2.splice(2,1))    // ['c']
console.log(arr2)                  // ["a", "b", "d"]
let arr3 = ['a', 'b', 'c', 'd']
console.log(arr3.splice(2,1,'e'))  // ["c"]
console.log(arr3)                  // ["a", "b", "e", "d"]
let arr4 = ['a', 'b', 'c', 'd']
console.log(arr4.splice(2,1,'e',4))  // ["c"]
console.log(arr4)                    // ["a", "b", "e", 4, "d"]
```



### 5. 搜索和位置方法 🍋

#### 5.1 Array.prototype.indexOf()

- 作用：`indexOf()`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返-1
- 传参：array.indexOf(searchElement, fromIndex)

```javascript
let arr = ["aa", "bb", "cc", "dd"]
console.log(arr.indexOf("bb"))       // 1
console.log(arr.indexOf("bb", 2))    // -1
```

#### 5.2 Array.prototype.lastIndexOf()

- 作用：`lastIndexOf()`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返-1，与indexOf()方法不同的是，该方法是从数组的末尾开始进行查找
- 传参：array.lastIndexOf(searchElement, fromIndex)

```javascript
let arr = ["aa", "bb", "cc", "dd", "bb"]
console.log(arr.lastIndexOf("bb"))      // 4
console.log(arr.lastIndexOf("bb", 2))   // 1
```

#### 5.3 Array.prototype.includes()

- 作用：`includes()`方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。该方法是ES6以后新增的数组方法
- 传参：array.includes(searchElement, fromIndex)

```javascript
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

#### 5.4 Array.prototype.find()

- 作用：对数组中的每个元素运行给定函数，在测试条件时返回 true时, `find() `返回符合条件的元素，之后的值不会再调用执行函数。如果没有符合条件的元素返回 undefined
- 传参：array.find(function(currentValue, index, arr),thisValue)

```javascript
let array1 = [5, 12, 8, 130, 44]
console.log(array1.find(element => element > 10))  // 12
console.log(array1.find(element => element < 0))   // undefined
```

#### 5.5 Array.prototype.findIndex()

- 作用： findIndex()方法的使用和find()一致，只是在测试条件时返回 true时, 返回符合条件的元素索引值，之后的值不会再调用执行函数。如果没有符合条件的元素返回 -1.
- array.findIndex(function(currentValue, index, arr),thisValue)

```javascript
let array1 = [5, 12, 8, 130, 44]
console.log(array1.find(element => element > 10))  // 1
console.log(array1.find(element => element < 0))   // -1
```



### 6. 迭代器方法🍍

在ES6中，Array的原型上暴露了3个用于检索数组内容的方法，分别是keys()、values()、entries()。keys()返回数组索引的迭代器，values()返回数组元素的迭代器，entries()返回键值对的迭代器。因为三个方法都会返回迭代器，所以可以使用for...of...进行遍历

#### 6.1 Array.prototype.keys()

```javascript
let array1 = ['a', 'b', 'c'];
let iterator = array1.keys();

for (let key of iterator) {
  console.log(key)
}
// 输出： 0  1  2
```

#### 6.2 Array.prototype.values()

```javascript
let array1 = ['a', 'b', 'c'];
let iterator = array1.values();

for (let values of iterator) {
  console.log(values)
}
// 输出： a  b  c
```

#### 6.3 Array.prototype.enteries()

```javascript
let array1 = ['a', 'b', 'c'];
let iterator = array1.entries();

for (let entries of iterator) {
  console.log(entries)
}
// 输出： [0, 'a']  [1, 'b']  [2, 'c']
```



### 7. 赋值和填充数组方法 🍑

#### 7.1 Array.prototype.fill()

- 作用：用于将一个固定值替换数组的元素
- 传参：array.fill(value, start, end)
- 是否改变原数组：✅会改变原数组

```javascript
let arr = ["a", "b", "c", "d", "e"]
arr.fill("dd")
console.log(arr)  //  ["dd", "dd", "dd", "dd", "dd"]
arr.fill("a", 1, 3)
console.log(arr)  //  ["dd", "a", "a", "dd", "dd"]
```

#### 7.2 Array.prototype.copyWithin()

- 作用：`copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，`不会改变原数组的长度`
- 传参：array.copyWithin(targetIndex, start, end)
- 是否改变原数组：✅会改变原数组

```javascript
let array1 = ['a', 'b', 'c', 'd', 'e']
// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4))
//  ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3))
//  ["d", "d", "e", "d", "e"]
```



### 8. 创建数组的方式 🍒

ES6新增了两个用于创建数组的静态方法

#### 8.1 Array.from()

- 作用：`Array.from()` 方法从一个类数组或可迭代对象创建成一个新的数组，比如argumets、NodeLists、string
- 传参：Array.from(arrayLike, mapFn, thisArg)

```javascript
console.log(Array.from('foo'));
//  ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
//  [2, 4, 6]
```

#### 8.2 Array.of()

- 作用：`Array.of()`方法用于将一组参数转换成数组实例，而不管参数的数量与类型。该方法也解决了Array()方法传入一个参数时的问题

```javascript
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
```



### 9. 迭代方法 🌽

ECMAScript为数组定义了5个迭代方法，每个方法都可以接收两个参数。第一个参数是一个函数，数组中的每项元素都会运行这个给定的函数。该函数内部可以接收三个参数：function(currentValue：必传当前元素, index：可选当前元素的索引值, arr：可选当前元素所属的数组对象)； 第个参数是可选的做为函数运行上下文的作用域对象(影响函数中this指向)

#### 9.1 Array.prototype.forEach()

- 作用：对数组中的每个元素运行给定函数。这个方法没有返回值
- 该方法在遍历稀疏数组的时候会忽略掉空隙值，只处理正常值

```javascript
let myArr = [1, 5, 8]
myArr.forEach((item, index, arr)=>{
　　console.log(item, index, arr)
})
//1  0  [1, 5, 8]
//5  1  [1, 5, 8]
//8  2  [1, 5, 8]

// forEach()方法遍历稀疏数组
let arr = [1, ,5]
arr.forEach(item => {
    console.log(item)
})
// 1 5
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// 1 undefined 5
```

#### 9.2  Array.prototype.map()

- 作用：对数组中的每个元素运行给定函数，返回每次函数调用的返回结果组成的新数组
- 是否改变原数组：❎不会改变原数组

```javascript
let arr = [1, 4, 9, 16]
let mapArr = arr.map(item => item * 2)
console.log(mapArr)  // [2, 8, 18, 32]
```

#### 9.3 Array.prototype.filter()

- 作用：对数组中的每个元素运行给定函数，返回该函数会返回 true 的元素组成的数组
- 是否改变原数组：❎不会改变原数组

```javascript
let arr = [1, 4, 9, 16]
let filterArr = arr.filter(item => item > 2)
console.log(filterArr)  // [4, 9, 16]
```

#### 9.4 Array.prototype.some()

- 作用：对数组中的每个元素运行给定函数，如果任一元素返回 true ，则返回 true，如果返回了\*true\* , 循环结束，剩余的元素不会再执行检测
- 是否改变原数组：❎不会改变原数组

```javascript
let arr = [1, 4, 9, 16]
let someArr = arr.some(item => item > 2)
console.log(someArr)  // true
let someArr2 = arr.some(item => item === 10)
console.log(someArr2)   // false
```

#### 9.5 Array.prototype.every()

- 作用：对数组中的每个元素运行给定函数，如果该函数对每个元素都返回 true ，则返回 true，就是检测数组中的每个元素是否都符合条件
- 是否改变原数组：❎不会改变原数组

```javascript
let arr = [1, 4, 9, 16]
let everyArr = arr.every(item => item > 0)
console.log(everyArr)   // true
let everyArr2 = arr.every(item => item > 2)
console.log(everyArr2)   // false
```



### 10. 归并方法 🥑

#### 10.1 Array.prototype.reduce()

- 作用：`reduce()`方法将数组的所有元素按照给定的方式计算为一个值（从左到右）
- 传参：array.reduce(callback(accumulator,  currentValue,  currentIndex,  arr),  initialValue)
- 参数说明：`reduce()`方法接收两个参数分别是：一个回调函数callback，和一个initialValue做为第一次调用callback函数时第一个参数的值，如果没有提供初始值则使用数组的第一个元素。在callback函数中包含四个参数
  - `accumulator`：累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，如果没有给定initialValue参数时初始值是数组第一个值，后面会赋值为每次循环返回的值
  - `currentValue`：数组中正在处理的元素，没有给定initialValue参数时，初始值默认是数组第二个值，后面依次第三个...到最后一个
  - `currentIndex`：数组中正在处理的元素索引值
  - 调用reduce()方法的原数组

- 是否改变原数组：❎不会改变原数组

```javascript
// 通常该方法可以用来计算数组之和
// 不设置reduce()的第二个参数initialValue
let arr = [1, 2, 3, 4]
let add = (a, b) => a + b
console.log(arr.reduce(add))  //   10
// 设置reduce()的第二个参数initialValue
console.log(arr.reduce(add, 10))  // 20
```

`reduce()`方法的使用场景真的非常的多，该方法算是一个万金油方法。之后打算专门出一篇关于reduce()方法使用场景的文章。

#### 10.2 Array.prototype.reduceRight()

- 作用：`reduceRight()`方法将数组的所有元素按照给定的方式计算为一个值（从右到左）和上面的`reduce()`方法功能一样，只是循环正好相反从最后一个元素开始，这里就不多赘述了。

```javascript
let arr = ['1', '2', '3', '4', '5'];
var left  = arr.reduce((prev, cur) => prev + cur)
var right = arr.reduceRight((prev, cur) => prev + cur)

console.log(left);  // "12345"
console.log(right); // "54321"
```



### 总结

该篇文章按照不能的功能特性将数组的方法分类，这样更加便于后期的查询与温习。



### 参考文章链接

[数组相关所有问题](https://www.cnblogs.com/bobo1/p/12423516.html)

《JavaScript高级程序指南(第4版)》第六章

[JavaScript里的数组Array使用方法](https://www.cnblogs.com/bobo1/p/12423516.html) 

