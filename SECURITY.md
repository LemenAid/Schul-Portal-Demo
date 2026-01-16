# Security Policy

## Supported Versions

This is an educational demo project. We currently support the latest version deployed on Vercel.

| Version | Supported          |
| ------- | ------------------ |
| Latest (main) | :white_check_mark: |
| Older versions | :x: |

## Reporting a Vulnerability

We take security seriously, even for educational projects. If you discover a security vulnerability in the Schul-Portal-Demo, please report it responsibly.

### How to Report

**Please DO NOT create a public GitHub issue for security vulnerabilities.**

Instead, please report security issues via:
- **Email:** lemen.aid@icloud.com
- **GitHub Security Advisory:** Use the "Security" tab → "Report a vulnerability"

### What to Include

Please provide:
1. **Description** of the vulnerability
2. **Steps to reproduce** the issue
3. **Potential impact** (what could an attacker do?)
4. **Suggested fix** (if you have one)

### Response Timeline

- **Acknowledgment:** Within 48 hours
- **Status Update:** Within 7 days
- **Fix & Disclosure:** We aim to fix critical issues within 30 days

### Disclosure Policy

- We will coordinate public disclosure with you
- We appreciate responsible disclosure and will credit you (if desired) in the fix commit

## Security Best Practices

This project includes:
- ✅ JWT-based authentication with httpOnly cookies
- ✅ Role-based access control (RBAC)
- ✅ Server-side validation via Next.js Server Actions
- ✅ Environment variables for sensitive data
- ✅ PostgreSQL with Prisma ORM (parameterized queries)

## Known Limitations

As an educational project, please note:
- This is a **demo application** - not production-ready
- User passwords are hashed, but use strong passwords in any real deployment
- No rate limiting implemented yet
- HTTPS required for production use (handled by Vercel)

## Questions?

For general security questions (not vulnerabilities), feel free to open a regular GitHub issue.

---

**Thank you for helping keep Schul-Portal-Demo secure!** 🔒
