_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var a,f=[],s=!1,l=-1;function h(){s&&a&&(s=!1,a.length?f=a.concat(f):l=-1,f.length&&p())}function p(){if(!s){var e=c(h);s=!0;for(var t=f.length;t;){for(a=f,f=[];++l<t;)a&&a[l].run();l=-1,t=f.length}a=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new d(e,t)),1!==f.length||s||c(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},Juyh:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return a}));var r=n("q1tI"),o=n.n(r),i=n("YFqc"),u=n.n(i),c=o.a.createElement;function a(){return c("div",null,c("div",null,"About Page"),c("p",null,"It's NICK btw how's it going? lolz"),c("div",null,"Back to"," ",c(u.a,{href:"/",as:e.env.BACKEND_URL+"/"},c("a",null,"Home"))))}}.call(this,n("8oxB"))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i,u=o(n("q1tI")),c=n("g/15"),a=n("nOHt"),f=n("elyg");var s=new Map,l=window.IntersectionObserver,h={};var p=function(e,t){var n=i||(l?i=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){e.prefetch(t,n,r).catch((function(e){0})),h[t+"%"+n]=!0}function v(e,t,n,r,o,i,u){var a=e.currentTarget,f=a.nodeName,s=a.target;"A"===f&&(s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var t=(0,c.getLocationOrigin)();return new URL(e,t).origin===t}(n)&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}var w=function(e){var t=!1!==e.prefetch,n=u.default.useState(),o=r(n,2),i=o[0],c=o[1],s=(0,a.useRouter)(),w=s&&s.pathname||"/",g=u.default.useMemo((function(){var t=(0,f.resolveHref)(w,e.href);return{href:t,as:e.as?(0,f.resolveHref)(w,e.as):t}}),[w,e.href,e.as]),m=g.href,y=g.as;u.default.useEffect((function(){if(t&&l&&i&&i.tagName&&!h[m+"%"+y])return p(i,(function(){d(s,m,y)}))}),[t,i,m,y,s]);var T=e.children,E=e.replace,b=e.shallow,_=e.scroll;"string"===typeof T&&(T=u.default.createElement("a",null,T));var N=u.Children.only(T),k={ref:function(e){e&&c(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||v(e,s,m,y,E,b,_)}};return t&&(k.onMouseEnter=function(e){N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),d(s,m,y,{priority:!0})}),!e.passHref&&("a"!==N.type||"href"in N.props)||(k.href=(0,f.addBasePath)(y)),u.default.cloneElement(N,k)};t.default=w},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,2,1]]]);