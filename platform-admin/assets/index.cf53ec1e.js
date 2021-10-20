import{i as e}from"./mobile.d11c903b.js";import{B as a}from"./index.a73e7f78.js";import{s as t,a as i}from"./dict.25022818.js";import{n as l}from"./index.a326922c.js";import"./vendor.23ac6402.js";import"./index.ffb5169d.js";import"./index.esm.3b94485e.js";const d={};var o=l({data:()=>({tableApi:"/platform/admin/list",apiMethod:"post",tableColumns:[{name:"username",label:"用户名"},{name:"name",label:"用户姓名"},{name:"phone",label:"手机号"},{name:"status",label:"状态",type:"chip",enumMap:t},{name:"gmtCreate",label:"创建时间"},{name:"gmtModified",label:"修改时间"}].map((e=>Object.assign(e,{fluid:!0}))),tableActions:[{icon:"mdi-square-edit-outline",label:"编辑",type:"edit"},{icon:"mdi-delete-outline",label:"删除",type:"delete",title:'确定删除平台管理员 <code class="red--text">{{ name }}</code> ?'}],editDialogDataApi:"/platform/admin/info/{{ id }}",addRowApi:"/platform/admin/create",editRowApi:"/platform/admin/update/{{ id }}",deleteRowApi:"/platform/admin/delete/{{ id }}",addDialogTitle:"新增平台管理员",editDialogTitle:"编辑平台管理员信息",form:[{name:"id",hidden:!0},{name:"username",label:"用户名",required:!0},{name:"name",label:"用户姓名"},{name:"phone",label:"手机号"},{name:"password",label:"密码",placeholder:"不填则默认 123456"},{name:"status",label:"状态",type:"select",items:i,default:"1",required:!0}],formValidateRules:{username:[e=>!!e||"请输入用户名"],phone:[a=>!a||(e(a)||"手机号格式不正确")]}}),components:{BasicPage:a}},(function(){var e=this,a=e.$createElement;return(e._self._c||a)("BasicPage",{attrs:{"table-api":e.tableApi,"table-api-method":e.apiMethod,"table-columns":e.tableColumns,"table-actions":e.tableActions,form:e.form,"form-validate-rules":e.formValidateRules,"add-dialog-title":e.addDialogTitle,"edit-dialog-title":e.editDialogTitle,"edit-dialog-data-api":e.editDialogDataApi,"add-row-api":e.addRowApi,"edit-row-api":e.editRowApi,"delete-row-api":e.deleteRowApi}})}),[],!1,n,null,null,null);function n(e){for(let a in d)this[a]=d[a]}var m=function(){return o.exports}();export default m;