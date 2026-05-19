# Home Assistant Calculator Card - Development Guide

## Project Overview
A custom Home Assistant dashboard card that provides a calculator interface. Users can add this card to their HAOS dashboard and perform calculations.

## Setup Checklist

- [x] Verify that the copilot-instructions.md file in the .github directory is created.
- [x] Clarify Project Requirements - Home Assistant custom card with calculator UI
- [x] Scaffold the Project - Create project structure with npm and TypeScript
- [ ] Customize the Project - Implement calculator card component and editor
- [ ] Install Required Extensions - Install recommended VS Code extensions
- [ ] Compile the Project - Build and bundle the card
- [ ] Create and Run Task - Set up development server task
- [ ] Launch the Project - Test the card in development
- [ ] Ensure Documentation is Complete - Finalize README and setup instructions

## Development Tasks

### Current Phase: Project Scaffolding
✅ Created package.json with dependencies for Home Assistant card development
✅ Set up TypeScript configuration
✅ Created source directory structure
✅ Created Home Assistant manifest file
✅ Implemented calculator card component with Lit
✅ Created configuration editor

### Next Phase: Build & Testing
- Install dependencies
- Build the project
- Verify webpack compilation
- Test the bundled JavaScript

### Final Phase: Documentation & Release
- Configure build process
- Create dist build artifacts
- Write installation and usage documentation
- Prepare for GitHub release

## Key Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `webpack.config.js` - Webpack bundler configuration
- `hass-manifest.json` - Home Assistant integration manifest
- `src/calculator-card.ts` - Main card component
- `src/editor.ts` - Configuration editor
- `README.md` - User documentation

## Build & Run Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Development with hot reload
npm run dev

# Watch for file changes
npm run watch
```

## Installation for Home Assistant

After building, users can install by:
1. Copying `dist/calculator-card.js` to `config/www/`
2. Adding the module URL to Home Assistant configuration
3. Or using HACS to install directly
