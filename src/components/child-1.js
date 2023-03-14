import { SampleService } from "../services/sample.js";

const ChildrenOneTemplate = document.createElement('template');
ChildrenOneTemplate.innerHTML = `
  <div>
    <h1>Child One</h1>
  </div>
`;

export class ChildOneComponent extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(ChildrenOneTemplate.content.cloneNode(true));
  }

  connectedCallback(){
    const item = SampleService.getItem(1);
    console.log(item)
  }
  disconnectedCallback(){}
}