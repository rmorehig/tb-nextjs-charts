'use client'

import { AreaChart } from '@tinybirdco/charts'

export function UniqueVisitors(params: {
  date_from?: string
  date_to?: string
}) {
  return (
    <AreaChart
      endpoint={process.env.NEXT_PUBLIC_UNIQUE_VISITORS_ENDPOINT}
      token={process.env.NEXT_PUBLIC_UNIQUE_VISITORS_TOKEN}
      index="date"
      categories={['visits']}
      borderRadius="8px"
      boxShadow="0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
      title="Unique visitors"
      height="400px"
      padding="16px"
      params={params}
    />
  )
}
