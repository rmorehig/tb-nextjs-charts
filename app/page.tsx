'use client'

import { KPIS } from '@/components/Kpi'
import { LastUsers } from '@/components/LastUsers'
import { TopBrowsers } from '@/components/TopBrowsers'
import { TopDevices } from '@/components/TopDevices'
import { TopSources } from '@/components/TopSources'
import { Layout, Row } from '@/components/ui/layout'
import { useDateParams } from '@/lib/utils'

export default function Home() {
  const [dateParams] = useDateParams()
  return (
    <Layout>
      <KPIS {...dateParams} />
      <Row>
        <LastUsers />
        <TopDevices {...dateParams} />
      </Row>
      <Row>
        <TopSources limit={5} {...dateParams} />
        <TopBrowsers limit={5} {...dateParams} />
      </Row>
    </Layout>
  )
}
