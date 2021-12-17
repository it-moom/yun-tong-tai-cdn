import{Y as e,ak as t}from"./vendor.b81382fb.js";import{B as a}from"./index.df8416fe.js";import{n as l}from"./index.93a91980.js";import"./index.54d00222.js";import"./index.esm.bd21e2fc.js";const i={};var d=l({data:()=>({tableApi:"/merchant/product-category-allot/list/by-merchant-id",apiMethod:"post",tableColumns:[{name:"productCategoryTitle",label:"商品分类"},{name:"dealerName",label:"零售商"},{name:"webUrl",label:"专属链接",type:"link",html:"点击跳转"},{name:"gmtCreate",label:"创建时间"},{name:"gmtModified",label:"修改时间"}].map((e=>Object.assign(e,{fluid:!0}))),tableActions:[{icon:"mdi-qrcode",label:"二维码下载",color:"primary",tooltip:({urlQrcodeImage:a})=>e(t,{attrs:{width:180,maxWidth:180,height:180,maxHeight:180,src:a}}),onClick({dealerName:e,urlQrcodeImage:t}){const a=document.createElement("a");a.href=t,a.target="_blank",a.download=`${e}.png`,document.body.appendChild(a),a.click(),document.body.removeChild(a)}},{icon:"mdi-square-edit-outline",label:"编辑",type:"edit"},{icon:"mdi-delete-outline",label:"删除",type:"delete",title:'确定删除划拨给 <code class="red--text">{{ dealerName }}</code> 的商品分类 <code class="red--text">{{ productCategoryTitle }}</code> ?'}],editDialogDataApi:"/merchant/product-category-allot/info/{{ id }}",addRowApi:"/merchant/product-category-allot/create/by-merchent-id",editRowApi:"/merchant/product-category-allot/update/{{ id }}",deleteRowApi:"/merchant/product-category-allot/delete/{{ id }}",addDialogTitle:"新增商品划拨",editDialogTitle:"编辑商品划拨信息",form:[{name:"id",hidden:!0},{name:"productCategoryId",label:"商品分类",required:!0,type:"select",api:"/merchant/product-category/list-selector/by-merchant-id",attrs:{filterable:!0}},{name:"dealerId",label:"零售商",required:!0,type:"select",api:"/merchant/dealer/list-selector",attrs:{filterable:!0}}],formValidateRules:{productCategoryId:[e=>!!e||"请选择商品分类"],dealerId:[e=>!!e||"请选择零售商"]}}),components:{BasicPage:a}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("BasicPage",{attrs:{"table-api":e.tableApi,"table-api-method":e.apiMethod,"table-columns":e.tableColumns,"table-actions":e.tableActions,form:e.form,"form-validate-rules":e.formValidateRules,"add-dialog-title":e.addDialogTitle,"edit-dialog-title":e.editDialogTitle,"edit-dialog-data-api":e.editDialogDataApi,"add-row-api":e.addRowApi,"edit-row-api":e.editRowApi,"delete-row-api":e.deleteRowApi}})}),[],!1,o,null,null,null);function o(e){for(let t in i)this[t]=i[t]}var r=function(){return d.exports}();export default r;
