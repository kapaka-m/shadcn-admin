import { type InboxThread } from './chat-types'

export const threads: InboxThread[] = [
  {
    id: 'thread-01',
    username: 'pmo.queue',
    fullName: 'PMO Escalations',
    title: 'Delivery governance thread',
    messages: [
      {
        sender: 'You',
        message:
          'Capture the blocked milestone details before the steering review.',
        timestamp: '2026-03-28T08:15:00',
      },
      {
        sender: 'PMO',
        message:
          'Two client approvals are still missing, but engineering is otherwise release ready.',
        timestamp: '2026-03-28T08:10:00',
      },
      {
        sender: 'PMO',
        message:
          'Escalation opened for the current delivery wave because milestones are slipping.',
        timestamp: '2026-03-28T07:55:00',
      },
    ],
  },
  {
    id: 'thread-02',
    username: 'support.ops',
    fullName: 'Support Control',
    title: 'SLA and incident review',
    messages: [
      {
        sender: 'Support',
        message:
          'Overage billing sync completed. One incident remains open pending client confirmation.',
        timestamp: '2026-03-28T07:20:00',
      },
      {
        sender: 'You',
        message: 'Hold escalation until finance confirms the invoice reference.',
        timestamp: '2026-03-28T07:18:00',
      },
    ],
  },
  {
    id: 'thread-03',
    username: 'finance.close',
    fullName: 'Finance Close',
    title: 'Month-end readiness',
    messages: [
      {
        sender: 'Finance',
        message:
          'Restore validation evidence is still required before the close checklist can be signed off.',
        timestamp: '2026-03-27T18:05:00',
      },
      {
        sender: 'You',
        message: 'Document the missing artifact in the review notes and flag it as blocked.',
        timestamp: '2026-03-27T17:58:00',
      },
    ],
  },
  {
    id: 'thread-04',
    username: 'integrations.ops',
    fullName: 'Connector Operations',
    title: 'External connector cutover',
    messages: [
      {
        sender: 'Integrations',
        message:
          'GitHub mapping is verified. Stripe still needs production webhook confirmation.',
        timestamp: '2026-03-27T16:40:00',
      },
      {
        sender: 'You',
        message: 'Leave the cutover checklist in pending state until secrets are rotated.',
        timestamp: '2026-03-27T16:34:00',
      },
    ],
  },
  {
    id: 'thread-05',
    username: 'security.review',
    fullName: 'Security Review',
    title: 'Privileged session audit',
    messages: [
      {
        sender: 'Security',
        message:
          'Three privileged sessions still need maker-checker review before closure.',
        timestamp: '2026-03-27T14:25:00',
      },
      {
        sender: 'You',
        message: 'Escalate any self-approval attempt immediately.',
        timestamp: '2026-03-27T14:20:00',
      },
    ],
  },
  {
    id: 'thread-06',
    username: 'docs.audit',
    fullName: 'Documentation Audit',
    title: 'Canonical references gap review',
    messages: [
      {
        sender: 'Docs',
        message:
          'Only the README, ERP scope, and production checklist were found in the local canonical documents directory.',
        timestamp: '2026-03-27T13:10:00',
      },
      {
        sender: 'You',
        message: 'Record the missing paths explicitly so future cleanup work has clear boundaries.',
        timestamp: '2026-03-27T13:02:00',
      },
    ],
  },
]
