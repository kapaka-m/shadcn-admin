import { z } from 'zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@tanstack/react-router'
import { showSubmittedData } from '@/lib/show-submitted-data'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const profileFormSchema = z.object({
  username: z
    .string('Please enter your handle.')
    .min(2, 'Handle must be at least 2 characters.')
    .max(30, 'Handle must not be longer than 30 characters.'),
  email: z.email({
    error: (iss) =>
      iss.input === undefined
        ? 'Please select a workspace email.'
        : undefined,
  }),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.url('Please enter a valid URL.'),
      })
    )
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

const defaultValues: Partial<ProfileFormValues> = {
  username: 'platform.operator',
  email: 'platform.operator@kapaka.local',
  bio: 'Oversees platform readiness, connector posture, and cross-functional follow-through.',
  urls: [],
}

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const { fields, append } = useFieldArray({
    name: 'urls',
    control: form.control,
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => showSubmittedData(data))}
        className='space-y-8'
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Handle</FormLabel>
              <FormControl>
                <Input placeholder='platform.operator' {...field} />
              </FormControl>
              <FormDescription>
                This handle is shown in workspace menus and audit-friendly UI
                surfaces.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workspace email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a workspace email' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='platform.operator@kapaka.local'>
                    platform.operator@kapaka.local
                  </SelectItem>
                  <SelectItem value='delivery.lead@kapaka.local'>
                    delivery.lead@kapaka.local
                  </SelectItem>
                  <SelectItem value='support.control@kapaka.local'>
                    support.control@kapaka.local
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Manage workspace identity details in your{' '}
                <Link to='/settings/account'>access settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Operational summary</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Summarize responsibilities and current operating focus'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Use this space for role context, review ownership, or escalation
                responsibilities.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((item, index) => (
            <FormField
              control={form.control}
              key={item.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && 'sr-only')}>
                    Reference links
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && 'sr-only')}>
                    Add links to operating handbooks, dashboards, or team
                    references.
                  </FormDescription>
                  <FormControl className={cn(index !== 0 && 'mt-1.5')}>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type='button'
            variant='outline'
            size='sm'
            className='mt-2'
            onClick={() => append({ value: '' })}
          >
            Add reference link
          </Button>
        </div>
        <Button type='submit'>Save profile</Button>
      </form>
    </Form>
  )
}
