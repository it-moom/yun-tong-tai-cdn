import{V as e}from"./index.9e8c2e9e.js";import{aj as t,ak as i,af as a,al as s,am as n,n as l,a6 as r,an as o,F as c}from"./vendor.23ac6402.js";import{n as d}from"./index.d0f022ae.js";const p={};var u=d({props:{placeholder:{type:String,default:"点击选择图片并上传"},maxSize:{type:Number,default:1/0},maxSizeErrorMsg:{type:String},accept:{type:String,default:"image/png, image/jpeg"}},data:()=>({isUploading:!1}),methods:{selectFile(){this.isUploading||this.$refs.file.$refs.input.click()},onSelectFileChange(e){if(e){if(e.size>this.maxSize)return this.$refs.file.value=null,void(this.maxSizeErrorMsg&&this.$dialog.notify.error(this.maxSizeErrorMsg,{position:"top-right",timeout:1500}));this.isUploading=!0,this.internalValue=null,this.$nextTick((()=>{const t=new FormData;t.set("file",e),this.$axios.post("/oss/file/upload",t).finally((()=>this.isUploading=!1)).then((({data:e})=>{this.internalValue=e.url}))}))}}},mixins:[e]},(function(){var e=this,d=e.$createElement,p=e._self._c||d;return p(t,{scopedSlots:e._u([{key:"default",fn:function(t){var d=t.hover;return[p("div",{staticClass:"image-upload",class:{isUploading:e.isUploading},on:{click:e.selectFile}},[e.internalValue?p("div",{staticClass:"image-preview"},[p(i,{staticClass:"rounded",attrs:{"max-width":"100%","max-height":"100%",src:e.internalValue,contain:""},scopedSlots:e._u([{key:"placeholder",fn:function(){return[p(a,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[p(s,{attrs:{indeterminate:"",color:"grey"}})],1)]},proxy:!0}],null,!0)})],1):e._e(),p(n,[!e.internalValue||e.isUploading||d?p("div",{staticClass:"image-tips d-flex justify-center align-center rounded"},[p("div",{staticClass:"text-center"},[e.isUploading?[p("div",[e._v("文件上传中 ...")])]:[p(l,{attrs:{large:""}},[e._v("mdi-upload")]),p("div",{domProps:{innerHTML:e._s(e.placeholder)}})]],2)]):e._e()]),p(r,{ref:"file",attrs:{accept:e.accept},on:{change:e.onSelectFileChange}}),p(o,[e.isUploading?p(c,{attrs:{indeterminate:"",absolute:"",top:""}}):e._e()],1)],1)]}}])})}),[],!1,f,"574cd2d4",null,null);function f(e){for(let t in p)this[t]=p[t]}var g=function(){return u.exports}();export{g as I};
