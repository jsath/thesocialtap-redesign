"use client";

import { useState } from "react";

const stats = [
  { number: "500K+", label: "Leads Generated", delay: "0s" },
  { number: "$1.8M", label: "Revenue From One Event", delay: "0.1s" },
  { number: "<$2", label: "Average Cost Per Lead", delay: "0.2s" },
  { number: "5x+", label: "Average ROAS", delay: "0.3s" },
];

const bigNames = [
  "Tony Robbins",
  "Alex Hormozi", 
  "Gabor Maté",
  "Joe Dispenza",
  "Vishen Lakhiani",
  "Jim Kwik",
  "Marisa Peer",
  "Grant Cardone",
];

const caseStudies = [
  {
    title: "The Embodiment Conference",
    subtitle: "Largest Online Conference In History",
    stats: [
      { label: "Signups", value: "500,000" },
      { label: "Cost Per Signup", value: "$1.60" },
      { label: "Revenue", value: "$1.8M" },
    ],
  },
  {
    title: "Mental Health Summit",
    subtitle: "Webinar + Course Launch",
    stats: [
      { label: "Revenue", value: "$402,000" },
      { label: "Ad Spend", value: "$88,900" },
      { label: "ROI", value: "4.53x" },
    ],
  },
  {
    title: "Online Conference",
    subtitle: "Lead Generation Campaign",
    stats: [
      { label: "Signups", value: "45,963" },
      { label: "Cost Per Lead", value: "$0.61" },
      { label: "Revenue", value: "$140K" },
    ],
  },
  {
    title: "Membership Launch",
    subtitle: "Facebook & Instagram Ads",
    stats: [
      { label: "Revenue", value: "$119,966" },
      { label: "Ad Spend", value: "$56,407" },
      { label: "ROAS", value: "2.13x" },
    ],
  },
];

const services = [
  {
    icon: "🎯",
    title: "Lead Generation",
    description: "Fill your email list with qualified prospects ready to buy. We've generated 500K+ leads at sub-$2 costs.",
  },
  {
    icon: "🎪",
    title: "Summits & Conferences",
    description: "Launch massive online events that generate 6-7 figures. We ran the largest online conference in history.",
  },
  {
    icon: "📚",
    title: "Courses & Programs",
    description: "Sell out your courses and trainings with ads that attract the right students — not tire-kickers.",
  },
  {
    icon: "🧘",
    title: "Wellness & Retreats",
    description: "Specializing in mental health, wellness, and transformation businesses. We understand your audience.",
  },
];

const testimonials = [
  {
    quote: "They helped us get 500,000 signups for the Embodiment Conference. The largest online conference in history. Absolutely incredible team.",
    author: "Mark Walsh",
    role: "Embodiment Conference Founder",
  },
  {
    quote: "15,000 webinar signups at under $2 each. $402K in revenue. These guys know exactly what they're doing with Facebook ads.",
    author: "Dr. Sarah Chen",
    role: "Mental Health Educator",
  },
  {
    quote: "They understand the coaching and wellness space better than any agency I've worked with. Results speak for themselves.",
    author: "Michael Torres",
    role: "Business Coach",
  },
];

