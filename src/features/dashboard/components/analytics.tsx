import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AnalyticsChart } from './analytics-chart'

const modulePressure = [
  { name: 'Delivery control', value: 14 },
  { name: 'Support desk', value: 11 },
  { name: 'Finance close', value: 7 },
  { name: 'Integration ops', value: 5 },
]

const reviewSources = [
  { name: 'Approval queue', value: 9 },
  { name: 'Security review', value: 6 },
  { name: 'Connector cutover', value: 4 },
  { name: 'Restore drill', value: 2 },
]

export function Analytics() {
  return (
    <div className='space-y-4'>
      <Card>
        <CardHeader>
          <CardTitle>Operational signal window</CardTitle>
          <CardDescription>
            Activity volume and review alerts over the last seven days.
          </CardDescription>
        </CardHeader>
        <CardContent className='px-6'>
          <AnalyticsChart />
        </CardContent>
      </Card>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <MetricCard
          title='Reviewed items'
          value='42'
          note='+6 vs previous week'
        />
        <MetricCard
          title='Escalations'
          value='5'
          note='2 still awaiting owners'
        />
        <MetricCard
          title='Connector incidents'
          value='3'
          note='All isolated to non-production paths'
        />
        <MetricCard
          title='Pending approvals'
          value='9'
          note='3 are security-sensitive'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
        <Card className='col-span-1 lg:col-span-4'>
          <CardHeader>
            <CardTitle>Module pressure</CardTitle>
            <CardDescription>
              Highest current load across the visible workspace surface.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SimpleBarList
              items={modulePressure}
              barClass='bg-primary'
              valueFormatter={(n) => `${n} items`}
            />
          </CardContent>
        </Card>
        <Card className='col-span-1 lg:col-span-3'>
          <CardHeader>
            <CardTitle>Approval sources</CardTitle>
            <CardDescription>
              Where the active review workload is coming from.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SimpleBarList
              items={reviewSources}
              barClass='bg-muted-foreground'
              valueFormatter={(n) => `${n}`}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function MetricCard({
  title,
  value,
  note,
}: {
  title: string
  value: string
  note: string
}) {
  return (
    <Card>
      <CardHeader className='space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{value}</div>
        <p className='text-xs text-muted-foreground'>{note}</p>
      </CardContent>
    </Card>
  )
}

function SimpleBarList({
  items,
  valueFormatter,
  barClass,
}: {
  items: { name: string; value: number }[]
  valueFormatter: (n: number) => string
  barClass: string
}) {
  const max = Math.max(...items.map((i) => i.value), 1)
  return (
    <ul className='space-y-3'>
      {items.map((item) => {
        const width = `${Math.round((item.value / max) * 100)}%`
        return (
          <li
            key={item.name}
            className='flex items-center justify-between gap-3'
          >
            <div className='min-w-0 flex-1'>
              <div className='mb-1 truncate text-xs text-muted-foreground'>
                {item.name}
              </div>
              <div className='h-2.5 w-full rounded-full bg-muted'>
                <div
                  className={`h-2.5 rounded-full ${barClass}`}
                  style={{ width }}
                />
              </div>
            </div>
            <div className='ps-2 text-xs font-medium tabular-nums'>
              {valueFormatter(item.value)}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
