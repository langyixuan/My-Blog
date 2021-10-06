---
layout: post
title: let const和var之间的区别
subtitle: JavaScript 中的 var let 和 const 之间有什么区别
date: 2021-05-27
tags:
 - Javascript
catalog: true
header_img: /images/header-bg/21-5-27-1.gif
header_style: image
---

# let const var之间的区别

ECMAScript变量是松散类型的。意思是变量可以用于保存任何的数据类型。在ES5版本中只能使用`var`声明变量。到了ES6版本中新出了`let和const`两个关键字也可以用于声明变量。let和const相较于var在声明变量上更加的严谨。在本文中重点讨论var、let和const这三者之间的区别，主要会从`作用域、变量提升、重复声明等`方面指出其差异性。

<img src="https://i.loli.net/2021/10/06/6ebOkxrfpnSc39W.png" alt="let_const_var之间的区别" style="zoom:150%;" />

## 一、var

---

### 1. var声明作用域

作用域可以简单的理解为一个变量的可见性以及可访问性，本质上指变量可供访问的范围。var可以在全局范围声明也可以在函数/局部范围声明。

- 在全局通过var声明的变量，相当于是在window对象上添加的属性，可以在任何地方进行访问。
- 在函数内部通过var声明的变量，其作用域是局部的，只能够在函数内部进行访问。

```javascript
var outer = 'hello'
function test() {
    var inner = 'my name is Langyixuan'
    console.log(outer)  // hello
    console.log(inner)  // my name is Langyixuan
}
console.log(outer)  // hello
console.log(inner)  // error: inner is not defined
```

根据上述例子可以看出，通过var在全局定义的变量可以在函数内部进行访问，但是在函数内部声明的变量无法在函数外部进行访问。

### 2. var的变量提升机制

在全局作用域或者是在函数(局部)作用域中，使用`var`关键字声明的变量，在预编译阶段都会被提升到相对作用域的最顶部，并将其的初始值赋值为undefined。这样即使在没有执行到变量的定义及赋值之前访问变量也不会报错。

```javascript
console.log(outer)  // undefined
funtion test() {
    console.log(inner)
    var inner = 'my name is Langyixuan'
}
var outer = 'hello'   // undefined
```

上面的代码会被js引擎解析为

```javascript
var outer = undefined
console.log(outer)
function test() {
    var inner = undefined
    console.log(inner)
    inner = 'my name is Langyixuan'
}
outer = 'hello'
```

### 3. var的重复声明

可以反复多次使用var来声明同一个变量

```javascript
function foo() {
    var age = 16
    var age = 26
    var age = 36
    console.log(age)
}
foo()   // 36
```

但是在这里也暴露出了var的弱点，比如看下面的例子

```javascript
var tag = 'apple'
var num = 2
if (num > 0) {
    var tag = 'peach'
}
console.log(tag)   // peach
```

本意上我们是想在if的内部重新声明一个tag变量，但是不知道以前在全局声明过tag变量，这样就导致污染了全局变量，这也是var关键字声明变量的不便之处，也就引出了为什么会需要let和const的原因了。



## 二、 let

---

### 1. let 声明的作用域

`let` 和 var的作用差不多，但是有着非常重要的区别。其最明显的区别是，let声明的最小范围是`块级作用域`，而var是函数作用域。`块`是由{}界定的代码块，在带有let的块中声明的变量仅可以在该块中使用。

```javascript
if (true) {
    let name = 'Langyixuan'
}
console.log(name)  // ReferenceError: name没有定义
```

从上述例子可以看出，在if条件语句中声明的name变量无法在条件语句外部访问

### 2. let 的变量提升机制

在网上看了很多文章都非常笼统的解释到说let是不存在变量的提升的。但是在我看了一些比较深入且详细的文章后，我认为说let不存在变量提升的这种说法不是很严谨，可以说let不存在变量提升的效果，但是其实let是存在变量提升的。这个问题怎么进行解释呢，看个例子🌰

```javascript
let x = 1
{
    console.log(x)  // Uncaught ReferenceError: Cannot access 'x' before initialization
    let x = 2   
}
```

如果说块级内部的声明的x不存在变量的提升，那么输出时访问的x是块级外部定义的x，但是访问x时却报错了。报错的内容翻译过来就是`初始化前无法访问“x”`，所以正确的理解应该是

- 用`var`声明的变量会被提升到其作用域的顶部，并使用 undefined 值对其进行初始化。
- 用`let`声明的变量会被提升到其作用域的顶部，不会对值进行初始化。

所以在使用let声明变量之前，都是无法成功访问该变量。这在语法上被称为`暂时性死区(简称TDZ)`，如果访问TDZ中的变量就会抛出错误。

### 3. let 的重复声明

就像`var`一样，用`let`声明的变量可以在其范围内被修改。 但与`var`不同的是，`let`变量无法在其作用域内被重新声明。

```javascript
let name = 'lang'
let name = 'yiuxan'  // error: Identifier 'name' has already been declared
```

重复通过let声明同一个变量会报错。



## const

---

const的行为和let基本相同（在作用域和变量提升机制方面一致，这里就不再重复赘述了），唯一一个重要的区别是用const进行声明变量时，必须同时初始化变量，且通过const声明的变量初始化后，其指就不能再进行更改。

- `const`声明一个只读的常量，一旦声明，常量的值就不能改变

```javascript
const a = 1
a = 3
// TypeError: Assignment to constant variable.
```

- 这意味着，`const`一旦声明变量，就必须立即初始化，不能留到以后赋值

```javascript
const a;
// SyntaxError: Missing initializer in const declaration
```



## 总结var let const的差异

---

- `var`声明是全局作用域或函数作用域，而`let`和`const`是块作用域。
- `var`变量可以在其范围内更新和重新声明； `let`变量可以被更新但不能重新声明； `const`变量既不能更新也不能重新声明。
- 它们都被提升到其作用域的顶端。 但是，虽然使用变量`undefined`初始化了`var`变量，但未初始化`let`和`const`变量。
- 尽管可以在不初始化的情况下声明`var`和`let`，但是在声明期间必须初始化`const`。

| 声明方式 | 变量提升 | 暂时性死区 | 重复声明 | 初始值 |
| :------: | :------: | :--------: | :------: | :----: |
|   var    |    ✅     |     ❌      |    ✅     |   ❌    |
|   let    |    ❌     |     ✅      |    ❌     |   ❌    |
|  const   |    ❌     |     ✅      |    ❌     |   ✅    |

说明：严格意义上let和const存在变量的提升，但是看不到变量提升的效果，上述表格 的变量提升主要说明的是效果勿混淆。



## 参考链接

---

[一看就懂的var、let、const三者区别](https://juejin.cn/post/6925641096152399880#heading-7)

[JavaScript 中的 Var，Let 和 Const 有什么区别](https://chinese.freecodecamp.org/news/javascript-var-let-and-const/)

[我用了两个月的时间才理解 let](https://zhuanlan.zhihu.com/p/28140450)

