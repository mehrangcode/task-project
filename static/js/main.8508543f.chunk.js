(this.webpackJsonptasks=this.webpackJsonptasks||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/arrow.20c3a03c.svg"},33:function(e,t,a){e.exports=a.p+"static/media/logout.0e8fbe8e.svg"},36:function(e,t,a){e.exports=a(68)},41:function(e,t,a){},42:function(e,t,a){},66:function(e,t,a){e.exports=a.p+"static/media/icon.5c8eb353.svg"},67:function(e,t,a){e.exports=a.p+"static/media/loading.fa9054e6.svg"},68:function(e,t,a){"use strict";a.r(t),a.d(t,"logOut",(function(){return je}));var n=a(0),r=a.n(n),s=a(11),i=a.n(s),o=(a(41),a(42),a(2)),c=a(1),l=a.n(c),u=a(4),p={FetchTaskList:"Tasks/FetchTaskList",FetchTaskListSuccess:"Tasks/FetchTaskListSuccess",FetchTaskListFaild:"Tasks/FetchTaskListFaild",CreateModalStatus:"Tasks/CreateModal",CreateTask:"Tasks/CreateTask",CreateTaskSuccess:"Tasks/CreateTaskSuccess",CreateTaskFaild:"Tasks/CreateTaskFaild",ChangeTaskStatus:"Tasks/ChangeTaskStatus",ChangeTaskStatusSuccess:"Tasks/ChangeTaskStatusSuccess",ChangeTaskStatusFaild:"Tasks/ChangeTaskStatusFaild"},m="https://jsonbox.io/box_42a66ad708e6c078c755",d=a(30),f=a.n(d).a.create({headers:{"Content-Type":"application/json"}});f.interceptors.request.use((function(e){return e}),(function(e){return e})),f.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&(console.log("STATUS CODE 401"),je()),e}));var h=f,v={fetchList:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get(m+"/tasks"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post(m+"/tasks",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),changeTaskStatus:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.put(m+"/tasks/"+t._id,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(){var e=document.getElementById("modal-root");e&&i.a.unmountComponentAtNode(e)},k=function(e){var t=e;console.log(t),e.message&&(t=e.message),e.response&&(t=e.response.data.message),i.a.render(r.a.createElement("div",{className:"emodalcontainer"},r.a.createElement("div",{className:"EModal"},r.a.createElement("p",null,"\u062e\u0637\u0627 :",t),r.a.createElement("button",{className:"btnGold",onClick:b},"\u062a\u0627\u06cc\u06cc\u062f"))),document.getElementById("modal-root"))},g=function(e){return function(t,a){t({type:p.CreateModalStatus,open:e})}},E=function(){return function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:p.FetchTaskList}),e.prev=1,e.next=4,v.fetchList();case 4:(n=e.sent).data?t({type:p.FetchTaskListSuccess,list:n.data}):(k(n),t({type:p.FetchTaskListFaild})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:p.FetchTaskListFaild}),k(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()},S=a(12),O=function(e){var t=e.loading,a=e.msg,n=e.icon,s=e.text;return n?t?r.a.createElement("div",{class:"spIcon"},r.a.createElement("div",{class:"bounce1"}),r.a.createElement("div",{class:"bounce2"}),r.a.createElement("div",{class:"bounce3"})):r.a.createElement("span",null," ",s," "):t?r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"loader"}," ",a," "),r.a.createElement("p",null,a)):null};O.defaultProps={msg:"\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a"};var y=O,C=function(e){var t=e.visible,a=e.title,s=e.onOk,i=e.onCancel,o=e.children,c=e.loading,l=Object(n.useState)(!1),u=Object(S.a)(l,2),p=u[0],m=u[1],d=Object(n.useState)(!1),f=Object(S.a)(d,2),h=f[0],v=f[1];return Object(n.useEffect)((function(){t&&(v(!0),setTimeout((function(){m(!0)}),100)),t||(m(!1),setTimeout((function(){v(!1)}),250))}),[t]),h?r.a.createElement("div",{className:"modalContainer"},r.a.createElement("div",{className:"modalBackBox",onClick:i}),r.a.createElement("div",{className:p?"modal modalOpen":"modal"},r.a.createElement("div",{className:"modalHeader"},r.a.createElement("div",{className:"Modaltitle"}," ",a," "),r.a.createElement("div",{className:"closeIcon",onClick:i},"X")),r.a.createElement("div",{className:"modalBody"},o),r.a.createElement("div",{className:"ModalFooter"},r.a.createElement("button",{className:"btnGold",onClick:s},r.a.createElement(y,{icon:!0,text:"\u062b\u0628\u062a",loading:c})),r.a.createElement("button",{className:"btnCancel",onClick:i},"\u0628\u0633\u062a\u0646")))):null};C.defaultProps={loading:!1};var T=C,j=a(3),N=a(8),w=a(16),F=a(9),L=a(10),x=function(e){return function(t){Object(L.a)(r,t);var a=Object(F.a)(r);function r(e){var t;return Object(N.a)(this,r),(t=a.call(this,e)).itemValidation=function(e,a,n){if(!n)return!0;var r=!0,s="",i=t.state.err;return n.forEach((function(t){t.required&&r&&((r=""!==a.toString().trim())||(s=t.msg),i[e]={msg:s,isValid:r}),t.max&&r&&((r=a.length<=t.max)||(s=t.msg),i[e]={msg:s,isValid:r})})),t.setState({err:i}),r},t.onFormSubmit=function(){var e=t.state,a=e.data,n=e.rules,r=!0;for(var s in n){var i=t.itemValidation(s,a[s],n[s]);r&&(r=i)}return{data:a,err:r?null:t.state.err}},t.getFormValues=function(){return t.state},t.resetForm=function(){t.setState({data:{},err:{},rules:{}})},t.initialValues=function(e,a){var n=t.state,r=n.rules,s=n.data;a&&(r[e]=a),s[e]="",t.setState({rules:r,data:s})},t.formItem=function(e,a){var r=void 0!==t.state.data[e.name]?t.state.data[e.name]:e.initialvalue?e.initialvalue:"",s={name:e.name,initialvalue:e.initialvalue,defaultValue:e.initialvalue,label:e.label,onChange:function(n){a.props.onChange&&a.props.onChange(n),t.onChangeHandler(e.name,n,e.rules)},value:r},i=n.cloneElement(a,s,a.props.children);return n.createElement(I,{label:e.label,id:a.props.id?a.props.id:e.name,name:e.name,itemElement:i,initialValues:t.initialValues,rules:e.rules,err:t.state.err&&t.state.err[e.name]?t.state.err[e.name].msg:null})},t.state={data:{},err:{},rules:{}},t}return Object(w.a)(r,[{key:"onChangeHandler",value:function(e,t,a){var n=this.state.data?Object(j.a)({},this.state.data):{},r=t;t.target&&(r=t.target.value),n[e]=r,this.setState({data:n}),a&&this.itemValidation(e,r,a)}},{key:"render",value:function(){return n.createElement(e,Object.assign({},this.props,{getFormItem:this.formItem,getFormValues:this.getFormValues,onFormSubmit:this.onFormSubmit,resetForm:this.resetForm}))}}]),r}(n.Component)},I=function(e){return n.useEffect((function(){e.initialValues(e.name,e.rules)}),[]),n.createElement("div",{className:"itemWrapper"},e.itemElement,e.err&&n.createElement("small",{className:"validationError"}," ",e.err," "))},P=a(7),V=function(e){Object(L.a)(a,e);var t=Object(F.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return a}(r.a.Component),M=function(e){Object(L.a)(a,e);var t=Object(F.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={},n}return a}(n.Component),A=a(31),D=a.n(A),H=function(e){Object(L.a)(a,e);var t=Object(F.a)(a);function a(e){var r;return Object(N.a)(this,a),(r=t.call(this,e)).getOptions=function(e){var t=r.props.token?r.props.token:"";r.props.authorization&&(t=r.props.authorization),fetch(m+e,{headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded",Authorization:t}}).then((function(e){return e.json()})).then((function(e){return r.setState({optionList:e.data?e.data:[]},(function(){r.setInitialValue(),r.moveFocus(),r.getChildren()}))}))},r.hideOption=function(){var e=r.props.displayProp?r.props.displayProp:"title",t=r.props.valueProp?r.props.valueProp:"id",a=r.state,n=a.displayValue;a.showInput;if(""!==r.state.value&&r.state.optionList){var s=r.state.optionList&&r.state.optionList.filter((function(e){return e[t].toString()===r.state.value.toString()}))[0];n=s?s[e]:""}r.setState({showOption:!1,showInput:!1,displayValue:n})},r.handleClickOutside=function(e){r.optionRef.current&&!r.optionRef.current.contains(e.target)&&r.hideOption()},r.optionHandler=function(e){r.setState({showOption:e,showInput:!0,searchValue:""},(function(){r.ref.current&&r.ref.current.focus()}))},r.onChangeHandler=function(e){e.preventDefault(),r.setState({searchValue:e.target.value,displayValue:"",activeItem:0})},r._handleKeyDown=function(e){if("Enter"===e.key&&r.state.optionList){var t=r.props.displayProp?r.props.displayProp:"title",a=r.props.valueProp?r.props.valueProp:"id",n=r.state.searchValue.toLocaleLowerCase().trim(),s=r.state.optionList.filter((function(e){return e[t].toLocaleLowerCase().trim().match(n)}));if(s[r.state.activeItem]){var i=s[r.state.activeItem][a],o=s.filter((function(e){return e[a].toString()===i.toString()}))[0];r.onSelectHandler(o)}}},r.onSelectHandler=function(e){var t=r.props.displayProp?r.props.displayProp:"title",a=r.props.valueProp?r.props.valueProp:"id";r.setState({value:e.props?e.props[a].toString():e[a],displayValue:e.props?e.props[t]:e[t],showOption:!1,showInput:!1,activeItem:0},(function(){r.props.onChange&&r.props.onChange(r.state.value)}))},r.moveFocus=function(){var e=r.props.displayProp?r.props.displayProp:"title",t=r.ref.current;t&&t.addEventListener("keydown",(function(t){var a=r.state.searchValue.toLocaleLowerCase().trim(),n=r.state.optionList?r.state.optionList.filter((function(t){return t[e].toLocaleLowerCase().trim().match(a)})):[],s=r.state.activeItem;40===t.keyCode&&s<n.length-1&&s++,38===t.keyCode&&s>0&&s--,r.setState({activeItem:s})}))},r.getChildren=function(){var e=r.props.displayProp?r.props.displayProp:"title",t=r.props.valueProp?r.props.valueProp:"id",a=[];r.props.url||r.props.optionList?(a=[],r.state.optionList.forEach((function(s,i){var o;a.push((o={},Object(P.a)(o,t,s[t]),Object(P.a)(o,e,s[e]),Object(P.a)(o,"optionElement",(function(a){return n.createElement("div",{key:i,id:s[t],className:"selectOption",onClick:function(){r.onSelectHandler(s)}},s[e])})),o))})),r.setState({optionList:a})):(n.Children.forEach(r.props.children,(function(s,i){var o=s;if(o.type===V){var c;a.push((c={},Object(P.a)(c,t,o.props[t]),Object(P.a)(c,e,o.props[e]),Object(P.a)(c,"optionElement",(function(a){return n.createElement("div",{key:o.props[t],id:o.props[t],className:a===o.props[t]?"selectOption activeOption":"selectOption",onClick:function(){r.onSelectHandler(o)}},o.props[e])})),c))}if(o.type===M){var l;a.push((l={},Object(P.a)(l,t,o.props[t]),Object(P.a)(l,e,o.props[e]),Object(P.a)(l,"optionElement",(function(e){return n.createElement("div",{key:o.props[t],id:o.props[t],className:e===o.props[t]?"selectOption activeOption":"selectOption",onClick:function(){return r.onSelectHandler(o)}},"function"===typeof o.props.children?o.props.children(o.props):o.props.children)})),l))}})),r.setState({optionList:a}))},r.renderOptionList=function(e){var t=r.props.displayProp?r.props.displayProp:"title",a=r.props.valueProp?r.props.valueProp:"id";if(""!==r.state.searchValue&&e.length>0){var n=r.state.searchValue.toLocaleLowerCase().trim();e=e.filter((function(e){return e[t].toLocaleLowerCase().trim().match(n)}))}return e?e.map((function(t){return t.optionElement?t.optionElement(e[r.state.activeItem][a]):null})):null},r.state={displayValue:"",searchValue:"",value:"",showOption:!1,showInput:!0,activeItem:0,optionList:[],optionElement:[]},r.ref=n.createRef(),r.optionRef=n.createRef(),r.optionContainer=n.createRef(),r}return Object(w.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this;this.props.url&&this.props.url!==e.url&&(this.setState({displayValue:"",value:"",searchValue:"",activeItem:0},(function(){t.props.onChange("")})),this.getOptions(this.props.url))}},{key:"setInitialValue",value:function(){var e=this,t=this.props.displayProp?this.props.displayProp:"title",a=this.props.valueProp?this.props.valueProp:"id";if(void 0!==this.props.initialvalue){var n=this.state.optionList.length>0&&this.state.optionList.filter((function(t){return e.props.initialvalue&&t[a].toString()===e.props.initialvalue.toString()}));if(n&&n.length>0){var r=n[0][t];this.setState({value:this.props.initialvalue.toString(),displayValue:r},(function(){e.props.onChange&&e.props.onChange(e.state.value)}))}}}},{key:"componentDidMount",value:function(){var e=this;this.props.url?this.getOptions(this.props.url):this.props.optionList?this.setState({optionList:this.props.optionList},(function(){e.setInitialValue(),e.getChildren(),e.moveFocus()})):(this.getChildren(),this.moveFocus()),document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var e=this;return n.createElement("div",{className:"selecContainer",ref:this.optionRef},n.createElement("div",{className:"displayContainer",onClick:function(){return e.optionHandler(!0)}},n.createElement("div",{className:"inputContainer"},this.props.canSearch&&n.createElement("input",{id:this.props.id,tabIndex:1,className:"selectInput",ref:this.ref,onKeyDown:this._handleKeyDown,onBlur:this.hideOption,style:{display:this.state.showInput?"block":"none",width:0===this.state.searchValue.length?"19px":9*this.state.searchValue.length+"px"},type:"text",onChange:function(t){return e.onChangeHandler(t)},value:this.state.searchValue})),n.createElement("div",{className:"selectDisplay"},this.state.displayValue),n.createElement("div",{className:"selectBtn"},n.createElement("img",{className:"icon",src:D.a,alt:" "}))),n.createElement("div",{ref:this.optionContainer,tabIndex:-1,style:"bottom"===this.props.position?{bottom:"100%"}:{top:"100%"},className:this.state.showOption?"optionContainer":"optionContainer optionHide"},this.renderOptionList(this.state.optionList)))}}]),a}(n.Component);H.Option=V,H.COption=M,H.defaultProps={valueProp:"id",displayProp:"title"};var B=H,R=x((function(e){var t=e.getFormItem,a=e.onFormSubmit,s=e.resetForm,i=Object(o.c)((function(e){return e.tasks})),c=Object(o.b)(),m=function(){var e,t=a();t.err||c((e=t.data,function(){var t=Object(u.a)(l.a.mark((function t(a,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:p.CreateTask}),t.prev=1,t.next=4,v.create(e);case 4:(r=t.sent).data?(a({type:p.CreateTaskSuccess}),g(!1)(a,n),E()(a,n)):(k(r),a({type:p.CreateTaskFaild})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:p.CreateTaskFaild}),k(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,a){return t.apply(this,arguments)}}()))};return Object(n.useEffect)((function(){i.createModalStatus||s()}),[i.createModalStatus]),r.a.createElement(T,{visible:i.createModalStatus,onCancel:function(){return c(g(!1))},loading:"createTask"===i.loading,onOk:m,title:"\u062b\u0628\u062a \u062a\u0633\u06a9 \u062c\u062f\u06cc\u062f"},r.a.createElement("form",{onSubmit:m},r.a.createElement("label",{htmlFor:"description"}," \u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),t({name:"description",rules:[{required:!0,msg:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u062a\u0633\u06a9 \u0645\u06cc\u0628\u0627\u06cc\u0633\u062a \u062a\u0639\u06cc\u06cc\u0646 \u0634\u0648\u062f"}]},r.a.createElement("textarea",{id:"description",className:"txtInput"})),r.a.createElement("label",{htmlFor:"status"},"\u0648\u0636\u0639\u06cc\u062a"),t({initialvalue:"\u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647",name:"status"},r.a.createElement(B,{optionList:[{id:"\u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647",title:"\u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"},{id:"\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645",title:"\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645"},{id:"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f",title:"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f"}]}))))})),_=a(35),q="SubTasks/SubTaskCreateModalStatus",J="SubTasks/AddSubTask",G="SubTasks/AddSubTaskSuccess",K="SubTasks/AddSubTaskFaild",W="SubTask/ChangeSubTaskStatus",z="SubTask/ChangeSubTaskStatusSuccess",U="SubTask/ChangeSubTaskStatusFaild",X={addSubTask:function(){var e=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.put(m+"/tasks/"+t,a));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),changeSubTaskStatus:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.put(m+"/tasks/"+t._id,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=function(e,t){return function(a,n){a({type:q,open:e,mainTask:t})}},$=x((function(e){var t=e.getFormItem,a=e.onFormSubmit,s=e.resetForm,i=Object(o.c)((function(e){return e.subtask})),c=Object(o.b)(),p=function(){var e,t=a();t.err||c((e=t.data,function(){var t=Object(u.a)(l.a.mark((function t(a,n){var r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:J}),(r=n().subtask.mainTask)||(a({type:K}),k("\u062a\u0633\u06a9 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0645\u0648\u062c\u0648\u062f \u0646\u06cc\u0633\u062a")),r&&(s=r.subtasks?[].concat(Object(_.a)(r.subtasks),[e]):[e],r.subtasks=s),t.prev=4,t.next=7,X.addSubTask(r._id,r);case 7:t.sent.data&&(a({type:G}),Y(!1,null)(a,n),E()(a,n)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),a({type:K}),k(t.t0);case 15:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e,a){return t.apply(this,arguments)}}()))};return Object(n.useEffect)((function(){i.addSubTaskModal||s()}),[i.addSubTaskModal]),r.a.createElement(T,{visible:i.addSubTaskModal,onCancel:function(){return c(Y(!1,null))},loading:"createSubTask"===i.loading,onOk:p,title:"\u062b\u0628\u062a \u0631\u06cc\u0632\u0634\u0627\u062e\u0647 \u062c\u062f\u06cc\u062f"},r.a.createElement("form",{onSubmit:p},r.a.createElement("label",{htmlFor:"description"}," \u0634\u0631\u062d \u062d\u0627\u0644"),t({name:"description",rules:[{required:!0,msg:"\u0634\u0631\u062d \u062d\u0627\u0644 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a"}]},r.a.createElement("textarea",{id:"description",className:"txtInput"})),r.a.createElement("label",{htmlFor:"status"},"\u0648\u0636\u0639\u06cc\u062a"),t({initialvalue:"\u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647",name:"status"},r.a.createElement(B,{optionList:[{id:"\u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647",title:"\u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"},{id:"\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645",title:"\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645"},{id:"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f",title:"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f"}]}))))})),Q=function(e){var t=e.role,a=e.children,n=Object(o.c)((function(e){return e.auth}));return n.data&&n.data.role&&n.data.role===t?r.a.createElement(r.a.Fragment,null,a):null},Z=(a(66),a(67),function(){return r.a.createElement("div",{className:"iconContainer"},r.a.createElement("div",{className:"menIcon"}),r.a.createElement("div",{className:"menIcon"}),r.a.createElement("div",{className:"menIcon"}))}),ee=function(e){var t=e.currentStatus,a=e.accessRole,n=e.statusChange,s=e.loading;return r.a.createElement("span",{className:"status"},r.a.createElement(Q,{role:a},s?r.a.createElement(y,{icon:!0,loading:s}):r.a.createElement(Z,null),r.a.createElement("div",{className:"stausHandler"},r.a.createElement("p",{onClick:function(){n("\u0628\u0631\u0627\u06cc \u0627\u0646\u062c\u0627\u0645")},style:{backgroundColor:"royalblue"}},"\u0628\u0631\u0627\u06cc \u0627\u0646\u062c\u0627\u0645"),r.a.createElement("p",{onClick:function(){n("\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645")},style:{backgroundColor:"lightcoral"}},"\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645"),r.a.createElement("p",{onClick:function(){n("\u0627\u0646\u062c\u0627\u0645 \u0634\u062f")},style:{backgroundColor:"lightseagreen"}},"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f"))),t)},te=function(e){var t=e.subtask,a=e.changeStatus,n=e.loading;return r.a.createElement("div",{className:"subtask"},r.a.createElement("div",{className:"subTaskactionBar"},r.a.createElement(ee,{loading:n,statusChange:function(e){return a(e)},currentStatus:t.status,accessRole:"employee"})),r.a.createElement("div",{className:"subTaskContent"},t.description))},ae=function(e){var t=e.task,a=Object(n.useState)(),s=Object(S.a)(a,2),i=s[0],c=s[1],m=Object(o.c)((function(e){return e.subtask.loading})),d=Object(o.c)((function(e){return e.tasks})),f=Object(o.b)(),h=function(e){var a,n=JSON.parse(JSON.stringify(t));n.status=e,f((a=n,function(){var e=Object(u.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:p.ChangeTaskStatus,data:a}),e.prev=1,e.next=4,v.changeTaskStatus(a);case 4:(r=e.sent).data?(t({type:p.ChangeTaskStatusSuccess}),E()(t,n)):(k(r),t({type:p.ChangeTaskStatusFaild})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:p.ChangeTaskStatusFaild}),k(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()))},b=function(e,a){var n,r=JSON.parse(JSON.stringify(t));r.subtasks[a].status=e,c(a),f((n=r,function(){var e=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:W}),e.prev=1,e.next=4,X.changeSubTaskStatus(n);case 4:e.sent.data&&(t({type:z}),E()(t,a)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:U}),k(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()))};return r.a.createElement("div",{className:"taskCard"},r.a.createElement("div",{className:"actionBar"},r.a.createElement(Q,{role:"employee"},"  ",r.a.createElement("button",{onClick:function(){return f(Y(!0,t))},className:"addSubTaskBtn"}," + ")," "),r.a.createElement(ee,{loading:d.targetTask===t._id&&"changeTaskStatus"===d.loading,statusChange:function(e){return h(e)},currentStatus:t.status,accessRole:"admin"})),r.a.createElement("div",{className:"taskDescription"},t.description),r.a.createElement("div",{className:"subtaskList"},t.subtasks?t.subtasks.map((function(e,t){return r.a.createElement(te,{subtask:e,loading:t===i&&"changeSubTaskStatus"===m,changeStatus:function(e){b(e,t)}})})):r.a.createElement("div",{className:"nosubTask"},r.a.createElement("p",null,"  \u0632\u06cc\u0631 \u0634\u0627\u062e\u0647\u200c\u0627\u06cc \u0628\u0631\u0627\u06cc \u062a\u0633\u06a9 \u062b\u0628\u062a \u0646\u0634\u062f\u0647 \u0627\u0633\u062a"))))},ne=a(32),re=function(e){var t=Object(o.c)((function(e){return e.tasks})),a=Object(o.b)();return Object(n.useEffect)((function(){a(E())}),[]),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement($,null),r.a.createElement(ne.a,{hideScrollbars:!1,className:"scroll-container"},r.a.createElement("div",{className:"taskList"},r.a.createElement(y,{loading:"fetchTask"===t.loading}),t.list&&t.list.length>0?t.list.map((function(e){return r.a.createElement(ae,{key:"KEY"+e._id,task:e})})):""===t.loading?r.a.createElement("div",{className:"noTask"},"\u0647\u0646\u0648\u0632 \u062a\u0633\u06a9 \u062a\u0639\u0631\u06cc\u0641 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a",r.a.createElement(Q,{role:"admin"},r.a.createElement("p",null," ",r.a.createElement("button",{className:"btnGold",onClick:function(){return a(g(!0))}}," \u062b\u0628\u062a \u062a\u0633\u06a9 \u062c\u062f\u06cc\u062f ")," "))):null))):null},se=function(){var e=Object(o.b)();return r.a.createElement("div",{className:"Panel"},r.a.createElement(re,null),r.a.createElement(Q,{role:"admin"},r.a.createElement("div",{className:"fab",onClick:function(){return e(g(!0))}},"+ ")))},ie=a(33),oe=a.n(ie),ce="Auth/Login",le="Auth/LoginSuccess",ue="Auth/LoginFail",pe="Auth/LogOut",me={login:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get(m+"/users?q=userName:"+t.userName));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),register:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post(m+"/users/register",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},de=function(e){return function(){var t=Object(u.a)(l.a.mark((function t(a,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:ce}),t.prev=1,t.next=4,me.login(e);case 4:(r=t.sent).data?r.data.length>0?(window.localStorage.setItem("task-userData",JSON.stringify(r.data[0])),a({type:le,data:r.data[0]})):(k(" \u06a9\u0627\u0631\u0628\u0631 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"),a({type:ue})):(k(r),a({type:ue})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:ue}),k(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,a){return t.apply(this,arguments)}}()},fe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth}));return r.a.createElement("div",{className:"navbar"},r.a.createElement("h1",null,"\u06a9\u0627\u0631\u062a\u0627\u0628\u0644"),t.isAuth&&r.a.createElement("img",{onClick:function(){return e((function(e,t){window.localStorage.removeItem("task-userData"),e({type:pe})}))},className:"logout",src:oe.a,alt:"\u062e\u0631\u0648\u062c"}))},he=x((function(e){var t=e.getFormItem,a=e.onFormSubmit,n=e.switchPanel,s=Object(o.b)();return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t,n=a();n.err||s((t=n.data,function(){var e=Object(u.a)(l.a.mark((function e(a,n){var r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:ce}),e.prev=1,e.next=4,me.register(t);case 4:(r=e.sent).data?(s={userName:t.userName},de(s)(a,n),a({type:le})):(k(r),a({type:ue})),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Errror",e.t0),a({type:ue}),k(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()))},className:"register"},r.a.createElement("h3",null," \u062b\u0628\u062a \u0646\u0627\u0645"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"userName"},"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc"),t({name:"userName",rules:[{required:!0,msg:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0631\u0627 \u062a\u0639\u06cc\u06cc\u0646 \u0646\u0645\u0627\u06cc\u06cc\u062f"}]},r.a.createElement("input",{className:"txtInput",id:"userName",type:"text"})),r.a.createElement("label",{htmlFor:"role"},"\u0646\u0642\u0634 "),t({name:"role",initialvalue:"employee",rules:[{required:!0,msg:"\u0646\u0642\u0634 \u0631\u0627 \u062a\u0639\u06cc\u06cc\u0646 \u0646\u0645\u0627\u06cc\u06cc\u062f"}]},r.a.createElement(B,{optionList:[{id:"admin",title:"\u0645\u062f\u06cc\u0631"},{id:"employee",title:"\u06a9\u0627\u0631\u0645\u0646\u062f"}]}))),r.a.createElement("div",{className:"authFooter"},r.a.createElement("button",{type:"submit",className:"btnGold"}," \u062b\u0628\u062a \u0646\u0627\u0645 "),r.a.createElement("button",{onClick:n,type:"button",className:"btnLink"},"\u067e\u0646\u0644 \u0648\u0631\u0648\u062f")))})),ve=x((function(e){var t=e.getFormItem,a=e.onFormSubmit,n=e.switchPanel,s=Object(o.b)();return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=a();t.err||s(de(t.data))},className:"login"},r.a.createElement("h3",null," \u0648\u0631\u0648\u062f"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"userName"},"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc"),t({name:"userName",rules:[{required:!0,msg:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"}]},r.a.createElement("input",{className:"txtInput",id:"userName",type:"text"}))),r.a.createElement("div",{className:"authFooter"},r.a.createElement("button",{type:"submit",className:"btnGold"}," \u0648\u0631\u0648\u062f "),r.a.createElement("button",{onClick:n,type:"button",className:"btnLink"},"\u067e\u0646\u0644 \u062b\u0628\u062a \u0646\u0627\u0645 ")))})),be=function(){var e=Object(n.useState)("login"),t=Object(S.a)(e,2),a=t[0],s=t[1],i=Object(o.c)((function(e){return e.auth}));return r.a.createElement("div",{className:"auth"},r.a.createElement(y,{loading:i.loading}),"register"===a?r.a.createElement(he,{switchPanel:function(){return s("login")}}):null,"login"===a?r.a.createElement(ve,{switchPanel:function(){return s("register")}}):null)};var ke=function(){var e=Object(o.c)((function(e){return e.auth}));return r.a.createElement("div",{className:"App"},r.a.createElement(fe,null),e.isAuth?r.a.createElement(se,null):r.a.createElement(be,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=a(13),Ee=a(34),Se={isAuth:!1,loading:!1,data:null},Oe={list:[],loading:"",createModalStatus:!1,targetTask:null},ye={mainTask:null,loading:"",addSubTaskModal:!1},Ce={auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(j.a)({},e,{loading:!0});case le:return Object(j.a)({},e,{isAuth:!0,loading:!1,data:t.data});case ue:return Object(j.a)({},e,{loading:!1});case pe:return Object(j.a)({},e,{isAuth:!1});default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.FetchTaskList:return Object(j.a)({},e,{loading:"fetchTask"});case p.FetchTaskListSuccess:return Object(j.a)({},e,{loading:"",list:t.list});case p.FetchTaskListFail:return Object(j.a)({},e,{loading:""});case p.CreateModalStatus:return Object(j.a)({},e,{createModalStatus:t.open});case p.CreateTask:return Object(j.a)({},e,{loading:"createTask"});case p.CreateTaskSuccess:case p.CreateTaskFaild:return Object(j.a)({},e,{loading:""});case p.ChangeTaskStatus:return Object(j.a)({},e,{loading:"changeTaskStatus",targetTask:t.data._id});case p.ChangeTaskStatusSuccess:case p.ChangeTaskStatusFaild:return Object(j.a)({},e,{loading:"",targetTask:null});default:return e}},subtask:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(j.a)({},e,{addSubTaskModal:t.open,mainTask:t.mainTask});case J:return Object(j.a)({},e,{loading:"createSubTask"});case G:case K:return Object(j.a)({},e,{loading:""});case W:return Object(j.a)({},e,{loading:"changeSubTaskStatus"});case z:case U:return Object(j.a)({},e,{loading:""});default:return e}}};var Te=function(){var e=[Ee.a],t=Object(ge.c)(Object(j.a)({},Ce));return Object(ge.e)(t,ge.d.apply(void 0,[ge.a.apply(void 0,e)].concat([])))}(),je=function(){window.localStorage.removeItem("task-userData"),Te.getState().auth.isAuth=!1,Te.getState().auth.data=null};!function(){var e=window.localStorage.getItem("task-userData");e&&(Te.getState().auth.isAuth=!0,Te.getState().auth.data=JSON.parse(e))}(),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:Te}," ",r.a.createElement(ke,null)," ")),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.8508543f.chunk.js.map