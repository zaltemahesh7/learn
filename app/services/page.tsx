"use client";

import {
  BarChart3,
  BellRing,
  CandlestickChart,
  Globe,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-full border bg-muted px-4 py-1 text-sm">
              Our Services
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Powerful Trading Tools for Modern Markets
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              TradeApp provides advanced market analytics, real-time charting,
              and smart trading solutions for crypto and stock traders.
            </p>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="rounded-3xl border bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <CandlestickChart className="h-7 w-7 text-primary" />
            </div>

            <h3 className="mb-3 text-2xl font-semibold">Real-Time Charts</h3>

            <p className="leading-7 text-muted-foreground">
              Interactive candlestick charts with smooth zooming, live updates,
              and technical indicators for accurate market analysis.
            </p>
          </div>

          {/* Service 2 */}
          <div className="rounded-3xl border bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>

            <h3 className="mb-3 text-2xl font-semibold">Market Analytics</h3>

            <p className="leading-7 text-muted-foreground">
              Analyze market trends, volume, dominance, and price movement with
              advanced analytical tools and insights.
            </p>
          </div>

          {/* Service 3 */}
          <div className="rounded-3xl border bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <BellRing className="h-7 w-7 text-primary" />
            </div>

            <h3 className="mb-3 text-2xl font-semibold">Smart Alerts</h3>

            <p className="leading-7 text-muted-foreground">
              Receive instant notifications for price changes, market movements,
              and trading opportunities in real-time.
            </p>
          </div>

          {/* Service 4 */}
          <div className="rounded-3xl border bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <BarChart3 className="h-7 w-7 text-primary" />
            </div>

            <h3 className="mb-3 text-2xl font-semibold">Portfolio Tracking</h3>

            <p className="leading-7 text-muted-foreground">
              Monitor your investments, profits, losses, and overall performance
              with detailed portfolio management tools.
            </p>
          </div>

          {/* Service 5 */}
          <div className="rounded-3xl border bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>

            <h3 className="mb-3 text-2xl font-semibold">
              Secure Infrastructure
            </h3>

            <p className="leading-7 text-muted-foreground">
              Enterprise-level security with reliable infrastructure designed
              for fast and secure trading experiences.
            </p>
          </div>

          {/* Service 6 */}
          <div className="rounded-3xl border bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Globe className="h-7 w-7 text-primary" />
            </div>

            <h3 className="mb-3 text-2xl font-semibold">Global Markets</h3>

            <p className="leading-7 text-muted-foreground">
              Access cryptocurrency and stock market data from exchanges and
              markets across the world.
            </p>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="border-y bg-muted/40">
        <div className="container mx-auto px-4 py-24">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight">How It Works</h2>

            <p className="mt-4 text-lg text-muted-foreground">
              Start analyzing and trading markets in just a few simple steps.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border bg-background p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                1
              </div>

              <h3 className="mb-3 text-2xl font-semibold">Create Account</h3>

              <p className="text-muted-foreground">
                Sign up and set up your personalized trading dashboard in
                minutes.
              </p>
            </div>

            <div className="rounded-3xl border bg-background p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                2
              </div>

              <h3 className="mb-3 text-2xl font-semibold">Track Markets</h3>

              <p className="text-muted-foreground">
                Monitor crypto and stock markets with real-time charts and
                analytics.
              </p>
            </div>

            <div className="rounded-3xl border bg-background p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                3
              </div>

              <h3 className="mb-3 text-2xl font-semibold">Make Decisions</h3>

              <p className="text-muted-foreground">
                Use insights, indicators, and alerts to make smarter trading
                decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="container mx-auto px-4 py-24">
        <div className="rounded-3xl border bg-card p-12 text-center shadow-sm">
          <h2 className="text-4xl font-bold tracking-tight">
            Ready to Start Trading?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Join thousands of traders using TradeApp for real-time analysis and
            smarter market decisions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg">Get Started</Button>

            <Button variant="outline" size="lg">
              Explore Dashboard
            </Button>
          </div>
        </div>
      </section>
      \{" "}
    </main>
  );
}
