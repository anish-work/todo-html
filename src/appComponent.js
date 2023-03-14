import { SampleService } from "./services/sample.js";

const AppTemplate = document.createElement('template');
AppTemplate.innerHTML = `
  <style>
    @import url('./appComponent.css)
  </style>
  <div class="app-component">
    <h1>App Component</h1>
    <child-one></child-one>
  </div>
`;

export class AppComponent extends HTMLElement {
  constructor(){
    super()
    this.attachShadow( { mode: "open" });
    this.shadowRoot.appendChild(AppTemplate.content.cloneNode(true));
  }
  
  connectedCallback(){
    SampleService.addItem({ id: 1, value: "First" });
    SampleService.addItem({ id: 2, value: "Two" });
  }

  disconnectedCallback(){

  }
}