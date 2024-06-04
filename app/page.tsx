'use client'

import { TopDevices } from '@/components/TopDevices'
import { TopPages } from '@/components/TopPages'
import { UniqueVisitors } from '@/components/UniqueVisitors'
import { DateRangePicker } from '@/components/ui/DateRangePicker'
import { useDateParams } from '@/lib/utils'

export default function Home() {
  const [dateParams, setDateParams] = useDateParams()
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <div className="flex justify-end w-full">
        <DateRangePicker dateParams={dateParams} onChange={setDateParams} />
      </div>
      <UniqueVisitors {...dateParams} />
      <div className="flex gap-8 w-full">
        <TopDevices {...dateParams} />
        <TopPages limit={4} {...dateParams} />
      </div>
    </main>
  )
}
