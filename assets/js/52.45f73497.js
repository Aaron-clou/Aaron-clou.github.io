(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{538:function(s,e,n){"use strict";n.r(e);var a=n(18),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"集合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集合"}},[s._v("#")]),s._v(" 集合")]),s._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),n("p",[s._v("各种类型的集合构成了Dafny验证的核心工具之一。集合表示元素的无序集合，集合中没有重复。与序列一样，集合也是不可变的值类型。这使得它们可以很容易地在注释中使用，而不涉及堆，因为set一旦创建就无法修改。集合的类型为:")])]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  set<int>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("例如，对于一组整数。通常，集合几乎可以是任何类型，包括对象。具体集合可以通过使用显示符号来指定:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var s1 := {}; // the empty set\n   var s2 := {1, 2, 3}; // set contains exactly 1, 2, and 3\n   assert s2 == {1,1,2,3,3,3,3}; // same as before\n   assert s1 != s2;  // sets with different elements are different\n   var s3, s4 := {1,2}, {1,4};\n}\n   var s1 := {}; // the empty set\n   var s2 := {1, 2, 3}; // set contains exactly 1, 2, and 3\n   assert s2 == {1,1,2,3,3,3,3}; // same as before\n   assert s1 != s2;  // sets with different elements are different\n   var s3, s4 := {1,2}, {1,4};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("例子演示中展示的"),n("code",[s._v("set")]),s._v("正是我们想要的：只包含指定元素。上面我们还看到为集合定义了相等符号，如果两个集合有完全相同的元素，那么它们就是相等的。也可以使用集合运算符从现有的集创建新的集:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   var s1 := {};\n   var s2 := {1, 2, 3};\n   var s3, s4 := {1,2}, {1,4};\n   assert s2 + s4 == {1,2,3,4}; // set union\n   assert s2 * s3 == {1,2} && s2 * s4 == {1}; // set intersection\n   assert s2 - s3 == {3}; // set difference\n}\n   assert s2 + s4 == {1,2,3,4}; // set union\n   assert s2 * s3 == {1,2} && s2 * s4 == {1}; // set intersection\n   assert s2 - s3 == {3}; // set difference\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("注意，因为集合中的最多只有一个，不能重复。所以得到的并集不会将重复元素计数超过一次。如果两个集合都是有限的，那么通过这些操作符将得到一个有限集，不能生成一个无限集。与算术运算符不同，集合运算符都是有自己定义的。除了通常的集合操作符外，还有一些比较操作符，它们通常具有以下含义:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   assert {1} <= {1, 2} && {1, 2} <= {1, 2}; // subset\n   assert {} < {1, 2} && !({1} < {1}); // strict, or proper, subset\n   assert !({1, 2} <= {1, 4}) && !({1, 4} <= {1, 4}); // no relation\n   assert {1, 2} == {1, 2} && {1, 3} != {1, 2}; // equality and non-equality\n}\n   assert {1} <= {1, 2} && {1, 2} <= {1, 2}; // subset\n   assert {} < {1, 2} && !({1} < {1}); // strict, or proper, subset\n   assert !({1, 2} <= {1, 4}) && !({1, 4} <= {1, 4}); // no relation\n   assert {1, 2} == {1, 2} && {1, 3} != {1, 2}; // equality and non-equality\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("与序列一样，集合也支持in和!in操作符来测试元素的成员关系。例如:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   assert 5 in {1,3,4,5};\n   assert 1 in {1,3,4,5};\n   assert 2 !in {1,3,4,5};\n   assert forall x :: x !in {};\n}\n   assert 5 in {1,3,4,5};\n   assert 1 in {1,3,4,5};\n   assert 2 !in {1,3,4,5};\n   assert forall x :: x !in {};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("集合用于一些注释，包括读取和修改子句。在本例中，它们可以是特定对象类型的集合(如链表中的"),n("code",[s._v("nodes")]),s._v(")，也可以是泛型引用类型对象"),n("code",[s._v("object")]),s._v("的集合。尽管它的名字是这样的，但它可以指向任何对象或数组。这对于将函数或方法可能读取或写入的所有不同类型的位置捆绑在一起非常有用。\n在"),n("code",[s._v("decreases")]),s._v("子句中使用时，集合按真子集排序。要在"),n("code",[s._v("decreases")]),s._v("子句中使用"),n("code",[s._v("set")]),s._v("，连续的值在某种意义上必须是“相关的”，这通常意味着它们是递归计算的，或类似的。\n您可以通过将一个集合与空集合进行比较来测试它是否为空(当且仅当s没有元素时，"),n("code",[s._v("s =={}")]),s._v("为真)。\n创建集合的一个有用方法是使用"),n("code",[s._v("set comprehension")]),s._v("。通过将f(x)包含到所有满足p(x)的T类型的x的集合中，它定义了一个新集合:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   set x: T | p(x) :: f(x)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("它以一种让人想起全称量词("),n("code",[s._v("forall")]),s._v(")的方式来定义集合。与限定符一样，该类型通常可以推断出来。与量词相反，bar语法(|)需要将谓词(p)与绑定变量(x)分离。结果集合元素的类型是"),n("code",[s._v("f(x)")]),s._v("的返回值的类型。构造的集合的值是"),n("code",[s._v("f(x)")]),s._v("的返回值"),n("code",[s._v(":x")]),s._v("本身只充当谓词p和函数f之间的桥梁。它通常具有与结果集相同的类型，但它不是必须要相同。作为一个例子:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   assert (set x | x in {0,1,2} :: x + 0) == {0,1,2};\n}\n   assert (set x | x in {0,1,2} :: x + 0) == {0,1,2};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("如果函数是恒等式，那么能以很优美的形式写出表达式")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   assert (set x | x in {0,1,2,3,4,5} && x < 3) == {0,1,2};\n}\n   assert (set x | x in {0,1,2,3,4,5} && x < 3) == {0,1,2};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("一般的集合推导中的非恒等函数容易混淆Dafny。例如，以下是正确的，但Dafny无法证明它:")]),s._v(" "),n("div",{staticClass:"language-dafny line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("method m()\n{\n   // assert {0*1, 1*1, 2*1} == {0,1,2};  // include this assertion as a lemma to prove the next line\n   assert (set x | x in {0,1,2} :: x * 1) == {0,1,2};\n}\nassert (set x | x in {0,1,2} :: x * 1) == {0,1,2};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("为了帮助Dafny证明这个断言，可以在它前面加上断言"),n("code",[s._v("assert {0*1, 1*1, 2*1} == {0,1,2}")]),s._v(";这让Dafny解决了两个断言。")]),s._v(" "),n("p",[s._v("如果没注意，用集合"),n("code",[s._v("set comprehension")]),s._v("将集合规定为无限数量的元素，但集合只允许有有限数量的元素。例如，如果您尝试将"),n("code",[s._v("set x | x % 2 == 0")]),s._v("作为所有偶数的集合，那么您将得到一个错误。(如果你真的想要一个无限集，可以使用iset类型。例如，"),n("code",[s._v("iset x | x % 2 == 0")]),s._v("在ghost环境中是合法的。)为了确保集合推导得到有限集合，Dafny采用了一些启发式方法。创建整数集时，可以通过将整数限定在谓词的至少一个连接词中来完成(类似于0 <= x < n)来实现。要求限定变量在现有集合中也可以，如上面的"),n("code",[s._v("x in {0,1,2}")]),s._v(".")])])}),[],!1,null,null,null);e.default=t.exports}}]);