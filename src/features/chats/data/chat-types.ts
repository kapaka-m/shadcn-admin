export type InboxMessage = {
  sender: string
  message: string
  timestamp: string
}

export type InboxThread = {
  id: string
  profile?: string
  username: string
  fullName: string
  title: string
  messages: InboxMessage[]
}
