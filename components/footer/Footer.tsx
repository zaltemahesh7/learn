"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">TradeApp</h2>

            <p className="text-sm text-muted-foreground">
              Real-time crypto and stock market analytics platform with modern
              trading tools and charts.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="rounded-md border p-2 transition-colors hover:bg-muted"
              >
                {/* <Github className="h-4 w-4" /> */}
              </Link>

              <Link
                href="#"
                className="rounded-md border p-2 transition-colors hover:bg-muted"
              >
                {/* <Linkedin className="h-4 w-4" /> */}
              </Link>

              <Link
                href="#"
                className="rounded-md border p-2 transition-colors hover:bg-muted"
              >
                {/* <Twitter className="h-4 w-4" /> */}
              </Link>

              <Link
                href="#"
                className="rounded-md border p-2 transition-colors hover:bg-muted"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Product
            </h3>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/features" className="hover:text-foreground">
                Features
              </Link>

              <Link href="/pricing" className="hover:text-foreground">
                Pricing
              </Link>

              <Link href="/dashboard" className="hover:text-foreground">
                Dashboard
              </Link>

              <Link href="/markets" className="hover:text-foreground">
                Markets
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Resources
            </h3>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/blog" className="hover:text-foreground">
                Blog
              </Link>

              <Link href="/documentation" className="hover:text-foreground">
                Documentation
              </Link>

              <Link href="/support" className="hover:text-foreground">
                Support
              </Link>

              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Stay Updated
            </h3>

            <p className="mb-4 text-sm text-muted-foreground">
              Get latest updates and market insights.
            </p>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />

              <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 TradeApp. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>

            <Link href="/cookies" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
