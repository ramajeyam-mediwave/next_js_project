(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{9008:function(e,t,n){e.exports=n(83121)},11876:function(e,t,n){"use strict";n.d(t,{Mt:function(){return Q},Ol:function(){return W},Qd:function(){return H},UQ:function(){return P},on:function(){return F}});var r,o,a=n(67294);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return h(e)}(this,n)}}function v(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var x=d(function e(t){var n=this,r=t.expanded,o=t.allowMultipleExpanded,a=t.allowZeroExpanded;u(this,e),s(this,"expanded",void 0),s(this,"allowMultipleExpanded",void 0),s(this,"allowZeroExpanded",void 0),s(this,"toggleExpanded",function(e){var t;return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter(function(t){return t!==e})}):n.augment({expanded:n.allowMultipleExpanded?[].concat(function(e){if(Array.isArray(e))return y(e)}(t=n.expanded)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||v(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e]):[e]})}),s(this,"isItemDisabled",function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)}),s(this,"isItemExpanded",function(e){return -1!==n.expanded.indexOf(e)}),s(this,"getPanelAttributes",function(e,t){var r=null!=t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!r||void 0}}),s(this,"getHeadingAttributes",function(){return{role:"heading"}}),s(this,"getButtonAttributes",function(e,t){var r=null!=t?t:n.isItemExpanded(e),o=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":o,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}}),s(this,"getPanelId",function(e){return"accordion__panel-".concat(e)}),s(this,"getButtonId",function(e){return"accordion__heading-".concat(e)}),s(this,"augment",function(t){return new e(l({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))}),this.expanded=void 0===r?[]:r,this.allowMultipleExpanded=void 0!==o&&o,this.allowZeroExpanded=void 0!==a&&a}),A=(0,a.createContext)(null),w=function(e){f(n,e);var t=g(n);function n(){var e;u(this,n);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return s(h(e=t.call.apply(t,[this].concat(o))),"state",new x({expanded:e.props.preExpanded,allowMultipleExpanded:e.props.allowMultipleExpanded,allowZeroExpanded:e.props.allowZeroExpanded})),s(h(e),"toggleExpanded",function(t){e.setState(function(e){return e.toggleExpanded(t)},function(){e.props.onChange&&e.props.onChange(e.state.expanded)})}),s(h(e),"isItemDisabled",function(t){return e.state.isItemDisabled(t)}),s(h(e),"isItemExpanded",function(t){return e.state.isItemExpanded(t)}),s(h(e),"getPanelAttributes",function(t,n){return e.state.getPanelAttributes(t,n)}),s(h(e),"getHeadingAttributes",function(){return e.state.getHeadingAttributes()}),s(h(e),"getButtonAttributes",function(t,n){return e.state.getButtonAttributes(t,n)}),e}return d(n,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return(0,a.createElement)(A.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),n}(a.PureComponent);s(w,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var I=function(e){f(n,e);var t=g(n);function n(){var e;u(this,n);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return s(h(e=t.call.apply(t,[this].concat(o))),"renderChildren",function(t){return t?e.props.children(t):null}),e}return d(n,[{key:"render",value:function(){return(0,a.createElement)(A.Consumer,null,this.renderChildren)}}]),n}(a.PureComponent),O=["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"],P=function(e){var t=e.className,n=e.allowMultipleExpanded,r=e.allowZeroExpanded,o=e.onChange,i=e.preExpanded,l=E(e,O);return(0,a.createElement)(w,{preExpanded:i,allowMultipleExpanded:n,allowZeroExpanded:r,onChange:o},(0,a.createElement)("div",p({"data-accordion-component":"Accordion",className:void 0===t?"accordion":t},l)))};(r=o||(o={})).Accordion="Accordion",r.AccordionItem="AccordionItem",r.AccordionItemButton="AccordionItemButton",r.AccordionItemHeading="AccordionItemHeading",r.AccordionItemPanel="AccordionItemPanel";var C=o,D=0,j=a.useId||function(){var e=D;return D+=1,"raa-".concat(e)},S=/[\u0009\u000a\u000c\u000d\u0020]/g;function _(e){return!(""===e||S.test(e))||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var N=(0,a.createContext)(null),M=function(e){var t=e.children,n=e.uuid,r=e.accordionContext,o=e.dangerouslySetExpanded,i=function(){r.toggleExpanded(n)};return(0,a.createElement)(I,null,function(e){var r=null!=o?o:e.isItemExpanded(n),l=e.isItemDisabled(n),u=e.getPanelAttributes(n,o),c=e.getHeadingAttributes(n),d=e.getButtonAttributes(n,o);return(0,a.createElement)(N.Provider,{value:{uuid:n,expanded:r,disabled:l,toggleExpanded:i,panelAttributes:u,headingAttributes:c,buttonAttributes:d}},t)})},T=function(e){return(0,a.createElement)(I,null,function(t){return(0,a.createElement)(M,p({},e,{accordionContext:t}))})},B=function(e){var t=e.children;return(0,a.createElement)(N.Consumer,null,function(e){return e?t(e):null})},k=["uuid","dangerouslySetExpanded","className","activeClassName"],H=function(e){var t,n=e.uuid,r=e.dangerouslySetExpanded,o=e.className,i=void 0===o?"accordion__item":o,l=e.activeClassName,u=E(e,k),c=(function(e){if(Array.isArray(e))return e}(t=(0,a.useState)(j()))||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,l=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){l=!0,r=u}finally{try{i||null==o.return||o.return()}finally{if(l)throw r}}return a}}(t,1)||v(t,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],d=null!=n?n:c;return _(d.toString()),u.id&&_(u.id),(0,a.createElement)(T,{uuid:d,dangerouslySetExpanded:r},(0,a.createElement)(B,null,function(e){var t=e.expanded;return(0,a.createElement)("div",p({"data-accordion-component":"AccordionItem",className:t&&l?l:i},u))}))};function R(e){var t=function e(t){return t&&(t.matches('[data-accordion-component="Accordion"]')?t:e(t.parentElement))}(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}H.displayName=C.AccordionItem;var Z={END:"End",ENTER:"Enter",HOME:"Home",SPACE:" ",SPACE_DEPRECATED:"Spacebar",UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight"},L=["toggleExpanded","className"],U=function(e){var t=e.toggleExpanded,n=e.className,r=E(e,L);return r.id&&_(r.id),(0,a.createElement)("div",p({className:void 0===n?"accordion__button":n},r,{role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){var n,r,o,a=e.key;if((a===Z.ENTER||a===Z.SPACE||a===Z.SPACE_DEPRECATED)&&(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(a){case Z.HOME:e.preventDefault(),(n=(R(e.target)||[])[0])&&n.focus();break;case Z.END:e.preventDefault(),(o=(r=R(e.target)||[])[r.length-1])&&o.focus();break;case Z.LEFT:case Z.UP:e.preventDefault(),function(e){var t=R(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case Z.RIGHT:case Z.DOWN:e.preventDefault(),function(e){var t=R(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},F=function(e){return(0,a.createElement)(B,null,function(t){var n=t.toggleExpanded,r=t.buttonAttributes;return(0,a.createElement)(U,p({toggleExpanded:n},e,r))})},V=function(e){f(n,e);var t=g(n);function n(){var e;u(this,n);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return s(h(e=t.call.apply(t,[this].concat(o))),"ref",void 0),s(h(e),"setRef",function(t){e.ref=t}),e}return d(n,[{key:"componentDidUpdate",value:function(){n.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){n.VALIDATE(this.ref)}},{key:"render",value:function(){return(0,a.createElement)("div",p({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw Error("ref is undefined");if(!(1===e.childElementCount&&e.firstElementChild&&"AccordionItemButton"===e.firstElementChild.getAttribute("data-accordion-component")))throw Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”\n\n")}}]),n}(a.PureComponent);s(V,"defaultProps",{className:"accordion__heading","aria-level":3});var W=function(e){return(0,a.createElement)(B,null,function(t){var n=t.headingAttributes;return e.id&&_(e.id),(0,a.createElement)(V,p({},e,n))})};W.displayName=C.AccordionItemHeading;var G=["className","region","id"],Q=function(e){var t=e.className,n=void 0===t?"accordion__panel":t,r=e.region,o=e.id,i=E(e,G);return(0,a.createElement)(B,null,function(e){var t=e.panelAttributes;o&&_(o);var u=l(l({},t),{},{"aria-labelledby":r?t["aria-labelledby"]:void 0});return(0,a.createElement)("div",p({"data-accordion-component":"AccordionItemPanel",className:n},i,u,{role:r?"region":void 0}))})}}}]);