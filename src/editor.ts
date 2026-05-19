import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface EditorConfig {
  type: string;
  title?: string;
}

@customElement('calculator-card-editor')
export class CalculatorCardEditor extends LitElement {
  @property({ attribute: false }) public hass: any;
  @property({ attribute: false }) public config?: EditorConfig;

  static styles = css`
    .editor-container {
      padding: 16px;
    }

    .editor-label {
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--primary-text-color);
    }
  `;

  protected render() {
    const title = this.config?.title || '';

    return html`
      <div class="editor-container">
        <div class="editor-label">Card Title (optional)</div>
        <input
          type="text"
          .value="${title}"
          @input=${this._handleTitleChange}
          placeholder="Enter card title"
        />
      </div>
    `;
  }

  private _handleTitleChange(event: any): void {
    const value = event.target.value;
    const config = { ...this.config, title: value };
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'calculator-card-editor': CalculatorCardEditor;
  }
}
