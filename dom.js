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
