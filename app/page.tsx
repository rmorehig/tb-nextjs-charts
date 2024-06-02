'use client'

import { useState } from 'react'
import { subDays } from 'date-fns/subDays'
import { DateRangePicker } from '@/components/ui/DateRangePicker'
import { format } from 'date-fns/format'

export default function Home() {
  const [dateRange, setDateRange] = useState({
    date_from: format(subDays(new Date(), 7), 'yyyy-MM-dd'),
    date_to: format(new Date(), 'yyyy-MM-dd'),
  })
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <div className="flex justify-end w-full">
        <DateRangePicker dateRange={dateRange} onChange={setDateRange} />
      </div>
    </main>
  )
}
