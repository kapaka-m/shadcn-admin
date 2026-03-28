import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  { name: 'Mon', activity: 18, alerts: 2 },
  { name: 'Tue', activity: 21, alerts: 4 },
  { name: 'Wed', activity: 16, alerts: 3 },
  { name: 'Thu', activity: 24, alerts: 5 },
  { name: 'Fri', activity: 20, alerts: 2 },
  { name: 'Sat', activity: 11, alerts: 1 },
  { name: 'Sun', activity: 9, alerts: 1 },
]

export function AnalyticsChart() {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Area
          type='monotone'
          dataKey='activity'
          stroke='currentColor'
          className='text-primary'
          fill='currentColor'
          fillOpacity={0.15}
        />
        <Area
          type='monotone'
          dataKey='alerts'
          stroke='currentColor'
          className='text-muted-foreground'
          fill='currentColor'
          fillOpacity={0.1}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
