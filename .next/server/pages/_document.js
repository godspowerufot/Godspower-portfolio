"use strict";(()=>{var e={};e.id=220,e.ids=[220],e.modules={6530:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var s=t(8732),a=t(883),d=t(8133),i=t.n(d);function c(){return(0,s.jsxs)(a.Html,{lang:"en-AU",children:[(0,s.jsx)(a.Head,{}),(0,s.jsxs)("body",{className:"bg-light dark:bg-dark",children:[(0,s.jsx)(i(),{id:"theme-switcher",strategy:"beforeInteractive",children:`
 if (
  localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
  `}),(0,s.jsx)(a.Main,{}),(0,s.jsx)(a.NextScript,{})]})]})}},361:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},2015:e=>{e.exports=require("react")},2326:e=>{e.exports=require("react-dom")},8732:e=>{e.exports=require("react/jsx-runtime")},3873:e=>{e.exports=require("path")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[393,111],()=>t(6530));module.exports=s})();