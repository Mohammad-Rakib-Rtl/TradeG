'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Play, Twitter } from 'lucide-react';
import { SectionTitle } from './section-title';

const stats = [
  { value: '68M+', label: 'Followers' },
  { value: '20B+', label: 'Views' },
  { value: '50+', label: 'Clients' },
  { value: '$20M+', label: 'Revenue Generated' }
];

const testimonials = [
  {
    name: 'Sarah Nguyen',
    role: 'CMO, Nova Labs',
    quote: 'TradeG turned our social channels into a lead machine in under 90 days.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Marcus Lee',
    role: 'Founder, LaunchBox',
    quote: 'Their team made our campaign feel effortless while the numbers exploded.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Elena Rossi',
    role: 'Brand Director, VYRA',
    quote: 'Best growth partner we have ever worked with. Creative, fast, and data-driven.',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80'
  }
];

const viralCards = [
  'How this startup gained 1M followers in 60 days',
  'From hidden brand to trending brand overnight',
  'The reel strategy that drove 12x conversions',
  'Why short-form content dominates in 2026',
  'The storytelling system behind viral launches',
  'Scaling views without scaling ad spend'
];

const brands = ['Notion', 'Shopify', 'Stripe', 'HubSpot', 'Canva', 'Airbnb'];

export function LandingPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative bg-hero pb-16 pt-8 sm:pb-24 sm:pt-10">
        <div className="section-wrap">
          <header className="mb-14 flex items-center justify-between">
            <div className="text-xl font-extrabold tracking-tight">TradeG</div>
            <button className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">
              Book a call
            </button>
          </header>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-orange-300/80">TradeG Growth Studio</p>
              <h1 className="text-4xl font-black leading-[1.05] sm:text-6xl">Make your brand go viral</h1>
              <p className="mt-5 max-w-xl text-base text-zinc-300 sm:text-lg">
                We blend story-first creative and growth systems to make your brand impossible to ignore.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-black shadow-glow transition hover:bg-orange-400">
                  Get started
                </button>
                <button className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold hover:bg-white/10">
                  See case studies
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="glass-card relative mx-auto max-w-md rounded-[2rem] p-5 shadow-2xl">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1000&q=80"
                    alt="Phone mockup with social content"
                    width={700}
                    height={900}
                    className="h-[420px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/40 p-3 backdrop-blur">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-300">Campaign Reach</p>
                      <p className="text-xl font-bold">+2.8M in 14 days</p>
                    </div>
                    <span className="rounded-full bg-orange-500 p-2 text-black">
                      <Play size={16} fill="currentColor" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="glass-card rounded-2xl p-6 text-center">
              <p className="text-3xl font-black text-orange-300">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-zinc-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-20">
        <SectionTitle eyebrow="What we do" title="Our Services" subtitle="Plug into proven content engines that create momentum fast." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Get featured in our socials',
              image:
                'https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?auto=format&fit=crop&w=1000&q=80'
            },
            {
              title: 'We explode your socials',
              image:
                'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1000&q=80'
            }
          ].map((service) => (
            <motion.article
              key={service.title}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >
              <Image src={service.image} alt={service.title} width={1000} height={650} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <h3 className="absolute bottom-6 left-6 pr-6 text-2xl font-bold">{service.title}</h3>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-20">
        <SectionTitle
          centered
          eyebrow="Why TradeG"
          title="We build stories that spread, then engineer them to convert"
          subtitle="From strategy to scripting to distribution, our team covers the full funnel so your brand keeps growing after every post."
        />
        <div className="glass-card mx-auto mt-10 grid max-w-4xl gap-6 rounded-3xl p-6 sm:grid-cols-[220px,1fr] sm:p-8">
          <Image
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
            alt="Client testimonial"
            width={400}
            height={500}
            className="h-56 w-full rounded-2xl object-cover"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-orange-300/90">Case study</p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-200">
              “TradeG redefined our content strategy and helped us scale from 80k to 1.4M followers in 7 months. Our acquisition costs dropped by 38% while inbound leads doubled.”
            </p>
            <p className="mt-4 font-semibold">Ava Thompson, Growth Lead at MonoX</p>
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-20">
        <SectionTitle eyebrow="Love from clients" title="Testimonials" />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <Image src={item.image} alt={item.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-zinc-300">{item.role}</p>
                </div>
              </div>
              <p className="mt-4 text-zinc-200">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-20">
        <SectionTitle eyebrow="Content that hits" title="Viral Content" subtitle="A snapshot of the formats and hooks that repeatedly perform." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {viralCards.map((title, index) => (
            <motion.article
              key={title}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={`https://images.unsplash.com/photo-${1520000000000 + index * 345678}?auto=format&fit=crop&w=800&q=80`}
                alt={title}
                width={800}
                height={1000}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold">{title}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-20">
        <SectionTitle centered eyebrow="Trusted by" title="Brands we have scaled" />
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div key={brand} className="glass-card flex h-20 items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wider text-zinc-300">
              {brand}
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-14 pt-8 sm:pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1400&q=80"
            alt="Work with us"
            width={1400}
            height={500}
            className="h-72 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-8 sm:p-12">
            <h3 className="text-3xl font-black sm:text-4xl">Work with us</h3>
            <p className="mt-3 max-w-xl text-zinc-200">Launch your next viral growth sprint with the team behind category-defining campaigns.</p>
            <button className="mt-6 rounded-full bg-orange-500 px-7 py-3 font-bold text-black hover:bg-orange-400">Get started</button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="section-wrap flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-black">TradeG</p>
            <p className="mt-2 text-sm text-zinc-400">© {new Date().getFullYear()} TradeG. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-zinc-300">
            <a href="#" className="hover:text-orange-300">Services</a>
            <a href="#" className="hover:text-orange-300">Case Studies</a>
            <a href="#" className="hover:text-orange-300">Testimonials</a>
            <a href="#" className="hover:text-orange-300">Contact</a>
          </nav>
          <div className="flex gap-3">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="rounded-full border border-white/20 p-2 text-zinc-300 hover:bg-white/10">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
