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