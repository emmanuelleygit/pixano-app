(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{363:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i(2),o=i(6),r=i(12);i(168),i(119),i(254),i(328),i(378),i(256),i(373),i(365),i(367),i(252),i(206);
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
class a extends s.a{static get properties(){return{active:{type:Boolean},theme:{type:String}}}constructor(){super(),this.loaded=!1,this.theme="black"}firstUpdated(){this.loaded=!0;const e=Object(r.b)("user").currentUser.preferences;e&&e.theme&&(this.theme=e.theme)}onActivate(){}onDesactivate(){}updated(e){e.has("active")&&this.loaded&&(this.active?this.onActivate():this.onDesactivate())}gotoPage(e){window.history.pushState({},"",encodeURI(e)),r.c.dispatch(Object(o.r)(e))}goHome(){const e=Object(r.b)(),t=e.user&&e.user?e.user.currentUser.role:"";let i="";if("admin"===t)i="/#dashboard-admin";else{if("user"!==t)return;i="/#dashboard-user"}window.history.pushState({},"",encodeURI(i)),r.c.dispatch(Object(o.r)(i))}errorPopup(e,t=["ok"]){return this.popUp.message=e,this.popUp.buttons=t,this.popUp.prompt()}static get styles(){return s.b`
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
function s(e){return e.composedPath()[0].value}function o(e){const t=~~(e/3600),i=~~(e%3600/60),s=~~e%60;let o="";return t>0&&(o+=t+":"+(i<10?"0":"")),o+=i+":"+(s<10?"0":""),o+=""+s,o}function r(e){var t=new Date(1e3*e),i=t.getFullYear(),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+s+" "+i+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}i.d(t,"b",(function(){return s})),i.d(t,"a",(function(){return o})),i.d(t,"c",(function(){return r}))},68:function(e,t,i){"use strict";i.r(t);var s=i(2),o=i(23),r=i(363),n=i(12),a=i(369),l=i(17);i(328),i(256),i(168),i(119),i(365),i(367),i(252),i(260),i(400),i(261);
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class c extends(Object(o.a)(n.c)(r.a)){static get properties(){return{users:{type:Array},enabledUsername:{type:String}}}constructor(){super(),this.users=[],this.dropdownValues={role:["admin","user"],"preferences.theme":["white","black"]},this.enabledUsername=""}onActivate(){n.c.dispatch(Object(l.f)()).then(()=>{this.updateUserTable()})}firstUpdated(){super.firstUpdated(),this.usernameElement=this.shadowRoot.getElementById("username"),this.passwordElement=this.shadowRoot.getElementById("password"),this.roleElement=this.shadowRoot.getElementById("role"),this.themeElement=this.shadowRoot.getElementById("theme")}onAddUser(){const e=this.usernameElement.value,t=this.passwordElement.value,i={username:e,password:t,role:this.roleElement.value,preferences:{theme:this.themeElement.value}};e&&t&&n.c.dispatch(Object(l.i)(i)).then(()=>{this.updateUserTable()})}onEdit(e){this.enabledUsername=e.username}onDeleteUser(e){n.c.dispatch(Object(l.d)(e.username)).then(()=>{this.updateUserTable()})}onPasswordChanged(e){this.passwordElement.value=Object(a.b)(e)}onSaveUser(e){e.password=this.passwordElement.value,n.c.dispatch(Object(l.j)(e)),this.enabledUsername=""}onCancel(){this.enabledUsername="",this.updateUserTable()}updateUserTable(){this.usernameElement.value="",this.passwordElement.value="",this.roleElement.select(0),this.themeElement.select(0),this.users=[],setTimeout(()=>{this.users=JSON.parse(JSON.stringify(Object(n.b)("user").users))},0)}static get styles(){return[super.styles,s.b`
    .section {
      border: 1px solid #e5e5e5;
    }
    .section-header {
      font-size:15px;
      padding: 6px 16px;
      line-height: 36px;
      color: #5c5c5c;
      background-color: #fafafa;
      border-color: #e5e5e5;
    }
    .form-group {
      padding: 16px;
    }
    #project-page {
      max-width: 1380px;
      margin: auto;
      position: absolute;
      left: 0px;
      right: 0;
    }
    mwc-tab-bar {
      background: rgb(250, 250, 250);
      padding-top: 0px;
    }
    mwc-button {
      --mdc-button-outline-color: var(--pixano-color);
      --mdc-theme-primary: var(--pixano-color);
    }
    .list-item {
      width: 100%;
      display: flex;
      background: whitesmoke;
      border-bottom: solid 1px #8e8e8e;
      height: 55px;
    }
    .list-item > p {
      flex: 1;
      text-align: center;
      margin: auto;
      overflow: hidden;
    }
    .blue {
      color: rgb(22, 118, 243);
    }
    .red {
      color: rgb(245, 36, 25);
    }
    .list-item > div {
      flex: 1;
      text-align: center;
      margin: auto;
      position: relative;
      height: 100%;
    }
    .list-item > div > mwc-select {
      position: absolute;
      --mdc-select-disabled-fill-color: transparent;
      right: 0;
      left: 0;
    }
    .list-item > p > mwc-textfield {
      --mdc-text-field-disabled-fill-color: transparent;
    }
    .header-table {
      font-weight: bold;
      background: white;
      color: black;
    }
    #grid {
      font-size: 16px;
      height: 55vh;
      overflow-y: auto;
      border: 1px solid rgb(142, 142, 142);
    }
    `]}get headerContent(){return s.e`
      <mwc-icon-button style="margin: 0;" icon="keyboard_backspace" @click=${()=>this.goHome()}></mwc-icon-button>
      <h1 class="display-4">User Manager</h1>
      <mwc-icon-button icon="exit_to_app"
                       @click=${()=>n.c.dispatch(Object(l.h)())}
                       title="Log out"></mwc-icon-button>
    `}editionCell(e){return s.e`
      <p style="display: flex; justify-content: flex-end;">
        <mwc-icon-button class="blue"
                          icon="edit"
                          style=${this.enabledUsername===e.username?"display: none;":""}
                          @click=${()=>this.onEdit(e)}></mwc-icon-button>
        <mwc-icon-button class="red"
                          icon="delete"
                          style=${this.enabledUsername===e.username?"display: none;":""}
                          @click=${()=>this.onDeleteUser(e)}></mwc-icon-button>
        <mwc-button style=${this.enabledUsername!==e.username?"display: none;":""}
                    @click=${()=>this.onSaveUser(e)}>Save</mwc-button>
        <mwc-button style=${this.enabledUsername!==e.username?"display: none;":""}
                    @click=${this.onCancel}>Cancel</mwc-button>
      </p>
    `}listitem(e){return s.e`
		<div class="list-item">
			<p>${e.username}</p>
			<p>
				<mwc-textfield value=${e.password}
							?disabled=${this.enabledUsername!==e.username}
							@input=${this.onPasswordChanged}></mwc-textfield>
			</p>
			<div>
				<mwc-select ?disabled=${this.enabledUsername!==e.username}
							@action=${t=>e.role=this.dropdownValues.role[t.detail.index]}>
				${this.dropdownValues.role.map(t=>s.e`<mwc-list-item value="${t}"
																			?selected=${t===e.role}>${t}</mwc-list-item>`)}
				</mwc-select>
			</div>
			<div>
				<mwc-select ?disabled=${this.enabledUsername!==e.username}
							@action=${t=>e.preferences.theme=this.dropdownValues["preferences.theme"][t.detail.index]}>
				${this.dropdownValues["preferences.theme"].map(t=>s.e`<mwc-list-item value="${t}"
																			?selected=${t===e.preferences.theme}>${t}</mwc-list-item>`)}
			</mwc-select>
			</div>
			${this.editionCell(e)}
		</div>
		`}get userSection(){return s.e`
      <form class="section">
        <div class="section-header">User management</div>
        <div class="form-group">
          <div style="margin-bottom: 20px;">
            <mwc-textfield id="username" label="Username"></mwc-textfield>
            <mwc-textfield id="password" label="Password"></mwc-textfield>
            <mwc-select id="role" label="Role">
              <mwc-list-item value="admin" selected>Admin</mwc-list-item>
              <mwc-list-item value="user">User</mwc-list-item>
            </mwc-select>
            <mwc-select id="theme" label="Theme">
              <mwc-list-item value="white" selected>White</mwc-list-item>
              <mwc-list-item value="black">Black</mwc-list-item>
            </mwc-select>
            <mwc-button @click=${()=>this.onAddUser()} style="vertical-align: middle;">Add</mwc-button>
          </div>
          <div id="grid">
            <div class="list-item header-table">
              <p>Username</p><p>Password</p><p>Role</p><p>Theme</p><p></p>
            </div>
            ${this.users.map(this.listitem.bind(this))}
          </div>
        </div>
      </form>`}get pageContent(){return s.e`
    <div id="project-page">
      ${this.userSection}
    </div>
    `}}customElements.define("app-user-manager",c)}}]);