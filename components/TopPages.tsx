'use client'

import { BarList } from '@tinybirdco/charts'

export function TopPages(params: {
  date_from?: string
  date_to?: string
  limit?: number
  skip?: number
}) {
  return (
    <BarList
      endpoint={process.env.NEXT_PUBLIC_TOP_PAGES_ENDPOINT}
      token={process.env.NEXT_PUBLIC_TOP_PAGES_TOKEN}
      index="pathname"
      categories={['visits']}
      colorPalette={['#E0EFFF']}
      borderRadius="8px"
      boxShadow="0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
      title="Top pages"
      height="300px"
      padding="16px"
      params={params}
    />
  )
}
