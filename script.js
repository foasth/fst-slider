var images=[
    'img01.jpg',
    'img02.jpg',
    'img03.jpg',
    'img04.jpg',
    'img05.jpg',
    'img06.jpg',
    'img07.jpg',
    'img08.jpeg',
    'img09.jpg',
    'img10.jpg',
]
var cpt=0

function change(){
    var img=document.getElementById('img-slider')
    img.setAttribute('src','/images/'+ images[cpt])

}
setInterval(()=>{
    change();
    cpt++;
    if(cpt>9) cpt=0;
},2000)

function next(){
   cpt++;
   if(cpt>9) cpt =0;
   change() 
}
function previous(){
   cpt--;
   if(cpt<0) cpt =9;
   change() 
}