webpackJsonp([13],{Nk44:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"saocode",data:function(){return{parentMsg:this.$route.query.name}},methods:{AssetClasses:function(t,e){var a=this.$echarts.init(document.getElementById("myChart")),r={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)",textStyle:{fontWeight:"normal",fontSize:18}},legend:{top:10,orient:"vertical",x:"left",data:e},series:[{name:"资产分类数量统计",type:"pie",selectedMode:"single",radius:[0,"30%"],color:["#C98525","#90C6AE","#739E83","#C13531"],label:{normal:{position:"inner",textStyle:{fontWeight:"normal",fontSize:16}}},labelLine:{normal:{show:!1}},data:t.data1},{name:"资产分类原值统计",type:"pie",radius:["40%","55%"],label:{normal:{textStyle:{fontWeight:"normal",fontSize:16}}},data:t.data2}]};a.setOption(r)},Statement:function(t,e,a){var r={normal:{formatter:"{c}  {name|{a}}",fontSize:16,rich:{name:{textBorderColor:"#fff"}}}},i={color:["#003366","#006699"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{top:15,data:["数量","原值"]},toolbox:{show:!0,orient:"vertical",left:"right",top:"center"},grid:{containLabel:!0},xAxis:[{type:"category",data:t}],yAxis:[{type:"value"}],series:[{name:"数量",type:"bar",barGap:0,label:r,data:e},{name:"原值",type:"bar",label:r,data:a}]};this.$echarts.init(document.getElementById("myChart")).setOption(i)},Statistical:function(t,e,a){var r={title:{},tooltip:{trigger:"axis"},legend:{top:20,data:["原值","数量"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:t},yAxis:{type:"value"},series:[{name:"原值",type:"line",data:a},{name:"数量",type:"line",data:e}]};this.$echarts.init(document.getElementById("myChart")).setOption(r)}},mounted:function(){var t=this;if("资产分类汇总表"==this.parentMsg){var e=[],a=[];this.$http.get("/API/reportservice/GetAssetCategoryChar",{params:{menuId:this.$route.query.id}},{emulateJSON:!0}).then(function(r){if(""!=(e=JSON.parse(r.data)))for(var i=0,s=e.data3.length;i<s;i++)a.push(e.data3[i].name);t.AssetClasses(e,a)})}else if("资产状态汇总表"==this.parentMsg){var r=[],i=[],s=[];this.$http.get("/API/reportservice/GetAssetStatusChar",{emulateJSON:!0}).then(function(e){for(var a=JSON.parse(e.data),n=0,o=a.data.length;n<o;n++)r.push(a.data[n].BAS_A1_40),i.push(a.data[n].COUNTS),s.push(a.data[n].WORTH);console.log(r,i,s),t.Statement(r,i,s)})}else if("资产统计走势图"==this.parentMsg){var n=[],o=[],l=[];this.$http.get("/API/reportservice/GetAssetChar",{params:{menuId:this.$route.query.id}},{emulateJSON:!0}).then(function(e){for(var a=JSON.parse(e.data),r=0,i=a.data.length;r<i;r++)n.push(a.data[r].StaticTime),o.push(a.data[r].Quantity),l.push(a.data[r].AssetOriWorth);t.Statistical(n,o,l)})}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"div1"},[e("v-header",{attrs:{header:this.parentMsg}}),this._v(" "),this._m(0),this._v(" "),e("v-foot")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"showhtml",attrs:{id:"myChart"}})])}]};var s=a("C7Lr")(r,i,!1,function(t){a("V/Fe")},null,null);e.default=s.exports},"V/Fe":function(t,e){}});
//# sourceMappingURL=13.d5ba50735bc8b6b87498.js.map