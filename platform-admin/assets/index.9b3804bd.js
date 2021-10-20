import{B as e}from"./index.a73e7f78.js";import{n as t}from"./index.a326922c.js";import"./vendor.23ac6402.js";import"./index.ffb5169d.js";import"./index.esm.3b94485e.js";const a={};var r=t({data(){return{apiMethod:"post",tableColumns:[{name:"product.title",label:"商品名称"},{name:"productProperty.title",label:"属性名"},{name:"value",label:"属性值"},{name:"extra",label:"其他说明"},{name:"gmtCreate",label:"创建时间"},{name:"gmtModified",label:"修改时间"}].map((e=>Object.assign(e,{fluid:!0}))),tableActions:[{icon:"mdi-square-edit-outline",label:"编辑",type:"edit"},{icon:"mdi-delete-outline",label:"删除",type:"delete",title:'确定删除商品属性 <code class="red--text">{{ productProperty.title }}</code> ?'}],editDialogDataApi:"/merchant/product-property-value/info/{{ id }}",addRowApi:"/merchant/product-property-value/create",editRowApi:"/merchant/product-property-value/update/{{ id }}",deleteRowApi:"/merchant/product-property-value/delete/{{ id }}",addDialogTitle:"新增商品属性值",editDialogTitle:"编辑商品属性值信息",form:[{name:"id",hidden:!0},{name:"productId",hidden:!0,default:this.$route.params.productId},{name:"productPropertyId",label:"商品属性",required:!0,type:"select",api:`/merchant/product-property/list/selector-by-product-id/${this.$route.params.productId}`},{name:"value",label:"属性值",required:!0},{name:"extra",label:"其他说明",type:"textarea"}],formValidateRules:{productPropertyId:[e=>!!e||"请选择商品属性"],value:[e=>!!e||"请输入属性值"]}}},computed:{tableApi:({$route:e})=>`/merchant/product-property-value/list/by-product-id/${e.params.productId}`},methods:{submitPretreatment(e){e.productId=this.$route.params.productId}},components:{BasicPage:e}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("BasicPage",{attrs:{"table-api":e.tableApi,"table-api-method":e.apiMethod,"table-columns":e.tableColumns,"table-actions":e.tableActions,form:e.form,"form-validate-rules":e.formValidateRules,"add-dialog-title":e.addDialogTitle,"edit-dialog-title":e.editDialogTitle,"edit-dialog-data-api":e.editDialogDataApi,"add-row-api":e.addRowApi,"edit-row-api":e.editRowApi,"delete-row-api":e.deleteRowApi,"submit-pretreatment":e.submitPretreatment}})}),[],!1,i,null,null,null);function i(e){for(let t in a)this[t]=a[t]}var d=function(){return r.exports}();export default d;
