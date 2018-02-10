// For use with webpack/browserify

var mechDOM = {
get: function(selector,item,callback) {
var datavar = document.querySelectorAll(selector)[item];
callback(datavar);
return datavar;
},
putHTML: function(html,element){
element.innerHTML+=html;
},
changeHTML: function(html,element){
element.innerHTML=html;
},
getAttribute: function(element,attribute) {
return eval("element."+attribute);
},
changeAttribute: function(element,attribute,param) {
eval("element."+attribute+"=param");
}
};

var c = document.getElementsByTagName("canvas")[0];
if (c) { // Don't load canvasJS if there aren't any canvas elements
var ctx = c.getContext("2d");
var canvasJS = {
rectangle: function(x,y,h,w){ctx.fillRect(x,y,h,w);},
text: {
stroke:function(font,text,x,y){ctx.font = font;
ctx.strokeText(text,x,y);},
fill: function(font,text,x,y){ctx.font = font;
ctx.fillText(text,x,y);}
},
gradientLinear: function(gx,gy,gx2,gy2,clr1,clr2,x,y,w,h){
var grd = ctx.createLinearGradient(gx,gy,gx2,gy2);
grd.addColorStop(0,clr1);
grd.addColorStop(1,clr2);
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(x,y,w,h);
},
gradientRadial: function(x1,y1,r1,x2,y2,r2,clr1,clr2,x,y,w,h){
var grd = ctx.createRadialGradient(x1,y1,r1,x2,y2,r2);
grd.addColorStop(0,clr1);
grd.addColorStop(1,clr2);
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(x,y,w,h);
},
image: function(source,x,y,w,h){
imaged=new Image();
imaged.src=source;
ctx.drawImage(imaged,x,y,w,h);
}

}
}

var x;
var y;
var z;
var threed={
setX: function(param) {
x=param;
},
setY: function(param) {
y=param;
},
setZ: function(param) {
z=param;
},
xrot: function(rotation) {
//WIP
  var xx=x;
  x=x*Math.cos(rotation)-y*Math.sin(rotation);
  y=y*Math.cos(rotation)+xx*Math.sin(rotation);
},
  yrot: function(rotation) {
//WIP
  var yy=y;
  y=y*Math.cos(rotation)+z*Math.sin(rotation);
  z=z*Math.cos(rotation)+(-1*yy)*Math.sin(rotation);
}
};

var exports = module.exports = {mechDOM, canvasJS, threed}
