webpackJsonp([2],{"++il":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidearea"},[a("h4",[t._v("Only Show Sale Items")]),a("div",{staticClass:"can-toggle demo-rebrand-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.trigger,expression:"trigger"}],attrs:{id:"e",type:"checkbox"},domProps:{checked:Array.isArray(t.trigger)?t._i(t.trigger,null)>-1:t.trigger},on:{change:[function(e){var a=t.trigger,r=e.target,n=!!r.checked;if(Array.isArray(a)){var o=t._i(a,null);r.checked?o<0&&(t.trigger=a.concat([null])):o>-1&&(t.trigger=a.slice(0,o).concat(a.slice(o+1)))}else t.trigger=n},t.updateSale]}}),t._m(0)])])};r._withStripped=!0;var n={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"e"}},[e("div",{staticClass:"can-toggle__switch",attrs:{"data-checked":"Yes","data-unchecked":"No"}})])}]};e.a=n},"+ptz":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"capsule"},[a("app-masthead"),a("div",{staticClass:"contain"},[a("app-sidebar",{attrs:{pricerange:t.highprice},on:{"update:pricerange":function(e){t.highprice=e}}}),a("transition-group",{staticClass:"content",attrs:{name:"items",tag:"section"}},t._l(t.products,function(t,e){return a("app-item",{key:"item",attrs:{item:t,index:e}})}),1)],1)],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};e.a=n},"+tEi":function(t,e,a){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"masthead",style:"background:"+this.bkcolor},[e("img",{staticClass:"ppl-banner",attrs:{src:"/"+this.img+".png",alt:"Banner Image"}}),e("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"50.7px",height:"50.1px",viewBox:"0 0 50.7 50.1","enable-background":"new 0 0 50.7 50.1","xml:space":"preserve"}},[e("defs"),e("g",[e("circle",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",cx:"13",cy:"37.2",r:"11.5"}}),e("circle",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",cx:"37.7",cy:"33.6",r:"11.5"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M37.7,22.1\n\n    c-5.8-5-10.4-12.9-13.3-21.6C18.6,8,14.5,16.8,13,25.7"}})])]),e("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"49.8px",height:"53.3px",viewBox:"0 0 49.8 53.3","enable-background":"new 0 0 49.8 53.3","xml:space":"preserve"}},[e("defs"),e("g",[e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"\n\n    M23.1,50.7c1.2-0.7,2.5-0.7,3.7,0c1.4,0.8,3.1,1.1,3.9,1.1c7.1,0,17.7-10.2,17.7-29.2c0-7.5-6.4-13.3-13.3-13.3\n\n    c-3.2,0-6.2,0.8-8.4,2.8c0,0,0,0,0,0c-1,0.9-2.5,0.9-3.5,0c0,0,0,0,0,0c-2.2-2-5.2-2.8-8.4-2.8c-6.8,0-13.2,5.7-13.2,13.3\n\n    c0,19,10.6,29.2,17.7,29.2C20,51.8,21.7,51.5,23.1,50.7z"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"\n\n    M24.9,11.2c-0.4-4,0.9-8.4,4.4-10.2"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-linecap":"round","stroke-miterlimit":"10",d:"M23.1,42.7c-6.6,0-11.9-5.3-11.9-11.9"}})])]),e("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"44.8px",height:"44.8px",viewBox:"0 0 44.8 44.8","enable-background":"new 0 0 44.8 44.8","xml:space":"preserve"}},[e("defs"),e("g",[e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:"M42.8,35\n\n    c0.7,0.7,0.7,1.9-0.1,2.6c-9.5,8-24.3,7.5-33.9-1.6c-9.3-8.9-9.7-24.2-1.6-33.9C7.9,1.3,9.1,1.3,9.8,2L42.8,35z"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-miterlimit":"1",d:"M43.6,36.5c-9.7,6-22.5,4.2-31.1-4.3c-8.5-8.5-10-21.1-4.3-31.1"}}),e("line",{attrs:{fill:"none",stroke:"#1E262C","stroke-linecap":"round","stroke-miterlimit":"10",x1:"25.7",y1:"19.8",x2:"18.8",y2:"26.6"}}),e("line",{attrs:{fill:"none",stroke:"#1E262C","stroke-linecap":"round","stroke-miterlimit":"10",x1:"29.8",y1:"22.6",x2:"27.9",y2:"34.4"}}),e("line",{attrs:{fill:"none",stroke:"#1E262C","stroke-linecap":"round","stroke-miterlimit":"10",x1:"22.9",y1:"15.7",x2:"11",y2:"17.6"}})])]),e("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"41.9px",height:"58.1px",viewBox:"0 0 41.9 58.1","enable-background":"new 0 0 41.9 58.1","xml:space":"preserve"}},[e("defs"),e("g",[e("circle",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",cx:"15.6",cy:"19.5",r:"5.3"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:"M26.5,24.8L26.5,24.8\n\n    c1.4-0.1,2.6-0.7,3.5-1.6"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:"M31.3,21.1\n\n    c0.2-0.5,0.2-1,0.2-1.6c0-2.9-2.4-5.3-5.3-5.3c-2.9,0-5.3,2.4-5.3,5.3c0,1.9,1,3.5,2.4,4.4"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:"M35.3,30.1L35.3,30.1\n\n    c2.8-0.1,5.1-2.5,5.1-5.3c0-2.9-2.4-5.3-5.3-5.3c-1.5,0-2.8,0.6-3.8,1.6c-0.6,0.6-1,1.3-1.3,2.1c-0.2,0.5-0.2,1-0.2,1.6\n\n    c0,1.9,1,3.5,2.4,4.4"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:"M20.4,33.4\n\n    c0.9,0.7,2,1.1,3.2,1.1c1.5,0,2.8-0.6,3.8-1.6c0.6-0.6,1-1.3,1.3-2.1c0.2-0.5,0.2-1,0.2-1.6c0-1.9-1-3.5-2.4-4.4\n\n    c-0.8-0.6-1.8-0.9-2.9-0.9c-0.1,0-0.2,0-0.3,0c-1.9,0.1-3.6,1.2-4.5,2.9"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:"M28.5,38.1\n\n    c-0.9-0.9-1.4-2.2-1.4-3.6c0-0.5,0.1-1.1,0.2-1.6"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:"M28.6,30.8\n\n    c0.9-0.9,2.1-1.5,3.5-1.6c0.1,0,0.2,0,0.3,0c1.1,0,2.1,0.3,2.9,0.9h0c1.4,0.9,2.4,2.6,2.4,4.4c0,2.8-2.2,5.1-4.9,5.3"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:"M16.6,38.8\n\n    c0.5-2.4,2.6-4.3,5.2-4.3c2.4,0,4.5,1.7,5.1,3.9c0.1,0.4,0.2,0.9,0.2,1.4c0,2.2-1.4,4.2-3.3,4.9c-0.6,0.2-1.3,0.4-2,0.4\n\n    c-1,0-2-0.3-2.7-0.8"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:"M12.6,38.2\n\n    c0.2-0.6,0.4-1.2,0.4-1.9c0-0.3,0-0.5-0.1-0.8c-0.2-1.6-1.2-3-2.5-3.8C9.6,31.3,8.7,31,7.7,31c-2.9,0-5.3,2.4-5.3,5.3\n\n    c0,2.9,2.4,5.3,5.3,5.3c0.4,0,0.8-0.1,1.2-0.1"}}),e("circle",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",cx:"13.9",cy:"43.3",r:"5.3"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:"M23.8,44.7L23.8,44.7\n\n    c0.6,2.2,2.7,3.9,5.1,3.9c2.9,0,5.3-2.4,5.3-5.3c0-1.4-0.5-2.6-1.4-3.6c-1-1.1-2.4-1.7-3.9-1.7c-0.1,0-0.3,0-0.4,0\n\n    c-0.5,0-1.1,0.2-1.6,0.4"}}),e("circle",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",cx:"20.9",cy:"51.3",r:"5.3"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:"M12.9,35.5\n\n    c0.8,0.5,1.7,0.8,2.7,0.8c2,0,3.8-1.2,4.7-2.9c0.4-0.7,0.6-1.5,0.6-2.4c0-1.7-0.8-3.2-2.1-4.2v0c-0.9-0.7-2-1.1-3.2-1.1\n\n    c-1.5,0-2.8,0.6-3.8,1.6c-0.6,0.6-1,1.3-1.3,2.1c-0.2,0.5-0.2,1-0.2,1.6c0,0.3,0,0.5,0.1,0.8"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:"M11.9,27.3\n\n    c0.2-0.5,0.2-1,0.2-1.6c0-2.9-2.4-5.3-5.3-5.3c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3c1.5,0,2.8-0.6,3.8-1.6"}}),e("path",{attrs:{fill:"none",stroke:"#1E262C","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M20.9,15.5v-4.7\n\n    c0-1.2,0.7-2.3,1.7-2.8l0,0c1.1-0.5,1.7-1.6,1.7-2.8V0.5"}})])]),e("span",{attrs:{id:"titletext"}},[this._v(this._s(this.title))])])};r._withStripped=!0;var n={render:r,staticRenderFns:[]};e.a=n},"/TYz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("ofyz"),n=a("+ptz"),o=!1;var i=function(t){o||a("uA/Y")},c=a("VU/8")(r.a,n.a,!1,i,null,null);c.options.__file="pages/index.vue",e.default=c.exports},"0QFm":function(t,e,a){"use strict";var r=a("sEUc");e.a={props:{sale:{type:Boolean,default:!1},pricerange:{type:[Number,String],default:300}},data:function(){return{min:0,max:400}},components:{AppSwitch:r.a}}},"0wnQ":function(t,e,a){"use strict";e.a={props:{item:{type:Object,required:!0},index:{type:Number,required:!0}},filters:{usdollar:function(t){return"$"+t}},methods:{addItem:function(){this.$store.commit("addItem",this.item)}}}},"1iBt":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".item[data-v-67a9bf49]{border-radius:5px;padding:20px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}.salepill[data-v-67a9bf49]{background:#e82319;color:#fff;font-family:Barlow,sans-serif;position:absolute;right:30px;top:60px;padding:2px 10px 4px;text-transform:uppercase;font-size:13px;font-weight:700;border-radius:1000px}p[data-v-67a9bf49]{font-size:18px}",""])},"3Xgf":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"h1[data-v-5209668b]{color:#fff;position:relative;z-index:100;font-size:60px;padding:8px 80px}#titletext[data-v-5209668b]{font-size:42px}.bk[data-v-5209668b]{position:absolute;top:0;left:0}.ppl-banner[data-v-5209668b]{position:absolute;z-index:10;right:100px}.masthead[data-v-5209668b]{width:100%;height:100px;color:#fff;position:relative;overflow:hidden;margin:10px 0}",""])},"5yeg":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"aside[data-v-7bd12016]{background:#fff;float:left;padding:20px}.sidearea[data-v-7bd12016]{border-bottom:1px solid #ccc}.sidearea[data-v-7bd12016]:last-of-type{border:none}.callout[data-v-7bd12016]{padding:20px 0}.callout h4[data-v-7bd12016]{padding-bottom:10px}.sidearea[data-v-7bd12016]:first-of-type{padding-bottom:40px}label[data-v-7bd12016]{font-family:Playfair Display,serif;padding:15px 0;text-align:center}span[data-v-7bd12016]{font-family:Barlow,sans-serif}.max[data-v-7bd12016]{font-size:12px;float:right;color:#565656}.min[data-v-7bd12016]{float:left;font-size:12px;color:#565656}",""])},FngX:function(t,e,a){"use strict";e.a={props:{bkcolor:{type:String,default:"#745f4f"},title:{type:String,default:"Tiny Food"},img:{type:String,default:"banner-ppl"}}}},JufQ:function(t,e,a){"use strict";var r=a("0QFm"),n=a("nXDZ"),o=!1;var i=function(t){o||a("Zwy3")},c=a("VU/8")(r.a,n.a,!1,i,"data-v-7bd12016",null);c.options.__file="components/AppSidebar.vue",e.a=c.exports},P26d:function(t,e,a){var r=a("3Xgf");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("173dcd9f",r,!1,{sourceMap:!1})},QJlx:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"aside{float:left;width:19.1489%}.content{float:right;width:79.7872%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:10px;padding:0!important}@supports (display:grid){.capsule>*{width:auto;margin:0}}",""])},Zwy3:function(t,e,a){var r=a("5yeg");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("5b22041c",r,!1,{sourceMap:!1})},jlTb:function(t,e,a){"use strict";var r=a("FngX"),n=a("+tEi"),o=!1;var i=function(t){o||a("P26d")},c=a("VU/8")(r.a,n.a,!1,i,"data-v-5209668b",null);c.options.__file="components/AppMasthead.vue",e.a=c.exports},nXDZ:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[a("div",{staticClass:"sidearea"},[a("label",{attrs:{for:"pricerange"}},[t._v("Highest Price: "),a("span",[t._v("$"+t._s(t.pricerange))])]),a("input",{staticClass:"slider",attrs:{id:"pricerange",type:"range",min:t.min,max:t.max,step:"0.1"},domProps:{value:t.pricerange},on:{input:function(e){t.$emit("update:pricerange",e.target.value)}}}),a("span",{staticClass:"min"},[t._v("$"+t._s(t.min))]),a("span",{staticClass:"max"},[t._v("$"+t._s(t.max))])]),t.sale?t._e():a("app-switch"),t._m(0),t._m(1)],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidearea callout"},[e("h4",[this._v("Special Sale!")]),e("p",[this._v("Shop now because half our items are greatly reduced")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidearea callout"},[e("h4",[this._v("Contact Us")]),e("p",[this._v("Questions? Call us at 1-888-555-SHOP, we're happy to be of service.")])])}]};e.a=n},ofyz:function(t,e,a){"use strict";var r=a("JufQ"),n=a("jlTb"),o=a("p/c1");e.a={components:{AppSidebar:r.a,AppMasthead:n.a,AppItem:o.a},data:function(){return{highprice:300}},computed:{products:function(){var t=this;return this.$store.state.products.filter(function(e){return t.$store.state.sale?e.price<t.highprice&&e.sale:e.price<t.highprice})}}}},"p/c1":function(t,e,a){"use strict";var r=a("0wnQ"),n=a("wm3B"),o=!1;var i=function(t){o||a("zmH+")},c=a("VU/8")(r.a,n.a,!1,i,"data-v-67a9bf49",null);c.options.__file="components/AppItem.vue",e.a=c.exports},pVEj:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"h4[data-v-5182992c]{margin:20px 0}.can-toggle[data-v-5182992c]{position:relative}.can-toggle [data-v-5182992c],.can-toggle [data-v-5182992c]:after,.can-toggle [data-v-5182992c]:before{-webkit-box-sizing:border-box;box-sizing:border-box}.can-toggle input[type=checkbox][data-v-5182992c]{opacity:0;position:absolute;top:0;left:0}.can-toggle input[type=checkbox][disabled]~label[data-v-5182992c]{pointer-events:none}.can-toggle input[type=checkbox][disabled]~label .can-toggle__switch[data-v-5182992c]{opacity:.4}.can-toggle input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]:before{content:attr(data-unchecked);left:0}.can-toggle input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]:after{content:attr(data-checked)}.can-toggle label[data-v-5182992c]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.can-toggle label .can-toggle__label-text[data-v-5182992c]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:32px}.can-toggle label .can-toggle__switch[data-v-5182992c]{position:relative}.can-toggle label .can-toggle__switch[data-v-5182992c]:before{content:attr(data-checked);position:absolute;top:0;text-transform:uppercase;text-align:center}.can-toggle label .can-toggle__switch[data-v-5182992c]:after{content:attr(data-unchecked);position:absolute;z-index:5;text-transform:uppercase;text-align:center;background:#fff;-webkit-transform:translateZ(0);transform:translateZ(0)}.can-toggle.demo-rebrand-2[data-v-5182992c]{cursor:pointer}.can-toggle.demo-rebrand-2 input[type=checkbox][disabled]~label[data-v-5182992c]{color:hsla(0,0%,53%,.5)}.can-toggle.demo-rebrand-2 input[type=checkbox]:focus~label .can-toggle__switch[data-v-5182992c],.can-toggle.demo-rebrand-2 input[type=checkbox]:hover~label .can-toggle__switch[data-v-5182992c]{background-color:#888}.can-toggle.demo-rebrand-2 input[type=checkbox]:focus~label .can-toggle__switch[data-v-5182992c]:after,.can-toggle.demo-rebrand-2 input[type=checkbox]:hover~label .can-toggle__switch[data-v-5182992c]:after{color:#6f6f6f}.can-toggle.demo-rebrand-2 input[type=checkbox]:hover~label[data-v-5182992c]{color:#7b7b7b}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked~label[data-v-5182992c]:hover{color:#3059e8}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]{background-color:#5576ed}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]:after{color:#2752e7}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:focus~label .can-toggle__switch[data-v-5182992c],.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:hover~label .can-toggle__switch[data-v-5182992c]{background-color:#3e64ea}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:focus~label .can-toggle__switch[data-v-5182992c]:after,.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:hover~label .can-toggle__switch[data-v-5182992c]:after{color:#1844dd}.can-toggle.demo-rebrand-2 label[data-v-5182992c]{font-family:Barlow,sans-serif;cursor:pointer}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;background:#959595}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]:before{color:hsla(0,0%,100%,.7)}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]:after{-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;color:#888}.can-toggle.demo-rebrand-2 input[type=checkbox]:focus~label .can-toggle__switch[data-v-5182992c]:after,.can-toggle.demo-rebrand-2 input[type=checkbox]:hover~label .can-toggle__switch[data-v-5182992c]:after{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]:after{-webkit-transform:translate3d(27px,0,0);transform:translate3d(27px,0,0)}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:focus~label .can-toggle__switch[data-v-5182992c]:after,.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:hover~label .can-toggle__switch[data-v-5182992c]:after{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}.can-toggle.demo-rebrand-2 label[data-v-5182992c]{font-size:0}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]{height:30px;-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px;border-radius:22px}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]:before{left:22px;font-size:9px;line-height:30px;width:30px;padding:0 12px}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]:after{top:3px;left:3px;border-radius:11px;width:27px;line-height:24px;font-size:9px}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]:hover:after{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}.sidearea[data-v-5182992c]{padding-bottom:30px}",""])},s4WA:function(t,e,a){var r=a("pVEj");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("1eedc0ca",r,!1,{sourceMap:!1})},sEUc:function(t,e,a){"use strict";var r=a("wIzJ"),n=a("++il"),o=!1;var i=function(t){o||a("s4WA")},c=a("VU/8")(r.a,n.a,!1,i,"data-v-5182992c",null);c.options.__file="components/AppSwitch.vue",e.a=c.exports},"uA/Y":function(t,e,a){var r=a("QJlx");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("6cb45a9c",r,!1,{sourceMap:!1})},wIzJ:function(t,e,a){"use strict";e.a={data:function(){return{trigger:this.checked}},computed:{checked:function(){return this.$store.state.sale}},methods:{updateSale:function(){this.$store.commit("switchSale")}}}},wm3B:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.item.name))]),t.item.sale?a("span",{staticClass:"salepill"},[t._v("Sale")]):t._e(),a("img",{attrs:{src:"/"+t.item.img,alt:"Image of "+t.item.name}}),a("p",[t._v(t._s(t._f("usdollar")(t.item.price)))]),a("button",{staticClass:"add",on:{click:t.addItem}},[t._v("Add Item")])])};r._withStripped=!0;var n={render:r,staticRenderFns:[]};e.a=n},"zmH+":function(t,e,a){var r=a("1iBt");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("567967d1",r,!1,{sourceMap:!1})}});