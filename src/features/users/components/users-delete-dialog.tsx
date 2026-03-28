'use client'

import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { showSubmittedData } from '@/lib/show-submitted-data'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ConfirmDialog } from '@/components/confirm-dialog'
import { type User } from '../data/schema'

type UserDeleteDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow: User
}

export function UsersDeleteDialog({
  open,
  onOpenChange,
  currentRow,
}: UserDeleteDialogProps) {
  const [value, setValue] = useState('')

  const handleDelete = () => {
    if (value.trim() !== currentRow.username) return

    onOpenChange(false)
    showSubmittedData(currentRow, 'The following team member has been removed:')
  }

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      handleConfirm={handleDelete}
      disabled={value.trim() !== currentRow.username}
      title={
        <span className='text-destructive'>
          <AlertTriangle
            className='me-1 inline-block stroke-destructive'
            size={18}
          />{' '}
          Remove team member
        </span>
      }
      desc={
        <div className='space-y-4'>
          <p className='mb-2'>
            Are you sure you want to remove{' '}
            <span className='font-bold'>{currentRow.username}</span>?
            <br />
            This action will remove the member with the responsibility of{' '}
            <span className='font-bold'>
              {currentRow.role.replace('_', ' ').toUpperCase()}
            </span>{' '}
            from the workspace directory. This cannot be undone.
          </p>

          <Label className='my-2'>
            Member handle:
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder='Enter the member handle to confirm removal.'
            />
          </Label>

          <Alert variant='destructive'>
            <AlertTitle>Warning!</AlertTitle>
            <AlertDescription>
              This removal cannot be rolled back automatically.
            </AlertDescription>
          </Alert>
        </div>
      }
      confirmText='Remove'
      destructive
    />
  )
}
