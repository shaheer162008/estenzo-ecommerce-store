# Contributing to Estenzo Ecommerce Store

Thank you for considering contributing to Estenzo! We welcome contributions from the community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## 🚀 Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Set up the development environment following the README
4. Create a new branch for your feature or bugfix

## 🤝 How to Contribute

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- Use a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Provide specific examples and screenshots if possible
- Describe the behavior you observed and what behavior you expected
- Include your environment details (OS, browser, Node.js version)

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use a clear and descriptive title
- Provide a step-by-step description of the suggested enhancement
- Provide specific examples to demonstrate the steps
- Describe the current behavior and explain which behavior you expected instead
- Explain why this enhancement would be useful

### 🔧 Code Contributions

#### Areas for Contribution

- **Frontend Components**: New UI components or improvements
- **Backend APIs**: New endpoints or optimization
- **Admin Dashboard**: Enhanced features and analytics
- **Mobile Optimization**: Responsive design improvements
- **Performance**: Code optimization and caching
- **Security**: Authentication and data protection
- **Documentation**: Improving guides and examples
- **Testing**: Unit tests and integration tests

## 🔄 Development Workflow

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/issue-description
   ```

2. **Make Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

3. **Test Your Changes**
   ```bash
   npm run dev
   npm run build
   npm run lint
   ```

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add new product filter functionality"
   ```

## 📏 Coding Standards

### TypeScript/JavaScript
- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add type definitions for all functions
- Prefer functional components with hooks

### React Components
- Use functional components with React hooks
- Keep components small and focused
- Use proper prop typing with TypeScript
- Follow the existing folder structure

### CSS/Styling
- Use Tailwind CSS classes
- Follow mobile-first approach
- Keep styles consistent with design system
- Use CSS variables for colors and spacing

### Database
- Follow existing schema patterns
- Add proper validation to models
- Use descriptive field names
- Include necessary indexes

## 📝 Commit Message Guidelines

Use conventional commits format:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

Examples:
```
feat: add product comparison feature
fix: resolve cart quantity update issue
docs: update API documentation
style: improve mobile navigation layout
```

## 🚀 Submitting Changes

1. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template

3. **PR Requirements**
   - Clear title and description
   - Reference any related issues
   - Include screenshots for UI changes
   - Ensure all tests pass
   - Update documentation if needed

## 🧪 Testing

- Write tests for new features
- Ensure existing tests still pass
- Test on multiple devices/browsers
- Verify mobile responsiveness

## 📚 Documentation

- Update README.md if needed
- Add JSDoc comments for functions
- Update API documentation
- Include code examples

## 🎯 Priority Areas

Current priority areas for contributions:

1. **Payment Integration**: Stripe/PayPal integration
2. **Order Management**: Enhanced order tracking
3. **Internationalization**: Arabic language support
4. **Performance**: Image optimization and caching
5. **Testing**: Comprehensive test coverage
6. **Analytics**: Enhanced reporting features

## 💬 Questions?

- Create an issue for questions
- Join our Discord community
- Email us at dev@estenzo.com

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- GitHub contributors page
- Release notes for major contributions

Thank you for contributing to Estenzo! 🛍️
