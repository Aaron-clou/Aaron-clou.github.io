(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{533:function(a,s,e){"use strict";e.r(s);var n=e(18),t=Object(n.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#框架"}},[a._v("#")]),a._v(" 框架")]),a._v(" "),e("p",[a._v("排序后的谓词不能访问数组，因为该数组不包含在函数的读取帧中。函数(或谓词)的读取框架是函数允许读取的所有内存位置。限制函数可读内容的原因是，当写入内存时，可以确保没有读取该内存部分的函数具有与之前相同的值。例如，我们可能有两个数组，我们知道其中一个是有序的。如果没有在已排序的谓词上放置"),e("code",[a._v("reads")]),a._v("注释，那么当修改未排序的数组时，就无法确定另一个数组是否停止排序。虽然在这种情况下，我们可以提供不变量来保存它，但在操作数据结构时，它会变得更加复杂。在这种情况下，框架是使核查过程可行的关键。")]),a._v(" "),e("div",{staticClass:"language-dafny line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("predicate sorted(a: array<int>)\n   requires a != null\n   reads a\n{\n   forall j, k :: 0 <= j < k < a.Length ==> a[j] <= a[k]\n}\npredicate sorted(a: array<int>)\n   ...\n   reads a\n   ...\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br")])]),e("p",[e("code",[a._v("reads")]),a._v("注释不是布尔表达式，就像我们看到的其他注释一样，它可以与前置条件和后置条件一起出现在任何地方。它指定了函数允许访问的一组内存位置，而不是应该为真的属性。数组的名称，就像上面例子中的"),e("code",[a._v("a")]),a._v("，代表该数组的所有元素。也可以指定对象字段和对象集，但我们在这里不讨论这些主题。"),e("code",[a._v("Dafny")]),a._v("将检查您没有读取读取帧中没有声明的任何内存位置。这意味着函数内的函数调用必须具有作为调用函数读取帧子集的读取帧。需要注意的一点是，函数的参数如果不是内存位置，则不需要声明。\n框架也会影响方法。正如您可能已经猜到的，它们不需要列出它们所读取的内容，因为我们已经编写了一个方法来访问没有"),e("code",[a._v("reads")]),a._v("注释的数组。方法可以读取它们想要的任何内存，但它们需要用"),e("code",[a._v("modifies annotation")]),a._v("列出它们修改的内存的哪些部分。它们几乎和它们的"),e("code",[a._v("读取")]),a._v("表亲一样，除了它们说的是可以改变什么，而不是函数的值取决于什么。结合读取，修改限制允许"),e("code",[a._v("Dafny")]),a._v("证明代码的属性，否则将非常困难或不可能。"),e("code",[a._v("读取")]),a._v("和"),e("code",[a._v("修改")]),a._v("是允许"),e("code",[a._v("Dafny")]),a._v("一次只处理一个方法的工具之一，因为它们限制了对内存的任意修改，使"),e("code",[a._v("Dafny")]),a._v("能够推理。\n请注意，帧化只适用于堆，或通过引用访问的内存。局部变量不是存储在上的，所以它们不能在"),e("code",[a._v("reads")]),a._v("注释中被提及。还请注意，像集合、序列和多集这样的类型都是值类型，它们被视为整数或局部变量。数组和对象是堆引用类型，它们存储在堆上(尽管引用本身和它所指向的值之间总是有微妙的区别)。")]),a._v(" "),e("p",[e("strong",[a._v("练习13")])]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看题目及代码")]),a._v(" "),e("p",[a._v("修改' sorted '谓词的定义，以便当数组被排序且其所有元素都不相同时，它准确地返回true。")]),a._v(" "),e("div",{staticClass:"language-dafny line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("predicate sorted(a: array<int>)\n   requires a != null\n   reads a\n{\n   // Fill in a new body here.\n}\npredicate sorted(a: array<int>)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])])]),a._v(" "),e("p",[e("strong",[a._v("练习14")])]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看题目及代码")]),a._v(" "),e("p",[a._v("如果移除前置条件' a != null '会发生什么?更改' sorted '的定义，使其允许参数为null，但如果是则返回false。")]),a._v(" "),e("div",{staticClass:"language-dafny line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('predicate sorted(a: array<int>)\n   reads a\n{\n   // Change this definition to treat null arrays as "not sorted".\n   // (i.e. return false for null arrays)\n   forall j, k :: 0 <= j < k < a.Length ==> a[j] <= a[k]\n}\npredicate sorted(a: array<int>)\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])])]),a._v(" "),e("h2",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])])])}),[],!1,null,null,null);s.default=t.exports}}]);