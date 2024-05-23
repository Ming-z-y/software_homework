;/*!node_modules/amis-ui/lib/node_modules/pdfjs-dist/build/pdf.worker.min.js*/
amis.define('b139730', function(require, exports, module, define) {

  /**
   * amis-ui v6.4.1
   * Copyright 2018-2024 fex
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', { value: true });
  
  var _commonjsHelpers = require('44a05ba');
  var pdf_worker_min = require('8d95e70');
  
  /**
   * @licstart The following is the entire license notice for the
   * JavaScript code in this page
   *
   * Copyright 2023 Mozilla Foundation
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * @licend The above is the entire license notice for the
   * JavaScript code in this page
   */
  
  (function (module, exports) {
  } (pdf_worker_min.pdf_worker_min));
  
  var pdfJSWorkerURL = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(pdf_worker_min.pdf_worker_min.exports);
  
  exports["default"] = pdfJSWorkerURL;
  

});

;/*!node_modules/amis-ui/lib/components/PdfViewer.js*/
amis.define("50af5a3",(function(e,a,n,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=e("68b98b9"),u=e("ac704b9"),i=e("64ea6e0"),o=e("1b48286"),r=e("09ae5b9"),c=e("cd92eda"),f=e("d2712d3"),d=e("b139730");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=s(u),v=e("ac704b9"),g=(v.default||v).createElement;(v.default||v).Fragment,o.pdfjs.GlobalWorkerOptions.workerSrc=d.default;var N=i.themeable((function(e){var a=e.classnames,n=e.className,t=e.loading,u=e.width,i=void 0===u?300:u,d=l.__read(m.default.useState(e.file),2),s=d[0],v=d[1],N=l.__read(m.default.useState(!1),2),b=N[0],_=N[1],p=l.__read(m.default.useState(1),2),P=p[0],h=p[1],w=l.__read(m.default.useState(1),2),S=w[0],k=w[1],y=l.__read(m.default.useState(1),2),C=y[0],L=y[1],V=m.default.useRef(null),I=m.default.useRef();function j(e){var a=P+e;a<=0||a>C||h(a)}function D(e){var a=+e.target.value;isNaN(a)||a<=0||a>C?I.current&&(I.current.value=P+""):h(a)}function F(e){k(S*e)}function x(){return g("div",{className:a("PdfViewer-Loading")},g(f.default,null))}return m.default.useEffect((function(){e.file instanceof ArrayBuffer&&e.file.byteLength>0?v(e.file):v(void 0)}),[e.file]),g("div",{className:a(n,"PdfViewer"),ref:V},!s||t?x():g(m.default.Fragment,null,g("div",{className:a("PdfViewer-Content",{"is-loaded":b})},g(o.Document,{file:s,onLoadSuccess:function(e){var a=e.numPages;_(!0),L(a)},loading:x()},g(o.Page,{className:a("PdfViewer-Content-Page"),pageNumber:P,width:i,height:e.height,loading:x(),noData:g("div",null,"No PDF data"),scale:S,renderTextLayer:!1,renderAnnotationLayer:!1}))),b?g("div",{className:a("PdfViewer-Tool")},g(r.Icon,{className:"icon",icon:"prev",onClick:function(){return j(-1)}}),g(c.default,{className:"page-input",value:P,onBlur:D,ref:I}),g("span",{className:"gap"},"/"),g("span",null,C),g(r.Icon,{className:"icon",icon:"next",onClick:function(){return j(1)}}),g(r.Icon,{className:"icon",icon:"zoom-in",onClick:function(){return F(1.2)}}),g(r.Icon,{className:"icon",icon:"zoom-out",onClick:function(){return F(.8)}})):null))}));a.default=N}));