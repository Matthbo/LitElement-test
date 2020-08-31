import { LitElement, html, customElement, property, css } from 'lit-element';
import './binding';

@customElement('breadcrumb-list')
export class Breadcrumbs extends LitElement {
    @property()
    list: string[] = ['test', 'test2'];

    static get styles() {
        return css`
            ul {
                list-style:none;
                margin: 16px 0;
            }

            ul li {
                display: inline-block;
            }

            ul li+li:before  {
                padding:8px;
                color:#000;
                content: ">";
            }
        `;
    }

    render() {
        return html`<ul>
            ${this.list.map(i => html`<li>${i}</li>`)}
        </ul>
        <binding-elem .string="${"This is a binded string"}"></binding-elem>`;
    }
}


