# Agent Context (Last Updated: 16. Januar 2026)

> **📋 Update-Strategie:**
> - **Bei Architecture-Änderungen:** Sofort updaten
> - **Monatlich:** Kompletter Review
> - **Nach Major Features:** Anpassungen prüfen

## 🎯 Project Mission
Educational intranet for managing students, teachers, courses (1-2 sentences)

## 🏗️ Tech Stack Quick Ref
- Next.js 16.1.1 (App Router)
- PostgreSQL (Neon) + Prisma 5.22.0
- Deployed: https://schul-portal-demo.vercel.app

## 📂 File Structure Hot Spots
- Actions: lib/actions.ts
- Auth: lib/auth.ts
- Schema: prisma/schema.prisma
- Components: components/ (shared), app/*/  (page-specific)

## 🚨 Critical Known Issues
[Update this when bugs appear]
- None currently

## 🔐 Security Considerations
- JWT in httpOnly cookies
- Role-based middleware protection
- Server Actions for mutations only

## 📝 Coding Conventions
- TypeScript strict mode
- Server Components default
- Conventional Commits (feat:, fix:, docs:)
- Prisma for ALL database access

## 🎨 UI Patterns
- shadcn/ui components
- Tailwind utility-first
- Responsive mobile-first

## 🔄 Common Tasks
### Add new notification type:
1. Update Notification.type enum in schema
2. Update getNotificationBadgeVariant()
3. Update getNotificationTypeLabel()

### Add new Server Action:
1. Define in lib/actions.ts
2. Add "use server" if new file
3. Add revalidatePath() for affected routes
4. Export and use in client component