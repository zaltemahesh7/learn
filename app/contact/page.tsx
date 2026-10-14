"use client";

import {
  Mail,
  MapPin,
  Phone,
  Clock3,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-full border bg-muted px-4 py-1 text-sm">
              Contact Us
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Let’s Connect
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Have questions about our trading
              platform, services, or features? Our
              team is here to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                Get in Touch
              </h2>

              <p className="mt-4 text-lg text-muted-foreground">
                Reach out to us for support,
                partnerships, or product inquiries.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 rounded-2xl border p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    Email
                  </h3>

                  <p className="mt-1 text-muted-foreground">
                    support@tradeapp.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 rounded-2xl border p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    Phone
                  </h3>

                  <p className="mt-1 text-muted-foreground">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 rounded-2xl border p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    Location
                  </h3>

                  <p className="mt-1 text-muted-foreground">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 rounded-2xl border p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Clock3 className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    Working Hours
                  </h3>

                  <p className="mt-1 text-muted-foreground">
                    Monday - Friday
                  </p>

                  <p className="text-muted-foreground">
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border bg-card p-8 shadow-sm">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">
                Send a Message
              </h2>

              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we’ll get
                back to you soon.
              </p>
            </div>

            <form className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Full Name
                </label>

                <Input
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Email Address
                </label>

                <Input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Subject
                </label>

                <Input
                  placeholder="Enter subject"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Message
                </label>

                <Textarea
                  placeholder="Write your message..."
                  className="min-h-[140px]"
                />
              </div>

              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

\    </main>
  );
}