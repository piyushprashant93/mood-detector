(this["webpackJsonpmood-dector"]=this["webpackJsonpmood-dector"]||[]).push([[0],{19:function(e,t,n){},27:function(e,t){},28:function(e,t){},29:function(e,t){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),c=n(13),o=n.n(c),i=(n(19),n(6)),s=n.n(i),d=n(10),u=n(14),f=n(2),l=(n(31),n(3));var g=function(){var e=640,t=Object(r.useState)(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Object(r.useRef)(),i=Object(r.useRef)();Object(r.useEffect)((function(){(function(){var e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="/mood-detector/models",c(!0),Promise.all([f.f.tinyFaceDetector.loadFromUri(t),f.f.faceLandmark68Net.loadFromUri(t),f.f.faceRecognitionNet.loadFromUri(t),f.f.faceExpressionNet.loadFromUri(t),f.f.ageGenderNet.loadFromUri(t)]).then((function(){return g()}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g=function(){window.navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,window.navigator.getUserMedia({video:!0,audio:!1},(function(e){return o.current.srcObject=e}),(function(e){return console.log(e)}))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{children:a?"Initializing":"Ready"}),Object(l.jsxs)("div",{className:"flex justify-center",children:[Object(l.jsx)("video",{ref:o,autoPlay:!0,muted:!0,height:480,width:e,onPlay:function(){i.current.innerHTML=f.b(o.current);var t={width:e,height:480};f.e(i.current,t),a&&c(!1),setInterval(Object(d.a)(s.a.mark((function n(){var r,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.c(o.current,new f.a).withFaceLandmarks().withFaceExpressions().withAgeAndGender();case 2:r=n.sent,a=f.g(r,t),i.current.getContext("2d").clearRect(0,0,e,e),f.d.drawDetections(i.current,a),f.d.drawFaceLandmarks(i.current,a),f.d.drawFaceExpressions(i.current,a),a.forEach((function(e){var t=e.detection.box;new f.d.DrawBox(t,{label:Math.round(e.age)+" year old "+e.gender}).draw(i.current)}));case 9:case"end":return n.stop()}}),n)}))),100)}}),Object(l.jsx)("canvas",{ref:i,className:"position-absolute"})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.09639a45.chunk.js.map