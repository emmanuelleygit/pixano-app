(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{363:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i(2),o=i(6),r=i(12);i(168),i(119),i(254),i(328),i(378),i(256),i(373),i(365),i(367),i(252),i(206);
/**
 * Utility class to pick labels in a panel
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class a extends n.a{static get properties(){return{message:{type:String},buttons:{type:Array}}}constructor(){super(),this.message="",this.buttons=["ok"]}updated(e){e.has("message")&&this.message&&(this.messageElement.innerHTML=this.message.toString().replace(/\n/g,"<br>"))}get dialog(){return this.shadowRoot.getElementById("dialog")}get messageElement(){return this.shadowRoot.getElementById("message")}prompt(){return this.dialog.open=!0,new Promise((e,t)=>{this.dialog.addEventListener("closing",t=>{e(t.detail.action)})})}render(){return n.e`
            <mwc-dialog heading="Message dialog" id="dialog" scrimClickAction="">
                <div id="message"></div>
                ${this.buttons.map(e=>n.e`<mwc-button slot="secondaryAction" dialogAction="${e}">${e}</mwc-button>`)}
            </mwc-dialog>
        `}}customElements.define("pop-up",a);
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
class s extends n.a{static get properties(){return{active:{type:Boolean},theme:{type:String}}}constructor(){super(),this.loaded=!1,this.theme="black"}firstUpdated(){this.loaded=!0;const e=Object(r.b)("user").currentUser.preferences;e&&e.theme&&(this.theme=e.theme)}onActivate(){}onDesactivate(){}updated(e){e.has("active")&&this.loaded&&(this.active?this.onActivate():this.onDesactivate())}gotoPage(e){window.history.pushState({},"",encodeURI(e)),r.c.dispatch(Object(o.r)(e))}goHome(){const e=Object(r.b)(),t=e.user&&e.user?e.user.currentUser.role:"";let i="";if("admin"===t)i="/#dashboard-admin";else{if("user"!==t)return;i="/#dashboard-user"}window.history.pushState({},"",encodeURI(i)),r.c.dispatch(Object(o.r)(i))}errorPopup(e,t=["ok"]){return this.popUp.message=e,this.popUp.buttons=t,this.popUp.prompt()}static get styles(){return n.b`
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
    `}get popUp(){return this.shadowRoot.querySelector("pop-up")}get leftPanelContent(){return n.e``}get headerContent(){return n.e` `}get pageContent(){return n.e``}get pageDiv(){return n.e`
    <div class="page">
      ${this.pageContent}
  </div>`}get leftPanel(){return n.e`
      <div class="left-panel">
        ${this.leftPanelContent}
      </div>`}get body(){return n.e`
    <div class="body">
      ${this.leftPanel}
      ${this.pageDiv}
    </div>`}render(){return n.e`
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
    `}}},390:function(e,t,i){var n={"./classification.js":[404,0,1,2,30],"./cuboid.js":[384,0,1,7,32],"./index.js":[383,40],"./keypoints-atlas.js":[407,0,26,36],"./keypoints-backbone.js":[408,0,1,2,3,10],"./keypoints-box.js":[409,0,1,2,3,21],"./keypoints-paws.js":[410,0,1,2,3,11],"./keypoints.js":[385,0,1,2,3,12],"./labels-atlas.js":[411,0,33,37],"./polygon.js":[386,0,1,2,3,22],"./rectangle.js":[376,0,1,2,3,23],"./segmentation.js":[377,0,1,2,3,20],"./sequence-cuboid.js":[412,0,1,7,27],"./sequence-keypoints.js":[413,0,1,2,3,9],"./sequence-point-rectangle.js":[414,0,1,2,3,17],"./sequence-polygon.js":[415,0,1,2,3,16],"./sequence-rectangle.js":[416,0,1,2,3,18],"./sequence-segmentation.js":[417,0,1,2,3,15],"./smart-rectangle.js":[418,0,1,2,3,14],"./smart-segmentation.js":[419,0,1,2,3,13],"./smart-tracking.js":[420,1,2,3,6,19],"./tracking-point.js":[421,1,2,3,6,24],"./tracking.js":[387,1,2,3,6,25]};function o(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(i.e)).then((function(){return i(o)}))}o.keys=function(){return Object.keys(n)},o.id=390,e.exports=o},64:function(e,t,i){"use strict";i.r(t),i.d(t,"AppExplore",(function(){return c}));var n=i(2),o=i(363),r=i(12),a=i(19),s=i(6);i(168),i(119);
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class c extends o.a{static get properties(){return{pluginName:{type:String},dataPath:{type:String}}}constructor(){super(),Object(a.a)(this._locationChanged.bind(this)),this.dataPath=""}_locationChanged(){this.active&&this.onActivate()}onActivate(){const e=window.location.hash.split("/"),t=decodeURI(e[1]),i=e[2];r.c.dispatch(Object(s.z)(t));const n=Object(r.b)("application").tasks.find(e=>e.name===t);this.pluginName=n.spec.plugin_name,this.launchPlugin(this.pluginName).then(e=>{r.c.dispatch(Object(s.n)(i)).then(()=>{e.onActivate(),this.dataPath=this.path})})}add(e){return this.pluginContainer.firstElementChild&&this.pluginContainer.firstElementChild.tagName.toLowerCase()===("plugin-"+e).toLowerCase()?Promise.resolve(this.pluginContainer.firstElementChild):new Promise(t=>{if(this.pluginContainer.firstElementChild){this.el.remove()}const i=document.createElement("plugin-"+e);this.pluginContainer.appendChild(i),i.addEventListener("ready",()=>t(i))})}launchPlugin(e){return new Promise(t=>{const n=""+e;i(390)("./"+n+".js").then(()=>this.add(e).then(e=>{t(e)}))})}goNext(e){const t=Object(r.b)("application").dataId;r.c.dispatch(e()).then(()=>{this.el.newData();const e=Object(r.b)("application"),i=e.dataId;if(i!==t){const t="/#explore/"+e.taskName+"/"+i;window.history.pushState({},"",encodeURI(t)),this.dataPath=this.path}})}goBackward(){this.goNext(s.j)}goForward(){this.goNext(s.k)}get pluginContainer(){try{return this.shadowRoot.getElementById("plugin-container")}catch{return null}}get el(){try{return this.pluginContainer.firstElementChild}catch{return null}}static get styles(){return[super.styles,n.b`
        .header {
          display: flex;
          -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
              -khtml-user-select: none; /* Konqueror HTML */
                -moz-user-select: none; /* Old versions of Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none; /* Non-prefixed version, currently
                                          supported by Chrome, Opera and Firefox */
        }
        #plugin-container {
          height: calc(100% - 50px);
        }
      `]}get path(){return Object(r.b)("media").info.path.replace("//","/")}get headerContent(){return n.e`
      <mwc-icon-button style="margin: 0;" icon="keyboard_backspace" @click=${()=>this.goHome()}></mwc-icon-button>
      <h1>${this.pluginName}-explore</h1>
      <p style="user-select: text;">${this.dataPath}</p>
      <mwc-icon-button icon="arrow_back"
                       @click=${()=>this.goBackward()}
                       title="Previous"></mwc-icon-button>
      <mwc-icon-button icon="arrow_forward"
                       @click=${()=>this.goForward()}
                       title="Next"></mwc-icon-button>
      `}get body(){return n.e`
        <div id="plugin-container"></div>
      `}}customElements.define("app-explore",c)}}]);