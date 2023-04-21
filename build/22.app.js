(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{114:function(e,t,i){"use strict";i.d(t,"b",(function(){return h})),i.d(t,"a",(function(){return c}));var s=i(207),o=i(100),n=i(113),r=i(262),a=i(265);class h extends a.a{constructor(e={}){super(e),this.cachedShape=null,this.activeObjectId="",this.isDragging=!1,this.isScaling=!1,this._changed=!1,this.initialControlIdx=-1,this.activeControlIdx=-1,this.previousPos={x:0,y:0},this.observer=null,this.renderer=e.renderer||new s.a,this.targetShapes=e.targetShapes||new o.b,this.graphics=e.graphics||new Set,this.observer=(e,t)=>{switch(e){case"set":this.graphics.forEach(e=>{e.state="none",this.setShapeInteraction(e),e.draw()}),(t=Array.isArray(t)?t:[t]).forEach(e=>{const t=this.getGraphic(e);t.state="box",this.setShapeInteraction(t),t.draw()});break;case"add":(t=Array.isArray(t)?t:[t]).forEach(e=>{const t=this.getGraphic(e);t.state="box",this.setShapeInteraction(t),t.draw()});break;case"delete":{const e=this.getGraphic(t);e.state="none",this.setShapeInteraction(e),e.draw();break}case"clear":this.graphics.forEach(e=>{e.state="none",this.setShapeInteraction(e),e.draw()})}},this.bindings()}set changed(e){if(this._changed=e,e){const e=this.getShape(this.activeObjectId);e&&(this.cachedShape=JSON.parse(JSON.stringify(e)))}else this.cachedShape=null}get changed(){return this._changed}bindings(){this.onRootDown=this.onRootDown.bind(this),this.onObjectDown=this.onObjectDown.bind(this),this.onObjectMove=this.onObjectMove.bind(this),this.onObjectUp=this.onObjectUp.bind(this)}setShapeInteraction(e=null){e&&("box"===e.state?e.controls.forEach((t,i)=>{t.removeAllListeners(),t.on("pointerdown",t=>{t.stopPropagation(),t.idx=i,this.onControlDown(t,e)})}):"none"===e.state&&(e.controls.forEach(e=>{e.removeAllListeners("pointerdown"),e.interactive=!1,e.buttonMode=!1}),e.draw()))}drawDefaultShapesDecoration(e=null){(e?new Set([e]):this.graphics).forEach(e=>{const t=this.targetShapes.has(e.data)?this.targetShapes.size>2?"contour":"box":"none";e.state=t,this.setShapeInteraction(e),e.draw()});const t=this.getFirstGraphic();t&&this.renderer.bringToFront(t)}activate(){Object(o.d)(this.targetShapes,this.observer),this.graphics.forEach(e=>{e.interactive=!0,e.buttonMode=!0,e.on("pointerdown",this.onObjectDown)}),this.drawDefaultShapesDecoration(),this.renderer.stage.interactive=!0,this.renderer.stage.removeListener("pointerdown",this.onRootDown),this.renderer.stage.on("pointerdown",this.onRootDown)}deactivate(){Object(o.e)(this.targetShapes,this.observer),this.graphics.forEach(e=>{e.state="none",this.setShapeInteraction(e),e.interactive=!1,e.buttonMode=!1,e.removeAllListeners()}),this.renderer.stage.removeListener("pointerdown",this.onRootDown)}onRootDown(e){2!==e.data.originalEvent.button&&1!==e.data.originalEvent.button&&this.targetShapes.size&&(this.targetShapes.clear(),this.emitSelection())}onObjectDown(e){const t=e.data.originalEvent.button;if(2===t||1===t)return;const i=e.shape,s=i.id;this.previousPos=this.renderer.getPosition(e.data),this.activeObjectId=s,this.isDragging=!0,this.changed=!1;if(![...this.graphics].find(e=>e.data===i))return;this.renderer.stage.on("pointermove",this.onObjectMove),this.renderer.stage.on("pointerupoutside",this.onObjectUp);this.doObjectSelection(i,e.data.originalEvent.shiftKey)&&this.emitSelection()}doObjectSelection(e,t=!1){const i=new Set(this.targetShapes);return t?this.targetShapes.has(e)?this.targetShapes.delete(e):this.targetShapes.add(e):this.targetShapes.has(e)||(this.targetShapes.clear(),this.targetShapes.add(e)),JSON.stringify([...this.targetShapes])!==JSON.stringify([...i])}onObjectMove(e){const t=e.shape;if(e.data.originalEvent.pressure&&this.isDragging&&this.targetShapes.has(t)){const t=this.renderer.getPosition(e.data);if(t.x===this.previousPos.x&&t.y===this.previousPos.y)return;let i=(t.x-this.previousPos.x)/this.renderer.imageWidth,s=(t.y-this.previousPos.y)/this.renderer.imageHeight;const o=this.globalBounds(),n=1-o[3],r=o[1],a=1-o[2],h=o[0];if(this.renderer.enableOutsideDrawing||(s=Math.min(n,s),s=Math.max(-r,s),i=Math.min(a,i),i=Math.max(-h,i)),0===i&&0===s)return;this.changed||(this.changed=!0),this.targetShapes.forEach(({geometry:e})=>{e.vertices=e.vertices.map((e,t)=>t%2?e+s:e+i)}),this.previousPos=t}}onObjectUp(e){this.isDragging=!1;this.getGraphic(e.shape)&&(this.renderer.stage.removeListener("pointermove",this.onObjectMove),this.renderer.stage.removeListener("pointerupoutside",this.onObjectUp),this.changed&&this.emitUpdate())}emitUpdate(){this.emit("update",[...this.targetShapes].map(e=>e.id))}emitSelection(){this.emit("selection",[...this.targetShapes].map(e=>e.id))}onControlDown(e,t){this.isScaling=!0;const i=e.idx;this.activeControlIdx=i,this.changed=!1,this.initialControlIdx=i,t&&(t.controls[this.activeControlIdx].on("pointermove",e=>{e.stopPropagation(),e.idx=this.activeControlIdx,this.onControlMove(e)}),t.controls[this.activeControlIdx].on("pointerupoutside",e=>{e.stopPropagation(),this.onControlUp(t)}))}onControlMove(e){if(this.isScaling&&e.idx===this.activeControlIdx){this.changed||(this.changed=!0);let t=1,i=0,s=1,o=0;[t,s,i,o]=this.globalBounds();const r=this.renderer.getPosition(e.data);let a=r.x/this.renderer.imageWidth,h=r.y/this.renderer.imageHeight;a=Math.min(1,Math.max(0,a)),h=Math.min(1,Math.max(0,h)),[t,s,i,o]=this.globalBounds();let c=1,d=1,l=1,p=1,g=1,u=1;if(.5!==n.a[this.activeControlIdx].x&&(l=t+Math.abs(n.a[this.activeControlIdx].x-1)*(i-t),g=t+n.a[this.activeControlIdx].x*(i-t),c=(a-l)/(g-l)),.5!==n.a[this.activeControlIdx].y&&(p=s+Math.abs(n.a[this.activeControlIdx].y-1)*(o-s),u=s+n.a[this.activeControlIdx].y*(o-s),d=(h-p)/(u-p)),0===c||0===d)return;(c<0||d<0)&&(c<=0&&(this.activeControlIdx=n.a.findIndex(e=>e.y===n.a[this.activeControlIdx].y&&e.x===Math.abs(n.a[this.activeControlIdx].x-1))),d<=0&&(this.activeControlIdx=n.a.findIndex(e=>e.x===n.a[this.activeControlIdx].x&&e.y===Math.abs(n.a[this.activeControlIdx].y-1)))),this.targetShapes.forEach(e=>{if(c<0||d<0){const t=e.geometry.vertices;let i=[];for(let e=t.length-2;e>=0;e-=2){const s=c<0?t[e]:t[t.length-2-e],o=d<0?t[e+1]:t[t.length-1-e];i=i.concat([s,o])}e.geometry.vertices=i}e.geometry.vertices=[...e.geometry.vertices.map((e,t)=>t%2==0&&1!==c?(e-l)*c+l:t%2==1&&1!==d?(e-p)*d+p:e)]})}}onControlUp(e){-1!==this.initialControlIdx&&e&&(e.controls[this.initialControlIdx].removeAllListeners("pointermove"),e.controls[this.initialControlIdx].removeAllListeners("pointerupoutside"),this.isScaling=!1,this.activeControlIdx=-1,this.initialControlIdx=-1,this.changed&&(this.changed=!1,this.emitUpdate()))}globalBounds(){let e=1,t=1,i=0,s=0;return this.targetShapes.forEach(o=>{const n=Object(r.a)(o.geometry.vertices);n[0]<e&&(e=n[0]),n[2]>i&&(i=n[2]),n[1]<t&&(t=n[1]),n[3]>s&&(s=n[3])}),[e,t,i,s]}getGraphic(e){let t=[...this.graphics].find(t=>t.data===e);return t||(t=[...this.graphics].find(t=>t.data.id===e.id)),t}getFirstGraphic(){const e=this.targetShapes.values().next().value;return e?[...this.graphics].find(t=>t.data===e):null}getShape(e){return[...this.targetShapes].find(t=>t.id===e)}}class c extends a.a{constructor(e={}){super(e),this.cross=new n.b,this.tmpShape=null,this.isCreating=!1,this.mouse={x:0,y:0},this.observer=null,this.id=Math.random().toString(36).substring(2),this.renderer=e.renderer||new s.a,this._shapes=e._shapes||new o.b,this.targetShapes=e.targetShapes||new o.b,this.graphics=e.graphics||new Set,this.renderer.stage.addChild(this.cross),this.observer=()=>{this.graphics.forEach(e=>{e.state=this.getShape(e.data.id)?"contour":"none",e.draw()})},this.bindings(),this.onImageSizeChange=()=>{const e=this.renderer.mouse;this.cross.cx=e.x,this.cross.cy=e.y,this.cross.scaleX=this.renderer.imageWidth,this.cross.scaleY=this.renderer.imageHeight,this.cross.draw()}}bindings(){console.log("bindings"),this.onRootMove=this.onRootMove.bind(this),this.onRootDown=this.onRootDown.bind(this),this.onRootUp=this.onRootUp.bind(this)}activate(){Object(o.d)(this.targetShapes,this.observer),this.cross.visible=!0;const e=this.renderer.mouse;this.cross.cx=e.x,this.cross.cy=e.y,this.cross.scaleX=this.renderer.imageWidth,this.cross.scaleY=this.renderer.imageHeight,this.cross.draw(),this.renderer.stage.on("pointerdown",this.onRootDown),this.renderer.stage.on("pointermove",this.onRootMove),this.renderer.stage.on("pointerupoutside",this.onRootUp),this.renderer.addEventListener("resize",this.onImageSizeChange)}deactivate(){Object(o.e)(this.targetShapes,this.observer),this.cross.visible=!1;const e=this.tmpShape;e&&(this.renderer.stage.removeChild(e),e.destroy(),this.tmpShape=null),this.renderer.stage.removeListener("pointerdown",this.onRootDown),this.renderer.stage.removeListener("pointermove",this.onRootMove),this.renderer.stage.removeListener("pointerupoutside",this.onRootUp),this.renderer.removeEventListener("resize",this.onImageSizeChange)}emitCreate(){console.log("emitcreate");const e=[...this._shapes].pop();this.targetShapes.set([e]),this.emit("create",e)}emitSelection(){console.log("emitselection"),this.emit("selection",[...this.targetShapes].map(e=>e.id))}emitUpdate(){console.log("emitupdate"),this.dispatchEvent(new Event("update"))}onRootMove(e){const t=e.data.originalEvent;if(2===t.buttons||4===t.buttons)return;const i=this.renderer.getPosition(e.data);i.x===this.cross.cx&&i.y===this.cross.cy||(this.cross.scaleX=this.renderer.imageWidth,this.cross.scaleY=this.renderer.imageHeight,this.cross.cx=i.x,this.cross.cy=i.y,this.cross.draw())}onRootUp(e){console.log("OnRootUp")}getGraphic(e){console.log("graphic");let t=[...this.graphics].find(t=>t.data===e);return t||(t=[...this.graphics].find(t=>t.data.id===e.id)),t}getShape(e){return console.log("shape"),[...this.targetShapes].find(t=>t.id===e)}}},145:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var s=i(2),o=i(12);
/**
 * Common plugin style
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
const n=s.b`
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
*/class r extends s.a{static get styles(){return n}static get properties(){return{mode:{type:String}}}firstUpdated(){this.dispatchEvent(new Event("ready"))}onActivate(){this.initDisplay&&this.initDisplay(),this.newData()}initDisplay(){const e=Object(o.b)("application").tasks,t=Object(o.b)("application").taskName,i=e.find(e=>e.name===t);this.attributePicker&&i&&this.attributePicker.reloadSchema(i.spec.label_schema)}get info(){return Object(o.b)("application")}get annotations(){return Object(o.a)().annotations}newData(){const e=Object(o.b)("media").info.path;this.element.input=e,this.element.addEventListener("load",()=>{this.refresh()})}_colorFor(e){return this.attributePicker._colorFor(e)}onModeChange(){this.element&&(this.mode=this.element.mode)}get attributePicker(){return this.shadowRoot.querySelector("attribute-picker")}get element(){return this.shadowRoot.getElementById("main")}render(){return s.e`
        <div class="drawer">${this.toolDrawer}</div>
        <div class="editor">${this.editor}</div>
        <div class="properties-panel">${this.propertyPanel}</div>
    `}}customElements.define("template-plugin",r)},163:function(e,t,i){"use strict";var s=i(2),o=(i(119),i(206),i(254),i(256),i(252),i(260),i(261),function(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r});let n=class extends s.a{constructor(){super(),this.shortcuts=[["ALT","Switch create/update mode"],["CTRL + [0-9]","Select category by index"],["TAB","Navigate through objects"],["SHIFT + Tab","Navigate through objects (inverse)"],["SHIFT + Click","Multiple selection"],["CTRL + z","Undo"],["CTRL + SHIFT + z","Redo"],["CTRL + s","Save"]],this.showDetail=!1,this.schema={},this.value={category:"",options:{}},this.mem="",this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this)}static get styles(){return[s.b`
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
        `]}get selectedCategory(){return this.schema.category.find(e=>e.name===this.value.category)}getDefaultAttributesForCategory(e,t){var i,s;let o=null===(i=e.category)||void 0===i?void 0:i.find(e=>e.name===t);if(!o&&(null===(s=e.category)||void 0===s?void 0:s.length)&&(o=e.category[0]),o&&o.properties){const e={};return o.properties.forEach(t=>{e[t.name]=t.default}),e}return{}}onKeyDown(e){e.ctrlKey&&e.preventDefault()}onKeyUp(e){const t=e.code.replace("Digit","").replace("Numpad","");if(Number(t)>=0&&Number(t)<=9&&e.ctrlKey&&(e.preventDefault(),this.mem+=t),"Control"===e.key&&""!==this.mem){e.preventDefault();const t=this.schema.category[Number(this.mem)];t&&this.setCategory(t.name),this.mem=""}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}openShortcuts(){this.shadowRoot.querySelector("mwc-dialog").open=!0}getValue(e){return e.composedPath()[0].value}_getList(){try{return this.schema.category.map(e=>e.name)}catch(e){return[]}}_colorFor(e){const t=this.schema.category.find(t=>t.name===e);return t&&t.color||"rgb(0,0,0)"}get defaultValue(){const e=this.getDefaultAttributesForCategory(this.schema,this.value.category);return{category:this.value.category,options:e}}setCategory(e){const t=this.getDefaultAttributesForCategory(this.schema,e);this.value={category:e,options:t},this._notifyUpdate()}setAttributes(e){if(e){e.options=e.options||{};const t=this.getDefaultAttributesForCategory(this.schema,e.category);Object.keys(t).forEach(i=>{e.options.hasOwnProperty(i)?t[i]=JSON.parse(JSON.stringify(e.options[i])):t[i]=""}),this.value={category:e.category,options:t}}}setAttributesIdx(e){if(void 0!==e)this.value={category:this.schema.category.find(t=>t.idx===e).name,options:{}};else{const e=this.getDefaultAttributesForCategory(this.schema,this.schema.default);this.value={category:this.schema.default,options:e}}}get getSchema(){return this.schema}reloadSchema(e){this.schema=e;const t=this.getDefaultAttributesForCategory(e,e.default);this.value={category:e.default,options:t}}_notifyUpdate(){this.dispatchEvent(new Event("update"))}get shortcutsDialog(){return s.e`
        <mwc-dialog>
			<h3>Shortcut list</h3>
			<div>
				<table id="shortcut-table">
					<tr>
						<th>Shortcut</th>
						<th>Description</th>
					</tr>
					${this.shortcuts.map(([e,t])=>s.e`<tr><td>${e}</td><td>${t}</td></tr>`)}
				</table>
			</div>
			<mwc-button
				slot="secondaryAction"
				dialogAction="cancel">OK</mwc-button>
        </mwc-dialog>
        `}firstUpdated(){this.reloadSchema(this.schema)}htmlProp(e){if("dropdown"===e.type)return s.e`
				<mwc-select label="${e.name}" @selected=${t=>{const i=t.detail.index;this.value.options[e.name]!==e.enum[i]&&(this.value.options[e.name]=e.enum[i],this._notifyUpdate())}}>
					${e.enum.map(t=>s.e`<mwc-list-item value="${t}" ?selected=${this.value.options[e.name]===t}>${t}</mwc-list-item>`)}
				</mwc-select>
			`;if("checkbox"===e.type){const t=JSON.parse(JSON.stringify(this.value.options[e.name]).toLowerCase());return s.e`
				<mwc-formfield label="${e.name}">
				<mwc-checkbox ?checked=${t} @change=${i=>{const s=i.composedPath()[0];t!==s.checked&&(this.value.options[e.name]=!t,this.value=Object.assign({},this.value),this._notifyUpdate())}}></mwc-checkbox>
				</mwc-formfield>
			`}if("textfield"===e.type){const t=this.value.options[e.name];return s.e`
				<mwc-textfield label="${e.name}" value=${t} @change=${t=>{this.value.options[e.name]=this.getValue(t),this.value=Object.assign({},this.value),this._notifyUpdate()}}></mwc-textfield>
			`}return s.e``}get renderDetail(){var e;return s.e`
			<div id="updateEditor" style="width: 100%;" ?hidden=${!this.showDetail}>
				<h3><label>Selected label</label></h3>
				${null===(e=this.schema.category)||void 0===e?void 0:e.map((e,t)=>s.e`
						<div class="category ${e.name===this.value.category?"selected":""}" id=${e.name} @click=${()=>this.setCategory(e.name)}>
							<span class="step" .style="background: ${this._colorFor(e.name)}">${t}</span><p>${e.name}</p>
						</div>
						${e.properties&&e.name===this.value.category?s.e`${e.properties.map(e=>this.htmlProp(e))}`:s.e``}
					`)}
			</div>`}get renderSimple(){var e;return s.e`
			<div ?hidden=${this.showDetail}>
				<h3><label>Label for creation</label></h3>
				${null===(e=this.schema.category)||void 0===e?void 0:e.map((e,t)=>s.e`
						<div class="category ${e.name===this.value.category?"selected":""}" id=${e.name} @click=${()=>this.setCategory(e.name)}>
							<span class="step" .style="background: ${this._colorFor(e.name)}">${t}</span><p>${e.name}</p>
						</div>`)}
			</div>
		`}render(){return s.e`
			${this.shortcutsDialog}
			<mwc-icon-button class="shortcut" icon="keyboard" @click=${this.openShortcuts}></mwc-icon-button>
			${this.renderDetail}
			${this.renderSimple}
		`}};o([Object(s.g)({type:Array})],n.prototype,"shortcuts",void 0),o([Object(s.g)({type:Boolean})],n.prototype,"showDetail",void 0),o([Object(s.g)({type:Object})],n.prototype,"schema",void 0),o([Object(s.g)({type:Object})],n.prototype,"value",void 0),n=o([Object(s.c)("attribute-picker")],n)},164:function(e,t,i){"use strict";var s=i(11),o=i(313),n=i(2),r=(i(263),i(165)),a={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},h={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"},c=function(e){function t(i){var o=e.call(this,Object(s.a)(Object(s.a)({},t.defaultAdapter),i))||this;return o.hasToggledAriaLabel=!1,o}return Object(s.c)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return h},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this.adapter.getAttr(h.DATA_ARIA_LABEL_ON),t=this.adapter.getAttr(h.DATA_ARIA_LABEL_OFF);if(e&&t){if(null!==this.adapter.getAttr(h.ARIA_PRESSED))throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(h.ARIA_PRESSED,String(this.isOn()))},t.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},t.prototype.isOn=function(){return this.adapter.hasClass(a.ICON_BUTTON_ON)},t.prototype.toggle=function(e){if(void 0===e&&(e=!this.isOn()),e?this.adapter.addClass(a.ICON_BUTTON_ON):this.adapter.removeClass(a.ICON_BUTTON_ON),this.hasToggledAriaLabel){var t=e?this.adapter.getAttr(h.DATA_ARIA_LABEL_ON):this.adapter.getAttr(h.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(h.ARIA_LABEL,t||"")}else this.adapter.setAttr(h.ARIA_PRESSED,""+e)},t}(r.a),d=i(203),l=i(205),p=i(258);
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
      </button>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}Object(s.b)([Object(n.h)(".mdc-icon-button")],g.prototype,"mdcRoot",void 0),Object(s.b)([Object(n.g)({type:String})],g.prototype,"label",void 0),Object(s.b)([Object(n.g)({type:Boolean,reflect:!0})],g.prototype,"disabled",void 0),Object(s.b)([Object(n.g)({type:String})],g.prototype,"onIcon",void 0),Object(s.b)([Object(n.g)({type:String})],g.prototype,"offIcon",void 0),Object(s.b)([Object(n.g)({type:Boolean,reflect:!0}),Object(l.a)((function(e){this.mdcFoundation.toggle(e)}))],g.prototype,"on",void 0),Object(s.b)([Object(n.i)("mwc-ripple")],g.prototype,"ripple",void 0),Object(s.b)([Object(n.f)()],g.prototype,"shouldRenderRipple",void 0),Object(s.b)([Object(n.d)({passive:!0})],g.prototype,"handleRippleMouseDown",null),Object(s.b)([Object(n.d)({passive:!0})],g.prototype,"handleRippleTouchStart",null);
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
let u=class extends g{};u.styles=o.a,u=Object(s.b)([Object(n.c)("mwc-icon-button-toggle")],u)},166:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var s=i(2),o=(i(119),i(164),i(168),i(120)),n=i(12),r=i(13),a=(i(163),i(145));
/**
 * Template plugin that handles shape instances
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class h extends a.a{static get properties(){return{...super.properties,selectedIds:{type:Array}}}constructor(){super(),this.mode="create",this.selectedIds=[]}onAttributeChanged(){console.log("On attribute changed");const e=this.attributePicker.value;this.selectedIds.forEach(t=>{const i=[...this.element.shapes].find(e=>e.id===t);i.options=i.options||{},Object.keys(e).forEach(t=>{i[t]=JSON.parse(JSON.stringify(e[t]))}),i.color=this._colorFor(i.category),this.collect()})}refresh(){console.log("Refresh"),this.element&&(this.element.shapes=JSON.parse(JSON.stringify(this.annotations.map(e=>({...e,color:this._colorFor(e.category)})))))}onSelection(e){console.log("On selection"),this.selectedIds=e.detail,this.updateDisplayOfSelectedProperties()}updateDisplayOfSelectedProperties(){if(console.log("updated selected prop"),this.selectedIds&&this.selectedIds.length){const e=this.annotations.filter(e=>this.selectedIds.includes(e.id)),t=Object(o.commonJson)(e);this.attributePicker.setAttributes(t)}}onCreate(e){console.log("On create");const t=e.detail;t.id=Math.random().toString(36),Object.entries(this.attributePicker.defaultValue).forEach(([e,i])=>{t[e]=JSON.parse(JSON.stringify(i))}),this.isSequence&&(t.timestamp=this.targetFrameIdx),t.color=this._colorFor(t.category),this.collect()}onUpdate(){console.log("On update"),this.collect()}onDelete(){console.log("On delete"),this.collect()}collect(){console.log("collect");const e=[...this.element.shapes].map(({color:e,...t})=>t);n.c.dispatch(Object(r.g)({annotations:e}))}get propertyPanel(){return s.e`
        <attribute-picker ?showDetail=${this.selectedIds.length}
                            @update=${this.onAttributeChanged}></attribute-picker>
    `}get toolDrawer(){return s.e`
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
      `}}customElements.define("template-plugin-instance",h)},202:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var s=i(2),o=i(100),n=i(114),r=i(255),a=i(113);const h=e=>{switch(e.geometry.type){case"rectangle":return new a.g(e);case"polygon":return new a.f(e);case"multi_polygon":return new a.e(e);case"graph":return new a.c(e);default:return new a.g(e)}};var c=function(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let d=class extends r.a{constructor(){super(),this.mode="edit",this.enableOutsideDrawing=!1,this.targetShapes=new o.b,this.graphics=new Set,this.dataToShape=h,this.keyDownHandler=e=>{"Alt"===e.key?this.switchMode():"h"===e.key&&(this.hideLabels=!this.hideLabels)},this._shapes=new o.b,this.viewControls.addEventListener("zoom",()=>{this.renderer.labelLayer.children.forEach(e=>{e.nodeContainer.children.forEach(e=>{e.scale.x=1.5/this.renderer.stage.scale.x,e.scale.y=1.5/this.renderer.stage.scale.y})})}),this.modes={edit:new n.b(Object.assign({},this))},this.renderer.addEventListener("resize",()=>{this.graphics.forEach(e=>{e.scaleX=this.renderer.imageWidth||100,e.scaleY=this.renderer.imageHeight||100,e.draw()})}),this.observeShapeForDisplay(),this.modes[this.mode].activate()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keyDownHandler)}disconnectedCallback(){window.removeEventListener("keydown",this.keyDownHandler),super.disconnectedCallback()}switchMode(){const e=Object.keys(this.modes),t=e.findIndex(e=>e===this.mode);this.mode=e[(t+1)%e.length]}get selectedShapeIds(){return[...this.targetShapes.values()].map(e=>e.id)}set selectedShapeIds(e){const t=[...this.shapes].filter(t=>e.includes(t.id));this.targetShapes.set(t)}get selectedShapes(){return[...this.targetShapes]}get shapes(){return this._shapes}set shapes(e){this._shapes.set(e.map(o.c))}onCopy(){if(this.targetShapes.size)return JSON.stringify([...this.targetShapes])}onPaste(e){const t=JSON.parse(e);t instanceof Array&&t.forEach(e=>{const t=Object(o.c)(Object.assign(Object.assign({},e),{id:Math.random().toString(36)}));this.shapes.add(t),this.notifyCreate(t)})}observeShapeForDisplay(){Object(o.d)(this._shapes,(e,t)=>{var i;switch(e){case"set":case"add":t=[t],"set"===e&&(this.renderer.clearLabels(),this.graphics.clear(),t=this._shapes),t.forEach(e=>{const t=this.dataToShape(e);this.graphics.add(t),t.scaleX=this.renderer.imageWidth||100,t.scaleY=this.renderer.imageHeight||100,this.renderer.labelLayer.addChild(t),t.draw()}),null===(i=this.modes[this.mode])||void 0===i||i.reset();break;case"delete":{const e=[...this.graphics].find(({data:e})=>e===t);e&&(this.graphics.delete(e),this.renderer.labelLayer.removeChild(e),this.targetShapes.clear());break}case"clear":this.renderer.clearLabels(),this.targetShapes.size&&this.targetShapes.clear()}})}keyBinding(e){super.keyBinding(e);switch(e.key){case"Delete":{const e=this.selectedShapeIds;[...this.targetShapes].forEach(e=>{this.shapes.delete(e)}),this.notifyDelete(e);break}case"Escape":this.targetShapes.clear(),this.notifySelection(this.selectedShapeIds)}}setController(e,t){var i;return null===(i=this.modes[e])||void 0===i||i.deactivate(),this.modes[e]=t,this}setMode(e,t){var i;e!==t&&(e=null===e?"edit":e,this.modes[e]&&this.modes[e].deactivate(),null===(i=this.modes[t])||void 0===i||i.activate(),this.mode=t,this.notifyMode())}onTabulation(e){if("create"===this.mode)return;e.preventDefault();const t=[...this.shapes.values()],i=t.findIndex(e=>this.targetShapes.has(e))||0,s=t[e.shiftKey?(i-1+t.length)%t.length:(i+1+t.length)%t.length];s&&(this.targetShapes.set([s]),this.notifySelection(this.selectedShapeIds))}updated(e){if(super.updated(e),e.has("mode")&&this.mode){const t=e.get("mode");this.setMode(t,this.mode)}e.has("enableOutsideDrawing")&&(this.renderer.enableOutsideDrawing=this.enableOutsideDrawing),e.has("hideLabels")&&!0===this.hideLabels&&(this.targetShapes.clear(),this.notifySelection([]))}notifyUpdate(e){this.dispatchEvent(new CustomEvent("update",{detail:e}))}notifyMode(){this.dispatchEvent(new CustomEvent("mode",{detail:this.mode}))}notifySelection(e){this.dispatchEvent(new CustomEvent("selection",{detail:e}))}notifyCreate(e){this.dispatchEvent(new CustomEvent("create",{detail:e}))}notifyDelete(e){this.dispatchEvent(new CustomEvent("delete",{detail:e}))}};c([Object(s.g)({type:String})],d.prototype,"mode",void 0),c([Object(s.g)({type:Boolean})],d.prototype,"enableOutsideDrawing",void 0),d=c([Object(s.c)("pxn-canvas-2d")],d)},314:function(e,t,i){"use strict";var s=i(2),o=i(100),n=i(202),r=i(114),a=i(113),h=i(262);class c extends r.b{constructor(){super(...arguments),this.activeNodeIdx=-1,this.isNodeTranslating=!1,this.isMidNodeTranslating=!1,this.reclick=!1}bindings(){super.bindings(),this.onNodeDown=this.onNodeDown.bind(this),this.onNodeMove=this.onNodeMove.bind(this),this.onNodeUp=this.onNodeUp.bind(this),this.onMidNodeDown=this.onMidNodeDown.bind(this),this.onMidNodeMove=this.onMidNodeMove.bind(this),this.onMidNodeUp=this.onMidNodeUp.bind(this)}toggle(e){return e instanceof a.f?(("box"===e.state||"nodes"===e.state)&&(e.state="nodes"),this.setShapeInteraction(e),e.draw(),e):e}doObjectSelection(e,t){const i=super.doObjectSelection(e,t);return this.reclick=!i,i}onObjectUp(e){super.onObjectUp(e);const t=this.getGraphic(e.shape);t&&this.reclick&&!this.changed&&(this.reclick=!1,this.toggle(t))}setShapeInteraction(e=null){super.setShapeInteraction(e),e&&("nodes"===e.state?(e.addNodeListener("pointerdown",e=>{e.stopPropagation(),this.onNodeDown(e)}),e.addMidnodeListener("pointerdown",e=>{e.stopPropagation(),this.onMidNodeDown(e)})):e instanceof a.f&&e.removeNodeListeners())}onNodeDown(e){const t=this.getGraphic(e.shape);2!==e.data.originalEvent.buttons?(this.activeNodeIdx=e.nodeIdx,this.isNodeTranslating=!0,this.changed=!1,this.renderer.stage.on("pointermove",this.onNodeMove),this.renderer.stage.on("pointerupoutside",this.onNodeUp)):t.data.geometry.vertices.length>6&&(t.removeNode(e.nodeIdx),this.emitUpdate())}onNodeMove(e){if(this.isNodeTranslating){const t=e.data.getLocalPosition(this.renderer.stage);let i=t.x/this.renderer.imageWidth,s=t.y/this.renderer.imageHeight;i=Math.max(0,Math.min(1,i)),s=Math.max(0,Math.min(1,s));const o=this.targetShapes.values().next().value;this.changed||(this.changed=!0),o&&(o.geometry.vertices[2*this.activeNodeIdx]=i,o.geometry.vertices[2*this.activeNodeIdx+1]=s)}}onNodeUp(e){const t=this.getGraphic(e.shape);this.renderer.stage.removeListener("pointermove",this.onNodeMove),this.renderer.stage.removeListener("pointerupoutside",this.onNodeUp),this.isNodeTranslating=!1,this.changed&&(t&&!t.isValid()?t.data.geometry.vertices=[...this.cachedShape.geometry.vertices]:this.emitUpdate(),this.changed=!1)}onMidNodeDown(e){2!==e.data.originalEvent.buttons&&(this.activeNodeIdx=e.nodeIdx,this.isMidNodeTranslating=!0,this.renderer.stage.on("pointermove",this.onMidNodeMove),this.renderer.stage.on("pointerupoutside",this.onMidNodeUp))}onMidNodeMove(e){if(this.isMidNodeTranslating){const t=e.data.getLocalPosition(this.renderer.stage);let i=t.x/this.renderer.imageWidth,s=t.y/this.renderer.imageHeight;i=Math.max(0,Math.min(1,i)),s=Math.max(0,Math.min(1,s));const o=this.targetShapes.values().next().value;this.changed||(this.changed=!0,o.geometry.vertices=Object(h.c)(o.geometry.vertices,this.activeNodeIdx),this.activeNodeIdx=(this.activeNodeIdx+1)%(.5*o.geometry.vertices.length)),o&&(o.geometry.vertices[2*this.activeNodeIdx]=i,o.geometry.vertices[2*this.activeNodeIdx+1]=s)}}onMidNodeUp(e){if(this.isMidNodeTranslating){if(this.isMidNodeTranslating=!1,this.changed){const t=this.getGraphic(e.shape);t&&!t.isValid()?(console.warn("Invalid polygon. Node creation cancelled."),t.data.geometry.vertices=[...this.cachedShape.geometry.vertices]):t&&this.emitUpdate(),this.changed=!1}this.renderer.stage.removeListener("pointermove",this.onMidNodeMove),this.renderer.stage.removeListener("pointerupoutside",this.onMidNodeUp)}}}class d extends r.a{constructor(e={}){super(e),this.isDbClick=-1,this.isOpenedPolygon=e.isOpenedPolygon||!1}bindings(){super.bindings(),this.onKeyDownCreate=this.onKeyDownCreate.bind(this)}onKeyDownCreate(e){switch(e.key){case"Enter":this.isCreating=!1,this.createPolygon(),window.removeEventListener("keydown",this.onKeyDownCreate,!1);break;case"Escape":if(this.isCreating=!1,this.tmpShape){this.renderer.stage.removeChild(this.tmpShape),this.tmpShape.destroy(),this.tmpShape=null;break}window.removeEventListener("keydown",this.onKeyDownCreate,!1);break;case"Backspace":{const e=this.tmpShape;e.data.geometry.vertices.length>6&&e.popNode(!1)}}}onRootDown(e){if(2!==e.data.originalEvent.buttons){this.isCreating=!0;const t=this.renderer.getPosition(e.data),i=this.tmpShape;if(i&&this.isDbClick>=0&&t.x===this.mouse.x&&t.y===this.mouse.y)return this.isCreating=!1,void this.createPolygon();this.mouse=t;const s=this.renderer.normalize(t);if(i)clearTimeout(this.isDbClick),i.pushNode(s.x,s.y),this.isDbClick=window.setTimeout(()=>{this.isDbClick=-1},180);else{this.dispatchEvent(new Event("creating-polygon"));const e=Object(o.c)({id:"tmp",geometry:{vertices:[s.x,s.y,s.x,s.y],type:"polygon",isOpened:this.isOpenedPolygon},color:"red"});this.tmpShape=new a.f(e),window.addEventListener("keydown",this.onKeyDownCreate,!1),this.renderer.stage.addChild(this.tmpShape),this.tmpShape.scaleX=this.renderer.imageWidth,this.tmpShape.scaleY=this.renderer.imageHeight,this.tmpShape.draw()}}}onRootMove(e){super.onRootMove(e);const t=this.renderer.getPosition(e.data);if(t.x===this.mouse.x&&t.y===this.mouse.y)return;this.mouse=t;const i=this.renderer.normalize(t);if(this.isCreating){const e=this.tmpShape;e&&(e.data.geometry.vertices[e.data.geometry.vertices.length-1]=i.y,e.data.geometry.vertices[e.data.geometry.vertices.length-2]=i.x)}}createPolygon(){const e=this.tmpShape;if(e.popNode(),!e.isValid())return console.warn("Invalid polygon. Polygon creation cancelled."),this.renderer.stage.removeChild(e),e.destroy(),void(this.tmpShape=null);e.data.id=Math.random().toString(36),this._shapes.add(e.data),this.renderer.stage.removeChild(e),e.destroy(),this.tmpShape=null,this.emitCreate(),this.emitSelection()}}var l=function(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let p=class extends n.a{constructor(){super(),this.isOpenedPolygon=!1,this.setController("create",new d(Object.assign({},this))),this.setController("edit",new c(Object.assign({},this))),this.addEventListener("creating-polygon",()=>{this.showTooltip("Press Enter or double click to close polygon. Escape to cancel.")})}updated(e){super.updated(e),e.has("isOpenedPolygon")&&(this.modes.create.isOpenedPolygon=this.isOpenedPolygon)}merge(){if(this.targetShapes.size>1){const e=[...this.targetShapes],t=e.reduce((e,t)=>{const i="multi_polygon"===(s=t.geometry).type?s.mvertices.map(e=>e):[s.vertices];var s;return Object.assign(Object.assign({},e),{id:e.id+t.id,geometry:Object.assign(Object.assign({},e.geometry),{mvertices:[...e.geometry.mvertices,...i]})})},Object.assign(Object.assign({},e[0]),{geometry:{mvertices:[],vertices:[],type:"multi_polygon"}}));this.shapes.add(Object(o.c)(t));const i=e.map(e=>e.id);e.forEach(e=>{this.shapes.delete(e)}),this.notifyDelete(i),this.notifyCreate(t)}}split(){if(1===this.targetShapes.size){const e=this.targetShapes.values().next().value;if("multi_polygon"===e.geometry.type){e.geometry.mvertices.forEach((t,i)=>{const s=Object(o.c)(Object.assign(Object.assign({},e),{id:e.id+String(i),geometry:{mvertices:[],vertices:t,type:"polygon"}}));this.shapes.add(s),this.notifyCreate(s)});const t=e.id;this.shapes.delete(e),this.notifyDelete([t])}}}};l([Object(s.g)({type:Boolean})],p.prototype,"isOpenedPolygon",void 0),p=l([Object(s.c)("pxn-polygon")],p)},386:function(e,t,i){"use strict";i.r(t),i.d(t,"PluginPolygon",(function(){return n}));var s=i(2),o=(i(314),i(166));
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class n extends o.a{get toolDrawer(){return s.e`
        ${super.toolDrawer}
        <mwc-icon-button icon="call_merge"
                         @click="${()=>this.element.merge()}"
                         title="Group polygons">
                         </mwc-icon-button>
        <mwc-icon-button icon="call_split"
                         @click="${()=>this.element.split()}"
                         title="Split polygon">
                         </mwc-icon-button>
        <mwc-icon-button icon="timeline"
                         style="display: ${"create"==this.mode?"block":"none"}"
                         ?selected=${this.element&&1==this.element.isOpenedPolygon}
                         @click="${()=>{this.element.isOpenedPolygon=!this.element.isOpenedPolygon,this.requestUpdate()}}"
                         title="Polyline/Polygon">
                         </mwc-icon-button>
    `}get editor(){return s.e`<pxn-polygon id="main"
                        mode=${this.mode}
                        @create=${this.onCreate}
                        @update=${this.onUpdate}
                        @delete=${this.onDelete}
                        @selection=${this.onSelection}
                        @mode=${this.onModeChange}></pxn-polygon>`}}customElements.define("plugin-polygon",n)}}]);