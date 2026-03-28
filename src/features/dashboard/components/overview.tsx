import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  { name: 'Jan', total: 12 },
  { name: 'Feb', total: 16 },
  { name: 'Mar', total: 14 },
  { name: 'Apr', total: 19 },
  { name: 'May', total: 18 },
  { name: 'Jun', total: 22 },
  { name: 'Jul', total: 17 },
  { name: 'Aug', total: 24 },
  { name: 'Sep', total: 20 },
  { name: 'Oct', total: 23 },
  { name: 'Nov', total: 21 },
  { name: 'Dec', total: 26 },
]

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          direction='ltr'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Bar
          dataKey='total'
          fill='currentColor'
          radius={[4, 4, 0, 0]}
          className='fill-primary'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
