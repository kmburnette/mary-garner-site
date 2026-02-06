"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Mic,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";

// Single-file, production-ready landing site draft.
// Replace placeholder links + copy with verified details.

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

const Section = ({ id, title, kicker, children }: { id: string; title?: string; kicker?: string; children: React.ReactNode }) => (

  <section id={id} className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
    <div className="mb-10">
      {kicker && (
        <div className="mb-3 flex items-center gap-2 text-xs font-medium tracking-wide text-white/70">
          <Sparkles className="h-4 w-4" /> {kicker}
        </div>
      )}
      {title && (
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
      )}
    </div>
    {children}
  </section>
);

const Card = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (

  <div
    className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur ${className}`}
  >
    {children}
  </div>
);

const CTAButton = ({ href = "#contact", children, variant = "primary" }: { href?: string; children: React.ReactNode; variant?: "primary" | "secondary" }) => {

  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/30";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/20 bg-white/5 text-white hover:bg-white/10";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children} <ArrowRight className="h-4 w-4" />
    </a>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (

  <a
    href={href}
    className="text-sm text-white/75 hover:text-white transition"
  >
    {children}
  </a>
);

const metrics = [
  { label: "Leadership + Growth Coaching", value: "Coach" },
  { label: "Mentor for High Standards", value: "Mentor" },
  { label: "Keynote + Workshops", value: "Speaker" },
];

const offers = [
  {
    icon: Target,
    title: "1:1 Coaching",
    desc:
      "Clarity, priorities, and a repeatable plan—built around your goals, your market, and your bandwidth.",
    bullets: [
      "90-day plan + scorecard",
      "Weekly or bi-weekly sessions",
      "Accountability + execution",
    ],
  },
  {
    icon: Users,
    title: "Team / Brokerage Mentoring",
    desc:
      "Culture, leadership rhythms, and standards that scale—without losing the human part of the business.",
    bullets: [
      "Leadership operating system",
      "Recruiting + retention playbook",
      "Role clarity + communication",
    ],
  },
  {
    icon: Mic,
    title: "Speaking",
    desc:
      "Snazzy, high-energy training that lands—equal parts inspiration and real take-home action.",
    bullets: [
      "Keynotes + conference sessions",
      "Interactive workshops",
      "Custom audience + outcomes",
    ],
  },
];

const signatureTopics = [
  {
    title: "The Elevated Standard",
    subtitle: "How leaders build trust, certainty, and momentum",
    points: [
      "Decision-making under pressure",
      "Operational clarity that sticks",
      "Standards that scale",
    ],
  },
  {
    title: "Luxury is a Service Level",
    subtitle: "Client experience systems that create referrals",
    points: [
      "Expectations + communication cadence",
      "Listing / buyer journey design",
      "Surprise + delight (done right)",
    ],
  },
  {
    title: "From Ambition to Execution",
    subtitle: "Turn goals into a weekly plan your team can run",
    points: [
      "Scorecards + leading indicators",
      "Meeting rhythms that produce",
      "Accountability without burnout",
    ],
  },
];

const faqs = [
  {
    q: "Who is this for?",
    a: "Leaders, agents, and teams who want higher standards, stronger execution, and a client experience that stands out—without adding chaos.",
  },
  {
    q: "Do you offer virtual sessions?",
    a: "Yes. Coaching and mentoring can be virtual, in-person, or hybrid depending on your goals and schedule.",
  },
  {
    q: "Can you customize a keynote or workshop?",
    a: "Absolutely. I’ll tailor the content to your audience, outcomes, and time block—so it’s relevant, practical, and memorable.",
  },
  {
    q: "What’s the best way to get started?",
    a: "Submit the inquiry form below. I’ll reply with next steps and a short intake so we can align on goals, timing, and fit.",
  },
];

const gradients =
  "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.14),transparent_45%),radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.10),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.08),transparent_40%)] before:opacity-100 before:content-['']";

function Anchor({ id }: { id: string }) {
  return <div id={id} className="absolute -top-24" />;

}

function FAQItem({ item, i }: { item: { q: string; a: string }; i: number }) {

  const [open, setOpen] = useState(i === 0);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="w-full text-left"
      aria-expanded={open}
    >
      <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:bg-white/10 transition">
        <div>
          <div className="text-sm font-semibold text-white">{item.q}</div>
          {open && (
            <div className="mt-2 text-sm leading-relaxed text-white/75">
              {item.a}
            </div>
          )}
        </div>
        <ChevronDown
          className={`mt-1 h-5 w-5 text-white/60 transition ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
    </button>
  );
}

