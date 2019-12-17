import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';

class MyElement extends LitElement {

  static get properties() {
    return {
      nameArray: { type: Array, reflect: true },
      bookCount: { type: Array, reflect: true  },
      starred: { type: Boolean, reflect: true  },
      input: { type: String, reflect: true }
    };
  }

  constructor() {
    super ();
    this.nameArray = [];
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
    
    var reformattedArray = this.bookCount.map(obj => {
    var rObj = {};
    rObj[obj.name] = obj.books;
    return rObj;
  });

  console.log(reformattedArray);
}

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attribute change: ', name, newVal);
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  render() {
    return html`
    
      <div class="container">
    <ul class="demo-list-two mdl-list">${this.bookCount.map(({name, books, starred}) => 
    html `
      <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">person</i>
          <span>${name} ${this.bookCount[name]}&nbsp;</span>
          <span class="mdl-list__item-sub-title">${books} ${this.bookCount[books]}&nbsp;</span>
        </span>
        <span class="mdl-list__item-secondary-content">
         <a class="mdl-list__item-secondary-action" href="#" @click="${this.handleClickStar}">${starred?html`<i class="material-icons">star_border</i>`:html`<i class="material-icons">star</i>`}</a>
        </span>
      </li>`)}
    </ul>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" id="sample3">
      <label class="mdl-textfield__label" for="sample3">Name</label>
    </div>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" @click="${this.handleClick}">
      <i class="material-icons">add</i>
    </button>
  </div>
    
    
    `;
  }

  
  
  handleClickStar(starred) {
    if (this.starred === true) {
      this.starred = false;
    } else {
      this.starred = true
    }
  }
  
  handleClick(e) {
    console.log(this.prop);
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
  
  createRenderRoot() {
    // Disable Shadow DOM to simplify CSS.
    return this;
  }
}

customElements.define('my-element', MyElement);

const data = [
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

var reformattedArray = data.map(obj => {
  var rObj = {};
  rObj[obj.name] = obj.books;
  return rObj;
});

console.log(reformattedArray);

// TODO: render this array onto the page

