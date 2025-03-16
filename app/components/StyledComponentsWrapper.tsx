'use client'

import StyledComponentsRegistry from '@/lib/registry'

export default function StyledComponentsWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
} 