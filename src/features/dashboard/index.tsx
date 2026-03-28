import {
  Building2,
  ListChecks,
  PlugZap,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { Analytics } from './components/analytics'
import { Overview } from './components/overview'
import { PriorityUpdates } from './components/priority-updates'

const workspaceStats = [
  {
    title: 'Active organizations',
    value: '12',
    note: '2 onboarding reviews due this week',
    icon: Building2,
  },
  {
    title: 'Open work items',
    value: '27',
    note: '8 require cross-team coordination',
    icon: ListChecks,
  },
  {
    title: 'Live connectors',
    value: '8/12',
    note: '2 still waiting on production cutover',
    icon: PlugZap,
  },
  {
    title: 'Security reviews',
    value: '3',
    note: 'Maker-checker approvals pending',
    icon: ShieldCheck,
  },
] as const

const topNav = [
  {
    title: 'Workspace',
    href: '/',
    isActive: true,
    disabled: false,
  },
  {
    title: 'Operations',
    href: '/operations',
    isActive: false,
    disabled: false,
  },
  {
    title: 'Integrations',
    href: '/integrations',
    isActive: false,
    disabled: false,
  },
  {
    title: 'Guide',
    href: '/guide',
    isActive: false,
    disabled: false,
  },
]

export function Dashboard() {
  return (
    <>
      <Header>
        <TopNav links={topNav} />
        <div className='ms-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between gap-3'>
          <div className='space-y-1'>
            <h1 className='text-2xl font-bold tracking-tight'>Workspace</h1>
            <p className='text-muted-foreground'>
              Executive snapshot of delivery, governance, connector readiness,
              and operational follow-through.
            </p>
          </div>
          <Button>Export snapshot</Button>
        </div>

        <Tabs orientation='vertical' defaultValue='overview' className='space-y-4'>
          <div className='w-full overflow-x-auto pb-2'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='readiness'>Readiness</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {workspaceStats.map((stat) => (
                <Card key={stat.title}>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      {stat.title}
                    </CardTitle>
                    <stat.icon className='h-4 w-4 text-muted-foreground' />
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>{stat.value}</div>
                    <p className='text-xs text-muted-foreground'>{stat.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className='col-span-1 lg:col-span-4'>
                <CardHeader>
                  <CardTitle>Operational throughput</CardTitle>
                  <CardDescription>
                    Monthly completion trend for curated platform workstreams.
                  </CardDescription>
                </CardHeader>
                <CardContent className='ps-2'>
                  <Overview />
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Priority updates</CardTitle>
                  <CardDescription>
                    High-signal items across finance, delivery, support, and
                    infrastructure.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PriorityUpdates />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value='readiness' className='space-y-4'>
            <Analytics />
          </TabsContent>
        </Tabs>
      </Main>
    </>
  )
}