export default function MaryGarnerDeVoeSite() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-[#07070b] text-white">
      {/* Background */}
      <div className={`relative overflow-hidden ${gradients}`}>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,7,11,0.0),rgba(7,7,11,1))]" />

        {/* Top Nav */}
        <header className="relative mx-auto max-w-6xl px-6 pt-6">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white text-black shadow">
                <Star className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Mary Garner DeVoe</div>
                <div className="text-xs text-white/60">
                  Coach • Mentor • Speaker
                </div>
              </div>
            </div>
            <nav className="hidden items-center gap-6 md:flex">
              <NavLink href="#work">Work With Mary Garner</NavLink>
              <NavLink href="#topics">Speaking</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
              <CTAButton href="#contact" variant="secondary">
                Inquire
              </CTAButton>
            </nav>
            <div className="md:hidden">
              <CTAButton href="#contact" variant="secondary">
                Inquire
              </CTAButton>
            </div>
          </div>
        </header>

        {/* Hero */}
        <main className="relative mx-auto max-w-6xl px-6 pb-10 pt-12 md:pt-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Pill>Leadership + Growth</Pill>
                <Pill>Luxury Mindset + Standards</Pill>
                <Pill>Execution that sticks</Pill>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-balance text-4xl font-semibold tracking-tight md:text-6xl"
              >
                Turn strong ambition into a plan you can actually run.
              </motion.h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/75 md:text-lg">
                Hire Mary Garner as your coach, mentor, or speaker to elevate
                standards, strengthen leadership, and build a client experience
                people talk about.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton href="#contact">Hire Mary Garner</CTAButton>
                <CTAButton href="#work" variant="secondary">
                  Explore Coaching
                </CTAButton>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <div className="text-lg font-semibold">{m.value}</div>
                    <div className="mt-1 text-xs leading-snug text-white/60">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs text-white/60">
                <Check className="h-4 w-4" />
                <span>
                  Available for virtual + in-person engagements (U.S. + travel by
                  request).
                </span>
              </div>
            </div>

            {/* Hero Headshot */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <Card className="relative overflow-hidden p-0">
                {/* Headshot image */}
                <div className="relative">
                  <img
                    src="/mary-garner.jpg"
                    alt="Mary Garner DeVoe"
                    className="h-[520px] w-full object-cover md:h-[560px]"
                  />

                  {/* Soft overlay for readability */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(7,7,11,0.92),rgba(7,7,11,0.10),rgba(7,7,11,0.0))]" />

                  {/* Badge */}
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur">
                    <Star className="h-4 w-4" /> Premium Coaching + Speaking
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xl font-semibold leading-tight">
                      Mary Garner DeVoe
                    </div>
                    <div className="mt-1 text-sm text-white/75">
                      Coach • Mentor • Speaker
                    </div>

                    <div className="mt-4 grid gap-2">
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <Check className="h-4 w-4 text-white/70" /> Leadership standards + execution
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <Check className="h-4 w-4 text-white/70" /> Luxury mindset + client experience
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <Check className="h-4 w-4 text-white/70" /> Keynotes + workshops that land
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <CTAButton href="#contact">Hire Mary Garner</CTAButton>
                      <CTAButton href="#topics" variant="secondary">
                        View speaking topics
                      </CTAButton>
                    </div>

                    <div className="mt-5 text-xs text-white/60">
                      Headshot file: <span className="text-white/80">/public/mary-garner.jpg</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Work */}
      <Section
        id="work"
        kicker="Work with Mary Garner"
        title="Coaching, mentoring, and speaking that moves the needle"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {offers.map((o) => {
            const Icon = o.icon;
            return (
              <Card key={o.title} className="h-full">
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{o.title}</div>
                    <p className="mt-1 text-sm text-white/70">{o.desc}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-white/75">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white/70" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <CTAButton href="#contact" variant="secondary">
                    Inquire about {o.title}
                  </CTAButton>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card>
            <div className="text-lg font-semibold">What you can expect</div>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Direct coaching. Clear standards. Practical systems. And the kind of
              accountability that creates calm, consistent progress.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Clarity on priorities",
                "Weekly execution plan",
                "Communication standards",
                "Client experience design",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
                >
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-white/70" /> {x}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div className="text-lg font-semibold">Not fluff. Not theory.</div>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Every engagement is built for implementation. You’ll leave with
              language, structure, and a plan—so your next 30 days look different.
            </p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold text-white/70">Tip</div>
              <div className="mt-1 text-sm text-white/75">
                If your business feels "busy but not moving," the answer is almost
                always a better scorecard + meeting rhythm.
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Topics */}
      <Section
        id="topics"
        kicker="Signature talks"
        title="Speaking topics audiences love"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {signatureTopics.map((t) => (
            <Card key={t.title} className="h-full">
              <div className="text-lg font-semibold">{t.title}</div>
              <div className="mt-1 text-sm text-white/70">{t.subtitle}</div>
              <ul className="mt-5 space-y-2 text-sm text-white/75">
                {t.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-white/70" /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CTAButton href="#contact">Book this talk</CTAButton>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Card>
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold">Event planners:</div>
                <p className="mt-1 text-sm text-white/75">
                  Want a session that feels premium, polished, and practical? Share
                  your audience size, time slot, and desired outcomes—Mary Garner
                  will tailor the talk.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <CTAButton href="#contact">Request availability</CTAButton>
                <CTAButton href="#contact" variant="secondary">
                  Download media kit (placeholder)
                </CTAButton>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* About */}
      <Section id="about" kicker="The story" title="Meet Mary Garner">
        <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <Card>
            <div className="text-sm font-semibold text-white/90">
              Bio (replace with verified details)
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Mary Garner DeVoe is a leadership and growth coach who helps
              professionals raise standards, simplify execution, and create a
              client experience that earns trust fast. Her work blends strategic
              clarity with practical systems—so ambitious goals become measurable
              progress.
            </p>
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-2 text-sm text-white/75">
                <MapPin className="h-4 w-4 text-white/60" /> Based in the U.S. •
                Travel by request
              </div>
              <div className="flex items-center gap-2 text-sm text-white/75">
                <Mail className="h-4 w-4 text-white/60" /> hello@yourdomain.com
                (placeholder)
              </div>
            </div>
          </Card>

          <Card>
            <div className="text-lg font-semibold">Testimonials</div>
            <p className="mt-2 text-sm text-white/75">
              Add 3–6 short testimonials here (name, title, company) once approved.
              Keep them specific: what changed, how fast, measurable outcomes.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center gap-1 text-white/70">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4" />
                    ))}
                  </div>
                  <div className="mt-3 text-sm text-white/75">
                    “Placeholder quote about the clarity, confidence, and
                    implementation support Mary Garner provided.”
                  </div>
                  <div className="mt-3 text-xs font-semibold text-white/70">
                    — Client Name, Title
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" kicker="Good to know" title="FAQ">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} i={i} />
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-20">
        <Card className="relative overflow-hidden">
          <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-28 -bottom-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
            <div>
              <div className="text-xs font-medium tracking-wide text-white/70">
                Ready to book?
              </div>
              <h3 className="mt-2 text-balance text-3xl font-semibold tracking-tight">
                Let’s talk about your goals—and the fastest path to get there.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Share a few details and you’ll receive next steps, availability, and
                a short intake form. (This is a demo form—wire it to your email/CRM
                when you launch.)
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Coaching inquiry",
                  "Mentoring for team/brokerage",
                  "Speaking request",
                ].map((x) => (
                  <div
                    key={x}
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
                  >
                    <Check className="h-4 w-4 text-white/70" /> {x}
                  </div>
                ))}
              </div>
            </div>

            <form
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
              onSubmit={(e) => {
                e.preventDefault();
                // Demo behavior
                alert(
                  "Thanks! Replace this with your email/CRM integration (e.g., Formspree, HubSpot, Zapier)."
                );
              }}
            >
              <div className="grid gap-3">
                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-white/70">Name</span>
                  <input
                    required
                    className="rounded-2xl border border-white/15 bg-[#0b0b12] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-white/70">Email</span>
                  <input
                    required
                    type="email"
                    className="rounded-2xl border border-white/15 bg-[#0b0b12] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-white/70">
                    I’m interested in
                  </span>
                  <select className="rounded-2xl border border-white/15 bg-[#0b0b12] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20">
                    <option>1:1 Coaching</option>
                    <option>Team / Brokerage Mentoring</option>
                    <option>Speaking</option>
                  </select>
                </label>
                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-white/70">
                    Message
                  </span>
                  <textarea
                    required
                    rows={5}
                    className="resize-none rounded-2xl border border-white/15 bg-[#0b0b12] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Tell me about your goals, audience, or event details…"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 transition focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  Send inquiry <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 text-xs text-white/60">
                Prefer email?{" "}
                <span className="text-white/80">hello@yourdomain.com</span>
              </div>
            </form>
          </div>
        </Card>
      </section>

      <footer className="border-t border-white/10 bg-[#06060a]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold">Mary Garner DeVoe</div>
              <div className="text-xs text-white/60">
                Coach • Mentor • Speaker
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <NavLink href="#work">Work With Mary Garner</NavLink>
              <NavLink href="#topics">Speaking</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
          <div className="mt-8 text-xs text-white/50">
            © {year} Mary Garner DeVoe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
