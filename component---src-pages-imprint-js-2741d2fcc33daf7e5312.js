webpackJsonp([36829835628245],{243:function(e,t){},174:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=l(1),c=n(o),f=l(4),s=l(3);l(243);var i=function(e,t){return"en"===e.toLowerCase()?"/"+t+"/":"/"+e+"/"+t+"/"},d=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.config,l=e.langKey,n=t.copyright,a=t.address;return c.default.createElement("footer",{className:"footerImpressum"},c.default.createElement(f.Container,null,c.default.createElement("div",{className:"notice-container"},c.default.createElement("div",{className:"address-container"},c.default.createElement("p",{style:{margin:0}},n),c.default.createElement("p",null,a),c.default.createElement("span",null,c.default.createElement("a",{href:i(l,"term-of-use")},c.default.createElement(s.FormattedMessage,{id:"footer.term.of.use"})),c.default.createElement("span",null," | "),c.default.createElement("a",{href:i(l,"privacy")},c.default.createElement(s.FormattedMessage,{id:"footer.privacy"})),c.default.createElement("span",null," | "),c.default.createElement("a",{href:i(l,"imprint")},c.default.createElement(s.FormattedMessage,{id:"footer.imprint"})))),c.default.createElement("div",null,c.default.createElement("p",null,c.default.createElement(s.FormattedMessage,{id:"footer.newletter.promotion.text"})),c.default.createElement("a",{href:"http://gem.godaddy.com/signups/388099/join"},c.default.createElement(f.Button,{className:"newsletter-subscribe",block:!0},c.default.createElement(s.FormattedMessage,{id:"footer.newletter.button.text"})))))))},t}(o.Component);t.default=d,e.exports=t.default},179:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Imprint=void 0;var o=l(1),c=n(o);t.Imprint=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row row-align-top"},c.default.createElement("div",{className:"col"},c.default.createElement("h1",null,"Impressum"),c.default.createElement("p",null,"ARES Tech GmbH",c.default.createElement("br",null),"Pappelallee 78/79, 10437 Berlin"))),c.default.createElement("div",{className:"row row-align-top-xl"},c.default.createElement("div",{className:"col"},c.default.createElement("p",null,c.default.createElement("b",null,"Vertretungsberechtigter Geschäftsführer"),c.default.createElement("br",null),"Zhichao Li"),c.default.createElement("p",null,c.default.createElement("b",null,"Kontakt"),c.default.createElement("br",null),"E-Mail – mail@arestech.io",c.default.createElement("br",null),"Website – www.arestech.io",c.default.createElement("br",null)),c.default.createElement("p",null,c.default.createElement("b",null,"Eintrag im Handelsregister"),c.default.createElement("br",null),"Registergericht: Amtsgericht Charlottenburg",c.default.createElement("br",null),"Registernummer: HRB 195716 B")),c.default.createElement("div",{className:"col"},c.default.createElement("p",null,c.default.createElement("b",null,"Umsatzsteuer-Identifikationsnummer"),c.default.createElement("br",null),"gemäß §27 a Umsatzsteuergesetz ",c.default.createElement("br",null),"DE-318338997"),c.default.createElement("p",null,c.default.createElement("b",null,"Verantwortlich für den Inhalt"),c.default.createElement("br",null),"nach § 55 Abs. 2 RStV:",c.default.createElement("br",null),"Zhichao Li",c.default.createElement("br",null),"ARES Tech",c.default.createElement("br",null),"Pappelallee 78/79, 10437 Berlin"))))},t}(o.Component)},484:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(1),r=n(a),u=l(197),o=n(u),c=l(46),f=n(c),s=function(){return r.default.createElement(o.default,{langKey:"en",messages:f.default})};t.default=s,e.exports=t.default},197:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(1),r=n(a),u=l(65),o=n(u),c=l(179),f=l(29),s=n(f),i=l(25),d=n(i),m=l(30),p=n(m),E=l(28),b=n(E),h=l(174),g=n(h);t.default=function(e){var t=e.langKey,l=e.messages;return r.default.createElement(s.default,{langKey:t,messages:l},r.default.createElement("div",null,r.default.createElement(b.default,{langKey:t}),r.default.createElement(p.default,{langKey:t,footerTheme:"footer"},r.default.createElement(o.default,{title:"Impressum | "+d.default.siteTitle}),r.default.createElement(c.Imprint,null),r.default.createElement(g.default,{config:d.default,langKey:t}))))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-imprint-js-2741d2fcc33daf7e5312.js.map