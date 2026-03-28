export const appConfig = {
  name: 'KAPAKA PLATFORM',
  shortName: 'KAPAKA',
  description:
    'Operations workspace for delivery oversight, governance posture, connector readiness, and platform administration.',
  workspaceLabel: 'Operations Workspace',
  operator: {
    name: 'Platform Operator',
    email: 'platform.operator@kapaka.local',
    avatar: '',
  },
} as const

export const guideReferences = [
  {
    title: 'ERP Scope Baseline',
    source: 'C:\\Users\\KAPAKA\\Desktop\\KAPAKA\\documents\\ERP SYSTEM\\ERP SYSTEM.md',
    summary:
      'Canonical domain language for ERP, PMO, finance, HR, support, integrations, AI, and workspace expectations.',
  },
  {
    title: 'Production Checklist Residue',
    source: 'C:\\Users\\KAPAKA\\Desktop\\KAPAKA\\documents\\operations\\PRODUCTION_CHECKLIST.md',
    summary:
      'Environment-executed production tasks that still require operators, secrets, provider cutover, and DR validation.',
  },
  {
    title: 'Discovered Documentation Index',
    source: 'C:\\Users\\KAPAKA\\Desktop\\KAPAKA\\documents\\README.md',
    summary:
      'Entry point for the canonical material currently available in the local KAPAKA documentation workspace.',
  },
] as const
