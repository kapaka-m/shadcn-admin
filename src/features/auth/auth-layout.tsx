import { Logo } from '@/assets/logo'
import { appConfig } from '@/config/app'

type AuthLayoutProps = {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className='container grid h-svh max-w-none items-center justify-center'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8'>
        <div className='mb-4 flex flex-col items-center justify-center gap-2 text-center'>
          <div className='flex items-center justify-center gap-2'>
            <Logo className='me-1' />
            <h1 className='text-xl font-medium'>{appConfig.name}</h1>
          </div>
          <p className='max-w-sm text-sm text-muted-foreground'>
            Secure access to the {appConfig.workspaceLabel.toLowerCase()}.
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}
