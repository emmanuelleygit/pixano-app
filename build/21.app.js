(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{114:function(e,t,s){"use strict";s.d(t,"b",(function(){return h})),s.d(t,"a",(function(){return c}));var i=s(207),o=s(100),n=s(113),r=s(262),a=s(265);class h extends a.a{constructor(e={}){super(e),this.cachedShape=null,this.activeObjectId="",this.isDragging=!1,this.isScaling=!1,this._changed=!1,this.initialControlIdx=-1,this.activeControlIdx=-1,this.previousPos={x:0,y:0},this.observer=null,this.renderer=e.renderer||new i.a,this.targetShapes=e.targetShapes||new o.b,this.graphics=e.graphics||new Set,this.observer=(e,t)=>{switch(e){case"set":this.graphics.forEach(e=>{e.state="none",this.setShapeInteraction(e),e.draw()}),(t=Array.isArray(t)?t:[t]).forEach(e=>{const t=this.getGraphic(e);t.state="box",this.setShapeInteraction(t),t.draw()});break;case"add":(t=Array.isArray(t)?t:[t]).forEach(e=>{const t=this.getGraphic(e);t.state="box",this.setShapeInteraction(t),t.draw()});break;case"delete":{const e=this.getGraphic(t);e.state="none",this.setShapeInteraction(e),e.draw();break}case"clear":this.graphics.forEach(e=>{e.state="none",this.setShapeInteraction(e),e.draw()})}},this.bindings()}set changed(e){if(this._changed=e,e){const e=this.getShape(this.activeObjectId);e&&(this.cachedShape=JSON.parse(JSON.stringify(e)))}else this.cachedShape=null}get changed(){return this._changed}bindings(){this.onRootDown=this.onRootDown.bind(this),this.onObjectDown=this.onObjectDown.bind(this),this.onObjectMove=this.onObjectMove.bind(this),this.onObjectUp=this.onObjectUp.bind(this)}setShapeInteraction(e=null){e&&("box"===e.state?e.controls.forEach((t,s)=>{t.removeAllListeners(),t.on("pointerdown",t=>{t.stopPropagation(),t.idx=s,this.onControlDown(t,e)})}):"none"===e.state&&(e.controls.forEach(e=>{e.removeAllListeners("pointerdown"),e.interactive=!1,e.buttonMode=!1}),e.draw()))}drawDefaultShapesDecoration(e=null){(e?new Set([e]):this.graphics).forEach(e=>{const t=this.targetShapes.has(e.data)?this.targetShapes.size>2?"contour":"box":"none";e.state=t,this.setShapeInteraction(e),e.draw()});const t=this.getFirstGraphic();t&&this.renderer.bringToFront(t)}activate(){Object(o.d)(this.targetShapes,this.observer),this.graphics.forEach(e=>{e.interactive=!0,e.buttonMode=!0,e.on("pointerdown",this.onObjectDown)}),this.drawDefaultShapesDecoration(),this.renderer.stage.interactive=!0,this.renderer.stage.removeListener("pointerdown",this.onRootDown),this.renderer.stage.on("pointerdown",this.onRootDown)}deactivate(){Object(o.e)(this.targetShapes,this.observer),this.graphics.forEach(e=>{e.state="none",this.setShapeInteraction(e),e.interactive=!1,e.buttonMode=!1,e.removeAllListeners()}),this.renderer.stage.removeListener("pointerdown",this.onRootDown)}onRootDown(e){2!==e.data.originalEvent.button&&1!==e.data.originalEvent.button&&this.targetShapes.size&&(this.targetShapes.clear(),this.emitSelection())}onObjectDown(e){const t=e.data.originalEvent.button;if(2===t||1===t)return;const s=e.shape,i=s.id;this.previousPos=this.renderer.getPosition(e.data),this.activeObjectId=i,this.isDragging=!0,this.changed=!1;if(![...this.graphics].find(e=>e.data===s))return;this.renderer.stage.on("pointermove",this.onObjectMove),this.renderer.stage.on("pointerupoutside",this.onObjectUp);this.doObjectSelection(s,e.data.originalEvent.shiftKey)&&this.emitSelection()}doObjectSelection(e,t=!1){const s=new Set(this.targetShapes);return t?this.targetShapes.has(e)?this.targetShapes.delete(e):this.targetShapes.add(e):this.targetShapes.has(e)||(this.targetShapes.clear(),this.targetShapes.add(e)),JSON.stringify([...this.targetShapes])!==JSON.stringify([...s])}onObjectMove(e){const t=e.shape;if(e.data.originalEvent.pressure&&this.isDragging&&this.targetShapes.has(t)){const t=this.renderer.getPosition(e.data);if(t.x===this.previousPos.x&&t.y===this.previousPos.y)return;let s=(t.x-this.previousPos.x)/this.renderer.imageWidth,i=(t.y-this.previousPos.y)/this.renderer.imageHeight;const o=this.globalBounds(),n=1-o[3],r=o[1],a=1-o[2],h=o[0];if(this.renderer.enableOutsideDrawing||(i=Math.min(n,i),i=Math.max(-r,i),s=Math.min(a,s),s=Math.max(-h,s)),0===s&&0===i)return;this.changed||(this.changed=!0),this.targetShapes.forEach(({geometry:e})=>{e.vertices=e.vertices.map((e,t)=>t%2?e+i:e+s)}),this.previousPos=t}}onObjectUp(e){this.isDragging=!1;this.getGraphic(e.shape)&&(this.renderer.stage.removeListener("pointermove",this.onObjectMove),this.renderer.stage.removeListener("pointerupoutside",this.onObjectUp),this.changed&&this.emitUpdate())}emitUpdate(){this.emit("update",[...this.targetShapes].map(e=>e.id))}emitSelection(){this.emit("selection",[...this.targetShapes].map(e=>e.id))}onControlDown(e,t){this.isScaling=!0;const s=e.idx;this.activeControlIdx=s,this.changed=!1,this.initialControlIdx=s,t&&(t.controls[this.activeControlIdx].on("pointermove",e=>{e.stopPropagation(),e.idx=this.activeControlIdx,this.onControlMove(e)}),t.controls[this.activeControlIdx].on("pointerupoutside",e=>{e.stopPropagation(),this.onControlUp(t)}))}onControlMove(e){if(this.isScaling&&e.idx===this.activeControlIdx){this.changed||(this.changed=!0);let t=1,s=0,i=1,o=0;[t,i,s,o]=this.globalBounds();const r=this.renderer.getPosition(e.data);let a=r.x/this.renderer.imageWidth,h=r.y/this.renderer.imageHeight;a=Math.min(1,Math.max(0,a)),h=Math.min(1,Math.max(0,h)),[t,i,s,o]=this.globalBounds();let c=1,d=1,l=1,p=1,g=1,u=1;if(.5!==n.a[this.activeControlIdx].x&&(l=t+Math.abs(n.a[this.activeControlIdx].x-1)*(s-t),g=t+n.a[this.activeControlIdx].x*(s-t),c=(a-l)/(g-l)),.5!==n.a[this.activeControlIdx].y&&(p=i+Math.abs(n.a[this.activeControlIdx].y-1)*(o-i),u=i+n.a[this.activeControlIdx].y*(o-i),d=(h-p)/(u-p)),0===c||0===d)return;(c<0||d<0)&&(c<=0&&(this.activeControlIdx=n.a.findIndex(e=>e.y===n.a[this.activeControlIdx].y&&e.x===Math.abs(n.a[this.activeControlIdx].x-1))),d<=0&&(this.activeControlIdx=n.a.findIndex(e=>e.x===n.a[this.activeControlIdx].x&&e.y===Math.abs(n.a[this.activeControlIdx].y-1)))),this.targetShapes.forEach(e=>{if(c<0||d<0){const t=e.geometry.vertices;let s=[];for(let e=t.length-2;e>=0;e-=2){const i=c<0?t[e]:t[t.length-2-e],o=d<0?t[e+1]:t[t.length-1-e];s=s.concat([i,o])}e.geometry.vertices=s}e.geometry.vertices=[...e.geometry.vertices.map((e,t)=>t%2==0&&1!==c?(e-l)*c+l:t%2==1&&1!==d?(e-p)*d+p:e)]})}}onControlUp(e){-1!==this.initialControlIdx&&e&&(e.controls[this.initialControlIdx].removeAllListeners("pointermove"),e.controls[this.initialControlIdx].removeAllListeners("pointerupoutside"),this.isScaling=!1,this.activeControlIdx=-1,this.initialControlIdx=-1,this.changed&&(this.changed=!1,this.emitUpdate()))}globalBounds(){let e=1,t=1,s=0,i=0;return this.targetShapes.forEach(o=>{const n=Object(r.a)(o.geometry.vertices);n[0]<e&&(e=n[0]),n[2]>s&&(s=n[2]),n[1]<t&&(t=n[1]),n[3]>i&&(i=n[3])}),[e,t,s,i]}getGraphic(e){let t=[...this.graphics].find(t=>t.data===e);return t||(t=[...this.graphics].find(t=>t.data.id===e.id)),t}getFirstGraphic(){const e=this.targetShapes.values().next().value;return e?[...this.graphics].find(t=>t.data===e):null}getShape(e){return[...this.targetShapes].find(t=>t.id===e)}}class c extends a.a{constructor(e={}){super(e),this.cross=new n.b,this.tmpShape=null,this.isCreating=!1,this.mouse={x:0,y:0},this.observer=null,this.id=Math.random().toString(36).substring(2),this.renderer=e.renderer||new i.a,this._shapes=e._shapes||new o.b,this.targetShapes=e.targetShapes||new o.b,this.graphics=e.graphics||new Set,this.renderer.stage.addChild(this.cross),this.observer=()=>{this.graphics.forEach(e=>{e.state=this.getShape(e.data.id)?"contour":"none",e.draw()})},this.bindings(),this.onImageSizeChange=()=>{const e=this.renderer.mouse;this.cross.cx=e.x,this.cross.cy=e.y,this.cross.scaleX=this.renderer.imageWidth,this.cross.scaleY=this.renderer.imageHeight,this.cross.draw()}}bindings(){console.log("bindings"),this.onRootMove=this.onRootMove.bind(this),this.onRootDown=this.onRootDown.bind(this),this.onRootUp=this.onRootUp.bind(this)}activate(){Object(o.d)(this.targetShapes,this.observer),this.cross.visible=!0;const e=this.renderer.mouse;this.cross.cx=e.x,this.cross.cy=e.y,this.cross.scaleX=this.renderer.imageWidth,this.cross.scaleY=this.renderer.imageHeight,this.cross.draw(),this.renderer.stage.on("pointerdown",this.onRootDown),this.renderer.stage.on("pointermove",this.onRootMove),this.renderer.stage.on("pointerupoutside",this.onRootUp),this.renderer.addEventListener("resize",this.onImageSizeChange)}deactivate(){Object(o.e)(this.targetShapes,this.observer),this.cross.visible=!1;const e=this.tmpShape;e&&(this.renderer.stage.removeChild(e),e.destroy(),this.tmpShape=null),this.renderer.stage.removeListener("pointerdown",this.onRootDown),this.renderer.stage.removeListener("pointermove",this.onRootMove),this.renderer.stage.removeListener("pointerupoutside",this.onRootUp),this.renderer.removeEventListener("resize",this.onImageSizeChange)}emitCreate(){console.log("emitcreate");const e=[...this._shapes].pop();this.targetShapes.set([e]),this.emit("create",e)}emitSelection(){console.log("emitselection"),this.emit("selection",[...this.targetShapes].map(e=>e.id))}emitUpdate(){console.log("emitupdate"),this.dispatchEvent(new Event("update"))}onRootMove(e){const t=e.data.originalEvent;if(2===t.buttons||4===t.buttons)return;const s=this.renderer.getPosition(e.data);s.x===this.cross.cx&&s.y===this.cross.cy||(this.cross.scaleX=this.renderer.imageWidth,this.cross.scaleY=this.renderer.imageHeight,this.cross.cx=s.x,this.cross.cy=s.y,this.cross.draw())}onRootUp(e){console.log("OnRootUp")}getGraphic(e){console.log("graphic");let t=[...this.graphics].find(t=>t.data===e);return t||(t=[...this.graphics].find(t=>t.data.id===e.id)),t}getShape(e){return console.log("shape"),[...this.targetShapes].find(t=>t.id===e)}}},145:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var i=s(2),o=s(12);
/**
 * Common plugin style
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
const n=i.b`
    :host {
        height: 100%;
        display: flex;
        flex-direction: row;
    }
    .drawer {
        background: #333;
        padding: 10px 0px 0px;
        margin: 0;
        flex-direction: column;
        display: flex;
        flex: 0 0 var(--leftPanelWidth);
    }
    .editor {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: 100px;
    }
    .properties-panel {
        flex: 0 0 300px;
        background: var(--theme-color);
        overflow: auto;
        color: var(--font-color);
    }      
    mwc-icon-button,
    mwc-icon-button-toggle {
        color: #6d6d6d;
    }
    mwc-icon-button:hover,
    mwc-icon-button-toggle:hover {
        color: white;
    }
    mwc-icon-button[selected] {
        color: white;
    }
`;
/**
 * Template of plugin page to inherit if you want to create
 * your own plugin.
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/class r extends i.a{static get styles(){return n}static get properties(){return{mode:{type:String}}}firstUpdated(){this.dispatchEvent(new Event("ready"))}onActivate(){this.initDisplay&&this.initDisplay(),this.newData()}initDisplay(){const e=Object(o.b)("application").tasks,t=Object(o.b)("application").taskName,s=e.find(e=>e.name===t);this.attributePicker&&s&&this.attributePicker.reloadSchema(s.spec.label_schema)}get info(){return Object(o.b)("application")}get annotations(){return Object(o.a)().annotations}newData(){const e=Object(o.b)("media").info.path;this.element.input=e,this.element.addEventListener("load",()=>{this.refresh()})}_colorFor(e){return this.attributePicker._colorFor(e)}onModeChange(){this.element&&(this.mode=this.element.mode)}get attributePicker(){return this.shadowRoot.querySelector("attribute-picker")}get element(){return this.shadowRoot.getElementById("main")}render(){return i.e`
        <div class="drawer">${this.toolDrawer}</div>
        <div class="editor">${this.editor}</div>
        <div class="properties-panel">${this.propertyPanel}</div>
    `}}customElements.define("template-plugin",r)},163:function(e,t,s){"use strict";var i=s(2),o=(s(119),s(206),s(254),s(256),s(252),s(260),s(261),function(e,t,s,i){var o,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,s,r):o(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r});let n=class extends i.a{constructor(){super(),this.shortcuts=[["ALT","Switch create/update mode"],["CTRL + [0-9]","Select category by index"],["TAB","Navigate through objects"],["SHIFT + Tab","Navigate through objects (inverse)"],["SHIFT + Click","Multiple selection"],["CTRL + z","Undo"],["CTRL + SHIFT + z","Redo"],["CTRL + s","Save"]],this.showDetail=!1,this.schema={},this.value={category:"",options:{}},this.mem="",this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this)}static get styles(){return[i.b`
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
        `]}get selectedCategory(){return this.schema.category.find(e=>e.name===this.value.category)}getDefaultAttributesForCategory(e,t){var s,i;let o=null===(s=e.category)||void 0===s?void 0:s.find(e=>e.name===t);if(!o&&(null===(i=e.category)||void 0===i?void 0:i.length)&&(o=e.category[0]),o&&o.properties){const e={};return o.properties.forEach(t=>{e[t.name]=t.default}),e}return{}}onKeyDown(e){e.ctrlKey&&e.preventDefault()}onKeyUp(e){const t=e.code.replace("Digit","").replace("Numpad","");if(Number(t)>=0&&Number(t)<=9&&e.ctrlKey&&(e.preventDefault(),this.mem+=t),"Control"===e.key&&""!==this.mem){e.preventDefault();const t=this.schema.category[Number(this.mem)];t&&this.setCategory(t.name),this.mem=""}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}openShortcuts(){this.shadowRoot.querySelector("mwc-dialog").open=!0}getValue(e){return e.composedPath()[0].value}_getList(){try{return this.schema.category.map(e=>e.name)}catch(e){return[]}}_colorFor(e){const t=this.schema.category.find(t=>t.name===e);return t&&t.color||"rgb(0,0,0)"}get defaultValue(){const e=this.getDefaultAttributesForCategory(this.schema,this.value.category);return{category:this.value.category,options:e}}setCategory(e){const t=this.getDefaultAttributesForCategory(this.schema,e);this.value={category:e,options:t},this._notifyUpdate()}setAttributes(e){if(e){e.options=e.options||{};const t=this.getDefaultAttributesForCategory(this.schema,e.category);Object.keys(t).forEach(s=>{e.options.hasOwnProperty(s)?t[s]=JSON.parse(JSON.stringify(e.options[s])):t[s]=""}),this.value={category:e.category,options:t}}}setAttributesIdx(e){if(void 0!==e)this.value={category:this.schema.category.find(t=>t.idx===e).name,options:{}};else{const e=this.getDefaultAttributesForCategory(this.schema,this.schema.default);this.value={category:this.schema.default,options:e}}}get getSchema(){return this.schema}reloadSchema(e){this.schema=e;const t=this.getDefaultAttributesForCategory(e,e.default);this.value={category:e.default,options:t}}_notifyUpdate(){this.dispatchEvent(new Event("update"))}get shortcutsDialog(){return i.e`
        <mwc-dialog>
			<h3>Shortcut list</h3>
			<div>
				<table id="shortcut-table">
					<tr>
						<th>Shortcut</th>
						<th>Description</th>
					</tr>
					${this.shortcuts.map(([e,t])=>i.e`<tr><td>${e}</td><td>${t}</td></tr>`)}
				</table>
			</div>
			<mwc-button
				slot="secondaryAction"
				dialogAction="cancel">OK</mwc-button>
        </mwc-dialog>
        `}firstUpdated(){this.reloadSchema(this.schema)}htmlProp(e){if("dropdown"===e.type)return i.e`
				<mwc-select label="${e.name}" @selected=${t=>{const s=t.detail.index;this.value.options[e.name]!==e.enum[s]&&(this.value.options[e.name]=e.enum[s],this._notifyUpdate())}}>
					${e.enum.map(t=>i.e`<mwc-list-item value="${t}" ?selected=${this.value.options[e.name]===t}>${t}</mwc-list-item>`)}
				</mwc-select>
			`;if("checkbox"===e.type){const t=JSON.parse(JSON.stringify(this.value.options[e.name]).toLowerCase());return i.e`
				<mwc-formfield label="${e.name}">
				<mwc-checkbox ?checked=${t} @change=${s=>{const i=s.composedPath()[0];t!==i.checked&&(this.value.options[e.name]=!t,this.value=Object.assign({},this.value),this._notifyUpdate())}}></mwc-checkbox>
				</mwc-formfield>
			`}if("textfield"===e.type){const t=this.value.options[e.name];return i.e`
				<mwc-textfield label="${e.name}" value=${t} @change=${t=>{this.value.options[e.name]=this.getValue(t),this.value=Object.assign({},this.value),this._notifyUpdate()}}></mwc-textfield>
			`}return i.e``}get renderDetail(){var e;return i.e`
			<div id="updateEditor" style="width: 100%;" ?hidden=${!this.showDetail}>
				<h3><label>Selected label</label></h3>
				${null===(e=this.schema.category)||void 0===e?void 0:e.map((e,t)=>i.e`
						<div class="category ${e.name===this.value.category?"selected":""}" id=${e.name} @click=${()=>this.setCategory(e.name)}>
							<span class="step" .style="background: ${this._colorFor(e.name)}">${t}</span><p>${e.name}</p>
						</div>
						${e.properties&&e.name===this.value.category?i.e`${e.properties.map(e=>this.htmlProp(e))}`:i.e``}
					`)}
			</div>`}get renderSimple(){var e;return i.e`
			<div ?hidden=${this.showDetail}>
				<h3><label>Label for creation</label></h3>
				${null===(e=this.schema.category)||void 0===e?void 0:e.map((e,t)=>i.e`
						<div class="category ${e.name===this.value.category?"selected":""}" id=${e.name} @click=${()=>this.setCategory(e.name)}>
							<span class="step" .style="background: ${this._colorFor(e.name)}">${t}</span><p>${e.name}</p>
						</div>`)}
			</div>
		`}render(){return i.e`
			${this.shortcutsDialog}
			<mwc-icon-button class="shortcut" icon="keyboard" @click=${this.openShortcuts}></mwc-icon-button>
			${this.renderDetail}
			${this.renderSimple}
		`}};o([Object(i.g)({type:Array})],n.prototype,"shortcuts",void 0),o([Object(i.g)({type:Boolean})],n.prototype,"showDetail",void 0),o([Object(i.g)({type:Object})],n.prototype,"schema",void 0),o([Object(i.g)({type:Object})],n.prototype,"value",void 0),n=o([Object(i.c)("attribute-picker")],n)},164:function(e,t,s){"use strict";var i=s(11),o=s(313),n=s(2),r=(s(263),s(165)),a={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},h={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"},c=function(e){function t(s){var o=e.call(this,Object(i.a)(Object(i.a)({},t.defaultAdapter),s))||this;return o.hasToggledAriaLabel=!1,o}return Object(i.c)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return h},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this.adapter.getAttr(h.DATA_ARIA_LABEL_ON),t=this.adapter.getAttr(h.DATA_ARIA_LABEL_OFF);if(e&&t){if(null!==this.adapter.getAttr(h.ARIA_PRESSED))throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(h.ARIA_PRESSED,String(this.isOn()))},t.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},t.prototype.isOn=function(){return this.adapter.hasClass(a.ICON_BUTTON_ON)},t.prototype.toggle=function(e){if(void 0===e&&(e=!this.isOn()),e?this.adapter.addClass(a.ICON_BUTTON_ON):this.adapter.removeClass(a.ICON_BUTTON_ON),this.hasToggledAriaLabel){var t=e?this.adapter.getAttr(h.DATA_ARIA_LABEL_ON):this.adapter.getAttr(h.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(h.ARIA_LABEL,t||"")}else this.adapter.setAttr(h.ARIA_PRESSED,""+e)},t}(r.a),d=s(203),l=s(205),p=s(258);
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
class g extends d.a{constructor(){super(...arguments),this.mdcFoundationClass=c,this.label="",this.disabled=!1,this.onIcon="",this.offIcon="",this.on=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new p.a(()=>(this.shouldRenderRipple=!0,this.ripple))}createAdapter(){return Object.assign(Object.assign({},Object(d.b)(this.mdcRoot)),{getAttr:e=>this.mdcRoot.getAttribute(e),setAttr:(e,t)=>{this.mdcRoot.setAttribute(e,t)},notifyChange:e=>{this.dispatchEvent(new CustomEvent("MDCIconButtonToggle:change",{detail:e,bubbles:!0}))}})}handleClick(){this.on=!this.on,this.mdcFoundation.handleClick()}focus(){this.rippleHandlers.startFocus(),this.mdcRoot.focus()}blur(){this.rippleHandlers.endFocus(),this.mdcRoot.blur()}renderRipple(){return this.shouldRenderRipple?n.e`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}render(){return n.e`
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
      </button>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}Object(i.b)([Object(n.h)(".mdc-icon-button")],g.prototype,"mdcRoot",void 0),Object(i.b)([Object(n.g)({type:String})],g.prototype,"label",void 0),Object(i.b)([Object(n.g)({type:Boolean,reflect:!0})],g.prototype,"disabled",void 0),Object(i.b)([Object(n.g)({type:String})],g.prototype,"onIcon",void 0),Object(i.b)([Object(n.g)({type:String})],g.prototype,"offIcon",void 0),Object(i.b)([Object(n.g)({type:Boolean,reflect:!0}),Object(l.a)((function(e){this.mdcFoundation.toggle(e)}))],g.prototype,"on",void 0),Object(i.b)([Object(n.i)("mwc-ripple")],g.prototype,"ripple",void 0),Object(i.b)([Object(n.f)()],g.prototype,"shouldRenderRipple",void 0),Object(i.b)([Object(n.d)({passive:!0})],g.prototype,"handleRippleMouseDown",null),Object(i.b)([Object(n.d)({passive:!0})],g.prototype,"handleRippleTouchStart",null);
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
let u=class extends g{};u.styles=o.a,u=Object(i.b)([Object(n.c)("mwc-icon-button-toggle")],u)},166:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var i=s(2),o=(s(119),s(164),s(168),s(120)),n=s(12),r=s(13),a=(s(163),s(145));
/**
 * Template plugin that handles shape instances
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class h extends a.a{static get properties(){return{...super.properties,selectedIds:{type:Array}}}constructor(){super(),this.mode="create",this.selectedIds=[]}onAttributeChanged(){console.log("On attribute changed");const e=this.attributePicker.value;this.selectedIds.forEach(t=>{const s=[...this.element.shapes].find(e=>e.id===t);s.options=s.options||{},Object.keys(e).forEach(t=>{s[t]=JSON.parse(JSON.stringify(e[t]))}),s.color=this._colorFor(s.category),this.collect()})}refresh(){console.log("Refresh"),this.element&&(this.element.shapes=JSON.parse(JSON.stringify(this.annotations.map(e=>({...e,color:this._colorFor(e.category)})))))}onSelection(e){console.log("On selection"),this.selectedIds=e.detail,this.updateDisplayOfSelectedProperties()}updateDisplayOfSelectedProperties(){if(console.log("updated selected prop"),this.selectedIds&&this.selectedIds.length){const e=this.annotations.filter(e=>this.selectedIds.includes(e.id)),t=Object(o.commonJson)(e);this.attributePicker.setAttributes(t)}}onCreate(e){console.log("On create");const t=e.detail;t.id=Math.random().toString(36),Object.entries(this.attributePicker.defaultValue).forEach(([e,s])=>{t[e]=JSON.parse(JSON.stringify(s))}),this.isSequence&&(t.timestamp=this.targetFrameIdx),t.color=this._colorFor(t.category),this.collect()}onUpdate(){console.log("On update"),this.collect()}onDelete(){console.log("On delete"),this.collect()}collect(){console.log("collect");const e=[...this.element.shapes].map(({color:e,...t})=>t);n.c.dispatch(Object(r.g)({annotations:e}))}get propertyPanel(){return i.e`
        <attribute-picker ?showDetail=${this.selectedIds.length}
                            @update=${this.onAttributeChanged}></attribute-picker>
    `}get toolDrawer(){return i.e`
          <mwc-icon-button ?selected=${"edit"===this.mode}
                            title="Select/Edit shape"
                            icon="navigation"
                            @click="${()=>this.mode="edit"}">
          </mwc-icon-button>
          <mwc-icon-button ?selected=${"create"===this.mode}
                            icon="add_circle_outline"
                            title="Create"
                            @click="${()=>this.mode="create"}">
          </mwc-icon-button>
          <mwc-icon-button icon="tonality"
						   title="Hide/Show labels"
						   @click="${()=>this.element.toggleLabels()}">
          </mwc-icon-button>
      `}}customElements.define("template-plugin-instance",h)},202:function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var i=s(2),o=s(100),n=s(114),r=s(255),a=s(113);const h=e=>{switch(e.geometry.type){case"rectangle":return new a.g(e);case"polygon":return new a.f(e);case"multi_polygon":return new a.e(e);case"graph":return new a.c(e);default:return new a.g(e)}};var c=function(e,t,s,i){var o,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,s,r):o(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r};let d=class extends r.a{constructor(){super(),this.mode="edit",this.enableOutsideDrawing=!1,this.targetShapes=new o.b,this.graphics=new Set,this.dataToShape=h,this.keyDownHandler=e=>{"Alt"===e.key?this.switchMode():"h"===e.key&&(this.hideLabels=!this.hideLabels)},this._shapes=new o.b,this.viewControls.addEventListener("zoom",()=>{this.renderer.labelLayer.children.forEach(e=>{e.nodeContainer.children.forEach(e=>{e.scale.x=1.5/this.renderer.stage.scale.x,e.scale.y=1.5/this.renderer.stage.scale.y})})}),this.modes={edit:new n.b(Object.assign({},this))},this.renderer.addEventListener("resize",()=>{this.graphics.forEach(e=>{e.scaleX=this.renderer.imageWidth||100,e.scaleY=this.renderer.imageHeight||100,e.draw()})}),this.observeShapeForDisplay(),this.modes[this.mode].activate()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keyDownHandler)}disconnectedCallback(){window.removeEventListener("keydown",this.keyDownHandler),super.disconnectedCallback()}switchMode(){const e=Object.keys(this.modes),t=e.findIndex(e=>e===this.mode);this.mode=e[(t+1)%e.length]}get selectedShapeIds(){return[...this.targetShapes.values()].map(e=>e.id)}set selectedShapeIds(e){const t=[...this.shapes].filter(t=>e.includes(t.id));this.targetShapes.set(t)}get selectedShapes(){return[...this.targetShapes]}get shapes(){return this._shapes}set shapes(e){this._shapes.set(e.map(o.c))}onCopy(){if(this.targetShapes.size)return JSON.stringify([...this.targetShapes])}onPaste(e){const t=JSON.parse(e);t instanceof Array&&t.forEach(e=>{const t=Object(o.c)(Object.assign(Object.assign({},e),{id:Math.random().toString(36)}));this.shapes.add(t),this.notifyCreate(t)})}observeShapeForDisplay(){Object(o.d)(this._shapes,(e,t)=>{var s;switch(e){case"set":case"add":t=[t],"set"===e&&(this.renderer.clearLabels(),this.graphics.clear(),t=this._shapes),t.forEach(e=>{const t=this.dataToShape(e);this.graphics.add(t),t.scaleX=this.renderer.imageWidth||100,t.scaleY=this.renderer.imageHeight||100,this.renderer.labelLayer.addChild(t),t.draw()}),null===(s=this.modes[this.mode])||void 0===s||s.reset();break;case"delete":{const e=[...this.graphics].find(({data:e})=>e===t);e&&(this.graphics.delete(e),this.renderer.labelLayer.removeChild(e),this.targetShapes.clear());break}case"clear":this.renderer.clearLabels(),this.targetShapes.size&&this.targetShapes.clear()}})}keyBinding(e){super.keyBinding(e);switch(e.key){case"Delete":{const e=this.selectedShapeIds;[...this.targetShapes].forEach(e=>{this.shapes.delete(e)}),this.notifyDelete(e);break}case"Escape":this.targetShapes.clear(),this.notifySelection(this.selectedShapeIds)}}setController(e,t){var s;return null===(s=this.modes[e])||void 0===s||s.deactivate(),this.modes[e]=t,this}setMode(e,t){var s;e!==t&&(e=null===e?"edit":e,this.modes[e]&&this.modes[e].deactivate(),null===(s=this.modes[t])||void 0===s||s.activate(),this.mode=t,this.notifyMode())}onTabulation(e){if("create"===this.mode)return;e.preventDefault();const t=[...this.shapes.values()],s=t.findIndex(e=>this.targetShapes.has(e))||0,i=t[e.shiftKey?(s-1+t.length)%t.length:(s+1+t.length)%t.length];i&&(this.targetShapes.set([i]),this.notifySelection(this.selectedShapeIds))}updated(e){if(super.updated(e),e.has("mode")&&this.mode){const t=e.get("mode");this.setMode(t,this.mode)}e.has("enableOutsideDrawing")&&(this.renderer.enableOutsideDrawing=this.enableOutsideDrawing),e.has("hideLabels")&&!0===this.hideLabels&&(this.targetShapes.clear(),this.notifySelection([]))}notifyUpdate(e){this.dispatchEvent(new CustomEvent("update",{detail:e}))}notifyMode(){this.dispatchEvent(new CustomEvent("mode",{detail:this.mode}))}notifySelection(e){this.dispatchEvent(new CustomEvent("selection",{detail:e}))}notifyCreate(e){this.dispatchEvent(new CustomEvent("create",{detail:e}))}notifyDelete(e){this.dispatchEvent(new CustomEvent("delete",{detail:e}))}};c([Object(i.g)({type:String})],d.prototype,"mode",void 0),c([Object(i.g)({type:Boolean})],d.prototype,"enableOutsideDrawing",void 0),d=c([Object(i.c)("pxn-canvas-2d")],d)},267:function(e,t,s){"use strict";s.d(t,"b",(function(){return n.b})),s.d(t,"a",(function(){return g}));var i=s(2),o=s(202),n=s(268),r=s(100),a=s(167),h=s(114),c=s(113);class d extends h.b{constructor(){super(...arguments),this.activeNodeIdx=-1,this.isNodeTranslating=!1,this.nodeText=new a.k("",{fontFamily:"Arial",fontSize:36,fill:"#ffffff",strokeThickness:5})}bindings(){super.bindings(),this.onNodeDown=this.onNodeDown.bind(this),this.onNodeHover=this.onNodeHover.bind(this),this.onNodeOut=this.onNodeOut.bind(this)}activate(){super.activate(),this.graphics.forEach(e=>{e instanceof c.c&&(e.interactive=!0,e.buttonMode=!0,e.on("pointerdown",this.onObjectDown.bind(this)),e.state="none")}),this.renderer.stage.interactive=!0,this.renderer.stage.addChild(this.nodeText),this.renderer.stage.on("pointerdown",this.onRootDown),this.drawDefaultShapesDecoration()}deactivate(){super.deactivate(),this.renderer.stage.removeChild(this.nodeText)}toggle(e){return e instanceof c.c?(e.draw(),e):e}setShapeInteraction(e=null){super.setShapeInteraction(e),e instanceof c.c&&(e.onNode("pointerdown",this.onNodeDown),n.b.showVertexName&&(e.onNode("pointerover",this.onNodeHover),e.onNode("pointerout",this.onNodeOut)),e.draw())}onNodeDown(e){const t=e.data.originalEvent,s=e.nodeIdx,i=e.shape;if(this.targetShapes.has(i)||(this.targetShapes.clear(),this.targetShapes.add(i)),t.ctrlKey&&1===t.buttons){const e=this.targetShapes.values().next().value;e.geometry.visibles[s]=!e.geometry.visibles[s],e.geometry.visibles[s]?this.nodeText.text=n.b.vertexNames[s]:this.nodeText.text=n.b.vertexNames[s]+" (hidden)",this.emitUpdate()}else{this.activeNodeIdx=s,this.isNodeTranslating=!0;const t=this.getGraphic(e.shape).nodes[this.activeNodeIdx];this.changed=!1,t.removeAllListeners("pointermove"),t.removeAllListeners("pointerupoutside"),t.on("pointermove",this.onNodeMove.bind(this)),t.on("pointerupoutside",this.onNodeUp.bind(this))}}onNodeHover(e){const t=e.nodeIdx,s=e.shape.geometry.vertices[2*t+0],i=e.shape.geometry.vertices[2*t+1];this.nodeText.text=n.b.vertexNames[t];e.shape.geometry.visibles[t]||(this.nodeText.text=n.b.vertexNames[t]+" (hidden)"),this.nodeText.position.x=this.renderer.denormalizeX(s),this.nodeText.position.y=this.renderer.denormalizeY(i)}onNodeOut(){this.nodeText.text=""}onNodeMove(e){if(this.isNodeTranslating){const t=this.renderer.getPosition(e.data),{x:s,y:i}=this.renderer.normalize(t),o=this.targetShapes.values().next().value;this.changed||(this.changed=!0),o&&(o.geometry.vertices[2*this.activeNodeIdx]=s,o.geometry.vertices[2*this.activeNodeIdx+1]=i)}}onNodeUp(e){const t=this.getGraphic(e.shape).nodes[this.activeNodeIdx];t.removeAllListeners("pointermove"),t.removeAllListeners("pointerupoutside"),this.isNodeTranslating=!1,this.changed&&(this.changed=!1,this.emitUpdate())}}class l extends h.a{constructor(e={}){super(e),this.nodeText=new a.k("",{fontFamily:"Arial",fontSize:36,fill:"#ffffff",strokeThickness:5}),this.onKeyDownCreate=this.onKeyDownCreate.bind(this),this.onKeyUpCreate=this.onKeyUpCreate.bind(this)}activate(){super.activate(),console.log("activate"),n.b.showVertexName&&(this.renderer.stage.addChild(this.nodeText),this.nodeText.text=n.b.vertexNames[0],this.nodeText.position.x=this.renderer.mouse.x-this.nodeText.width-10,this.nodeText.position.y=this.renderer.mouse.y-this.nodeText.height-10,this.renderer.addEventListener("keyup",this.onKeyUpCreate),this.renderer.addEventListener("keydown",this.onKeyDownCreate)),window.addEventListener("keydown",this.onKeyDownCreate),window.addEventListener("keyup",this.onKeyUpCreate)}deactivate(){console.log("deactivate"),super.deactivate(),n.b.showVertexName&&(this.renderer.stage.removeChild(this.nodeText),this.renderer.removeEventListener("keyup",this.onKeyUpCreate),this.renderer.removeEventListener("keydown",this.onKeyDownCreate))}onRootDown(e){console.log("Onrootdown");const t=e.data.originalEvent;if(2===t.buttons)return;this.isCreating=!0;const s=this.renderer.getPosition(e.data),i=this.renderer.normalize(s),o=this.tmpShape;if(o){console.log("Down 1"),o.pushNode(i.x,i.y);const e=.5*o.data.geometry.vertices.length;o.data.geometry.visibles[o.data.geometry.visibles.length-1]=!(1==t.buttons&&t.shiftKey),o.data.geometry.edges=[...n.b.edges.filter(([t,s])=>t<e&&s<e)],o.data.geometry.visibles[o.data.geometry.visibles.length-1]?this.nodeText.text=n.b.vertexNames[e]:this.nodeText.text=n.b.vertexNames[e]+" (hidden)"}else{const e=Object(r.c)({id:"tmp",geometry:{vertices:[i.x,i.y],edges:[],visibles:[!(1==t.buttons&&t.shiftKey)],type:"graph"}});this.tmpShape=new c.c(e),this.tmpShape.scaleX=this.renderer.imageWidth,this.tmpShape.scaleY=this.renderer.imageHeight,this.renderer.stage.addChild(this.tmpShape),this.tmpShape.draw(),console.log("Down 2"),this.nodeText.text=n.b.vertexNames[1]||"",window.addEventListener("keydown",this.onKeyDownCreate),window.addEventListener("keyup",this.onKeyUpCreate)}n.b.showVertexName&&(this.nodeText.position.x=this.renderer.mouse.x-this.nodeText.width-10,this.nodeText.position.y=this.renderer.mouse.y-this.nodeText.height-10),this.tmpShape&&this.tmpShape.data.geometry.vertices.length===2*n.b.vertexNames.length&&this.createGraph()}onRootMove(e){super.onRootMove(e),console.log("Mooove");const t=this.renderer.getPosition(e.data);this.nodeText.position.x=t.x-this.nodeText.width-10,this.nodeText.position.y=t.y-this.nodeText.height-10}createGraph(){console.log("Create graph");const e=this.tmpShape;this._shapes.add(e.data),e.data.id=Math.random().toString(36),this.renderer.stage.removeChild(e),e.destroy(),this.tmpShape=null,window.removeEventListener("keydown",this.onKeyDownCreate),window.removeEventListener("keyup",this.onKeyUpCreate),this.emitCreate()}onKeyDownCreate(e){switch(e.key){case"Backspace":{const e=this.tmpShape;if(e.data.geometry.vertices.length>2){e.popNode();const t=.5*e.data.geometry.vertices.length;this.nodeText.text=n.b.vertexNames[t]}}case"Shift":{console.log("Shift down");const e=this.tmpShape;if(console.log(null==e),null==e)this.nodeText.text=n.b.vertexNames[0]+" (hidden)";else{const t=.5*e.data.geometry.vertices.length;this.nodeText.text=n.b.vertexNames[t]+" (hidden)"}}}}onKeyUpCreate(e){switch(e.key){case"Shift":{console.log("Shift up");const e=this.tmpShape;if(console.log(null==e),null==e)this.nodeText.text=n.b.vertexNames[0];else{const t=.5*e.data.geometry.vertices.length;this.nodeText.text=n.b.vertexNames[t]}}}}}var p=function(e,t,s,i){var o,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,s,r):o(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r};let g=class extends o.a{constructor(){super(),this.settings=n.b,this.selectedNodeIdx=-1,this.keyUpHandler=e=>{switch(e.key){case"z":case"s":case"d":case"q":if(-1!==this.selectedNodeIdx&&1===this.targetShapes.size&&!e.ctrlKey){const e=[...this.targetShapes][0];e&&this.dispatchEvent(new CustomEvent("update",{detail:[e.id]}))}}},this.keyDownHandler=e=>{switch(e.key){case"z":case"s":case"d":case"q":if(-1!==this.selectedNodeIdx&&1===this.targetShapes.size&&!e.ctrlKey){const t=[...this.targetShapes][0];if(t){const s="q"===e.key?-1:"d"===e.key?1:0,i="z"===e.key?-1:"s"===e.key?1:0;t.geometry.vertices[2*this.selectedNodeIdx]+=.005*s,t.geometry.vertices[2*this.selectedNodeIdx+1]+=.005*i}}break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":this.selectedNodeIdx=Number(e.key)}},this.setController("create",new l(Object.assign({},this))).setController("edit",new d(Object.assign({},this)))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keyDownHandler),window.addEventListener("keyup",this.keyUpHandler)}disconnectedCallback(){window.removeEventListener("keydown",this.keyDownHandler),window.removeEventListener("keyup",this.keyUpHandler),super.disconnectedCallback()}};g=p([Object(i.c)("pxn-keypoints")],g)},409:function(e,t,s){"use strict";s.r(t),s.d(t,"PluginKeypointsBox",(function(){return h}));var i=s(2),o=s(267),n=(s(119),s(120)),r=s(166),a=s(12);s(13);
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class h extends r.a{constructor(){super(),this.viewMode="single_to_annotate",this.colors=Object(n.shuffle)(Object.keys(n.colorNames))}updated(e){e.has("mode")&&(this.viewMode="create"==this.mode?"single_to_annotate":"all",this.refresh())}firstUpdated(){super.firstUpdated(),o.b.edges=[[0,1],[1,2]],o.b.colorFillType="order",o.b.orderedColors=[16776960,32768,16711680]}newData(){super.newData();const e=this.annotations.filter(e=>"graph"==e.geometry.type).map(e=>e.id),t=this.annotations.filter(e=>"rectangle"==e.geometry.type),s=t.filter(t=>e.includes(t.id));this.attributePicker.numDone=s.length,this.attributePicker.numTotal=t.length}refresh(){this.element&&("single_to_annotate"==this.viewMode?this.showNextFreeBox():this.showAll())}onDelete(){super.onDelete(),this.attributePicker.numDone-=evt.detail.length}onCreate(e){if("all"==this.viewMode)return void this.element.shapes.delete(e.detail);const t=this.annotations.filter(e=>"graph"==e.geometry.type).map(e=>e.id),s=this.annotations.filter(e=>"rectangle"==e.geometry.type).filter(e=>!t.includes(e.id));if(s.length){e.detail.id=s[0].id;let{color:t,...i}={...JSON.parse(JSON.stringify(e.detail)),...this.attributePicker.defaultValue};this.isSequence&&(i.timestamp=this.targetFrameIdx),s.shift(),this.attributePicker.numDone=this.attributePicker.numTotal-s.length,a.c.dispatch(createAnnotation(i)),this.element.shapes=s.length?[{...s[0],color:this._colorFor(s[0].category)}]:[]}else this.element.shapes=[]}showAll(){const e=JSON.parse(JSON.stringify(this.annotations)),t=e.filter(e=>"rectangle"==e.geometry.type),s=e.filter(e=>"graph"==e.geometry.type);t.forEach((e,t)=>{e.color=this.colors[t%this.colors.length];const i=s.find(t=>t.id==e.id);i&&(i.color=e.color)}),this.element.shapes=[...s,...t]}showNextFreeBox(){const e=this.annotations.filter(e=>"graph"==e.geometry.type).map(e=>e.id),t=this.annotations.filter(e=>"rectangle"==e.geometry.type).filter(t=>!e.includes(t.id));t.length&&(this.element.shapes=[{...t[0],color:this._colorFor(t[0].category)}])}allVisible(){const e=this.element.selectedShapes;1===e.length&&(e[0].geometry.visibles=e[0].geometry.visibles.map(()=>!0),this.collect())}swap(){const e=this.element.selectedShapes;if(1===e.length){const t=e[0].geometry.vertices;e[0].geometry.vertices=[t[0],t[1],t[4],t[5],t[2],t[3]],this.collect()}}get editor(){return i.e`<pxn-keypoints id="main"
                      enableOutsideDrawing
                      mode=${this.mode}
                      @create=${this.onCreate}
                      @update=${this.onUpdate}
                      @delete=${this.onDelete}
                      @selection=${this.onSelection}></pxn-keypoints>`}}customElements.define("plugin-keypoints-box",h)}}]);