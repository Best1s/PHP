// JavaScript 能够以不同方式“显示”数据：

// 使用 window.alert() 写入警告框
// 使用 document.write() 写入 HTML 输出
// 使用 innerHTML 写入 HTML 元素
// 使用 console.log() 写入浏览器控制台
//window.alert("test");
a = 5;
c = a 
document.write(c);

//HTML 事件:
//HTML 网页完成加载
//HTML 输入字段被修改
//HTML 按钮被点击

//常见的 HTML 事件：
//onchange	HTML 元素已被改变
//onclick	用户点击了 HTML 元素
//onmouseover	用户把鼠标移动到 HTML 元素上
//onmouseout	用户把鼠标移开 HTML 元素
//onkeydown	用户按下键盘按键
//onload	浏览器已经完成页面加载
//完整参考https://www.w3school.com.cn/jsref/dom_obj_event.asp

function whichButton(event) {
    var btnNum = event.button;
    if (btnNum == 2) {
        document.getElementById("showclick").innerHTML = "您点击了鼠标右键！";
    }
    else if (btnNum == 0) {
        document.getElementById("showclick").innerHTML = "您点击了鼠标左键！";
    }
    else if (btnNum == 1) {
        document.getElementById("showclick").innerHTML = "您点击了鼠标中键！";
    }
    else {
        alert("您点击了" + btnNum + "号键，我不能确定它的名称。");
    }
    str = document.getElementById('showclick').innerHTML;
}

function mouseOver() {    
    document.getElementById('showclick').style.color = "red";
    document.getElementById("showclick").innerHTML = "鼠标在这一行！";
}
function mouseOut() {    
    document.getElementById('showclick').style.color = "seagreen";
    document.getElementById('showclick').innerHTML = str;
}



//字符串方法 https://www.w3school.com.cn/jsref/jsref_obj_string.asp
//数字方法 https://www.w3school.com.cn/jsref/jsref_obj_number.asp
//数组方法 https://www.w3school.com.cn/jsref/jsref_obj_array.asp
//数组排序
//数组迭代
//


//error 的 name 属性可返回六个不同的值：

//错误名	描述
//EvalError	已在 eval() 函数中发生的错误
//RangeError	已发生超出数字范围的错误
//ReferenceError	已发生非法引用
//SyntaxError	已发生语法错误
//TypeError	已发生类型错误
//URIError	在 encodeURI() 中已发生的错误
//非标准的 Error 对象属性
//Mozilla 和 Microsoft 定义了非标准的 error 对象属性：

//fileName(Mozilla)
//lineNumber(Mozilla)
//columnNumber(Mozilla)
//stack(Mozilla)
//description(Microsoft)
//number(Microsoft)
function err1() {
    try {
        adddlert("欢迎您，亲爱的用户！");
    }
    catch (err) {
        document.getElementById("err").innerHTML = "err1 function：" + err.message;
    }
}
function err2() {
    try {
        afda("xxxxxx");
        if (2 < 3) throw "未定义afda";
    }
    catch (err) {
        document.getElementById("err2").innerHTML = "err2 function：" + err;
    }
    finally {
        document.getElementById("err3").innerHTML = "err2 function：" + "无论 try / catch 结果如何都执行的代码块"
    }
}
err1();
err2();

//JavaScript严格模式
//通过在脚本或函数的开头添加 "use strict"; 来声明严格模式。指令只能在脚本或函数的开头被识别
//函数中声明严格模式，拥有局部作用域（只有函数中的代码以严格模式执行）
//严格模式中不允许使用为未来预留的关键词：
//implements
//interface
//let
//package
//private
//protected
//public
//static
//yield


//JavaScript this 关键词指的是它所属的对象。
//在方法中，this 指的是所有者对象。
//单独的情况下，this 指的是全局对象。
//在函数中，this 指的是全局对象。
//在函数中，严格模式下，this 是 undefined。
//在事件中，this 指的是接收事件的元素。
//显式函数绑定
//call() 和 apply()

//let 关键词声明拥有块作用域的变量。
//const 定义的变量与 let 变量类似，但不能重新赋值