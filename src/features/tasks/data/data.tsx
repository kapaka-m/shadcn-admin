import {
  AlertCircle,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  Circle,
  CircleOff,
  Landmark,
  PlugZap,
  Timer,
  Workflow,
} from 'lucide-react'

export const labels = [
  {
    value: 'governance',
    label: 'Governance',
    icon: Landmark,
  },
  {
    value: 'integration',
    label: 'Integration',
    icon: PlugZap,
  },
  {
    value: 'delivery',
    label: 'Delivery',
    icon: Workflow,
  },
] as const

export const statuses = [
  {
    label: 'Queued',
    value: 'backlog' as const,
    icon: Circle,
  },
  {
    label: 'Ready',
    value: 'todo' as const,
    icon: CheckCircle,
  },
  {
    label: 'Active',
    value: 'in progress' as const,
    icon: Timer,
  },
  {
    label: 'Closed',
    value: 'done' as const,
    icon: CheckCircle,
  },
  {
    label: 'Deferred',
    value: 'canceled' as const,
    icon: CircleOff,
  },
] as const

export const priorities = [
  {
    label: 'Low',
    value: 'low' as const,
    icon: ArrowDown,
  },
  {
    label: 'Medium',
    value: 'medium' as const,
    icon: ArrowRight,
  },
  {
    label: 'High',
    value: 'high' as const,
    icon: ArrowUp,
  },
  {
    label: 'Critical',
    value: 'critical' as const,
    icon: AlertCircle,
  },
] as const
