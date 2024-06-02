'use client'

import { DateRangePicker } from '@/components/ui/DateRangePicker'
import { useDateRange } from '@/lib/utils'

export default function Home() {
  const [dateRange, setDateRange] = useDateRange()
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <div className="flex justify-end w-full">
        <DateRangePicker dateRange={dateRange} onChange={setDateRange} />
      </div>
    </main>
  )
}
