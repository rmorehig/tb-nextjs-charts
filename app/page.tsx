'use client'

import { DateRangePicker } from '@/components/ui/DateRangePicker'
import { useDateParams } from '@/lib/utils'

export default function Home() {
  const [dateParams, setDateParams] = useDateParams()
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8 max-w-[1400px] mx-auto">
      <div className="flex justify-end w-full">
        <DateRangePicker dateParams={dateParams} onChange={setDateParams} />
      </div>
      <div className="flex gap-8 w-full"></div>
      <div className="flex gap-8 w-full"></div>
    </main>
  )
}
