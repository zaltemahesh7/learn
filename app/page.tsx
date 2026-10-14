"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CandlestickChart,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="container mx-auto grid gap-12 px-4 py-24 md:grid-cols-2 md:items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border bg-muted px-4 py-1 text-sm">
              Real-Time Crypto & Stock Analytics
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                Trade Smarter with Real-Time Market Insights
              </h1>

              <p className="max-w-xl text-lg text-muted-foreground">
                Advanced trading dashboard with live charts, technical
                indicators, watchlists, and powerful analytics for modern
                traders.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline" size="lg">
                Live Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <h3 className="text-2xl font-bold">120K+</h3>

                <p className="text-sm text-muted-foreground">Active Traders</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">99.9%</h3>

                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">24/7</h3>

                <p className="text-sm text-muted-foreground">Market Tracking</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-3xl border bg-card p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">BTC/USDT</h3>

                  <p className="text-sm text-green-500">+4.28%</p>
                </div>

                <div className="text-right">
                  <h2 className="text-3xl font-bold">$104,832</h2>

                  <p className="text-sm text-muted-foreground">
                    Live Market Price
                  </p>
                </div>
              </div>

              <div className="flex h-[320px] items-center justify-center rounded-2xl border border-dashed bg-muted/40">
                <div className="text-center">
                  <CandlestickChart className="mx-auto mb-4 h-16 w-16 text-primary" />

                  <p className="text-muted-foreground">Trading Chart Preview</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl border p-4">
                  <p className="text-xs text-muted-foreground">Volume</p>

                  <h4 className="mt-2 font-semibold">12.8M</h4>
                </div>

                <div className="rounded-xl border p-4">
                  <p className="text-xs text-muted-foreground">Market Cap</p>

                  <h4 className="mt-2 font-semibold">$2.1T</h4>
                </div>

                <div className="rounded-xl border p-4">
                  <p className="text-xs text-muted-foreground">Dominance</p>

                  <h4 className="mt-2 font-semibold">54%</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Everything You Need for Trading
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Powerful tools and analytics designed for modern traders and
            investors.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <BarChart3 className="h-7 w-7 text-primary" />
            </div>

            <h3 className="mb-3 text-xl font-semibold">Advanced Charts</h3>

            <p className="text-muted-foreground">
              Interactive candlestick charts with indicators and real-time
              updates.
            </p>
          </div>

          <div className="rounded-3xl border bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>

            <h3 className="mb-3 text-xl font-semibold">Market Analytics</h3>

            <p className="text-muted-foreground">
              Track trends, volume, dominance, and smart market insights
              instantly.
            </p>
          </div>

          <div className="rounded-3xl border bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>

            <h3 className="mb-3 text-xl font-semibold">Secure Platform</h3>

            <p className="text-muted-foreground">
              Enterprise-grade infrastructure with fast and secure trading
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y bg-muted/40">
        <div className="container mx-auto px-4 py-24 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Start Your Trading Journey Today
            </h2>

            <p className="text-lg text-muted-foreground">
              Join thousands of traders using our platform for real-time
              analysis and smarter decisions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg">Create Free Account</Button>

              <Button variant="outline" size="lg">
                Explore Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
