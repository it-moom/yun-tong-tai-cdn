import{C as a,A as t,o as e,a9 as i,u as o,l as n}from"./vendor.b81382fb.js";import{t as l,u as s,i as r,B as d}from"./index.df8416fe.js";import{_ as p}from"./index.54d00222.js";import{n as c}from"./index.93a91980.js";import"./index.esm.bd21e2fc.js";var g=function(){var o=this,n=o.$createElement,l=o._self._c||n;return l("div",{staticClass:"page-container root white rounded-lg fill-height"},[l("div",{staticClass:"search d-flex pa-2"},[l(a),l(t,{attrs:{color:"primary",height:"32"},on:{click:function(a){return o.$refs.page.openAddDialog()}}},[o._v("新增")])],1),l("div",{ref:"page-wrap",staticClass:"page-wrap"},[l("BasicPage",{ref:"page",attrs:{"table-actions":o.tableActions,form:o.form,"form-validate-rules":o.formValidateRules,"add-dialog-title":o.addDialogTitle,"edit-dialog-title":o.editDialogTitle,"edit-dialog-data-api":o.editDialogDataApi,"add-row-api":o.addRowApi,"edit-row-api":o.editRowApi,"delete-row-api":o.deleteRowApi},on:{ajaxFirstPageData:o.ajaxFirstPageData,"dialog-close":o.onDialogClose},scopedSlots:o._u([{key:"table",fn:function(){return[l("a-table",{attrs:{"children-column-name":"categoryList","row-key":"id",columns:o.columns,"data-source":o.dataSource,pagination:!1,loading:o.loading,scroll:{y:o.pageHeight-64}},scopedSlots:o._u([{key:"action",fn:function(a){return l("div",{},[l(t,{staticClass:"mr-2",attrs:{color:"primary",small:""},on:{click:function(t){return o.onAddChildCategory(a)}}},[l(e,{attrs:{small:""}},[o._v("mdi-plus")]),l("span",[o._v("新增子分类")])],1),l(t,{staticClass:"mr-2",attrs:{color:"primary",small:""},on:{click:function(t){return o.$refs.page.openEditDialog(a)}}},[l(e,{attrs:{small:""}},[o._v("mdi-square-edit-outline")]),l("span",[o._v("编辑")])],1),l(t,{staticClass:"mr-2",attrs:{color:"error",small:""},on:{click:function(t){o.$refs.page.onTableRowDelete(o.find(o.$refs.page.finalTableActions,{_type:"delete"}),a)}}},[l(e,{attrs:{small:""}},[o._v("mdi-delete-outline")]),l("span",[o._v("删除")])],1),l(t,{attrs:{color:"primary",small:""},on:{click:function(t){return o.$router.push({name:"MerchantAdmin/ProductManage/ProductPropertyManage",params:{productCategoryId:a.id}})}}},[l(e,{attrs:{small:""}},[o._v("mdi-playlist-edit")]),l("span",[o._v("商品属性")])],1)],1)}}])})]},proxy:!0}])})],1),l("div",{staticClass:"pagination-wrap d-flex justify-center align-center py-2"},[l("span",[o._v("共 "+o._s(o.pagination.total)+" 条")]),l(i,{attrs:{length:o.pagination.pageCount,"total-visible":7},model:{value:o.pagination.pageNum,callback:function(a){o.$set(o.pagination,"pageNum",a)},expression:"pagination.pageNum"}}),l("span",{staticClass:"mr-2"},[o._v("到第")]),l("div",{staticClass:"mr-2",staticStyle:{width:"60px"}},[l(p,{attrs:{dense:"",outlined:"","hide-details":"",height:"28px",type:"number",autocomplete:"off"},model:{value:o.pagination.toPage,callback:function(a){o.$set(o.pagination,"toPage",a)},expression:"pagination.toPage"}})],1),l("span",{staticClass:"mr-2"},[o._v("页")]),l(t,{attrs:{small:"",color:"primary",disabled:!o.isNumeric(o.pagination.toPage)},on:{click:function(a){o.pagination.pageNum=Number(o.pagination.toPage)}}},[o._v("跳转")])],1)])},m=[];const u=o({setup(){const a=l("page-wrap"),{height:t}=s(a);return{pageHeight:t}},data:()=>({loading:!1,columns:[{dataIndex:"title",title:"分类名称",ellipsis:!0},{dataIndex:"description",title:"分类简介",ellipsis:!0},{dataIndex:"gmtCreate",title:"创建时间",width:170,ellipsis:!0},{dataIndex:"gmtModified",title:"修改时间",width:170,ellipsis:!0},{title:"操作",fixed:"right",width:400,scopedSlots:{customRender:"action"}}],dataSource:[],pagination:{pageSize:10,total:0,pageCount:0,pageNum:0,toPage:""},tableActions:[{label:"编辑",type:"edit"},{label:"删除",type:"delete",title:'确定删除商品分类 <code class="red--text">{{ title }}</code> ?'}],editDialogDataApi:"/merchant/product-category/info/{{ id }}",addRowApi:"/merchant/product-category/create/by-merchant-id",editRowApi:"/merchant/product-category/update/{{ id }}",deleteRowApi:"/merchant/product-category/delete/{{ id }}",addDialogTitle:"新增商品分类",editDialogTitle:"编辑商品分类信息",form:[{name:"id",hidden:!0},{name:"parentId",label:"父商品分类",type:"select",api:"/merchant/product-category/list-selector/by-merchant-id",attrs:{clearable:!0,filterable:!0}},{name:"title",label:"分类名称",required:!0},{name:"description",label:"分类简介",type:"textarea"}],formValidateRules:{merchantId:[a=>!!a||"请选择所属商户"],name:[a=>!!a||"请输入分类名称"]}}),methods:{find:n.exports.find,isNumeric:r,ajaxData(){const a=this.pagination,t={pageNum:a.pageNum,pageSize:a.pageSize};this.loading=!0,this.$axios({method:"post",url:"/merchant/product-category/list/by-merchant-id",data:{},params:t}).finally((()=>this.loading=!1)).then((({data:a})=>{const{list:t,pageNum:e,pageSize:i,total:o}=a||{};this.dataSource=t,Object.assign(this.pagination,{pageNum:e,pageSize:i,pageCount:Math.ceil(o/i)||0,total:o})}))},ajaxFirstPageData(){const a=this.pagination,t=a.pageNum;a.pageNum=1,1===t&&this.ajaxData()},onAddChildCategory(a){const t=n.exports.find(this.form,{name:"parentId"});t.default=a.id,t.hidden=!0,this.$nextTick((()=>{this.$refs.page.openAddDialog()}))},onDialogClose(){const a=n.exports.find(this.form,{name:"parentId"});a.default=null,a.hidden=!1}},mounted(){this.ajaxData()},watch:{"pagination.pageNum":"ajaxData"},components:{BasicPage:d}}),f={};var h=c(u,g,m,!1,y,"a787a5de",null,null);function y(a){for(let t in f)this[t]=f[t]}var x=function(){return h.exports}();export default x;