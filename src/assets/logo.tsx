import { type SVGProps } from 'react'
import { cn } from '@/lib/utils'

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      id='kapaka-platform-logo'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      width='24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn('size-6', className)}
      {...props}
    >
      <title>KAPAKA PLATFORM</title>
      <rect x='3' y='3' width='18' height='18' rx='4' />
      <path d='M8 7v10' />
      <path d='M16 7l-6 6 6 4' />
    </svg>
  )
}
