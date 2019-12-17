
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class StarCheck extends LitElement {
      static get properties() {
      return {
      
      
      starBool: { type: Boolean },
      
    };
  }
  

  constructor() {
      super();
      
      
      this.starBool = false;        
                
      
  }
  render(){
    return html`
      ${this.starBool?
      html`<i class="material-icons">star</i>`:
      html`<i class="material-icons">star_border</i>`}
    `;
  }
}
// Register the new element with the browser.
customElements.define('star-check', StarCheck);