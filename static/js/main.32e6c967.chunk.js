(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{21:function(e,t,a){e.exports=a(45)},4:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),c=a.n(s),o=a(2),i=a.n(o),u=a(3),l=a(16),m=a(17),h=a(5),p=a(19),d=a(20),f=a(18),v=a.n(f),g=(a(4),function(e){var t=e.regions,a=e.getRegionData;return r.a.createElement("select",{className:"dropdown bg-black bn light-gray",onChange:a},r.a.createElement("option",null,"Select State"),t.map((function(e,t){return r.a.createElement("option",{key:t},e)})))}),b=function(e){var t=e.counties,a=e.getCountyData;return r.a.createElement("select",{className:"dropdown bg-black bn light-gray",onChange:a},r.a.createElement("option",null,"Select County"),t.map((function(e,t){return r.a.createElement("option",{key:t},e)})))};function y(e){return r.a.createElement("div",{className:"display-data"},r.a.createElement("h2",null,e.area),r.a.createElement("div",{className:"flex"},r.a.createElement("article",{className:"center mw5 mw6-ns br4 hidden ba b--white-10 mv4"},r.a.createElement("h3",{className:"f4 bg-dark-gray br3 br--top black-60 mv0 pv2 ph3 orange"},"Confirmed Cases"),r.a.createElement("div",{className:"pa3 bt b--black-10"},r.a.createElement("h2",{className:"f2 f5-ns lh-copy measure orange"},e.confirmed))),r.a.createElement("article",{className:"center mw5 mw6-ns br4 hidden ba b--white-10 mv4"},r.a.createElement("h3",{className:"f4 bg-dark-gray br3 br--top black-60 mv0 pv2 ph3 dark-red"},"Confirmed Deaths"),r.a.createElement("div",{className:"pa3 bt b--black-10"},r.a.createElement("h2",{className:"f2 f5-ns lh-copy measure dark-red"},e.deaths)))))}var E=function(e){var t=e.top10;function a(){return t.map((function(e){return r.a.createElement("tr",{className:"bb",key:e.name.toString()},r.a.createElement("td",{className:"pv2 ph3"},e.name),r.a.createElement("td",{className:"pv2 ph3"},e.cases),r.a.createElement("td",{className:"pv2 ph3"},e.deaths))}))}return a(),r.a.createElement("div",{className:"top-list"},r.a.createElement("h2",{className:"mb3"},"Top 10"),r.a.createElement("table",{className:"collapse ba br2 b--black-10 pv2 ph3 bg-light-gray gray tl center"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"bb bg-gray light-gray"},r.a.createElement("th",{className:"pv2 ph3 tl f6 fw6 ttu"},"U.S. State"),r.a.createElement("th",{className:"tr f6 ttu fw6 pv2 ph3"},"Cases"),r.a.createElement("th",{className:"tr f6 ttu fw6 pv2 ph3"},"Deaths")),a())))},D=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={usaData:{},top10:[],globalConfirmed:0,globalDeaths:0,usaConfirmed:0,usaDeaths:0,confirmed:0,recovered:0,deaths:0,regions:[],usaState:0,counties:[],countyConfirmed:0,countyRecover:0,countyDeaths:0},n.getRegionData=n.getRegionData.bind(Object(h.a)(n)),n.getCountyData=n.getCountyData.bind(Object(h.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getData(),this.getGlobalData(),this.getUSAData()}},{key:"getData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid-api.com/api/reports?&iso=USA");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),n=a.data.map((function(e){return e.region.province})),r=a.data.map((function(e){return{name:e.region.province,cases:e.active,deaths:e.deaths}})).sort((function(e,t){return t.cases-e.cases})).slice(0,10),this.setState({regions:n,top10:r,usaData:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getGlobalData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid19.mathdro.id/api");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({globalConfirmed:a.confirmed.value,globalDeaths:a.deaths.value});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUSAData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid19.mathdro.id/api/countries/USA");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({usaConfirmed:a.confirmed.value,usaDeaths:a.deaths.value});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRegionData",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("USA"!==t.target.value){e.next=2;break}return e.abrupt("return",this.getData());case 2:return e.prev=2,a=t.target.value,e.next=6,v.a.get("https://covid-api.com/api/reports?&iso=USA&region_province=".concat(a));case 6:n=e.sent,console.log(n),console.log(a),r=n.data.data[0],this.setState({confirmed:r.confirmed,active:r.active,deaths:r.deaths,usaState:a}),this.getCounties(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),404===e.t0.response.status&&this.setState({confirmed:"No Data",recovered:"No Data",deaths:"No Data"});case 17:case"end":return e.stop()}}),e,this,[[2,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getCounties",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid-api.com/api/reports?&iso=USA&region_province=".concat(this.state.usaState));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.data[0].region.cities.map((function(e){return e.name})),this.setState({counties:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCountyData",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,s,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(e){return e.name===a},a=t.target.value,e.next=4,fetch("https://covid-api.com/api/reports?&iso=USA&region_province=".concat(this.state.usaState));case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,s=r.data[0].region.cities,o=s.find(c),console.log(o),this.setState({countyConfirmed:o.confirmed,countyDeaths:o.deaths}),console.log("Confirmed:".concat(this.state.countyConfirmed," Deaths: ").concat(this.state.countyDeaths));case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Covid-19 Update"),r.a.createElement("div",{className:"flex flex-wrap justify-around"},r.a.createElement(y,{area:"Global",confirmed:this.state.globalConfirmed,active:this.state.active,deaths:this.state.globalDeaths}),r.a.createElement(y,{area:"United States",confirmed:this.state.usaConfirmed,active:this.state.active,deaths:this.state.usaDeaths})),r.a.createElement(E,{top10:this.state.top10}),r.a.createElement(g,{regions:this.state.regions,getRegionData:this.getRegionData}),r.a.createElement(y,{area:this.state.usaState,confirmed:this.state.confirmed,active:this.state.active,deaths:this.state.deaths}),r.a.createElement(b,{className:"ml5",counties:this.state.counties,getCountyData:this.getCountyData}),r.a.createElement(y,{area:"County",confirmed:this.state.countyConfirmed,active:"no data",deaths:this.state.countyDeaths}))}}]),a}(r.a.Component);a(44);c.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.32e6c967.chunk.js.map