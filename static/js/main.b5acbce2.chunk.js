(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},107:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(44),s=a.n(c),l=(a(17),a(6)),o=a(113),i=a(112),u=a(8),m=a(9),d=a(10),E=a(11),h=a(12),p=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={error:null,isLoaded:!1,notices:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.status-test.uits.iu.edu/Notices").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,notices:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Table,{variant:"stripes",cells:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Greeting"),r.a.createElement("th",null,"Audience"))),r.a.createElement("tbody",null,this.state.notices.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.content))}))))}}]),t}(n.Component),g=a(15),v=a(22),f="https://api.status-test.uits.iu.edu";function b(e,t,a){return fetch(f+t).then(function(e){return e.json()}).then(function(t){e.setState(Object(v.a)({},a,t))},function(t){e.setState(Object(v.a)({},a,t))})}function O(e){b(e,"/servicegroups","groups")}a(105);var y=r.a.createElement("svg",{alt:"Service is online and healthy.",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("path",{fill:"currentColor",d:"M6.72,13l-.48-.36-3-3A1,1,0,0,1,4.71,8.29l2.11,2.12,4.33-6.94a1,1,0,0,1,1.7,1.06L7.64,12.87Z"})),N=r.a.createElement("svg",{alt:"RSS feed",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -256 1792 1792",width:"16",height:"16"},r.a.createElement("g",{transform:"matrix(1,0,0,-1,212.61017,1346.1695)"},r.a.createElement("path",{d:"M 384,192 Q 384,112 328,56 272,0 192,0 112,0 56,56 0,112 0,192 q 0,80 56,136 56,56 136,56 80,0 136,-56 56,-56 56,-136 z M 896,69 Q 898,41 879,21 861,0 832,0 H 697 Q 672,0 654,16.5 636,33 634,58 612,287 449.5,449.5 287,612 58,634 33,636 16.5,654 0,672 0,697 v 135 q 0,29 21,47 17,17 43,17 h 5 Q 229,883 375,815.5 521,748 634,634 748,521 815.5,375 883,229 896,69 z m 512,-2 Q 1410,40 1390,20 1372,0 1344,0 H 1201 Q 1175,0 1156.5,17.5 1138,35 1137,60 1125,275 1036,468.5 947,662 804.5,804.5 662,947 468.5,1036 275,1125 60,1138 35,1139 17.5,1157.5 0,1176 0,1201 v 143 q 0,28 20,46 18,18 44,18 h 3 Q 329,1395 568.5,1288 808,1181 994,994 1181,808 1288,568.5 1395,329 1408,67 z",id:"path2993",fill:"currentColor"}))),j=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("path",{fill:"currentColor",d:"M14,12a1,1,0,0,1-.76-.35L8,5.54,2.76,11.65a1,1,0,1,1-1.52-1.3L6.48,4.23a2.06,2.06,0,0,1,3,0l5.24,6.11A1,1,0,0,1,14,12Z"})),_=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("path",{fill:"currentColor",d:"M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"})),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={error:null,isLoaded:!1,notices:[],groups:[],services:[]},a.isPartOfGroup=a.isPartOfGroup.bind(Object(g.a)(Object(g.a)(a))),a.toggleServiceGroup=a.toggleServiceGroup.bind(Object(g.a)(Object(g.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"isPartOfGroup",value:function(e,t){return e.serviceGroup.id===t.id}},{key:"toggleServiceGroup",value:function(e){var t=this.state.groups,a=t.findIndex(function(t){return t.id===e});t[a].expanded=!t[a].expanded,this.setState({groups:t})}},{key:"componentDidMount",value:function(){O(this),b(this,"/services","services")}},{key:"render",value:function(){var e=this;return r.a.createElement(l.Table,{margin:{top:"md"},compact:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"350"},"Service category"),r.a.createElement("th",{className:"status-matrix__campus"},r.a.createElement("abbr",{title:"Bloomington"},"IUB")),r.a.createElement("th",{className:"status-matrix__campus"},r.a.createElement("abbr",{title:"Indianapolis"},"IUPUI")),r.a.createElement("th",{className:"status-matrix__campus"},r.a.createElement("abbr",{title:"Columbus"},"IUPUC")),r.a.createElement("th",{className:"status-matrix__campus"},r.a.createElement("abbr",{title:"Richmond"},"IUE")),r.a.createElement("th",{className:"status-matrix__campus"},r.a.createElement("abbr",{title:"Fort Wayne"},"IUFW")),r.a.createElement("th",{className:"status-matrix__campus"},r.a.createElement("abbr",{title:"Kokomo"},"IUK")),r.a.createElement("th",{className:"status-matrix__campus"},r.a.createElement("abbr",{title:"Gary"},"IUN")),r.a.createElement("th",{className:"status-matrix__campus"},r.a.createElement("abbr",{title:"South Bend"},"IUSB")),r.a.createElement("th",{className:"status-matrix__campus"},r.a.createElement("abbr",{title:"New Albany"},"IUS")))),r.a.createElement("tbody",null,this.state.groups.map(function(t){return r.a.createElement(r.a.Fragment,{key:t.id},r.a.createElement("tr",{className:"status-matrix__header-row"},r.a.createElement("td",{className:"status-matrix__category"},r.a.createElement("button",{onClick:function(){return e.toggleServiceGroup(t.id)},className:"rvt-button--plain status-matrix__category-toggle js-toggle__trigger"},t.expanded?_:j,r.a.createElement("span",{className:"rvt-m-left-xs"},t.name)),r.a.createElement("a",{href:"https://status.uits.iu.edu/Rss?services=TODO,TODO",target:"_blank",rel:"noopener noreferrer",className:"status-matrix__category-rss"},N,r.a.createElement("span",{className:"rvt-sr-only"},"RSS feed for ",t.name))),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y)),t.expanded&&e.state.services.map(function(a){return r.a.createElement(r.a.Fragment,{key:a.id},e.isPartOfGroup(a,t)&&r.a.createElement("tr",{className:"status-matrix__sub-row js-toggle__target"},r.a.createElement("td",{className:"status-matrix__service"},r.a.createElement("a",{className:"status-matrix__service-title",href:"https://status.uits.iu.edu/service/TODO"},a.name),r.a.createElement("a",{href:"https://status.uits.iu.edu/Rss?services=TODO",target:"_blank",rel:"noopener noreferrer",className:"status-matrix__service-rss"},N)),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y),r.a.createElement("td",{className:"status-icon status-icon--good rvt-color-green"},y)))}))})))}}]),t}(n.Component),w=(a(107),a(111)),k=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.notices,n=e.type;return r.a.createElement(r.a.Fragment,null,!!a.length&&r.a.createElement("div",{class:"message-box message-box--".concat(n)},r.a.createElement("header",{class:"message-box-header"},r.a.createElement("h2",{class:"message-box-header__message"},t),r.a.createElement("div",{class:"message-box-header__count"},a.length)),r.a.createElement("ul",{class:"message-box__list"},a&&a.map(function(e){return r.a.createElement("li",{class:"message-box__list-item",key:e.id},r.a.createElement("div",{class:"container kill-vertical"},r.a.createElement("div",{class:"unit four-fifths"},r.a.createElement(w.a,{to:"/notices/".concat(e.id)},e.name))))}))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={error:null,isLoaded:!1,notices:[],serviceGroups:[]},a.filterNoticesByType=a.filterNoticesByType.bind(Object(g.a)(Object(g.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){b(this,"/Notices","notices"),O(this)}},{key:"filterNoticesByType",value:function(e){return this.state.notices.filter(function(t){return t.noticeType===e})}},{key:"render",value:function(){var e=this.filterNoticesByType,t=e("Alert"),a=e("Maintenance"),n=e("Information"),c=e("Ongoing");return r.a.createElement(l.Container,{margin:{tb:"md"},width:"senior",center:!0},r.a.createElement(k,{type:"alert",notices:t,title:"Alert notices"}),r.a.createElement(k,{type:"maintenance",notices:a,title:"Maintenance notices"}),r.a.createElement(k,{type:"information",notices:n,title:"Information notices"}),r.a.createElement(k,{type:"ongoing",notices:c,title:"On-going notices"}),r.a.createElement(x,null))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={error:null,isLoaded:!1,notices:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.status-test.uits.iu.edu/Notices").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,notices:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Table,{variant:"stripes",cells:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Greeting"),r.a.createElement("th",null,"Audience"))),r.a.createElement("tbody",null,this.state.notices.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.content))}))))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={error:null,isLoaded:!1,notice:{}},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.noticeId;fetch("https://api.status-test.uits.iu.edu/Notices/"+t).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,notice:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state.notice;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Row,null,r.a.createElement(l.Col,{md:8},r.a.createElement("h1",null,e.name),r.a.createElement("div",null,"Services affected: ",e.services&&e.services.map(function(e){return r.a.createElement(l.Badge,{variant:"info",key:e.id},e.name)})),r.a.createElement("p",null,e.content)),r.a.createElement(l.Col,{md:4},r.a.createElement(l.Panel,null,r.a.createElement("h2",null,"Details"),r.a.createElement("ul",{className:"rvt-plain-list"},r.a.createElement("li",null,r.a.createElement("h3",null,"ID No."),r.a.createElement("div",null,e.id)),r.a.createElement("li",null,r.a.createElement("h3",null,"Last status check"),r.a.createElement("div",null,e.lastActivityOn)),r.a.createElement("li",null,r.a.createElement("h3",null,"Start date"),r.a.createElement("div",null,e.changeStart||e.publishedOn)),r.a.createElement("li",null,r.a.createElement("h3",null,"End date"),r.a.createElement("div",null,e.changeEnd||"Not set.")))))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={error:null,isLoaded:!1,notices:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.status-test.uits.iu.edu/Notices").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,notices:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Table,{variant:"stripes",cells:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Greeting"),r.a.createElement("th",null,"Audience"))),r.a.createElement("tbody",null,this.state.notices.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.content))}))))}}]),t}(n.Component),B=function(){return r.a.createElement(o.a,{basename:"/status-iu"},r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Header,{title:"Status.IU"}),r.a.createElement(i.a,{exact:!0,path:"/",component:S}),r.a.createElement(i.a,{exact:!0,path:"/notices",component:C}),r.a.createElement(i.a,{path:"/notices/:noticeId",component:I}),r.a.createElement(i.a,{path:"/calendar",component:p}),r.a.createElement(i.a,{path:"/maintenance",component:L})))};s.a.render(r.a.createElement(B,null),document.getElementById("root"))},47:function(e,t,a){e.exports=a(110)}},[[47,2,1]]]);
//# sourceMappingURL=main.b5acbce2.chunk.js.map