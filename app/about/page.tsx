"use client";

import { BarChart3, ShieldCheck, TrendingUp, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-full border bg-muted px-4 py-1 text-sm">
              About TradeApp
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Empowering Traders with Smart Market Insights
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              TradeApp is a modern trading platform focused on delivering
              real-time market data, advanced charting tools, and powerful
              analytics for crypto and stock traders.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Our Mission</h2>

            <p className="text-lg leading-8 text-muted-foreground">
              We aim to simplify trading by providing clean interfaces, accurate
              market data, and fast charting experiences for every trader — from
              beginners to professionals.
            </p>

            <p className="text-lg leading-8 text-muted-foreground">
              Our platform combines performance, usability, and analytics to
              help users make informed trading decisions in real-time.
            </p>
          </div>

          <div className="rounded-3xl border bg-card p-8 shadow-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border p-6">
                <h3 className="text-3xl font-bold">120K+</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Active Traders
                </p>
              </div>

              <div className="rounded-2xl border p-6">
                <h3 className="text-3xl font-bold">50+</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Global Markets
                </p>
              </div>

              <div className="rounded-2xl border p-6">
                <h3 className="text-3xl font-bold">99.9%</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Platform Uptime
                </p>
              </div>

              <div className="rounded-2xl border p-6">
                <h3 className="text-3xl font-bold">24/7</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Market Tracking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y bg-muted/40">
        <div className="container mx-auto px-4 py-24">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Why Choose TradeApp
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              Built with performance and simplicity in mind for modern traders.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border bg-background p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <BarChart3 className="h-7 w-7 text-primary" />
              </div>

              <h3 className="mb-3 text-xl font-semibold">Advanced Charts</h3>

              <p className="text-muted-foreground">
                Real-time charting with technical indicators and smooth
                performance.
              </p>
            </div>

            <div className="rounded-3xl border bg-background p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>

              <h3 className="mb-3 text-xl font-semibold">Market Analytics</h3>

              <p className="text-muted-foreground">
                Track trends, volatility, and market movements with precision.
              </p>
            </div>

            <div className="rounded-3xl border bg-background p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>

              <h3 className="mb-3 text-xl font-semibold">Secure Platform</h3>

              <p className="text-muted-foreground">
                Enterprise-grade security with fast and reliable infrastructure.
              </p>
            </div>

            <div className="rounded-3xl border bg-background p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Users className="h-7 w-7 text-primary" />
              </div>

              <h3 className="mb-3 text-xl font-semibold">Community Driven</h3>

              <p className="text-muted-foreground">
                Built for traders who value speed, simplicity, and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Vision */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">Our Vision</h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We believe financial technology should be accessible, intuitive, and
            powerful. TradeApp is focused on building the next generation of
            trading experiences for modern investors across the world.
          </p>
        </div>
      </section>
    </main>
  );
}
