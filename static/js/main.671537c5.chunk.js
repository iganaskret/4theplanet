(this["webpackJsonpreact.js"]=this["webpackJsonpreact.js"]||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),i=n.n(r),l=(n(16),n(1)),c=n(2),o=n(4),u=n(3),d=n(6),h=n(5),m=n(10),p=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("label",{className:"filtering",htmlFor:this.props.value},s.a.createElement("input",{type:"radio",name:"subscriber",value:this.props.value,id:this.props.value,onChange:this.props.filterList}),this.props.value)}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={isHidden:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"filtering"},s.a.createElement("span",null,"Activated"),s.a.createElement(p,{value:"yes",filterList:this.props.filterList}),s.a.createElement(p,{value:"no",filterList:this.props.filterList}),s.a.createElement(p,{value:"all",filterList:this.props.filterList}))}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("tr",{key:this.props.user._id,style:this.props.user.isDeleted||this.props.user.isHidden?{display:"none"}:null},s.a.createElement("td",{"data-field":"name"},this.props.user.Name),s.a.createElement("td",{"data-field":"email"},this.props.user.Email),s.a.createElement("td",{"data-field":"id"},this.props.user._id),s.a.createElement("td",{"data-field":"activated"},this.props.user.isActivated?"yes":"no"),s.a.createElement("button",{className:"delete delete-column",onClick:function(){return e.props.deleteRecord(e.props.user._id)},id:this.props.user._id},"\u2715"))}}]),t}(a.Component),E=n(9),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"sorting"},s.a.createElement("label",{id:"house-selector"},"Sort by",s.a.createElement("select",{name:"house-filter",id:"house-filter",onChange:this.props.sortList},s.a.createElement("option",Object(E.a)({value:"none",hidden:!0,disabled:!0,selected:!0},"value",!0)),s.a.createElement("option",{value:"Name"},"name"),s.a.createElement("option",{value:"Email"},"e-mail"))))}}]),t}(a.Component),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={loading:!1,users:[]},e.deleteRecord=e.deleteRecord.bind(Object(d.a)(e)),e.filterList=e.filterList.bind(Object(d.a)(e)),e.sortList=e.sortList.bind(Object(d.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0});fetch("https://form4earth-2b74.restdb.io/rest/form4earth",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5de4e9004658275ac9dc2184","cache-control":"no-cache"}}).then((function(e){return e.json()})).then((function(t){return e.setState({users:t,loading:!1})}))}},{key:"deleteRecord",value:function(e){fetch("https://form4earth-2b74.restdb.io/rest/form4earth/"+e,{method:"delete",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5de4e9004658275ac9dc2184","cache-control":"no-cache"}}).then((function(e){return e.json()})).then(this.setState((function(t){return{users:t.users.map((function(t){return t._id===e&&(t.isDeleted=!0),t}))}})))}},{key:"filterList",value:function(e){e.target.checked=!0;var t=e.target.id;this.setState((function(e){return{users:e.users.map((function(e){return"all"===t?e.isHidden=!1:"yes"===t?e.isActivated?e.isHidden=!1:e.isHidden=!0:e.isActivated?e.isHidden=!0:e.isHidden=!1,e}))}}))}},{key:"sortList",value:function(e){var t=e.target.value,n=Object(m.a)(this.state.users);this.setState((function(e){return"none"!=t&&n.sort((function(e,n){return console.log(e,n),e[t].localeCompare(n[t])})),{users:n.map((function(e){return e}))}}))}},{key:"render",value:function(){var e=this,t=this.state.loading?"loading...":this.state.users.map((function(t){return s.a.createElement(f,{user:t,deleteRecord:e.deleteRecord})}));return s.a.createElement("div",{className:"table-users",style:this.props.visibility?null:{display:"none"}},s.a.createElement("div",{className:"options"},s.a.createElement(v,{sortList:this.sortList}),s.a.createElement(b,{filterList:this.filterList})," "),s.a.createElement("table",{id:"list"},s.a.createElement("thead",null,s.a.createElement("tr",{className:"head-row"},s.a.createElement("th",null,"First name"),s.a.createElement("th",null,"Email"),s.a.createElement("th",null,"Discount code"),s.a.createElement("th",null,"Activated"),s.a.createElement("th",null,"Delete"))),s.a.createElement("tbody",null,t)))}}]),t}(a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("tr",{key:this.props.user._id,style:this.props.user.isDeleted?{display:"none"}:null},s.a.createElement("td",{"data-field":"email"},this.props.user.Email),s.a.createElement("button",{className:"delete delete-column",onClick:function(){return e.props.deleteRecord(e.props.user._id)},id:this.props.user._id},"\u2715"))}}]),t}(a.Component),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={loading:!1,users:[]},e.deleteRecord=e.deleteRecord.bind(Object(d.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0});fetch("https://form4earth-2b74.restdb.io/rest/subscribers",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5de4e9004658275ac9dc2184","cache-control":"no-cache"}}).then((function(e){return e.json()})).then((function(t){return e.setState({users:t,loading:!1})}))}},{key:"deleteRecord",value:function(e){fetch("https://form4earth-2b74.restdb.io/rest/subscribers/"+e,{method:"delete",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5de4e9004658275ac9dc2184","cache-control":"no-cache"}}).then((function(e){return e.json()})).then(this.setState((function(t){return{users:t.users.map((function(t){return t._id===e&&(t.isDeleted=!0),t}))}})))}},{key:"render",value:function(){var e=this,t=this.state.loading?"loading...":this.state.users.map((function(t){return s.a.createElement(j,{user:t,deleteRecord:e.deleteRecord})}));return s.a.createElement("div",{className:"table-users",style:this.props.visibility?null:{display:"none"}},s.a.createElement("table",{id:"list"},s.a.createElement("thead",null,s.a.createElement("tr",{className:"head-row"},s.a.createElement("th",null,"Email"),s.a.createElement("th",null,"Delete"))),s.a.createElement("tbody",null,t)))}}]),t}(a.Component),k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={usersOn:!0,newsletterOn:!1},e.handleClick=e.handleClick.bind(Object(d.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e,t){"users"===t?(this.setState({usersOn:!0,newsletterOn:!1}),console.log(this.state.usersOn)):this.setState({usersOn:!1,newsletterOn:!0})}},{key:"render",value:function(){var e=this,t={display:"none"},n={backgroundColor:"#2b419a",cursor:"default",height:"60px",transform:"translateY(0px)"};return s.a.createElement("main",null,s.a.createElement("div",{className:"tab-btns"},s.a.createElement("button",{style:this.state.usersOn?n:null,onClick:function(t){e.handleClick(t,"users")}},"Users"),s.a.createElement("button",{style:this.state.newsletterOn?n:null,onClick:function(t){e.handleClick(t,"newsletter")}},"Newsletter subscribers")),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"tab1"},s.a.createElement("h1",{style:this.state.usersOn?null:t},"List of users "),s.a.createElement(O,{visibility:this.state.usersOn})),s.a.createElement("div",{className:"tab2"},s.a.createElement("h1",{style:this.state.newsletterOn?null:t},"List of subscribers"),s.a.createElement(y,{visibility:this.state.newsletterOn}))))}}]),t}(a.Component);i.a.render(s.a.createElement(k,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.671537c5.chunk.js.map