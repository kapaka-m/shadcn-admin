import { getInitials } from '@/lib/utils'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const updates = [
  {
    owner: 'Delivery Lead',
    note: 'PMO workbench review is waiting on two milestone approvals.',
    value: '2 approvals',
  },
  {
    owner: 'Support Lead',
    note: 'One incident thread remains open after connector replay validation.',
    value: '1 incident',
  },
  {
    owner: 'Finance Ops',
    note: 'Month-end readiness is blocked on restore validation evidence.',
    value: 'Blocked',
  },
  {
    owner: 'Security Admin',
    note: 'Privileged session review window closes later today.',
    value: 'Today',
  },
]

export function PriorityUpdates() {
  return (
    <div className='space-y-8'>
      {updates.map((update) => (
        <div key={update.owner} className='flex items-center gap-4'>
          <Avatar className='h-9 w-9'>
            <AvatarFallback>{getInitials(update.owner)}</AvatarFallback>
          </Avatar>
          <div className='flex flex-1 flex-wrap items-center justify-between gap-2'>
            <div className='space-y-1'>
              <p className='text-sm leading-none font-medium'>{update.owner}</p>
              <p className='text-sm text-muted-foreground'>{update.note}</p>
            </div>
            <div className='font-medium'>{update.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
