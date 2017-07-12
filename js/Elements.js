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



        var box1=document.getElementsByClassName('box1');
        var uL=document.getElementsByClassName('uL')[0];
        var aLi=uL.getElementsByTagName('li');
        for(var i=0;i<aLi.length;i++){
            aLi[i].index=i;
            aLi[i].onmouseover=function(){
                for(var j=0;j<box1.length;j++){
                box1[j].style.display='none';
                // aLi[j].style.border='none';
                }
                box1[this.index].style.display="block";
                // this.style.border='1px solid orange';
            }
        }




        var oUl=document.getElementsByClassName('uLL')[0];
var aLLi=oUl.getElementsByTagName('li');
var left=document.getElementById('btnl');
var right=document.getElementById('btnr');
oUl.innerHTML+=oUl.innerHTML;
 oUl.style.width=aLLi[0].offsetWidth*aLLi.length+'px';
 var timer=null;
            clearInterval(timer);
                timer=setInterval(function(){
                    oUl.style.left=oUl.offsetLeft+1+'px';
                    if(oUl.offsetLeft>0){
                        oUl.style.left=-oUl.offsetWidth/2+'px';
                    }
                    if(oUl.offsetLeft<-oUl.offsetWidth/2){
                    oUl.style.left=0;
                  }
                }, 10);
  oUl.onmouseover=function(){
    clearInterval(timer);
  }
  oUl.onmouseout=function(){
    timer=setInterval(function(){
                    oUl.style.left=oUl.offsetLeft+1+'px';
                    if(oUl.offsetLeft>0){
                        oUl.style.left=-oUl.offsetWidth/2+'px';
                    }
                    if(oUl.offsetLeft<-oUl.offsetWidth/2){
                    oUl.style.left=0;
                  }
                }, 10);
  }


            left.onclick=function(){
                clearInterval(timer);
                timer=setInterval(function(){
                    oUl.style.left=oUl.offsetLeft-1+'px';
                    if(oUl.offsetLeft>0){
                        oUl.style.left=-oUl.offsetWidth/2+'px';
                    }
                    if(oUl.offsetLeft<-oUl.offsetWidth/2){
                    oUl.style.left=0;
                  }
                }, 10)
            }


        right.onclick=function(){
            clearInterval(timer);
                timer=setInterval(function(){
                    oUl.style.left=oUl.offsetLeft+1+'px';
                    if(oUl.offsetLeft>0){
                        oUl.style.left=-oUl.offsetWidth/2+'px';
                    }
                    if(oUl.offsetLeft<-oUl.offsetWidth/2){
                    oUl.style.left=0;
                  }
                }, 10)
            }


}