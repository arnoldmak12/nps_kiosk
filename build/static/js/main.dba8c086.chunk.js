(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/largeLogo.fc92b655.png"},36:function(e,t,a){e.exports=a.p+"static/media/smallLogo.f37767f8.png"},38:function(e,t,a){e.exports=a.p+"static/media/grassField.d87ed5d2.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/regMoun.cd31d1d1.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/snowMoun.ba6c2eb3.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/desert.31fd68fa.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/desert2.03dd0fcb.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/flowers.b89785c1.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/lake.e7fc24a2.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/moun2.863d5896.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/night2.522fbae6.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/night3.36bfc339.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/sand.41bf48db.jpg"},50:function(e,t,a){e.exports=a(98)},55:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},83:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(19),r=a.n(i),l=(a(55),a(5)),c=a(6),o=a(8),h=a(7),u=a(9),d=(a(56),a(18)),m=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.props.onClick()}},{key:"render",value:function(){var e,t=this.props.sidebarComponent;return this.props.showSidebar||(t=null),"Collapse"===this.props.title&&(e={marginLeft:"10px"}),n.a.createElement("div",null,n.a.createElement("button",{className:"toggle-button",onClick:this.handleClick.bind(this)},this.props.isMini?n.a.createElement("p",{className:"toggle-button-text"},n.a.createElement(d.a,{icon:this.props.icon,style:e,size:"xs"})):n.a.createElement("p",{className:"toggle-button-text"},n.a.createElement(d.a,{icon:this.props.icon,size:"xs"}),n.a.createElement("p",{className:"title"},this.props.title))),t)}}]),t}(n.a.Component),p=(a(61),a(14)),v=a(3),f=a.n(v),b=a(15),E=(a(63),a(33)),N=a.n(E),w=a(34),g=a.n(w),x=function(e){var t=e.text;return n.a.createElement("div",null,t)},k="https://developer.nps.gov/api/v1/",y="&api_key=AI3Sb31dnYFgJ5i9j7ukjZfNv8P3aQXEGUI2LUVP",j=n.a.createElement(N.a,{type:"spinningBubbles",color:"white",height:170,width:170}),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={data:{},entryClick:!1,viewIndex:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(k+this.props.type+"?stateCode="+this.props.state+"&limit=6&q="+this.props.search+y);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({total:a.total,data:Object.entries(a.data),entryClick:!1,needAlerts:!0,needEvents:!0,needArticles:!0,needNews:!0,needLessons:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"fetchAlerts",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var a,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.needAlerts){e.next=15;break}return e.prev=1,this.setState({needAlerts:!1}),e.next=5,fetch(k+"Alerts?parkCode="+t+y);case 5:return a=e.sent,e.next=8,a.json();case 8:s=e.sent,this.setState({alert_total:s.total,alert_data:Object.entries(s.data)}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[1,12]])}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchArticles",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var a,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.needArticles){e.next=15;break}return e.prev=1,this.setState({needArticles:!1}),e.next=5,fetch(k+"Articles?parkCode="+t+y);case 5:return a=e.sent,e.next=8,a.json();case 8:s=e.sent,this.setState({article_total:s.total,article_data:Object.entries(s.data)}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[1,12]])}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchEvents",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var a,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.needEvents){e.next=15;break}return e.prev=1,this.setState({needEvents:!1}),e.next=5,fetch(k+"Events?parkCode="+t+y);case 5:return a=e.sent,e.next=8,a.json();case 8:s=e.sent,this.setState({event_total:s.total,event_data:Object.entries(s.data)}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[1,12]])}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchLessons",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var a,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.needLessons){e.next=15;break}return e.prev=1,this.setState({needLessons:!1}),e.next=5,fetch(k+"Lessonplans?parkCode="+t+y);case 5:return a=e.sent,e.next=8,a.json();case 8:s=e.sent,this.setState({lessons_total:s.total,lessons_data:Object.entries(s.data)}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[1,12]])}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchNews",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var a,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.needNews){e.next=15;break}return e.prev=1,this.setState({needNews:!1}),e.next=5,fetch(k+"NewsReleases?parkCode="+t+y);case 5:return a=e.sent,e.next=8,a.json();case 8:s=e.sent,this.setState({news_total:s.total,news_data:Object.entries(s.data)}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[1,12]])}));return function(t){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(e){this.setState({entryClick:!0,viewIndex:e})}},{key:"render",value:function(){var e=this;if("0"===this.state.total)return n.a.createElement("div",{className:"park-page"},n.a.createElement("li",{className:"result-entry"},n.a.createElement("h1",{className:"result-name"},"No Results Found")));var t=[],a=parseInt(this.state.total);a=a?a>6?6:a:1,console.log(a);for(var s=0;s<a;s++)t[s]=s;if(!this.state.entryClick)return this.state.total?n.a.createElement("div",{className:"park-page"},t.map(function(t,a){return n.a.createElement("li",{className:"result-entry"},n.a.createElement("button",{onClick:function(){return e.handleClick(a)}},n.a.createElement("h2",{className:"result-header"},e.state.data[a][1].fullName?e.state.data[a][1].fullName:e.state.data[a][1].title?e.state.data[a][1].title:e.state.data[a][1].name),n.a.createElement("p",{className:"result-description"},e.state.data[a][1].description)))})):n.a.createElement("div",{className:"park-page-loading"},j);switch(this.fetchAlerts(this.state.data[this.state.viewIndex][1].parkCode),this.fetchArticles(this.state.data[this.state.viewIndex][1].parkCode),this.fetchEvents(this.state.data[this.state.viewIndex][1].parkCode),this.fetchLessons(this.state.data[this.state.viewIndex][1].parkCode),this.fetchNews(this.state.data[this.state.viewIndex][1].parkCode),this.props.type){default:break;case"Campgrounds":case"Parks":case"VisitorCenters":console.log(this.state.data[this.state.viewIndex][1].parkCode);var i,r=0;if("Campgrounds"===this.props.type||"VisitorCenters"===this.props.type){if(""!==this.state.data[this.state.viewIndex][1].latLong){var l=this.state.data[this.state.viewIndex][1].latLong,c=l.substring(l.indexOf("lat:")+4,l.indexOf(",")),o=l.substring(l.indexOf("lng:")+4,l.length-1);i={lat:parseInt(c),lng:parseInt(o)}}}else if(""!==this.state.data[this.state.viewIndex][1].latLong){var h=this.state.data[this.state.viewIndex][1].latLong,u=h.substring(h.indexOf("lat:")+4,h.indexOf(",")),d=h.substring(h.indexOf("long:")+5,h.length-1);i={lat:parseInt(u),lng:parseInt(d)}}return n.a.createElement("div",{className:"park-page"},n.a.createElement("li",{className:"result-entry"},n.a.createElement("h1",{className:"result-name"},this.state.data[this.state.viewIndex][1].fullName?this.state.data[this.state.viewIndex][1].fullName:this.state.data[this.state.viewIndex][1].name)),n.a.createElement("li",{className:"result-entry"},n.a.createElement("h2",{className:"result-subheader"},"Description:"),n.a.createElement("p",{className:"result-description"},this.state.data[this.state.viewIndex][1].description)),n.a.createElement("li",{className:"result-entry"},n.a.createElement("h2",{className:"result-subheader"},""!==this.state.data[this.state.viewIndex][1].directionsoverview?"Directions Overview:":null),n.a.createElement("p",{className:"result-description"},this.state.data[this.state.viewIndex][1].directionsoverview)),n.a.createElement("li",{className:"result-entry-map"},n.a.createElement("div",{style:{height:"70vh",width:"80%",marginLeft:"150px"}},""!==this.state.data[this.state.viewIndex][1].latLong?n.a.createElement(g.a,{bootstrapURLKeys:{key:"AIzaSyB03lfQ96hLcGvlKDbj1hmBglDP3sog2Tc"},defaultCenter:i,defaultZoom:11},n.a.createElement(x,{lat:i.lat,lng:i.lng,text:this.state.data[this.state.viewIndex][1].name})):"Map Unavailable")),n.a.createElement("li",{className:"result-entry"},n.a.createElement("h2",{className:"result-subheader"},this.state.alert_total&&this.state.alert_total>0?"Alerts:":null),this.state.alert_total?Object.entries(this.state.alert_data).map(function(e,t){return n.a.createElement("div",null,n.a.createElement("h2",{className:"result-header"},e[1][1].title),n.a.createElement("p",{className:"result-description"},e[1][1].description))}):null),n.a.createElement("li",{className:"result-entry"},n.a.createElement("h2",{className:"result-subheader"},this.state.event_total&&this.state.event_total>0?"Events:":null),console.log(this.state.event_total),this.state.event_total?Object.entries(this.state.event_data).map(function(e,t){return n.a.createElement("div",null,n.a.createElement("h2",{className:"result-header"},e[1][1].title),n.a.createElement("p",{className:"result-description"},e[1][1].description.replace(/<[^>]+>/g,"")),n.a.createElement("p",{className:"result-description-time-date"},n.a.createElement("span",{className:"result-description-time-date-bold"},"Location: "),e[1][1].location?e[1][1].location:"N/A",n.a.createElement("br",null),n.a.createElement("span",{className:"result-description-time-date-bold"},"Dates: "),e[1][1].datestart?e[1][1].datestart:"N/A","- ",e[1][1].dateend?e[1][1].dateend:"N/A",n.a.createElement("br",null),n.a.createElement("span",{className:"result-description-time-date-bold"},"Time: "),e[1][1].times[0].timestart?e[1][1].times[0].timestart:"N/A","- ",e[1][1].times[0].timeend?e[1][1].times[0].timeend:"N/A"))}):null),n.a.createElement("li",{className:"result-entry"},n.a.createElement("h2",{className:"result-subheader"},""!==this.state.data[this.state.viewIndex][1].regulationsoverview&&this.state.data[this.state.viewIndex][1].regulationsoverview?"Regulations Overview:":null),n.a.createElement("p",{className:"result-description"},this.state.data[this.state.viewIndex][1].regulationsoverview)),n.a.createElement("li",{className:"result-entry"},n.a.createElement("h2",{className:"result-subheader"},""!==this.state.data[this.state.viewIndex][1].weatheroverview&&this.state.data[this.state.viewIndex][1].weatheroverview?"Weather Overview:":null),n.a.createElement("p",{className:"result-description"},this.state.data[this.state.viewIndex][1].weatheroverview)),n.a.createElement("li",{className:"result-entry"},n.a.createElement("h2",{className:"result-subheader"},""!==this.state.data[this.state.viewIndex][1].weatherInfo&&this.state.data[this.state.viewIndex][1].weatherInfo?"Weather Info:":null),n.a.createElement("p",{className:"result-description"},this.state.data[this.state.viewIndex][1].weatherInfo)),n.a.createElement("li",{className:"result-entry"},n.a.createElement("h2",{className:"result-subheader"},this.state.data[this.state.viewIndex][1].accessibility?"Accessibility:":null),this.state.data[this.state.viewIndex][1].accessibility?Object.entries(this.state.data[this.state.viewIndex][1].accessibility).map(function(e,t){var a="";switch(e[0]){default:break;case"wheelchairaccess":a="Wheelchair Access";break;case"cellphoneinfo":a="Cellphone Info";break;case"firestovepolicy":a="Fire Stove Policy";break;case"additionalinfo":a="Additional Info";break;case"adainfo":a="ADA Info";break;case"rvinfo":a="RV Info";break;case"accessroads":a="Access Roads";break;case"classifications":a="Classifications"}return""!==e[1]&&isNaN(e[1])&&a&&r++,n.a.createElement("div",null,n.a.createElement("h2",{className:"result-header"},""!==e[1]&&(isNaN(e[1])?a:null)),n.a.createElement("p",{className:"result-description"},""!==e[1]&&(isNaN(e[1])?e[1]:null)),n.a.createElement("p",{className:"result-description"},"Classifications"===a&&0===r?"No Info Availible":null))}):null),n.a.createElement("li",{className:"result-entry"},n.a.createElement("h2",{className:"result-subheader"},this.state.article_total&&this.state.article_total>0?"Articles:":null),this.state.article_total?Object.entries(this.state.article_data).map(function(e,t){return n.a.createElement("div",null,n.a.createElement("a",{href:e[1][1].url},n.a.createElement("p",{className:"result-description"},e[1][1].title)))}):null),n.a.createElement("li",{className:"result-entry"},n.a.createElement("h2",{className:"result-subheader"},this.state.news_total&&this.state.news_total>0?"News Releases:":null),this.state.news_total?Object.entries(this.state.news_data).map(function(e,t){return n.a.createElement("div",null,n.a.createElement("a",{href:e[1][1].url},n.a.createElement("p",{className:"result-description"},e[1][1].title)))}):null),n.a.createElement("li",{className:"result-entry"},n.a.createElement("h2",{className:"result-subheader"},this.state.lessons_total&&this.state.lessons_total>0?"Lesson Plans:":null),this.state.lessons_total?Object.entries(this.state.lessons_data).map(function(e,t){return n.a.createElement("div",null,n.a.createElement("a",{href:e[1][1].url},n.a.createElement("h2",{className:"result-subheader"},e[1][1].title?e[1][1].title:null),n.a.createElement("p",{className:"result-description"},e[1][1].questionobjective?e[1][1].questionobjective:null)))}):null));case"People":case"Places":return n.a.createElement("div",{className:"park-page"},n.a.createElement("li",{className:"result-entry"},n.a.createElement("a",{href:this.state.data[this.state.viewIndex][1].url},n.a.createElement("h1",{className:"result-name-people"},this.state.data[this.state.viewIndex][1].title?this.state.data[this.state.viewIndex][1].title:null)),n.a.createElement("a",{href:this.state.data[this.state.viewIndex][1].url},n.a.createElement("p",{className:"result-description"},this.state.data[this.state.viewIndex][1].listingdescription,n.a.createElement("img",{src:this.state.data[this.state.viewIndex][1].listingimage.url,alt:this.state.data[this.state.viewIndex][1].listingimage.altText})))))}}}]),t}(n.a.Component),C=a(21),O=a.n(C),S=(a(83),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"select-form"},n.a.createElement(O.a.Group,null,n.a.createElement(O.a.Control,{className:"options",as:"select",onChange:function(t){return e.props.onChange(t.target.value)},placeholder:this.props.placeholder,"data-dropup-auto":"false"},this.props.options.map(function(e,t){return n.a.createElement("option",{className:"test",key:t},e)}))))}}]),t}(n.a.Component)),_=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(h.a)(t).call(this))).handleSearchChange=function(t){var a=t.target.value;e.setState({search:a,clicked:!1})},e.state={clicked:!1,search:"",state:"",type:"Campgrounds"},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState({clicked:!0})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"search-page"},n.a.createElement("div",null,n.a.createElement(S,{className:"type-select",value:this.state.type,onChange:function(t){"Visitor Centers"===t?e.setState({type:"VisitorCenters"}):e.setState({type:t}),e.setState({clicked:!1})},options:["Campgrounds","Parks","People","Places","Visitor Centers"]})),n.a.createElement("div",{className:"state-select"},n.a.createElement(S,{value:this.state.state,onChange:function(t){"ALL"===t?e.setState({state:""}):e.setState({state:t}),e.setState({clicked:!1})},options:["ALL","AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IN","IA","KS","KY","LA","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]})),n.a.createElement("form",{className:"search-form"},n.a.createElement("input",{className:"search-input",placeholder:"Search",onChange:this.handleSearchChange}),n.a.createElement("button",{className:"search-submit",type:"submit",onClick:this.handleClick.bind(this)},n.a.createElement(d.a,{size:"5x",icon:p.d})),this.state.clicked&&n.a.createElement(I,{search:this.state.search,type:this.state.type,state:this.state.state})))}}]),t}(n.a.Component),A=(a(96),function(e){return n.a.createElement("div",{className:"home-page"},n.a.createElement("h2",{className:"homeStyleHeader"},"National Park Service Information Kiosk"),n.a.createElement("h3",{className:"homeStyleSubHeaderName"},"Made By: Arnold Makarov"))}),L=a(35),M=a.n(L),D=a(36),P=a.n(D),V=(a(97),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(h.a)(t).call(this))).state={isMini:!0,activeSidebar:"Home",inSearch:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.show?n.a.createElement(A,null):n.a.createElement("header",{className:this.state.isMini?"mini_toolbar":"toolbar"},n.a.createElement("nav",{className:"toolbar__navigation"},n.a.createElement("div",{className:"spacer"}),n.a.createElement("div",{className:"toolbar_navigation-items"},n.a.createElement("ul",null,n.a.createElement("div",{className:"toolbar__logo"},n.a.createElement("img",{src:this.state.isMini?P.a:M.a,alt:"Logo",style:{width:"360px"}})),n.a.createElement("li",null,n.a.createElement("div",{className:"toolbar__icon"},n.a.createElement(m,{title:"Collapse",isMini:this.state.isMini,icon:this.state.isMini?p.b:p.a,showSidebar:!1,onClick:function(){e.setState({isMini:!e.state.isMini})}}))),n.a.createElement("li",null,n.a.createElement("div",{className:"toolbar__icon"},n.a.createElement(m,{title:"Home",icon:p.c,isMini:this.state.isMini,sidebarComponent:n.a.createElement(A,null),showSidebar:"Home"===this.state.activeSidebar,onClick:function(){e.setState({activeSidebar:"Home"!==e.state.activeSidebar?"Home":""})}}))),n.a.createElement("li",null,n.a.createElement("div",{className:"toolbar__icon"},n.a.createElement(m,{title:"Search",icon:p.d,isMini:this.state.isMini,sidebarComponent:n.a.createElement(_,null),showSidebar:"Search"===this.state.activeSidebar,onClick:function(){e.setState({activeSidebar:"Search"!==e.state.activeSidebar?"Search":"",inSearch:!e.state.inSearch})}})))))))}}]),t}(n.a.Component)),H=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{style:{background:"transparent",position:"absolute",zIndex:"10"}},n.a.createElement(V,null)))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(37),R=a.n(T),W=a(38),K=a.n(W),z=a(39),B=a.n(z),F=a(40),U=a.n(F),G=a(41),J=a.n(G),Y=a(42),q=a.n(Y),Z=a(43),Q=a.n(Z),X=a(44),$=a.n(X),ee=a(45),te=a.n(ee),ae=a(46),se=a.n(ae),ne=a(47),ie=a.n(ne),re=a(48),le=a.n(re),ce={position:a(49).relative,zIndex:"-10",marginTop:"-8px"};r.a.render(n.a.createElement("div",null,n.a.createElement("div",{style:ce},n.a.createElement(R.a,{images:[le.a,se.a,q.a,U.a,ie.a,K.a,B.a,$.a,J.a,Q.a,te.a],duration:12,transition:4})),n.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.dba8c086.chunk.js.map