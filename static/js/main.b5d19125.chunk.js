(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},107:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(45),c=a.n(r),l=(a(17),a(6)),i=a(113),o=a(111),m=a(112),u=a(9),d=a(10),E=a(11),h=a(12),v=a(13),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).state={error:null,isLoaded:!1,notices:[]},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.status-test.uits.iu.edu/Notices").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,notices:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.Table,{variant:"stripes",cells:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Greeting"),s.a.createElement("th",null,"Audience"))),s.a.createElement("tbody",null,this.state.notices.map(function(e){return s.a.createElement("tr",{key:e.id},s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.content))}))))}}]),t}(n.Component),p=a(7),f=a(22),N="https://api.status-test.uits.iu.edu";function b(e,t,a,n){return fetch(N+t).then(function(e){return e.json()}).then(function(t){e.setState(Object(f.a)({},a,t)),n&&"function"===typeof n&&n()},function(t){e.setState(Object(f.a)({},a,t))})}function x(e){b(e,"/Notices","notices")}a(105);var _=s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},s.a.createElement("path",{fill:"currentColor",d:"M8,16A8,8,0,1,1,10.29.33a1,1,0,0,1-.57,1.92A6,6,0,1,0,14,8a1,1,0,1,1,2,0A8,8,0,0,1,8,16Z"}),s.a.createElement("path",{fill:"currentColor",d:"M7.95,11.89a1.26,1.26,0,0,1-.75-.25L3.4,8.8A1,1,0,1,1,4.6,7.2L7.77,9.58,14.18.43a1,1,0,0,1,1.64,1.15L9,11.36a1.25,1.25,0,0,1-.83.52Zm-.62-1.68h0Z"})),y=s.a.createElement("svg",{alt:"RSS feed",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -256 1792 1792",width:"16",height:"16"},s.a.createElement("g",{transform:"matrix(1,0,0,-1,212.61017,1346.1695)"},s.a.createElement("path",{d:"M 384,192 Q 384,112 328,56 272,0 192,0 112,0 56,56 0,112 0,192 q 0,80 56,136 56,56 136,56 80,0 136,-56 56,-56 56,-136 z M 896,69 Q 898,41 879,21 861,0 832,0 H 697 Q 672,0 654,16.5 636,33 634,58 612,287 449.5,449.5 287,612 58,634 33,636 16.5,654 0,672 0,697 v 135 q 0,29 21,47 17,17 43,17 h 5 Q 229,883 375,815.5 521,748 634,634 748,521 815.5,375 883,229 896,69 z m 512,-2 Q 1410,40 1390,20 1372,0 1344,0 H 1201 Q 1175,0 1156.5,17.5 1138,35 1137,60 1125,275 1036,468.5 947,662 804.5,804.5 662,947 468.5,1036 275,1125 60,1138 35,1139 17.5,1157.5 0,1176 0,1201 v 143 q 0,28 20,46 18,18 44,18 h 3 Q 329,1395 568.5,1288 808,1181 994,994 1181,808 1288,568.5 1395,329 1408,67 z",id:"path2993",fill:"currentColor"}))),w=(s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},s.a.createElement("path",{fill:"currentColor",d:"M14,12a1,1,0,0,1-.76-.35L8,5.54,2.76,11.65a1,1,0,1,1-1.52-1.3L6.48,4.23a2.06,2.06,0,0,1,3,0l5.24,6.11A1,1,0,0,1,14,12Z"})),s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},s.a.createElement("path",{fill:"currentColor",d:"M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"}))),O=s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},s.a.createElement("path",{fill:"currentColor",d:"M5.5,15a1,1,0,0,1-.77-1.64L9.2,8,4.73,2.64A1,1,0,0,1,6.27,1.36L11.13,7.2a1.25,1.25,0,0,1,0,1.61L6.27,14.64A1,1,0,0,1,5.5,15ZM9.6,8.48h0Zm0-1h0Z"})),j=s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},s.a.createElement("g",{fill:"currentColor"},s.a.createElement("path",{d:"M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z"}),s.a.createElement("path",{d:"M8,9A1,1,0,0,1,7,8V5A1,1,0,0,1,9,5V8A1,1,0,0,1,8,9Z"}),s.a.createElement("circle",{cx:"8",cy:"11",r:"1"}))),k=s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},s.a.createElement("g",{fill:"currentColor"},s.a.createElement("path",{d:"M11,9H5A1,1,0,0,1,5,7h6a1,1,0,0,1,0,2Z"}),s.a.createElement("path",{d:"M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z"}))),I=s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},s.a.createElement("g",{fill:"currentColor"},s.a.createElement("path",{d:"M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z"}),s.a.createElement("path",{d:"M8,12a1,1,0,0,1-1-1V8A1,1,0,0,1,9,8v3A1,1,0,0,1,8,12Z"}),s.a.createElement("circle",{cx:"8",cy:"5",r:"1"}))),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).state={error:null,isLoaded:!1,notices:[],groups:[],services:[]},a.isPartOfGroup=a.isPartOfGroup.bind(Object(p.a)(Object(p.a)(a))),a.toggleGroup=a.toggleGroup.bind(Object(p.a)(Object(p.a)(a))),a.expandGroupsWithNotices=a.expandGroupsWithNotices.bind(Object(p.a)(Object(p.a)(a))),a.getServiceIds=a.getServiceIds.bind(Object(p.a)(Object(p.a)(a))),a.groupHasNotices=a.groupHasNotices.bind(Object(p.a)(Object(p.a)(a))),a.serviceHasNotice=a.serviceHasNotice.bind(Object(p.a)(Object(p.a)(a))),a.serviceStatusByCampus=a.serviceStatusByCampus.bind(Object(p.a)(Object(p.a)(a))),a.campusHasNotice=a.campusHasNotice.bind(Object(p.a)(Object(p.a)(a))),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"isPartOfGroup",value:function(e,t){return!(!e||!t)&&e.serviceGroup.id===t.id}},{key:"getServiceIds",value:function(e){for(var t=[],a=this.state.services,n=0;n<a.length;n++)this.isPartOfGroup(a[n],e)&&t.push(a[n].id);return t.join(",")}},{key:"toggleGroup",value:function(e){var t=this.state.groups,a=t.findIndex(function(t){return t.id===e});t[a].expanded=!t[a].expanded,this.setState({groups:t})}},{key:"serviceHasNotice",value:function(e){return this.state.notices.filter(function(t){return t.services.filter(function(t){return t.id===e.id}).length>0}).length>0}},{key:"groupHasNotices",value:function(e){for(var t=0;t<this.state.services.length;t++)if(this.isPartOfGroup(this.state.services[t],e)&&this.serviceHasNotice(this.state.services[t]))return!0;return!1}},{key:"expandGroupsWithNotices",value:function(){0!==this.state.groups.length&&0!==this.state.services.length&&0!==this.state.notices.length||setTimeout(function(){this.expandGroupsWithNotices()}.bind(this),100);for(var e=this.state.groups,t=0;t<e.length;t++)this.groupHasNotices(e[t])&&(e[t].expanded=!0);this.setState({groups:e})}},{key:"serviceStatusByCampus",value:function(e){var t=this;return["IUB","IUPUI","IUPUC","IUFW","IUK","IUE","IUN","IUSB","IUS"].map(function(a){return t.campusHasNotice(a,e)||s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_)})}},{key:"campusHasNotice",value:function(e,t){var a=!1,n=!1,r=!1;return 0===this.state.notices.filter(function(e){return e.services.filter(function(e){return e.id===t.id}).length>0&&("Alert"===e.noticeType&&(a=!0),"Information"===e.noticeType&&(r=!0),"Ongoing"===e.noticeType&&(n=!0),!0)}).filter(function(t){return t.campuses.filter(function(t){return t.abbreviation===e}).length>0}).length?a?s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--danger"},j):n?s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--warning"},k):r?s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--info"},r):s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_):s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_)}},{key:"componentDidMount",value:function(){var e;b(e=this,"/servicegroups","groups",e.expandGroupsWithNotices),function(e){b(e,"/services","services")}(this),x(this)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"status-key"},s.a.createElement("ul",{className:"status-key__list"},s.a.createElement("li",{className:"status-key__item status-key__item--alert"},s.a.createElement("span",{className:"rvt-alert--danger rvt-m-right-xxs"},j),s.a.createElement("span",null,"Alert")),s.a.createElement("li",{className:"status-key__item status-key__item--ongoing"},s.a.createElement("span",{className:"rvt-alert--warning rvt-m-right-xxs"},k),s.a.createElement("span",null,"Ongoing issue")),s.a.createElement("li",{className:"status-key__item status-key__item--maintenance"},s.a.createElement("span",{className:"rvt-alert--info rvt-m-right-xxs"},I),s.a.createElement("span",null,"Maintenance")),s.a.createElement("li",{className:"status-key__item status-key__item--good"},s.a.createElement("span",{className:"rvt-alert--success rvt-m-right-xxs"},_),s.a.createElement("span",null,"Healthy")))),s.a.createElement(l.Table,{margin:{top:"md"},compact:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{width:"350"},"Service category"),s.a.createElement("th",{className:"status-matrix__campus"},s.a.createElement("abbr",{title:"Bloomington"},"IUB")),s.a.createElement("th",{className:"status-matrix__campus"},s.a.createElement("abbr",{title:"Indianapolis"},"IUPUI")),s.a.createElement("th",{className:"status-matrix__campus"},s.a.createElement("abbr",{title:"Columbus"},"IUPUC")),s.a.createElement("th",{className:"status-matrix__campus"},s.a.createElement("abbr",{title:"Richmond"},"IUE")),s.a.createElement("th",{className:"status-matrix__campus"},s.a.createElement("abbr",{title:"Fort Wayne"},"IUFW")),s.a.createElement("th",{className:"status-matrix__campus"},s.a.createElement("abbr",{title:"Kokomo"},"IUK")),s.a.createElement("th",{className:"status-matrix__campus"},s.a.createElement("abbr",{title:"Gary"},"IUN")),s.a.createElement("th",{className:"status-matrix__campus"},s.a.createElement("abbr",{title:"South Bend"},"IUSB")),s.a.createElement("th",{className:"status-matrix__campus"},s.a.createElement("abbr",{title:"New Albany"},"IUS")))),s.a.createElement("tbody",null,this.state.groups.map(function(t){return s.a.createElement(s.a.Fragment,{key:t.id},s.a.createElement("tr",{className:"status-matrix__header-row"},s.a.createElement("td",{className:"status-matrix__category"},s.a.createElement("button",{onClick:function(){return e.toggleGroup(t.id)},className:"rvt-button--plain status-matrix__category-toggle js-toggle__trigger"},t.expanded?w:O,s.a.createElement("span",{className:"rvt-m-left-xs"},t.name)),s.a.createElement(o.a,{to:"/Rss?services=".concat(e.getServiceIds(t)),target:"_blank",rel:"noopener noreferrer",className:"status-matrix__category-rss"},y,s.a.createElement("span",{className:"rvt-sr-only"},"RSS feed for ",t.name))),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--info"},I),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--error"},j),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--warning"},k),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_)),t.expanded&&e.state.services.map(function(a){return s.a.createElement(s.a.Fragment,{key:a.id},e.isPartOfGroup(a,t)&&s.a.createElement("tr",{className:"status-matrix__sub-row js-toggle__target"},s.a.createElement("td",{className:"status-matrix__service"},s.a.createElement(o.a,{className:"rvt-ts-xs rvt-m-left-lg status-matrix__service-title",to:"/service/".concat(a.id)},a.name),s.a.createElement(o.a,{to:"/Rss?services=".concat(a.id),target:"_blank",rel:"noopener noreferrer",className:"status-matrix__service-rss"},y)),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--info"},I),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--danger"},j),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--warning"},k),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_)))}))}))))}}]),t}(n.Component),U=(a(107),function(e){function t(){return Object(u.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.notices,n=e.type;return s.a.createElement(s.a.Fragment,null,!!a.length&&s.a.createElement("div",{className:"message-box message-box--".concat(n)},s.a.createElement("header",{className:"message-box-header"},s.a.createElement("h2",{className:"message-box-header__message"},t),s.a.createElement("div",{className:"message-box-header__count"},a.length)),s.a.createElement("ul",{className:"message-box__list"},a&&a.map(function(e){return s.a.createElement("li",{className:"message-box__list-item",key:e.id},s.a.createElement("div",{className:"container kill-vertical"},s.a.createElement("div",{className:"unit four-fifths"},s.a.createElement(o.a,{to:"/notices/".concat(e.id)},e.name),e.services.length>1&&s.a.createElement("div",null,s.a.createElement("span",{className:"rvt-ts-xs rvt-text-bold rvt-m-right-xs"},"Affected services:"),e.services.map(function(e){return s.a.createElement(l.Badge,{key:e.id,modifier:"secondary",typescale:"xxs",margin:{right:"xxs",top:"xs"}},e.name)})))))}))))}}]),t}(n.Component)),A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).state={error:null,isLoaded:!1,notices:[],serviceGroups:[]},a.filterNoticesByType=a.filterNoticesByType.bind(Object(p.a)(Object(p.a)(a))),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){x(this)}},{key:"filterNoticesByType",value:function(e){return this.state.notices.filter(function(t){return t.noticeType===e})}},{key:"render",value:function(){var e=this.filterNoticesByType,t=e("Alert"),a=e("Maintenance"),n=e("Information"),r=e("Ongoing");return s.a.createElement(l.Container,{margin:{tb:"md"},width:"senior",center:!0},s.a.createElement(U,{type:"alert",notices:t,title:"Alert notices"}),s.a.createElement(U,{type:"maintenance",notices:a,title:"Maintenance notices"}),s.a.createElement(U,{type:"information",notices:n,title:"Information notices"}),s.a.createElement(U,{type:"ongoing",notices:r,title:"On-going notices"}),s.a.createElement(S,{hide:"md-down"}))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).state={error:null,isLoaded:!1,maintenanceWindows:[]},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){b(this,"/maintenancewindows","maintenanceWindows")}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"rvt-ts-41 rvt-text-bold"},"Regularly scheduled maintenance windows"),s.a.createElement(l.Table,{margin:{top:"lg"},variant:"stripes",compact:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Service"),s.a.createElement("th",null,"Frequency"),s.a.createElement("th",null,"Day"),s.a.createElement("th",null,"Time"))),s.a.createElement("tbody",null,this.state.maintenanceWindows.map(function(e){return s.a.createElement("tr",{key:e.id},s.a.createElement("td",null,e.service.name),s.a.createElement("td",null,e.frequency),s.a.createElement("td",null,e.day),s.a.createElement("td",null,e.time))}))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).state={error:null,isLoaded:!1,notice:{}},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.noticeId;fetch("https://api.status-test.uits.iu.edu/Notices/"+t).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,notice:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state.notice;return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.Row,null,s.a.createElement(l.Col,{md:8},s.a.createElement("h1",{className:"rvt-ts-41 rvt-text-bold"},e.name),s.a.createElement("div",{className:"rvt-m-tb-md"},"Affected services: ",e.services&&e.services.map(function(e){return s.a.createElement(l.Badge,{variant:"info",key:e.id},e.name)})),s.a.createElement("p",null,e.content),s.a.createElement("h2",{className:"rvt-text-bold rvt-m-top-lg"},"Affected campuses"),s.a.createElement("div",{className:"rvt-m-tb-sm status-matrix status-matrix--single"},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"status-matrix__campus"},"IUB"),s.a.createElement("th",{className:"status-matrix__campus"},"IUPUI"),s.a.createElement("th",{className:"status-matrix__campus"},"IUPUC"),s.a.createElement("th",{className:"status-matrix__campus"},"IUE"),s.a.createElement("th",{className:"status-matrix__campus"},"IUFW"),s.a.createElement("th",{className:"status-matrix__campus"},"IUK"),s.a.createElement("th",{className:"status-matrix__campus"},"IUN"),s.a.createElement("th",{className:"status-matrix__campus"},"IUSB"),s.a.createElement("th",{className:"status-matrix__campus"},"IUS"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--info"},I),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--error"},j),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--warning"},k),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_),s.a.createElement("td",{className:"status-icon status-icon--good rvt-alert--success"},_))))),s.a.createElement("div",{className:"status-key status-key--left"},s.a.createElement("ul",{className:"status-key__list"},s.a.createElement("li",{className:"status-key__item status-key__item--alert"},s.a.createElement("span",{className:"rvt-alert--danger rvt-m-right-xxs"},j),s.a.createElement("span",null,"Alert")),s.a.createElement("li",{className:"status-key__item status-key__item--ongoing"},s.a.createElement("span",{className:"rvt-alert--warning rvt-m-right-xxs"},k),s.a.createElement("span",null,"Ongoing issue")),s.a.createElement("li",{className:"status-key__item status-key__item--maintenance"},s.a.createElement("span",{className:"rvt-alert--info rvt-m-right-xxs"},I),s.a.createElement("span",null,"Maintenance")),s.a.createElement("li",{className:"status-key__item status-key__item--good"},s.a.createElement("span",{className:"rvt-alert--success rvt-m-right-xxs"},_),s.a.createElement("span",null,"Healthy"))))),s.a.createElement(l.Col,{md:4},s.a.createElement(l.Panel,null,s.a.createElement("h2",null,"Details"),s.a.createElement("ul",{className:"rvt-plain-list"},s.a.createElement("li",null,s.a.createElement("h3",null,"ID No."),s.a.createElement("div",null,e.id)),s.a.createElement("li",null,s.a.createElement("h3",null,"Last status check"),s.a.createElement("div",null,e.lastActivityOn)),s.a.createElement("li",null,s.a.createElement("h3",null,"Start date"),s.a.createElement("div",null,e.changeStart||e.publishedOn)),s.a.createElement("li",null,s.a.createElement("h3",null,"End date"),s.a.createElement("div",null,e.changeEnd||"Not set.")))))))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).state={error:null,isLoaded:!1,notices:[]},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.status-test.uits.iu.edu/Notices").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,notices:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.Table,{variant:"stripes",cells:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Greeting"),s.a.createElement("th",null,"Audience"))),s.a.createElement("tbody",null,this.state.notices.map(function(e){return s.a.createElement("tr",{key:e.id},s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.content))}))))}}]),t}(n.Component),L=function(){return s.a.createElement(i.a,{basename:"/status-iu"},s.a.createElement(s.a.Fragment,null,s.a.createElement(l.Header,{title:"Status.IU"},s.a.createElement(l.HeaderNavigation,null,s.a.createElement(l.HeaderMenu,{label:"Information"},s.a.createElement(o.a,{to:"/notices/28"},s.a.createElement("span",{className:"rvt-m-right-xxs"},I)," CAS and iuware have no end dates"),s.a.createElement(o.a,{to:"/notices/62"},s.a.createElement("span",{className:"rvt-m-right-xxs"},I)," New Test Notice Title Update"),s.a.createElement(o.a,{to:"/notices/46055"},s.a.createElement("span",{className:"rvt-m-right-xxs"},I)," Two Step for ALL")),s.a.createElement(o.a,{to:"/maintenance"},"Maintenance"),s.a.createElement(o.a,{to:"/calendar"},"Calender"))),s.a.createElement("main",{id:"main-content"},s.a.createElement(l.Container,{margin:{tb:"md"},width:"senior",center:!0},s.a.createElement(m.a,{exact:!0,path:"/",component:A}),s.a.createElement(m.a,{exact:!0,path:"/notices",component:B}),s.a.createElement(m.a,{path:"/notices/:noticeId",component:M}),s.a.createElement(m.a,{path:"/calendar",component:g}),s.a.createElement(m.a,{path:"/maintenance",component:C})))))};c.a.render(s.a.createElement(L,null),document.getElementById("root"))},47:function(e,t,a){e.exports=a(110)}},[[47,2,1]]]);
//# sourceMappingURL=main.b5d19125.chunk.js.map