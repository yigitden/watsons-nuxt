(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var r={},o=n(5),component=Object(o.a)(r,(function(){var e=this._self._c;return e("div",{staticClass:"relative"},[e("div",{staticClass:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"},[e("svg",{staticClass:"w-5 h-5 text-gray-500 dark:text-gray-400",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])]),this._v(" "),e("input",{staticClass:"lg:block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:border-focus rounded-full",attrs:{type:"search",id:"default-search",placeholder:"Write the product or category you are looking for"}})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Input:n(141).default})},135:function(e,t,n){"use strict";n.r(t);var r=n(196),o=n(199),l=n(200),c=n(111),d=n(201),m=n(202),h={components:{User:o.default,Categories:r.default,Logo:l.default,SearchBar:c.default,Basket:d.default,SearchBarMenu:m.default},methods:{handleOpen:function(){document.getElementById("menu").classList.toggle("hidden")}}},f=n(5),component=Object(f.a)(h,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"md:px-[140px] bg-white mt-3 z-40 mb-4 px-4 lg:mb-0"},[t("div",{staticClass:"flex items-center"},[t("div",{staticClass:"lg:w-1/4 w-1/2 flex justify-between items-center"},[t("Logo")],1),e._v(" "),t("div",{staticClass:"lg:w-3/4 w-1/2 flex justify-between items-center ml-16 lg:ml-0"},[t("SearchBarMenu"),e._v(" "),t("User"),e._v(" "),t("Basket"),e._v(" "),t("div",{staticClass:"flex items-center lg:hidden"},[t("button",{staticClass:"text-black text-4xl font-bold opacity-70 hover:opacity-100 duration-300",on:{click:e.handleOpen}},[t("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])])])],1)]),e._v(" "),t("div",{staticClass:"hidden lg:flex",attrs:{id:"menu"}},[t("div",{staticClass:"bg-titan text-xl font-medium flex justify-between h-12 p-4 mt-2 items-center lg:hidden"},[t("div",{staticClass:"cursor-pointer",on:{click:e.handleOpen}},[t("p",[e._v("x")])]),e._v(" "),t("p",[e._v("Menu")])]),e._v(" "),t("Categories")],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:n(82).default})},141:function(e,t,n){"use strict";n.r(t);var r={name:"Input",props:["placeholder","type","id","labelText","pattern","v-model","modelValue","maxLength"],emits:["update:modelValue"]},o=n(5),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900",attrs:{for:e.id}},[e._v(e._s(e.labelText))]),e._v(" "),t("input",{staticClass:"border border-smoke text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",attrs:{type:e.type,id:e.id,placeholder:e.placeholder,pattern:e.pattern,required:"required",maxlength:e.maxLength},domProps:{value:e.modelValue},on:{input:function(t){return e.$emit("update:modelValue",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Input:n(141).default})},184:function(e,t,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("dec65648",content,!0,{sourceMap:!1})},194:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{loading:!1}},methods:{start:function(){this.loading=!0},finish:function(){this.loading=!1}}},o=(n(268),n(5)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.loading?t("div",{staticClass:"sk-circle z-50"},[t("div",{staticClass:"sk-circle1 sk-child"}),e._v(" "),t("div",{staticClass:"sk-circle2 sk-child"}),e._v(" "),t("div",{staticClass:"sk-circle3 sk-child"}),e._v(" "),t("div",{staticClass:"sk-circle4 sk-child"}),e._v(" "),t("div",{staticClass:"sk-circle5 sk-child"}),e._v(" "),t("div",{staticClass:"sk-circle6 sk-child"}),e._v(" "),t("div",{staticClass:"sk-circle7 sk-child"}),e._v(" "),t("div",{staticClass:"sk-circle8 sk-child"}),e._v(" "),t("div",{staticClass:"sk-circle9 sk-child"}),e._v(" "),t("div",{staticClass:"sk-circle10 sk-child"}),e._v(" "),t("div",{staticClass:"sk-circle11 sk-child"}),e._v(" "),t("div",{staticClass:"sk-circle12 sk-child"})]):e._e()}),[],!1,null,"67cc9e63",null);t.default=component.exports},195:function(e,t,n){"use strict";var r={components:{Header:n(135).default}},o=n(5),component=Object(o.a)(r,(function(){var e=this._self._c;return e("div",[e("Header"),this._v(" "),e("nuxt")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Header:n(135).default})},196:function(e,t,n){"use strict";n.r(t);var r={name:"Categories",data:function(){return{categories:["campaigns","personal care","skin care","make-up","mother & baby","men care","healty life","brands"]}},components:{MobileUserMenu:n(197).default}},o=n(5),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex justify-between my-4 flex-col lg:flex-row w-full"},[e._l(e.categories,(function(n){return t("div",{key:n.index,staticClass:"capitalize lg:uppercase font-medium lg:font-bold p-4 cursor-pointer hover:bg-smoke30 duration-500 flex justify-between items-center"},[t("div",{staticClass:"lg:hidden"},[t("font-awesome-icon",{attrs:{icon:["fas","angle-left"]}})],1),e._v("\n    "+e._s(n)+"  \n    ")])})),e._v(" "),t("div",{staticClass:"block lg:hidden"},[t("MobileUserMenu")],1)],2)}),[],!1,null,null,null);t.default=component.exports},197:function(e,t,n){"use strict";n.r(t);var r={components:{MobileUserMenuItem:n(198).default}},o=n(5),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"bg-smoke30 divide-y"},[t("MobileUserMenuItem",{attrs:{text:"My profile",icon:["fas","user"]}}),e._v(" "),t("MobileUserMenuItem",{attrs:{text:"Order history",icon:["fas","inbox"]}}),e._v(" "),t("MobileUserMenuItem",{attrs:{text:"Help center",icon:["fas","circle-question"]}}),e._v(" "),t("MobileUserMenuItem",{attrs:{text:"Log out",icon:["fas","right-from-bracket"]}})],1)}),[],!1,null,null,null);t.default=component.exports},198:function(e,t,n){"use strict";n.r(t);var r={props:["text","icon"]},o=n(5),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-graphene flex items-center justify-end p-4 pt-4 pb-2 cursor-pointer hover:bg-smoke50 duration-500"},[t("p",{staticClass:"text-sm font-medium mr-4"},[e._v(e._s(e.text))]),e._v(" "),t("font-awesome-icon",{attrs:{icon:e.icon}})],1)}),[],!1,null,null,null);t.default=component.exports},199:function(e,t,n){"use strict";n.r(t);var r={},o=n(5),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex items-center space-x-5 divide-x w-1/3 lg:block hidden"},[t("div",{staticClass:"flex items-center space-x-3"},[e._m(0),e._v(" "),t("img",{attrs:{src:"/images/user.png"}}),e._v(" "),t("font-awesome-icon",{attrs:{icon:["fas","angle-down"]}})],1)])}),[function(){var e=this,t=e._self._c;return t("p",{staticClass:"text-grey"},[e._v("\n      Hello, "),t("span",{staticClass:"font-bold text-coal"},[e._v(" Clara Clara ")])])}],!1,null,null,null);t.default=component.exports},200:function(e,t,n){"use strict";n.r(t);var r={},o=n(5),component=Object(o.a)(r,(function(){var e=this._self._c;return e("NuxtLink",{attrs:{to:"/"}},[e("img",{staticClass:"w-36 h-7",attrs:{src:"/images/logo.png"}})])}),[],!1,null,null,null);t.default=component.exports},201:function(e,t,n){"use strict";n.r(t);var r={},o=n(5),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pl-10 inline-flex relative mr-10 lg:mr-0"},[t("font-awesome-icon",{staticClass:"w-6 h-6",attrs:{icon:["fas","basket-shopping"]}}),e._v(" "),t("div",{staticClass:"inline-flex absolute -top-2 -right-3 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white"},[e._v("2")])],1)}),[],!1,null,null,null);t.default=component.exports},202:function(e,t,n){"use strict";n.r(t);var r={components:{SearchBar:n(111).default},methods:{handleOpen:function(){document.getElementById("searchbar").classList.toggle("hidden")}}},o=n(5),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full flex justify-end lg:justify-center self-end"},[t("div",{staticClass:"flex items-center lg:hidden"},[t("button",{staticClass:"text-black text-4xl font-bold opacity-70 hover:opacity-100 duration-300",on:{click:e.handleOpen}},[t("svg",{staticClass:"w-5 h-5 text-gray-500",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])])]),e._v(" "),t("div",{staticClass:"hidden lg:flex lg:justify-center",attrs:{id:"searchbar"}},[t("div",{staticClass:"relative"},[t("div",{staticClass:"absolute lg:inset-y-0 inset-y-6 w-[340px] lg:max-width-560 lg:right-0 -right-32 z-50 lg:relative"},[t("SearchBar")],1)])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:n(82).default})},206:function(e,t,n){n(207),e.exports=n(208)},268:function(e,t,n){"use strict";n(184)},269:function(e,t,n){var r=n(46)((function(i){return i[1]}));r.push([e.i,'body[data-v-67cc9e63],html[data-v-67cc9e63]{background:"#ECECEC";width:100%;height:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.sk-circle[data-v-67cc9e63]{width:40px;height:40px;position:relative}.sk-circle .sk-child[data-v-67cc9e63]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-circle .sk-child[data-v-67cc9e63]:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:"#ECECEC";border-radius:100%;-webkit-animation:sk-circleBounceDelay-67cc9e63 1.2s ease-in-out infinite both;animation:sk-circleBounceDelay-67cc9e63 1.2s ease-in-out infinite both}.sk-circle .sk-circle2[data-v-67cc9e63]{transform:rotate(30deg)}.sk-circle .sk-circle3[data-v-67cc9e63]{transform:rotate(60deg)}.sk-circle .sk-circle4[data-v-67cc9e63]{transform:rotate(90deg)}.sk-circle .sk-circle5[data-v-67cc9e63]{transform:rotate(120deg)}.sk-circle .sk-circle6[data-v-67cc9e63]{transform:rotate(150deg)}.sk-circle .sk-circle7[data-v-67cc9e63]{transform:rotate(180deg)}.sk-circle .sk-circle8[data-v-67cc9e63]{transform:rotate(210deg)}.sk-circle .sk-circle9[data-v-67cc9e63]{transform:rotate(240deg)}.sk-circle .sk-circle10[data-v-67cc9e63]{transform:rotate(270deg)}.sk-circle .sk-circle11[data-v-67cc9e63]{transform:rotate(300deg)}.sk-circle .sk-circle12[data-v-67cc9e63]{transform:rotate(330deg)}.sk-circle .sk-circle2[data-v-67cc9e63]:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-circle .sk-circle3[data-v-67cc9e63]:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-circle .sk-circle4[data-v-67cc9e63]:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-circle .sk-circle5[data-v-67cc9e63]:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-circle .sk-circle6[data-v-67cc9e63]:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-circle .sk-circle7[data-v-67cc9e63]:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-circle .sk-circle8[data-v-67cc9e63]:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-circle .sk-circle9[data-v-67cc9e63]:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-circle .sk-circle10[data-v-67cc9e63]:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-circle .sk-circle11[data-v-67cc9e63]:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-circle .sk-circle12[data-v-67cc9e63]:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleBounceDelay-67cc9e63{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}@keyframes sk-circleBounceDelay-67cc9e63{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}',""]),r.locals={},e.exports=r},274:function(e,t,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("17bc9ac2",content,!0,{sourceMap:!1})},275:function(e,t,n){var r=n(46)((function(i){return i[1]}));r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap);"]),r.push([e.i,"/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize *//*\nDocument\n========\n*//**\nUse a better box model (opinionated).\n*/*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}/**\nUse a more readable tab size (opinionated).\n*/html {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/html {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}/*\nSections\n========\n*//**\nRemove the margin in all browsers.\n*/body {\n\tmargin: 0;\n}/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/body {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}/*\nGrouping content\n================\n*//**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/hr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}/*\nText-level semantics\n====================\n*//**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/abbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}/**\nAdd the correct font weight in Edge and Safari.\n*/b,\nstrong {\n\tfont-weight: bolder;\n}/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/code,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}/**\nAdd the correct font size in all browsers.\n*/small {\n\tfont-size: 80%;\n}/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/sub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}sub {\n\tbottom: -0.25em;\n}sup {\n\ttop: -0.5em;\n}/*\nTabular data\n============\n*//**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/table {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}/*\nForms\n=====\n*//**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/button,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/button,\nselect { /* 1 */\n\ttext-transform: none;\n}/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/button,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}/**\nRemove the inner border and padding in Firefox.\n*/::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}/**\nRestore the focus styles unset by the previous rule.\n*/:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/:-moz-ui-invalid {\n\tbox-shadow: none;\n}/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/legend {\n\tpadding: 0;\n}/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/progress {\n\tvertical-align: baseline;\n}/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}/*\nInteractive\n===========\n*//*\nAdd the correct display in Chrome and Safari.\n*/summary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n *//**\n * Removes the default spacing and border for appropriate elements.\n */blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}button {\n  background-color: transparent;\n  background-image: none;\n}fieldset {\n  margin: 0;\n  padding: 0;\n}ol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}/**\n * Tailwind custom reset styles\n *//**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */html {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */body {\n  font-family: inherit;\n  line-height: inherit;\n}/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}/*\n * Ensure horizontal rules are visible by default\n */hr {\n  border-top-width: 1px;\n}/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */img {\n  border-style: solid;\n}textarea {\n  resize: vertical;\n}input::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}input::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}button,\n[role=\"button\"] {\n  cursor: pointer;\n}/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */:-moz-focusring {\n\toutline: auto;\n}table {\n  border-collapse: collapse;\n}h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */a {\n  color: inherit;\n  text-decoration: inherit;\n}/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */button,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */pre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */img,\nvideo {\n  max-width: 100%;\n  height: auto;\n}/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-border-opacity:1;border-color:rgba(229, 231, 235, var(--tw-border-opacity));--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;}html{font-family:Roboto,system-ui,sans-serif}.pointer-events-none{pointer-events:none;}.static{position:static;}.absolute{position:absolute;}.relative{position:relative;}.inset-x-0{left:0px;right:0px;}.inset-y-0{top:0px;bottom:0px;}.inset-y-6{top:1.5rem;bottom:1.5rem;}.bottom-0{bottom:0px;}.top-12{top:3rem;}.left-16{left:4rem;}.-top-2{top:-0.5rem;}.-right-3{right:-0.75rem;}.left-0{left:0px;}.-right-32{right:-8rem;}.z-20{z-index:20;}.z-10{z-index:10;}.z-40{z-index:40;}.z-50{z-index:50;}.col-span-2{grid-column:span 2 / span 2;}.col-span-1{grid-column:span 1 / span 1;}.row-start-1{grid-row-start:1;}.my-10{margin-top:2.5rem;margin-bottom:2.5rem;}.mx-8{margin-left:2rem;margin-right:2rem;}.my-4{margin-top:1rem;margin-bottom:1rem;}.my-9{margin-top:2.25rem;margin-bottom:2.25rem;}.my-6{margin-top:1.5rem;margin-bottom:1.5rem;}.mr-2{margin-right:0.5rem;}.mt-4{margin-top:1rem;}.ml-4{margin-left:1rem;}.mb-2{margin-bottom:0.5rem;}.mr-4{margin-right:1rem;}.mt-2{margin-top:0.5rem;}.mb-4{margin-bottom:1rem;}.mb-56{margin-bottom:14rem;}.mb-6{margin-bottom:1.5rem;}.mr-10{margin-right:2.5rem;}.mt-3{margin-top:0.75rem;}.ml-16{margin-left:4rem;}.mb-10{margin-bottom:2.5rem;}.block{display:block;}.flex{display:flex;}.inline-flex{display:inline-flex;}.grid{display:grid;}.hidden{display:none;}.h-40{height:10rem;}.h-12{height:3rem;}.h-14{height:3.5rem;}.h-48{height:12rem;}.h-10{height:2.5rem;}.h-9{height:2.25rem;}.h-6{height:1.5rem;}.h-5{height:1.25rem;}.h-7{height:1.75rem;}.max-h-\\[400px\\]{max-height:400px;}.w-32{width:8rem;}.w-72{width:18rem;}.w-9{width:2.25rem;}.w-full{width:100%;}.w-6{width:1.5rem;}.w-5{width:1.25rem;}.w-1\\/2{width:50%;}.w-36{width:9rem;}.w-\\[340px\\]{width:340px;}.w-1\\/3{width:33.333333%;}.w-2\\/3{width:66.666667%;}.max-w-\\[580px\\]{max-width:580px;}.flex-shrink{flex-shrink:1;}.flex-grow{flex-grow:1;}.transform{transform:var(--tw-transform);}.cursor-pointer{cursor:pointer;}.resize{resize:both;}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr));}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.flex-row{flex-direction:row;}.flex-col{flex-direction:column;}.items-start{align-items:flex-start;}.items-center{align-items:center;}.justify-end{justify-content:flex-end;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.gap-10{gap:2.5rem;}.gap-6{gap:1.5rem;}.gap-4{gap:1rem;}.space-x-3\\.5 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.875rem * var(--tw-space-x-reverse));margin-left:calc(0.875rem * calc(1 - var(--tw-space-x-reverse)));}.space-x-3 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.75rem * var(--tw-space-x-reverse));margin-left:calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));}.space-x-4 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));}.space-y-2 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse));}.space-x-5 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.25rem * var(--tw-space-x-reverse));margin-left:calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));}.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse));}.space-y-6 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse));}.space-x-2 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));}.divide-x > :not([hidden]) ~ :not([hidden]){--tw-divide-x-reverse:0;border-right-width:calc(1px * var(--tw-divide-x-reverse));border-left-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)));}.divide-y > :not([hidden]) ~ :not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));}.self-end{align-self:flex-end;}.break-words{overflow-wrap:break-word;}.rounded{border-radius:0.25rem;}.rounded-md{border-radius:0.375rem;}.rounded-xl{border-radius:0.75rem;}.rounded-full{border-radius:9999px;}.rounded-lg{border-radius:0.5rem;}.border{border-width:1px;}.border-2{border-width:2px;}.border-t{border-top-width:1px;}.border-smoke50{border-color:#ECECEC80;}.border-smoke{--tw-border-opacity:1;border-color:rgba(236, 236, 236, var(--tw-border-opacity));}.border-secondary10{border-color:#0099A81A;}.border-white{--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity));}.border-gray-300{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity));}.bg-primary{--tw-bg-opacity:1;background-color:rgba(255, 39, 173, var(--tw-bg-opacity));}.bg-smoke30{background-color:#ECECEC4D;}.bg-black80{background-color:#000000cc;}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}.bg-smoke{--tw-bg-opacity:1;background-color:rgba(236, 236, 236, var(--tw-bg-opacity));}.bg-red-500{--tw-bg-opacity:1;background-color:rgba(239, 68, 68, var(--tw-bg-opacity));}.bg-titan{--tw-bg-opacity:1;background-color:rgba(242, 240, 255, var(--tw-bg-opacity));}.bg-gray-50{--tw-bg-opacity:1;background-color:rgba(249, 250, 251, var(--tw-bg-opacity));}.object-contain{-o-object-fit:contain;object-fit:contain;}.p-4{padding:1rem;}.p-1{padding:0.25rem;}.p-8{padding:2rem;}.p-6{padding:1.5rem;}.p-2\\.5{padding:0.625rem;}.p-2{padding:0.5rem;}.p-3{padding:0.75rem;}.py-6{padding-top:1.5rem;padding-bottom:1.5rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.px-10{padding-left:2.5rem;padding-right:2.5rem;}.px-4{padding-left:1rem;padding-right:1rem;}.py-10{padding-top:2.5rem;padding-bottom:2.5rem;}.pr-6{padding-right:1.5rem;}.pl-10{padding-left:2.5rem;}.pt-4{padding-top:1rem;}.pb-2{padding-bottom:0.5rem;}.pl-3{padding-left:0.75rem;}.pl-2{padding-left:0.5rem;}.text-center{text-align:center;}.text-xs{font-size:0.75rem;line-height:1rem;}.text-4xl{font-size:2.25rem;line-height:2.5rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-base{font-size:1rem;line-height:1.5rem;}.font-medium{font-weight:500;}.font-bold{font-weight:700;}.capitalize{text-transform:capitalize;}.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}.text-grey{--tw-text-opacity:1;color:rgba(132, 147, 168, var(--tw-text-opacity));}.text-secondary{--tw-text-opacity:1;color:rgba(0, 153, 168, var(--tw-text-opacity));}.text-coal{--tw-text-opacity:1;color:rgba(42, 42, 72, var(--tw-text-opacity));}.text-graphene{--tw-text-opacity:1;color:rgba(72, 83, 99, var(--tw-text-opacity));}.text-coal60{color:#2a2a4899;}.text-gray-900{--tw-text-opacity:1;color:rgba(17, 24, 39, var(--tw-text-opacity));}.text-black{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));}.text-gray-500{--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity));}.opacity-0{opacity:0;}.opacity-70{opacity:0.7;}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow{--tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.duration-500{transition-duration:500ms;}.duration-300{transition-duration:300ms;}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}.hover\\:bg-smoke30:hover{background-color:#ECECEC4D;}.hover\\:bg-smoke50:hover{background-color:#ECECEC80;}.hover\\:opacity-100:hover{opacity:1;}.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgba(59, 130, 246, var(--tw-border-opacity));}.focus\\:border-focus:focus{--tw-border-opacity:1;border-color:rgba(108, 142, 239, var(--tw-border-opacity));}.focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(59, 130, 246, var(--tw-ring-opacity));}@media (min-width: 768px){.md\\:mx-\\[140px\\]{margin-left:140px;margin-right:140px;}.md\\:hidden{display:none;}.md\\:cursor-pointer{cursor:pointer;}.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.md\\:space-y-0 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0px * var(--tw-space-y-reverse));}.md\\:p-0{padding:0px;}.md\\:px-\\[140px\\]{padding-left:140px;padding-right:140px;}.md\\:hover\\:opacity-100:hover{opacity:1;}}@media (min-width: 976px){.lg\\:relative{position:relative;}.lg\\:inset-y-0{top:0px;bottom:0px;}.lg\\:left-20{left:5rem;}.lg\\:right-0{right:0px;}.lg\\:row-start-auto{grid-row-start:auto;}.lg\\:mx-\\[140px\\]{margin-left:140px;margin-right:140px;}.lg\\:mr-0{margin-right:0px;}.lg\\:mb-0{margin-bottom:0px;}.lg\\:ml-0{margin-left:0px;}.lg\\:block{display:block;}.lg\\:flex{display:flex;}.lg\\:hidden{display:none;}.lg\\:h-auto{height:auto;}.lg\\:w-1\\/4{width:25%;}.lg\\:w-3\\/4{width:75%;}.lg\\:w-1\\/3{width:33.333333%;}.lg\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr));}.lg\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.lg\\:flex-row{flex-direction:row;}.lg\\:justify-center{justify-content:center;}.lg\\:gap-10{gap:2.5rem;}.lg\\:gap-16{gap:4rem;}.lg\\:p-0{padding:0px;}.lg\\:px-\\[140px\\]{padding-left:140px;padding-right:140px;}.lg\\:font-bold{font-weight:700;}.lg\\:uppercase{text-transform:uppercase;}}",""]),r.locals={},e.exports=r},82:function(e,t,n){"use strict";n.r(t);var r=n(26),o={name:"Button",props:["text","padding","width","icon","type"]},l=n(5),component=Object(l.a)(o,(function(){var e,t=this,n=t._self._c;return n("button",{staticClass:"bg-primary p-4 rounded text-white flex items-center justify-center",class:(e={},Object(r.a)(e,t.padding,t.padding),Object(r.a)(e,t.width,t.width),e),attrs:{type:t.type}},[t.icon?n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:t.icon}}):t._e(),t._v("\n  "+t._s(t.text)+"\n")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:n(82).default})}},[[206,20,1,21]]]);