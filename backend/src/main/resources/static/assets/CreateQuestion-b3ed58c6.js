import{F as d,a as v}from"./vee-validate.esm-d85c4787.js";import{c as b,a as g}from"./index.esm-e7038182.js";import{u as h,r as V,o as x,c as S,e as u,b as e,a as n,w as r,d as t,n as k,t as y,y as q}from"./index-224b7266.js";import{w}from"./question-79cd2570.js";import"./_commonjsHelpers-de833af9.js";const C={class:"form-group"},N=e("label",null,"제목",-1),B={class:"invalid-feedback"},F={class:"form-group"},U=e("label",null,"본문",-1),Q={class:"form-group"},$=["disabled"],G={__name:"CreateQuestion",setup(z){const m=b().shape({title:g().required("제목을 작성해주세요.")});let l={};const _=h().user;async function p(i){const o={userNo:_.id,title:i.title,content:i.content,category:"test"};console.log(o),w(o,s=>{console.log(s)},s=>{console.log(s)})}return(i,o)=>{const s=V("router-link");return x(),S("div",null,[u(" 질문 작성 "),e("div",null,[n(t(v),{onSubmit:p,"validation-schema":t(m)},{default:r(({errors:c,isSubmitting:f})=>[e("div",C,[N,n(t(d),{name:"title",modelValue:t(l).title,"onUpdate:modelValue":o[0]||(o[0]=a=>t(l).title=a),type:"text",class:k(["form-control",{"is-invalid":c.title}])},null,8,["modelValue","class"]),e("div",B,y(c.title),1)]),e("div",F,[U,n(t(d),{modelValue:t(l).content,"onUpdate:modelValue":o[1]||(o[1]=a=>t(l).content=a),name:"content",rules:"required"},{default:r(({field:a})=>[e("textarea",q(a,{name:"content"}),null,16)]),_:1},8,["modelValue"])]),e("div",Q,[e("button",{disabled:f},"작성",8,$),n(s,{to:"question"},{default:r(()=>[u("취소하기")]),_:1})])]),_:1},8,["validation-schema"])])])}}};export{G as default};
