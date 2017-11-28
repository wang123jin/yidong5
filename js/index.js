/*
* @Author: Administrator
* @Date:   2017-11-12 12:34:54
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-13 00:58:34
*/
window.onload=function(){
	let forward=document.getElementsByClassName('wubu-anniu')[0];
	let back=document.getElementsByClassName('wubu-anniu1')[0];
	let wubu=document.getElementsByClassName('wubu1')[0];
	let wububox=document.getElementsByClassName('wubu-box');
	console.log(forward,back,wubu,wububox)
	child=wubu.childElementCount;
	console.log(child);
	childW=wubu.children[0].offsetWidth+
	parseInt(getComputedStyle(wububox[0],null).marginRight);
	console.log(childW);
	let num=0;
	let t=setInterval(fn,3000);
	function fn(){
		num++;
		if (num>11) {
			num=0;
		}
		wubu.style.transform=`translateX(${-295*num}px)`;
	}
	back.onclick=function(){
		console.log(num);
		if(num==12){
			return;
		}
		num++;
		wubu.style.transform=`translateX(${-295*num}px)`;
	}

	forward.onclick=function(){
		if(num==0){
			return;
		}
		num--;	
		wubu.style.transform=`translateX(${-295*num}px)`;
		/*for(let i=0;i<wubu.length;i++){
			
		}*/
	}


	// 导航下拉
	let sanbubox=document.getElementsByClassName('sanbu-box');
	let ssxl=document.getElementsByClassName('ss-xl');
	console.log(sanbubox,ssxl)
	for(let i=0;i<sanbubox.length;i++){
		sanbubox[i].onmouseover=function(){
			ssxl[i].style.display='block';
		}

		sanbubox[i].onmouseout=function(){
			ssxl[i].style.display='none';
		}
	}


	// 轮播图开始
	let center=document.getElementsByClassName('center-box')[0];
	let centerBox=center.getElementsByTagName('li');
	let list=document.getElementsByClassName('list-yuan')[0];
	let yuan=document.getElementsByClassName('yuan');
	let forward1=document.getElementsByClassName('zuofushou-zhezhao')[0];
	let back1=document.getElementsByClassName('youfushou-zhezhao')[0];
	console.log(center,centerBox,list,yuan);
	console.log(forward,back)
	let num1=0;
	let t1=setInterval(fn1,2000)
	for(let i=0;i<yuan.length;i++){
        yuan[i].onclick=function(){
            centerBox[i].className='dong';
            centerBox[num1].className='';
            yuan[i].style.background='red';
            yuan[num1].style.background='';
            num1=i;
        }
	}

    forward1.onclick=fn2;
	back1.onclick=fn1;
	function fn1(){
		num1++;
		if(num1==centerBox.length){
			num1=0;
		}
		for(let i=0;i<centerBox.length;i++){
			// centerBox[i].style.display='none'
			centerBox[i].className=''
			yuan[i].style.background='#fff'
		}
			centerBox[num1].className='dong'
			yuan[num1].style.background='red';
	}
    function fn2(){
        num1--;
        if(num1==-1){
            num1=centerBox.length-1;
        }
        for(let i=0;i<centerBox.length;i++){
            centerBox[i].className=''
            yuan[i].style.background='#fff'
        }
        centerBox[num1].className='dong'
        yuan[num1].style.background='red';
    }

    // 二维码
	let yiDong=document.querySelector('.yiDongXiaoGuo');
   console.log(yiDong);
   let yd=document.querySelector('.ydewm');
   console.log(yd);
    yiDong.onmouseover=function () {
        yiDong.style.background='white';
        yd.style.display='block';
    }
    yiDong.onmouseout=function () {
        yd.style.display='none';
    }
}