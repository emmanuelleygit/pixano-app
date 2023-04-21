(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{145:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i(2),n=i(12);
/**
 * Common plugin style
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
const o=s.b`
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
*/class a extends s.a{static get styles(){return o}static get properties(){return{mode:{type:String}}}firstUpdated(){this.dispatchEvent(new Event("ready"))}onActivate(){this.initDisplay&&this.initDisplay(),this.newData()}initDisplay(){const t=Object(n.b)("application").tasks,e=Object(n.b)("application").taskName,i=t.find(t=>t.name===e);this.attributePicker&&i&&this.attributePicker.reloadSchema(i.spec.label_schema)}get info(){return Object(n.b)("application")}get annotations(){return Object(n.a)().annotations}newData(){const t=Object(n.b)("media").info.path;this.element.input=t,this.element.addEventListener("load",()=>{this.refresh()})}_colorFor(t){return this.attributePicker._colorFor(t)}onModeChange(){this.element&&(this.mode=this.element.mode)}get attributePicker(){return this.shadowRoot.querySelector("attribute-picker")}get element(){return this.shadowRoot.getElementById("main")}render(){return s.e`
        <div class="drawer">${this.toolDrawer}</div>
        <div class="editor">${this.editor}</div>
        <div class="properties-panel">${this.propertyPanel}</div>
    `}}customElements.define("template-plugin",a)},166:function(t,e,i){"use strict";i.d(e,"a",(function(){return h}));var s=i(2),n=(i(119),i(164),i(168),i(120)),o=i(12),a=i(13),r=(i(163),i(145));
/**
 * Template plugin that handles shape instances
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class h extends r.a{static get properties(){return{...super.properties,selectedIds:{type:Array}}}constructor(){super(),this.mode="create",this.selectedIds=[]}onAttributeChanged(){console.log("On attribute changed");const t=this.attributePicker.value;this.selectedIds.forEach(e=>{const i=[...this.element.shapes].find(t=>t.id===e);i.options=i.options||{},Object.keys(t).forEach(e=>{i[e]=JSON.parse(JSON.stringify(t[e]))}),i.color=this._colorFor(i.category),this.collect()})}refresh(){console.log("Refresh"),this.element&&(this.element.shapes=JSON.parse(JSON.stringify(this.annotations.map(t=>({...t,color:this._colorFor(t.category)})))))}onSelection(t){console.log("On selection"),this.selectedIds=t.detail,this.updateDisplayOfSelectedProperties()}updateDisplayOfSelectedProperties(){if(console.log("updated selected prop"),this.selectedIds&&this.selectedIds.length){const t=this.annotations.filter(t=>this.selectedIds.includes(t.id)),e=Object(n.commonJson)(t);this.attributePicker.setAttributes(e)}}onCreate(t){console.log("On create");const e=t.detail;e.id=Math.random().toString(36),Object.entries(this.attributePicker.defaultValue).forEach(([t,i])=>{e[t]=JSON.parse(JSON.stringify(i))}),this.isSequence&&(e.timestamp=this.targetFrameIdx),e.color=this._colorFor(e.category),this.collect()}onUpdate(){console.log("On update"),this.collect()}onDelete(){console.log("On delete"),this.collect()}collect(){console.log("collect");const t=[...this.element.shapes].map(({color:t,...e})=>e);o.c.dispatch(Object(a.g)({annotations:t}))}get propertyPanel(){return s.e`
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
      `}}customElements.define("template-plugin-instance",h)},407:function(t,e,i){"use strict";i.r(e),function(t){i.d(e,"PluginKeypointsAtlas",(function(){return h}));var s=i(2),n=i(13),o=i(12),a=i(166);
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
 */
const r=t=>{if(t instanceof Function){const e=t(Object(o.a)().annotations);o.c.dispatch(Object(n.g)({annotations:e}))}else o.c.dispatch(Object(n.g)({annotations:t}))};class h extends a.a{constructor(){super(),this.atlas=new Image,this.lastMousePosition={x:0,y:0},this.imageIndex=-1,this.keypointIndex=0,this.prevState=[],this.brightness=1}setNextImageIndex(){this.imageIndex=Math.min(this.imagesPerAtlas-1,Math.max(0,~~((Object(o.a)().annotations||[]).length/3)))}setNextkeypointIndex(){this.keypointIndex=(Object(o.a)().annotations||[]).length%3}get label(){return this.attributePicker.schema.category[this.keypointIndex]||{name:""}}get firstLabelModifier(){const t=this.attributePicker.shadowRoot.querySelector("mwc-formfield");if(!t)return null;const e=t.getAttribute("label");return"string"==typeof t.querySelector("mwc-checkbox").getAttribute("checked")?e:null}firstUpdated(){this.shadowRoot.querySelector(".editor").style="\n       display: flex;\n       flex-direction: row;\n       justify-content: center;\n       align-items: stretch;\n     ";const t=this.info.tasks,e=this.info.taskName,i=t.find(t=>t.name===e);if(!i)return;const{imagesPerAtlas:s=50}=i.spec.settings;this.imagesPerAtlas=s,this.canvas=this.shadowRoot.querySelector("#frame"),this.sizeCanvas(),window.addEventListener("resize",this.sizeCanvas.bind(this)),this.attributePicker.setAttribute("shortcuts",JSON.stringify([["SHIFT","Toggle label modifier"],["q","Skip image"],["z","Undo"],["r","Redo"],["m","Brightness -"],["p","Brightness +"],["Arrow Up","Go to previous image"],["Arrow Down","Go to next image"]])),document.addEventListener("keydown",this.onKeyDown.bind(this));const n=document.querySelector("my-app").shadowRoot.querySelector("app-label").shadowRoot.querySelector(".header-menu");n.querySelector('mwc-icon-button[title="undo"]').remove(),n.querySelector('mwc-icon-button[title="redo"]').remove(),this.undoButton=document.createElement("mwc-icon-button"),this.undoButton.setAttribute("title","undo"),this.undoButton.setAttribute("icon","undo"),this.redoButton=document.createElement("mwc-icon-button"),this.redoButton.setAttribute("title","redo"),this.redoButton.setAttribute("icon","redo"),n.insertBefore(this.redoButton,n.children[3]),n.insertBefore(this.undoButton,n.children[3]),this.undoButton.addEventListener("click",this.undo.bind(this)),this.redoButton.addEventListener("click",this.redo.bind(this)),this.attributePicker.showDetails=!0,this.attributePicker.shadowRoot.querySelectorAll(".category").forEach(t=>{t.style.pointerEvents="none"});const a=Object(o.b)().media.info.path;this.atlas.src=a,this.atlas.addEventListener("load",async()=>{this.sizeCanvas(),this.attributePicker.setCategory(this.label.name),this.draw(),this.unsubscriber=o.c.subscribe(()=>{this.attributePicker.setCategory(this.label.name),this.draw()})}),this.dispatchEvent(new Event("ready"))}onActivate(){super.onActivate();window.location.href.includes("to_validate")?this.imageIndex=0:this.setNextImageIndex(),this.keypointIndex=0,this.attributePicker.setCategory(this.label.name),this.draw()}disconnectedCallback(){this.unsubscriber(),window.removeEventListener("resize",this.sizeCanvas.bind(this)),document.removeEventListener("keydown",this.onKeyDown.bind(this)),this.undoButton.removeEventListener("click",this.undo.bind(this)),this.redoButton.removeEventListener("click",this.redo.bind(this))}sizeCanvas(){this.canvas.style.aspectRatio=`${this.atlas.width} / ${this.atlas.height/this.imagesPerAtlas}`;const t=this.canvas.getBoundingClientRect();this.canvas.width=t.width,this.canvas.height=t.height,this.zoom=this.canvas.width/this.atlas.width,this.draw()}undo(){(this.imageIndex>0||this.keypointIndex>0)&&(o.c.dispatch(Object(n.h)()),0===this.keypointIndex?(this.keypointIndex=2,this.imageIndex--):-1===this.keypointIndex?this.keypointIndex=2:this.keypointIndex--,this.draw())}redo(){const t=Object(o.a)().annotations;o.c.dispatch(Object(n.f)());Object(o.a)().annotations.length!==t.length&&(2===this.keypointIndex?(this.keypointIndex=0,this.imageIndex++):this.keypointIndex++,this.draw())}onKeyDown(t){const e=(()=>{switch(t.key){case"Shift":return this.holdingShift=!0,this.draw(),()=>{this.holdingShift=!1,this.draw()};case"ArrowUp":return this.goToPreviousImage(),()=>{this.draw()};case"ArrowDown":return this.goToNextImage(),()=>{this.draw()};case"m":return this.brightness-=.1,()=>{this.draw()};case"p":return this.brightness+=.1,()=>{this.draw()};case"q":return r(t=>(t[3*this.imageIndex+0]=t[3*this.imageIndex+1]=t[3*this.imageIndex+2]={x:null,y:null,modifier:null},t)),this.imageIndex===this.imagesPerAtlas-1?this.keypointIndex=0:(this.keypointIndex=0,this.imageIndex+=1,this.attributePicker.setCategory(this.label.name)),this.draw(),()=>{};case"z":return this.undo(),()=>{};case"r":return this.redo(),()=>{};default:return()=>{}}})();document.addEventListener("keyup",e,{once:!0})}newData(){const t=Object(o.b)().media.info.path;this.atlas.src=t,this.atlas.addEventListener("load",async()=>{this.sizeCanvas(),this.imageIndex=0,this.keypointIndex=0,this.attributePicker.setCategory(this.label.name),this.draw(),this.unsubscriber=o.c.subscribe(()=>{this.draw(),this.attributePicker.setCategory(this.label.name)})})}drawImage(){const t=this.canvas.getContext("2d");t.filter=`brightness(${100*this.brightness}%)`,t.drawImage(this.atlas,0,-this.imageIndex*(this.atlas.height/this.imagesPerAtlas)*this.zoom,this.atlas.width*this.zoom,this.atlas.height*this.zoom)}drawTarget(){const t=this.canvas.getContext("2d");t.beginPath();t.arc(this.lastMousePosition.x,this.lastMousePosition.y,6,0,2*Math.PI,!1),this.firstLabelModifier?(this.label.color.startsWith("#")&&(t.fillStyle=this.label.color+"80"||"red"),this.label.color.startsWith("rbg")&&(t.fillStyle=`rgba(${this.label.color.split(",").slice(0,3).map(t=>t.replace(/[^0-9]/g,"")).join(",")}, 0.5)`)):t.fillStyle=this.label.color||"red",t.fill(),t.fillRect(-1,this.lastMousePosition.y-1,this.canvas.width,2),t.fillRect(this.lastMousePosition.x-1,-1,2,this.canvas.height),t.fillStyle="#ffffff",t.font="32px sans-serif";const e=`${this.label.name} ${this.firstLabelModifier?` (${this.firstLabelModifier})`:""}`,i=this.lastMousePosition.x-16*(e.length+1),s=this.lastMousePosition.y-12;t.lineWidth=3.2,t.strokeText(e,i,s),t.fillText(e,i,s)}drawKeypoints(){if(this.imageIndex>-1){const t=this.attributePicker.schema.category.map(({color:t})=>t),e=this.canvas.getContext("2d");for(let i=0;i<3;i++){const s=Object(o.a)().annotations[3*this.imageIndex+i];if(s&&"number"==typeof s.x&&"number"==typeof s.y){e.beginPath();const n=6;e.arc(s.x*this.canvas.width,s.y*this.canvas.height,n,0,2*Math.PI,!1);const o=t[i]||"#000000";null!==s.modifier?(o.startsWith("#")&&(e.fillStyle=o+"40"||"#000000"),o.startsWith("rbg")&&(e.fillStyle=`rgba(${o.split(",").slice(0,3).map(t=>t.replace(/[^0-9]/g,"")).join(",")}, 0.25)`)):e.fillStyle=o,e.fill()}}}}drawCounter(){const t=this.canvas.getContext("2d");t.fillStyle="#ffffff",t.font="32px sans-serif";t.lineWidth=3.2;const e=`${this.imageIndex+1} / ${this.imagesPerAtlas}`;t.strokeText(e,16,32),t.fillText(e,16,32)}draw(){t(()=>{const t=this.attributePicker.shadowRoot.querySelector("mwc-formfield > mwc-checkbox");t&&(this.holdingShift?t.setAttribute("checked",""):t.removeAttribute("checked")),this.drawImage(),this.drawCounter(),this.drawKeypoints(),-1!==this.keypointIndex&&this.drawTarget()})}onClick(t){if(!(this.imageIndex===this.imagesPerAtlas-1&&-1===this.keypointIndex)){const e=t.offsetX/this.canvas.width,i=t.offsetY/this.canvas.height,s=this.keypointIndex,n=this.imageIndex;r(t=>t.length>3*n+s?t.map((t,o)=>o===3*n+s?{x:e,y:i,modifier:this.firstLabelModifier}:t):[...t,{x:e,y:i,modifier:this.firstLabelModifier}]),2===this.keypointIndex?this.imageIndex===this.imagesPerAtlas-1?this.keypointIndex=-1:(this.keypointIndex=0,this.imageIndex+=1):this.keypointIndex++,this.attributePicker.setCategory(this.label.name)}this.draw()}onMouseMove(t){this.lastMousePosition={x:t.offsetX,y:t.offsetY},this.draw()}goToPreviousImage(){this.imageIndex>0&&(this.imageIndex-=1,this.keypointIndex=0,this.attributePicker.setCategory(this.label.name),this.draw())}goToNextImage(){this.imageIndex<~~(Object(o.a)().annotations||[]).length/3-1&&(this.imageIndex+=1,this.keypointIndex=0,this.attributePicker.setCategory(this.label.name),this.draw())}get toolDrawer(){return s.e`
      ${super.toolDrawer}
      <mwc-icon-button
        icon="arrow_upward"
        @click=${this.goToPreviousImage}
      ></mwc-icon-button>
      <mwc-icon-button
        icon="arrow_downward"
        @click=${this.goToNextImage}
      ></mwc-icon-button>
    `}get editor(){return s.e`<canvas
      id="frame"
      @click=${this.onClick}
      @mousemove=${this.onMouseMove}
      style="height: 100%;"
    ></canvas>`}}customElements.define("plugin-keypoints-atlas",h)}.call(this,i(364).setImmediate)}}]);