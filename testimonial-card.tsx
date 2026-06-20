import { Building2, Hammer, Route, Compass } from 'lucide-react'
import type { Service } from '@/lib/site'
import { cn } from '@/lib/utils'

const map = {
  building: Building2,
  hammer: Hammer,
  road: Route,
  compass: Compass,
}

export function ServiceIcon({
  icon,
  className,
}: {
  icon: Service['icon']
  className?: string
}) {
  const Icon = map[icon]
  return <Icon className={cn('h-6 w-6', className)} aria-hidden="true" />
}
