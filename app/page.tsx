'use client'

import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns/addDays'
import { DateRangePicker } from '@/components/ui/DateRangePicker'

export default function Home() {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <div className="flex justify-end w-full">
        <DateRangePicker dateRange={dateRange} onChange={setDateRange} />
      </div>
    </main>
  )
}
