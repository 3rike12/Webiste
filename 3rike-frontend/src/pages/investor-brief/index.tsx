import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";

/* ── design tokens ─────────────────────────────────────────────── */
const GREEN = "#8FB63C";
const display = { fontFamily: "Outfit, sans-serif" } as const;
const CONTAINER = "mx-auto max-w-6xl px-6 sm:px-10";

/* ── motion variants ───────────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const sectionV: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, staggerChildren: 0.09, delayChildren: 0.04 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.06 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/* scroll-triggered section wrapper */
function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      className={`${CONTAINER} py-16 sm:py-24`}
      variants={sectionV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
    >
      {children}
    </motion.section>
  );
}

/* ── small building blocks ─────────────────────────────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={item} className="flex items-center gap-4 mb-6">
      <span
        className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500 whitespace-nowrap"
        style={display}
      >
        {children}
      </span>
      <span className="h-px flex-1 bg-neutral-800" />
    </motion.div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={item}
      className="text-white font-bold tracking-tight leading-[1.08] text-[clamp(1.85rem,4.6vw,3.4rem)] max-w-5xl"
      style={display}
    >
      {children}
    </motion.h2>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      variants={item}
      className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-4xl"
    >
      {children}
    </motion.p>
  );
}

function Para({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.p
      variants={item}
      className={`text-neutral-400 text-base sm:text-lg leading-relaxed max-w-4xl ${className}`}
    >
      {children}
    </motion.p>
  );
}

function ArrowItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.li
      variants={item}
      className="group flex gap-4 sm:gap-6 items-start py-5 border-b border-neutral-800/80 last:border-b-0"
    >
      <span
        className="shrink-0 text-lg leading-6 translate-y-px transition-transform duration-300 group-hover:translate-x-1.5"
        style={{ color: GREEN }}
        aria-hidden
      >
        →
      </span>
      <div className="text-neutral-400 text-[15px] sm:text-base leading-relaxed">
        {children}
      </div>
    </motion.li>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={item}
      className="my-8 border-l-2 bg-neutral-900/60 rounded-r-md px-5 sm:px-8 py-6 sm:py-8"
      style={{ borderColor: GREEN }}
    >
      <p className="text-neutral-200 text-[15px] sm:text-lg leading-relaxed max-w-4xl">
        {children}
      </p>
    </motion.div>
  );
}

/* stat card used inside framed grids */
function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      variants={item}
      className="p-6 sm:p-9 transition-colors duration-300 hover:bg-neutral-900/40"
    >
      <div
        className="text-3xl sm:text-[2.6rem] font-bold tracking-tight leading-none"
        style={{ ...display, color: GREEN }}
      >
        {value}
      </div>
      <p className="mt-3 text-sm sm:text-[15px] text-neutral-500 leading-snug">
        {label}
      </p>
    </motion.div>
  );
}

/* big full-bleed number band */
function BigStat({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
      className="bg-neutral-900/70 border border-neutral-800 rounded-2xl px-6 py-14 sm:py-20 text-center"
    >
      <div
        className="font-bold tracking-tight leading-none text-[clamp(3.5rem,12vw,7.5rem)]"
        style={{ ...display, color: GREEN }}
      >
        {value}
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-neutral-500 text-sm sm:text-base leading-relaxed">
        {children}
      </p>
    </motion.div>
  );
}

function Divider() {
  return (
    <div className={CONTAINER}>
      <hr className="border-neutral-800/70" />
    </div>
  );
}

/* how-it-works timeline row */
function TimelineRow({
  when,
  title,
  children,
}: {
  when: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={item}
      className="group grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-10 py-7 border-b border-neutral-800/80 last:border-b-0 transition-colors duration-300"
    >
      <div
        className="text-xs font-semibold uppercase tracking-[0.18em] pt-1 transition-transform duration-300 group-hover:translate-x-1"
        style={{ ...display, color: GREEN }}
      >
        {when}
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg sm:text-xl" style={display}>
          {title}
        </h3>
        <p className="mt-2 text-neutral-400 text-[15px] sm:text-base leading-relaxed max-w-3xl">
          {children}
        </p>
      </div>
    </motion.div>
  );
}

