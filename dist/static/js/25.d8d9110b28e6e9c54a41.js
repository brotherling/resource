webpackJsonp([25],{KT0H:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"assetEdit",data:function(){return{parentMsg:this.$route.query.name,assetedata:[],fielddata:[],SortingData:"",page:1,scloll:"true",num:"",sort:"ASM_A1_20",order:"desc",descstring:"默认排序",Imgshow:"false",menuId:this.$route.query.id,url:this.$route.query.url,assetId:[],saoData:null}},methods:{amend:function(){var t=this,s=this.assetId;1==this.assetId.length?this.$http.post("/API/assetservice/ValidataStatu",{assetIds:s},{emulateJSON:!0}).then(function(a){1==a.data.resultNum?t.$http.post("/API/assetservice/ValidataFreeze",{assetIds:s},{emulateJSON:!0}).then(function(s){console.log(s.data),1==s.data.resultNum?t.$router.push({path:"/assetAdd",query:{id:t.assetId}}):t.$dialog.alert({mes:s.data.resultMsg+"资产被占用或者冻结，不可以修改！"})}):t.$dialog.alert({mes:a.data.resultMsg+"资产已报废，不可以修改！"})}):this.$dialog.alert({mes:"只能选择一条进行修改"})},delAsset:function(){var t=this,s=this.assetId;console.log(s),0!=s.length?this.$http.post("/API/assetservice/ValidataFreeze",{assetIds:s},{emulateJSON:!0}).then(function(a){console.log(a.data),1==a.data.resultNum?t.$http.post("/API/assetservice/ValidataMainAsset",{assetIds:s},{emulateJSON:!0}).then(function(a){1==a.data.resultNum?t.$http.post("/API/assetservice/DeleteAsset",{assetIds:s},{emulateJSON:!0}).then(function(s){t.$dialog.confirm({title:"提示",mes:s.data.resultMsg,opts:[{txt:"确定",color:!0,callback:function(){t.sous()}}]})}):t.$dialog.alert({mes:a.data.resultMsg+"为主资产，将一并删除其下副签资产！"})}):t.$dialog.alert({mes:a.data.resultMsg+"资产被占用或者冻结，不可以删除！"})}):this.$dialog.alert({mes:"请选择要修改的数据"})},clickselect:function(t,s){var a=this.assetId;-1==a.indexOf(t)?a.push(t):a.splice($.inArray(t,a),1);var e=s.currentTarget;$(e).find("#selectImg").toggle(),$(e).find("#selectImgSuccess").toggle()},clicksao:function(){this.saoma(this.sous)},inputsous:function(){this.assetId=[],this.page=1,this.assetedata=[],this.saoData=null,this.UploadData()},sous:function(t){void 0!=t&&(this.saoData='{"ASM_A1_20":"'+t+'"}'),this.assetId=[],this.page=1,this.assetedata=[],this.UploadData()},UploadData:function(){var t=this;this.scloll=!1,this.$http.post("/API/assetservice/GetAssetList",{menuId:this.menuId,pageNumber:this.page,pageSize:"10",sortName:this.sort,order:this.order,url:this.url,param:this.SortingData,filter:this.saoData},{emulateJSON:!0}).then(function(s){var a=JSON.parse(s.data);t.num=a.total,t.scloll=!0,a.rows.forEach(function(t){this.assetedata.push(t)},t)})},handleScroll:function(t){var s=t.target;if(s.scrollTop+s.offsetHeight==s.scrollHeight||s.scrollTop+s.offsetHeight==s.scrollHeight-1){if(this.page+=1,this.page>this.num/10+2)return void this.$message({message:"数据已经全部加载完",type:"warning"});this.scloll&&this.UploadData()}},clickseriation:function(t){for(var s=t.target,a=document.getElementsByClassName("seriationImg"),e=s.innerText,i=void 0,l=void 0,n=0;n<a.length;n++)a[n].style.display="none";switch(s.children[0].style.display="block",e){case"编码正序":i="ASM_A1_20",l="asc";break;case"编码倒叙":i="ASM_A1_20",l="desc";break;case"使用人员":i="useUserId",l="desc";break;case"购置日期正序":i="ASM_A1_290",l="asc";break;case"购置日期倒序":i="ASM_A1_290",l="desc";break;default:i="ASM_A1_20",l="desc"}this.descstring=e,this.sort=i,this.order=l,this.sous(),this.clickLeftImg()},clickLeftImg:function(){var t=document.getElementsByClassName("seriation"),s=document.getElementById("zhezhao");"none"==t[0].style.display?(t[0].style.display="block",s.style.display="block"):(t[0].style.display="none",s.style.display="none")}},mounted:function(){void 0!=this.$route.query.saodata&&(this.SortingData=this.saoData='{"ASM_A1_20":"'+this.$route.query.saodata+'"}'),this.UploadData(),document.getElementsByClassName("seriationImg")[0].style.display="block"},watch:{$route:function(t,s){this.parentMsg=t.query.name,this.menuId=t.query.id,this.url=t.query.url,this.sous()}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"div1"},[e("v-header",{attrs:{header:t.parentMsg}}),t._v(" "),e("section",{staticClass:"edit_assetcontent"},[e("div",{staticClass:"conetenttop"},[e("div",{staticClass:"Topleft"},[t._v(t._s(this.descstring)),e("span",{staticClass:"LeftImg",on:{click:function(s){t.clickLeftImg()}}})]),t._v(" "),e("div",{staticClass:"TopRight"},[e("el-input",{staticClass:"input-with-select",attrs:{placeholder:""},model:{value:t.SortingData,callback:function(s){t.SortingData=s},expression:"SortingData"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(s){t.inputsous()}},slot:"append"})],1),t._v(" "),e("img",{staticClass:"RightImg",attrs:{src:a("vKV0")},on:{click:function(s){t.clicksao()}}})],1)]),t._v(" "),e("div",{staticClass:"seriation"},[e("ul",[e("li",{on:{click:function(s){t.clickseriation(s)}}},[t._v("默认排序"),e("span",{staticClass:"seriationImg"})]),t._v(" "),e("li",{on:{click:function(s){t.clickseriation(s)}}},[t._v("编码正序"),e("span",{staticClass:"seriationImg"})]),t._v(" "),e("li",{on:{click:function(s){t.clickseriation(s)}}},[t._v("编码倒序"),e("span",{staticClass:"seriationImg"})]),t._v(" "),e("li",{on:{click:function(s){t.clickseriation(s)}}},[t._v("使用人员"),e("span",{staticClass:"seriationImg"})]),t._v(" "),e("li",{on:{click:function(s){t.clickseriation(s)}}},[t._v("购置日期正序"),e("span",{staticClass:"seriationImg"})]),t._v(" "),e("li",{on:{click:function(s){t.clickseriation(s)}}},[t._v("购置日期倒序"),e("span",{staticClass:"seriationImg"})])])]),t._v(" "),e("div",{staticClass:"edit_assetpagedata",attrs:{id:"assetpage"},on:{scroll:function(s){t.handleScroll(s)}}},t._l(t.assetedata,function(s){return e("div",{key:s.ASM_A1_10,staticClass:"edit_pagedata",attrs:{id:s.ASM_A1_10},on:{click:function(a){t.clickselect(s.ASM_A1_10,a)}}},[e("div",{staticClass:"pagedata_left"},[e("icon",{attrs:{id:"selectImg",type:"circle"}}),t._v(" "),e("icon",{staticStyle:{display:"none"},attrs:{id:"selectImgSuccess",type:"success"}})],1),t._v(" "),e("div",{staticClass:"pagedata_right"},[e("div",{staticClass:"edit_conttop"},[e("span",[t._v("资产编号:")]),e("span",[t._v(t._s(s.ASM_A1_20))])]),t._v(" "),e("div",{staticClass:"edit_showdata"},[e("div",[e("span",[t._v("资产名称:")]),e("span",{staticClass:"void"},[t._v(t._s(s.ASM_A1_50))])]),t._v(" "),e("div",[e("span",[t._v("资产分类:")]),e("span",{staticClass:"void"},[t._v(t._s(s.ASM_A1_60))])]),t._v(" "),e("div",[e("span",[t._v("规格型号:")]),e("span",{staticClass:"void"},[t._v(t._s(s.ASM_A1_210))])]),t._v(" "),"在用"==s.ASM_A1_120?e("div",{staticClass:"showImg1"}):"在库"==s.ASM_A1_120?e("div",{staticClass:"showImg2"}):"维修"==s.ASM_A1_120?e("div",{staticClass:"showImg3"}):"借用"==s.ASM_A1_120?e("div",{staticClass:"showImg4"}):"报废"==s.ASM_A1_120?e("div",{staticClass:"showImg5"}):"待报废"==s.ASM_A1_120?e("div",{staticClass:"showImg6"}):t._e(),t._v(" "),""!=s.imgUrl&&null!=s.imgUrl?e("img",{directives:[{name:"preview",rawName:"v-preview",value:s.imgUrl,expression:"item.imgUrl"}],staticClass:"edit_stockImg",attrs:{src:s.imgUrl,alt:"","preview-title-enable":"false","preview-nav-enable":"false"}}):t._e()])])])})),t._v(" "),e("div",{staticClass:"edit_foot"},[e("div",{on:{click:function(s){t.amend()}}},[t._v("修改")]),t._v(" "),e("i"),t._v(" "),e("div",{on:{click:t.delAsset}},[t._v("删除")]),t._v(" "),e("i"),t._v(" "),e("div",[t._v("更多")])])]),t._v(" "),e("div",{attrs:{id:"zhezhao"}})],1)},staticRenderFns:[]};var l=a("C7Lr")(e,i,!1,function(t){a("X4Aj")},null,null);s.default=l.exports},X4Aj:function(t,s){}});
//# sourceMappingURL=25.d8d9110b28e6e9c54a41.js.map