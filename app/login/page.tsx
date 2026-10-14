"use client";

import Link from "next/link";
import { BarChart3, LockKeyhole } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto flex min-h-[80vh] items-center justify-center px-4 py-16">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border bg-card shadow-xl lg:grid-cols-2">
          {/* Left Side */}
          <div className="hidden flex-col justify-between bg-muted/40 p-12 lg:flex">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <BarChart3 className="h-7 w-7 text-primary" />
              </div>

              <h1 className="max-w-md text-5xl font-bold leading-tight tracking-tight">
                Welcome Back to TradeApp
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
                Access real-time market insights, trading charts, and powerful
                analytics from your dashboard.
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-6">
              <p className="text-sm leading-7 text-muted-foreground">
                “TradeApp has transformed how I track market trends and make
                trading decisions.”
              </p>

              <div className="mt-4">
                <h4 className="font-semibold">Alex Morgan</h4>

                <p className="text-sm text-muted-foreground">Crypto Trader</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-6 md:p-12">
            <div className="w-full max-w-md">
              <div className="mb-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <LockKeyhole className="h-7 w-7 text-primary" />
                </div>

                <h2 className="text-4xl font-bold tracking-tight">Login</h2>

                <p className="mt-3 text-muted-foreground">
                  Enter your credentials to continue
                </p>
              </div>

              <form className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>

                  <Input type="email" placeholder="Enter your email" />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Password</label>

                    <Link
                      href="/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <Input type="password" placeholder="Enter your password" />
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input type="checkbox" className="h-4 w-4 rounded border" />
                    Remember me
                  </label>
                </div>

                {/* Button */}
                <Button className="w-full" size="lg">
                  Login
                </Button>
              </form>

              {/* Divider */}
              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />

                <span className="text-sm text-muted-foreground">OR</span>

                <div className="h-px flex-1 bg-border" />
              </div>

              {/* Social Login */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  Continue with Google
                </Button>

                <Button variant="outline" className="w-full">
                  Continue with GitHub
                </Button>
              </div>

              {/* Signup */}
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-medium text-primary hover:underline"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
