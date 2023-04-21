(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{120:function(t,e,s){"use strict";s.r(e),s.d(e,"colorNames",(function(){return r})),s.d(e,"colors",(function(){return i})),s.d(e,"searchSorted",(function(){return o})),s.d(e,"colorToRGBA",(function(){return a})),s.d(e,"byteToHex",(function(){return n})),s.d(e,"hexStringToNumber",(function(){return c})),s.d(e,"colorToHex",(function(){return l})),s.d(e,"colorAnyToHex",(function(){return h})),s.d(e,"rgbToHex",(function(){return d})),s.d(e,"colorAnyToHexNumber",(function(){return f})),s.d(e,"commonJson",(function(){return p})),s.d(e,"copyClipboard",(function(){return g})),s.d(e,"pasteClipboard",(function(){return m})),s.d(e,"intersectionOverUnion",(function(){return y})),s.d(e,"isEqual",(function(){return w})),s.d(e,"shuffle",(function(){return v})),s.d(e,"RegBlob",(function(){return O})),s.d(e,"BlobExtractor2d",(function(){return A})),s.d(e,"convertIndexToDict",(function(){return T})),s.d(e,"simplify",(function(){return j})),s.d(e,"checkPathExists",(function(){return R}));const r={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rebeccapurple:"663399",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},i=["red","blue","green","yellow","pink","purple","orange","cyan"];function o(t,e){for(let s=0;s<t.length;s++)if(e<t[s])return s;return t.length}function a(t){const e=document.createElement("canvas");e.height=1,e.width=1;const s=e.getContext("2d");return s.fillStyle=t,s.fillRect(0,0,1,1),s.getImageData(0,0,1,1).data}function n(t){return("0"+t.toString(16)).slice(-2)}function c(t){return parseInt(t,16)}function l(t){const e=a(t);return"#"+[0,1,2].map(t=>n(e[t])).join("")}function h(t){const e=r[t];return e||(t.startsWith("#")?t.slice(1):"")}function u(t){const e=t.toString(16);return 1===e.length?"0"+e:e}function d(t,e,s){return u(t)+u(e)+u(s)}function f(t){let e=r[t];return e?(3===e.length&&(e=e.split("").map(t=>t+t).join("")),parseInt(e,16)):t.startsWith("#")?(3===(t=t.slice(1)).length&&(t=t.split("").map(t=>t+t).join("")),parseInt(t,16)):0}function p(t){if(0===t.length)return;if(1===t.length)return t[0];const e=JSON.parse(JSON.stringify(t)).shift();return function(t){const e=[];return function t(s,r){if(Array.isArray(s))e.push(r.join("."));else if(s&&"object"==typeof s){var i=Object.keys(s);i.length&&i.forEach(e=>{t(s[e],r.concat(e))})}else e.push(r.join("."))}(t,[]),e}(e).forEach(s=>{const r=s.split(".").reduce((t,e)=>t&&t.hasOwnProperty(e)?t[e]:null,e);for(const i of t){const t=s.split(".").reduce((t,e)=>t&&t.hasOwnProperty(e)?t[e]:null,i);if(!t||JSON.stringify(t)!==JSON.stringify(r)){b(e,s);break}}}),e}function b(t,e){if(t&&e){"string"==typeof e&&(e=e.split("."));for(let s=0;s<e.length-1;s++)if(void 0===(t=t[e[s]]))return;delete t[e.pop()]}}function g(t){navigator.clipboard.writeText(t).then(()=>{},()=>{})}function m(){return navigator.clipboard.readText()}function y(t,e){const s=Math.min(t[0],t[2]),r=Math.min(t[1],t[3]),i=Math.max(t[0],t[2]),o=Math.max(t[1],t[3]),a=Math.min(e[0],e[2]),n=Math.min(e[1],e[3]),c=Math.max(e[0],e[2]),l=Math.max(e[1],e[3]),h=(o-r)*(i-s),u=(l-n)*(c-a);if(h<=0||u<=0)return 0;const d=Math.max(r,n),f=Math.max(s,a),p=Math.min(o,l),b=Math.min(i,c),g=Math.max(p-d,0)*Math.max(b-f,0);return g/(h+u-g)}const w=(t,e)=>{const s=Object.prototype.toString.call(t);if(s!==Object.prototype.toString.call(e))return!1;if(["[object Array]","[object Object]"].indexOf(s)<0)return!1;const r="[object Array]"===s?t.length:Object.keys(t).length;if(r!==("[object Array]"===s?e.length:Object.keys(e).length))return!1;const i=(t,e)=>{const s=Object.prototype.toString.call(t);if(["[object Array]","[object Object]"].indexOf(s)>=0){if(!w(t,e))return!1}else{if(s!==Object.prototype.toString.call(e))return!1;if("[object Function]"===s){if(t.toString()!==e.toString())return!1}else if(t!==e)return!1}return!0};if("[object Array]"===s){for(let s=0;s<r;s++)if(!1===i(t[s],e[s]))return!1}else for(const s in t)if(t.hasOwnProperty(s)&&!1===i(t[s],e[s]))return!1;return!0};function v(t){for(let e=t.length-1;e>0;e--){const s=Math.floor(Math.random()*(e+1));[t[e],t[s]]=[t[s],t[e]]}return t}class O{constructor(t){this.contours=new Array,this.nbPixels=0,this.cls=t}}class A{constructor(t,e,s,r,i){this.withExtrema=!1,this.blobs=new Map,this.width=e,this.height=s,this.augW=e+2,this.augH=s+2,t=t||[];let[o,a,n,c]=[0,0,0,0];i?([o,a,n,c]=i,n-=1,c-=1,this.extrema=[o,a,n,c],this.withExtrema=!0):this.extrema=[0,1,this.augW-1,this.augH-2],this.max=this.augH*this.augW,this.pos=[1,this.augW+1,this.augW,this.augW-1,-1,-this.augW-1,-this.augW,1-this.augW],this.label=new Array(this.width*this.height),this.augData=r||this.addBorders(t),i&&(this.extrema=[o,a+1,n+2,c+1]),this.augLabel=new Array(this.max),this.targetId=0}origPos(t,e){return((t/e|0)-1)*(e-2)+t%e-1}addBorders(t){const e=new Array(this.augW*this.augH),[s,r,i,o]=this.extrema;if(this.withExtrema)for(let a=s;a<=i+2;a++)for(let n=r;n<=o+2;n++){const c=n*this.augW+a;e[c]=a===s||n===r||a===i+2||n===o+2?A.BACKGROUND:t[c-(this.width+2*n+1)]}else for(let s=0;s<this.augW;s++)for(let r=0;r<this.augH;r++){const i=r*this.augW+s;0===s||0===r||s===this.width+1||r===this.height+1?e[i]=A.BACKGROUND:e[i]=t[i-(this.width+2*r+1)]}return e}strPtToPos(t,e){const s=t/this.augW|0,r=(()=>{switch(e){case"tl":return t+s;case"tr":return t+s+1;case"bl":return t+(this.augW+1)+s;default:case"br":return t+(this.augW+1)+s+1}})();return this.origPos(r,this.augW+1)}addPoints(t,e,s,r){const i=new Array;switch(s){case 0:switch(r){case 0:i.push(this.strPtToPos(e,"tr"));break;case 2:i.push(this.strPtToPos(e,"tr")),i.push(this.strPtToPos(e,"br"));break;case 4:i.push(this.strPtToPos(e,"tr")),i.push(this.strPtToPos(e,"br")),i.push(this.strPtToPos(e,"bl"))}break;case 2:switch(r){case 0:break;case 2:i.push(this.strPtToPos(e,"br"));break;case 4:i.push(this.strPtToPos(e,"br")),i.push(this.strPtToPos(e,"bl"));break;case 6:i.push(this.strPtToPos(e,"br")),i.push(this.strPtToPos(e,"bl")),i.push(this.strPtToPos(e,"tl"))}break;case 4:switch(r){case 0:i.push(this.strPtToPos(e,"bl")),i.push(this.strPtToPos(e,"tl")),i.push(this.strPtToPos(e,"tr"));break;case 2:break;case 4:i.push(this.strPtToPos(e,"bl"));break;case 6:i.push(this.strPtToPos(e,"bl")),i.push(this.strPtToPos(e,"tl"))}break;case 6:switch(r){case 0:i.push(this.strPtToPos(e,"tl")),i.push(this.strPtToPos(e,"tr"));break;case 2:i.push(this.strPtToPos(e,"tl")),i.push(this.strPtToPos(e,"tr")),i.push(this.strPtToPos(e,"br"));break;case 4:break;case 6:i.push(this.strPtToPos(e,"tl"))}}return t.points.push(...i),t}tracer(t,e){let s=0;for(;s<8;){const r=(e+s)%8,i=t+this.pos[r];if(!(i<0||i>=this.max)){if(this.augData[i]===this.targetId)return{T:i,q:r};this.augLabel[i]=A.MARKED,8===A.CONNEXITY?s++:s+=2}}return{T:t,q:-1}}contourTracing(t,e,s){let r;r=8===A.CONNEXITY?s?7:3:s?0:2;let i={type:s?"external":"internal",points:new Array};const o=new Set;let a=this.tracer(t,r);const n=a.T;let c=a.q;if(this.augLabel[t]=e,o.add(t),n===t)return 4===A.CONNEXITY&&(i.points.push(this.strPtToPos(t,"tl")),i.points.push(this.strPtToPos(t,"tr")),i.points.push(this.strPtToPos(t,"br")),i.points.push(this.strPtToPos(t,"bl"))),[i,o.size];let l=n,h=n;for(;h!==t||l!==n;)this.augLabel[l]=e,o.has(l)||o.add(l),h=l,r=8===A.CONNEXITY?(c+5)%8:(c+6)%8,a=this.tracer(h,r),4===A.CONNEXITY&&(i=this.addPoints(i,h,c,a.q)),l=a.T,c=a.q;return[i,o.size]}extract(t,e=!1){this.targetId=t;for(let t=this.extrema[0];t<=this.extrema[2];t++)for(let e=this.extrema[1];e<=this.extrema[3];e++){const s=t+e*this.augW;this.augLabel[s]=A.UNSET}let s=0,r=this.extrema[1];do{let t=this.extrema[0];do{const e=r*this.augW+t;if(this.augData[e]===this.targetId){if(this.augData[e-this.augW]!==this.targetId&&this.augLabel[e]===A.UNSET){this.blobs.set(s,new O(s));const[t,r]=this.contourTracing(e,s,!0);this.blobs.get(s).contours.push(t),this.blobs.get(s).nbPixels+=r,s++}if(this.augData[e+this.augW]!==this.targetId&&this.augLabel[e+this.augW]===A.UNSET){let t=this.augLabel[e-1];this.augLabel[e]!==A.UNSET&&(t=this.augLabel[e]);const[s,r]=this.contourTracing(e,t,!1),i=this.blobs.get(t);i&&(i.contours.push(s),i.nbPixels+=r)}if(this.augLabel[e]===A.UNSET){const t=this.augLabel[e-1]||0;this.augLabel[e]=t;const s=this.blobs.get(t);s&&(s.nbPixels+=1)}}}while(t++<=this.extrema[2])}while(r++<=this.extrema[3]);if(e)for(let t=0;t<this.width;t++)for(let e=0;e<this.height;e++){const s=t+e*this.width;this.label[s]=this.augLabel[s+this.width+2*e+3]}}}function T(t,e){return t.map(t=>[t%e/1.01,(t/e|0)/1.01])}function k(t,e){const s=t[0]-e[0],r=t[1]-e[1];return s*s+r*r}function P(t,e,s){let[r,i]=e,o=s[0]-r,a=s[1]-i;if(0!==o||0!==a){const e=((t[0]-r)*o+(t[1]-i)*a)/(o*o+a*a);e>1?(r=s[0],i=s[1]):e>0&&(r+=o*e,i+=a*e)}return o=t[0]-r,a=t[1]-i,o*o+a*a}function x(t,e){const s=t.length-1,r=[t[0]];return function t(e,s,r,i,o){let a=i,n=-1;for(let t=s+1;t<r;t++){const i=P(e[t],e[s],e[r]);i>a&&(n=t,a=i)}a>i&&(n-s>1&&t(e,s,n,i,o),o.push(e[n]),r-n>1&&t(e,n,r,i,o))}(t,0,s,e,r),r.push(t[s]),r}function j(t,e=1,s=!1){if(t.length<=2)return t;const r=e*e;return t=x(t=s?t:function(t,e){let s=t[0];const r=[s];let i=[-1,-1];for(i of t)k(i,s)>e&&(r.push(i),s=i);return s!==i&&r.push(i),r}(t,r),r)}function R(t){const e=new XMLHttpRequest;return e.open("HEAD",t,!1),e.send(),404!==e.status}A.BACKGROUND=null,A.UNSET=-1,A.MARKED=-2,A.CONNEXITY=4},163:function(t,e,s){"use strict";var r=s(2),i=(s(119),s(206),s(254),s(256),s(252),s(260),s(261),function(t,e,s,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,r);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(a=(o<3?i(a):o>3?i(e,s,a):i(e,s))||a);return o>3&&a&&Object.defineProperty(e,s,a),a});let o=class extends r.a{constructor(){super(),this.shortcuts=[["ALT","Switch create/update mode"],["CTRL + [0-9]","Select category by index"],["TAB","Navigate through objects"],["SHIFT + Tab","Navigate through objects (inverse)"],["SHIFT + Click","Multiple selection"],["CTRL + z","Undo"],["CTRL + SHIFT + z","Redo"],["CTRL + s","Save"]],this.showDetail=!1,this.schema={},this.value={category:"",options:{}},this.mem="",this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this)}static get styles(){return[r.b`
        :host {
          -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
             -khtml-user-select: none; /* Konqueror HTML */
               -moz-user-select: none; /* Old versions of Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none; /* Non-prefixed version, currently
                                          supported by Chrome, Opera and Firefox */
        }
        h3 {
          font-size: 14px;
          margin-left: 10px;
        }
        .category {
          height: 40px;
          display: flex;
          align-items: center;
          padding-left: 10px;
        }
        .category:hover {

        }
        .selected {

        }
        span.step {
          background: red;
          border-radius: 0.8em;
         -moz-border-radius: 0.8em;
         -webkit-border-radius: 0.8em;
         color: #ffffff;
         display: inline-block;
         line-height: 1.6em;
         margin-right: 15px;
         text-align: center;
         width: 1.6em;
         margin-left: 10px;
        }
        .category > p {
          margin: 0;
          padding-left: 10px;
        }
        .shortcut {
          position: absolute;
          right: 0px;
          z-index: 1;
        }
        #shortcut-table {
          font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }

        #shortcut-table td, #shortcut-table th {
          border: 1px solid #ddd;
          padding: 8px;
        }

        #shortcut-table tr:nth-child(even){background-color: #f2f2f2;}

        #shortcut-table tr:hover {background-color: #ddd;}

        #shortcut-table th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #4CAF50;
          color: white;
        }
        mwc-select {
            width: 100%;
        }
        mwc-formfield {
          margin: auto;
          width: 70%;
          display: flex;
        }
        `]}get selectedCategory(){return this.schema.category.find(t=>t.name===this.value.category)}getDefaultAttributesForCategory(t,e){var s,r;let i=null===(s=t.category)||void 0===s?void 0:s.find(t=>t.name===e);if(!i&&(null===(r=t.category)||void 0===r?void 0:r.length)&&(i=t.category[0]),i&&i.properties){const t={};return i.properties.forEach(e=>{t[e.name]=e.default}),t}return{}}onKeyDown(t){t.ctrlKey&&t.preventDefault()}onKeyUp(t){const e=t.code.replace("Digit","").replace("Numpad","");if(Number(e)>=0&&Number(e)<=9&&t.ctrlKey&&(t.preventDefault(),this.mem+=e),"Control"===t.key&&""!==this.mem){t.preventDefault();const e=this.schema.category[Number(this.mem)];e&&this.setCategory(e.name),this.mem=""}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}openShortcuts(){this.shadowRoot.querySelector("mwc-dialog").open=!0}getValue(t){return t.composedPath()[0].value}_getList(){try{return this.schema.category.map(t=>t.name)}catch(t){return[]}}_colorFor(t){const e=this.schema.category.find(e=>e.name===t);return e&&e.color||"rgb(0,0,0)"}get defaultValue(){const t=this.getDefaultAttributesForCategory(this.schema,this.value.category);return{category:this.value.category,options:t}}setCategory(t){const e=this.getDefaultAttributesForCategory(this.schema,t);this.value={category:t,options:e},this._notifyUpdate()}setAttributes(t){if(t){t.options=t.options||{};const e=this.getDefaultAttributesForCategory(this.schema,t.category);Object.keys(e).forEach(s=>{t.options.hasOwnProperty(s)?e[s]=JSON.parse(JSON.stringify(t.options[s])):e[s]=""}),this.value={category:t.category,options:e}}}setAttributesIdx(t){if(void 0!==t)this.value={category:this.schema.category.find(e=>e.idx===t).name,options:{}};else{const t=this.getDefaultAttributesForCategory(this.schema,this.schema.default);this.value={category:this.schema.default,options:t}}}get getSchema(){return this.schema}reloadSchema(t){this.schema=t;const e=this.getDefaultAttributesForCategory(t,t.default);this.value={category:t.default,options:e}}_notifyUpdate(){this.dispatchEvent(new Event("update"))}get shortcutsDialog(){return r.e`
        <mwc-dialog>
			<h3>Shortcut list</h3>
			<div>
				<table id="shortcut-table">
					<tr>
						<th>Shortcut</th>
						<th>Description</th>
					</tr>
					${this.shortcuts.map(([t,e])=>r.e`<tr><td>${t}</td><td>${e}</td></tr>`)}
				</table>
			</div>
			<mwc-button
				slot="secondaryAction"
				dialogAction="cancel">OK</mwc-button>
        </mwc-dialog>
        `}firstUpdated(){this.reloadSchema(this.schema)}htmlProp(t){if("dropdown"===t.type)return r.e`
				<mwc-select label="${t.name}" @selected=${e=>{const s=e.detail.index;this.value.options[t.name]!==t.enum[s]&&(this.value.options[t.name]=t.enum[s],this._notifyUpdate())}}>
					${t.enum.map(e=>r.e`<mwc-list-item value="${e}" ?selected=${this.value.options[t.name]===e}>${e}</mwc-list-item>`)}
				</mwc-select>
			`;if("checkbox"===t.type){const e=JSON.parse(JSON.stringify(this.value.options[t.name]).toLowerCase());return r.e`
				<mwc-formfield label="${t.name}">
				<mwc-checkbox ?checked=${e} @change=${s=>{const r=s.composedPath()[0];e!==r.checked&&(this.value.options[t.name]=!e,this.value=Object.assign({},this.value),this._notifyUpdate())}}></mwc-checkbox>
				</mwc-formfield>
			`}if("textfield"===t.type){const e=this.value.options[t.name];return r.e`
				<mwc-textfield label="${t.name}" value=${e} @change=${e=>{this.value.options[t.name]=this.getValue(e),this.value=Object.assign({},this.value),this._notifyUpdate()}}></mwc-textfield>
			`}return r.e``}get renderDetail(){var t;return r.e`
			<div id="updateEditor" style="width: 100%;" ?hidden=${!this.showDetail}>
				<h3><label>Selected label</label></h3>
				${null===(t=this.schema.category)||void 0===t?void 0:t.map((t,e)=>r.e`
						<div class="category ${t.name===this.value.category?"selected":""}" id=${t.name} @click=${()=>this.setCategory(t.name)}>
							<span class="step" .style="background: ${this._colorFor(t.name)}">${e}</span><p>${t.name}</p>
						</div>
						${t.properties&&t.name===this.value.category?r.e`${t.properties.map(t=>this.htmlProp(t))}`:r.e``}
					`)}
			</div>`}get renderSimple(){var t;return r.e`
			<div ?hidden=${this.showDetail}>
				<h3><label>Label for creation</label></h3>
				${null===(t=this.schema.category)||void 0===t?void 0:t.map((t,e)=>r.e`
						<div class="category ${t.name===this.value.category?"selected":""}" id=${t.name} @click=${()=>this.setCategory(t.name)}>
							<span class="step" .style="background: ${this._colorFor(t.name)}">${e}</span><p>${t.name}</p>
						</div>`)}
			</div>
		`}render(){return r.e`
			${this.shortcutsDialog}
			<mwc-icon-button class="shortcut" icon="keyboard" @click=${this.openShortcuts}></mwc-icon-button>
			${this.renderDetail}
			${this.renderSimple}
		`}};i([Object(r.g)({type:Array})],o.prototype,"shortcuts",void 0),i([Object(r.g)({type:Boolean})],o.prototype,"showDetail",void 0),i([Object(r.g)({type:Object})],o.prototype,"schema",void 0),i([Object(r.g)({type:Object})],o.prototype,"value",void 0),o=i([Object(r.c)("attribute-picker")],o)},164:function(t,e,s){"use strict";var r=s(11),i=s(313),o=s(2),a=(s(263),s(165)),n={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},c={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"},l=function(t){function e(s){var i=t.call(this,Object(r.a)(Object(r.a)({},e.defaultAdapter),s))||this;return i.hasToggledAriaLabel=!1,i}return Object(r.c)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return n},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return c},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this.adapter.getAttr(c.DATA_ARIA_LABEL_ON),e=this.adapter.getAttr(c.DATA_ARIA_LABEL_OFF);if(t&&e){if(null!==this.adapter.getAttr(c.ARIA_PRESSED))throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(c.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(n.ICON_BUTTON_ON)},e.prototype.toggle=function(t){if(void 0===t&&(t=!this.isOn()),t?this.adapter.addClass(n.ICON_BUTTON_ON):this.adapter.removeClass(n.ICON_BUTTON_ON),this.hasToggledAriaLabel){var e=t?this.adapter.getAttr(c.DATA_ARIA_LABEL_ON):this.adapter.getAttr(c.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(c.ARIA_LABEL,e||"")}else this.adapter.setAttr(c.ARIA_PRESSED,""+t)},e}(a.a),h=s(203),u=s(205),d=s(258);
/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
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
 */
class f extends h.a{constructor(){super(...arguments),this.mdcFoundationClass=l,this.label="",this.disabled=!1,this.onIcon="",this.offIcon="",this.on=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new d.a(()=>(this.shouldRenderRipple=!0,this.ripple))}createAdapter(){return Object.assign(Object.assign({},Object(h.b)(this.mdcRoot)),{getAttr:t=>this.mdcRoot.getAttribute(t),setAttr:(t,e)=>{this.mdcRoot.setAttribute(t,e)},notifyChange:t=>{this.dispatchEvent(new CustomEvent("MDCIconButtonToggle:change",{detail:t,bubbles:!0}))}})}handleClick(){this.on=!this.on,this.mdcFoundation.handleClick()}focus(){this.rippleHandlers.startFocus(),this.mdcRoot.focus()}blur(){this.rippleHandlers.endFocus(),this.mdcRoot.blur()}renderRipple(){return this.shouldRenderRipple?o.e`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}render(){return o.e`
      <button
          class="mdc-icon-button"
          @click="${this.handleClick}"
          aria-label="${this.label}"
          ?disabled="${this.disabled}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderRipple()}
        <span class="mdc-icon-button__icon">
          <slot name="offIcon">
            <i class="material-icons">${this.offIcon}</i>
          </slot>
        </span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on">
          <slot name="onIcon">
            <i class="material-icons">${this.onIcon}</i>
          </slot>
        </span>
      </button>`}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}Object(r.b)([Object(o.h)(".mdc-icon-button")],f.prototype,"mdcRoot",void 0),Object(r.b)([Object(o.g)({type:String})],f.prototype,"label",void 0),Object(r.b)([Object(o.g)({type:Boolean,reflect:!0})],f.prototype,"disabled",void 0),Object(r.b)([Object(o.g)({type:String})],f.prototype,"onIcon",void 0),Object(r.b)([Object(o.g)({type:String})],f.prototype,"offIcon",void 0),Object(r.b)([Object(o.g)({type:Boolean,reflect:!0}),Object(u.a)((function(t){this.mdcFoundation.toggle(t)}))],f.prototype,"on",void 0),Object(r.b)([Object(o.i)("mwc-ripple")],f.prototype,"ripple",void 0),Object(r.b)([Object(o.f)()],f.prototype,"shouldRenderRipple",void 0),Object(r.b)([Object(o.d)({passive:!0})],f.prototype,"handleRippleMouseDown",null),Object(r.b)([Object(o.d)({passive:!0})],f.prototype,"handleRippleTouchStart",null);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
let p=class extends f{};p.styles=i.a,p=Object(r.b)([Object(o.c)("mwc-icon-button-toggle")],p)}}]);