(function(t,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("vue")):typeof define=="function"&&define.amd?define(["vue"],o):(t=typeof globalThis<"u"?globalThis:t||self,t["sohagy-btn"]=o(t.Vue))})(this,function(t){"use strict";const o="",d=(e,n)=>{const s=e.__vccOpts||e;for(const[i,l]of n)s[i]=l;return s},r={name:"SohagyBtn",props:{title:{type:String,default:""},subtitle:{type:String,default:""}},methods:{alert(){alert(`${this.title} - ${this.subtitle}`)}}},c={class:"title"},u={class:"subtitle"};function _(e,n,s,i,l,a){return t.openBlock(),t.createElementBlock("button",{class:"sohagy-btn",onClick:n[0]||(n[0]=(...p)=>a.alert&&a.alert(...p))},[t.createElementVNode("span",c,t.toDisplayString(s.title),1),t.createElementVNode("span",u,t.toDisplayString(s.subtitle),1),t.renderSlot(e.$slots,"default",{},void 0,!0)])}const f=d(r,[["render",_],["__scopeId","data-v-e7cad789"]]);return{install:(e,n)=>{e.component("SohagyBtn",f)}}});