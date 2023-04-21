(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{363:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var s=i(2),a=i(6),o=i(12);i(168),i(119),i(254),i(328),i(378),i(256),i(373),i(365),i(367),i(252),i(206);
/**
 * Utility class to pick labels in a panel
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class n extends s.a{static get properties(){return{message:{type:String},buttons:{type:Array}}}constructor(){super(),this.message="",this.buttons=["ok"]}updated(e){e.has("message")&&this.message&&(this.messageElement.innerHTML=this.message.toString().replace(/\n/g,"<br>"))}get dialog(){return this.shadowRoot.getElementById("dialog")}get messageElement(){return this.shadowRoot.getElementById("message")}prompt(){return this.dialog.open=!0,new Promise((e,t)=>{this.dialog.addEventListener("closing",t=>{e(t.detail.action)})})}render(){return s.e`
            <mwc-dialog heading="Message dialog" id="dialog" scrimClickAction="">
                <div id="message"></div>
                ${this.buttons.map(e=>s.e`<mwc-button slot="secondaryAction" dialogAction="${e}">${e}</mwc-button>`)}
            </mwc-dialog>
        `}}customElements.define("pop-up",n);
/**
 * Simple HTML page template with common utilies such as:
 * - on page arrival/departure
 * - ability to go to another page
 * - pop up error dialog
 * - decomposition of page sections (logo, header, drawer, main, ...)
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class r extends s.a{static get properties(){return{active:{type:Boolean},theme:{type:String}}}constructor(){super(),this.loaded=!1,this.theme="black"}firstUpdated(){this.loaded=!0;const e=Object(o.b)("user").currentUser.preferences;e&&e.theme&&(this.theme=e.theme)}onActivate(){}onDesactivate(){}updated(e){e.has("active")&&this.loaded&&(this.active?this.onActivate():this.onDesactivate())}gotoPage(e){window.history.pushState({},"",encodeURI(e)),o.c.dispatch(Object(a.r)(e))}goHome(){const e=Object(o.b)(),t=e.user&&e.user?e.user.currentUser.role:"";let i="";if("admin"===t)i="/#dashboard-admin";else{if("user"!==t)return;i="/#dashboard-user"}window.history.pushState({},"",encodeURI(i)),o.c.dispatch(Object(a.r)(i))}errorPopup(e,t=["ok"]){return this.popUp.message=e,this.popUp.buttons=t,this.popUp.prompt()}static get styles(){return s.b`
      :host {
        height: 100%;
        overflow: auto;
        --leftPanelWidth: 55px;
        --headerHeight: 50px;
        --pixano-color: #79005D;
        --primary-color: #79005D;
        --secondary-color: #FF5C64;
        --theme-color: whitesmoke;
        --font-color: black;
        font-size: 15px;
        color: var(--font-color);
        
      }
      .black {
        --theme-color: rgb(51, 51, 51);
        --font-color: white;
        --primary-color: white;
        --secondary-color: black;
      }
      .main {
        height: 100%;
        position: relative;
        display:flex;
        flex-direction: column;
      }
      .header {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: var(--headerHeight);
        color: var(--font-color);
        background-color: var(--theme-color);
      }
      .header h1 {
        margin: auto auto auto 0;
        padding-left: 20px;
      }
      .logo {
        width: var(--leftPanelWidth);
        cursor: pointer;
        display: flex;
        align-items: center;        
      }
      #logo-im {
        width: 60%;
        margin:auto;
      }
      .header-menu {
        display: flex;
        flex-direction: row;
        width: calc(100% - var(--leftPanelWidth));
        padding-left: 0;
      }
      .header-menu > mwc-button {
        margin: 0px;
        margin-right: 20px;
        align-items: center;
        display: flex;
      }
      .right-header-content {
        margin: auto;
        margin-right: 20px;
        align-items: center;
        display: flex;
      }
      .header-menu > mwc-icon-button {
        margin: 0px;
        margin-right: 20px;
        align-items: center;
        display: flex;
      }
      .body {
        display: flex;
        flex-direction: row;
        height: calc(100% - var(--headerHeight));
      }
      .left-panel {
        background: #333;
        width: var(--leftPanelWidth);
        flex: 0 0 var(--leftPanelWidth);
      }
      .page {
        display: block;
        width: calc(100% - var(--leftPanelWidth));
        overflow-y: auto;
        height: 100%;
        position: relative;
      }
      .page[active] {
        display: block;      
      }
      .section {
        margin: 20px;
        font-size: small;
        display: flex;
        flex-direction: column;
      }
      h1 {
        font-size: 20px;
        margin-left: 20px;
        font-weight: 300;
      }
      h2 {
        font-size: 20px;
      }
      h3 {
        font-size: 14px;
      }
      mwc-icon-button,
      mwc-icon-button-toggle {
        color: #6d6d6d;
      }
      mwc-icon-button:hover,
      mwc-icon-button-toggle:hover {
        color: var(--secondary-color);
      }
      mwc-icon-button[selected] {
        color: var(--secondary-color);
      }
      .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 0px dotted black;
      }      
      mwc-tab-bar {
        padding-top: 20px;
      }
      mwc-textfield {
        --mdc-theme-primary: #79005D;
        --mdc-theme-secondary: #FF5C64;
      }
      
      mwc-button {
        --mdc-theme-primary: var(--primary-color);
        --mdc-theme-on-primary: white;
      }
     
      mwc-linear-progress {
        --mdc-theme-primary: var(--primary-color);
      }
      .group_buttons {
        display: flex;
        flex-direction: row;
      }
      .unselectable {
        -webkit-user-select: none;  
        -moz-user-select: none;    
        -ms-user-select: none;      
        user-select: none;
      }
    `}get popUp(){return this.shadowRoot.querySelector("pop-up")}get leftPanelContent(){return s.e``}get headerContent(){return s.e` `}get pageContent(){return s.e``}get pageDiv(){return s.e`
    <div class="page">
      ${this.pageContent}
  </div>`}get leftPanel(){return s.e`
      <div class="left-panel">
        ${this.leftPanelContent}
      </div>`}get body(){return s.e`
    <div class="body">
      ${this.leftPanel}
      ${this.pageDiv}
    </div>`}render(){return s.e`
      <div class="main ${this.theme}">
        <div class="header">
          <div class="logo">
            <img id="logo-im" src="images/pixano-mono-grad.svg" alt="Pixano"  @click=${()=>this.goHome()}>
          </div>
          <div class="header-menu">
            ${this.headerContent}
          </div>
        </div>
        ${this.body}        
      </div>
      <pop-up></pop-up>
    `}}},369:function(e,t,i){"use strict";
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
function s(e){return e.composedPath()[0].value}function a(e){const t=~~(e/3600),i=~~(e%3600/60),s=~~e%60;let a="";return t>0&&(a+=t+":"+(i<10?"0":"")),a+=i+":"+(s<10?"0":""),a+=""+s,a}function o(e){var t=new Date(1e3*e),i=t.getFullYear(),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+s+" "+i+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}i.d(t,"b",(function(){return s})),i.d(t,"a",(function(){return a})),i.d(t,"c",(function(){return o}))},71:function(e,t,i){"use strict";i.r(t);var s=i(2),a=i(363),o=i(12),n=i(6),r=i(17),l=i(369),c=(i(206),i(400),i(261),i(11)),d=(i(254),i(20)),h=i(402);
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

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
class p extends h.a{constructor(){super(...arguments),this.left=!1,this.graphic="control"}render(){const e={"mdc-list-item__graphic":this.left,"mdc-list-item__meta":!this.left},t=this.renderText(),i=this.graphic&&"control"!==this.graphic&&!this.left?this.renderGraphic():s.e``,a=this.hasMeta&&this.left?this.renderMeta():s.e``,o=this.renderRipple();return s.e`
      ${o}
      ${i}
      ${this.left?"":t}
      <span class=${Object(d.a)(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left?t:""}
      ${a}`}async onChange(e){const t=e.target;this.selected===t.checked||(this._skipPropRequest=!0,this.selected=t.checked,await this.updateComplete,this._skipPropRequest=!1)}}Object(c.b)([Object(s.h)("slot")],p.prototype,"slotElement",void 0),Object(c.b)([Object(s.h)("mwc-checkbox")],p.prototype,"checkboxElement",void 0),Object(c.b)([Object(s.g)({type:Boolean})],p.prototype,"left",void 0),Object(c.b)([Object(s.g)({type:String,reflect:!0})],p.prototype,"graphic",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

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
const g=s.b`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-list-item__meta{height:40px;width:40px}`;var m=i(403);
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let u=class extends p{};u.styles=[m.a,g],u=Object(c.b)([Object(s.c)("mwc-check-list-item")],u);i(260),i(373),i(119);
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class b extends a.a{static get properties(){return{jobs:{type:Array},nbSelectedJobs:{type:Number},newStatus:{type:String},page:{type:Number},resultsLength:{type:Number},pageSize:{type:Number},items:{type:Array}}}constructor(){super(),this.nbSelectedJobs=0,this.selectedJobs=[],this.pageSize=100,this.page=1,this.resultsLength=1,this.sorts=[],this.items=[],this.pageSizes=[5,100,200],this.globalCounter=0,this.doneCounter=0,this.toValidateCounter=0,this.statusMap=new Map([["",["","",""]],["to_annotate",["to annotate","create","blue"]],["to_validate",["to validate","youtube_searched_for","orange"]],["to_correct",["to correct","thumb_down","red"]],["discard",["do NOT annotate","highlight_off","red"]],["done",["done","done","green"]]]),this.assignedMap=new Map([["",""],["true","in progress"],["false","idle"]])}async getResults(){try{const e=await o.c.dispatch(Object(n.m)(this.page,this.pageSize));return this.resultsLength=e.counter,this.globalCounter=e.globalCounter,this.doneCounter=e.doneCounter,this.toValidateCounter=e.toValidateCounter,e.results}catch(e){return[]}}onActivate(){this.stateChanged(Object(o.b)()),this.table&&this.refreshGrid()}async refreshGrid(){this.table.items.forEach(e=>e.selected=!1),this.tableCheckbox.checked=!1,this.nbSelectedJobs=0,this.table.layout(),await this.getResults().then(e=>{this.items=e})}stateChanged(e){this.username=e.user.currentUser.username}async updateFilter(e,t){const i=Object(o.b)("application").filters;if(i[e]!==t){const s={...i,[e]:t};o.c.dispatch(Object(n.y)(s)),await this.refreshGrid()}}onTagAs(e){this.newStatus=e,this.shadowRoot.getElementById("dialog-change-jobs-status").open=!0}async tagAs(){const e=this.table.items.filter(e=>e.selected).map(e=>e.id);await o.c.dispatch(Object(n.u)(e,this.newStatus)),this.refreshGrid()}async onDeallocate(){const e=this.table.items.filter(e=>e.selected).map(e=>e.id);await o.c.dispatch(Object(n.w)(e)),this.refreshGrid()}startValidating(){const e=Object(o.b)("application").taskName;e&&this.gotoPage(`/#label/${e}/to_validate`)}startAnnotating(){const e=Object(o.b)("application").taskName;e&&this.gotoPage(`/#label/${e}/to_annotate`)}explore(e){const t=Object(o.b)("application").taskName;this.gotoPage(`/#explore/${t}/${e}`)}gotoProjectManager(){this.gotoPage("/#project-manager")}gotoUserManager(){this.gotoPage("/#user-manager")}onExplore(e,t){e.stopPropagation(),this.explore(t)}onItemSelected(e){this.nbSelectedJobs=e.detail.index.size;const t=this.nbSelectedJobs>0&&this.nbSelectedJobs<this.table.items.length;this.tableCheckbox.indeterminate=t,this.tableCheckbox.checked=!t&&this.nbSelectedJobs>0}get pageEnd(){return Math.min(this.resultsLength,this.page*this.pageSize)}onTableGlobalCheckboxChange(){this.table.items.forEach(e=>e.selected=this.tableCheckbox.checked),this.nbSelectedJobs=this.tableCheckbox.checked?this.table.items.length:0,this.table.layout()}onLastPage(){this.pageEnd<this.resultsLength&&(this.page=Math.ceil(this.resultsLength/this.pageSize),this.refreshGrid())}onNextPage(){this.pageEnd<this.resultsLength&&(this.page+=1,this.refreshGrid())}onPreviousPage(){this.page>1&&(this.page-=1,this.refreshGrid())}onFirstPage(){this.page>1&&(this.page=1,this.refreshGrid())}onPageSelection(e){this.pageSize=this.pageSizes[e.detail.index],this.refreshGrid()}static get styles(){return[super.styles,s.b`
      progress {
        width: 75%;
        margin-left: 10px;
        margin-bottom: 30px;
      }
	  mwc-check-list-item {
        height: 100px;
      }
      #pages {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      #overview {
        width: 100%;
        margin: 0;
        background: var(--mdc-theme-primary);
        --mdc-select-hover-line-color: white;
        color: white;
        flex-direction: row;
      }
      #overview > mwc-select {
        display: flex;
        margin-right: 20px;
        align-items: center;
      }
      #left-panel {
        background: whitesmoke;
        margin: 0;
        width: 80px;
      }
      .group_buttons {
        flex: 1 auto;
      }
      button[selected] {
        background: red;
      }
      mwc-button {
        --mdc-button-text-transform: capitalize;
      }

      .section {
        --mdc-theme-primary: var(--pixano-color);
      }

      .body {
        flex-flow: wrap;
        display: flex;
        height: 100%;
        width: 100%;
        margin: auto;
      }

      .list-item {
        width: 100%;
        position: absolute;
        display: flex;
        top: 0;
      }
      .path {
        direction: rtl;
        user-select: text;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .path > span {
        unicode-bidi: plaintext;
      }
      .list-header {
        display: flex;
        background: whitesmoke;
        box-shadow: #8e8e8e 0px -1px 0px inset;
      }
      .list-header > mwc-checkbox {
        padding-left: 14px;
        display: flex;
        align-items: center;
      }
      .list-header > div {
        flex: 1;
      }
      #time-header {
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .list-item > p {
        flex: 1;
        text-align: center;
        margin: auto;
        overflow: hidden;
      }
      .list-item > div {
        flex: 1;
        text-align: center;
        margin: auto;
        overflow: hidden;
      }
      .status {
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 10px;
      }
      .green {
        color: green;
      }
      .orange {
        color: orange;
      }
      .red {
        color: red;
      }
      #page-size {
        width: 80px;
        padding-left: 10px;
        padding-right: 10px;
        --mdc-menu-item-height: 30px;
        --mdc-theme-surface: aliceblue;
        --mdc-list-vertical-padding: 0px;
      }
      mwc-linear-progress {
        transform: rotate(-90deg);
        margin-top: calc(60vh + 50px);
        padding-top: 50%;
        width: 60vh;
        transform-origin: left top;
      }
      #starter {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
      .custom-counter li > p {
        font-weight: bold;
        color: var(--primary-color);
        padding: 10px;
        cursor: pointer;
      }
      .custom-counter {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }
      
      .custom-counter li {
        counter-increment: step-counter;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
      }
      
      .custom-counter li::before {
        content: counter(step-counter);
        margin-right: 15px;
        font-size: 80%;
        background-color: rgb(0,200,200);
        color: white;
        font-weight: bold;
        padding: 3px 8px;
        border-radius: 3px;
      }
    `]}get table(){return this.shadowRoot.getElementById("table")}get tableCheckbox(){return this.shadowRoot.getElementById("table-checkbox")}get headerContent(){return s.e`
      <h1 class="display-4">Dashboard Admin</h1>
      <mwc-button theme="primary" class="dark" @click=${()=>this.startValidating()}>Start Validating</mwc-button>
      <mwc-button theme="primary" class="dark" @click=${()=>this.startAnnotating()}>Start Annotating</mwc-button>
      
      <div class="right-header-content">
        <mwc-button theme="primary" class="dark" @click=${()=>this.gotoProjectManager()}>Tasks</mwc-button>
        <mwc-button theme="primary" class="dark" @click=${()=>this.gotoUserManager()}>Users</mwc-button>
        <div class="unselectable" style="margin: 10px;">${this.username}</div>
        <mwc-icon-button icon="exit_to_app"
                       @click=${()=>o.c.dispatch(Object(r.h)())}
                       title="Log out"></mwc-icon-button>
      </div>
    `}styleMap(e){return e?"visibility: visible":"visibility: hidden;"}listitem(e){const t=this.statusMap.get(e.status);return s.e`
    <mwc-check-list-item left id=${e.data_id}>
      <div class="list-item">
        <p style="display: flex;">
          <mwc-icon class="status ${t[2]}">${t[1]}</mwc-icon>
          ${t[0]}
        </p>
        <div title=${e.path}><p class="path"><span>${e.path}</span></p></div>
        <p>${e.annotator}</p>
        <p>${e.validator}</p>
        <p>${this.assignedMap.get(e.in_progress.toString())}</p>
        <p>${Object(l.a)(e.cumulated_time)}</p>
		<p><img src="data:image/jpg;base64,${e.thumbnail}" @click=${t=>this.onExplore(t,e.data_id)}></p>
		<p></p>
      </div>
    </mwc-check-list-item>
    <li divider role="separator"></li>
    `}get tableHeader(){const e=Object(o.b)("application").filters,t=[...this.statusMap.entries()],i=[...this.assignedMap.entries()];return s.e`
    <div class="list-header">
      <mwc-checkbox id="table-checkbox" @change=${this.onTableGlobalCheckboxChange.bind(this)}></mwc-checkbox>
      <div style="display: flex; align-items: center;">
        <mwc-select label="status"
                    style="position: absolute;"
                    icon="filter_list"
                    @selected=${e=>this.updateFilter("status",t[e.detail.index][0])}>
          ${t.map(([t,i])=>s.e`<mwc-list-item ?selected=${e.status==t} value=${t}>${i[0]}</mwc-list-item>`)}
        </mwc-select>
      </div>
      <div>
        <mwc-textfield label="Path" icon="filter_list" @input=${e=>this.updateFilter("path",Object(l.b)(e))}></mwc-textfield>
      </div>
      <div>
        <mwc-textfield label="annotator" icon="filter_list" @input=${e=>this.updateFilter("annotator",Object(l.b)(e))}></mwc-textfield>
      </div>
      <div>
        <mwc-textfield label="validator" icon="filter_list" @input=${e=>this.updateFilter("validator",Object(l.b)(e))}></mwc-textfield>
      </div>
      <div style="display: flex; align-items: center;">
        <mwc-select label="state"
                    icon="filter_list"
                    style="position: absolute;"
                    @selected=${e=>this.updateFilter("in_progress",i[e.detail.index][0])}>
          ${i.map(t=>s.e`<mwc-list-item ?selected=${e.in_progress===t[0]} value=${t[0]}>${t[1]}</mwc-list-item>`)}
        </mwc-select>
      </div>
      <div id="time-header">Time</div>
      <div>
        <mwc-textfield label="Preview" icon="filter_list"></mwc-textfield>
      </div>
      <div style="flex: 0.5"></div>
    </div>
    `}get pagination(){return s.e`
    <div id="pages">
      <div>Rows per page:</div>
      <mwc-select id="page-size" outlined @selected=${this.onPageSelection.bind(this)}>
        ${this.pageSizes.map(e=>s.e`<mwc-list-item value=${e}
                         ?selected=${this.pageSize===e}>${e}</mwc-list-item>`)}
      </mwc-select>
      <div>${(this.page-1)*this.pageSize+1}-${this.pageEnd} of ${this.resultsLength}</div>
      <mwc-icon-button 
        icon="first_page"
        ?disabled=${1===this.page}
        style="z-index: 10;"
        @click="${this.onFirstPage.bind(this)}"></mwc-icon-button>
      <mwc-icon-button 
        icon="chevron_left"
        ?disabled=${1===this.page}
        @click="${this.onPreviousPage.bind(this)}"></mwc-icon-button>
      <mwc-icon-button 
        icon="chevron_right"
        ?disabled=${this.pageEnd===this.resultsLength}
        @click="${this.onNextPage.bind(this)}"></mwc-icon-button>
      <mwc-icon-button icon="last_page"
                       ?disabled=${this.pageEnd===this.resultsLength}
                       @click="${this.onLastPage.bind(this)}"></mwc-icon-button>
    </div>
    `}get dialog(){return s.e`
      <mwc-dialog heading="Change status" id="dialog-change-jobs-status">
        <div>Change status to '${this.newStatus}' for ${this.nbSelectedJobs} selected jobs? <br>
        </div>
        <mwc-button
            slot="primaryAction"
            dialogAction="ok"
            @click=${()=>this.tagAs()}>
          Ok
        </mwc-button>
        <mwc-button
            slot="secondaryAction"
            dialogAction="cancel">
          Cancel
        </mwc-button>
      </mwc-dialog>
    `}get topSection(){const e=Object(o.b)("application").taskName,t=Object(o.b)("application").tasks;return s.e`
    <div id="overview" class="section">
      <h1 class="display-4" style="margin: auto;">Select a task: </h1>
      <mwc-select label='Task' @selected=${i=>{t[i.detail.index]&&t[i.detail.index].name!==e&&(o.c.dispatch(Object(n.z)(t[i.detail.index].name)),this.refreshGrid())}}>
        ${t.map(t=>s.e`<mwc-list-item value=${t.name}
                                                ?selected=${e===t.name}>${t.name}</mwc-list-item>`)}
      </mwc-select>
    </div>
    `}get leftSection(){return s.e`
    <div id="left-panel" class="section" title="To annotate: ${this.globalCounter-this.toValidateCounter-this.doneCounter} \n To validate: ${this.toValidateCounter}\n Done: ${this.doneCounter}">
      <mwc-icon-button icon="refresh"
                  style="margin-left: auto; margin-right: auto;"
                  @click="${()=>this.refreshGrid()}"
                  title="Refresh">
      </mwc-icon-button>
      <mwc-linear-progress progress="${this.doneCounter/this.globalCounter}"
                           buffer="${(this.doneCounter+this.toValidateCounter)/this.globalCounter}"></mwc-linear-progress>
      <div style="margin: auto;">
        <p>${this.doneCounter}</p>
        <p>-</p>
        <p>${this.globalCounter}</p>
      </div>
    </div>
    `}get mainSection(){return s.e`
    <div class="section" style="flex: 1;">
      <h1 class="display-4">Label Status</h1>
      <div style="display: flex;">
        <div class="group_buttons" style=${this.styleMap(this.nbSelectedJobs>0)}>
          ${[...this.statusMap.entries()].splice(1).map(([e,t])=>s.e`
                <mwc-icon-button icon=${t[1]}
                              title="Tag as ${t[0]}"
                              @click=${()=>this.onTagAs(e)}>
                </mwc-icon-button>
              `)}
          <mwc-icon-button icon="settings_backup_restore"
                            title="Unassign job"
                            @click=${()=>this.onDeallocate()}>
          </mwc-icon-button>
        </div>
      </div>
      ${this.tableHeader}
      <mwc-list id="table" multi @selected=${this.onItemSelected.bind(this)} style="height: 55vh; overflow-y: auto;">
        <li divider role="separator"></li>
        ${this.items.map(this.listitem.bind(this))}
      </mwc-list>
      ${this.pagination}
    </div>
    `}get body(){return Object(o.b)("application").tasks.length?s.e`
      <div class="body">
          ${this.topSection}
          ${this.leftSection}
          ${this.mainSection}
      </div>
      ${this.dialog}
    `:s.e`
    <div id="starter">
    <ol class="custom-counter">
      <li>Configure your annotation project in the <p @click=${this.gotoProjectManager}> Tasks </p> menu</li>
      <li>[Optional] Configure the users for the project in the <p @click=${this.gotoUserManager}> User </p> menu</li>
      <li>Start <p @click=${this.gotoUserManager}> Annotating </p></li>
    </ol>
    </div>`}}customElements.define("app-dashboard-admin",b)}}]);