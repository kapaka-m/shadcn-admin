import { ContentSection } from '../components/content-section'
import { AppearanceForm } from './appearance-form'

export function SettingsAppearance() {
  return (
    <ContentSection
      title='Appearance'
      desc='Adjust fonts and theme behavior for the KAPAKA workspace shell.'
    >
      <AppearanceForm />
    </ContentSection>
  )
}
