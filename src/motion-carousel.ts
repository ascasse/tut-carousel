import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {styles} from './styles.js';

@customElement('motion-carousel')
export class MotionCarousel extends LitElement {
  static override styles = styles;

  override render() {
    return html`
      <div>
      </div>
    `;
  }
}
