(this.webpackJsonpapplication=this.webpackJsonpapplication||[]).push([[0],{32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},38:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),c=s(17),i=s.n(c),a=(s(32),s(33),s(9)),u=s(10),o=s(12),d=s(11),j=(s(34),s(14)),h=s(4),l=s(6),p=(s(35),s(36),s(0)),b=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"loading",children:Object(p.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})}}]),s}(n.Component),A=s(2),O=(s(38),0),x=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).handleNewRequestName=function(e){var t=e.target.value;n.setState({newRequestName:t})},n.handleNewRequestDescription=function(e){var t=e.target.value;n.setState({newRequestDescription:t})},n.closeRequest=n.closeRequest.bind(Object(l.a)(n)),n.renderExactRequest=n.renderExactRequest.bind(Object(l.a)(n)),n.submitNewRequest=n.submitNewRequest.bind(Object(l.a)(n)),n.outputSelect=n.outputSelect.bind(Object(l.a)(n)),n.outputExecutor=n.outputExecutor.bind(Object(l.a)(n)),n.putRequest=n.putRequest.bind(Object(l.a)(n)),n.handleComment=n.handleComment.bind(Object(l.a)(n)),n.handleStatus=n.handleStatus.bind(Object(l.a)(n)),n.handleExecutor=n.handleExecutor.bind(Object(l.a)(n)),n.state={newRequestName:"",newRequestDescription:"",selectedStatus:n.props.request.request.statusName,comment:"",selectedExecutor:n.props.request.request.executorName},O=n.props.request.request.id,n}return Object(u.a)(s,[{key:"componentDidUpdate",value:function(){O!==this.props.request.request.id&&(O=this.props.request.request.id,this.setState({selectedStatus:this.props.request.request.statusName,comment:"",selectedExecutor:this.props.request.request.executorName,isOpen:!1}))}},{key:"closeRequest",value:function(){this.props.closeChangeRequest()}},{key:"printMonth",value:function(e){switch(parseInt(e)){case 1:return"\u044f\u043d\u0432\u0430\u0440\u044f";case 2:return"\u0444\u0435\u0432\u0440\u0430\u043b\u044f";case 3:return"\u043c\u0430\u0440\u0442\u0430";case 4:return"\u0430\u043f\u0440\u0435\u043b\u044f";case 5:return"\u043c\u0430\u044f";case 6:return"\u0438\u044e\u043d\u044f";case 7:return"\u0438\u044e\u043b\u044f";case 8:return"\u0430\u0432\u0433\u0443\u0441\u0442\u0430";case 9:return"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f";case 10:return"\u043e\u043a\u0442\u044f\u0431\u0440\u044f";case 11:return"\u043d\u043e\u044f\u0431\u0440\u044f";case 12:return"\u0434\u0435\u043a\u0430\u0431\u0440\u044f";default:return""}}},{key:"printDate",value:function(e){var t=e.getDate(),s=e.getMonth(),n=e.getHours(),r=e.getMinutes();return r<10&&(r="0"+r),t+" "+(s=this.printMonth(s))+", "+n+":"+r+" \u043f\u0440\u043e\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043b"}},{key:"outputComments",value:function(e){var t=this;return void 0===e?Object(p.jsx)(p.Fragment,{}):e.map((function(e){if(null===e.comment)return Object(p.jsx)(p.Fragment,{});var s=e.createdAt;return s=new Date(s),s=t.printDate(s),Object(p.jsxs)("div",{className:"main_comment_comment",children:[Object(p.jsx)("div",{className:"circle_comment"}),Object(p.jsxs)("div",{className:"main_comment_exact",children:[Object(p.jsx)("div",{children:e.userName}),Object(p.jsx)("div",{className:"comment_date",children:s}),Object(p.jsx)("div",{className:"comment_text",children:e.comment})]})]},e.id)}))}},{key:"outputTags",value:function(e){return void 0!==e?e.map((function(e){return Object(p.jsx)("div",{children:e.name},e.id)})):Object(p.jsx)(p.Fragment,{})}},{key:"submitNewRequest",value:function(e){e.preventDefault();var t=this.state,s={name:t.newRequestName,description:t.newRequestDescription};this.props.postNewRequest(JSON.stringify(s))}},{key:"outputSelect",value:function(e){return this.props.status.status.map((function(t){return t.id===e?Object(p.jsx)(p.Fragment,{}):Object(p.jsx)("option",{value:t.name,children:t.name},t.id)}))}},{key:"outputExecutor",value:function(e){return this.props.users.users.map((function(t){return t.id===e?Object(p.jsx)(p.Fragment,{}):Object(p.jsx)("option",{value:t.name,children:t.name},t.id)}))}},{key:"putRequest",value:function(){var e=this.state.selectedStatus,t=this.state.comment,s=this.state.selectedExecutor,n=this.props.request.request,r=this.props.users.users,c=this.props.status.status,i={};if(void 0!==s){var a=r.filter((function(e){return e.name===s}))[0];a=a.id,i=Object(A.a)(Object(A.a)({},i),{},{executorId:a})}if(""!==t&&void 0!==t&&(i=Object(A.a)(Object(A.a)({},i),{},{comment:t})),void 0!==e){var u=c.filter((function(t){return t.name===e}))[0];u=u.id,i=Object(A.a)(Object(A.a)({},i),{},{statusId:u})}null!==i.statusId||null!==i.executorId||void 0!==i.comment?(i=Object(A.a)(Object(A.a)({},i),{},{id:n.id}),this.props.putRequest(JSON.stringify(i))):console.log("Nothing has changed")}},{key:"handleComment",value:function(e){var t=e.target.value;this.setState({comment:t})}},{key:"handleStatus",value:function(e){var t=e.target.value;this.setState({selectedStatus:t})}},{key:"handleExecutor",value:function(e){var t=e.target.value;this.setState({selectedExecutor:t})}},{key:"renderExactRequest",value:function(){var e=this.props.request.request;if(0===e.length)return Object(p.jsxs)("div",{className:"request_grid",children:[Object(p.jsxs)("div",{className:"request_header",children:[Object(p.jsx)("div",{children:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u044f\u0432\u043a\u0430"}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"close_btn",onClick:this.closeRequest,children:"\xd7"})})]}),Object(p.jsxs)("form",{className:"request_main",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})}),Object(p.jsx)("textarea",{className:"request_new_textarea1",onChange:this.handleNewRequestName,value:this.state.newRequestName})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})}),Object(p.jsx)("textarea",{className:"request_new_textarea2",onChange:this.handleNewRequestDescription,value:this.state.newRequestDescription})]}),Object(p.jsx)("div",{className:"request_main_button",children:Object(p.jsx)("button",{onClick:this.submitNewRequest,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]});var t=e.resolutionDatePlan,s=(t=new Date(t)).getDate(),n=t.getMonth(),r=t.getFullYear();return s<10&&(s="0"+s),n<10&&(n="0"+n),t=s+"."+n+"."+r+"\u0433.",Object(p.jsxs)("div",{className:"request_grid",children:[Object(p.jsxs)("div",{className:"request_header",children:[Object(p.jsxs)("div",{children:["\u2116",e.id]}),Object(p.jsx)("div",{children:e.name}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"close_btn",onClick:this.closeRequest,children:"\xd7"})})]}),Object(p.jsxs)("div",{className:"request_main",children:[Object(p.jsxs)("div",{className:"request_main_description",children:[Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})}),Object(p.jsx)("div",{children:e.description})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"}),Object(p.jsx)("textarea",{onChange:this.handleComment,value:this.state.comment})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:this.putRequest,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),Object(p.jsx)("div",{className:"request_main_comments",children:Object(p.jsx)("div",{className:"request_main_comment",children:this.outputComments(e.lifetimeItems)})})]}),Object(p.jsxs)("div",{className:"request_aside",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"aside_status",style:{backgroundColor:e.statusRgb}}),Object(p.jsx)("div",{children:Object(p.jsx)("form",{children:Object(p.jsxs)("select",{value:this.state.selectedStatus,onChange:this.handleStatus,children:[Object(p.jsx)("option",{value:e.statusName,children:e.statusName}),this.outputSelect(e.statusId)]})})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"\u0417\u0430\u044f\u0432\u0438\u0442\u0435\u043b\u044c"}),Object(p.jsx)("div",{})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0430"}),Object(p.jsx)("div",{children:e.initiatorName})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c"}),Object(p.jsx)("div",{children:Object(p.jsx)("form",{children:Object(p.jsxs)("select",{value:this.state.selectedExecutor,onChange:this.handleExecutor,children:[Object(p.jsx)("option",{value:e.executorName,children:e.executorName},e.executorId),this.outputExecutor(e.executorId)]})})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442"}),Object(p.jsx)("div",{children:e.priorityName})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"\u0421\u0440\u043e\u043a"}),Object(p.jsx)("div",{children:t})]}),Object(p.jsxs)("div",{className:"req_tags",children:[Object(p.jsx)("div",{children:"\u0422\u0435\u0433\u0438"}),Object(p.jsx)("div",{children:this.outputTags(e.tags)})]})]})]})}},{key:"render",value:function(){return void 0===this.props.request.request?Object(p.jsx)(p.Fragment,{}):this.state.isOpen?(console.log("HERE"),this.closeRequest(),Object(p.jsx)(p.Fragment,{})):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"content_request",children:this.renderExactRequest()})})}}]),s}(n.Component),m=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).requestRef=r.a.createRef(Object(p.jsx)(x,{})),n.renderRequests=n.renderRequests.bind(Object(l.a)(n)),n}return Object(u.a)(s,[{key:"createRequest",value:function(){this.props.closeChangeRequest(),this.props.getExactRequest(-1),this.props.openChangeRequest()}},{key:"changeRequest",value:function(e){if(void 0===e)return Object(p.jsx)(p.Fragment,{});this.props.closeChangeRequest(),this.props.getExactRequest(e),this.props.openChangeRequest()}},{key:"openRequest",value:function(e){var t=this;if(void 0!==this.props.exactRequest)return!0===e?Object(p.jsx)(x,{request:this.props.exactRequest,closeChangeRequest:this.props.closeChangeRequest,postNewRequest:this.props.postNewRequest,status:this.props.status,users:this.props.users,putRequest:this.props.putRequest,fetchRequests:this.props.fetchRequests,fetchPriorities:this.props.fetchPriorities,fetchStatus:this.props.fetchStatus,fetchUsers:this.props.fetchUsers,getExactRequest:function(e){return t.props.getExactRequest(e)}}):Object(p.jsx)(p.Fragment,{})}},{key:"renderRequests",value:function(){var e=this,t=this.props.requests.value,s=this.props.priorities.priorities;return void 0!==t?t.map((function(t){var n=s.filter((function(e){return e.id===t.priorityId}))[0];return void 0===n?Object(p.jsx)(p.Fragment,{}):(n=n.rgb,Object(p.jsxs)("div",{onClick:function(){e.changeRequest(t.id)},className:"content_request__card",children:[Object(p.jsx)("div",{style:{backgroundColor:n}}),Object(p.jsx)("div",{children:t.id}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:t.name})}),Object(p.jsx)("div",{children:Object(p.jsx)("span",{className:"request_span",style:{background:t.statusRgb},children:t.statusName})}),Object(p.jsx)("div",{children:t.executorName})]},t.id))})):Object(p.jsx)(b,{})}},{key:"render",value:function(){var e=this;return void 0===this.props.requests?Object(p.jsx)(p.Fragment,{}):Object(p.jsxs)("div",{className:"content_container",children:[Object(p.jsx)("div",{className:"content_new_request",children:Object(p.jsx)("button",{onClick:function(){e.createRequest()},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"})}),Object(p.jsxs)("div",{className:"content_main",children:[Object(p.jsxs)("div",{className:"content_request__card",children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"ID"})}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"\u0421\u0442\u0430\u0442\u0443\u0441"})}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c"})})]}),this.renderRequests()]}),this.openRequest(this.props.exactRequest.isOpen)]})}}]),s}(n.Component),g=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"handler",value:function(e){console.log("You clicked on "+e)}},{key:"empty",value:function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("h1",{style:{margin:"15px"},children:e})})}},{key:"render",value:function(){var e=this;return Object(p.jsxs)(j.a,{children:[Object(p.jsxs)("section",{className:"menu_container",children:[Object(p.jsx)("div",{className:"menu_logo",children:Object(p.jsx)("img",{alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",src:"data:image/png;base64,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"})}),Object(p.jsx)(j.b,{style:{textDecoration:"none"},to:"/base",children:Object(p.jsxs)("div",{className:"menu_base",children:[Object(p.jsx)("img",{alt:"\u0411\u0430\u0437\u0430 \u0437\u043d\u0430\u043d\u0438\u0439",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAABjUlEQVRIie3WvY9NURQF8N+MNzKE0BCChESl9E+go/ORSFSim5peQyJUShQKX9U0klEoNGpRKnwEEwkJQYaxZU/2S17mvjvPc19UVnKSc89ZZ5119zl37zsVEXAUx7EOv/Ady9iIL5jFDKa0I+d+4j7u9XAIV3AHX2vZMezBVVzAAp6OEE6HG3B5xWBELETE+XQ+0M5ExLV6vh0RB1fNr9XORsSjaXzD+1W7b8OW6m/C7oa/dnzAYgr/wFscwaVW+p8jzyOmi56ut2P/BIRX0BfulfinBqOj8DDEkLHOwjMDV+8z1jcYI9AmnCd7Dg9wcsitGYleC+EZbuEulvCywRiBNuEn1RLzjdkOoeiM/8L/Tni5ksfmBqOjcH5ZHyvLTQT9e7wP1/Fw0o5nK+ksNRjjYzFLWK8K6KuqFKdqs7/NbLnuMLZmlb6B5xWON3WQaxXNYYhas6vOa75XKTJd5+DjKlXjCvdxsd9J4Xz1vZjDiTEcDiKN5P/IDpzG6wzFTtzEC7zr4DaR4TyAud+sXI6aQkuEFQAAAABJRU5ErkJggg=="}),Object(p.jsx)("p",{children:"\u0411\u0430\u0437\u0430 \u0437\u043d\u0430\u043d\u0438\u0439"})]})}),Object(p.jsx)(j.b,{style:{textDecoration:"none"},to:"/requests",children:Object(p.jsxs)("div",{className:"menu_requests",children:[Object(p.jsx)("img",{alt:"\u0417\u0430\u044f\u0432\u043a\u0438",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAABlElEQVQ4jZWUO0tDMRiGn9a7YlG0CkW8ba6i4D9wcxQXHZwE3Ryd+htEVwcR9yo4+Ct0ENFFUAelXopQD5X2SOSNhPSk9LwQDjlJnnzXZOI4XgZWgQiIaVYGyAI3wH7TqmRAF8AhUAHegZoOI3AOGAL2gBdgrYkCdAL3wJnms8AI0LAXyZIq8AjcAs/AbhKow5nPAxOOiwb0A1wBc8AmMAmUgBUXlPXAT7LwzvlWtDYADANF/TtvBTIbxzTy+vZrrUfDaF3xLIVAkeIRaXzLNRSjRScRG8ADcGxjlGSRK2vRJbAEnAJlXfAG7Jg4m/QfANt+FlpoXOUQ6xLj4pZv0YI2hVRXoOtav1apFH3QjNJbD4CsbJyqym7eB71qU6PpaLKq+pv1QbZA/WyGlHUP+qCuQPMmKeMedFVr8Qr4yrix9EE5NW27FvWGQJ8pXYtCoFGgkALUFwKVU0BQLyaCBmVVu7DuEMgU2FcbBWnTbl+GP5B7+xQwnaKyTa8Z1Q3IuGN11CbA14d5Rk7U0Wb8V2oqQeEXCIhlCu2rQnIAAAAASUVORK5CYII="}),Object(p.jsx)("p",{children:"\u0417\u0430\u044f\u0432\u043a\u0438"})]})}),Object(p.jsxs)(j.b,{style:{textDecoration:"none"},to:"/workers",children:[" ",Object(p.jsxs)("div",{className:"menu_workers",children:[Object(p.jsx)("img",{alt:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAYAAAAougcOAAACMklEQVQ4jZWUS4iPYRTGf8Z9Qho1mlzytxtmISHFhs3MpEwxG0IhkQwrO0rsWCgLG2wsMKUmCywY/6ZEyWIWk5KFQYzJtdzGbR6d+Z6pb77vtfg/der7zjnvc9733CZJIoFFwGzgSc50BlgBfAWmWA4Cz21fBnwBXhXpikGmAZcd4BfQABwBWoGdwFbgKVAPnABWAheA3cAPn49Au3w+QwTJSY+kG5LmSZosqVPSIUm9Bb9xOSepX1K7pDpJDT7fk/ery71iNdAIdAAfgL/AdeA1MFTO6Bj6gV7gNjAKfPT5RvONIR9kYSqfwGJgbkmbYTqwpKTNeBakgqwDRkrusNm3TSFesBSoFGw/gfWpIJX/pCV8Hpe0GQaBd8Dvgn5oQuBcgVokDUuqFIq7Q9InSfMThb/lQud1FfO0pAo/AOwBrrmFA2fdxkeBi4XbbgP+eJZOWzcH6DbPQOolIW3K8EBSt6S+nC1wV9IWSSf932Rbn/0fWt+W5x0fxrjVXuf2lBtg1C16wMN1B5jqXH92u8Yw3vM2aLZ9FnDc35eAqxHpsKRnzn3+Vcsl3Zd0U9LGRD1C1nrwqpI6ErUM3i7s0FpwaJY0KGl7gjglG+y/r2AL3moUfnjCnsnQ7vRcKTVtGlXgGLCpYA3etxFkJvCyYBzxWqkFwRUbOo/grY91HRv1vAcoHKOg0bZvagwSHfTNu6vTl2wKzgiyH1gDzIjVD3wHVnll14L3zsALpy+6cwR49A+tBfXj8GPJoAAAAABJRU5ErkJggg=="}),Object(p.jsx)("p",{children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"})]})]}),Object(p.jsxs)(j.b,{style:{textDecoration:"none"},to:"/clients",children:[" ",Object(p.jsxs)("div",{className:"menu_clients",children:[Object(p.jsx)("img",{alt:"\u041a\u043b\u0438\u0435\u043d\u0442\u044b",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAACyElEQVRIiZ2VSWhUQRCGv1kSNa64oAFBheCKW0DxYIwEXFDcrkrAEQQvHjRX8SAiCIIXPYi4IOjF7aIXQSWInhQjGgyiEfUQTSSTaNS4ZaQyf0Pz+s2bMQXDzFR31V/119KpQqHAf8heYDnwFDhbqVk60CTLVuArsDHxVkSygSZZbgE3gc2JtyJSKV3TgCPAT2BIDIwCDgM9we0RZrIeWADsAaqB38A5YB1wJbg9QpBXwGmg09PZ/7fBzRgpR1cK2K0sBoEa7+y7KOsALgIlHZXLZAywDTihLKq8M6NsJnAAuAoMBNYVgliB20WX1eJP5Owl8KLcKERBdgFzRMV1oAv4AixT8VPeXaPnhuamJFVRkDqgBbgEbAAmA4eAWk33ncAaxgFbAm0CyDfgPHAKaAUWSl8dySAqiVn4IMbpdmAJcBwYK/0joA2oV3ZxdH0MvJYAmaF91CJHVpODat/X6qy4hTiggUwUB5IBnsloEjAe+AX0A1OAD/ofJ1NV/JLihtGKmwM+qZOGRNEFoE+fxhgnt4G5auOc7AoKus0NqV+T6cAxz0FO4LYU38lRVCyDvGi1rE8KxMbgqGrW70DsoBtoVvH/AiuBy6qXfT8JIIrSqOLPBpoU8HvgoWsUB5LSXFgk1wS6XzrLogFYEdNdrarXBFGUFUiNVlDBByko9QZFhJzeU1ZZr619yci2Su9KpwL54c9XNmKQ1yHiOCNQWzH3A4ii7FPnzQeWenQNRjNJyXmXgOxwlXTdMq4N3Bcj79HL2aHM3bJcG80ko8tW5MVqxTrp8lqS9QEEPAZ65WwesEa/2xVc2gexvbVJB73KJK32bdIs+K+ik50KzAIx5+7bArINcmaYJu9ltEgWKQsTa4S7mujVJephDh8An7Ve/OZ4DrxxIDu0Suy9tgK6NjWwWWoA+8RtYotwotaQtbKrh+lHD9tD3z8DA7a19Es4gQAAAABJRU5ErkJggg=="}),Object(p.jsx)("p",{children:"\u041a\u043b\u0438\u0435\u043d\u0442\u044b"})]})]}),Object(p.jsxs)(j.b,{style:{textDecoration:"none"},to:"/finance",children:[" ",Object(p.jsxs)("div",{className:"menu_finance",children:[Object(p.jsx)("img",{alt:"\u0410\u043a\u0442\u0438\u0432\u044b",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAACNUlEQVRIibXWT4hNcRQH8M9782b8pzHNGMOCsqNhwVJWslMKG0VZUBIL2UhK/iRRKAuRouzJwsKKtQ1JKYshgzSMMhjGzNWvOZMx9915d+r51u3ee975ne8933N+5/cqWZbdw2J8RVVzMYYF+FzDSvQ2mWAqnqUMBnLm5mMgZVRBC0ZnEL4dGzGCR/ie8/iLFLtSy5nL4RLWYRbu4FSjVWWJurEDbbgZBAfRg8057zooS3QUWzCMeXgZ3TS3gWwNM1qEPViCW2E7gffYGYSVuEqhaN/sjSx64z6IOdEEw5P8ElFrbnUdFBEtxVVsw2/ML8hgNLbHBlzGSXTmok0j3Y8IvixaeCznMY70ET9xOHy2xtpzUx2LMlKQQT2kD/qC3bgS4yyHIqLZIUlf+KT3fryJmrTGc3+0/ASyuHIokm4IB7A6SPpC/294ET7no9Ufows3sAm3c9GCqN74ORPad+BaEB0P/4vhcyRqdBorsB/XcWFKrBS7JR0TD7AL60OSsTgy3kWN2mMSfIiFXXH/GPfu+KjBkK0nNnM1GulJGlO1kCm15L7Y6SOT9DapIWb63hpT43XiqAVJGinbc8I2D53VqMP/Rkeq0d0gG5rJ7CqJLPbZp0TUFqN+dJoJsBxnYwIMhq09xs4xvM2tGEc1uvqhLMvKXG1Zlt2v45ds6beGMcr+60nSLowNOoH0nGylapykq2dfFXMryZqOhaTzGjyNoZmQjo21eB71TRPkFw7h1T/R8AeW7cnKfzwdwQAAAABJRU5ErkJggg=="}),Object(p.jsx)("p",{children:"\u0410\u043a\u0442\u0438\u0432\u044b"})]})]}),Object(p.jsxs)(j.b,{style:{textDecoration:"none"},to:"/settings",children:[" ",Object(p.jsxs)("div",{className:"menu_options",children:[Object(p.jsx)("img",{alt:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAC40lEQVRIiY2Wa2hPcRjHP/7RXBoteSFLRnIpcou1RK6RFBuLJpdILcoYtRKKCAsTucQybXmh5bJYLnshanP3AvFmvFFuzTUrjK9+23P02/n//mvfejrn932e8/zO77md00USKTAGKDDVIOAUcMMzzQNygfdAD+AMcD/oym0SkNGSzklaarpMSQ2SMmw9QFK9pN62LpB0WdLYgK+UmxRLKopxuZLqJG2QdFvSwpi+RFJhwBddk47WhuvA4hh3AWgB+gL7gKsxfRpwM8lTB+FyUiNpSIAPyXALb0j3/yQuyQuAH8BLYKpdP8beaRSQATQBzz3+HfDZTtjg2Z0H7rrq6g8cNaIXMNTCss1zsgnIMkctFhrn5AVwxLMrA34Bz8y2EChym2wHPtlGcbjSPA00A8eAJ54+G1gP/AVW2jWONcBgF7NKSX1DsZRUJmlrgPflgKTSAO8kTdLZhB3tgIXKxxygO7A76f3ao9iadVqM7wOccP4TlqxXQBUw3TOaFSjTVKgB5nu6GTYBXM5KE0butMQv9wx/Aw9TOI3jkSU8wgqgHNjv1glP8Rj46a1lG3UGLbHEu2cbo0W0yRTgEPDAM0yzeu8MRgA9Pbs64PD/yEjKk3RN0pxYZbihtzdQMSEpl5Qf4ydIuiJpo1tctCkberhC0qIA78taV6YBPpIqF67XwMgUIdkBrAa2Wvh8pAN7bJBuSXqyDa7Kml3HTwRKgFVAP2Ae8BWoMMN06xWXzLfeWMm0wtjsVdY6s78HvLE+ORh9GZcBk2x8fLeE37KvYYs5yDSbdLOpt02jItliz92xz4Fr7qdApR+7+GiplTQ+EOOQ5Ei6EeBbxe+TJu++m32vG2mPLBsfA2P8Myv/+GhqRSKJacNcG9VfPG4YcByYDJy03ojwzRp5SdBbiiO6H4JqSdke53pppt3PtnWkGyfpkoUtyV9Hv0Ru4OXbuHET9Q+wy9O7RLuwfgBygGqgNskL8A90qfZtDAuRVQAAAABJRU5ErkJggg=="}),Object(p.jsx)("p",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})]})]})]}),Object(p.jsxs)(h.d,{children:[Object(p.jsx)(h.b,{path:"/base",children:function(){return e.empty("\u0411\u0430\u0437\u0430 \u0437\u043d\u0430\u043d\u0438\u0439")}}),Object(p.jsx)(h.b,{path:"/workers",children:function(){return e.empty("\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438")}}),Object(p.jsx)(h.b,{path:"/clients",children:function(){return e.empty("\u041a\u043b\u0438\u0435\u043d\u0442\u044b")}}),Object(p.jsx)(h.b,{path:"/finance",children:function(){return e.empty("\u0410\u043a\u0442\u0438\u0432\u044b")}}),Object(p.jsx)(h.b,{path:"/settings",children:function(){return e.empty("\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")}}),Object(p.jsx)(h.b,{path:"/requests",children:Object(p.jsx)(m,{requests:this.props.requests,exactRequest:this.props.exactRequest,getExactRequest:this.props.getExactRequest,openChangeRequest:this.props.openChangeRequest,closeChangeRequest:this.props.closeChangeRequest,priorities:this.props.priorities,postNewRequest:this.props.postNewRequest,status:this.props.status,users:this.props.users,putRequest:this.props.putRequest,fetchRequests:this.props.fetchRequests,fetchPriorities:this.props.fetchPriorities,fetchStatus:this.props.fetchStatus,fetchUsers:this.props.fetchUsers})}),Object(p.jsx)(h.a,{to:"/requests"})]})]})}}]),s}(n.Component),f=(s(43),function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"search_container",children:Object(p.jsx)("div",{className:"search_input",children:Object(p.jsx)("input",{type:"text",name:"search"})})})}}]),s}(n.Component)),R=(s(44),function(e){return{type:"ADD_STATUS",payload:e}}),v=function(e){return{type:"STATUS_FAILED",payload:e}},q=function(e){return{type:"ADD_PRIORITIES",payload:e}},E=function(e){return{type:"FAILED_PRIORITIES",payload:e}},N=function(e){return function(t){if(-1!==e)return fetch("http://intravision-task.test01.intravision.ru/api/f43cdaee-a421-4cdc-b54d-d84a0f9d09d4/Tasks/"+parseInt(e)).then((function(e){if(e.ok)return e;var t=new Error("SERVER ERROR "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return t(S(e))})).catch((function(e){return t(w(e.message))}));t(S([]))}},S=function(e){return{type:"ADD_EXACT_REQUEST",payload:e}},w=function(e){return{type:"EXACT_REQUEST_FAILED",payload:e}},y=function(e){return{type:"ADD_USERS",payload:e}},D=function(e){return{type:"USERS_FAILED",payload:e}},I=s(19),k=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchRequests(),this.props.fetchPriorities(),this.props.fetchStatus(),this.props.fetchUsers()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(g,{className:"menu",requests:this.props.requests.requests,exactRequest:this.props.exactRequest,getExactRequest:this.props.getExactRequest,openChangeRequest:this.props.openChangeRequest,closeChangeRequest:this.props.closeChangeRequest,priorities:this.props.priorities,postNewRequest:this.props.postNewRequest,status:this.props.status,users:this.props.users,putRequest:this.props.putRequest,fetchRequests:this.props.fetchRequests,fetchPriorities:this.props.fetchPriorities,fetchStatus:this.props.fetchStatus,fetchUsers:this.props.fetchUsers}),Object(p.jsx)(f,{className:"search"})]})}}]),s}(n.Component),U=Object(I.b)((function(e){return{requests:e.requests,exactRequest:e.exactRequest,priorities:e.priorities,status:e.status,users:e.users}}),(function(e){return{fetchRequests:function(){e((function(e){return fetch("http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=f43cdaee-a421-4cdc-b54d-d84a0f9d09d4").then((function(e){if(e.ok)return e;var t=new Error("SERVER ERROR "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e({type:"ADD_REQUESTS",payload:t})})).catch((function(t){return e({type:"REQUESTS_FAILED",payload:t.message})}))}))},getExactRequest:function(t){e(N(t))},openChangeRequest:function(){e({type:"OPEN_CHANGE_REQUEST"})},closeChangeRequest:function(){e({type:"CLOSE_CHANGE_REQUEST"})},fetchPriorities:function(){e((function(e){return fetch("http://intravision-task.test01.intravision.ru/api/f43cdaee-a421-4cdc-b54d-d84a0f9d09d4/Priorities").then((function(e){if(e.ok)return e;var t=new Error("SERVER ERROR "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(q(t))})).catch((function(t){return e(E(t.message))}))}))},postNewRequest:function(t){e(function(e){return function(t){return fetch("http://intravision-task.test01.intravision.ru/api/f43cdaee-a421-4cdc-b54d-d84a0f9d09d4/Tasks",{method:"POST",body:e,headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("SERVER ERROR "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return t(N(e))})).then((function(e){return t(S(e.payload))})).catch((function(e){return t(w(e.message))}))}}(t))},fetchStatus:function(){e((function(e){return fetch("http://intravision-task.test01.intravision.ru/api/f43cdaee-a421-4cdc-b54d-d84a0f9d09d4/Statuses").then((function(e){if(e.ok)return e;var t=new Error("SERVER ERROR "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(R(t))})).catch((function(t){return e(v(t.message))}))}))},fetchUsers:function(){e((function(e){return fetch("http://intravision-task.test01.intravision.ru/api/f43cdaee-a421-4cdc-b54d-d84a0f9d09d4/Users").then((function(e){if(e.ok)return e;var t=new Error("SERVER ERROR "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(y(t))})).catch((function(t){return e(D(t.message))}))}))},putRequest:function(t){e(function(e){return function(t){return fetch("http://intravision-task.test01.intravision.ru/api/f43cdaee-a421-4cdc-b54d-d84a0f9d09d4/Tasks",{method:"PUT",body:e,headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok){var t=new Error("SERVER ERROR "+e.status+": "+e.statusText);throw t.response=e,t}window.location.reload()}),(function(e){throw new Error(e.message)}))}}(t))}}}))(k),B=s(26),C=s(27),T=s.n(C),L=s(20),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,requests:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_REQUESTS":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,errMess:null,requests:t.payload});case"REQUESTS_FAILED":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,errMess:t.payload,requests:[]});case"REQUESTS_LOADING":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!0,errMess:null,requests:[]});default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,request:[],isOpen:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXACT_REQUEST":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,errMess:null,request:t.payload});case"EXACT_REQUEST_FAILED":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,errMess:t.payload,request:[]});case"EXACT_REQUEST_LOADING":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!0,errMess:null,request:[]});case"OPEN_CHANGE_REQUEST":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,errMess:null,isOpen:!0});case"CLOSE_CHANGE_REQUEST":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,errMess:null,isOpen:!1});default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,priorities:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRIORITIES":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,errmess:null,priorities:t.payload});case"LOADING_PRIORITIES":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!0,errmess:null,priorities:[]});case"FAILED_PRIORITIES":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,errmess:t.payload,priorities:[]});default:return e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,status:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_STATUS":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,errmess:null,status:t.payload});case"STATUS_FAILED":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,errmess:t.payload,status:[]});case"STATUS_LOADING":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!0,errmess:null,status:[]});default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USERS":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,errmess:null,users:t.payload});case"USERS_FAILED":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,errmess:t.payload,users:[]});case"USERS_LOADING":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!0,errmess:null,users:[]});default:return e}},M=Object(L.c)(Object(L.b)({requests:F,exactRequest:G,priorities:Q,status:K,users:V}),Object(L.a)(B.a,T.a));var J=function(){return Object(p.jsx)(I.a,{store:M,children:Object(p.jsx)(U,{})})},W=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,46)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(p.jsxs)(r.a.StrictMode,{children:[Object(p.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(p.jsx)(J,{})]}),document.getElementById("root")),W()}},[[45,1,2]]]);
//# sourceMappingURL=main.e105562f.chunk.js.map