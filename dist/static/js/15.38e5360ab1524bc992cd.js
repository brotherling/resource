webpackJsonp([15],{"L+0+":function(t,a){},VGOm:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("3cXf"),i=e.n(s),r=e("cg3r"),c=e("2rmn"),d=(r.a,c.a,{name:"StockDetailList",components:{searchbar:r.a,stockfoot:c.a},data:function(){return{head:"",serial:[{name:"全部"},{name:"已盘"},{name:"盘亏"}],data:{filter:"",param:"",pageNumber:0,pcId:this.$route.query.pcid},sclocl:!0,reviewdata:[],RecordCount:"",titledata:"盘点状态",planId:""}},methods:{stockclick:function(t,a,e,s){this.$router.push({path:"/assetInventory/",query:{pcid:t,planId:this.planId,assetid:a,serial:e,state:s}})},getdata:function(){var t=this;this.scloll=!1;var a={pcId:this.data.pcId,pageNumber:this.data.pageNumber,pageSize:"10",sortName:"ASM_C4_20",order:"desc",filter:this.data.filter,param:this.data.param};this.$http.get("/API/stockservice/GetStockAssetDetailList",{params:{data:i()(a)}},{emulateJSON:!0}).then(function(a){t.RecordCount=a.data.RecordCount,a.data.List.forEach(function(t){this.reviewdata.push(t)},t),t.scloll=!0,void 0!=t.reviewdata[0]&&(t.planId=t.reviewdata[0].planId,t.head=t.reviewdata[0].pcCode)})},clicksearch:function(t){this.data.pageNumber=0,this.reviewdata=[],-1==this.data.filter.indexOf("ASM_C4_1225")&&(this.data.filter=void 0!=t?i()({ASM_C4_1225:this.data.filter,ASM_C4_20:t}):i()({ASM_C4_1225:this.data.filter})),this.getdata()},handleScroll:function(t){var a=t.target,e=this.data.pageNumber;if(a.scrollTop+a.offsetHeight==a.scrollHeight){if((e+=10)>this.RecordCount+10)return void this.$message({message:"数据已经全部加载完",type:"warning"});this.scloll&&(this.data.pageNumber=e,this.getdata())}}},created:function(){this.getdata()}}),l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"div1"},[e("v-header",{attrs:{header:"批次编号 : "+t.head}}),t._v(" "),e("searchbar",{attrs:{serial:t.serial,clicksearch:t.clicksearch,data:t.data,titledata:t.titledata}}),t._v(" "),e("section",{staticClass:"stcok",on:{scroll:function(a){t.handleScroll(a)}}},t._l(t.reviewdata,function(a){return e("div",{key:a.ASM_C4_01,staticClass:"stockcontent",on:{click:function(e){t.stockclick(a.pcId,a.ASM_C4_10,a.ASM_C4_20,a.ASM_C4_1225)}}},[e("div",{staticClass:"conttop"},[e("span",[t._v("资产编号:")]),e("span",[t._v(t._s(a.ASM_C4_20))])]),t._v(" "),e("div",{staticClass:"showdata"},[e("div",[e("span",[t._v("资产名称:")]),e("span",{staticClass:"void"},[t._v(t._s(a.ASM_C4_50))])]),t._v(" "),e("div",[e("span",[t._v("资产分类:")]),e("span",{staticClass:"void"},[t._v(t._s(a.ASM_C4_85))])]),t._v(" "),e("div",[e("span",[t._v("规格型号:")]),e("span",{staticClass:"void"},[t._v(t._s(a.ASM_C4_210))])])]),t._v(" "),"已盘"==a.ASM_C4_1225?e("div",{staticClass:"stockImg1"}):"盘亏"==a.ASM_C4_1225?e("div",{staticClass:"stockImg2"}):"盘盈"==a.ASM_C4_1225?e("div",{staticClass:"stockImg4"}):"盘溢"==a.ASM_C4_1225?e("div",{staticClass:"stockImg3"}):t._e(),t._v(" "),""!=a.imgUrl&&null!=a.imgUrl?e("img",{directives:[{name:"preview",rawName:"v-preview",value:a.imgUrl,expression:"item.imgUrl"}],staticClass:"stockImg",attrs:{src:a.imgUrl,alt:"","preview-title-enable":"false","preview-nav-enable":"false"}}):t._e()])})),t._v(" "),e("stockfoot",{attrs:{pcId:t.data.pcId,planId:t.planId,toggleIndex:5}})],1)},staticRenderFns:[]};var n=e("C7Lr")(d,l,!1,function(t){e("L+0+")},null,null);a.default=n.exports}});
//# sourceMappingURL=15.38e5360ab1524bc992cd.js.map