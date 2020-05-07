(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return i}));var n=r(1),b=(r(0),r(122));const a={title:"GravityParticleSystem"},c={id:"particle/GravityParticleSystem",title:"GravityParticleSystem",description:"## \u6982\u8ff0",source:"@site/docs/particle/GravityParticleSystem.md",permalink:"/feather/docs/particle/GravityParticleSystem",sidebar:"someSidebar",previous:{title:"ParticleSystem",permalink:"/feather/docs/particle/ParticleSystem"},next:{title:"particle.GravityParticle",permalink:"/feather/docs/api/particle.GravityParticle"}},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]}],l={rightToc:p};function i({components:e,...t}){return Object(b.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),Object(b.b)("p",null,"GravityParticleSystem \u662f\u7ee7\u627f\u81ea ParticleSystem \u6269\u5c55\u7684\u91cd\u529b\u7c92\u5b50\u7cfb\u7edf\uff0c\u5728\u8be5\u7cfb\u7edf\u4e2d\u901a\u8fc7\u8bbe\u7f6e\u91cd\u529b\u3001\u901f\u5ea6\u3001\u5f84\u5411\u52a0\u901f\u5ea6\u4ee5\u53ca\u5207\u5411\u52a0\u901f\u5ea6\u5b9e\u73b0\u7c92\u5b50\u4e0d\u540c\u7684\u8fd0\u52a8\u8f68\u8ff9\u3002"),Object(b.b)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),Object(b.b)("p",null,"\u8be5\u7cfb\u7edf\u4e2d\u5927\u90e8\u5206\u7684\u53c2\u6570\u90fd\u662f\u75312\u4e2a\u6570\u503c\u51b3\u5b9a\u7684\uff1a\u57fa\u7840\u503c\u548c\u5dee\u503c\u3002\u7c92\u5b50\u5728\u88ab\u521b\u5efa\u65f6\u7684\u5c5e\u6027\u503c\u662f\u7531\u57fa\u7840\u503c\u52a0\u4e0a\u968f\u673a\u7684\u5dee\u503c\u6d6e\u52a8\u51b3\u5b9a\u7684\uff0c\u5dee\u503c\u7684\u6d6e\u52a8\u5728\u6b63\u8d1f\u5dee\u503c\u4e4b\u95f4\u3002\u4f8b\u5982\uff1a\u7c92\u5b50\u5b58\u6d3b\u65f6\u95f4\u7684\u57fa\u7840\u503c\u662f1000\uff0c\u5dee\u503c\u662f500\uff0c\u90a3\u4e48\u521b\u5efa\u7c92\u5b50\u7684\u65f6\u5019\u7c92\u5b50\u7684\u5b58\u6d3b\u65f6\u95f4\u662f \u57fa\u7840\u503c + \u5dee\u503c ",Object(b.b)("em",{parentName:"p"}," (Math.random() ")," 2 - 1)\uff0c\u4e5f\u5c31\u662f500\u52301500\u4e4b\u95f4\u968f\u673a\u3002"),Object(b.b)("p",null,"\u5c5e\u6027"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private emitterXVariance:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u521d\u59cb\u5750\u6807 x \u5dee\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private emitterYVariance:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u521d\u59cb\u5750\u6807 y \u5dee\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private lifespan:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u5b58\u6d3b\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u53d6\u503c\u8303\u56f4(0,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private lifespanVariance:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u5b58\u6d3b\u65f6\u95f4\u5dee\u503c\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u53d6\u503c\u8303\u56f4(0,Number.MAX_VALUE]\u4e14\u4e0d\u5927\u4e8e lifespan\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private emitAngle:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u51fa\u73b0\u65f6\u7684\u89d2\u5ea6\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private emitAngleVariance:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u51fa\u73b0\u65f6\u7684\u89d2\u5ea6\u5dee\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private speed:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u51fa\u73b0\u65f6\u901f\u5ea6\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private speedVariance:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u51fa\u73b0\u65f6\u901f\u5ea6\u5dee\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private gravityX:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u6c34\u5e73\u91cd\u529b\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private gravityY:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u5782\u76f4\u91cd\u529b\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private radialAcceleration:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u5f84\u5411\u52a0\u901f\u5ea6\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private radialAccelerationVariance:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u5f84\u5411\u52a0\u901f\u5ea6\u5dee\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private tangentialAcceleration:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u5207\u5411\u52a0\u901f\u5ea6\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private tangentialAccelerationVariance:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u5207\u5411\u52a0\u901f\u5ea6\u5dee\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private startSize:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u51fa\u73b0\u65f6\u5927\u5c0f\uff0c\u53d6\u503c\u8303\u56f4(0,Number.MAX_VALUE]\uff0c\u7c92\u5b50\u5c06\u4f1a\u5728\u5b58\u6d3b\u65f6\u95f4\u5185\u7531 startSize \u6162\u6162\u53d8\u4e3a endSize\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private startSizeVariance:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u51fa\u73b0\u65f6\u5927\u5c0f\u5dee\u503c\uff0c\u53d6\u503c\u8303\u56f4(0,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private endSize:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u6d88\u5931\u65f6\u5927\u5c0f\uff0c\u53d6\u503c\u8303\u56f4(0,Number.MAX_VALUE]\uff0c\u7c92\u5b50\u5c06\u4f1a\u5728\u5b58\u6d3b\u65f6\u95f4\u5185\u7531 startSize\u6162\u6162\u53d8\u4e3a endSize\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private endSizeVariance:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u6d88\u5931\u65f6\u5927\u5c0f\u5dee\u503c\uff0c\u53d6\u503c\u8303\u56f4(0,Number.MAX_VALUE]\uff0c\u4e14\u4e0d\u5927\u4e8eendSize\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private startRotation:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u51fa\u73b0\u65f6\u65cb\u8f6c\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\uff0c\u7c92\u5b50\u5c06\u4f1a\u5728\u5b58\u6d3b\u65f6\u95f4\u5185\u7531 startRotation \u6162\u6162\u53d8\u4e3a endRotation\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private startRotationVariance:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u51fa\u73b0\u65f6\u65cb\u8f6c\u503c\u5dee\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private endRotation:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u6d88\u5931\u65f6\u65cb\u8f6c\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\uff0c\u7c92\u5b50\u5c06\u4f1a\u5728\u5b58\u6d3b\u65f6\u95f4\u5185\u7531 startRotation \u6162\u6162\u53d8\u4e3a endRotation\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private endRotationVariance:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u6d88\u5931\u65f6\u65cb\u8f6c\u503c\u5dee\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private startAlpha:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u51fa\u73b0\u65f6\u7684 Alpha \u900f\u660e\u5ea6\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\uff0c\u7c92\u5b50\u5c06\u4f1a\u5728\u5b58\u6d3b\u65f6\u95f4\u5185\u7531 startAlpha \u6162\u6162\u53d8\u4e3a endAlpha\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private startAlphaVariance:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u51fa\u73b0\u65f6\u7684 Alpha \u900f\u660e\u5ea6\u5dee\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private endAlpha:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u6d88\u5931\u65f6\u7684 Alpha \u900f\u660e\u5ea6\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\uff0c\u7c92\u5b50\u5c06\u4f1a\u5728\u5b58\u6d3b\u65f6\u95f4\u5185\u7531 startAlpha \u6162\u6162\u53d8\u4e3a endAlpha\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," private endAlphaVariance:number; ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u6d88\u5931\u65f6\u7684 Alpha \u900f\u660e\u5ea6\u5dee\u503c\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE]\n")),Object(b.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," constructor(texture:egret.Texture, config:any) ")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u6784\u9020\u51fd\u6570  @param texture {egret.Texture} \u7c92\u5b50\u7eb9\u7406  @param config {any} \u7c92\u5b50\u5c5e\u6027\u914d\u7f6e\uff0c\u5305\u542b\u91cd\u529b\u7cfb\u7edf\u6240\u9700\u8981\u7684\u5404\u9879\u5c5e\u6027\u503c\n")))}i.isMDXComponent=!0},122:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return j}));var n=r(0),b=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,b=function(e,t){if(null==e)return{};var r,n,b={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(b[r]=e[r]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(b[r]=e[r])}return b}var i=b.a.createContext({}),u=function(e){var t=b.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},m=function(e){var t=u(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=u(r),O=n,j=m["".concat(c,".").concat(O)]||m[O]||o[O]||a;return r?b.a.createElement(j,p({ref:t},i,{components:r})):b.a.createElement(j,p({ref:t},i))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=O;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<a;i++)c[i]=r[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);