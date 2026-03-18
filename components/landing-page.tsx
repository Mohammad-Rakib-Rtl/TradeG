'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, Play, Twitter } from 'lucide-react';
import { SectionTitle } from './section-title';

const stats = [
  { value: '68 Million+', label: 'Followers' },
  { value: '20 Billion+', label: 'Views' },
  { value: '50+', label: 'Clients' },
  { value: '$20M+', label: 'Generated' }
];

const testimonials = [
  {
    name: 'Bill Gates',
    role: 'Co-founder, Microsoft',
    quote:
      'Filming a Nas Daily Billionaire in Nigeria was incredible. Their storytelling quality made the message truly memorable.',
    image:
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=180&q=80'
  },
  {
    name: 'Yemi Akinyemi',
    role: 'Founder, GreenTech',
    quote: 'Nas-inspired content done right. The campaign reached millions and brought our mission to new people.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=180&q=80'
  },
  {
    name: 'Sarah Nguyen',
    role: 'CMO, Nova Labs',
    quote: 'TradeG turned our social channels into a lead machine in under 90 days.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=80'
  }
];

const viralCards = [
  'Most Building in the World',
  'This Candy Saves Lives',
  "Mongolia's Magic Boats",
  "He Thinks He Won't Die"
];

const brands = ['Payoneer', 'Artlist', 'Meta', 'Google', 'YouTube', 'Narrative', 'Karat', 'VOSS'];

