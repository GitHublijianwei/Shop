window.onload = function() {

    //头部滚动
    window.onscroll = function() {
        var node = document.getElementById('node');
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if(t >= 200) {
            node.style.position = 'fixed';
            node.style.top = '0';
            // node.style.zIndex='999';
            // node.style.height='50px';
            node.style.opacity = '0.7';
            node.style.display = "block";
            node.style.background = "#fff";
            node.style.animation = '500ms ease-in-out 0s normal none 1 running fadeInDown';
        } else {
            node.style.position = 'absolute';
            // node.style.height='60px';
            node.style.opacity = '1';
            node.style.display = "block";
            node.style.background = "0";
        }

    }

    var bag1 = document.getElementById('bag1');
    var bag2 = document.getElementById('bag2');
    var left = document.getElementsByClassName('left')[0];
    var right = document.getElementsByClassName('right')[0];
    left.onclick = function() {
        if(bag1.style.display != 'none') {
            bag1.style.display = 'none';
            bag2.style.display = 'block'
        } else {
            bag1.style.display = 'block';
            bag2.style.display = 'none';
        }
    }
    right.onclick = function() {
        if(bag1.style.display != 'none') {
            bag1.style.display = 'none';
            bag2.style.display = 'block'
        } else {
            bag1.style.display = 'block';
            bag2.style.display = 'none';
        }
    }

    var content_4 = document.getElementById('content_4');
    var aLi = content_4.getElementsByTagName('li');
    var hiden = document.getElementsByClassName('hidden');

    for(var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function() {
            for(var j = 0; j < hiden.length; j++) {
                hiden[j].style.display = 'none';
            }
            hiden[this.index].style.display = 'block';
        }
    }

    var oUl = document.getElementsByClassName('uLL')[0];
    var aLLi = oUl.getElementsByTagName('li');
    var left = document.getElementById('btnl');
    var right = document.getElementById('btnr');
    oUl.innerHTML += oUl.innerHTML;
    oUl.style.width = aLLi[0].offsetWidth * aLLi.length + 'px';
    var timer = null;
    clearInterval(timer);
    timer = setInterval(function() {
        oUl.style.left = oUl.offsetLeft + 1 + 'px';
        if(oUl.offsetLeft > 0) {
            oUl.style.left = -oUl.offsetWidth / 2 + 'px';
        }
        if(oUl.offsetLeft < -oUl.offsetWidth / 2) {
            oUl.style.left = 0;
        }
    }, 10);
    oUl.onmouseover = function() {
        clearInterval(timer);
    }
    oUl.onmouseout = function() {
        timer = setInterval(function() {
            oUl.style.left = oUl.offsetLeft + 1 + 'px';
            if(oUl.offsetLeft > 0) {
                oUl.style.left = -oUl.offsetWidth / 2 + 'px';
            }
            if(oUl.offsetLeft < -oUl.offsetWidth / 2) {
                oUl.style.left = 0;
            }
        }, 10);
    }

    left.onclick = function() {
        clearInterval(timer);
        timer = setInterval(function() {
            oUl.style.left = oUl.offsetLeft - 1 + 'px';
            if(oUl.offsetLeft > 0) {
                oUl.style.left = -oUl.offsetWidth / 2 + 'px';
            }
            if(oUl.offsetLeft < -oUl.offsetWidth / 2) {
                oUl.style.left = 0;
            }
        }, 10)
    }

    right.onclick = function() {
        clearInterval(timer);
        timer = setInterval(function() {
            oUl.style.left = oUl.offsetLeft + 1 + 'px';
            if(oUl.offsetLeft > 0) {
                oUl.style.left = -oUl.offsetWidth / 2 + 'px';
            }
            if(oUl.offsetLeft < -oUl.offsetWidth / 2) {
                oUl.style.left = 0;
            }
        }, 10)
    }

    var button1 = document.getElementById('button1');
    button1.onclick = function() {
        var str = document.getElementById('str').value;
        reg = /^\w{1,20}@[a-zA-Z0-9]{2,5}((\.com)$|(\.cn)$)/;
        if(!reg.test(str)) {
            alert("对不起，您输入的字符串类型格式不正确!");
        } else {
            alert('验证通过!');
        }
    }
}