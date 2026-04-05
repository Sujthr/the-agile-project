"use client";

import { useState } from "react";
import { Send, ExternalLink, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted mb-10">
              Have a question, collaboration idea, or just want to connect?
              I&apos;d love to hear from you.
            </p>

            {submitted ? (
              <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
                <h2 className="text-xl font-bold text-green-800 mb-2">
                  Message Sent!
                </h2>
                <p className="text-green-700">
                  Thank you for reaching out. I&apos;ll get back to you within
                  24-48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                  >
                    <option>General Inquiry</option>
                    <option>Collaboration / Partnership</option>
                    <option>Speaking Engagement</option>
                    <option>Consulting Request</option>
                    <option>Question for Q&A Section</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  Other Ways to Reach Me
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Email
                      </p>
                      <a
                        href="mailto:thakursujitkumar@gmail.com"
                        className="text-sm text-primary hover:text-primary-dark transition"
                      >
                        thakursujitkumar@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ExternalLink size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        LinkedIn
                      </p>
                      <a
                        href="https://www.linkedin.com/in/sujit-kumar-thakur-699263117/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-primary-dark transition"
                      >
                        Connect on LinkedIn &rarr;
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Location
                      </p>
                      <p className="text-sm text-muted">India</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-surface border border-slate-200 p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Response Time
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  I typically respond within 24-48 hours. For urgent inquiries,
                  please reach out via LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