/* ── revenue model rows ────────────────────────────────────────── */
const REVENUE_ROWS = [
  { scale: "Year 1", vehicles: "100", monthly: "$27,600", annual: "$444,636" },
  { scale: "Year 2", vehicles: "150", monthly: "$41,400", annual: "$666,954" },
  { scale: "Year 3", vehicles: "200", monthly: "$55,200", annual: "$889,272" },
];

/* ── page ──────────────────────────────────────────────────────── */
export default function InvestorBrief() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0A0A0A] text-neutral-200 antialiased selection:bg-[#8FB63C] selection:text-black">
      {/* atmospheric green glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-60"
        style={{
          background:
            "radial-gradient(650px 380px at 30% -5%, rgba(143,182,60,0.16), transparent 70%)",
        }}
      />

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-neutral-900/80 bg-[#0A0A0A]/85 backdrop-blur-md">
        <div className={`${CONTAINER} h-16 sm:h-20 flex items-center justify-between gap-3`}>
          <div className="flex items-center gap-3 sm:gap-5 min-w-0">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Back to home"
            >
              <span className="grid place-items-center h-9 w-9 rounded-full border border-neutral-800 group-hover:border-neutral-600 transition-colors">
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </span>
              <span className="hidden sm:inline text-sm font-medium" style={display}>
                Home
              </span>
            </Link>

            <span className="h-6 w-px bg-neutral-800 hidden sm:block" />

            <div className="flex items-center gap-3 min-w-0">
              <img
                src="/new_3rike_logo.png"
                alt="3riKE"
                className="h-10 sm:h-12 w-auto object-contain shrink-0"
              />
              <span
                className="hidden md:block text-[10px] lg:text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 truncate"
                style={display}
              >
                Mobility · Credit · Africa
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* live-status pill */}
            <span
              className="hidden sm:inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em]"
              style={{ ...display, borderColor: "rgba(143,182,60,0.4)", color: GREEN }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                  style={{ backgroundColor: GREEN }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: GREEN }}
                />
              </span>
              Raising now
            </span>

            {/* primary action */}
            <a
              href="mailto:anitandukwe7@gmail.com?subject=3riKE%20—%20Request%20the%20deck"
              className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5"
              style={{ ...display, backgroundColor: GREEN }}
            >
              See pitch deck
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <motion.section
        className={`${CONTAINER} relative pt-16 sm:pt-28 pb-16 sm:pb-24`}
        variants={sectionV}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] mb-6"
          style={{ ...display, color: GREEN }}
        >
          Investor Brief · 2026
        </motion.p>
        <motion.h1
          variants={item}
          className="font-bold tracking-tight leading-[1.05] text-[clamp(2.3rem,6.4vw,4.75rem)] max-w-5xl"
          style={display}
        >
          <span className="text-white">
            Africa moves 80% of its people on two and three wheels.
          </span>{" "}
          <span style={{ color: GREEN }}>
            Almost none of those drivers own their vehicle or have a credit
            score.
          </span>
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-8 max-w-3xl text-base sm:text-xl text-neutral-400 leading-relaxed"
        >
          3riKE is building the financial operating system for Africa's
          sustainable mobility economy — transparent ownership, on-chain
          repayment records, and verifiable financial identity for 100M+ informal
          mobility workers. Starting in Nigeria.
        </motion.p>

        <motion.div
          variants={stagger}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 border border-neutral-800 rounded-xl divide-y sm:divide-y-0 sm:divide-x divide-neutral-800 text-center bg-neutral-950/40"
        >
          {[
            { v: "$8K", l: "Revenue Generated" },
            { v: "4", l: "Vehicles Deployed" },
            { v: "70 wks", l: "Path to Full Ownership" },
          ].map((s) => (
            <motion.div
              key={s.l}
              variants={item}
              className="py-7 sm:py-10 px-4 transition-colors duration-300 hover:bg-neutral-900/40"
            >
              <div
                className="text-3xl sm:text-[2.6rem] font-bold leading-none"
                style={{ ...display, color: GREEN }}
              >
                {s.v}
              </div>
              <p className="mt-3 text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                {s.l}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <Divider />

      {/* ── The Problem ── */}
      <Section>
        <Eyebrow>The Problem</Eyebrow>
        <Heading>
          Africa's mobility economy is worth{" "}
          <span style={{ color: GREEN }}>$5.5B+</span>. The financial
          infrastructure underneath it doesn't exist.
        </Heading>

        <div className="mt-8 space-y-6">
          <Lead>
            Africa has over{" "}
            <strong className="text-neutral-200 font-semibold">
              27 million commercial motorcycles and tricycles
            </strong>{" "}
            on its roads. In Nigeria alone, an estimated{" "}
            <strong className="text-neutral-200 font-semibold">5–10 million</strong>{" "}
            keke and okada operators move the majority of urban passengers daily —
            in cities where formal public transport simply doesn't reach.
          </Lead>
          <Lead>
            These drivers earn real income. Many generate{" "}
            <strong className="text-neutral-200 font-semibold">$15–30/day</strong>{" "}
            in a country where median formal wages are under $200/month. They have
            operational discipline — they show up every day because if they don't,
            they don't eat.
          </Lead>
        </div>

        <Highlight>
          But over{" "}
          <strong className="text-white font-semibold">
            57% of Sub-Saharan Africa's population remains unbanked
          </strong>
          . Informal mobility workers are among the most excluded of all — no
          credit history, no verifiable ownership records, no access to formal
          financial products despite years of consistent economic activity.
        </Highlight>

        <Para className="mt-8 text-neutral-300">
          The system they operate in is broken by design:
        </Para>
        <motion.ul variants={stagger} className="mt-4">
          <ArrowItem>
            Informal hire-purchase charges{" "}
            <strong className="text-neutral-200 font-semibold">
              15–20% interest
            </strong>{" "}
            with no legal protection for the driver
          </ArrowItem>
          <ArrowItem>
            Payment records exist in notebooks or WhatsApp threads — invisible to
            every financial institution
          </ArrowItem>
          <ArrowItem>
            Ownership agreements are verbal. If there's a dispute, the driver loses
          </ArrowItem>
          <ArrowItem>104+ weeks to "ownership" — if it happens at all</ArrowItem>
          <ArrowItem>
            Electric vehicles entering the market cost{" "}
            <strong className="text-neutral-200 font-semibold">
              20–40% more upfront
            </strong>{" "}
            than petrol equivalents, widening the financing gap
          </ArrowItem>
        </motion.ul>

        <Para className="mt-8">
          The{" "}
          <strong className="text-neutral-200 font-semibold">
            SME financing gap in Sub-Saharan Africa is estimated at $331 billion
          </strong>
          . Informal mobility workers sit at the heart of it — creditworthy by
          behaviour, invisible by infrastructure.
        </Para>
      </Section>

      <Divider />

      {/* ── How it works ── */}
      <Section>
        <Eyebrow>How it works</Eyebrow>
        <Heading>
          One driver. One vehicle.{" "}
          <span style={{ color: GREEN }}>70 weeks.</span> A financial identity
          built for life.
        </Heading>

        <Para className="mt-8">
          3riKE is a financial operating system for Africa's informal mobility
          workers. We start with the asset — the vehicle — and build the credit
          infrastructure in the process.
        </Para>

        <motion.div variants={stagger} className="mt-10">
          <TimelineRow when="Day 1" title="Digital ownership agreement created">
            Driver onboarded. Agreement recorded on-chain. Tamper-resistant from
            day one. No paper that gets lost. No terms that change.
          </TimelineRow>
          <TimelineRow when="Week 10" title="First credit milestone">
            Ten consecutive weekly payments recorded. Repayment consistency score
            goes live. Savings products unlock. The financial identity is forming.
          </TimelineRow>
          <TimelineRow when="Week 25" title="Six months of verified data">
            Any lender looking at this profile sees six months of consistent,
            verifiable repayment behaviour — more than most first-time borrowers
            have anywhere in Africa.
          </TimelineRow>
          <TimelineRow when="Week 50" title="A year of credit evidence">
            Repayment history, operational data, asset performance — all structured
            and portable. The driver is now a verified credit candidate.
          </TimelineRow>
          <TimelineRow when="Week 70" title="Full ownership. Full credit identity.">
            Vehicle transfers legally and digitally. Driver holds a verified
            ownership record. Their financial profile doesn't stop here — it follows
            them into every product that comes next.
          </TimelineRow>
        </motion.div>

        <Para className="mt-10">
          For investors: weekly repayments flow back as distributions across the
          70-week period.{" "}
          <strong className="text-neutral-200 font-semibold">
            $70/week · $276/month per vehicle
          </strong>
          , asset-backed, data-verified, with a clear ownership end-date.
        </Para>

        <Highlight>
          <strong className="text-white font-semibold">
            How it works for investors (users):
          </strong>{" "}
          Investors buy shares in vehicles through the platform. They can track
          exactly how many shares they hold in each vehicle. When the driver's
          weekly payment is collected, investors automatically receive their
          proportional share. Based on the number of shares they own, they can also
          access emergency credit from the platform — turning a passive investment
          into a financial tool.
        </Highlight>
      </Section>

      <Divider />

      {/* ── Traction ── */}
      <Section>
        <Eyebrow>Traction</Eyebrow>
        <Heading>
          We deployed before we built.{" "}
          <span style={{ color: GREEN }}>Here's what we proved.</span>
        </Heading>

        <Para className="mt-8">
          Before writing a single line of code, 3riKE put four electric tricycles
          on the road with real drivers in a real market. The goal: understand the
          ground truth before designing the solution.
        </Para>

        <motion.div
          variants={stagger}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 border border-neutral-800 rounded-xl divide-y divide-neutral-800 sm:[&>*:nth-child(odd)]:border-r sm:[&>*:nth-child(odd)]:border-neutral-800 overflow-hidden"
        >
          <StatCell value="4" label="Vehicles deployed to test market fit" />
          <StatCell value="$8K" label="Revenue generated — all allocated to vehicle financing" />
          <StatCell value="100%" label="Repayment rate on all deployed vehicles" />
          <StatCell value="Top 20" label="SEVCP Venture Programme finalist — regional validation" />
        </motion.div>

        <Para className="mt-10 text-neutral-300">
          What we learned on the road shaped everything:
        </Para>
        <motion.ul variants={stagger} className="mt-4">
          <ArrowItem>
            Drivers don't distrust technology — they distrust systems that disappear
            on them.{" "}
            <strong className="text-neutral-200 font-semibold">
              Permanence is the product.
            </strong>
          </ArrowItem>
          <ArrowItem>
            Weekly payment cadence is essential. Monthly doesn't match daily income.
            Weekly does.
          </ArrowItem>
          <ArrowItem>
            Drivers understand credit intuitively. What they lack is a formal record
            that proves it. That insight is the foundation of 3riKE.
          </ArrowItem>
          <ArrowItem>
            Local partnerships — regional operators, route association heads — are
            the distribution layer. We have them.
          </ArrowItem>
        </motion.ul>
      </Section>

      <Divider />

      {/* ── Market Opportunity ── */}
      <Section>
        <Eyebrow>Market Opportunity</Eyebrow>
        <Heading>
          A <span style={{ color: GREEN }}>$5.5B+ vehicle market</span> sitting on
          a <span style={{ color: GREEN }}>$331B credit gap.</span>
        </Heading>

        <Para className="mt-8">
          The numbers are not hypothetical. They reflect a market that is already
          operating at scale — just without the financial infrastructure to support
          it.
        </Para>

        <motion.div
          variants={stagger}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 border border-neutral-800 rounded-xl divide-y divide-neutral-800 sm:[&>*:nth-child(odd)]:border-r sm:[&>*:nth-child(odd)]:border-neutral-800 overflow-hidden"
        >
          <StatCell value="$5.55B" label="Africa 2-wheeler market in 2026, growing to $7.81B by 2031 at 7.08% CAGR" />
          <StatCell value="16%" label="CAGR on 3-wheeler segment — the fastest-growing segment in the market" />
          <StatCell value="27M+" label="Commercial motorcycles and tricycles operating across Sub-Saharan Africa" />
          <StatCell value="100M+" label="Mobility workers — the TAM for 3riKE's credit and financial identity platform" />
        </motion.div>

        <Para className="mt-10">
          The electric transition is accelerating the opportunity. EVs cost{" "}
          <strong className="text-neutral-200 font-semibold">
            20–40% more upfront
          </strong>{" "}
          than petrol vehicles — meaning the demand for structured, transparent
          financing infrastructure is growing faster than the vehicle market itself.
        </Para>

        <Highlight>
          <strong className="text-white font-semibold">
            The SAM isn't the whole market.
          </strong>{" "}
          At 1,000 drivers financed, 3riKE generates ~$3.3M in annual repayment
          volume and produces 1,000 verified credit profiles — a dataset that does
          not exist anywhere else in this market. At 10,000 drivers, that's ~$33M in
          annual repayment volume, and the most comprehensive informal mobility
          credit database on the continent.
        </Highlight>

        <Para className="mt-8">
          Africa is home to{" "}
          <strong className="text-neutral-200 font-semibold">
            532 million young people aged 15–35
          </strong>{" "}
          — the exact demographic driving and riding these vehicles. The labour
          force this market depends on is growing. The infrastructure to serve them
          financially is not. That is the gap 3riKE is filling.
        </Para>
      </Section>

      <Divider />

      {/* ── Revenue Model ── */}
      <Section>
        <Eyebrow>Revenue Model</Eyebrow>
        <Heading>
          Every vehicle financed compounds.{" "}
          <span style={{ color: GREEN }}>
            The business doesn't reset — it builds.
          </span>
        </Heading>

        <Para className="mt-8">
          3riKE earns from the financing margin on each vehicle, plus a recurring
          share of every distribution across the 70-week ownership period. But the
          deeper revenue stack builds on the credit infrastructure we're assembling
          underneath.
        </Para>

        {/* table — desktop */}
        <motion.div
          variants={item}
          className="mt-10 hidden sm:block border border-neutral-800 rounded-xl overflow-hidden"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="bg-neutral-900/70 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                <th className="px-6 py-4 font-semibold" style={display}>Scale</th>
                <th className="px-6 py-4 font-semibold" style={display}>Vehicles</th>
                <th className="px-6 py-4 font-semibold" style={display}>Monthly Revenue</th>
                <th className="px-6 py-4 font-semibold" style={display}>Annual Revenue</th>
              </tr>
            </thead>
            <tbody>
              {REVENUE_ROWS.map((r) => (
                <tr
                  key={r.scale}
                  className="border-t border-neutral-800 transition-colors duration-300 hover:bg-neutral-900/40"
                >
                  <td className="px-6 py-5 font-semibold text-white" style={display}>{r.scale}</td>
                  <td className="px-6 py-5 text-neutral-300 tabular-nums">{r.vehicles}</td>
                  <td className="px-6 py-5 text-neutral-300 tabular-nums">{r.monthly}</td>
                  <td className="px-6 py-5 font-bold tabular-nums" style={{ color: GREEN }}>{r.annual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* table — mobile cards */}
        <motion.div variants={stagger} className="mt-10 sm:hidden space-y-3">
          {REVENUE_ROWS.map((r) => (
            <motion.div
              key={r.scale}
              variants={item}
              className="border border-neutral-800 rounded-xl p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white" style={display}>{r.scale}</span>
                <span className="text-xs text-neutral-500 tabular-nums">{r.vehicles} vehicles</span>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500">Monthly</p>
                  <p className="text-neutral-300 tabular-nums">{r.monthly}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500">Annual</p>
                  <p className="font-bold tabular-nums" style={{ color: GREEN }}>{r.annual}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Para className="mt-10">
          Built on a single replicable unit:{" "}
          <strong className="text-neutral-200 font-semibold">
            $70/week · $276/month per driver
          </strong>
          . No exotic assumptions — just the vehicle financing margin at scale. The
          serviceable market alone gives us a clear runway:{" "}
          <strong className="text-neutral-200 font-semibold">700K drivers</strong>{" "}
          in the 2-wheeler segment and{" "}
          <strong className="text-neutral-200 font-semibold">70K–77K</strong> in the
          3-wheeler segment. Capturing just 10% of that over 5 years defines our
          growth target.
        </Para>

        <Para className="mt-8 text-neutral-300">
          On top of that base, the credit infrastructure enables compounding revenue
          streams:
        </Para>
        <motion.ul variants={stagger} className="mt-4">
          <ArrowItem>
            <strong className="text-neutral-200 font-semibold">Second vehicle financing</strong>{" "}
            — faster approval, lower cost, higher margin because the credit profile
            already exists
          </ArrowItem>
          <ArrowItem>
            <strong className="text-neutral-200 font-semibold">Lending partnerships</strong>{" "}
            — MFIs and digital lenders pay for access to verified driver credit
            profiles
          </ArrowItem>
          <ArrowItem>
            <strong className="text-neutral-200 font-semibold">Credit data licensing</strong>{" "}
            — anonymised, aggregated repayment and behavioural data licensed to
            financial institutions
          </ArrowItem>
          <ArrowItem>
            <strong className="text-neutral-200 font-semibold">Insurance referrals</strong>{" "}
            — commission on policies underwritten using 3riKE behavioural data
          </ArrowItem>
          <ArrowItem>
            <strong className="text-neutral-200 font-semibold">Savings products</strong>{" "}
            — stablecoin-backed yield accounts for drivers with established profiles
          </ArrowItem>
        </motion.ul>
      </Section>

      {/* ── Big $331B ── */}
      <section className={`${CONTAINER} py-16 sm:py-24`}>
        <BigStat value="$331B">
          Estimated SME financing gap in Sub-Saharan Africa. Informal mobility
          workers sit at the heart of it. 3riKE is building the credit identity
          layer that starts to close it.
        </BigStat>
      </section>

      <Divider />

      {/* ── Why Now ── */}
      <Section>
        <Eyebrow>Why Now</Eyebrow>
        <Heading>
          Three forces are converging.{" "}
          <span style={{ color: GREEN }}>The window is open.</span>
        </Heading>

        <Para className="mt-8">
          3riKE isn't a new idea applied to an old market. It's the right
          infrastructure at the moment three independent forces create the conditions
          for it to work at scale.
        </Para>

        <motion.div variants={stagger} className="mt-10">
          {[
            {
              t: "Electric mobility is entering Africa now.",
              d: "EVs cost more upfront. The informal hire-purchase system can't finance them. Structured, transparent ownership financing becomes essential — not optional.",
            },
            {
              t: "Mobile penetration crosses 50% in Sub-Saharan Africa",
              d: "and is accelerating. The infrastructure to reach drivers digitally, collect payments, and build credit profiles now exists in ways it simply didn't five years ago.",
            },
            {
              t: "Institutional appetite for African infrastructure is growing.",
              d: "Impact investors, DeFi protocols seeking real-world yield, and emerging market allocators are all looking for exactly what 3riKE produces: verified cash flows from real assets, backed by verifiable data.",
            },
          ].map((f) => (
            <motion.div
              key={f.t}
              variants={item}
              className="group grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-2 sm:gap-10 py-6 border-b border-neutral-800/80 last:border-b-0"
            >
              <div className="flex gap-3">
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: GREEN }}
                  aria-hidden
                >
                  →
                </span>
                <h3 className="text-white font-semibold text-base sm:text-lg leading-snug" style={display}>
                  {f.t}
                </h3>
              </div>
              <p className="text-neutral-400 text-[15px] sm:text-base leading-relaxed pl-6 sm:pl-0">
                {f.d}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <Para className="mt-8">
          Nobody is building credit identity infrastructure specifically for Africa's
          informal mobility workers. Ride-hailing platforms focus on trips.
          Traditional hire-purchase operators keep no records. EV startups are selling
          vehicles, not financial infrastructure. Digital lenders need the credit data
          3riKE produces but can't find it anywhere.
        </Para>

        <Highlight>
          3riKE sits at the intersection of all of them — producing the verified
          driver financial data that every player in the ecosystem needs, starting
          with the product (vehicle ownership financing) that gets drivers on the
          platform.
        </Highlight>
      </Section>

      <Divider />

      {/* ── Vision ── */}
      <Section>
        <Eyebrow>Vision</Eyebrow>
        <Heading>
          Not just financing vehicles. Building the{" "}
          <span style={{ color: GREEN }}>
            financial OS for Africa's mobility economy.
          </span>
        </Heading>

        <div className="mt-8 space-y-6">
          <Lead>
            Equifax, Experian, and TransUnion are collectively worth over{" "}
            <strong className="text-neutral-200 font-semibold">$40 billion</strong>.
            They built that value by making borrowers legible to lenders at scale —
            in markets where most financial activity was already formal.
          </Lead>
          <Lead>
            In Africa, the equivalent infrastructure for informal workers barely
            exists. The continent's largest economies have credit bureau penetration
            rates that leave the majority of the working population completely
            off-record.
          </Lead>
          <Lead>
            The institution that builds the definitive credit identity layer for
            Africa's informal mobility workers will hold an extraordinary strategic
            position. 3riKE is building toward it deliberately — one verified
            repayment at a time. Our mission:{" "}
            <strong className="text-white font-semibold">
              the operating and financial system for Africa's sustainable mobility
              drivers.
            </strong>
          </Lead>
        </div>

        <div className="mt-12">
          <BigStat value="100M">
            Mobility workers across Africa generating daily income with no formal
            financial identity. That is the platform we are building for.
          </BigStat>
        </div>
      </Section>

      <Divider />

      {/* ── CTA ── */}
      <motion.section
        id="request"
        className={`${CONTAINER} py-20 sm:py-28 text-center scroll-mt-24`}
        variants={sectionV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-90px" }}
      >
        <motion.h2
          variants={item}
          className="font-bold tracking-tight text-white leading-[1.1] text-[clamp(1.9rem,4.6vw,3.15rem)] max-w-4xl mx-auto"
          style={display}
        >
          The base is built. We're raising to scale what's proven.
        </motion.h2>
        <motion.p variants={item} className="mt-5 text-neutral-500 text-base sm:text-lg">
          First institutional round open. Real traction. Real drivers. Real revenue.
          Real infrastructure.
        </motion.p>

        <motion.a
          variants={item}
          href="mailto:anitandukwe7@gmail.com?subject=3riKE%20—%20Request%20the%20deck"
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
          className="mt-10 inline-flex items-center justify-center px-10 py-4 font-semibold uppercase tracking-[0.16em] text-sm text-black"
          style={{ ...display, backgroundColor: GREEN }}
        >
          See our pitch deck
        </motion.a>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-500"
        >
          <a href="mailto:anitandukwe7@gmail.com" className="hover:text-neutral-300 transition-colors">
            anitandukwe7@gmail.com
          </a>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <a
            href="https://x.com/3rike_"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-300 transition-colors"
          >
            X: @3rike_
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-12">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-300 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to 3riKE home
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
