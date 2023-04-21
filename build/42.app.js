(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{65:function(e,t,o){"use strict";o.r(t);var i=o(2),r=o(12),a=o(17),s=o(6);o(252),o(168),o(119),o(328);
/**
 * @copyright CEA-LIST/DIASI/SIALV/LVA (2019)
 * @author CEA-LIST/DIASI/SIALV/LVA <pixano@cea.fr>
 * @license CECILL-C
*/
class n extends i.a{login(){const e=this.usernameElement.value,t=this.passwordElement.value;r.c.dispatch(Object(a.g)(e,t)).then(()=>{this.goHome(),this.usernameElement.value="",this.passwordElement.value=""}).catch(()=>{window.alert("Authentification failed.")})}goHome(){const e="admin"===Object(r.b)("user").currentUser.role?"/#dashboard-admin":"/#dashboard-user";window.history.pushState({},"",encodeURI(e)),r.c.dispatch(Object(s.r)(e))}get usernameElement(){return this.shadowRoot.getElementById("username")}get passwordElement(){return this.shadowRoot.getElementById("password")}static get styles(){return i.b`
      :host {
        height: 100%;
        overflow: auto;
        --leftPanelWidth: 55px;
        --primary-color: #79005D;
        --secondary-color: #FF5C64;
        --mdc-theme-primary: var(--primary-color);
        --mdc-theme-secondary: var(-secondary-color);
      }
      h1 {
        font-size: 20px;
        margin: 20px;
        font-weight: 300;
      }
      .section {
        border: 1px solid #e5e5e5;
        width: 60%;
        margin: auto;
        max-width: 800px;
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
      mwc-textfield {
        width: 100%;
      }
      #login-page {
        margin: auto;
        position: absolute;
        left: 0px;
        right: 0;
        padding: 20vh 0;
        width: 100%;
        display: flex;
      }
      .form-buttons {
        margin: 30px;
        display: block;
        float: right;
      }
      `}render(){return i.e`
      <h1 class="display-4">Welcome to the annotation tool PIXANO!</h1>
      <div id="login-page">
        <form class="section">
          <div class="section-header">
            <img src="images/pixano-logo-grad.svg" style="width: 200px; display: block; margin: auto; padding: 30px 0px;"; alt="PIXANO">
          </div>
          <div class="form-group">
            
            <mwc-textfield label="Login"
                            id="username"
                            required
                            helper="Enter your username"></mwc-textfield>
            <mwc-textfield label="Password"
                            type="password"
                            id="password"
                            required
                            helper="Enter your password"></mwc-textfield>
            <div class="form-buttons">
              <mwc-button raised @click=${this.login}>Log In</mwc-button>
            </div>                              
          </div>
        </form>
      </div>

      `}}customElements.define("app-login",n)}}]);