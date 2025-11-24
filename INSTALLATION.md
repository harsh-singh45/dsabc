# Installation Guide

This guide will help you install and use the Intelation Design System packages (`@intelation/ui` and `@intelation/tokens`) in your project.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- A **GitHub account** with access to the `intelation/design-system` repository

## Table of Contents

1. [GitHub Setup](#github-setup)
2. [Creating .npmrc File](#creating-npmrc-file)
3. [Installing Packages](#installing-packages)
4. [Project Configuration](#project-configuration)
5. [Troubleshooting](#troubleshooting)

---

## GitHub Setup

Since these packages are published to **GitHub Packages** (a private npm registry), you need to authenticate with GitHub to install them.

### Step 1: Generate a GitHub Personal Access Token (PAT)

1. **Navigate to GitHub Token Settings:**
   - Go to [https://github.com/settings/tokens](https://github.com/settings/tokens)
   - Or: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Create a New Token:**
   - Click **"Generate new token"** → **"Generate new token (classic)"**
   
3. **Configure Token Settings:**
   - **Note:** Give it a descriptive name (e.g., "Intelation Design System Packages")
   - **Expiration:** Choose an expiration period (recommended: 90 days or custom)
   - **Select scopes:** Check the following:
     - ✅ `read:packages` - Download packages from GitHub Package Registry
     - ✅ `repo` (optional, only if you need to access private repository code)

4. **Generate and Save:**
   - Click **"Generate token"** at the bottom
   - **⚠️ IMPORTANT:** Copy the token immediately - you won't be able to see it again!
   - Store it securely (e.g., in a password manager)

### Step 2: Verify Repository Access

Ensure you have access to the `intelation/design-system` repository:

1. Visit [https://github.com/intelation/design-system](https://github.com/intelation/design-system)
2. If you can see the repository, you have the necessary access
3. If not, contact the repository administrator to grant you access

---

## Creating .npmrc File

The `.npmrc` file tells npm where to find the `@intelation` scoped packages and how to authenticate.

### Option 1: Project-Level Configuration (Recommended)

Create a `.npmrc` file in your project root directory:

**For Windows (PowerShell):**
```powershell
New-Item -Path .npmrc -ItemType File -Force
```

**For Windows (Command Prompt):**
```cmd
type nul > .npmrc
```

**For macOS/Linux:**
```bash
touch .npmrc
```

Then add the following content to `.npmrc`:

```
@intelation:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE
```

**⚠️ Replace `YOUR_GITHUB_TOKEN_HERE` with your actual GitHub Personal Access Token**

### Option 2: User-Level Configuration (Global)

If you want to configure authentication for all projects on your machine:

**Windows:**
```cmd
echo @intelation:registry=https://npm.pkg.github.com >> %USERPROFILE%\.npmrc
echo //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE >> %USERPROFILE%\.npmrc
```

**macOS/Linux:**
```bash
echo "@intelation:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE" >> ~/.npmrc
```

### Security Best Practices

#### Option A: Environment Variables (Most Secure)

Instead of hardcoding your token in `.npmrc`, use an environment variable:

1. **Create `.npmrc` with environment variable reference:**
```
@intelation:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

2. **Set the environment variable:**

**Windows (PowerShell):**
```powershell
$env:GITHUB_TOKEN = "your_token_here"
```

**Windows (Command Prompt):**
```cmd
set GITHUB_TOKEN=your_token_here
```

**macOS/Linux:**
```bash
export GITHUB_TOKEN=your_token_here
```

For permanent setup, add it to your shell profile (`~/.bashrc`, `~/.zshrc`, or Windows Environment Variables).

#### Option B: Add .npmrc to .gitignore

If you keep the token in `.npmrc`, **always add it to `.gitignore`**:

```gitignore
# .gitignore
.npmrc
```

**Create a `.npmrc.example` for team reference:**
```
@intelation:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE
```

---

## Installing Packages

Once your `.npmrc` is configured, you can install the design system packages.

### Install Both Packages

```bash
npm install @intelation/ui @intelation/tokens
```

### Install Individual Packages

**UI Components only:**
```bash
npm install @intelation/ui
```

**Design Tokens only:**
```bash
npm install @intelation/tokens
```

### Verify Installation

Check that packages are installed correctly:

```bash
npm list @intelation/ui @intelation/tokens
```

You should see output like:
```
├── @intelation/tokens@1.6.0
└── @intelation/ui@1.6.0
```

---

## Project Configuration

After installing the packages, configure your project to use them.

### 1. Tailwind CSS Setup

Create or update your `tailwind.config.js`:

```javascript
import tokensConfig from '@intelation/tokens/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [tokensConfig], // Use design tokens preset
  theme: {
    extend: {
      // Add custom overrides here if needed
    },
  },
  plugins: [],
};
```

### 2. Import Styles

In your main application file (e.g., `src/main.tsx`, `src/index.tsx`, or `src/app/layout.tsx`):

```tsx
// Import component styles
import '@intelation/ui/styles';

// Optional: Import token CSS variables
import '@intelation/tokens/css';
```

### 3. TypeScript Configuration

Ensure your `tsconfig.json` is configured for modern React:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true
  }
}
```

### 4. Use Components

Import and use components in your application:

```tsx
import { Button, Input, Header, Card } from '@intelation/ui';

function App() {
  return (
    <div className="p-8">
      <Header 
        logo={<img src="/logo.svg" alt="Logo" />}
        navigationItems={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />
      
      <Card className="mt-8">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <Input 
          label="Email" 
          placeholder="Enter your email"
          type="email"
        />
        <Button 
          variant="solid" 
          colorScheme="primary"
          className="mt-4"
        >
          Submit
        </Button>
      </Card>
    </div>
  );
}

export default App;
```

### 5. Using Design Tokens Directly

**In JavaScript/TypeScript:**
```typescript
import { tokens } from '@intelation/tokens';

// Access token values
const primaryColor = tokens.color.brand['500']; // #3b82f6
const fontFamily = tokens.fontFamily.sans; // 'Manrope', sans-serif
```

**In CSS:**
```css
.custom-element {
  background-color: var(--color-brand-500);
  font-family: var(--fontFamily-sans);
  border-radius: var(--borderRadius-md);
  padding: var(--spacing-4);
}
```

**In Tailwind Classes:**
```tsx
<div className="bg-brand-500 text-gray-50 rounded-lg p-4">
  Using design tokens through Tailwind
</div>
```

---

## Troubleshooting

### Issue: `npm ERR! 404 Not Found - GET https://registry.npmjs.org/@intelation%2Fui`

**Cause:** npm is looking for the package in the public registry instead of GitHub Packages.

**Solution:** Ensure your `.npmrc` file exists in the project root and contains:
```
@intelation:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE
```

### Issue: `npm ERR! 401 Unauthorized`

**Cause:** Invalid or expired authentication token.

**Solutions:**
1. Verify your token is correct in `.npmrc`
2. Check if your token has the `read:packages` scope
3. Generate a new token if the old one expired
4. Ensure you have access to the `intelation/design-system` repository

### Issue: `npm ERR! 403 Forbidden`

**Cause:** Your GitHub account doesn't have permission to access the repository.

**Solution:** Contact the repository administrator to grant you access.

### Issue: Components Not Styled Correctly

**Cause:** Missing style imports or Tailwind configuration.

**Solutions:**
1. Import component styles: `import '@intelation/ui/styles';`
2. Verify Tailwind config includes the tokens preset
3. Ensure your build process includes PostCSS/Tailwind
4. Check that content paths in `tailwind.config.js` include your component files

### Issue: TypeScript Errors with Components

**Cause:** Missing type definitions or incorrect module resolution.

**Solutions:**
1. Ensure `@intelation/ui` is installed (includes type definitions)
2. Update `tsconfig.json` with `"moduleResolution": "bundler"` or `"node16"`
3. Add `"skipLibCheck": true` to skip validation of declaration files
4. Restart your TypeScript server in VS Code

### Issue: Token Variables Not Working

**Cause:** CSS variables not imported or Tailwind preset not configured.

**Solutions:**
1. Import token CSS: `import '@intelation/tokens/css';`
2. Add tokens preset to `tailwind.config.js`: `presets: [tokensConfig]`
3. Rebuild your project after configuration changes

### Issue: `Cannot find module '@intelation/ui'`

**Cause:** Package not installed or incorrect import path.

**Solutions:**
1. Verify installation: `npm list @intelation/ui`
2. Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
3. Check that your bundler (Vite, Webpack, etc.) is configured for package resolution

---

## CI/CD Integration

### GitHub Actions

If you're using GitHub Actions, add the token as a repository secret:

1. Go to your repository → Settings → Secrets and variables → Actions
2. Click **"New repository secret"**
3. Name: `GH_PACKAGES_TOKEN`
4. Value: Your GitHub Personal Access Token
5. Click **"Add secret"**

In your workflow file (`.github/workflows/build.yml`):

```yaml
name: Build

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Create .npmrc
        run: |
          echo "@intelation:registry=https://npm.pkg.github.com" > .npmrc
          echo "//npm.pkg.github.com/:_authToken=${{ secrets.GH_PACKAGES_TOKEN }}" >> .npmrc
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
```

### Other CI/CD Platforms

For other platforms (GitLab CI, CircleCI, etc.), follow similar steps:

1. Add your GitHub token as an environment variable/secret
2. Create `.npmrc` during the build process
3. Install dependencies and build

---

## Additional Resources

- **Component Documentation:** Run Storybook at [http://localhost:6006](http://localhost:6006) with `npm run storybook` in the design-system repository
- **Component Metadata:** Available at `@intelation/ui/components.json` and `@intelation/ui/docs`
- **Design Tokens Reference:** Check `@intelation/tokens/css/tokens.css` for all available CSS variables
- **GitHub Packages Documentation:** [https://docs.github.com/en/packages](https://docs.github.com/en/packages)

---

## Support

If you encounter issues not covered in this guide:

1. Check existing issues in the [design-system repository](https://github.com/intelation/design-system/issues)
2. Create a new issue with details about your problem
3. Contact the design system team

---

## Summary Checklist

- [ ] Generate GitHub Personal Access Token with `read:packages` scope
- [ ] Create `.npmrc` file in project root
- [ ] Add token to `.npmrc` (or use environment variable)
- [ ] Add `.npmrc` to `.gitignore` if it contains the token
- [ ] Install packages: `npm install @intelation/ui @intelation/tokens`
- [ ] Configure Tailwind with tokens preset
- [ ] Import component styles in your app
- [ ] Update TypeScript configuration
- [ ] Start using components and tokens
- [ ] Configure CI/CD with GitHub token secret (if applicable)
