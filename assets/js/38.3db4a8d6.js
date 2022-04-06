(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{524:function(s,n,e){"use strict";e.r(n);var t=e(18),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[s._v("#")]),s._v(" 方法")]),s._v(" "),e("p",[e("code",[s._v("Dafny")]),s._v("在许多方面类似于典型的命令式编程语言。有方法、变量、类型、循环、if语句、数组、整数等等。任何"),e("code",[s._v("Dafny")]),s._v("程序的基本单元之一就是方法。方法是一段命令式的、可执行的代码。在其他语言中，它们可能被称为过程或函数，但在"),e("code",[s._v("Dafny")]),s._v("中，"),e("Badge",{attrs:{text:"函数",vertical:"middle"}}),s._v("这个术语是为一个不同的概念保留的，我们稍后将讨论这个概念。方法的声明方式如下:")],1),s._v(" "),e("div",{staticClass:"language-dafny line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("method Abs(x: int) returns (y: int)\n{\n   ...\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("它声明了一个名为"),e("code",[s._v("Abs")]),s._v("的方法，它接受一个名为"),e("code",[s._v("x")]),s._v("的整数参数，并返回一个名为"),e("code",[s._v("y")]),s._v("的整数。请注意，每个参数和返回值都需要类型，并在每个名称后面跟一个冒号("),e("code",[s._v(":")]),s._v(")。同样，返回值是命名的，并且可以有多个返回值，如下所示:")]),s._v(" "),e("div",{staticClass:"language-dafny line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("method MultipleReturns(x: int, y: int) returns (more: int, less: int)\n{\n   ...\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("方法主体是包含在大括号中的代码，到目前为止，它被简明地表示为 "),e("code",[s._v("...")]),s._v(" "),e("em",[s._v("(这不是Dafny的语法)")]),s._v(". 主体由一系列语句组成,例如熟悉的命令式赋值, if语句, 循环，其他方法调用, "),e("code",[s._v("return")]),s._v("语句等等。例如, "),e("code",[s._v("MultipleReturns")]),s._v("方法可以声明为:")]),s._v(" "),e("div",{staticClass:"language-dafny line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("method MultipleReturns(x: int, y: int) returns (more: int, less: int)\n{\n   more := x + y;\n   less := x - y;\n   // comments: are not strictly necessary.\n   /* unless you want to keep your sanity. */\n}\nmethod MultipleReturns(x: int, y: int) returns (more: int, less: int)\n{\n   more := x + y;\n   less := x - y;\n   // comments: are not strictly necessary.\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("赋值不使用"),e("code",[s._v("=")]),s._v(", 而是使用"),e("code",[s._v(":=")]),s._v(". "),e("em",[s._v("(事实上Dafny使用 "),e("code",[s._v("==")]),s._v(" 表示相等, Dafny的表达式中没有使用单个的等号。)")]),s._v(" 简单语句后面必须有分号，空格和注释 "),e("em",[s._v("(//和 /**/)")]),s._v(" 将会被忽略. 为了从方法中返回值, 该值在"),e("code",[s._v("return")]),s._v("语句之前的某个时间被分配给一个指定的返回值。实际上，返回值的行为非常类似于局部变量，并且可以被赋值不止一次。但是，输入参数是只读的。"),e("code",[s._v("return")]),s._v("语句用于在到达方法的主体块结束之前返回。"),e("code",[s._v("return")]),s._v("语句可以只是"),e("code",[s._v("return")]),s._v("关键字 (其中使用了"),e("code",[s._v("out")]),s._v("参数的当前值), 也可以获取要返回的值列表。也有复合语句，如"),e("code",[s._v("if")]),s._v("语句。"),e("code",[s._v("if")]),s._v("语句不需要在布尔条件周围加上括号，其作用正如人们所期望的那样:")]),s._v(" "),e("div",{staticClass:"language-dafny line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("method Abs(x: int) returns (y: int)\n{\n   if x < 0 {\n      return -x;\n   } else {\n      return x;\n   }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("需要注意的是，它们总是需要在分支周围使用大括号，即使分支只包含一个语句(复合语句或其他语句)。这里的"),e("code",[s._v("if")]),s._v("语句使用熟悉的比较运算符语法检查"),e("code",[s._v("x")]),s._v("是否小于零，并返回适当的绝对值。"),e("em",[s._v("(其他比较运算符 <=, >, >=, !=和==, 具有预期的含义。有关操作符的更多信息，请参见参考资料。)")])])])}),[],!1,null,null,null);n.default=a.exports}}]);