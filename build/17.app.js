(window.webpackJsonp=window.webpackJsonp||[]).push([[17,23],{114:function(e,t,i){"use strict";i.d(t,"b",(function(){return c})),i.d(t,"a",(function(){return h}));var s=i(207),o=i(100),n=i(113),r=i(262),a=i(265);class c extends a.a{constructor(e={}){super(e),this.cachedShape=null,this.activeObjectId="",this.isDragging=!1,this.isScaling=!1,this._changed=!1,this.initialControlIdx=-1,this.activeControlIdx=-1,this.previousPos={x:0,y:0},this.observer=null,this.renderer=e.renderer||new s.a,this.targetShapes=e.targetShapes||new o.b,this.graphics=e.graphics||new Set,this.observer=(e,t)=>{switch(e){case"set":this.graphics.forEach(e=>{e.state="none",this.setShapeInteraction(e),e.draw()}),(t=Array.isArray(t)?t:[t]).forEach(e=>{const t=this.getGraphic(e);t.state="box",this.setShapeInteraction(t),t.draw()});break;case"add":(t=Array.isArray(t)?t:[t]).forEach(e=>{const t=this.getGraphic(e);t.state="box",this.setShapeInteraction(t),t.draw()});break;case"delete":{const e=this.getGraphic(t);e.state="none",this.setShapeInteraction(e),e.draw();break}case"clear":this.graphics.forEach(e=>{e.state="none",this.setShapeInteraction(e),e.draw()})}},this.bindings()}set changed(e){if(this._changed=e,e){const e=this.getShape(this.activeObjectId);e&&(this.cachedShape=JSON.parse(JSON.stringify(e)))}else this.cachedShape=null}get changed(){return this._changed}bindings(){this.onRootDown=this.onRootDown.bind(this),this.onObjectDown=this.onObjectDown.bind(this),this.onObjectMove=this.onObjectMove.bind(this),this.onObjectUp=this.onObjectUp.bind(this)}setShapeInteraction(e=null){e&&("box"===e.state?e.controls.forEach((t,i)=>{t.removeAllListeners(),t.on("pointerdown",t=>{t.stopPropagation(),t.idx=i,this.onControlDown(t,e)})}):"none"===e.state&&(e.controls.forEach(e=>{e.removeAllListeners("pointerdown"),e.interactive=!1,e.buttonMode=!1}),e.draw()))}drawDefaultShapesDecoration(e=null){(e?new Set([e]):this.graphics).forEach(e=>{const t=this.targetShapes.has(e.data)?this.targetShapes.size>2?"contour":"box":"none";e.state=t,this.setShapeInteraction(e),e.draw()});const t=this.getFirstGraphic();t&&this.renderer.bringToFront(t)}activate(){Object(o.d)(this.targetShapes,this.observer),this.graphics.forEach(e=>{e.interactive=!0,e.buttonMode=!0,e.on("pointerdown",this.onObjectDown)}),this.drawDefaultShapesDecoration(),this.renderer.stage.interactive=!0,this.renderer.stage.removeListener("pointerdown",this.onRootDown),this.renderer.stage.on("pointerdown",this.onRootDown)}deactivate(){Object(o.e)(this.targetShapes,this.observer),this.graphics.forEach(e=>{e.state="none",this.setShapeInteraction(e),e.interactive=!1,e.buttonMode=!1,e.removeAllListeners()}),this.renderer.stage.removeListener("pointerdown",this.onRootDown)}onRootDown(e){2!==e.data.originalEvent.button&&1!==e.data.originalEvent.button&&this.targetShapes.size&&(this.targetShapes.clear(),this.emitSelection())}onObjectDown(e){const t=e.data.originalEvent.button;if(2===t||1===t)return;const i=e.shape,s=i.id;this.previousPos=this.renderer.getPosition(e.data),this.activeObjectId=s,this.isDragging=!0,this.changed=!1;if(![...this.graphics].find(e=>e.data===i))return;this.renderer.stage.on("pointermove",this.onObjectMove),this.renderer.stage.on("pointerupoutside",this.onObjectUp);this.doObjectSelection(i,e.data.originalEvent.shiftKey)&&this.emitSelection()}doObjectSelection(e,t=!1){const i=new Set(this.targetShapes);return t?this.targetShapes.has(e)?this.targetShapes.delete(e):this.targetShapes.add(e):this.targetShapes.has(e)||(this.targetShapes.clear(),this.targetShapes.add(e)),JSON.stringify([...this.targetShapes])!==JSON.stringify([...i])}onObjectMove(e){const t=e.shape;if(e.data.originalEvent.pressure&&this.isDragging&&this.targetShapes.has(t)){const t=this.renderer.getPosition(e.data);if(t.x===this.previousPos.x&&t.y===this.previousPos.y)return;let i=(t.x-this.previousPos.x)/this.renderer.imageWidth,s=(t.y-this.previousPos.y)/this.renderer.imageHeight;const o=this.globalBounds(),n=1-o[3],r=o[1],a=1-o[2],c=o[0];if(this.renderer.enableOutsideDrawing||(s=Math.min(n,s),s=Math.max(-r,s),i=Math.min(a,i),i=Math.max(-c,i)),0===i&&0===s)return;this.changed||(this.changed=!0),this.targetShapes.forEach(({geometry:e})=>{e.vertices=e.vertices.map((e,t)=>t%2?e+s:e+i)}),this.previousPos=t}}onObjectUp(e){this.isDragging=!1;this.getGraphic(e.shape)&&(this.renderer.stage.removeListener("pointermove",this.onObjectMove),this.renderer.stage.removeListener("pointerupoutside",this.onObjectUp),this.changed&&this.emitUpdate())}emitUpdate(){this.emit("update",[...this.targetShapes].map(e=>e.id))}emitSelection(){this.emit("selection",[...this.targetShapes].map(e=>e.id))}onControlDown(e,t){this.isScaling=!0;const i=e.idx;this.activeControlIdx=i,this.changed=!1,this.initialControlIdx=i,t&&(t.controls[this.activeControlIdx].on("pointermove",e=>{e.stopPropagation(),e.idx=this.activeControlIdx,this.onControlMove(e)}),t.controls[this.activeControlIdx].on("pointerupoutside",e=>{e.stopPropagation(),this.onControlUp(t)}))}onControlMove(e){if(this.isScaling&&e.idx===this.activeControlIdx){this.changed||(this.changed=!0);let t=1,i=0,s=1,o=0;[t,s,i,o]=this.globalBounds();const r=this.renderer.getPosition(e.data);let a=r.x/this.renderer.imageWidth,c=r.y/this.renderer.imageHeight;a=Math.min(1,Math.max(0,a)),c=Math.min(1,Math.max(0,c)),[t,s,i,o]=this.globalBounds();let h=1,d=1,l=1,p=1,u=1,g=1;if(.5!==n.a[this.activeControlIdx].x&&(l=t+Math.abs(n.a[this.activeControlIdx].x-1)*(i-t),u=t+n.a[this.activeControlIdx].x*(i-t),h=(a-l)/(u-l)),.5!==n.a[this.activeControlIdx].y&&(p=s+Math.abs(n.a[this.activeControlIdx].y-1)*(o-s),g=s+n.a[this.activeControlIdx].y*(o-s),d=(c-p)/(g-p)),0===h||0===d)return;(h<0||d<0)&&(h<=0&&(this.activeControlIdx=n.a.findIndex(e=>e.y===n.a[this.activeControlIdx].y&&e.x===Math.abs(n.a[this.activeControlIdx].x-1))),d<=0&&(this.activeControlIdx=n.a.findIndex(e=>e.x===n.a[this.activeControlIdx].x&&e.y===Math.abs(n.a[this.activeControlIdx].y-1)))),this.targetShapes.forEach(e=>{if(h<0||d<0){const t=e.geometry.vertices;let i=[];for(let e=t.length-2;e>=0;e-=2){const s=h<0?t[e]:t[t.length-2-e],o=d<0?t[e+1]:t[t.length-1-e];i=i.concat([s,o])}e.geometry.vertices=i}e.geometry.vertices=[...e.geometry.vertices.map((e,t)=>t%2==0&&1!==h?(e-l)*h+l:t%2==1&&1!==d?(e-p)*d+p:e)]})}}onControlUp(e){-1!==this.initialControlIdx&&e&&(e.controls[this.initialControlIdx].removeAllListeners("pointermove"),e.controls[this.initialControlIdx].removeAllListeners("pointerupoutside"),this.isScaling=!1,this.activeControlIdx=-1,this.initialControlIdx=-1,this.changed&&(this.changed=!1,this.emitUpdate()))}globalBounds(){let e=1,t=1,i=0,s=0;return this.targetShapes.forEach(o=>{const n=Object(r.a)(o.geometry.vertices);n[0]<e&&(e=n[0]),n[2]>i&&(i=n[2]),n[1]<t&&(t=n[1]),n[3]>s&&(s=n[3])}),[e,t,i,s]}getGraphic(e){let t=[...this.graphics].find(t=>t.data===e);return t||(t=[...this.graphics].find(t=>t.data.id===e.id)),t}getFirstGraphic(){const e=this.targetShapes.values().next().value;return e?[...this.graphics].find(t=>t.data===e):null}getShape(e){return[...this.targetShapes].find(t=>t.id===e)}}class h extends a.a{constructor(e={}){super(e),this.cross=new n.b,this.tmpShape=null,this.isCreating=!1,this.mouse={x:0,y:0},this.observer=null,this.id=Math.random().toString(36).substring(2),this.renderer=e.renderer||new s.a,this._shapes=e._shapes||new o.b,this.targetShapes=e.targetShapes||new o.b,this.graphics=e.graphics||new Set,this.renderer.stage.addChild(this.cross),this.observer=()=>{this.graphics.forEach(e=>{e.state=this.getShape(e.data.id)?"contour":"none",e.draw()})},this.bindings(),this.onImageSizeChange=()=>{const e=this.renderer.mouse;this.cross.cx=e.x,this.cross.cy=e.y,this.cross.scaleX=this.renderer.imageWidth,this.cross.scaleY=this.renderer.imageHeight,this.cross.draw()}}bindings(){console.log("bindings"),this.onRootMove=this.onRootMove.bind(this),this.onRootDown=this.onRootDown.bind(this),this.onRootUp=this.onRootUp.bind(this)}activate(){Object(o.d)(this.targetShapes,this.observer),this.cross.visible=!0;const e=this.renderer.mouse;this.cross.cx=e.x,this.cross.cy=e.y,this.cross.scaleX=this.renderer.imageWidth,this.cross.scaleY=this.renderer.imageHeight,this.cross.draw(),this.renderer.stage.on("pointerdown",this.onRootDown),this.renderer.stage.on("pointermove",this.onRootMove),this.renderer.stage.on("pointerupoutside",this.onRootUp),this.renderer.addEventListener("resize",this.onImageSizeChange)}deactivate(){Object(o.e)(this.targetShapes,this.observer),this.cross.visible=!1;const e=this.tmpShape;e&&(this.renderer.stage.removeChild(e),e.destroy(),this.tmpShape=null),this.renderer.stage.removeListener("pointerdown",this.onRootDown),this.renderer.stage.removeListener("pointermove",this.onRootMove),this.renderer.stage.removeListener("pointerupoutside",this.onRootUp),this.renderer.removeEventListener("resize",this.onImageSizeChange)}emitCreate(){console.log("emitcreate");const e=[...this._shapes].pop();this.targetShapes.set([e]),this.emit("create",e)}emitSelection(){console.log("emitselection"),this.emit("selection",[...this.targetShapes].map(e=>e.id))}emitUpdate(){console.log("emitupdate"),this.dispatchEvent(new Event("update"))}onRootMove(e){const t=e.data.originalEvent;if(2===t.buttons||4===t.buttons)return;const i=this.renderer.getPosition(e.data);i.x===this.cross.cx&&i.y===this.cross.cy||(this.cross.scaleX=this.renderer.imageWidth,this.cross.scaleY=this.renderer.imageHeight,this.cross.cx=i.x,this.cross.cy=i.y,this.cross.draw())}onRootUp(e){console.log("OnRootUp")}getGraphic(e){console.log("graphic");let t=[...this.graphics].find(t=>t.data===e);return t||(t=[...this.graphics].find(t=>t.data.id===e.id)),t}getShape(e){return console.log("shape"),[...this.targetShapes].find(t=>t.id===e)}}},145:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var s=i(2),o=i(12);
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
		`}};o([Object(s.g)({type:Array})],n.prototype,"shortcuts",void 0),o([Object(s.g)({type:Boolean})],n.prototype,"showDetail",void 0),o([Object(s.g)({type:Object})],n.prototype,"schema",void 0),o([Object(s.g)({type:Object})],n.prototype,"value",void 0),n=o([Object(s.c)("attribute-picker")],n)},164:function(e,t,i){"use strict";var s=i(11),o=i(313),n=i(2),r=(i(263),i(165)),a={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},c={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"},h=function(e){function t(i){var o=e.call(this,Object(s.a)(Object(s.a)({},t.defaultAdapter),i))||this;return o.hasToggledAriaLabel=!1,o}return Object(s.c)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return c},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this.adapter.getAttr(c.DATA_ARIA_LABEL_ON),t=this.adapter.getAttr(c.DATA_ARIA_LABEL_OFF);if(e&&t){if(null!==this.adapter.getAttr(c.ARIA_PRESSED))throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(c.ARIA_PRESSED,String(this.isOn()))},t.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},t.prototype.isOn=function(){return this.adapter.hasClass(a.ICON_BUTTON_ON)},t.prototype.toggle=function(e){if(void 0===e&&(e=!this.isOn()),e?this.adapter.addClass(a.ICON_BUTTON_ON):this.adapter.removeClass(a.ICON_BUTTON_ON),this.hasToggledAriaLabel){var t=e?this.adapter.getAttr(c.DATA_ARIA_LABEL_ON):this.adapter.getAttr(c.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(c.ARIA_LABEL,t||"")}else this.adapter.setAttr(c.ARIA_PRESSED,""+e)},t}(r.a),d=i(203),l=i(205),p=i(258);
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
class u extends d.a{constructor(){super(...arguments),this.mdcFoundationClass=h,this.label="",this.disabled=!1,this.onIcon="",this.offIcon="",this.on=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new p.a(()=>(this.shouldRenderRipple=!0,this.ripple))}createAdapter(){return Object.assign(Object.assign({},Object(d.b)(this.mdcRoot)),{getAttr:e=>this.mdcRoot.getAttribute(e),setAttr:(e,t)=>{this.mdcRoot.setAttribute(e,t)},notifyChange:e=>{this.dispatchEvent(new CustomEvent("MDCIconButtonToggle:change",{detail:e,bubbles:!0}))}})}handleClick(){this.on=!this.on,this.mdcFoundation.handleClick()}focus(){this.rippleHandlers.startFocus(),this.mdcRoot.focus()}blur(){this.rippleHandlers.endFocus(),this.mdcRoot.blur()}renderRipple(){return this.shouldRenderRipple?n.e`
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
      </button>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}Object(s.b)([Object(n.h)(".mdc-icon-button")],u.prototype,"mdcRoot",void 0),Object(s.b)([Object(n.g)({type:String})],u.prototype,"label",void 0),Object(s.b)([Object(n.g)({type:Boolean,reflect:!0})],u.prototype,"disabled",void 0),Object(s.b)([Object(n.g)({type:String})],u.prototype,"onIcon",void 0),Object(s.b)([Object(n.g)({type:String})],u.prototype,"offIcon",void 0),Object(s.b)([Object(n.g)({type:Boolean,reflect:!0}),Object(l.a)((function(e){this.mdcFoundation.toggle(e)}))],u.prototype,"on",void 0),Object(s.b)([Object(n.i)("mwc-ripple")],u.prototype,"ripple",void 0),Object(s.b)([Object(n.f)()],u.prototype,"shouldRenderRipple",void 0),Object(s.b)([Object(n.d)({passive:!0})],u.prototype,"handleRippleMouseDown",null),Object(s.b)([Object(n.d)({passive:!0})],u.prototype,"handleRippleTouchStart",null);
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
let g=class extends u{};g.styles=o.a,g=Object(s.b)([Object(n.c)("mwc-icon-button-toggle")],g)},166:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var s=i(2),o=(i(119),i(164),i(168),i(120)),n=i(12),r=i(13),a=(i(163),i(145));
/**
 * Template plugin that handles shape instances
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class c extends a.a{static get properties(){return{...super.properties,selectedIds:{type:Array}}}constructor(){super(),this.mode="create",this.selectedIds=[]}onAttributeChanged(){console.log("On attribute changed");const e=this.attributePicker.value;this.selectedIds.forEach(t=>{const i=[...this.element.shapes].find(e=>e.id===t);i.options=i.options||{},Object.keys(e).forEach(t=>{i[t]=JSON.parse(JSON.stringify(e[t]))}),i.color=this._colorFor(i.category),this.collect()})}refresh(){console.log("Refresh"),this.element&&(this.element.shapes=JSON.parse(JSON.stringify(this.annotations.map(e=>({...e,color:this._colorFor(e.category)})))))}onSelection(e){console.log("On selection"),this.selectedIds=e.detail,this.updateDisplayOfSelectedProperties()}updateDisplayOfSelectedProperties(){if(console.log("updated selected prop"),this.selectedIds&&this.selectedIds.length){const e=this.annotations.filter(e=>this.selectedIds.includes(e.id)),t=Object(o.commonJson)(e);this.attributePicker.setAttributes(t)}}onCreate(e){console.log("On create");const t=e.detail;t.id=Math.random().toString(36),Object.entries(this.attributePicker.defaultValue).forEach(([e,i])=>{t[e]=JSON.parse(JSON.stringify(i))}),this.isSequence&&(t.timestamp=this.targetFrameIdx),t.color=this._colorFor(t.category),this.collect()}onUpdate(){console.log("On update"),this.collect()}onDelete(){console.log("On delete"),this.collect()}collect(){console.log("collect");const e=[...this.element.shapes].map(({color:e,...t})=>t);n.c.dispatch(Object(r.g)({annotations:e}))}get propertyPanel(){return s.e`
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
      `}}customElements.define("template-plugin-instance",c)},202:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var s=i(2),o=i(100),n=i(114),r=i(255),a=i(113);const c=e=>{switch(e.geometry.type){case"rectangle":return new a.g(e);case"polygon":return new a.f(e);case"multi_polygon":return new a.e(e);case"graph":return new a.c(e);default:return new a.g(e)}};var h=function(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let d=class extends r.a{constructor(){super(),this.mode="edit",this.enableOutsideDrawing=!1,this.targetShapes=new o.b,this.graphics=new Set,this.dataToShape=c,this.keyDownHandler=e=>{"Alt"===e.key?this.switchMode():"h"===e.key&&(this.hideLabels=!this.hideLabels)},this._shapes=new o.b,this.viewControls.addEventListener("zoom",()=>{this.renderer.labelLayer.children.forEach(e=>{e.nodeContainer.children.forEach(e=>{e.scale.x=1.5/this.renderer.stage.scale.x,e.scale.y=1.5/this.renderer.stage.scale.y})})}),this.modes={edit:new n.b(Object.assign({},this))},this.renderer.addEventListener("resize",()=>{this.graphics.forEach(e=>{e.scaleX=this.renderer.imageWidth||100,e.scaleY=this.renderer.imageHeight||100,e.draw()})}),this.observeShapeForDisplay(),this.modes[this.mode].activate()}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.keyDownHandler)}disconnectedCallback(){window.removeEventListener("keydown",this.keyDownHandler),super.disconnectedCallback()}switchMode(){const e=Object.keys(this.modes),t=e.findIndex(e=>e===this.mode);this.mode=e[(t+1)%e.length]}get selectedShapeIds(){return[...this.targetShapes.values()].map(e=>e.id)}set selectedShapeIds(e){const t=[...this.shapes].filter(t=>e.includes(t.id));this.targetShapes.set(t)}get selectedShapes(){return[...this.targetShapes]}get shapes(){return this._shapes}set shapes(e){this._shapes.set(e.map(o.c))}onCopy(){if(this.targetShapes.size)return JSON.stringify([...this.targetShapes])}onPaste(e){const t=JSON.parse(e);t instanceof Array&&t.forEach(e=>{const t=Object(o.c)(Object.assign(Object.assign({},e),{id:Math.random().toString(36)}));this.shapes.add(t),this.notifyCreate(t)})}observeShapeForDisplay(){Object(o.d)(this._shapes,(e,t)=>{var i;switch(e){case"set":case"add":t=[t],"set"===e&&(this.renderer.clearLabels(),this.graphics.clear(),t=this._shapes),t.forEach(e=>{const t=this.dataToShape(e);this.graphics.add(t),t.scaleX=this.renderer.imageWidth||100,t.scaleY=this.renderer.imageHeight||100,this.renderer.labelLayer.addChild(t),t.draw()}),null===(i=this.modes[this.mode])||void 0===i||i.reset();break;case"delete":{const e=[...this.graphics].find(({data:e})=>e===t);e&&(this.graphics.delete(e),this.renderer.labelLayer.removeChild(e),this.targetShapes.clear());break}case"clear":this.renderer.clearLabels(),this.targetShapes.size&&this.targetShapes.clear()}})}keyBinding(e){super.keyBinding(e);switch(e.key){case"Delete":{const e=this.selectedShapeIds;[...this.targetShapes].forEach(e=>{this.shapes.delete(e)}),this.notifyDelete(e);break}case"Escape":this.targetShapes.clear(),this.notifySelection(this.selectedShapeIds)}}setController(e,t){var i;return null===(i=this.modes[e])||void 0===i||i.deactivate(),this.modes[e]=t,this}setMode(e,t){var i;e!==t&&(e=null===e?"edit":e,this.modes[e]&&this.modes[e].deactivate(),null===(i=this.modes[t])||void 0===i||i.activate(),this.mode=t,this.notifyMode())}onTabulation(e){if("create"===this.mode)return;e.preventDefault();const t=[...this.shapes.values()],i=t.findIndex(e=>this.targetShapes.has(e))||0,s=t[e.shiftKey?(i-1+t.length)%t.length:(i+1+t.length)%t.length];s&&(this.targetShapes.set([s]),this.notifySelection(this.selectedShapeIds))}updated(e){if(super.updated(e),e.has("mode")&&this.mode){const t=e.get("mode");this.setMode(t,this.mode)}e.has("enableOutsideDrawing")&&(this.renderer.enableOutsideDrawing=this.enableOutsideDrawing),e.has("hideLabels")&&!0===this.hideLabels&&(this.targetShapes.clear(),this.notifySelection([]))}notifyUpdate(e){this.dispatchEvent(new CustomEvent("update",{detail:e}))}notifyMode(){this.dispatchEvent(new CustomEvent("mode",{detail:this.mode}))}notifySelection(e){this.dispatchEvent(new CustomEvent("selection",{detail:e}))}notifyCreate(e){this.dispatchEvent(new CustomEvent("create",{detail:e}))}notifyDelete(e){this.dispatchEvent(new CustomEvent("delete",{detail:e}))}};h([Object(s.g)({type:String})],d.prototype,"mode",void 0),h([Object(s.g)({type:Boolean})],d.prototype,"enableOutsideDrawing",void 0),d=h([Object(s.c)("pxn-canvas-2d")],d)},204:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var s=i(2),o=i(202),n=i(100),r=i(114),a=i(113);class c extends r.a{constructor(){super(...arguments),this.updated=!1}onRootDown(e){const t=e.data.originalEvent;if(2===t.buttons||4===t.buttons)return;this.isCreating=!0,this.mouse=this.renderer.getPosition(e.data);const i=this.renderer.normalize(this.mouse),s=Object(n.c)({id:"tmp",color:"red",geometry:{vertices:[i.x,i.y,i.x,i.y],type:"rectangle"}});this.tmpShape=new a.g(s),this.renderer.stage.addChild(this.tmpShape),this.tmpShape.scaleX=this.renderer.imageWidth,this.tmpShape.scaleY=this.renderer.imageHeight,this.tmpShape.draw()}onRootMove(e){super.onRootMove(e);const t=this.renderer.getPosition(e.data);if((t.x!==this.mouse.x||t.y!==this.mouse.y)&&(this.mouse=t,this.isCreating)){const e=this.tmpShape;if(e){this.updated||(this.updated=!0);const t=this.renderer.normalize(this.mouse);e.data.geometry.vertices[3]=t.y,e.data.geometry.vertices[2]=t.x}}}onRootUp(){this.isCreating&&(this.isCreating=!1,this.updated&&this.createRectangle())}createRectangle(){this.updated=!1;const e=this.tmpShape,t=e.data.geometry.vertices,i=Math.min(t[0],t[2]),s=Math.max(t[0],t[2]),o=Math.min(t[1],t[3]),n=Math.max(t[1],t[3]);e.data.id=Math.random().toString(36),e.data.geometry.vertices=[i,o,s,n],this.renderer.stage.removeChild(e),e.destroy(),this.tmpShape=null,this._shapes.add(e.data),this.emitCreate(),this.emitSelection()}}var h=function(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let d=class extends o.a{constructor(){super(),this.setController("create",new c(Object.assign({},this))),this.addEventListener("creating-rectangle",()=>{this.showTooltip("Drag and release to end rectangle.")})}};d=h([Object(s.c)("pxn-rectangle")],d)},316:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i(12),o=i(13);
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
const n=e=>class extends e{static dataType(){return"sequence_"+super.dataType}newData(){const e=Object(s.b)("media").info;if(!e.children)return;const t=e.children.map(e=>e.path);this.element.input=t,this.element.addEventListener("load",()=>{this.refresh()})}get isSequence(){return!0}get targetFrameIdx(){return this.element.frameIdx}get annotations(){return(Object(s.a)().annotations||[]).filter(e=>e.timestamp===this.targetFrameIdx)}collect(){const e=[...this.element.shapes].map(({color:e,...t})=>t);let t=Object(s.a)().annotations||[];t=t.filter(e=>e.timestamp!==this.targetFrameIdx),t=[...t,...e],s.c.dispatch(Object(o.g)({annotations:t}))}}},376:function(e,t,i){"use strict";i.r(t),i.d(t,"PluginRectangle",(function(){return n}));var s=i(2),o=(i(204),i(166));
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class n extends o.a{static dataType(){return"image"}get editor(){return s.e`<pxn-rectangle id="main"
                            mode=${this.mode}
                            @create=${this.onCreate}
                            @update=${this.onUpdate}
                            @delete=${this.onDelete}
                            @selection=${this.onSelection}
                            @mode=${this.onModeChange}></pxn-rectangle>`}}customElements.define("plugin-rectangle",n)},414:function(e,t,i){"use strict";i.r(t),i.d(t,"PluginSequencePointRectangle",(function(){return c}));var s=i(2),o=i(376),n=i(316),r=i(12),a=i(13);
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class c extends(Object(n.a)(o.PluginRectangle)){constructor(){super(),this.targetAttribute="posture",window.addEventListener("keydown",e=>{if("x"===e.key&&(this.mode="point"===this.mode?"edit":"point"),"q"==e.code){const e=this.attributePicker.schema.category[0].properties.find(e=>"occlusion"===e.name);e&&(this.targetAttribute=e.name)}if("s"==e.code){const e=this.attributePicker.schema.category[0].properties.find(e=>"truncation"===e.name);e&&(this.targetAttribute=e.name)}if("q"==e.code){const e=this.attributePicker.schema.category[0].properties.find(e=>"posture"===e.name);e&&(this.targetAttribute=e.name)}if(!isNaN(e.key)){const t=this.attributePicker.schema.category[0].properties.find(e=>e.name==this.targetAttribute);if(null==t)return;const i=Math.round(e.key);[...this.element.targetShapes].forEach(e=>{i<t.enum.length&&(e.options[this.targetAttribute]=t.enum[i])}),this.collect(),this.updateDisplayOfSelectedProperties()}})}get annotations(){return super.annotations.filter(e=>1!=e.detection)}onPoint(e){const t=e.detail,i=super.annotations.filter(e=>e.detection);if(i.length){if(i.sort((e,i)=>{const s=e.geometry.vertices[0],o=e.geometry.vertices[1],n=.5*(s+e.geometry.vertices[2]),r=.5*(o+e.geometry.vertices[3]),a=i.geometry.vertices[0],c=i.geometry.vertices[1],h=.5*(a+i.geometry.vertices[2]),d=.5*(c+i.geometry.vertices[3]);return(n-t.x)*(n-t.x)+(r-t.y)*(r-t.y)-((h-t.x)*(h-t.x)+(d-t.y)*(d-t.y))}),i[0]&&this.isInside(i[0].geometry.vertices,t)){const e=JSON.parse(JSON.stringify(i[0]));delete e.detection,r.c.dispatch(Object(a.g)({annotations:getAnnotations().annotations.map(t=>t.id===e.id?e:t)})),this.refresh()}}else console.log("no predictions.")}get editor(){return s.e`<pxn-rectangle id="main"
                              mode=${this.mode}
                              @point=${this.onPoint}
                              @create=${this.onCreate}
                              @update=${this.onUpdate}
                              @delete=${this.onDelete}
                              @selection=${this.onSelection}
                              @mode=${this.onModeChange}></pxn-rectangle>`}get toolDrawer(){return s.e`
            <mwc-icon-button ?selected=${"edit"===this.mode}
                              title="Edit"
                              icon="navigation"
                              @click="${()=>this.mode="edit"}">
            </mwc-icon-button>
            <mwc-icon-button ?selected=${"create"===this.mode}
                              icon="add_circle_outline"
                              title="Create"
                              @click="${()=>this.mode="create"}">
            </mwc-icon-button>
            <mwc-icon-button ?selected=${"point"===this.mode}
                              icon="all_out"
                              title="point"
                              @click="${()=>this.mode="point"}">
            </mwc-icon-button>
        `}isInside(e,t){return e[0]<=t.x&&t.x<=e[2]&&e[1]<=t.y&&t.y<=e[3]}}customElements.define("plugin-sequence-point-rectangle",c)}}]);