(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();class a extends HTMLTextAreaElement{constructor(){super(),this.default_value=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <style>
      h1 {
        color: red;
        font-size: 3em;
      }
    </style>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
    `,this.setAttribute("spellcheck","false")}init(){this.value=this.default_value}set_value(l){this.value=l}}customElements.define("x-editor",a,{extends:"textarea"});let u=sessionStorage,d=u.getItem("code"),r=document.querySelector(".editor"),f=document.querySelector(".iframe"),m=document.querySelector(".clear"),h=document.querySelector(".save"),p=document.querySelector(".reset");function i(){f.srcdoc=r.value}function y(n,l){let o=document.createElement("a");o.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(l)),o.setAttribute("download",n),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}d?r.set_value(d):r.init();i();r.oninput=function(n){i(),u.setItem("code",r.value)};p.onclick=function(){r.init(),i()};m.onclick=function(){r.value="",i()};h.onclick=function(){y("code.txt",r.value)};
