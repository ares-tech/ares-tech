webpackJsonp([0xefeaa6d1881d],{444:function(e,t){"use strict";t.__esModule=!0,t.default=[{linkedIn:"https://www.linkedin.com/in/steven-karch-2857241/",name:"team.member.stevenkarch.name",title:"team.member.title.blockchainadvisor",intro:"team.member.stevenkarch.intro",imageSrc:"/images/advisors/StevenKarch-300x300.jpg"},{linkedIn:"https://www.linkedin.com/in/konrad-rieck-58528015/",name:"team.member.prof.dr.konradrieck.name",title:"team.member.title.scientificadvisor",intro:"team.member.prof.dr.konradrieck.intro",imageSrc:"/images/advisors/KonradRieck-150x150.jpg"},{linkedIn:"https://www.linkedin.com/in/renegerstenberger/",name:"team.member.renegerstenberger.name",title:"team.member.title.datasecurityadvisor",intro:"team.member.renegerstenberger.intro",imageSrc:"/images/advisors/Rene-150x150.jpg"},{linkedIn:"https://www.linkedin.com/in/simonschwerin/",name:"team.member.simonschwerin.name",title:"team.member.title.blockchainadvisor",intro:"team.member.simonschwerin.intro",imageSrc:"/images/advisors/Simon-150x150.png"},{linkedIn:"https://www.linkedin.com/in/yun-cao-34400b59/",name:"team.member.yuncao.name",title:"team.member.title.game.marketingadvisor",intro:"team.member.yuncao.intro",imageSrc:"/images/advisors/YunCao-1-150x150.jpg"},{linkedIn:"https://de.linkedin.com/in/fuesun",name:"team.member.fuesunwehrmann.name",title:"team.member.title.engineeringadvisor",intro:"team.member.fuesunwehrmann.intro",imageSrc:"/images/advisors/Fuesun-Wehrmann-150x150.jpeg"},{linkedIn:"https://www.linkedin.com/in/zeta-zhu-679a301a/",name:"team.member.zetazhu.name",title:"team.member.title.marketingadvisor",intro:"team.member.zetazhu.intro",imageSrc:"/images/advisors/Zeta_Zhu-150x150.jpg"},{linkedIn:"https://www.linkedin.com/in/ying-guo-16b3796/",name:"team.member.yingguo.name",title:"team.member.title.marketingandsalesadvisor",intro:"team.member.yingguo.intro",imageSrc:"/images/advisors/YingGuo-150x150.jpg"},{linkedIn:"https://www.linkedin.com/in/maurus-radelow-1683b443/",name:"team.member.maurusradelow.name",title:"team.member.title.cyber.informationsecurityadvisor",intro:"team.member.maurusradelow.intro",imageSrc:"/images/advisors/Maurus_Radelow-150x150.jpg"},{linkedIn:"https://www.linkedin.com/in/davydeh/",name:"team.member.davidespinosa.name",title:"team.member.title.technicalsolutionsadvisor",intro:"team.member.davidespinosa.intro",imageSrc:"/images/advisors/David_Espinosa-150x150.jpg"},{linkedIn:"https://www.linkedin.com/in/ran-wang-036456b/",name:"team.member.ranwang.name",title:"team.member.title.gamepublishingadvisor",intro:"team.member.ranwang.intro",imageSrc:"/images/advisors/Ran.Wang_-150x150.png"}],e.exports=t.default},416:function(e,t){},445:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(1),m=n(o),s=a(4),c=a(3);a(416);var d=a(446),u=n(d),f=a(444),g=n(f),p=function(e){function t(a){l(this,t);var n=r(this,e.call(this,a));return n.toggleBackdrop=function(e){n.setState({backdrop:e})},n.state={backdrop:!1},n}return i(t,e),t.prototype.render=function(){var e=this;return m.default.createElement("div",{className:"container pt-0 pb-0 main-content"},m.default.createElement("div",{className:"show-grid pt-20 pb-40 row",style:{position:"relative",overflow:"hidden"}},m.default.createElement(s.Container,null,m.default.createElement(s.Col,null,m.default.createElement("h1",{className:"display-3 headline",style:{color:"#ff6427",fontWeight:"bold"}},m.default.createElement(c.FormattedMessage,{id:"Advisors.title"}))),m.default.createElement(s.Row,{className:"team-profile-row"},m.default.createElement(s.Col,null,m.default.createElement(s.Row,null,g.default.map(function(t){var a=t.name,n=t.title,l=t.imageSrc,r=t.intro,i=t.linkedIn;return m.default.createElement(m.default.Fragment,null,m.default.createElement(s.Col,{key:a,md:3,sm:6,className:"px-3 py-3"},m.default.createElement(u.default,{name:a,title:n,src:l,intro:r,linkedIn:i,toggleBackdrop:e.toggleBackdrop})))}))))),m.default.createElement("div",{className:"backdrop + "+(this.state.backdrop?" show":"")})))},t}(m.default.PureComponent);t.default=p,e.exports=t.default},446:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m=a(1),s=n(m),c=a(3),d=a(4);a(416);var u={container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},name:{alignSelf:"start",fontWeight:"bold",fontSize:"1.4rem",color:"#ff6427"},title:{color:"#ff6427"},intro:{color:"#9b9b9b"},actionBar:{alignSelf:"stretch",display:"flex",justifyContent:"space-between",alignItems:"flex-end"},link:{color:"#ff6427",textDecoration:"underline",fontSize:"larger"}},f=function(e){function t(a){l(this,t);var n=r(this,e.call(this,a));return n.onReadMoreClicked=function(e){n.props.toggleBackdrop(!0),n.setState({highlight:!0}),e.preventDefault()},n.onReadLessClicked=function(e){n.props.toggleBackdrop(!1),n.setState({highlight:!1}),e.preventDefault()},n.state={highlight:!1},n}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.name,a=e.title,n=e.src,l=e.intro,r=e.linkedIn,i=this.state.highlight;return s.default.createElement(d.Card,{className:"team-profile-card",style:o({},i?{zIndex:1e3}:{})},s.default.createElement(d.CardBody,{className:"sm-cardbodyheight"},s.default.createElement("div",{style:u.container},s.default.createElement("div",{className:"profile-image",style:{backgroundImage:"url("+n+")",width:"160px",height:"160px",borderRadius:"50%",backgroundSize:"cover"}}),s.default.createElement("div",null)),s.default.createElement("p",{className:"mb-0 pt-2 team-name"},s.default.createElement(c.FormattedMessage,{id:t})),s.default.createElement("p",{style:u.title},s.default.createElement(c.FormattedMessage,{id:a})),s.default.createElement("p",{style:u.intro,className:i?"":"block-with-text"},s.default.createElement(c.FormattedMessage,{id:l})),s.default.createElement("div",{style:u.actionBar},i?s.default.createElement("a",{href:"/",style:u.link,onClick:this.onReadLessClicked},s.default.createElement(c.FormattedMessage,{id:"general.read.collapse"})):s.default.createElement("a",{href:"/",style:u.link,onClick:this.onReadMoreClicked},s.default.createElement(c.FormattedMessage,{id:"general.read.expand"})),s.default.createElement("a",{href:r,target:"_blank"},s.default.createElement("img",{src:"/images/icon-linkedIn.svg",alt:t+" LinkedIn",width:"30",height:"100%"})))))},t}(s.default.PureComponent);t.default=f,e.exports=t.default},242:function(e,t){},173:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(1),m=n(o),s=a(4),c=a(3);a(242);var d=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.config;e.langKey,t.footerh1,t.address;return m.default.createElement("footer",{className:"footerConnect"},m.default.createElement(s.Container,null,m.default.createElement(s.Row,null,m.default.createElement(s.Col,{md:2,sm:1}),m.default.createElement(s.Col,{md:4,sm:5},m.default.createElement("h3",null,m.default.createElement(c.FormattedMessage,{id:"get.regular"}),m.default.createElement("br",null),m.default.createElement(c.FormattedMessage,{id:"updates.on.ares"})),m.default.createElement("p",{className:"text-white"},m.default.createElement(c.FormattedMessage,{id:"latest.news"}),m.default.createElement("br",null),m.default.createElement(c.FormattedMessage,{id:"your.inbox"}))),m.default.createElement(s.Col,{md:4,sm:5},m.default.createElement("form",null,m.default.createElement("div",{className:"form-group col-xs-12"},m.default.createElement("label",{className:"connectcontrol-label"},m.default.createElement(c.FormattedMessage,{id:"enter.your.email.below"})),m.default.createElement("input",{type:"email",className:"form-control",placeholder:"Email Address",required:""})),m.default.createElement("div",{className:"col-xs-12"},m.default.createElement("button",{type:"submit",className:"btn btn9"},m.default.createElement(c.FormattedMessage,{id:"send.me.updates"}))))),m.default.createElement(s.Col,{md:2,sm:1}))))},t}(o.Component);t.default=d,e.exports=t.default},615:function(e,t){},459:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),i=a(4),o=a(3);a(615);var m=function(){return r.default.createElement("div",{className:"latestActivity-section"},r.default.createElement("div",{class:"background-container"},r.default.createElement("div",{class:"custom-shape custom-shape-1"})),r.default.createElement(i.Container,null,r.default.createElement(i.Row,{className:"show-grid pt-40 pb-40 "},r.default.createElement(i.Col,{md:12},r.default.createElement("h1",{className:"display-3 headline",style:{color:"#ff6427",fontWeight:"bold"}},r.default.createElement(o.FormattedMessage,{id:"LatestActivity.title"}))),r.default.createElement(i.Col,{md:6},r.default.createElement(i.Card,{className:"LatestActivity-card"},r.default.createElement(i.Row,{style:{padding:"20px 20px 20px 30px"}},r.default.createElement(i.Col,{md:4,className:"mb-20 pl-6"},r.default.createElement("img",{src:"/images/gamescom.jpg",width:"100%",height:"100%",alt:""})),r.default.createElement(i.Col,{md:4,className:"mb-20 pl-6"},r.default.createElement("img",{src:"/images/shanghai.JPG",width:"100%",height:"100%",alt:""})),r.default.createElement(i.Col,{md:4,className:"mb-20 pl-6"},r.default.createElement("img",{src:"/images/dorahack01.jpeg",width:"100%",height:"100%",alt:""})),r.default.createElement(i.Col,{md:4,className:"mb-20 pl-6"},r.default.createElement("img",{src:"/images/about1.jpg",width:"100%",height:"100%",alt:""})),r.default.createElement(i.Col,{md:4,className:"mb-20 pl-6"},r.default.createElement("img",{src:"/images/about2.jpeg",width:"100%",height:"100%",alt:""})),r.default.createElement(i.Col,{md:4,className:"mb-20 pl-6"},r.default.createElement("img",{src:"/images/about3.JPG",width:"100%",height:"100%",alt:""})),r.default.createElement(i.Col,{md:4,className:"mb-20 pl-6"},r.default.createElement("img",{src:"/images/about4.jpg",width:"100%",height:"100%",alt:""})),r.default.createElement(i.Col,{md:4,className:"mb-20 pl-6"},r.default.createElement("img",{src:"/images/teaser-03.jpeg",width:"100%",height:"100%",alt:""})),r.default.createElement(i.Col,{md:4,className:"mb-20 pl-6"},r.default.createElement("img",{src:"/images/teaser-01.jpeg",width:"100%",height:"100%",alt:""})),r.default.createElement(i.Col,{md:12,className:"pl-6"},r.default.createElement("div",{className:"text-orange"},r.default.createElement("a",{href:"https://www.instagram.com/arestechio/",target:"_blank"},r.default.createElement("img",{src:"/images/instagram.png",className:"social-img",alt:"instagram"})),r.default.createElement(o.FormattedMessage,{id:"view.more.on.our.instagram"})))))),r.default.createElement(i.Col,{md:6},r.default.createElement(i.Row,{style:{marginTop:"20px"},className:"pl-1"},r.default.createElement(i.Col,{md:6,style:{paddingRight:"0"}},r.default.createElement("div",{className:"mb-20 text-orange"},r.default.createElement("a",{href:"https://t.me/ares_tech",target:"_blank"},r.default.createElement("img",{src:"/images/telegram.png",className:"social-img",alt:"telegram"})),r.default.createElement(o.FormattedMessage,{id:"telegram"})),r.default.createElement("div",{className:"mb-20 text-orange"},r.default.createElement("a",{href:"https://github.com/ares-tech",target:"_blank"},r.default.createElement("img",{src:"/images/github.png",className:"social-img",alt:"github"})),r.default.createElement(o.FormattedMessage,{id:"github"})),r.default.createElement("div",{className:"mb-20 text-orange"},r.default.createElement("a",{href:"https://www.facebook.com/arestech.io",target:"_blank"},r.default.createElement("img",{src:"/images/fb.png",className:"social-img",alt:"facebook"})),r.default.createElement(o.FormattedMessage,{id:"facebook"}))),r.default.createElement(i.Col,{md:6,style:{paddingRight:"0"}},r.default.createElement("div",{className:"mb-20 text-orange"},r.default.createElement("a",{href:"https://twitter.com/arestech_io",target:"_blank"},r.default.createElement("img",{src:"/images/twitter.png",className:"social-img",alt:"twitter"})),r.default.createElement(o.FormattedMessage,{id:"twitter"})),r.default.createElement("div",{className:"mb-20 text-orange"},r.default.createElement("a",{href:"https://www.youtube.com/channel/UCV_O9CKVKr4-KJVC-v8FcVw",target:"_blank"},r.default.createElement("img",{src:"/images/youtube.png",className:"social-img",alt:"youtube"})),r.default.createElement(o.FormattedMessage,{id:"youtube"})),r.default.createElement("div",{className:"mb-20 text-orange"},r.default.createElement("a",{href:"https://medium.com/ares-tech",target:"_blank"},r.default.createElement("img",{src:"/images/medium.png",className:"social-img",alt:"medium"})),r.default.createElement(o.FormattedMessage,{id:"medium"}))),r.default.createElement(i.Col,{md:12},r.default.createElement("div",{className:"pt-211"},r.default.createElement("a",{href:"https://drive.google.com/drive/folders/14-JhpPGauii_8lcPyOUNzekS-EQSMEsP?usp=sharing",rel:"noopener noreferrer",target:"_blank",style:{color:"#ff6427"}},r.default.createElement(i.Button,{className:"main__button_press_kit",id:"buttonPressKit"},r.default.createElement("i",{className:"fa fa-newspaper-o","aria-hidden":"true"}),r.default.createElement("span",{style:{paddingLeft:"10px"}},r.default.createElement(o.FormattedMessage,{id:"contact.get.press.kit"})))))))))))};t.default=m,e.exports=t.default},473:function(e,t){"use strict";t.__esModule=!0,t.default=[{name:"team.member.jack.li.name",title:"team.member.title.ceo",intro:"team.member.jack.li.intro",linkedIn:"https://www.linkedin.com/in/zhichao-jack-li-a5129a31/",imageSrc:"/images/team/group-16.jpg"},{name:"team.member.christian.gehl.name",title:"team.member.title.cto",intro:"team.member.christian.gehl.intro",linkedIn:"https://www.linkedin.com/in/christiangehl/",imageSrc:"/images/team/group-17.jpg"},{linkedIn:"https://www.linkedin.com/in/carstenschipke/",name:"team.member.carsten.name",title:"team.member.title.backend",intro:"team.member.carsten.intro",imageSrc:"/images/team/me.jpg"},{linkedIn:"https://www.linkedin.com/in/cdbaibai/",name:"team.member.jianiyu.name",title:"team.member.title.projectmanager",intro:"team.member.jianiyu.intro",imageSrc:"/images/team/Jiani.jpg"},{linkedIn:"https://www.linkedin.com/in/kierandold/",name:"team.member.ciarandold.name",title:"team.member.title.ux.uidesigner",intro:"team.member.ciarandold.intro",imageSrc:"/images/team/ciaranD.jpg"},{linkedIn:"http://www.lu-sisi.com/about-me/",name:"team.member.lusisi.name",title:"team.member.title.artdirector",intro:"team.member.lusisi.intro",imageSrc:"/images/team/lusisi.png"}],e.exports=t.default},417:function(e,t){},474:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(1),m=n(o),s=a(4),c=a(3);a(417);var d=a(475),u=n(d),f=a(473),g=n(f),p=function(e){function t(a){l(this,t);var n=r(this,e.call(this,a));return n.toggleBackdrop=function(e){n.setState({backdrop:e})},n.state={backdrop:!1},n}return i(t,e),t.prototype.componentDidMount=function(){"#team"===window.location.hash&&setTimeout(function(){document.getElementById("buttonPressKit").scrollIntoView()},400)},t.prototype.render=function(){var e=this;return m.default.createElement("div",{className:"container p-3  pt-0 pb-0",id:"teamMembers"},m.default.createElement("div",{className:"pt-20 pb-40 row"},m.default.createElement(s.Container,null,m.default.createElement(s.Col,null,m.default.createElement("h1",{className:"display-3 headline",style:{color:"#ff6427",fontWeight:"bold"}},m.default.createElement(c.FormattedMessage,{id:"TeamMembers.title"}))),m.default.createElement(s.Row,{className:"team-profile-row"},m.default.createElement(s.Col,null,m.default.createElement(s.Row,null,g.default.map(function(t){var a=t.name,n=t.title,l=t.imageSrc,r=t.intro,i=t.linkedIn;return m.default.createElement(m.default.Fragment,null,m.default.createElement(s.Col,{key:a,md:3,sm:6,className:"px-3 py-3"},m.default.createElement(u.default,{name:a,title:n,src:l,intro:r,linkedIn:i,toggleBackdrop:e.toggleBackdrop})))}))))),m.default.createElement("div",{className:"backdrop + "+(this.state.backdrop?" show":"")})))},t}(m.default.PureComponent);t.default=p,e.exports=t.default},475:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m=a(1),s=n(m),c=a(3),d=a(4);a(417);var u={container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},name:{alignSelf:"start",fontWeight:"bold",fontSize:"1.4rem",color:"#ff6427"},title:{color:"#ff6427"},intro:{color:"#9b9b9b"},actionBar:{alignSelf:"stretch",display:"flex",justifyContent:"space-between",alignItems:"flex-end"},link:{color:"#ff6427",textDecoration:"underline",fontSize:"larger"}},f=function(e){function t(a){l(this,t);var n=r(this,e.call(this,a));return n.onReadMoreClicked=function(e){n.props.toggleBackdrop(!0),n.setState({highlight:!0}),e.preventDefault()},n.onReadLessClicked=function(e){n.props.toggleBackdrop(!1),n.setState({highlight:!1}),e.preventDefault()},n.state={highlight:!1},n}return i(t,e),t.prototype.componentDidMount=function(){"#team"===window.location.hash&&setTimeout(function(){document.getElementById("teamMembers").scrollIntoView()},400)},t.prototype.render=function(){var e=this.props,t=e.name,a=e.title,n=e.src,l=e.intro,r=e.linkedIn,i=this.state.highlight;return s.default.createElement(d.Card,{className:"team-profile-card",style:o({},i?{zIndex:1e3}:{})},s.default.createElement(d.CardBody,{className:"sm-cardbodyheight"},s.default.createElement("div",{style:u.container},s.default.createElement("div",{className:"profile-image",style:{backgroundImage:"url("+n+")",width:"160px",height:"160px",borderRadius:"50%",backgroundSize:"cover"}}),s.default.createElement("div",null)),s.default.createElement("p",{className:"mb-0 pt-2 team-name"},s.default.createElement(c.FormattedMessage,{id:t})),s.default.createElement("p",{style:u.title},s.default.createElement(c.FormattedMessage,{id:a})),s.default.createElement("p",{style:u.intro,className:i?"":"block-with-text"},s.default.createElement(c.FormattedMessage,{id:l})),s.default.createElement("div",{style:u.actionBar},i?s.default.createElement("a",{href:"/",style:u.link,onClick:this.onReadLessClicked},s.default.createElement(c.FormattedMessage,{id:"general.read.collapse"})):s.default.createElement("a",{href:"/",style:u.link,onClick:this.onReadMoreClicked},s.default.createElement(c.FormattedMessage,{id:"general.read.expand"})),s.default.createElement("a",{href:r,target:"_blank"},s.default.createElement("img",{src:"/images/icon-linkedIn.svg",alt:t+" LinkedIn",width:"30",height:"100%"})))))},t}(s.default.PureComponent);t.default=f,e.exports=t.default},479:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),i=a(498),o=n(i),m=a(46),s=n(m),c=function(){return r.default.createElement(o.default,{langKey:"en",messages:s.default})};t.default=c,e.exports=t.default},498:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l);a(48),a(49);var i=a(25),o=n(i),m=a(29),s=n(m),c=a(30),d=n(c),u=a(28),f=n(u),g=a(459),p=n(g),h=a(474),b=n(h),E=a(445),w=n(E),y=a(173),k=n(y),v=function(e){var t=e.children,a=e.className;return r.default.createElement("div",{className:a},t)},_=function(e){var t=e.langKey,a=e.messages;return r.default.createElement(s.default,{langKey:t,messages:a},r.default.createElement("div",null,r.default.createElement(f.default,{langKey:t,color:"Sara"}),r.default.createElement(d.default,{langKey:t,theme:"mainabout",footerTheme:"footer"},r.default.createElement(v,null,r.default.createElement(p.default,null)),r.default.createElement(v,null,r.default.createElement(b.default,null)),r.default.createElement(v,null,r.default.createElement(w.default,null)),r.default.createElement(k.default,{config:o.default,langKey:t}))))};t.default=_,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-about-js-6feb2f509b665236bc7c.js.map