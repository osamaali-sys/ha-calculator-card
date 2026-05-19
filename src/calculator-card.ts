import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

interface CardConfig {
  type: string;
  title?: string;
}

@customElement('calculator-card')
export class CalculatorCard extends LitElement {
  @property({ attribute: false }) public hass: any;
  @state() private config?: CardConfig;
  @state() private display: string = '0';
  @state() private previousValue: number = 0;
  @state() private operation: string | null = null;
  @state() private waitingForNewValue: boolean = false;

  static styles = css`
    .calculator-container {
      max-width: 300px;
      margin: 0 auto;
      padding: 16px;
      background: var(--primary-background-color);
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-family: var(--primary-font-family);
    }

    .calculator-title {
      text-align: center;
      margin-bottom: 16px;
      color: var(--primary-text-color);
      font-size: 18px;
      font-weight: 500;
    }

    .display {
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
      padding: 12px;
      border-radius: 4px;
      margin-bottom: 12px;
      text-align: right;
      font-size: 28px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border: 1px solid var(--divider-color);
    }

    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
    }

    button {
      padding: 12px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    button:hover {
      background: var(--card-background-color);
      border-color: var(--accent-color);
    }

    button:active {
      transform: scale(0.95);
    }

    .operator {
      background: var(--accent-color);
      color: white;
    }

    .operator:hover {
      background: var(--accent-color);
      opacity: 0.8;
    }

    .equals {
      background: #4caf50;
      color: white;
      grid-column: span 2;
    }

    .equals:hover {
      background: #45a049;
    }

    .clear {
      background: #f44336;
      color: white;
      grid-column: span 2;
    }

    .clear:hover {
      background: #da190b;
    }
  `;

  setConfig(config: CardConfig): void {
    this.config = config;
  }

  private handleNumberClick(num: string): void {
    if (this.waitingForNewValue) {
      this.display = num;
      this.waitingForNewValue = false;
    } else {
      this.display = this.display === '0' ? num : this.display + num;
    }
  }

  private handleDecimal(): void {
    if (this.waitingForNewValue) {
      this.display = '0.';
      this.waitingForNewValue = false;
    } else if (!this.display.includes('.')) {
      this.display += '.';
    }
  }

  private handleOperation(op: string): void {
    const currentValue = parseFloat(this.display);

    if (this.operation !== null && !this.waitingForNewValue) {
      const result = this.calculate(
        this.previousValue,
        currentValue,
        this.operation
      );
      this.display = result.toString();
      this.previousValue = result;
    } else {
      this.previousValue = currentValue;
    }

    this.operation = op;
    this.waitingForNewValue = true;
  }

  private handleEquals(): void {
    const currentValue = parseFloat(this.display);

    if (this.operation !== null) {
      const result = this.calculate(
        this.previousValue,
        currentValue,
        this.operation
      );
      this.display = result.toString();
      this.operation = null;
      this.waitingForNewValue = true;
    }
  }

  private handleClear(): void {
    this.display = '0';
    this.previousValue = 0;
    this.operation = null;
    this.waitingForNewValue = false;
  }

  private calculate(prev: number, current: number, op: string): number {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        return current !== 0 ? prev / current : 0;
      case '%':
        return prev % current;
      default:
        return current;
    }
  }

  protected render() {
    const title = this.config?.title || 'Calculator';

    return html`
      <ha-card>
        <div class="calculator-container">
          <div class="calculator-title">${title}</div>
          <div class="display">${this.display}</div>
          <div class="buttons">
            <button class="clear" @click=${() => this.handleClear()}>
              AC
            </button>
            <button class="operator" @click=${() => this.handleOperation('%')}>
              %
            </button>
            <button class="operator" @click=${() => this.handleOperation('/')}>
              ÷
            </button>

            <button @click=${() => this.handleNumberClick('7')}>7</button>
            <button @click=${() => this.handleNumberClick('8')}>8</button>
            <button @click=${() => this.handleNumberClick('9')}>9</button>
            <button class="operator" @click=${() => this.handleOperation('*')}>
              ×
            </button>

            <button @click=${() => this.handleNumberClick('4')}>4</button>
            <button @click=${() => this.handleNumberClick('5')}>5</button>
            <button @click=${() => this.handleNumberClick('6')}>6</button>
            <button class="operator" @click=${() => this.handleOperation('-')}>
              −
            </button>

            <button @click=${() => this.handleNumberClick('1')}>1</button>
            <button @click=${() => this.handleNumberClick('2')}>2</button>
            <button @click=${() => this.handleNumberClick('3')}>3</button>
            <button class="operator" @click=${() => this.handleOperation('+')}>
              +
            </button>

            <button @click=${() => this.handleNumberClick('0')} style="grid-column: span 2;">0</button>
            <button @click=${() => this.handleDecimal()}>.</button>
            <button class="equals" @click=${() => this.handleEquals()}>=</button>
          </div>
        </div>
      </ha-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'calculator-card': CalculatorCard;
  }
}
