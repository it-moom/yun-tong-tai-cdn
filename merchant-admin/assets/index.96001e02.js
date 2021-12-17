import{e,f as a}from"./dict.48704bff.js";import{B as t}from"./index.df8416fe.js";import{n as l}from"./index.93a91980.js";import"./vendor.b81382fb.js";import"./index.54d00222.js";import"./index.esm.bd21e2fc.js";const i={};var d=l({data:()=>({tableApi:"/platform/payment-conf/wxpay/list",apiMethod:"post",tableColumns:[{name:"platformPaymentConfId",label:"支付配置",enumMapApi:"/platform/payment-conf/list-selector"},{name:"mchId",label:"微信支付商户号"},{name:"appId",label:"微信支付 AppId"},{name:"secretKey",label:"微信支付 SecretKey"},{name:"status",label:"状态",type:"chip",enumMap:e},{name:"gmtCreate",label:"创建时间"},{name:"gmtModified",label:"修改时间"}].map((e=>Object.assign(e,{fluid:!Reflect.has(e,"fluid")||e.fluid}))),tableActions:[{label:"编辑",type:"edit"},{label:"删除",type:"delete",title:'确定删除微信支付配置 <code class="red--text">{{ mchId }}</code> ?'}],editDialogDataApi:"/platform/payment-conf/wxpay/info/{{ id }}",addRowApi:"/platform/payment-conf/wxpay/create",editRowApi:"/platform/payment-conf/wxpay/update/{{ id }}",deleteRowApi:"/platform/payment-conf/wxpay/delete/{{ id }}",addDialogTitle:"新增微信支付配置",editDialogTitle:"编辑微信支付配置信息",form:[{name:"id",hidden:!0},{name:"platformPaymentConfId",label:"支付配置",required:!0,type:"select",api:"/platform/payment-conf/list-selector"},{name:"mchId",label:"微信支付商户号",required:!0},{name:"appId",label:"微信支付 AppId",required:!0},{name:"secretKey",label:"微信支付 SecretKey",required:!0},{name:"status",label:"状态",required:!0,type:"select",items:a,default:"1"}],formValidateRules:{platformPaymentConfId:[e=>!!e||"请选择支付配置"],mchId:[e=>!!e||"请输入微信支付商户号"],appId:[e=>!!e||"请输入微信支付 AppId"],secretKey:[e=>!!e||"请输入微信支付 SecretKey"]}}),components:{BasicPage:t}},(function(){var e=this,a=e.$createElement;return(e._self._c||a)("BasicPage",{attrs:{"table-api":e.tableApi,"table-api-method":e.apiMethod,"table-columns":e.tableColumns,"table-actions":e.tableActions,form:e.form,"form-validate-rules":e.formValidateRules,"add-dialog-title":e.addDialogTitle,"edit-dialog-title":e.editDialogTitle,"edit-dialog-data-api":e.editDialogDataApi,"add-row-api":e.addRowApi,"edit-row-api":e.editRowApi,"delete-row-api":e.deleteRowApi}})}),[],!1,o,null,null,null);function o(e){for(let a in i)this[a]=i[a]}var p=function(){return d.exports}();export default p;
