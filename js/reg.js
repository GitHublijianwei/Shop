window.onload=function(){
    //头部滚动
     window.onscroll=function(){
    var node=document.getElementById('node');
    var t=document.documentElement.scrollTop || document.body.scrollTop;
    if(t>=200) {
            node.style.position='fixed';
            node.style.top='0';
            // node.style.zIndex='999';
            // node.style.height='50px';
            node.style.opacity='0.7';
            node.style.display="block";
            node.style.background="#fff";
            node.style.animation='500ms ease-in-out 0s normal none 1 running fadeInDown';
        } else {
            node.style.position='static';
            // node.style.height='60px';
            node.style.opacity='1';
            node.style.display="block";
            node.style.background="0";
          }
    }


    var travelBtn=document.getElementById('travelBtn');
    travelBtn.onclick=function(){

    var fName=document.getElementById('First Name').value;
    // var lName=document.getElementById('Last Name').value;
    var eAddress=document.getElementById('Email Address').value;
    var mobile=document.getElementById('Mobile').value;
    var pPassword=document.getElementById('Password').value;
    var rPassword=document.getElementById('Repeat Password').value;
    var toWrong=document.getElementsByClassName('reNone');
    for(var i=0;i<toWrong.length;i++){
    toWrong[i].style.display='none';
    if(!/\w{6,12}/.test(fName)){
        toWrong[0].style.display='block';
     }

    // else if(!/\w{6,12}/.test(lName)){
    //     toWrong[1].style.display='block';
    // }
    else if (!/^\w{1,20}@[a-zA-Z0-9]{2,5}((\.com)$|(\.cn)$)/.test(eAddress)){     
        toWrong[1].style.display='block';
    }else if(!/^1[34578]\d{9}$/.test(mobile)){   
        toWrong[2].style.display='block';
    }else if(!/[0-9a-zA-Z]{6,12}/.test(pPassword)){ 
        toWrong[3].style.display='block';
    }else if(pPassword!=rPassword){    
        toWrong[4].style.display='block';
    }else{
        window.open("Home.html")
    }

    }

    }
}