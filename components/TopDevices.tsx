'use client'

import { DonutChart } from '@tinybirdco/charts'

export function TopDevices(params: {
  date_from?: string
  date_to?: string
  limit?: number
  skip?: number
}) {
  return (
    <DonutChart
      endpoint="https://api.wadus1.gcp.tinybird.co/v0/pipes/top_devices.json"
      token={process.env.NEXT_PUBLIC_UNIQUE_VISITORS_TOKEN}
      index="device"
      categories={['visits']}
      borderRadius="8px"
      boxShadow="0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
      title="Top devices"
      showLegend={true}
      height="300px"
      padding="16px"
      params={params}
    />
  )
}
