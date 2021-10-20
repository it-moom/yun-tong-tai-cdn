import{B as e}from"./index.11c36ab0.js";import{r as a,i as t,g as l,h as i,j as n,k as m,l as o,m as s}from"./dict.25022818.js";import{n as r}from"./index.d0f022ae.js";import"./vendor.23ac6402.js";import"./index.9e8c2e9e.js";import"./index.esm.3b94485e.js";const d={};var p=r({data:()=>({tableApi:"/platform/order/list",apiMethod:"post",tableColumns:[{name:"no",label:"订单号"},{name:"orderer",label:"下单人"},{name:"contactNumber",label:"联系电话"},{name:"address",label:"收货地址",width:"360px"},{name:"totalAmount",label:"总金额"},{name:"paymentMethod",label:"支付方式"},{name:"paymentNo",label:"支付单号"},{name:"refundStatus",label:"退款状态",enumMap:a},{name:"refundNo",label:"退款单号"},{name:"isClose",label:"是否关闭",enumMap:t},{name:"reviewed",label:"是否评价",enumMap:l},{name:"shipState",label:"物流状态",enumMap:i},{name:"extra",label:"其他说明"},{name:"gmtCreate",label:"创建时间"},{name:"gmtModified",label:"修改时间"}].map((e=>Object.assign(e,{fluid:!Reflect.has(e,"fluid")||e.fluid}))),tableActions:[{label:"编辑",type:"edit"}],editDialogDataApi:"/platform/order/info/by-order-id/{{ id }}",editRowApi:"/platform/order/update/{{ id }}",editDialogTitle:"编辑订单信息",form:[{name:"id",hidden:!0},{name:"orderer",label:"下单人姓名"},{name:"contactNumber",label:"联系电话"},{name:"refundStatus",label:"退款状态",type:"select",items:n},{name:"isClose",label:"是否关闭",type:"select",items:m},{name:"reviewed",label:"是否已评价",type:"select",items:o},{name:"shipState",label:"物流状态",type:"select",items:s},{name:"shipData",label:"物流数据"}],formValidateRules:{}}),components:{BasicPage:e}},(function(){var e=this,a=e.$createElement;return(e._self._c||a)("BasicPage",{attrs:{"table-api":e.tableApi,"table-api-method":e.apiMethod,"table-columns":e.tableColumns,"table-actions":e.tableActions,form:e.form,"form-validate-rules":e.formValidateRules,"edit-dialog-title":e.editDialogTitle,"edit-dialog-data-api":e.editDialogDataApi,"edit-row-api":e.editRowApi}})}),[],!1,b,null,null,null);function b(e){for(let a in d)this[a]=d[a]}var u=function(){return p.exports}();export default u;
