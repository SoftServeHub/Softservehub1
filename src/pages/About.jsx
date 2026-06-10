import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Layers, Globe, Cpu, ShieldCheck, ArrowRight } from "lucide-react";
import logo from "../images/logo.webp";

const VALUES = [
  {
    icon: Sparkles,
    title: "Innovate",
    desc: "We turn fresh ideas into production-ready experiences with measurable outcomes.",
  },
  {
    icon: Layers,
    title: "Integrate",
    desc: "We unify IT, creative, finance and operations into one accountable delivery model.",
  },
  {
    icon: Globe,
    title: "Inspire",
    desc: "We build systems that scale globally—calmly, clearly and confidently.",
  },
];

const PILLARS = [
  {
    icon: Cpu,
    title: "AI-First Delivery",
    desc: "Intelligent automation woven through discovery, build and support so your roadmap stays continuous.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc: "Compliance, data protection and resilient infrastructure baked into every release.",
  },
  {
    icon: Layers,
    title: "Full-Stack Breadth",
    desc: "IT engineering, brand, marketing and finance—one partner across the lifecycle.",
  },
];

const STATS = [
  { value: "4+", label: "Years of Excellence" },
  { value: "750+", label: "Projects Delivered" },
  { value: "900+", label: "Clients Served" },
  { value: "45+", label: "Countries Reached" },
];

export default function About() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#fffCF0] pt-28 pb-24 text-[#0f172a]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[640px] w-[640px] rounded-full bg-[#d4af37]/22 blur-[180px]" />
        <div className="absolute -bottom-40 right-[-160px] h-[560px] w-[560px] rounded-full bg-[#f6df9a]/35 blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#78716c_1px,transparent_1px),linear-gradient(to_bottom,#78716c_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Hero */}
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#fffbeb] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#92400e]">
            <Sparkles size={14} /> About SoftServe Hub
          </span>

          <h1 className="font-azzuri-calcio mt-8 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            <span className="block bg-gradient-to-r from-[#0f172a] via-[#92400e] to-[#d4af37] bg-clip-text text-transparent">
              Built for the next
            </span>
            <span
              className="mt-2 block bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#d4af37,#f6df9a,#b45309)" }}
            >
              decade of digital
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
            SoftServe Hub is a trusted delivery partner combining IT engineering, AI
            automation, branding, finance operations and growth marketing under a single
            accountable team. We help enterprises move faster without losing clarity—building
            systems that are intelligent, secure and made to last.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[#d4af37]/30 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.18)]"
            >
              <div className="bg-gradient-to-r from-[#92400e] to-[#d4af37] bg-clip-text text-3xl font-black text-transparent md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#475569] md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mission */}
      <div className="relative mx-auto mt-28 grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[32px] border border-[#d4af37]/30 bg-white p-10 shadow-[0_30px_90px_rgba(212,175,55,0.12)]"
        >
          <img
            src={logo}
            alt="SoftServe Hub"
            className="h-14 w-14 rounded-xl object-contain"
          />
          <h2 className="mt-6 text-3xl font-black uppercase tracking-tight text-[#0f172a] md:text-4xl">
            Our mission
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
            Bring enterprise-grade delivery to every team that demands clarity, speed and
            measurable outcomes. We choreograph IT, AI and operations into a single coherent
            story—so stakeholders feel the change, not the friction.
          </p>
          <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
            From our base in Chennai we partner with founders, scale-ups and Fortune-listed
            organizations across <span className="font-semibold text-[#92400e]">45+ countries</span>,
            shipping AI, cloud, creative and finance solutions side-by-side.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="group flex items-start gap-5 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition hover:border-[#d4af37]/45 hover:bg-[#fffbeb]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fffbeb] text-[#b45309] transition group-hover:bg-[#fef3c7]">
                <v.icon size={24} strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0f172a]">{v.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#475569]">{v.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pillars */}
      <div className="relative mx-auto mt-28 max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#0f172a] md:text-5xl">
            Why teams choose us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#475569] md:text-lg">
            Three principles guide every engagement—so the work stays measurable, secure
            and disciplined from day one.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-[#d4af37]/30 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(212,175,55,0.18)]"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fffbeb] to-white opacity-0 transition group-hover:opacity-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#f6df9a] text-[#1f1605] shadow-[0_8px_28px_rgba(212,175,55,0.35)]">
                <p.icon size={28} strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-xl font-bold uppercase tracking-tight text-[#0f172a]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative mx-auto mt-24 max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[32px] border border-[#d4af37]/40 bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7] p-10 text-center shadow-[0_30px_80px_rgba(212,175,55,0.18)] md:p-14"
        >
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#0f172a] md:text-4xl">
            Let's build something <span className="text-[#b45309]">remarkable</span>.
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-[#475569] md:text-lg">
            Tell us about your goals—our team will respond within one business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-[#1f1605] shadow-[0_10px_30px_rgba(212,175,55,0.35)] transition hover:brightness-110"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/45 bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-[#92400e] shadow-sm transition hover:bg-[#fffbeb]"
            >
              Explore services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
