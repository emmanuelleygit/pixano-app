(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{363:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var i=o(2),r=o(6),a=o(12);o(168),o(119),o(254),o(328),o(378),o(256),o(373),o(365),o(367),o(252),o(206);
/**
 * Utility class to pick labels in a panel
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class n extends i.a{static get properties(){return{message:{type:String},buttons:{type:Array}}}constructor(){super(),this.message="",this.buttons=["ok"]}updated(e){e.has("message")&&this.message&&(this.messageElement.innerHTML=this.message.toString().replace(/\n/g,"<br>"))}get dialog(){return this.shadowRoot.getElementById("dialog")}get messageElement(){return this.shadowRoot.getElementById("message")}prompt(){return this.dialog.open=!0,new Promise((e,t)=>{this.dialog.addEventListener("closing",t=>{e(t.detail.action)})})}render(){return i.e`
            <mwc-dialog heading="Message dialog" id="dialog" scrimClickAction="">
                <div id="message"></div>
                ${this.buttons.map(e=>i.e`<mwc-button slot="secondaryAction" dialogAction="${e}">${e}</mwc-button>`)}
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
class s extends i.a{static get properties(){return{active:{type:Boolean},theme:{type:String}}}constructor(){super(),this.loaded=!1,this.theme="black"}firstUpdated(){this.loaded=!0;const e=Object(a.b)("user").currentUser.preferences;e&&e.theme&&(this.theme=e.theme)}onActivate(){}onDesactivate(){}updated(e){e.has("active")&&this.loaded&&(this.active?this.onActivate():this.onDesactivate())}gotoPage(e){window.history.pushState({},"",encodeURI(e)),a.c.dispatch(Object(r.r)(e))}goHome(){const e=Object(a.b)(),t=e.user&&e.user?e.user.currentUser.role:"";let o="";if("admin"===t)o="/#dashboard-admin";else{if("user"!==t)return;o="/#dashboard-user"}window.history.pushState({},"",encodeURI(o)),a.c.dispatch(Object(r.r)(o))}errorPopup(e,t=["ok"]){return this.popUp.message=e,this.popUp.buttons=t,this.popUp.prompt()}static get styles(){return i.b`
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
    `}get popUp(){return this.shadowRoot.querySelector("pop-up")}get leftPanelContent(){return i.e``}get headerContent(){return i.e` `}get pageContent(){return i.e``}get pageDiv(){return i.e`
    <div class="page">
      ${this.pageContent}
  </div>`}get leftPanel(){return i.e`
      <div class="left-panel">
        ${this.leftPanelContent}
      </div>`}get body(){return i.e`
    <div class="body">
      ${this.leftPanel}
      ${this.pageDiv}
    </div>`}render(){return i.e`
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
    `}}},66:function(e,t,o){"use strict";o.r(t);var i=o(2),r=o(363),a=o(12),n=o(6),s=o(17);o(260),o(261);
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class l extends r.a{constructor(){super(),this.globalCounter=0,this.doneCounter=0}static get properties(){return{doneCounter:{type:Number},globalCounter:{type:Number}}}async getResults(){try{const e=await a.c.dispatch(Object(n.m)(this.page,this.pageSize));return this.globalCounter=e.globalCounter,this.doneCounter=e.doneCounter,e.results}catch(e){return[]}}onActivate(){this.getResults()}startAnnotating(){const e=Object(a.b)("application").taskName;this.gotoPage(`/#label/${e}/to_annotate`)}logOut(){this.gotoPage("/#login")}static get styles(){return[super.styles,i.b`
    .body {
      flex-flow: wrap;
      display: flex;
      height: 100%;
      width: 100%;
      margin: auto;
    }
    .logo {
      background: whitesmoke;
    }
    .section {
      --mdc-theme-primary: var(--pixano-color);
    }
    #overview {
      flex: 1;
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
    mwc-linear-progress {
      transform: rotate(-90deg);
      margin-top: calc(60vh + 50px);
      padding-top: 50%;
      width: 60vh;
      transform-origin: left top;
    }
    `]}get headerContent(){return i.e`
      <h1 class="display-4">Dashboard</h1>
      <mwc-button theme="primary" class="dark" @click=${()=>this.startAnnotating()}>Start Annotating</mwc-button>
      <mwc-icon-button icon="exit_to_app"
                       @click=${()=>a.c.dispatch(Object(s.h)())}
                       title="Log out"></mwc-icon-button>
    `}get leftSection(){return i.e`
    <div id="left-panel" class="section">
      <mwc-icon-button icon="refresh"
                  style="margin-left: auto; margin-right: auto;"
                  @click="${this.getResults.bind(this)}"
                  title="Refresh">
      </mwc-icon-button>
      <mwc-linear-progress progress="${this.doneCounter/this.globalCounter}"></mwc-linear-progress>
      <div style="margin: auto;">
        <p>${this.doneCounter}</p>
        <p>-</p>
        <p>${this.globalCounter}</p>
      </div>
    </div>
    `}get topSection(){const e=Object(a.b)("application").taskName,t=Object(a.b)("application").tasks;return i.e`
    <div id="overview" class="section">
      <h1 class="display-4" style="margin: auto;">Select a task: </h1>
      <mwc-select label='Task' @selected=${o=>{t[o.detail.index]&&t[o.detail.index].name!==e&&(a.c.dispatch(Object(n.z)(t[o.detail.index].name)),this.getResults())}}>
        ${t.map(t=>i.e`<mwc-list-item value=${t.name}
                                                ?selected=${e===t.name}>${t.name}</mwc-list-item>`)}
      </mwc-select>
    </div>
    `}get body(){return i.e`
      <div class="body">
          ${this.leftSection}
          ${this.topSection}
      </div>
    `}}customElements.define("app-dashboard-user",l)}}]);