export function LandingPage() {
  return (
    <main className="overflow-hidden bg-[#ECE9DF] text-zinc-900">
      <section className="relative bg-hero pb-16 pt-8 text-white sm:pb-24 sm:pt-10">
        <div className="section-wrap">
          <header className="mb-14 flex items-center justify-between">
            <div className="text-xl font-black tracking-tight text-yellow-300">TRADEG.</div>
            <button className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-white/10">
              Let&apos;s connect
            </button>
          </header>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl font-black uppercase leading-[0.95] sm:text-6xl">
                Make your brand
                <br />
                <span className="text-yellow-300">go viral</span>
              </h1>
              <p className="mt-5 max-w-xl text-base text-zinc-200 sm:text-lg">
                We create creativity at a million-people scale and make every campaign impossible to scroll past.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-yellow-300 px-7 py-3 text-sm font-bold text-zinc-900 shadow-glow transition hover:bg-yellow-200">
                  Get started
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                <div className="soft-panel relative overflow-hidden rounded-[2rem] bg-white/10 p-4 backdrop-blur">
                  <Image
                    src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1000&q=80"
                    alt="Phone mockup with social content"
                    width={700}
                    height={900}
                    className="h-[420px] w-full rounded-[1.5rem] object-cover"
                  />
                  <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between rounded-2xl bg-black/50 p-3 backdrop-blur">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-300">Campaign Reach</p>
                      <p className="text-xl font-bold text-white">+2.8M in 14 days</p>
                    </div>
                    <span className="rounded-full bg-yellow-300 p-2 text-zinc-900">
                      <Play size={16} fill="currentColor" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-[#F6F4EE] py-10">
        <div className="section-wrap grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-black">{item.value}</p>
              <p className="mt-1 text-sm font-medium text-zinc-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-20">
        <SectionTitle centered title="Our Services" />
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
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={1000}
                height={650}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <h3 className="max-w-xs text-3xl font-bold leading-tight text-white">{service.title}</h3>
                <span className="rounded-full border border-white/40 p-2 text-white">
                  <ArrowRight size={18} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-10 sm:py-16">
        <SectionTitle
          centered
          title="Why Us?"
          subtitle="We are a creator-led company serving 50+ global clients across tech, sustainability, education, tourism, and fitness."
        />
        <div className="soft-panel mx-auto mt-10 grid max-w-5xl gap-6 p-6 sm:grid-cols-[1.2fr,1fr] sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Views generated</p>
            <p className="mt-2 text-4xl font-black text-yellow-600">73M</p>
            <p className="mt-6 max-w-lg text-2xl font-semibold leading-tight">
              We generated 73 million views for Bill and Melinda Gates Foundation
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
            alt="Client case"
            width={400}
            height={500}
            className="h-72 w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-20">
        <SectionTitle centered title="We Are Verified By A Billion People" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="soft-panel p-6">
              <div className="flex items-center gap-3">
                <Image src={item.image} alt={item.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.role}</p>
                </div>
              </div>
              <p className="mt-4 text-zinc-700">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-14 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200">
          <Image
            src="https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?auto=format&fit=crop&w=1400&q=80"
            alt="Perfect formula"
            width={1400}
            height={500}
            className="h-56 w-full object-cover sm:h-64"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-between p-6 sm:p-10">
            <div>
              <p className="text-3xl font-black text-yellow-300">TRADEG.</p>
              <h3 className="mt-2 max-w-md text-2xl font-bold text-white">We spent 8 years learning how it&apos;s done. So you don&apos;t have to.</h3>
              <button className="mt-4 rounded-full bg-yellow-300 px-5 py-2 text-sm font-bold text-zinc-900">Learn more</button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <h3 className="text-4xl font-black leading-tight">
            The <span className="text-yellow-600">Perfect Formula</span> To Go Viral
          </h3>
          <p className="mt-3 text-zinc-600">The exact process used in top campaigns, now available for ambitious brands.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {viralCards.map((title, index) => (
            <motion.article
              key={title}
              whileHover={{ scale: 1.02 }}
              className="soft-panel group overflow-hidden rounded-2xl"
            >
              <div className="relative">
                <Image
                  src={`https://images.unsplash.com/photo-${1524000000000 + index * 367911}?auto=format&fit=crop&w=700&q=80`}
                  alt={title}
                  width={700}
                  height={1000}
                  className="h-64 w-full object-cover"
                />
                <p className="absolute bottom-4 left-4 rounded-lg bg-black/75 px-3 py-1 text-sm font-semibold text-white">{title}</p>
              </div>
              <div className="flex items-center justify-between p-3 text-xs text-zinc-500">
                <span>Views 7.3M</span>
                <span>Shares 189K</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-[#F2EFE6] py-16 sm:py-20">
        <div className="section-wrap text-center">
          <p className="text-zinc-600">Join some of</p>
          <h3 className="mt-1 text-4xl font-black">the best brands in the world</h3>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {brands.map((brand) => (
              <div key={brand} className="flex h-16 items-center justify-center rounded-xl border border-zinc-200 bg-white text-sm font-bold text-zinc-700">
                {brand}
              </div>
            ))}
          </div>
          <button className="mt-8 rounded-full bg-yellow-300 px-6 py-3 font-bold text-zinc-900">Get featured now</button>
        </div>
      </section>

      <section className="section-wrap py-14 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-300 bg-[#0A0A12] text-white">
          <Image
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80"
            alt="Work with us"
            width={1400}
            height={550}
            className="h-72 w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A12] via-[#0A0A12]/80 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-between p-8 sm:p-10">
            <div>
              <h3 className="text-4xl font-black">Work with us</h3>
              <p className="mt-3 max-w-md text-zinc-300">Build your next campaign with the creative team behind world-scale storytelling.</p>
              <button className="mt-6 rounded-full bg-yellow-300 px-6 py-3 font-bold text-zinc-900">Open your plan</button>
            </div>
            <div className="hidden rounded-2xl bg-white/10 p-5 text-right sm:block">
              <p className="text-xs uppercase tracking-wider text-zinc-300">Followers</p>
              <p className="text-4xl font-black text-yellow-300">68 Million</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0B0B10] py-10 text-white">
        <div className="section-wrap flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-black text-yellow-300">TRADEG.</p>
            <p className="mt-2 text-xs text-zinc-400">© {new Date().getFullYear()} TradeG. ALL RIGHTS RESERVED.</p>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-zinc-300">
            <a href="#" className="hover:text-yellow-300">Home</a>
            <a href="#" className="hover:text-yellow-300">Services</a>
            <a href="#" className="hover:text-yellow-300">Formula</a>
            <a href="#" className="hover:text-yellow-300">Clients</a>
          </nav>
          <div className="flex gap-3">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="rounded-full border border-white/20 p-2 text-zinc-300 hover:bg-white/10 hover:text-yellow-300">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
