import { ContentSection } from '../components/content-section'
import { AccountForm } from './account-form'

export function SettingsAccount() {
  return (
    <ContentSection
      title='Access'
      desc='Maintain access review metadata and the primary language for the workspace experience.'
    >
      <AccountForm />
    </ContentSection>
  )
}
