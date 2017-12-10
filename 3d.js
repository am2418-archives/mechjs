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
