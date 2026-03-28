import { ContentSection } from '../components/content-section'
import { DisplayForm } from './display-form'

export function SettingsDisplay() {
  return (
    <ContentSection
      title='Navigation'
      desc='Choose which core workspace sections should stay visible in the sidebar.'
    >
      <DisplayForm />
    </ContentSection>
  )
}
