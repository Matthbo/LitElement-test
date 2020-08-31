import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('binding-elem')
export class Binding extends LitElement {
    @property()
    string = "";

    render() {
        return html`<p>${this.string}</p>`;
    }
}


