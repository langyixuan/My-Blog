---
layout: post
title: JavaScript数据类型
subtitle: JavaScript的数据类型以及如何判断数据类型
date: 2021-05-21
tags:
 - JavaScript
catalog: true
header_img: /images/header-bg/21-5-21-1.gif
header_style: image
---

# JavaScript数据类型

---

![maxresdefault](https://i.loli.net/2021/09/04/KbXnNAmfoM9wkpU.jpg)

学习JavaScript时，首先需要了解Javascript的数据类型。这对后期的学习非常的重要。



## 一、数据类型分类

![image-20210904201311454](https://i.loli.net/2021/09/04/56HRQVMfXyu37lE.png)

Javascript的数据类型按照存储类型可以分为`基本类型`和`引用类型`两个大类，首先来说一说什么是基本数据类型和引用数据类型

### 基本数据类型和引用数据类型

在了解基本和引用数据类型时，需要引入一个知识点就是`栈和堆`

- 栈（stack）: 栈会自动分配内存空间，会自动释放
- 堆（heap）: 动态分配内存空间，大小不定也不会自动释放，栈内存中存放地址指向堆内存中存放的对象

#### （1） 基本数据类型

基本数据类型包括**String、Number、Boolean、Undefined、Null、Symbo**l几种

基本数据类型是存储在栈（stack）中的简单数据段，`占据空间小、大小固定`，属于被频繁使用数据，所以放入栈中存储。

#### （2）引用数据类型

引用类型指那些可能由多个值构成的对象（ `包括Function,Array,Object` ），保存在堆内存中`占据空间大、大小不固定`，如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

![堆和栈](https://i.loli.net/2021/09/04/MPKUc4nxaLhetFT.png)



## 二、数据类型的判断

### 1. typeof

- typeof是专门用来监测数据类型的方法，**一般用于检测普通的数据类型**。它可以判断一个变量是字符串、数值、布尔值还是undefined，但是如果检测的变量是引用数据类型，可以返回object或者function，但不能细致地分出是array还是RegExp等特殊引用数据类型
- typeof 一般只能返回如下几个结果：`number、boolean、string、function、object、undefined`
- 通过typeof可以返回数据类型的`字符串表达`

```javascript
typeof 1         // number
typeof NaN       // number
typeof Infinity  // number
typeof true      // boolean
typeof []        // object
typeof {}        // object
typeof null      // object
typeof function(){}   // function
typeof Date      // function
typeof ''        // string
typeof sss       // undefined
typeof undefined   // undefined
```

### 2. instanceof

- 可以使用instanceof判断引用类型，用于判断对象是哪种具体的数据类型

- instanceof主要的目的是用来检测引用类型，返回值只有true和false，可以用来判断某个构造函数的prototype属性是否存在于另外一个要检测对象的原型链上

用代码演示一下instanceof内部的执行过程

```javascript
instanceof(A, B) {
    var left = A.__proto__
    var right = B.prototype
    if(left === right) {
        return true
    }
    return false
}
```



```javascript
[] instanceof Array    // true
{} instanceof Object   // true
/d/ instanceof RegExp  // true
function(){} instanceof Object  //true
'' instanceof String    // false
1 instanceof Number     // false
```

【疑问】 为什么1 instanceod Number : false?

instanceof判断一个**对象**是否是另一个**对象**的实例，而数字1是基本数据类型，不是对象，

var a = new Number(1)；是通过包装类Number把数字1转换成对象所以为true