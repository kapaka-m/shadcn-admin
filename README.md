# KAPAKA PLATFORM

Branded frontend workspace shell for KAPAKA PLATFORM. The codebase now focuses on a smaller, cleaner set of production-facing surfaces:

- Workspace dashboard
- Operations queue
- Team directory
- Integrations and connectors
- Operational inbox
- Workspace settings
- Platform guide

## Canonical alignment

This cleanup used the KAPAKA documentation that was actually present locally during the audit:

- `C:\Users\KAPAKA\Desktop\KAPAKA\documents\README.md`
- `C:\Users\KAPAKA\Desktop\KAPAKA\documents\ERP SYSTEM\ERP SYSTEM.md`
- `C:\Users\KAPAKA\Desktop\KAPAKA\documents\operations\PRODUCTION_CHECKLIST.md`

Those sources drove terminology for workspace, integrations, governance, PMO, finance, support, and security. Additional document paths referenced in the audit prompt were not found in the discovered local documents directory and are called out in [docs/REFRACTOR_NOTES.md](/c:/Users/KAPAKA/Desktop/Cloun/shadcn-admin/docs/REFRACTOR_NOTES.md).

## What changed

- Removed Clerk demo integration, duplicate auth variant, upstream starter branding, and template-only routes.
- Replaced random/faker data with curated seed records that better match KAPAKA operational language.
- Renamed user-facing routes to `/operations`, `/team`, `/integrations`, `/inbox`, and `/guide`.
- Reworked dashboard, settings, auth, and empty-state copy to fit a consistent KAPAKA PLATFORM shell.

## Local development

```bash
pnpm install
pnpm dev
```

Useful checks:

```bash
pnpm lint
pnpm build
pnpm knip
```

## Notes

- The current implementation still uses seeded frontend data and mock form submissions.
- Real API, Laravel, and identity integrations should replace the placeholders before production rollout.
- The inherited `LICENSE` and deployment artifacts should be reviewed by a human before public release.
