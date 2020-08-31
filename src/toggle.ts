import { LitElement, html, customElement, property } from 'lit-element';

@customElement('toggle-test')
export class Toggle extends LitElement {
    @property()
    toggled = false;

    render() {
        return html`
            <button @click="${this.toggle}">Toggle</button>
            <span>Toggle is ${this.toggled}</span>
        `;
    }

    toggle(){
        this.toggled = !this.toggled
    }
}
