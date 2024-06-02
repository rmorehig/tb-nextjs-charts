import { type ClassValue, clsx } from 'clsx'
import { format } from 'date-fns/format'
import { subDays } from 'date-fns/subDays'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useDateRange() {
  return useState<{
    date_from: string | undefined
    date_to: string | undefined
  }>({
    date_from: format(subDays(new Date(), 1), 'yyyy-MM-dd'),
    date_to: format(new Date(), 'yyyy-MM-dd'),
  })
}
