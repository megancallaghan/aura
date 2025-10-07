"use client"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const barData = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 1900 },
  { name: "Mar", total: 1500 },
  { name: "Apr", total: 2100 },
  { name: "May", total: 1800 },
  { name: "Jun", total: 2400 },
]

const lineData = [
  { name: "Mon", revenue: 4000, expenses: 2400 },
  { name: "Tue", revenue: 3000, expenses: 1398 },
  { name: "Wed", revenue: 2000, expenses: 9800 },
  { name: "Thu", revenue: 2780, expenses: 3908 },
  { name: "Fri", revenue: 1890, expenses: 4800 },
  { name: "Sat", revenue: 2390, expenses: 3800 },
  { name: "Sun", revenue: 3490, expenses: 4300 },
]

const pieData = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
  { name: "Tablet", value: 200 },
]

const COLORS = ["#2560ff", "#38bd7d", "#ff8731"]

export default function ChartsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container flex flex-col items-center gap-8 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Charts for your dashboard
            </h1>
            <p className="max-w-[42rem] text-balance leading-relaxed text-muted-foreground sm:text-xl sm:leading-8">
              Beautiful charts built with Recharts. Copy and paste into your apps. Fully customizable.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="h-11 px-8">
              Browse Charts
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-8 bg-transparent">
              Documentation
            </Button>
          </div>
        </section>

        {/* Chart Types */}
        <section className="container pb-16 md:pb-24">
          <Tabs defaultValue="bar" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="bar">Bar Chart</TabsTrigger>
              <TabsTrigger value="line">Line Chart</TabsTrigger>
              <TabsTrigger value="pie">Pie Chart</TabsTrigger>
            </TabsList>

            <TabsContent value="bar" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Bar Chart</CardTitle>
                  <CardDescription>Monthly revenue overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="name" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="total" fill="#2560ff" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="line" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Line Chart</CardTitle>
                  <CardDescription>Revenue vs Expenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={lineData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="name" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" stroke="#2560ff" strokeWidth={2} />
                      <Line type="monotone" dataKey="expenses" stroke="#ff8731" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pie" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Pie Chart</CardTitle>
                  <CardDescription>Traffic by device type</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* More Examples */}
        <section className="container pb-16 md:pb-24">
          <h2 className="text-3xl font-bold mb-8">More Chart Examples</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Area Chart</CardTitle>
                <CardDescription>Coming soon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Area Chart Preview</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Radar Chart</CardTitle>
                <CardDescription>Coming soon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Radar Chart Preview</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Composed Chart</CardTitle>
                <CardDescription>Coming soon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Composed Chart Preview</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scatter Chart</CardTitle>
                <CardDescription>Coming soon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Scatter Chart Preview</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              Charts powered by Recharts and styled with AURA.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
