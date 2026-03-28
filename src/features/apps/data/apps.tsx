import {
  IconDocker,
  IconFigma,
  IconGithub,
  IconGitlab,
  IconGmail,
  IconNotion,
  IconSlack,
  IconStripe,
  IconTelegram,
  IconWhatsapp,
  IconZoom,
} from '@/assets/brand-icons'

export const apps = [
  {
    name: 'GitHub',
    logo: <IconGithub />,
    connected: true,
    desc: 'Delivery event sync for repositories, releases, and deployment references.',
  },
  {
    name: 'GitLab',
    logo: <IconGitlab />,
    connected: false,
    desc: 'Alternative delivery connector for merge activity and CI pipeline posture.',
  },
  {
    name: 'Slack',
    logo: <IconSlack />,
    connected: true,
    desc: 'Operational notifications for approvals, incidents, and connector cutover events.',
  },
  {
    name: 'Telegram',
    logo: <IconTelegram />,
    connected: false,
    desc: 'Escalation channel for high-priority alerts in distributed support flows.',
  },
  {
    name: 'WhatsApp',
    logo: <IconWhatsapp />,
    connected: false,
    desc: 'Client communication path for urgent service updates and outreach workflows.',
  },
  {
    name: 'Figma',
    logo: <IconFigma />,
    connected: true,
    desc: 'Design review handoff for product surfaces, implementation notes, and UI audits.',
  },
  {
    name: 'Notion',
    logo: <IconNotion />,
    connected: false,
    desc: 'Reference sync for working notes, SOP drafts, and operating checklists.',
  },
  {
    name: 'Gmail',
    logo: <IconGmail />,
    connected: true,
    desc: 'Mailbox integration for approval receipts, outbound notices, and support follow-up.',
  },
  {
    name: 'Zoom',
    logo: <IconZoom />,
    connected: false,
    desc: 'Meeting orchestration for discovery, governance review, and delivery checkpoint calls.',
  },
  {
    name: 'Stripe',
    logo: <IconStripe />,
    connected: true,
    desc: 'Commercialization and payment collection readiness for tenant billing flows.',
  },
  {
    name: 'Docker',
    logo: <IconDocker />,
    connected: false,
    desc: 'Container operations visibility for deployment packaging and environment drill scripts.',
  },
]
