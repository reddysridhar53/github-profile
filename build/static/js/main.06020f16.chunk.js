(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){e.exports=a(84)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},69:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),s=a.n(c),o=a(13),i=a(15),l=a(33),u=a(1),m="SEARCH_USERS",h="SEARCH_USERS_SUCCESS",d="SEARCH_USERS_FAILURE",p="GET_USER_DETAILS",f="GET_USER_DETAILS_SUCCESS",v="GET_USER_DETAILS_FAILURE",E="GET_USER_FOLLOWERS",b="GET_USER_FOLLOWERS_SUCCESS",g="GET_USER_FOLLOWERS_FAILURE",C="GET_USER_REPOS",O="GET_USER_REPOS_SUCCESS",N="GET_USER_REPOS_FAILURE",y="GET_USER_REPO_COMMITS",w="GET_USER_REPO_COMMITS_SUCCESS",j="GET_USER_REPO_COMMITS_FAILURE",S=a(17),R=a.n(S),U={users:{list:[],searchTerm:"",error:""},searchingUsers:!1},k={userDetails:{},fetchingUserDetails:!1,fetchUserDetailssError:"",fetchingUserFollowers:!1,userFollowers:[],fetchUserFollowersError:"",fetchingUserContribution:!1,userContribution:{},fetchingUserContributionError:!1,fetchingUserRepos:!1,userRepos:{},fetchingUserReposError:"",fetchingCommits:!1,commits:[],fetchingCommitsError:""},T=function(e){return e&&JSON.parse(e)?JSON.parse(e):new Error("Something is wrong with the JSON Format: ")},_=Object(i.c)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case m:var r=e.users;return Object(u.a)({},e,{users:Object(u.a)({},r,{searchTerm:n}),searchingUsers:!0});case h:var c=e.users,s=e.users.searchTerm,o=function(e){return e&&JSON.parse(e)?JSON.parse(e):new Error("Something is wrong with the JSON Format: ")}(n);return Object(u.a)({},e,{users:Object(u.a)({},c,{list:R.a.get(o,"items",[]),searchTerm:s}),searchingUsers:!1});case d:var i=e.users;return Object(u.a)({},e,{users:Object(u.a)({},i,{error:n,searchTerm:n}),searchingUsers:!1});default:return Object(u.a)({},e)}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case p:return Object(u.a)({},e,{fetchingUserDetails:!0});case f:return Object(u.a)({},e,{userDetails:T(n),fetchingUserDetails:!1});case v:return Object(u.a)({},e,{error:n,fetchingUserDetails:!1});case E:return Object(u.a)({},e,{fetchingUserFollowers:!0});case b:var r=n.map(function(e){return T(e)});return Object(u.a)({},e,{userFollowers:r,fetchingUserFollowers:!1});case g:return Object(u.a)({},e,{fetchUserFollowersError:n,fetchingUserFollowers:!1});case C:return Object(u.a)({},e,{fetchingUserRepos:!0});case O:return Object(u.a)({},e,{userRepos:T(n),fetchingUserRepos:!1});case N:return Object(u.a)({},e,{fetchingUserReposError:n,fetchingUserRepos:!1});case y:return Object(u.a)({},e,{fetchingCommits:!0});case w:return Object(u.a)({},e,{commits:T(n),fetchingCommits:!1});case j:return Object(u.a)({},e,{fetchingCommitsError:n,fetchingCommits:!1});default:return Object(u.a)({},e)}}}),F=Object(i.d)(_,Object(i.a)(l.a)),D=(a(46),a(2)),P=a(3),L=a(5),A=a(4),M=a(6),G=a(14),I=a(16),W=(a(47),function(e){function t(){return Object(D.a)(this,t),Object(L.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"home-conatiner"},r.a.createElement("h1",null,"Welcome to GitHub Profile Viewer.",r.a.createElement("br",null)," Start by tying the user name."))}}]),t}(n.Component)),J="https://api.github.com/",x=function(e){var t={};return t.url="".concat(J,"search/users?q=").concat(e),t.method="GET",V(t)},B=function(e){var t={};return t.url="".concat(J,"users/").concat(e),t.method="GET",V(t)},H=function(e){var t={};return t.url="".concat(J,"users/").concat(e,"/followers"),t.method="GET",V(t)},q=function(e){var t={};return t.url="".concat(J,"users/").concat(e,"/repos"),t.method="GET",V(t)},X=function(e){var t={};return t.url="".concat(J,"repos/").concat(e,"/commits"),t.method="GET",V(t)},z=function(e){var t=(e=e.map(function(e){return{method:"GET",url:e.url}})).map(function(e){return V(e)});return Promise.all(t)},V=function(e){return new Promise(function(t,a){var n=void 0;"XMLHttpRequest"in window&&(n=new XMLHttpRequest),n.onreadystatechange=function(){4===this.readyState&&200===this.status&&t(this.responseText)},n.open(e.method,e.url,!0),n.send()})};function $(e){return function(t){return t({type:p}),B(e).then(function(e){t({type:f,payload:e})}).catch(function(e){return t({type:v,payload:e})})}}function K(e){return function(t){return t({type:E}),H(e).then(function(e){var t=JSON.parse(e);return z(t)}).then(function(e){t({type:b,payload:e})}).catch(function(e){return t({type:g,payload:e})})}}function Q(e){return function(t){return t({type:C}),q(e).then(function(e){t({type:O,payload:e})}).catch(function(e){return t({type:N,payload:e})})}}function Y(e){e.userName;var t=e.repoName;return function(e){return e({type:y}),X(t).then(function(t){e({type:w,payload:t})}).catch(function(t){return e({type:j,payload:t})})}}a(28);var Z=function(e){var t=e.user;return r.a.createElement("div",{className:"userDetails-primary"},r.a.createElement("div",{className:"userDetails-primary-lhs"},r.a.createElement("div",{className:"userDetails-primary-img"},r.a.createElement("img",{src:t.avatar_url,alt:t.name})),r.a.createElement("div",{className:"userDetails-primary-username"},t.login)),r.a.createElement("div",{className:"userDetails-primary-rhs"},r.a.createElement("div",{className:"userDetails-primary-row"},r.a.createElement("div",{className:"userDetails-primary-col left"},"Bio:"),r.a.createElement("div",{className:"userDetails-primary-col right"},t.bio||"NA")),r.a.createElement("div",{className:"userDetails-primary-row"},r.a.createElement("div",{className:"userDetails-primary-col left"},"Company:"),r.a.createElement("div",{className:"userDetails-primary-col right"},t.company)),r.a.createElement("div",{className:"userDetails-primary-row"},r.a.createElement("div",{className:"userDetails-primary-col left"},"Location:"),r.a.createElement("div",{className:"userDetails-primary-col right"},t.location)),r.a.createElement("div",{className:"userDetails-primary-row"},r.a.createElement("div",{className:"userDetails-primary-col left"},"Repos:"),r.a.createElement("div",{className:"userDetails-primary-col right"},t.public_repos)),r.a.createElement("div",{className:"userDetails-primary-row"},r.a.createElement("div",{className:"userDetails-primary-col left"},"Gists:"),r.a.createElement("div",{className:"userDetails-primary-col right"},t.public_gists))))},ee=function(e){var t=e.activeTab,a=e.tab,n=e.onTabClick,c=a.name===t;return r.a.createElement("div",{className:"tab-item ".concat(c?"active":""),onClick:function(){n&&n(a.name)}},a.label)},te=(a(48),function(e){var t=e.user;return r.a.createElement("div",{className:"userCard"},r.a.createElement(G.b,{to:"/users/".concat(t.login),className:"userCard-link"},r.a.createElement("div",{className:"userCard-lhs"},r.a.createElement("div",{className:"userCard-img"},r.a.createElement("img",{src:t.avatar_url,alt:t.name})),r.a.createElement("div",{className:"userCard-username"},t.login)),r.a.createElement("div",{className:"userCard-rhs"},r.a.createElement("div",{className:"userCard-row"},r.a.createElement("div",{className:"userCard-col"},"Bio:"),r.a.createElement("div",{className:"userCard-col"},t.bio||"NA")),r.a.createElement("div",{className:"userCard-row"},r.a.createElement("div",{className:"userCard-col"},"Company:"),r.a.createElement("div",{className:"userCard-col"},t.company||"NA")),r.a.createElement("div",{className:"userCard-row"},r.a.createElement("div",{className:"userCard-col"},"Location:"),r.a.createElement("div",{className:"userCard-col"},t.location||"NA")),r.a.createElement("div",{className:"userCard-row"},r.a.createElement("div",{className:"userCard-col"},"Repos:"),r.a.createElement("div",{className:"userCard-col"},t.public_repos||"NA")),r.a.createElement("div",{className:"userCard-row"},r.a.createElement("div",{className:"userCard-col"},"Gists:"),r.a.createElement("div",{className:"userCard-col"},t.public_gists||"NA")))))}),ae=(a(54),function(e){function t(){return Object(D.a)(this,t),Object(L.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.onFetchFollowers;e&&e()}},{key:"render",value:function(){var e=this.props,t=e.fetchingFollowers,a=e.followers;return!t&&a&&a.length?r.a.createElement("div",{className:"userFollowers-container"},a.map(function(e){return r.a.createElement(te,{key:e.id,user:e})})):r.a.createElement("div",{className:"loader"},"Loading...")}}]),t}(r.a.Component)),ne=(a(55),a(56)),re=function(e){function t(){return Object(D.a)(this,t),Object(L.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.user;new ne(".githubCalendar",e.login,{reponsive:!0,summary_text:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"githubCalendar"},"loading...")}}]),t}(r.a.Component),ce=(a(69),function(e){var t=e.repo,a=e.onRepoClick,n=t.updated_at?new Date(t.updated_at).toDateString():null;return r.a.createElement("div",{className:"repoCard",onClick:function(){a&&a(t)}},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"header"},t.name),t.fork?r.a.createElement("div",{className:"sub-header"},"Forked from ",r.a.createElement("a",{href:t.git_url,target:"_blank"},t.full_name)):null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"description"},t.description)),r.a.createElement("div",{className:"footer"},t.language?r.a.createElement("div",{className:"language"},t.language):null,t.forks_count?r.a.createElement("div",{className:"forks"},t.forks_count):null,t.license?r.a.createElement("div",{className:"liscence"},t.license.name):null,n?r.a.createElement("div",{className:"updated"},"Updated On: ",n):null)))}),se=a(35),oe=a.n(se),ie=(a(78),function(e){var t=e.page,a=e.currentPage,n=e.onPageClick,c=a===t?"active":"";return r.a.createElement("li",{key:t,onClick:function(){n&&n(t)},className:"".concat(c)},t)}),le=function(e){function t(){var e,a;Object(D.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(L.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(c)))).renderPageNumbers=function(){for(var e=a.props,t=e.totalPages,n=e.currentPage,c=[],s=1;s<=t;s++)c.push(s);return r.a.createElement("ul",{className:"pagination-list"},c.map(function(e){return r.a.createElement(ie,{key:e,page:e,currentPage:n,onPageClick:a.props.onPageClick})}))},a}return Object(M.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pagination"},this.renderPageNumbers())}}]),t}(r.a.Component),ue=(a(79),function(e){var t=e.commit,a=e.sNo;return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,t.sha),r.a.createElement("td",null,t.commit.committer.name),r.a.createElement("td",null,t.commit.message))}),me=function(e){function t(){return Object(D.a)(this,t),Object(L.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props,t=e.commits,a=e.commitNo;return r.a.createElement("table",{className:"commits-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"No."),r.a.createElement("th",null,"Sha"),r.a.createElement("th",null,"Commiter"),r.a.createElement("th",null,"Message"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement(ue,{key:e.sha,commit:e,sNo:a+t+1})})))}}]),t}(r.a.Component),he=(a(80),function(e){function t(e){var a;return Object(D.a)(this,t),(a=Object(L.a)(this,Object(A.a)(t).call(this,e))).handleCommitsModalClose=function(){var e=a.props.onClose;e&&e()},a.handlePageClick=function(e){a.setState({currentPage:e})},a.state={currentPage:1,commitsPerPage:10},a}return Object(M.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.onFetchCommits;e&&e()}},{key:"render",value:function(){var e=this.props,t=e.fetchingCommits,a=e.commits,c=e.repoName,s=this.state,o=s.currentPage,i=s.commitsPerPage,l=[],u=0;return!t&&a&&a.length&&(l=a.slice(i*(o-1),i*o),u=Math.ceil(a.length/i)),r.a.createElement(oe.a,{isOpen:!0,onRequestClose:this.handleCommitsModalClose,shouldCloseOnOverlayClick:!0,overlayClassName:"overlay",className:"commits-modal"},r.a.createElement("div",{className:"modal-inner"},t?r.a.createElement("div",{className:"loader"},"Loading..."):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"modal-header"},r.a.createElement("div",{className:"repo-name"},c),r.a.createElement("div",{className:"close",onClick:this.handleCommitsModalClose},"close")),r.a.createElement("div",{className:"modal-content"},r.a.createElement(me,{commits:l,commitNo:i*(o-1)})),u>1?r.a.createElement("div",{className:"modal-footer"},r.a.createElement(le,{currentPage:o,totalPages:u,onPageClick:this.handlePageClick})):null)))}}]),t}(r.a.Component)),de=(a(81),function(e){function t(){var e,a;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(L.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={showCommitsModal:!1,activeRepo:""},a.fetchCommits=function(){var e=a.props.fetchRepoCommits,t=a.state.activeRepo.full_name;e&&e(t)},a.handleRepoClick=function(e){a.setState({activeRepo:e,showCommitsModal:!0})},a.handleCommitsModalClose=function(){a.setState({activeRepo:"",showCommitsModal:!1})},a}return Object(M.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.onFetchRepos;e&&e()}},{key:"render",value:function(){var e=this,t=this.props,a=t.fetchingRepos,n=t.repos,c=t.fetchingCommits,s=t.commits,o=this.state.activeRepo.full_name;return!a&&n&&n.length?r.a.createElement("div",{className:"repos-container"},n.map(function(t){return r.a.createElement(ce,{key:t.id,repo:t,onRepoClick:e.handleRepoClick})}),this.state.showCommitsModal?r.a.createElement(he,{repoName:o,fetchingCommits:c,commits:s,onFetchCommits:this.fetchCommits,onClose:this.handleCommitsModalClose}):null):r.a.createElement("div",{className:"loader"},"Loading...")}}]),t}(r.a.Component)),pe={USER:{FOLLOWERS:"followers",CONTRIBUTION:"contribution",REPOS:"repos"}},fe=function(e){function t(){var e,a;Object(D.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(L.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(c)))).fetchFollowers=function(){var e=a.props,t=e.match.params.userName,n=e.onFetchUserFollowers;n&&n(t)},a.fetchRepos=function(){var e=a.props,t=e.match.params.userName,n=e.onFetchUserRepos;n&&n(t)},a.fetchRepoCommits=function(e){var t=a.props,n=t.match.params.userName,r=t.onFetchRepoCommits;r&&r({userName:n,repoName:e})},a.handleTabChange=function(e){var t=a.props.onTabChange;t&&t(e)},a.renderActiveTabContent=function(){var e=a.props,t=e.activeTab,n=e.userDetails,c=e.userFollowers,s=e.userRepos,o=e.fetchingUserRepos,i=e.fetchingUserFollowers,l=e.fetchingCommits,u=e.commits;switch(t){case pe.USER.FOLLOWERS:return r.a.createElement(ae,{onFetchFollowers:a.fetchFollowers,followers:c,fetchingFollowers:i});case pe.USER.CONTRIBUTION:return r.a.createElement(re,{user:n});case pe.USER.REPOS:return r.a.createElement(de,{onFetchRepos:a.fetchRepos,repos:s,fetchRepoCommits:a.fetchRepoCommits,fetchingRepos:o,fetchingCommits:l,commits:u});default:return null}},a}return Object(M.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.activeTab,n=t.tabs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"tabs-container"},n.map(function(t){return r.a.createElement(ee,{key:t.name,tab:t,activeTab:a,onTabClick:e.handleTabChange})})),r.a.createElement("div",{className:"tabs-content-container"},this.renderActiveTabContent()))}}]),t}(n.Component),ve=Object(o.b)(function(e){var t=e.user;return Object(u.a)({},t)},function(e){return{onFetchUserFollowers:function(t){return e(K(t))},onFetchUserRepos:function(t){return e(Q(t))},onFetchRepoCommits:function(t){return e(Y(t))}}})(Object(I.e)(fe)),Ee=(a(82),function(e){function t(e){var a;return Object(D.a)(this,t),(a=Object(L.a)(this,Object(A.a)(t).call(this,e))).handleTabChange=function(e){a.setState({activeTab:e})},a.state={activeTab:e.activeTab||"followers"},a.tabs=[{name:"followers",label:"Followers"},{name:"repos",label:"Repos"},{name:"contribution",label:"Contribution"}],a}return Object(M.a)(t,e),Object(P.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this.props,t=e.match.params.userName;(0,e.onFetchUserDetails)(t)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.userDetails,t=this.state.activeTab;return!R.a.size(e)>0?r.a.createElement("div",{className:"loading-wrapper"},r.a.createElement("p",{className:"loading-text"},"Loading...")):r.a.createElement("div",{className:"userDetails-container"},r.a.createElement("div",{className:"userDetails-conatiner_inner"},r.a.createElement("div",{className:"userDetails-content-primary"},r.a.createElement(Z,{user:e})),r.a.createElement("div",{className:"userDetails-content-secondary"},r.a.createElement(ve,{user:e,activeTab:t,tabs:this.tabs,onTabChange:this.handleTabChange}))))}}]),t}(n.Component)),be=Object(o.b)(function(e){var t=e.user;return Object(u.a)({},t)},function(e){return{onFetchUserDetails:function(t){return e($(t))}}})(Object(I.e)(Ee));function ge(e){return function(t){return t({type:m,payload:e}),x(e).then(function(e){t({type:h,payload:e})}).catch(function(e){return t({type:d,payload:e})})}}a(31);var Ce=function(e){var t=e.user,a=e.onUserItemClick;return r.a.createElement("li",{className:"users-list-item",onClick:function(){a&&a(t)}},r.a.createElement("div",{className:"users-list-item-img"},r.a.createElement("img",{src:t.avatar_url,alt:t.login})),r.a.createElement("div",{className:"users-list-item-name"},t.login))},Oe=function(e){function t(){var e,a;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(L.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).handleUserItemClick=function(e){var t=a.props.handleUserClick;t&&t(e)},a}return Object(M.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this,t=this.props.users;return r.a.createElement("div",{className:"users-list-container"},r.a.createElement("ul",{className:"users-list-items"},t&&t.length?t.map(function(t){return r.a.createElement(Ce,{key:t.id,user:t,onUserItemClick:e.handleUserItemClick})}):null))}}]),t}(n.PureComponent),Ne=function(e){function t(e){var a;return Object(D.a)(this,t),(a=Object(L.a)(this,Object(A.a)(t).call(this,e))).handleChange=function(e){var t=e.currentTarget.value;a.setState({searchTerm:t,showUsersList:!0}),a.debounceSearch()},a.debounceSearch=function(){var e=a.props.onSearchUsers;e&&e(a.state.searchTerm)},a.handleSearchResultClick=function(e){var t=a.props.history;a.setState({showUsersList:!1}),t.push("/users/".concat(e.login)),window.location.href=window.location.href},a.state={showUsersList:!1,searchTerm:e.users.searchTerm||""},a.debounceSearch=R.a.debounce(a.debounceSearch,300),a}return Object(M.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userName;e&&this.setState({searchTerm:e})}},{key:"render",value:function(){var e=this.props.users,t=this.state,a=t.searchTerm,n=t.showUsersList;return r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"header-nav"},r.a.createElement("div",{className:"header-search"},r.a.createElement("input",{type:"text",placeholder:"Search user",onChange:this.handleChange,value:a}),e.list&&e.list.length&&n?r.a.createElement(Oe,{users:e.list,handleUserClick:this.handleSearchResultClick}):null)))}}]),t}(n.Component),ye=Object(o.b)(function(e){return{users:e.home.users}},function(e){return{onSearchUsers:function(t){return e(ge(t))}}})(Object(I.e)(Ne)),we=(a(83),function(e){function t(){return Object(D.a)(this,t),Object(L.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement(G.a,null,r.a.createElement(ye,null),r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:"/",component:W}),r.a.createElement(I.a,{exact:!0,path:"/users/:userName",component:be})))}}]),t}(n.Component)),je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Se(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(o.a,{store:F},r.a.createElement(we,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");je?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Se(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Se(t,e)})}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.06020f16.chunk.js.map