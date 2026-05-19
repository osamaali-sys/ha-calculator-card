# Home Assistant Calculator Card

An experimental calculator card for Home Assistant dashboard (HAOS). Add this card to your Home Assistant dashboard and perform calculations directly from your dashboard.

## Features

- ✅ Full calculator functionality (addition, subtraction, multiplication, division, modulo)
- ✅ Clean, responsive UI with Home Assistant theme integration
- ✅ Works on any device (desktop, tablet, mobile)
- ✅ Customizable card title
- ✅ Lightweight and fast

## Installation

### Method 1: Using HACS (Recommended)

1. In Home Assistant, go to **Settings** → **Devices & Services** → **Automations & Scenes** → search for HACS
2. Install HACS if you haven't already
3. In HACS, go to **Frontend**
4. Click the three-dot menu → **Custom repositories**
5. Add `https://github.com/yourusername/ha-calculator-card`
6. Search for "Calculator Card" and install
7. Restart Home Assistant

### Method 2: Manual Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/ha-calculator-card.git
   cd ha-calculator-card
   ```

2. Build the card:
   ```bash
   npm install
   npm run build
   ```

3. Copy the `dist/calculator-card.js` file to your Home Assistant `config/www/` directory

4. Add the following to your Home Assistant `configuration.yaml`:
   ```yaml
   frontend:
     extra_module_url:
       - /local/calculator-card.js
   ```

5. Restart Home Assistant

## Usage

### Add to Dashboard

1. In Home Assistant, go to your dashboard
2. Click **+ Create card**
3. Search for "Calculator"
4. Click on "Calculator Card"
5. Click **Save**

### Configuration

The calculator card supports the following configuration options:

```yaml
type: custom:calculator-card
title: "My Calculator"  # Optional - customize the card title
```

## Development

### Prerequisites

- Node.js 16+ and npm
- Git

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will run on `http://localhost:8080`

### Build

```bash
# Build for production
npm run build

# Watch for changes during development
npm run watch
```

### Project Structure

```
├── src/
│   ├── calculator-card.ts    # Main calculator card component
│   └── editor.ts              # Card editor UI
├── dist/                       # Built output (generated)
├── package.json
├── tsconfig.json
├── webpack.config.js
├── hass-manifest.json
└── README.md
```

## Technologies Used

- **Lit** - Lightweight web components framework
- **TypeScript** - Type-safe JavaScript
- **Webpack** - Module bundler
- **Home Assistant** - Smart home automation platform

## How to Publish to HACS

1. Push your code to GitHub
2. Tag your repository with a version (e.g., `v1.0.0`)
3. Submit your repository URL to [HACS](https://hacs.xyz/) by creating a pull request
4. Once approved, users can install your card through HACS

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For issues, feature requests, or questions:
- Open an issue on [GitHub](https://github.com/yourusername/ha-calculator-card/issues)
- Check existing issues for solutions

## Disclaimer

This is an experimental project. Use at your own risk. Not affiliated with or endorsed by Home Assistant.
