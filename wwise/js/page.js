var imgBox=document.getElementById('imgCarousel');
var LeftScroll=imgBox.scrollLeft+imgBox.clientWidth;
var position=0;


imgBox.addEventListener('click',function(e){
    console.log(imgBox.scrollLeft);
    console.log(imgBox.scrollWidth);
    console.log(LeftScroll);
    //console.log
},false)


function scrollLeft(LeftScroll){
    imgBox.scrollTo({
        top:0,
        left:LeftScroll,
        behabiour:'smooth'
    })
}
setInterval(() => {
    if(position<4){
        var toLeft=imgBox.scrollLeft+imgBox.clientWidth
        scrollLeft(toLeft)
        console.log(toLeft)
        console.log(imgBox.scrollLeft);
        console.log(imgBox.scrollWidth);
        position+=1;
    }
    else{
        position=0;
        scrollLeft(0);
    }
}, 5000);


var body=document.getElementsByTagName('body')[0]
var menuBtn=document.getElementById('menuBt');
var menuEle=document.getElementsByClassName('sideNav')[0]

body.addEventListener('click',function(e){

    console.log(e.target.id)
    if(e.target.id=="menuBt"){
        console.log("menuBt")
        if(menuEle.classList.contains('dsn')){
            menuEle.classList.add('df')
            menuEle.classList.remove('dsn')
            body.classList.add('bodyScroll')
        }
    }
    else{
       
        
            menuEle.classList.add('dsn')
            menuEle.classList.remove('df')
            body.classList.remove('bodyScroll')
        
    }



})

menuBtn.addEventListener('click',function(e){
    console.log("menuBt")
    if(e.target.id=="menuBt"){
        if(menuEle.classList.contains('dsn')){
            menuEle.classList.add('df')
            menuEle.classList.remove('dsn')
            body.classList.add('bodyScroll')
        }
    }
    else{
       
        
            menuEle.classList.add('dsn')
            menuEle.classList.remove('df')
            body.classList.remove('bodyScroll')
        
    }
},false)