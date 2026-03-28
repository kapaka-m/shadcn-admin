import { ContentSection } from '../components/content-section'
import { ProfileForm } from './profile-form'

export function SettingsProfile() {
  return (
    <ContentSection
      title='Profile'
      desc='Control the operator identity that appears across the workspace shell.'
    >
      <ProfileForm />
    </ContentSection>
  )
}