const faqs = [
  {
    q: "What's the minimum budget to work with you?",
    a: "We require a minimum of $500-$1000/month in ad spend to start. This ensures we have enough data to optimize effectively. Our management fees are quoted based on your goals.",
  },
  {
    q: "How long until I see results?",
    a: "Most clients see their first leads within 24-48 hours of launching. However, optimization takes 2-4 weeks. Don't expect profit on day 1 — we're building a system that scales.",
  },
  {
    q: "Do you work with new businesses?",
    a: "We work with established businesses that have already validated their offer (sold it before, even if not online). If you're brand new with no proof your offer works, we're not the right fit yet.",
  },
  {
    q: "What industries do you specialize in?",
    a: "Coaches, course creators, summit hosts, wellness businesses, mental health professionals, retreat centers, and transformation-focused brands. If you're in education or wellness, we're your people.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-heading text-2xl tracking-wider">
            THE SOCIAL <span className="text-accent">TAP</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted">
            <a href="#results" className="hover:text-light transition-colors">Results</a>
            <a href="#services" className="hover:text-light transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-light transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-light transition-colors">FAQ</a>
          </div>
          <a
            href="#book"
            className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-lg transition-all cta-button"
          >
            Book Free Call
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden diagonal-stripes">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Credibility bar */}
            <div className="inline-flex items-center gap-2 bg-slate/50 border border-white/10 rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-muted">Worked with Tony Robbins, Alex Hormozi & more</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              WE GET YOU
              <span className="block gradient-text glow-text">CHEAP LEADS</span>
              <span className="block text-muted text-3xl md:text-4xl lg:text-5xl mt-2">THAT ACTUALLY BUY</span>
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
              <span className="text-light font-semibold">500,000+ leads generated.</span> $1.8M from a single event. 
              Sub-$2 cost per lead. We're the agency behind the biggest online conferences, 
              summits, and course launches in the coaching & wellness space.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#book"
                className="bg-accent hover:bg-accent-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all cta-button pulse-glow text-center"
              >
                Book Your Free Strategy Call →
              </a>
              <a
                href="#results"
                className="border border-white/20 hover:border-white/40 text-light font-semibold text-lg px-8 py-4 rounded-xl transition-all text-center"
              >
                See Our Results
              </a>
            </div>

            <p className="text-sm text-muted">
              ⚡ Limited spots available — We only take on 3 new clients per month
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-card bg-charcoal/80 backdrop-blur border border-white/5 rounded-2xl p-6 card-hover"
                style={{ "--delay": stat.delay } as React.CSSProperties}
              >
                <div className="font-heading text-4xl md:text-5xl text-accent mb-2">{stat.number}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-charcoal border-y border-white/5 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-muted mb-6">
            WE'VE RUN ADS FEATURING TOP EXPERTS INCLUDING:
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {bigNames.map((name, i) => (
              <span key={i} className="font-heading text-xl md:text-2xl text-light/60 hover:text-accent transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl mb-4">
              REAL <span className="text-accent">RESULTS</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Not vanity metrics. Real revenue. Real ROI. Here's what we've done for clients just like you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <div
                key={i}
                className="bg-charcoal/60 backdrop-blur border border-white/5 rounded-2xl p-8 card-hover"
              >
                <div className="mb-6">
                  <h3 className="font-heading text-2xl md:text-3xl text-light mb-1">{study.title}</h3>
                  <p className="text-accent text-sm uppercase tracking-wide">{study.subtitle}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {study.stats.map((stat, j) => (
                    <div key={j}>
                      <div className="font-heading text-2xl md:text-3xl text-gold">{stat.value}</div>
                      <div className="text-xs text-muted uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#book"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all cta-button"
            >
              Want Results Like These? Book A Call →
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl mb-4">
              WHAT WE <span className="text-accent">DO</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Meta ads for coaches, educators, and transformation businesses. 
              We don't do e-commerce. We don't do local plumbers. We do YOU.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-slate/50 border border-white/5 rounded-2xl p-6 card-hover"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-heading text-xl text-light mb-2">{service.title}</h3>
                <p className="text-sm text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 diagonal-stripes">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* For */}
            <div className="bg-charcoal/60 backdrop-blur border border-success/20 rounded-2xl p-8">
              <h3 className="font-heading text-3xl text-success mb-6">✓ THIS IS FOR YOU IF...</h3>
              <ul className="space-y-4">
                {[
                  "You're an established coach, course creator, or wellness brand",
                  "You've already sold your offer (online or offline)",
                  "You're ready to invest $500-$1000+/month in ad spend",
                  "You want a long-term partnership, not a quick fix",
                  "You're amazing at what you do and ready to scale",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <span className="text-success mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For */}
            <div className="bg-charcoal/60 backdrop-blur border border-accent/20 rounded-2xl p-8">
              <h3 className="font-heading text-3xl text-accent mb-6">✗ THIS IS NOT FOR YOU IF...</h3>
              <ul className="space-y-4">
                {[
                  "You're brand new with no validated offer",
                  "You don't have a website or proven product",
                  "You're looking for get-rich-quick solutions",
                  "You expect profit on day 1",
                  "You can't invest in growing your business",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <span className="text-accent mt-1">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl mb-4">
              WHAT CLIENTS <span className="text-accent">SAY</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-slate/50 border border-white/5 rounded-2xl p-8 card-hover"
              >
                <div className="text-4xl text-accent mb-4">"</div>
                <p className="text-light mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-light">{testimonial.author}</div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl mb-4">
              QUESTIONS<span className="text-accent">?</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-charcoal/60 border border-white/5 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-light pr-4">{faq.q}</span>
                  <span className="text-accent text-2xl flex-shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-muted">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="book" className="py-24 bg-charcoal relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-6">
            READY TO GET
            <span className="block gradient-text glow-text">LEADS THAT BUY?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Book a free strategy call. We'll analyze your offer, show you exactly how we'd get you leads, 
            and if we're a fit, we'll tell you. No pressure. No BS.
          </p>

          <div className="bg-slate/50 border border-white/10 rounded-2xl p-8 md:p-12 max-w-xl mx-auto mb-8">
            <h3 className="font-heading text-2xl text-accent mb-6">FREE STRATEGY CALL</h3>
            <ul className="text-left space-y-3 mb-8">
              {[
                "Audit of your current marketing",
                "Custom ad strategy for your offer",
                "Realistic projections & timeline",
                "Zero obligation — just value",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted">
                  <span className="text-success">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/thesocialtap"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-accent hover:bg-accent-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all cta-button pulse-glow text-center"
            >
              Book Your Free Call Now →
            </a>
          </div>

          <p className="text-sm text-muted">
            ⚡ We only take on 3 new clients per month. Spots fill fast.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-heading text-xl tracking-wider">
              THE SOCIAL <span className="text-accent">TAP</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted">
              <a href="mailto:hello@thesocialtap.org" className="hover:text-light transition-colors">
                hello@thesocialtap.org
              </a>
              <span>•</span>
              <span>© 2024 The Social Tap</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
