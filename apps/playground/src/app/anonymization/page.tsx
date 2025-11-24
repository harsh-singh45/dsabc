'use client'

import { Card, CardSection, ListItem, Metric, MetricGroup, DonutChart, GaugeChart, BarChart, Dropdown, StatCard } from '@intelation/ui'
import { tokens } from '@intelation/tokens'
import { BiFile, BiMusic, BiText, BiPlug } from 'react-icons/bi'
import { HiLockClosed, HiHeart, HiCheckCircle, HiPlay, HiKey, HiDocumentText, HiShieldCheck, HiBeaker, HiLightningBolt } from 'react-icons/hi'

export default function AnonymizationPage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Compliance Coverage - 2/3 width */}
        <Card showMenu={false} className="lg:col-span-2">
          <CardSection 
            flex={2}
            title="Compliance Coverage"
            description="Active frameworks and countries covered"
          >
            <BarChart
              labels={["Germany", "France", "Netherlands", "Italy", "USA"]}
              datasets={[
                {
                  label: "Compliance Score",
                  data: [95, 89, 93, 100, 89],
                  color: tokens.color.custom.link
                },
              ]}
              size="md"
              showGrid={true}
              yAxis={{
                display: true,
                min: 70,
                max: 100,
                format: 'percentage'
              }}
              barPercentage={0.6}
              categoryPercentage={0.6}
            />
          </CardSection>

          <CardSection flex={1} className="pb-6">
            <div className="flex flex-col gap-6">
              <div className="flex justify-center mb-[30px]">
                <Dropdown 
                  defaultValue="last-30-days"
                  variant="tonal"
                  size="medium"
                  width="167px"
                />
              </div>

              <div className="flex justify-center">
                <GaugeChart
                  value={87.5}
                  label="Good"
                  size="sm"
                />
              </div>

              <div className="text-center">
                <h4 className="text-[13px] font-semibold text-[var(--color-custom-textSecondary)] mb-[46px] mt-[15px]">
                  Compliance Score
                </h4>
                
                <div className="flex justify-center mb-3 gap-[30px]">
                  <StatCard
                    icon={<HiLockClosed />}
                    iconColor="violet"
                    label="GDPR"
                    value="91.6%"
                  />
                  <StatCard
                    icon={<HiHeart />}
                    iconColor="cyan"
                    label="HIPAA"
                    value="89.6%"
                  />
                </div>
              </div>
            </div>
          </CardSection>
        </Card>

        {/* System Health - 1/3 width */}
        <div className="flex flex-col gap-6">
          <Card
            title="System Health"
            description="Monitor system status and performance"
            showMenu={false}
            variant="multi-section"
            footer={<p className="text-xs text-gray-600 m-0">Last updated: 2 min ago</p>}
          >
            <CardSection flex={1} showDivider={false}>
              <div className="flex flex-col items-center">
                <StatCard
                  icon={<HiCheckCircle />}
                  iconColor="green"
                  label="Status"
                  value="Healthy"
                />
              </div>
            </CardSection>

            <CardSection flex={1} showDivider={false}>
              <div className="flex flex-col items-center">
                <GaugeChart
                  value={91.9}
                  label="Uptime"
                  size="xs"
                  startColor="#E8F9DF"
                  endColor="#71DD37"
                  inactiveColor="#f0f0f0"
                />
              </div>
            </CardSection>
          </Card>

          {/* Image Overlay Card */}
          <Card
            title="Intelation AI"
            description="Advanced AI-powered data processing"
            variant="image-overlay"
            backgroundImage="/images/intelation-ai.jpg"
            showMenu={false}
            href="/ai-processing"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Processing Statistics */}
        <Card
          title="Processing Statistics"
          description="Volume metrics and performance data"
          showMenu={true}
        >
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-6">
              <MetricGroup>
                <Metric value="278 MB" label="Processing Volume" />
                <Metric value="40,836" label="Total Items" />
              </MetricGroup>

              <div className="flex-shrink-0">
                <DonutChart
                  data={[
                    { label: "Text Requests", value: 65.9, color: '#03C3EC' },
                    { label: "Documents", value: 21.1, color: '#696CFF' },
                    { label: "API Calls", value: 9.8, color: '#FFB113' },
                    { label: "Audio Files", value: 3.2, color: '#71DD37' },
                  ]}
                  centerText={{ value: "40.8K", label: "Items" }}
                  size="xs"
                />
              </div>
            </div>

            <div className="mt-2">
              <ListItem
                icon={<BiFile />}
                iconColor="violet"
                title="Documents"
                value="8,605"
                valuePosition="right"
              />
              <ListItem
                icon={<BiMusic />}
                iconColor="green"
                title="Audio Files"
                value="1,309"
                valuePosition="right"
              />
              <ListItem
                icon={<BiText />}
                iconColor="cyan"
                title="Text Requests"
                value="26,900"
                valuePosition="right"
              />
              <ListItem
                icon={<BiPlug />}
                iconColor="orange"
                title="API Calls"
                value="4,022"
                valuePosition="right"
              />
            </div>
          </div>
        </Card>

        {/* Risk Overview */}
        <Card
          title="Risk Overview"
          description="Risk distribution and compliance metrics"
          showMenu={true}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-start justify-between gap-6">
              <MetricGroup>
                <Metric value="64,812" label="Total Detected" />
                <Metric value="60,324" label="Total Anonymized" />
              </MetricGroup>

              <div className="flex-shrink-0">
                <DonutChart
                  data={[
                    { label: "Anonymized", value: 73.3, color: '#92D050' },
                    { label: "Pending", value: 26.7, color: '#E0E0E0' },
                  ]}
                  centerText={{ value: "73.3%", label: "Complete" }}
                  size="xs"
                />
              </div>
            </div>

            <div>
              <BarChart
                labels={["High", "Medium", "Low"]}
                datasets={[
                  {
                    label: "Risk Level",
                    data: [65, 25, 10],
                  },
                ]}
                size="sm"
              />
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card
          title="Quick Actions"
          description="Access all platform features instantly"
          showMenu={true}
          variant="list"
        >
          <ListItem
            icon={<HiPlay />}
            iconColor="violet"
            title="Start Anonymization"
          />
          <ListItem
            icon={<HiKey />}
            iconColor="orange"
            title="Create API Key"
          />
          <ListItem
            icon={<HiDocumentText />}
            iconColor="cyan"
            title="View Audit Logs"
          />
          <ListItem
            icon={<HiShieldCheck />}
            iconColor="green"
            title="Visit Compliance Center"
          />
          <ListItem
            icon={<HiBeaker />}
            iconColor="gray"
            title="Run Privacy Test"
          />
          <ListItem
            icon={<HiLightningBolt />}
            iconColor="violet"
            title="Intelation AI"
          />
        </Card>
      </div>
    </>
  )
}

