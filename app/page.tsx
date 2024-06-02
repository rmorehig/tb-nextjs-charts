import { DateRangePicker } from '@/components/DateRangePicker'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-end w-full">
        <DateRangePicker />
      </div>
    </main>
  )
}
