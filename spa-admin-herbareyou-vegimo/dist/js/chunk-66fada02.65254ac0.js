(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66fada02"],{"1c73":function(t,e,r){"use strict";var n=r("7a23"),c={key:0,class:"p-0 m-0"};function a(t,e,r,a,s,u){return 0!==t.errorMessages.length?(Object(n["s"])(),Object(n["g"])("div",c,[(Object(n["s"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(t.errorMessages,(function(t,e){return Object(n["s"])(),Object(n["g"])("p",{key:e,class:"text-danger p-0 m-0"},Object(n["C"])(t),1)})),128))])):Object(n["f"])("",!0)}var s=Object(n["k"])({props:{errorMessages:{type:Array,default:[],required:!1}}}),u=r("d959"),o=r.n(u);const i=o()(s,[["render",a]]);e["a"]=i},"7c1c":function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return a})),r.d(e,"d",(function(){return s})),r.d(e,"c",(function(){return u}));r("99af");var n=r("b32d"),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"".concat("http://localhost:8000/api/admin/v1/","orders"),method:"get",params:t})},a=function(t){return Object(n["a"])({url:"".concat("http://localhost:8000/api/admin/v1/","orders/").concat(t),method:"get"})},s=function(t,e){return Object(n["a"])({url:"".concat("http://localhost:8000/api/admin/v1/","orders/").concat(t,"/updateStatus"),data:{status:e},method:"put"})},u=function(t,e){return Object(n["a"])({url:"".concat("http://localhost:8000/api/admin/v1/","orders/").concat(t,"/updateDeliveryLocation"),data:e,method:"put"})}},"8e27":function(t,e,r){"use strict";var n=r("7a23"),c={class:"mb-3 mt-4 mp-0 w-75"},a={key:0,class:"text-danger"};function s(t,e,r,s,u,o){return Object(n["s"])(),Object(n["g"])("div",c,[t.message?(Object(n["s"])(),Object(n["g"])("p",a,Object(n["C"])(t.message),1)):Object(n["f"])("",!0)])}var u=Object(n["k"])({name:"ErrorMessage",props:{message:{type:String,required:!0}}}),o=r("d959"),i=r.n(o);const d=i()(u,[["render",s]]);e["a"]=d},"99af":function(t,e,r){"use strict";var n=r("23e7"),c=r("da84"),a=r("d039"),s=r("e8b5"),u=r("861d"),o=r("7b0b"),i=r("07fa"),d=r("8418"),l=r("65f0"),b=r("1dde"),j=r("b622"),O=r("2d00"),h=j("isConcatSpreadable"),f=9007199254740991,p="Maximum allowed index exceeded",m=c.TypeError,g=O>=51||!a((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),v=b("concat"),w=function(t){if(!u(t))return!1;var e=t[h];return void 0!==e?!!e:s(t)},y=!g||!v;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,r,n,c,a,s=o(this),u=l(s,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?s:arguments[e],w(a)){if(c=i(a),b+c>f)throw m(p);for(r=0;r<c;r++,b++)r in a&&d(u,b,a[r])}else{if(b>=f)throw m(p);d(u,b++,a)}return u.length=b,u}})},fecb:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),c=Object(n["h"])("h2",{class:"mb-3"},"注文一覧",-1),a={key:0,id:"app"},s={class:"table table-striped"},u=Object(n["h"])("tr",null,[Object(n["h"])("th",null,"id"),Object(n["h"])("th",null,"order no"),Object(n["h"])("th",null,"user id"),Object(n["h"])("th",null,"ユーザー名"),Object(n["h"])("th",null,"email"),Object(n["h"])("th",null,"tel1"),Object(n["h"])("th",null,"ステータス"),Object(n["h"])("th",null,"購入数"),Object(n["h"])("th",null,"合計金額"),Object(n["h"])("th",{class:"text-center"},"詳細へ")],-1),o={class:"text-end"},i={class:"text-center"},d=Object(n["i"])(" 詳細 ");function l(t,e,r,l,b,j){var O=Object(n["A"])("ErrorMessage"),h=Object(n["A"])("router-link");return Object(n["s"])(),Object(n["g"])(n["a"],null,[c,Object(n["j"])(O,{message:t.message},null,8,["message"]),t.isShow?(Object(n["s"])(),Object(n["g"])("div",a,[Object(n["h"])("div",null,[Object(n["h"])("table",s,[u,Object(n["h"])("tbody",null,[(Object(n["s"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(t.orders,(function(e){return Object(n["s"])(),Object(n["g"])("tr",{key:e.id},[Object(n["h"])("td",null,Object(n["C"])(e.id),1),Object(n["h"])("td",null,Object(n["C"])(e.order_no),1),Object(n["h"])("td",null,Object(n["C"])(e.user_id),1),Object(n["h"])("td",null,Object(n["C"])(e.user_last_name)+" "+Object(n["C"])(e.user_first_name),1),Object(n["h"])("td",null,Object(n["C"])(e.user_email),1),Object(n["h"])("td",null,Object(n["C"])(e.user_tel1),1),Object(n["h"])("td",null,Object(n["C"])(t.orderStatusText(e.status)),1),Object(n["h"])("td",null,Object(n["C"])(e.total_num),1),Object(n["h"])("td",o,Object(n["C"])(e.total_price)+"円",1),Object(n["h"])("td",i,[Object(n["j"])(h,{to:{name:"OrderShow",params:{id:e.id}},class:"btn btn-primary active"},{default:Object(n["K"])((function(){return[d]})),_:2},1032,["to"])])])})),128))])])])])):Object(n["f"])("",!0)],64)}var b=r("1da1"),j=(r("96cf"),r("8e27")),O=r("1c73"),h=r("7c1c"),f=Object(n["k"])({name:"OrderIndex",components:{ErrorMessage:j["a"],ValidateError:O["a"]},data:function(){return{isShow:!1,message:"",orders:[]}},beforeRouteUpdate:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(e,r,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(e,r,n){return t.apply(this,arguments)}return e}(),mounted:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["a"])({per_page:-1,order_by:"order_id_desc"});case 2:if(e=t.sent,e.success){t.next=6;break}return this.commonError(e),t.abrupt("return");case 6:this.orders=e.data,this.isShow=!0;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{commonError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;422===t.status&&(this.validateErrors=t.data),""!==t.message&&(this.message=t.message)},orderStatusText:function(t){return 0===t?"仮購入":1===t?"発送待ち":2===t?"発送済み":3===t?"完了":8===t?"購入失敗":9===t?"キャンセル":""}}}),p=r("d959"),m=r.n(p);const g=m()(f,[["render",l]]);e["default"]=g}}]);
//# sourceMappingURL=chunk-66fada02.65254ac0.js.map