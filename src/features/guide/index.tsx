import {
  BookOpenText,
  CircleAlert,
  ClipboardCheck,
  ShieldCheck,
} from 'lucide-react'
import { appConfig, guideReferences } from '@/config/app'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

const reviewItems = [
  'Additional canonical documents referenced in the audit prompt were not present in the discovered local documents directory.',
  'Current pages still use curated seed data and toast-based form submissions until Laravel or API integrations are wired in.',
  'Inherited legal and deployment artifacts should be reviewed by a human before public distribution.',
]

export function Guide() {
  return (
    <>
      <Header>
        <Search placeholder='Search guide references' />
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      <Main className='flex flex-1 flex-col gap-4 sm:gap-6'>
        <div className='flex flex-wrap items-end justify-between gap-3'>
          <div className='space-y-1'>
            <h1 className='text-2xl font-bold tracking-tight'>
              Platform Guide
            </h1>
            <p className='max-w-3xl text-muted-foreground'>
              Reference points used to align this workspace with the current
              KAPAKA documentation that exists locally.
            </p>
          </div>
          <Button variant='outline'>
            <BookOpenText />
            {appConfig.workspaceLabel}
          </Button>
        </div>

        <div className='grid gap-4 xl:grid-cols-[2fr_1fr]'>
          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-1'>
            {guideReferences.map((reference) => (
              <Card key={reference.source}>
                <CardHeader>
                  <CardTitle>{reference.title}</CardTitle>
                  <CardDescription>{reference.source}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground'>
                    {reference.summary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <ClipboardCheck className='size-5 text-primary' />
                  Current posture
                </CardTitle>
                <CardDescription>
                  What this frontend is now optimized for.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-3 text-sm text-muted-foreground'>
                <p>
                  A branded KAPAKA workspace shell with coherent navigation,
                  curated seed data, and cleaner production-facing terminology.
                </p>
                <p>
                  The retained surfaces focus on operations, team visibility,
                  integrations, inbox review, and settings rather than starter
                  kit demos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <ShieldCheck className='size-5 text-primary' />
                  Docs-first constraints
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-2 text-sm text-muted-foreground'>
                <p>
                  ERP, PMO, finance, support, security, and workspace wording
                  follow the discovered canonical documents.
                </p>
                <p>
                  Unsupported claims and fake backend capabilities were
                  intentionally avoided.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <CircleAlert className='size-5 text-primary' />
                  Review items
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-3 text-sm text-muted-foreground'>
                {reviewItems.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </Main>
    </>
  )
}
