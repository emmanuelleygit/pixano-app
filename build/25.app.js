(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{145:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(2),a=n(12);
/**
 * Common plugin style
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
const s=i.b`
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
*/class r extends i.a{static get styles(){return s}static get properties(){return{mode:{type:String}}}firstUpdated(){this.dispatchEvent(new Event("ready"))}onActivate(){this.initDisplay&&this.initDisplay(),this.newData()}initDisplay(){const t=Object(a.b)("application").tasks,e=Object(a.b)("application").taskName,n=t.find(t=>t.name===e);this.attributePicker&&n&&this.attributePicker.reloadSchema(n.spec.label_schema)}get info(){return Object(a.b)("application")}get annotations(){return Object(a.a)().annotations}newData(){const t=Object(a.b)("media").info.path;this.element.input=t,this.element.addEventListener("load",()=>{this.refresh()})}_colorFor(t){return this.attributePicker._colorFor(t)}onModeChange(){this.element&&(this.mode=this.element.mode)}get attributePicker(){return this.shadowRoot.querySelector("attribute-picker")}get element(){return this.shadowRoot.getElementById("main")}render(){return i.e`
        <div class="drawer">${this.toolDrawer}</div>
        <div class="editor">${this.editor}</div>
        <div class="properties-panel">${this.propertyPanel}</div>
    `}}customElements.define("template-plugin",r)},316:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(12),a=n(13);
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
const s=t=>class extends t{static dataType(){return"sequence_"+super.dataType}newData(){const t=Object(i.b)("media").info;if(!t.children)return;const e=t.children.map(t=>t.path);this.element.input=e,this.element.addEventListener("load",()=>{this.refresh()})}get isSequence(){return!0}get targetFrameIdx(){return this.element.frameIdx}get annotations(){return(Object(i.a)().annotations||[]).filter(t=>t.timestamp===this.targetFrameIdx)}collect(){const t=[...this.element.shapes].map(({color:t,...e})=>e);let e=Object(i.a)().annotations||[];e=e.filter(t=>t.timestamp!==this.targetFrameIdx),e=[...e,...t],i.c.dispatch(Object(a.g)({annotations:e}))}}},323:function(t,e){},324:function(t,e){},325:function(t,e){},326:function(t,e){},327:function(t,e){},387:function(t,e,n){"use strict";n.r(e),n.d(e,"PluginTracking",(function(){return c}));var i=n(145),a=n(316),s=n(2),r=(n(360),n(12)),o=n(13);
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class c extends(Object(a.a)(i.a)){static get properties(){return{...super.properties||{},selectedTracks:{type:Object},tracks:{type:Object}}}constructor(){super(),this.mode="edit",this.tracks={},this.targetAttribute="posture",window.addEventListener("keydown",t=>{const e=[...this.element.selectedTrackIds][0];if(e){const n=e?this.element.categories.find(t=>t.name==this.tracks[e].category).properties:void 0;if("q"==t.key){const t=n.find(t=>"occlusion"===t.name);t&&(this.targetAttribute=t.name)}if("d"==t.key){const t=n.find(t=>"truncation"===t.name);t&&(this.targetAttribute=t.name)}if("f"==t.key){const t=n.find(t=>"posture"===t.name);t&&(this.targetAttribute=t.name)}if(!isNaN(t.key)){const e=n.find(t=>t.name==this.targetAttribute);if(null==e)return;const i=Math.round(t.key);[...this.element.selectedTrackIds].forEach(t=>{this.tracks[t].keyShapes[this.element.timestamp].labels[this.targetAttribute]=e.enum[i]}),this.element.requestUpdate(),r.c.dispatch(Object(o.g)({annotations:this.tracks}))}}})}newData(){const t=Object(r.b)("media").info;if(!t.children)return;const e=t.children.map(t=>t.path);this.element.input=e;const n=()=>{this.refresh(),this.element.removeEventListener("load",n)};this.element.addEventListener("load",n)}initDisplay(){const t=Object(r.b)("application").tasks,e=Object(r.b)("application").taskName,n=t.find(t=>t.name===e);this.element&&n.spec.label_schema&&(this.element.categories=n.spec.label_schema.category)}get annotations(){return Object(r.a)().annotations}onTimestampChange(){}onUpdate(){r.c.dispatch(Object(o.g)({annotations:this.tracks}))}refresh(){this.element&&(Array.isArray(this.annotations)&&r.c.dispatch(Object(o.d)({annotations:{}})),this.tracks=this.annotations)}get element(){return this.shadowRoot.querySelector("pxn-tracking")}render(){return s.e`<pxn-tracking
                              .tracks = ${this.tracks}
                              @create-track=${this.onUpdate}
                              @selection-track=${t=>console.log("selection track",t.detail)}
                              @update-tracks=${this.onUpdate}
                              @delete-track=${this.onUpdate}></pxn-tracking>`}}customElements.define("plugin-tracking",c)}}]);