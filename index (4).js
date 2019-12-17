import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';

class MyElement extends LitElement {

  static get properties() {
    return {
      bookCount: { type: Array, reflect: true  },
      starred: { type: Boolean, reflect: true  },
      name: { type: String, reflect: true }
    };
  }

  constructor() {
    super ();
    
    this.bookCount =  [
    {
      name: "Bryan Cranston",
      books: 3,
      starred: false,
    },
    {
      name: "Aaron Paul",
      books: 62,
      starred: true,
    },
    {
      name: "Bob Odenkirk",
      books: 0,
      starred: false,
    }
    ];
  
    this.name = '';
    
      var reformattedArray = this.bookCount.map(obj => {
      var rObj = {};
      rObj[obj.name] = obj.books;
      return rObj;
    });

      console.log(reformattedArray);
  }

  handleClickStar(event) {
    console.log(event.target);
    this.starred = !this.starred;
    // ^ if true then make false
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attribute change: ', name, newVal);
    super.attributeChangedCallback(name, oldVal, newVal);
  }
  
  firstUpdated(changedProperties) {
    this.addEventListener('click', this.handleClick);
  }
  
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('readystatechange', this.handleChange);
  }
  disconnectedCallback() {
    document.removeEventListener('readystatechange', this.handleChange);
    super.disconnectedCallback();
  }

  render() {
    return html`
    
      <div class="container">
    <ul class="demo-list-two mdl-list">${this.bookCount.map(({name, books, starred}) => 
    html `
      <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">person</i>
          <span>${name}</span>
          <span class="mdl-list__item-sub-title">Books ${books}</span>
        </span>
        <span class="mdl-list__item-secondary-content">
         <a class="mdl-list__item-secondary-action" href="#" @click="${this.handleClickStar}">${this.starred ? html`<i class="material-icons">star_border</i>`:html`<i class="material-icons">star</i>`}</a>
        </span>
      </li>
    </ul>`)}
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" placeholder ="Name" value="${this.name}" @change="${this.updateName}">
      <label class="mdl-textfield__label" for="sample3"></label>
    </div>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" @click="${this.addName}">
      <i class="material-icons">add</i>
    </button>
  </div>
    
    
    `;
  }
  
  addName() {
    if(this.name) {
      this.bookCount = [...this.bookCount, {
        name: this.name,
        complete:false
      }];
      this.name = '';
    }
  }
  
  shortcutListener(e) {
    if (e.key === 'Enter') { 
      this.addName();
    }
  }
  
  updateName(e) {
    this.name = e.target.value; 
  }
  

  createRenderRoot() {
    // Disable Shadow DOM to simplify CSS.
    return this;
  }
}

customElements.define('my-element', MyElement);



