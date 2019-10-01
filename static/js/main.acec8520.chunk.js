(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){t.exports=n(32)},23:function(t,e,n){},25:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(11),r=n.n(c),i=(n(23),n(1)),s=n(2),l=n(5),u=n(3),d=n(6),m=(n(25),n(4)),b=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).onClickChoice=function(t){n.setState({choice:t})},n.onChangeHandler=function(t){n.setState({text:t.target.value})},n.onSubmit=function(){"todo"===n.state.choice?n.props.addTodos(n.state.text):n.props.addNotes(n.state.text),n.setState({text:""})},n.state={text:"",choice:"todo"},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e="",n="";return"todo"===this.state.choice?e="btn-success":n="btn-success",o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"btn m-2 ".concat(e),onClick:function(){return t.onClickChoice("todo")}},"Switch to Add Todo"),o.a.createElement("button",{className:"btn m-2 ".concat(n),onClick:function(){return t.onClickChoice("notes")}},"Switch to Add Note"),o.a.createElement("p",{className:"text-capitalize"},"Add ",this.state.choice),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{value:this.state.text,onChange:this.onChangeHandler,type:"text",className:"form-control",placeholder:"Type todo here"})),o.a.createElement("button",{onClick:this.onSubmit,className:"btn btn-primary"},"Add"))}}]),e}(a.Component),h=Object(m.b)(null,function(t){return{addTodos:function(e){return t(function(t){return{type:"ADD_TODO",payload:t}}(e))},addNotes:function(e){return t(function(t){return{type:"ADD_NOTE",payload:t}}(e))}}})(b),p=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).editButtonHandler=function(){n.setState({viewMode:"edit"})},n.saveButtonHandler=function(){n.props.editTodo(n.props.index,n.state.text),n.setState({viewMode:"show"})},n.cancelButtonHandler=function(){n.setState({viewMode:"show"})},n.onChangeHandler=function(t){n.setState({text:t.target.value})},n.deleteButtonHandler=function(){n.props.deleteTodo(n.props.index)},n.state={viewMode:"show",text:t.todo},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=o.a.createElement("p",null,this.props.todo),e=o.a.createElement("button",{className:"btn btn-primary",onClick:this.editButtonHandler},"Edit");return"edit"===this.state.viewMode&&(t=o.a.createElement("input",{className:"form-control",type:"text",value:this.state.text,onChange:this.onChangeHandler}),e=o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"btn btn-success",onClick:this.saveButtonHandler},"Save"),o.a.createElement("button",{className:"btn btn-warning",onClick:this.cancelButtonHandler},"Cancel"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-8"},t),o.a.createElement("div",{className:"col-4"},e,o.a.createElement("button",{className:"btn btn-danger",onClick:this.deleteButtonHandler},"Delete")))}}]),e}(a.Component),O=Object(m.b)(null,function(t){return{editTodo:function(e,n){return t({type:"EDIT_TODO",payload:{index:e,todo:n}})},deleteTodo:function(e){return t(function(t){return{type:"DELETE_TODO",payload:t}}(e))}}})(p),f=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"deleteHander",value:function(t){this.props.deleteTodo(t)}},{key:"render",value:function(){var t=this;return o.a.createElement("ul",{className:"list-group"},this.props.todos.map(function(e,n){return o.a.createElement("li",{key:n,className:"list-group-item"},o.a.createElement(O,{todo:e,index:n,onDelete:function(){return t.deleteHander(n)}}))}))}}]),e}(a.Component),E=Object(m.b)(function(t){return{todos:t.todoReducer.todos}},null)(f),v=n(12),j=n(10),y=n(9),w={todos:[]},N={notes:[]},g=Object(y.b)({todoReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":return Object(j.a)({},t,{todos:[].concat(Object(v.a)(t.todos),[e.payload])});case"DELETE_TODO":var n=t.todos.filter(function(t,n){return n!==e.payload});return Object(j.a)({},t,{todos:n});case"EDIT_TODO":var a=Object(v.a)(t.todos),o=e.payload.index,c=e.payload.todo;return a[o]=c,Object(j.a)({},t,{todos:a});default:return t}},noteReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_NOTE":return Object(j.a)({},t,{notes:[].concat(Object(v.a)(t.notes),[e.payload])});default:return t}}}),C=Object(y.c)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),T=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Notes"),o.a.createElement("ul",{className:"list-group"},this.props.notes.map(function(t,e){return o.a.createElement("li",{key:e,className:"list-group-item container"},t)})))}}]),e}(a.Component),D=Object(m.b)(function(t){return{notes:t.noteReducer.notes}},null)(T),k=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).handleSubmit=function(e){t.setState(function(t){return{todos:t.todos.concat(e)}})},t.state={todos:[]},t}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement(m.a,{store:C},o.a.createElement("div",{className:"App container"},o.a.createElement(h,{submit:this.handleSubmit}),o.a.createElement(E,{todos:this.state.todos}),o.a.createElement(D,null)))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.acec8520.chunk.js.map