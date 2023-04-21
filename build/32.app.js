(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{145:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var o=i(2),n=i(12);
/**
 * Common plugin style
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
const s=o.b`
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
*/class c extends o.a{static get styles(){return s}static get properties(){return{mode:{type:String}}}firstUpdated(){this.dispatchEvent(new Event("ready"))}onActivate(){this.initDisplay&&this.initDisplay(),this.newData()}initDisplay(){const t=Object(n.b)("application").tasks,e=Object(n.b)("application").taskName,i=t.find(t=>t.name===e);this.attributePicker&&i&&this.attributePicker.reloadSchema(i.spec.label_schema)}get info(){return Object(n.b)("application")}get annotations(){return Object(n.a)().annotations}newData(){const t=Object(n.b)("media").info.path;this.element.input=t,this.element.addEventListener("load",()=>{this.refresh()})}_colorFor(t){return this.attributePicker._colorFor(t)}onModeChange(){this.element&&(this.mode=this.element.mode)}get attributePicker(){return this.shadowRoot.querySelector("attribute-picker")}get element(){return this.shadowRoot.getElementById("main")}render(){return o.e`
        <div class="drawer">${this.toolDrawer}</div>
        <div class="editor">${this.editor}</div>
        <div class="properties-panel">${this.propertyPanel}</div>
    `}}customElements.define("template-plugin",c)},166:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var o=i(2),n=(i(119),i(164),i(168),i(120)),s=i(12),c=i(13),r=(i(163),i(145));
/**
 * Template plugin that handles shape instances
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class l extends r.a{static get properties(){return{...super.properties,selectedIds:{type:Array}}}constructor(){super(),this.mode="create",this.selectedIds=[]}onAttributeChanged(){console.log("On attribute changed");const t=this.attributePicker.value;this.selectedIds.forEach(e=>{const i=[...this.element.shapes].find(t=>t.id===e);i.options=i.options||{},Object.keys(t).forEach(e=>{i[e]=JSON.parse(JSON.stringify(t[e]))}),i.color=this._colorFor(i.category),this.collect()})}refresh(){console.log("Refresh"),this.element&&(this.element.shapes=JSON.parse(JSON.stringify(this.annotations.map(t=>({...t,color:this._colorFor(t.category)})))))}onSelection(t){console.log("On selection"),this.selectedIds=t.detail,this.updateDisplayOfSelectedProperties()}updateDisplayOfSelectedProperties(){if(console.log("updated selected prop"),this.selectedIds&&this.selectedIds.length){const t=this.annotations.filter(t=>this.selectedIds.includes(t.id)),e=Object(n.commonJson)(t);this.attributePicker.setAttributes(e)}}onCreate(t){console.log("On create");const e=t.detail;e.id=Math.random().toString(36),Object.entries(this.attributePicker.defaultValue).forEach(([t,i])=>{e[t]=JSON.parse(JSON.stringify(i))}),this.isSequence&&(e.timestamp=this.targetFrameIdx),e.color=this._colorFor(e.category),this.collect()}onUpdate(){console.log("On update"),this.collect()}onDelete(){console.log("On delete"),this.collect()}collect(){console.log("collect");const t=[...this.element.shapes].map(({color:t,...e})=>e);s.c.dispatch(Object(c.g)({annotations:t}))}get propertyPanel(){return o.e`
        <attribute-picker ?showDetail=${this.selectedIds.length}
                            @update=${this.onAttributeChanged}></attribute-picker>
    `}get toolDrawer(){return o.e`
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
      `}}customElements.define("template-plugin-instance",l)},366:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return c}));var o=i(2);
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/o.e`<svg width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>`,o.e`<svg width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>`;const n=o.e`<svg slot="icon" width="24" height="24" viewBox="0 0 24 24"><g><path d="M 8.46875 3.816406 C 7.988281 3.988281 7.871094 4.128906 7.199219 5.34375 C 6.351562 6.871094 6.652344 6.71875 4.359375 6.75 C 2.179688 6.777344 2.003906 6.832031 1.632812 7.585938 L 1.523438 7.804688 L 1.523438 19.195312 L 1.636719 19.425781 C 1.777344 19.710938 2.042969 19.976562 2.335938 20.117188 L 2.554688 20.226562 L 21.445312 20.226562 L 21.664062 20.117188 C 21.945312 19.980469 22.230469 19.695312 22.367188 19.414062 L 22.476562 19.195312 L 22.476562 7.804688 L 22.367188 7.585938 C 21.996094 6.828125 21.828125 6.777344 19.640625 6.75 C 17.417969 6.722656 17.601562 6.785156 17.074219 5.835938 C 15.800781 3.523438 16.351562 3.75 11.988281 3.753906 C 9.300781 3.753906 8.613281 3.765625 8.46875 3.816406 M 13.148438 7.636719 C 14.902344 8.027344 16.933594 9.773438 16.6875 10.683594 C 16.496094 11.402344 15.738281 11.390625 15.226562 10.65625 C 13.804688 8.636719 10.949219 8.402344 9.308594 10.175781 C 8.988281 10.523438 8.972656 10.503906 9.703125 10.640625 C 10.46875 10.78125 10.652344 10.917969 10.492188 11.21875 C 10.414062 11.371094 7.699219 13.261719 7.5625 13.265625 C 7.375 13.265625 7.234375 13.066406 6.539062 11.789062 C 6.15625 11.09375 5.828125 10.5 5.804688 10.46875 C 5.71875 10.363281 5.78125 10.117188 5.917969 10.015625 L 6.050781 9.917969 L 6.769531 10.058594 L 7.488281 10.203125 L 7.734375 9.828125 C 8.871094 8.109375 11.140625 7.191406 13.148438 7.636719 M 16.628906 12.316406 C 16.703125 12.390625 18.050781 14.796875 18.1875 15.097656 C 18.257812 15.253906 18.144531 15.5 17.984375 15.542969 C 17.925781 15.554688 17.558594 15.507812 17.171875 15.433594 L 16.472656 15.300781 L 16.261719 15.625 C 14.523438 18.347656 10.625 18.761719 8.253906 16.476562 C 7.21875 15.480469 7 14.742188 7.628906 14.378906 C 8 14.160156 8.375 14.296875 8.6875 14.765625 C 10.105469 16.878906 13.296875 17.113281 14.78125 15.210938 C 14.953125 14.988281 14.945312 14.984375 14.25 14.855469 C 13.125 14.648438 13.132812 14.441406 14.296875 13.636719 C 14.644531 13.398438 15.242188 12.984375 15.625 12.71875 C 16.34375 12.222656 16.480469 12.167969 16.628906 12.316406 "/></g></svg>`,s=(o.e`<svg slot="icon" width="24" height="24" viewBox="0 0 24 24"><g><path style=" stroke:none;fill-rule:evenodd;" d="M 10.621094 3.5625 C 6.527344 3.929688 5.429688 4.527344 4.761719 6.746094 C 4.640625 7.140625 4.394531 7.855469 4.214844 8.332031 C 3.71875 9.640625 3.710938 9.65625 3.214844 9.65625 C 2.441406 9.65625 1.792969 10.339844 1.742188 11.207031 L 1.726562 11.515625 L 2.257812 11.652344 L 2.789062 11.792969 L 2.773438 15.1875 C 2.746094 20.039062 2.660156 19.777344 4.3125 19.816406 C 5.3125 19.84375 6.285156 19.773438 6.453125 19.664062 C 6.574219 19.585938 6.648438 19.339844 6.820312 18.472656 C 6.886719 18.125 6.953125 17.824219 6.964844 17.804688 C 6.980469 17.78125 8.121094 17.765625 9.5 17.765625 C 11.871094 17.765625 12.007812 17.761719 11.984375 17.683594 C 11.972656 17.636719 11.886719 17.429688 11.792969 17.222656 C 10.800781 14.984375 11.523438 12.34375 13.5625 10.757812 L 13.746094 10.617188 L 11.710938 10.617188 C 10.09375 10.617188 9.515625 10.597656 8.882812 10.53125 C 7.203125 10.355469 5.179688 10.015625 5.21875 9.917969 C 5.230469 9.890625 5.445312 9.285156 5.695312 8.578125 C 6.726562 5.660156 6.640625 5.792969 7.664062 5.5625 C 8.660156 5.335938 8.789062 5.328125 10.796875 5.359375 C 16.675781 5.445312 16.777344 5.472656 17.234375 7.070312 C 17.296875 7.292969 17.527344 8.015625 17.746094 8.675781 L 18.144531 9.875 L 18.410156 9.957031 C 19.183594 10.199219 19.925781 10.648438 20.570312 11.269531 L 21.023438 11.703125 L 21.328125 11.613281 C 21.699219 11.5 21.710938 11.484375 21.691406 11.128906 C 21.648438 10.320312 21.046875 9.707031 20.261719 9.664062 C 19.664062 9.632812 19.613281 9.542969 18.488281 6.351562 C 17.867188 4.585938 17.699219 4.46875 15.101562 3.9375 C 13.28125 3.5625 11.902344 3.449219 10.621094 3.5625 M 17.015625 10.21875 C 16.933594 10.300781 16.921875 10.375 16.921875 10.800781 C 16.921875 11.328125 16.914062 11.34375 16.644531 11.34375 C 15.078125 11.34375 13.175781 13.304688 13.171875 14.917969 L 13.171875 15.09375 L 12.660156 15.09375 C 12.121094 15.09375 12 15.136719 12 15.320312 C 12 15.484375 12.097656 15.515625 12.640625 15.515625 L 13.171875 15.515625 L 13.171875 15.695312 C 13.171875 17.304688 14.855469 19.0625 16.578125 19.253906 L 16.898438 19.289062 L 16.921875 19.808594 C 16.945312 20.347656 16.992188 20.484375 17.15625 20.484375 C 17.320312 20.484375 17.367188 20.347656 17.390625 19.808594 L 17.414062 19.289062 L 17.554688 19.277344 C 19.382812 19.109375 20.882812 17.632812 21.117188 15.761719 L 21.148438 15.515625 L 21.652344 15.515625 C 22.179688 15.515625 22.265625 15.484375 22.265625 15.304688 C 22.265625 15.125 22.179688 15.09375 21.648438 15.09375 L 21.148438 15.09375 L 21.113281 14.824219 C 20.90625 13.121094 19.550781 11.65625 17.925781 11.390625 C 17.746094 11.359375 17.554688 11.328125 17.496094 11.316406 C 17.394531 11.296875 17.390625 11.277344 17.390625 10.804688 C 17.390625 10.308594 17.328125 10.125 17.15625 10.125 C 17.128906 10.125 17.066406 10.167969 17.015625 10.21875 M 17.34375 12.015625 L 17.34375 12.6875 L 17.636719 12.742188 C 18.730469 12.941406 19.503906 13.773438 19.757812 15.011719 L 19.78125 15.140625 L 21.09375 15.140625 L 21.09375 15.46875 L 19.785156 15.46875 L 19.753906 15.644531 C 19.558594 16.78125 18.738281 17.660156 17.671875 17.875 L 17.367188 17.9375 L 17.355469 18.601562 L 17.339844 19.265625 L 16.96875 19.265625 L 16.96875 18.609375 C 16.96875 18.121094 16.953125 17.945312 16.910156 17.933594 C 16.878906 17.925781 16.730469 17.894531 16.582031 17.867188 C 15.628906 17.6875 14.75 16.785156 14.566406 15.785156 L 14.511719 15.46875 L 13.21875 15.46875 L 13.21875 15.140625 L 14.519531 15.140625 L 14.550781 14.941406 C 14.71875 13.847656 15.582031 12.945312 16.652344 12.742188 L 16.96875 12.683594 L 16.96875 11.34375 L 17.34375 11.34375 L 17.34375 12.015625 M 4.976562 12.683594 C 5.421875 12.824219 6.671875 13.324219 7.136719 13.542969 C 8.066406 13.984375 7.742188 14.636719 6.542969 14.746094 C 6.160156 14.78125 5.0625 14.699219 4.570312 14.597656 C 3.917969 14.464844 3.683594 14.09375 3.796875 13.371094 C 3.917969 12.605469 4.203125 12.441406 4.976562 12.683594 M 16.542969 13.097656 C 15.769531 13.3125 15.136719 13.960938 14.929688 14.75 C 14.820312 15.164062 14.796875 15.140625 15.347656 15.140625 L 15.835938 15.140625 L 15.917969 14.894531 C 15.972656 14.726562 16.074219 14.578125 16.238281 14.410156 C 16.40625 14.246094 16.554688 14.144531 16.722656 14.089844 L 16.96875 14.007812 L 16.96875 13.519531 C 16.96875 12.964844 16.980469 12.976562 16.542969 13.097656 M 17.34375 13.507812 L 17.347656 13.992188 L 17.683594 14.15625 C 18.066406 14.34375 18.296875 14.597656 18.386719 14.9375 L 18.441406 15.140625 L 19.417969 15.140625 L 19.390625 14.898438 C 19.289062 14.03125 18.460938 13.207031 17.542969 13.054688 L 17.34375 13.023438 L 17.34375 13.507812 M 16.757812 14.429688 C 15.808594 14.882812 16.089844 16.265625 17.132812 16.265625 C 18.367188 16.265625 18.453125 14.457031 17.222656 14.363281 C 17.011719 14.34375 16.898438 14.363281 16.757812 14.429688 M 14.882812 15.691406 C 15.019531 16.617188 15.851562 17.457031 16.726562 17.5625 L 16.96875 17.589844 L 16.96875 16.609375 L 16.769531 16.550781 C 16.371094 16.429688 15.996094 16.046875 15.886719 15.648438 L 15.839844 15.46875 L 14.847656 15.46875 L 14.882812 15.691406 M 18.421875 15.550781 C 18.417969 15.878906 17.984375 16.386719 17.582031 16.53125 L 17.34375 16.617188 L 17.34375 17.097656 C 17.34375 17.652344 17.335938 17.644531 17.816406 17.503906 C 18.636719 17.265625 19.40625 16.355469 19.40625 15.625 L 19.40625 15.46875 L 18.914062 15.46875 C 18.476562 15.46875 18.421875 15.476562 18.421875 15.550781 "/></g></svg>`,o.e`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16V8h11v5h5v11H0zm17-1v-2h3v3h-3zm4 0v-2h3v3h-3zm0-5V8h3v3h-3zM8 5V4h2v3H8zm13 0V4h3v3h-3zM8 1V0h2v3H8zm4 0V0h3v3h-3zm5 0V0h2v3h-2zm4 0V0h3v3h-3zm0 0"/></svg>`),c=o.e`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16V8h8V0h16v16h-8v8H0zm0 0"/></svg>`},384:function(t,e,i){"use strict";i.r(e),i.d(e,"PluginCuboid",(function(){return a}));var o=i(2),n=(i(422),i(119),i(120)),s=i(366),c=i(12),r=i(13),l=i(166);
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class a extends l.a{refresh(){if(!this.element)return;const t=JSON.parse(JSON.stringify(this.annotations.map(t=>{const e=this._colorFor(t.category);return{...t,color:Object(n.colorAnyToHexNumber)(e)}})));this.element.editableCuboids=t}onSelection(t){this.selectedIds=t.detail.map(t=>t.id),this.updateDisplayOfSelectedProperties()}onAttributeChanged(){const t=this.attributePicker.value;this.selectedIds.forEach(e=>{const i=[...this.element.editableCuboids].find(t=>t.id===e);i.options=i.options||{},Object.keys(t).forEach(e=>{i[e]=JSON.parse(JSON.stringify(t[e]))}),i.color=this._colorFor(i.category),this.collect()})}collect(){const t=[...this.element.editableCuboids].map(({color:t,...e})=>e);c.c.dispatch(Object(r.g)({annotations:t}))}get editor(){return[o.e`<pxn-cuboid-editor id="main"
        mode=${this.mode}
        @create=${this.onCreate}
        @update=${this.onUpdate}
        @delete=${this.onDelete}
        @selection=${this.onSelection}
        @mode=${this.onModeChange}></pxn-cuboid-editor>`]}get toolDrawer(){return o.e`
          ${super.toolDrawer}
          <mwc-icon-button icon="3d_rotation" @click=${()=>{this.element.rotate()&&this.collect()}}></mwc-icon-button>
          <mwc-icon-button icon="swap_horiz" @click=${()=>{this.element.swap()&&this.collect()}}></mwc-icon-button>
          <mwc-icon-button @click="${()=>this.element.toggleView()}">${s.a}</mwc-icon-button>
      `}}customElements.define("plugin-cuboid",a)}}]);