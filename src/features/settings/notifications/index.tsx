import { ContentSection } from '../components/content-section'
import { NotificationsForm } from './notifications-form'

export function SettingsNotifications() {
  return (
    <ContentSection
      title='Notifications'
      desc='Configure delivery, integration, finance, and security notification rules.'
    >
      <NotificationsForm />
    </ContentSection>
  )
}
