import {
  LayoutDashboard,
  Bell,
  BookOpenText,
  BriefcaseBusiness,
  Cable,
  Inbox,
  Monitor,
  Palette,
  Settings,
  ShieldCheck,
  UserRoundCog,
  UserCog,
  Users,
} from 'lucide-react'
import { appConfig } from '@/config/app'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: appConfig.operator,
  navGroups: [
    {
      title: 'Workspace',
      items: [
        {
          title: 'Workspace',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Operations',
          url: '/operations',
          icon: BriefcaseBusiness,
        },
        {
          title: 'Team',
          url: '/team',
          icon: Users,
        },
        {
          title: 'Integrations',
          url: '/integrations',
          icon: Cable,
        },
        {
          title: 'Inbox',
          url: '/inbox',
          badge: '6',
          icon: Inbox,
        },
      ],
    },
    {
      title: 'Platform',
      items: [
        {
          title: 'Settings',
          icon: Settings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: UserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: UserRoundCog,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: Palette,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: Bell,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: Monitor,
            },
          ],
        },
        {
          title: 'Guide',
          url: '/guide',
          icon: BookOpenText,
        },
        {
          title: 'Security',
          url: '/settings/account',
          icon: ShieldCheck,
        },
      ],
    },
  ],
}
