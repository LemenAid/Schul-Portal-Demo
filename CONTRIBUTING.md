# Contributing to Schul-Portal-Demo

First off, thank you for considering contributing to Schul-Portal-Demo! 🎉

This is an educational intranet application for managing students, teachers, courses, and time tracking. We welcome contributions that improve the project while keeping it accessible for learning purposes.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Guidelines](#coding-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

**Be Respectful.** This is a learning project. We're all here to improve and help each other grow. Treat everyone with respect, patience, and kindness.

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating a bug report, please check existing issues to avoid duplicates.

**Good Bug Report Includes:**
- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### 💡 Suggesting Features

We love new ideas! Before suggesting:
1. Check if it aligns with the educational/intranet scope
2. Search existing issues for similar suggestions
3. Open an issue with the `enhancement` label

**Good Feature Request Includes:**
- **Problem:** What problem does this solve?
- **Solution:** Your proposed solution
- **Alternatives:** Other approaches you considered
- **Use Case:** When would this be used?

### 🔧 Contributing Code

1. **Start with an Issue:** Open an issue first to discuss changes
2. **Wait for Approval:** Let maintainers approve before starting work
3. **Fork & Branch:** Create a feature branch in your fork
4. **Code & Test:** Implement your changes with tests (if applicable)
5. **Submit PR:** Create a pull request following our guidelines

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL (or use Neon for cloud database)
- Git

### Local Setup

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/Vibe-Coding-Unterricht.git
cd Vibe-Coding-Unterricht/intranet

# 3. Install dependencies
npm install

# 4. Set up environment variables
# Copy .env.example to .env and fill in your database URL
cp .env.example .env

# 5. Initialize database
npx prisma migrate dev
npx prisma db seed

# 6. Run development server
npm run dev
```

Visit `http://localhost:3000` to see the app running.

### Demo Accounts

After seeding, you can log in with:
- **Admin:** `admin@demo.com` / `password123`
- **Staff:** `staff@demo.com` / `password123`
- **Teacher:** `teacher@demo.com` / `password123`
- **Student:** `student@demo.com` / `password123`

## Development Workflow

### Branch Naming

Use descriptive branch names:
```
feature/notification-history-tab
fix/typescript-bulletin-error
docs/update-readme-features
chore/cleanup-temp-files
```

### Testing

```bash
# Run type checking
npm run type-check

# Run linter
npm run lint

# Build to check for errors
npm run build
```

### Database Changes

If you modify the schema:

```bash
# Create migration
npx prisma migrate dev --name your_migration_name

# Regenerate Prisma Client
npx prisma generate
```

## Coding Guidelines

### TypeScript

- ✅ Use TypeScript for all new files
- ✅ Define proper types (avoid `any`)
- ✅ Use Prisma types for database models

### React/Next.js

- ✅ Use Server Components by default
- ✅ Add `"use client"` only when needed (interactivity, hooks)
- ✅ Use Server Actions for data mutations
- ✅ Follow Next.js App Router conventions

### Styling

- ✅ Use Tailwind CSS utility classes
- ✅ Use shadcn/ui components where possible
- ✅ Keep consistent spacing and colors

### File Organization

```
intranet/
├── app/              # Next.js pages (route folders)
├── components/       # Reusable UI components
├── lib/              # Utilities, actions, auth
├── prisma/           # Database schema & migrations
└── public/           # Static assets
```

## Commit Message Guidelines

We follow **Conventional Commits**:

```
<type>(<scope>): <short description>

<optional body>

<optional footer>
```

### Types

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style (formatting, no logic change)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance (dependencies, config)

### Examples

```
feat(notifications): add history tab with filtered view

- Implement notification type filtering
- Add History tab to /inquiries page
- Exclude INQUIRY type from history

Closes #42
```

```
fix: TypeScript error in bulletin page userId check

Add null check for post.userId before passing to notification
```

## Pull Request Process

### Before Submitting

- [ ] Code follows project style guidelines
- [ ] TypeScript compiles without errors (`npm run build`)
- [ ] You've tested your changes locally
- [ ] Documentation updated (if needed)
- [ ] Commit messages follow guidelines

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issue
Closes #(issue number)

## Testing
How did you test this?

## Screenshots (if applicable)
Add screenshots here
```

### Review Process

1. **Automated Checks:** Vercel deployment, TypeScript compilation
2. **Code Review:** Maintainer reviews your code
3. **Feedback:** Address any requested changes
4. **Merge:** Once approved, we'll merge your PR!

### After Your PR is Merged

- Your changes will be deployed automatically to Vercel
- You'll be credited in the commit history
- Thank you for contributing! 🎉

## Questions?

Feel free to:
- Open an issue with the `question` label
- Comment on existing issues
- Check our [Documentation](./DOCUMENTATION.md)

## Recognition

All contributors will be recognized in our project. Thank you for making Schul-Portal-Demo better!

---

**Happy Coding!**
