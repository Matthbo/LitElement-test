import { LitElement, html, customElement } from 'lit-element';

@customElement('hello-world')
export class HelloWorld extends LitElement {
    render() {
        return html`<p>Hello World!</p>`;
    }
}
