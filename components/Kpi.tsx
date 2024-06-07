'use client'

import { AreaChart } from '@tinybirdco/charts'

export function KPIS(params: { date_from?: string; date_to?: string }) {
  return (
    <AreaChart
      endpoint="https://api.tinybird.co/v0/pipes/kpis.json"
      token={process.env.NEXT_PUBLIC_DASHBOARD_TOKEN}
      index="date"
      categories={['avg_session_sec', 'pageviews', 'visits']}
      colorPalette={['#2EEA92', '#008060', '#0EB1B9', '#9263AF', '#5A6FC0']}
      borderRadius="8px"
      boxShadow="0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
      title="KPIS"
      showLegend={true}
      height="400px"
      padding="16px"
      params={params}
    />
  )
}
