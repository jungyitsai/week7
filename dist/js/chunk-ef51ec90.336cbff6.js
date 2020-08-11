(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef51ec90"],{1175:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("validation-observer",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(t){var s=t.invalid;return[a("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors,r=t.classes;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[e._v("收件人姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userinfo.name,expression:"userinfo.name"}],staticClass:"form-control",class:r,attrs:{type:"text",id:"username"},domProps:{value:e.userinfo.name},on:{input:function(t){t.target.composing||e.$set(e.userinfo,"name",t.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[e._v(e._s(s[0]))])])]}}],null,!0)}),a("validation-provider",{attrs:{rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors,r=t.classes;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userinfo.email,expression:"userinfo.email"}],staticClass:"form-control",class:r,attrs:{type:"email",id:"email"},domProps:{value:e.userinfo.email},on:{input:function(t){t.target.composing||e.$set(e.userinfo,"email",t.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[e._v(e._s(s[0]))])])]}}],null,!0)}),a("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors,r=t.classes;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"tel"}},[e._v("電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userinfo.tel,expression:"userinfo.tel"}],staticClass:"form-control",class:r,attrs:{type:"number",id:"tel"},domProps:{value:e.userinfo.tel},on:{input:function(t){t.target.composing||e.$set(e.userinfo,"tel",t.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[e._v(e._s(s[0]))])])]}}],null,!0)}),a("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors,r=t.classes;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"address"}},[e._v("住址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userinfo.address,expression:"userinfo.address"}],staticClass:"form-control",class:r,attrs:{type:"text",id:"address"},domProps:{value:e.userinfo.address},on:{input:function(t){t.target.composing||e.$set(e.userinfo,"address",t.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[e._v(e._s(s[0]))])])]}}],null,!0)}),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"payment"}},[e._v("付款方式")]),a("select",{staticClass:"form-control",attrs:{id:"payment",required:""}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("請選擇一種付款方式")]),a("option",{attrs:{value:"WebATM"}},[e._v("WebATM")]),a("option",{attrs:{value:"ATM"}},[e._v("ATM")]),a("option",{attrs:{value:"Barcode"}},[e._v("Barcode")]),a("option",{attrs:{value:"Credit"}},[e._v("Credit")]),a("option",{attrs:{value:"ApplePay"}},[e._v("ApplePay")]),a("option",{attrs:{value:"GooglePay"}},[e._v("GooglePay")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[e._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.userinfo.message,expression:"userinfo.message"}],staticClass:"form-control",attrs:{id:"message",name:"message",rows:"5",cols:"33"},domProps:{value:e.userinfo.message},on:{input:function(t){t.target.composing||e.$set(e.userinfo,"message",t.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:s}},[e._v("送出表單")])],1)]}}])}),a("div",{staticClass:"modal fade",attrs:{id:"alertModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[e._v(" "+e._s(e.alertModalMsg)+" "),e._m(0)])])])])],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])}],o=(a("99af"),{data:function(){return{isLoading:!1,userinfo:{name:"",email:"",tel:"",address:"",payment:"",message:""},alertModalMsg:""}},methods:{submitForm:function(){var e=this;console.log("submit-form",this.userinfo);var t="".concat("https://course-ec-api.hexschool.io/","api/").concat("83e5dddb-dc92-4272-9ddd-488cfb6ae1e0","/ec/orders");this.isLoading=!0,this.userinfo.payment=$("#payment").val(),this.$http.post(t,this.userinfo).then((function(t){console.log(t),e.isLoading=!1,e.userinfo={},$("#payment").val(""),e.$nextTick((function(){e.$refs.form.reset()})),e.alertModalMsg="結帳成功",$("#alertModal").modal("show")})).catch((function(t){console.log(t),e.isLoading=!1}))}}}),n=o,i=a("2877"),l=Object(i["a"])(n,s,r,!1,null,null,null);t["default"]=l.exports},"1dde":function(e,t,a){var s=a("d039"),r=a("b622"),o=a("2d00"),n=r("species");e.exports=function(e){return o>=51||!s((function(){var t=[],a=t.constructor={};return a[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,a){var s=a("861d"),r=a("e8b5"),o=a("b622"),n=o("species");e.exports=function(e,t){var a;return r(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?s(a)&&(a=a[n],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},8418:function(e,t,a){"use strict";var s=a("c04e"),r=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var n=s(t);n in e?r.f(e,n,o(0,a)):e[n]=a}},"99af":function(e,t,a){"use strict";var s=a("23e7"),r=a("d039"),o=a("e8b5"),n=a("861d"),i=a("7b0b"),l=a("50c4"),u=a("8418"),d=a("65f0"),c=a("1dde"),f=a("b622"),v=a("2d00"),m=f("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",g=v>=51||!r((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),_=c("concat"),y=function(e){if(!n(e))return!1;var t=e[m];return void 0!==t?!!t:o(e)},h=!g||!_;s({target:"Array",proto:!0,forced:h},{concat:function(e){var t,a,s,r,o,n=i(this),c=d(n,0),f=0;for(t=-1,s=arguments.length;t<s;t++)if(o=-1===t?n:arguments[t],y(o)){if(r=l(o.length),f+r>p)throw TypeError(b);for(a=0;a<r;a++,f++)a in o&&u(c,f,o[a])}else{if(f>=p)throw TypeError(b);u(c,f++,o)}return c.length=f,c}})},e8b5:function(e,t,a){var s=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==s(e)}}}]);
//# sourceMappingURL=chunk-ef51ec90.336cbff6.js.map