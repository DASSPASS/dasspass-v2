import { useState, useEffect } from "react";
import {
  Building2,
  AlertTriangle,
  Search,
  BookOpen,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  TrendingUp,
  Layers,
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Star,
  Briefcase,
  CreditCard,
  UserCheck,
  FileText,
  Eye,
  Network,
  Shield,
} from "lucide-react";

import logoHorizontal from "@/imports/DassPass_Logos-Horizontal.png";
import logoIcon from "@/imports/DassPass_Logos-Icon.png";
import logoWordmark from "@/imports/DassPass_Logo_Name.png";

// ImageWithFallback-style wrapper using a plain img since we're importing assets as modules
function Img({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <img src={src} alt={alt} className={className} />;
}

type Page = "home" | "solutions" | "industries" | "partners" | "contact";

const NAV_LINKS: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Solutions", page: "solutions" },
  { label: "Industries", page: "industries" },
  { label: "Partners", page: "partners" },
  { label: "Contact", page: "contact" },
];

/* ── NAV ──────────────────────────────────────────────────────────── */

function Nav({
  current,
  onNavigate,
}: {
  current: Page;
  onNavigate: (p: Page) => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-sm border-b border-[rgba(26,29,111,0.08)]" : "border-b border-[rgba(26,29,111,0.06)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[110px]">
          <button onClick={() => onNavigate("home")} className="flex items-center">
            <Img
              src={logoHorizontal}
              alt="DassPass"
              className="h-60 w-auto object-contain"
            />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l.page}
                onClick={() => onNavigate(l.page)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  current === l.page
                    ? "text-[#1A1D6F] bg-[#F0FDF9]"
                    : "text-[#475569] hover:text-[#1A1D6F] hover:bg-[#F8FAFC]"
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onNavigate("contact")}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#1A1D6F] rounded-md hover:bg-[#14176A] transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Book a Consultation
            </button>
          </div>

          <button
            className="md:hidden text-[#1A1D6F] p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[rgba(26,29,111,0.08)]">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l.page}
                onClick={() => { onNavigate(l.page); setOpen(false); }}
                className={`text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  current === l.page
                    ? "text-[#1A1D6F] bg-[#F0FDF9]"
                    : "text-[#475569] hover:text-[#1A1D6F]"
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => { onNavigate("contact"); setOpen(false); }}
              className="mt-3 px-4 py-2.5 text-sm font-semibold text-white bg-[#1A1D6F] rounded-md"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ── SHARED LABEL ─────────────────────────────────────────────────── */

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="text-xs font-mono text-[#14B8A6] tracking-[0.2em] uppercase font-bold"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {n}
      </span>
      <div className="h-px w-10 bg-[#14B8A6]" />
      <span
        className="text-xs font-semibold text-[#64748B] tracking-[0.15em] uppercase"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── HOME PAGE ─────────────────────────────────────────────────────── */

const SERVICES = [
  {
    icon: UserCheck,
    title: "Identity Verification (KYC)",
    desc: "Verify individuals with precision — national IDs, passports, biometrics, phone, and email verification through trusted data sources.",
    tag: "01",
  },
  {
    icon: Building2,
    title: "Business Verification (KYB)",
    desc: "Validate companies, directors, tax registration, and beneficial ownership to maintain rigorous counterparty due diligence.",
    tag: "02",
  },
  {
    icon: AlertTriangle,
    title: "AML & Risk Screening",
    desc: "Screen against global sanctions lists, PEP databases, and adverse media with ongoing monitoring for continuous compliance.",
    tag: "03",
  },
  {
    icon: Search,
    title: "Background Screening",
    desc: "Comprehensive employment, education, reference, and professional qualification verification for workforce trust.",
    tag: "04",
  },
  {
    icon: BookOpen,
    title: "Compliance & Infrastructure Advisory",
    desc: "Expert guidance on KYC/KYB framework design, vendor selection, and scalable onboarding process architecture.",
    tag: "05",
  },
];

const WHY = [
  {
    n: "01",
    title: "One Partner. Multiple Solutions.",
    desc: "Access a curated network of identity, compliance, and verification providers through a single trusted relationship — eliminating fragmented vendor management.",
    icon: Network,
  },
  {
    n: "02",
    title: "Vendor-Neutral Expertise",
    desc: "We evaluate and recommend solutions based on your requirements, not commissions. Objective guidance that puts your compliance outcomes first.",
    icon: Eye,
  },
  {
    n: "03",
    title: "Local Knowledge",
    desc: "Deep understanding of African regulatory landscapes, data ecosystems, and verification infrastructure across key markets.",
    icon: Globe,
  },
  {
    n: "04",
    title: "Scalable Approach",
    desc: "Solutions designed to grow with your organization — from pilot deployments to enterprise-scale verification programs.",
    icon: TrendingUp,
  },
];

const INDUSTRIES_HOME = [
  { label: "Financial Services", icon: CreditCard },
  { label: "Insurance", icon: Shield },
  { label: "Asset Management", icon: TrendingUp },
  { label: "SACCOs", icon: Users },
  { label: "Fintech", icon: Layers },
  { label: "HR & Recruitment", icon: Briefcase },
  { label: "Marketplaces", icon: Globe },
  { label: "Enterprise Organizations", icon: Building2 },
];

function ServiceCard({
  icon: Icon,
  title,
  desc,
  tag,
  wide,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  tag: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-xl p-7 border border-[rgba(26,29,111,0.08)] hover:border-[#14B8A6]/40 hover:shadow-xl hover:shadow-[#1A1D6F]/5 transition-all duration-300 group flex flex-col ${
        wide ? "" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 bg-[#F0FDF9] rounded-xl flex items-center justify-center group-hover:bg-[#1A1D6F] transition-colors duration-300">
          <Icon
            size={20}
            className="text-[#14B8A6] group-hover:text-white transition-colors duration-300"
          />
        </div>
        <span
          className="text-xs font-mono text-[#CBD5E1] font-bold"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {tag}
        </span>
      </div>
      <h3
        className="text-lg font-bold text-[#0F172A] mb-3 leading-snug"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        {title}
      </h3>
      <p
        className="text-sm text-[#64748B] leading-relaxed"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {desc}
      </p>
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="relative bg-[#1A1D6F] overflow-hidden min-h-[88vh] flex items-center">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,1) 60px, rgba(255,255,255,1) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,1) 60px, rgba(255,255,255,1) 61px)",
          }}
        />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4"
          style={{ background: "radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)" }}
        />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(48,97,231,0.12) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
                <span
                  className="text-xs text-blue-100 tracking-wide font-medium"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Trust Infrastructure & Compliance Solutions for Africa
                </span>
              </div>

              <h1
                className="text-5xl lg:text-[4.25rem] font-bold text-white leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Building Trust
                <br />
                <span className="text-[#14B8A6]">Into Every</span>
                <br />
                Decision.
              </h1>

              <p
                className="text-lg text-blue-100 leading-relaxed mb-3 max-w-xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Helping businesses verify customers, businesses, employees,
                vendors, and partners with confidence.
              </p>

              <p
                className="text-sm text-blue-200/70 leading-relaxed mb-10 max-w-xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                DassPass helps organizations access and implement identity
                verification, business verification, AML screening, background
                checks, and compliance solutions through a trusted network of
                verification and compliance partners.
              </p>
              
              <p
  className="text-sm text-blue-200/70 leading-relaxed mb-10 max-w-xl"
>
  We also help identity, fintech, compliance, and trust infrastructure
  providers successfully enter and scale across East Africa through
  strategic partnerships, local market expertise, regulatory guidance,
  and ecosystem engagement.
</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate("contact")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#14B8A6] text-white font-semibold rounded-md hover:bg-[#0EA89A] transition-colors text-sm"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Book a Consultation
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => onNavigate("contact")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-md hover:bg-white/15 transition-colors text-sm border border-white/20"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Grow Your Reach
                </button>
              </div>
            </div>

            {/* Right side: floating stat cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { label: "Identity Verification", sub: "KYC Solutions", icon: UserCheck, color: "#14B8A6" },
                { label: "Business Verification", sub: "KYB Solutions", icon: Building2, color: "#3061E7" },
                { label: "AML Screening", sub: "Risk & Compliance", icon: AlertTriangle, color: "#14B8A6" },
                { label: "Background Checks", sub: "Workforce Trust", icon: Search, color: "#3061E7" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-xl p-5 hover:bg-white/12 transition-colors"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${card.color}22` }}
                  >
                    <card.icon size={17} style={{ color: card.color }} />
                  </div>
                  <p
                    className="text-sm font-bold text-white mb-0.5"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {card.label}
                  </p>
                  <p
                    className="text-xs text-blue-200/70"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {card.sub}
                  </p>
                </div>
              ))}
              <div className="col-span-2 bg-white/8 backdrop-blur-sm border border-white/12 rounded-xl p-5 flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#14B8A622" }}>
                  <BookOpen size={17} className="text-[#14B8A6]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Compliance Advisory</p>
                  <p className="text-xs text-blue-200/70" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Framework Design & Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#0F172A] py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {["Identity Verification", "Business Verification", "AML Screening", "Background Checks", "Compliance Advisory"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={13} className="text-[#14B8A6]" />
                <span
                  className="text-xs text-slate-400 font-medium"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel n="01" label="Services" />
          <div className="grid lg:grid-cols-2 gap-10 mb-14">
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Comprehensive Verification & Compliance Solutions
            </h2>
            <div className="flex flex-col justify-end">
              <p
                className="text-[#64748B] leading-relaxed mb-5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                We aggregate and implement best-in-class solutions from a
                trusted network of verification and compliance technology
                providers — giving your organization access to the full
                spectrum of trust infrastructure.
              </p>
              <button
                onClick={() => onNavigate("solutions")}
                className="self-start inline-flex items-center gap-2 text-[#14B8A6] font-semibold text-sm hover:gap-3 transition-all"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Explore all solutions <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.slice(0, 3).map((s) => (
              <ServiceCard key={s.tag} {...s} />
            ))}
            {SERVICES.slice(3).map((s) => (
              <ServiceCard key={s.tag} {...s} />
            ))}
            {/* Spacer to balance the last row */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Why DassPass */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel n="02" label="Why DassPass" />
          <div className="mb-14">
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0F172A] max-w-2xl leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              The Trusted Advisor for Compliance Infrastructure
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((w) => (
              <div
                key={w.n}
                className="bg-white rounded-xl p-7 border border-[rgba(26,29,111,0.08)] hover:border-[#14B8A6]/40 hover:shadow-lg hover:shadow-[#14B8A6]/5 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 bg-[#F0FDF9] rounded-xl flex items-center justify-center group-hover:bg-[#1A1D6F] transition-colors">
                    <w.icon
                      size={18}
                      className="text-[#14B8A6] group-hover:text-white transition-colors"
                    />
                  </div>
                  <span
                    className="text-xs font-mono text-[#CBD5E1] font-bold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {w.n}
                  </span>
                </div>
                <h3
                  className="text-base font-bold text-[#0F172A] mb-3 leading-snug"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {w.title}
                </h3>
                <p
                  className="text-sm text-[#64748B] leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 lg:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel n="03" label="Industries" />
          <div className="grid lg:grid-cols-2 gap-10 mb-14">
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Serving Organizations Across Africa
            </h2>
            <div className="flex flex-col justify-end">
              <p
                className="text-[#64748B] leading-relaxed"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                From regulated financial institutions to high-growth fintechs,
                we help organizations at every stage of their compliance journey
                build trust into their core operations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {INDUSTRIES_HOME.map((ind) => (
              <button
                key={ind.label}
                onClick={() => onNavigate("industries")}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-[rgba(26,29,111,0.08)] hover:border-[#14B8A6]/40 hover:shadow-md hover:shadow-[#14B8A6]/5 transition-all duration-200 group text-center"
              >
                <div className="w-10 h-10 bg-[#F0FDF9] rounded-xl flex items-center justify-center group-hover:bg-[#1A1D6F] transition-colors">
                  <ind.icon
                    size={18}
                    className="text-[#14B8A6] group-hover:text-white transition-colors"
                  />
                </div>
                <span
                  className="text-sm font-semibold text-[#0F172A] leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {ind.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

/* ── SOLUTIONS PAGE ─────────────────────────────────────────────────── */

const SOLUTIONS = [
  {
    id: "kyc",
    tag: "01",
    title: "Identity Verification",
    subtitle: "Know Your Customer (KYC)",
    icon: UserCheck,
    desc: "Verify individuals quickly and accurately using government-issued documents, biometric matching, and digital identity signals. Our network of data partners covers African markets comprehensively.",
    items: ["National ID Verification", "Passport Verification", "Phone Verification", "Email Verification", "Biometric Verification"],
  },
  {
    id: "kyb",
    tag: "02",
    title: "Business Verification",
    subtitle: "Know Your Business (KYB)",
    icon: Building2,
    desc: "Conduct thorough due diligence on counterparties, vendors, and corporate clients — from company registration to beneficial ownership mapping.",
    items: ["Company Verification", "Director Verification", "Tax PIN Verification", "Beneficial Ownership Verification"],
  },
  {
    id: "aml",
    tag: "03",
    title: "AML Compliance",
    subtitle: "Anti-Money Laundering & Risk",
    icon: AlertTriangle,
    desc: "Protect your organization from financial crime with global sanctions screening, PEP checks, adverse media monitoring, and continuous watchlist surveillance.",
    items: ["Sanctions Screening", "PEP Screening", "Adverse Media Checks", "Ongoing Monitoring"],
  },
  {
    id: "bg",
    tag: "04",
    title: "Background Checks",
    subtitle: "Workforce Trust & Verification",
    icon: Search,
    desc: "Build confident hiring decisions with comprehensive background screening that validates credentials, employment history, and professional qualifications.",
    items: ["Employment Verification", "Education Verification", "Reference Checks", "Professional Qualification Verification"],
  },
  {
    id: "advisory",
    tag: "05",
    title: "Compliance Advisory",
    subtitle: "Framework Design & Optimization",
    icon: BookOpen,
    desc: "Partner with our compliance experts to design, audit, and optimize your verification and onboarding frameworks — from vendor evaluation to process architecture.",
    items: ["KYC Framework Reviews", "KYB Framework Reviews", "Vendor Selection", "Onboarding Process Design"],
  },
];

function PageHero({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  return (
    <section className="bg-[#1A1D6F] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,1) 80px, rgba(255,255,255,1) 81px)" }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4"
        style={{ background: "radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6 border border-white/10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
          <span className="text-xs text-blue-100 tracking-wide font-medium" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {label}
          </span>
        </div>
        <h1
          className="text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {title}
        </h1>
        <p className="text-blue-200 mt-5 max-w-xl text-lg leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}

function SolutionsPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [active, setActive] = useState<string>("kyc");

  const activeSolution = SOLUTIONS.find((s) => s.id === active)!;

  return (
    <div className="pt-[68px]">
      <PageHero
        label="Solutions"
        title="Verification & Compliance Solutions"
        subtitle="Access a full suite of identity, business, and risk solutions through a single trusted implementation partner."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-2">
                {SOLUTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200 ${
                      active === s.id
                        ? "bg-[#1A1D6F] border-[#1A1D6F] text-white"
                        : "bg-white border-[rgba(26,29,111,0.1)] text-[#0F172A] hover:border-[#14B8A6]/40 hover:bg-[#F0FDF9]"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${active === s.id ? "bg-white/15" : "bg-[#F0FDF9]"}`}>
                      <s.icon size={16} className={active === s.id ? "text-white" : "text-[#14B8A6]"} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold leading-snug" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                        {s.title}
                      </div>
                      <div className={`text-xs mt-0.5 truncate ${active === s.id ? "text-blue-200" : "text-[#64748B]"}`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {s.subtitle}
                      </div>
                    </div>
                    <ChevronRight size={15} className={`flex-shrink-0 transition-transform ${active === s.id ? "rotate-90 text-white" : "text-[#CBD5E1]"}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-3">
              <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[rgba(26,29,111,0.08)]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-[#14B8A6] font-bold tracking-widest" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {activeSolution.tag}
                  </span>
                  <div className="h-px flex-1 bg-[rgba(26,29,111,0.1)]" />
                </div>
                <h2 className="text-3xl font-bold text-[#0F172A] mb-1 leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  {activeSolution.title}
                </h2>
                <p className="text-sm text-[#14B8A6] font-semibold mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {activeSolution.subtitle}
                </p>
                <p className="text-[#64748B] leading-relaxed mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {activeSolution.desc}
                </p>
                <div className="border-t border-[rgba(26,29,111,0.08)] pt-6">
                  <p className="text-xs font-bold text-[#0F172A] tracking-widest uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Capabilities
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeSolution.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-[rgba(26,29,111,0.07)]">
                        <CheckCircle size={14} className="text-[#14B8A6] flex-shrink-0" />
                        <span className="text-sm text-[#0F172A] font-medium" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    onClick={() => onNavigate("contact")}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1D6F] text-white font-semibold rounded-lg hover:bg-[#14176A] transition-colors text-sm"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Discuss This Solution <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

/* ── INDUSTRIES PAGE ─────────────────────────────────────────────────── */

const INDUSTRIES_DETAIL = [
  {
    tag: "01",
    title: "Financial Services",
    icon: CreditCard,
    desc: "Banks, microfinance institutions, and payment service providers face mounting regulatory pressure to implement robust KYC and AML programs. DassPass helps financial institutions design verification frameworks that meet regulatory requirements while minimizing customer friction.",
    needs: ["Customer KYC at onboarding", "Ongoing AML screening", "Business account verification", "Vendor due diligence", "Transaction Monitoring"],
  },
  {
    tag: "02",
    title: "Asset Managers",
    icon: TrendingUp,
    desc: "Asset management firms must verify investor identities, confirm source of funds, and maintain ongoing AML compliance across their client base. We provide streamlined solutions for investor onboarding and continuous monitoring.",
    needs: ["Investor identity verification", "Source of funds validation", "PEP & sanctions screening", "Ongoing investor monitoring"],
  },
  {
    tag: "03",
    title: "Insurance",
    icon: Shield,
    desc: "Insurance companies require precise identity verification for policy issuance and claims processing. DassPass helps insurers implement proportionate verification programs that reduce fraud while enabling rapid customer onboarding.",
    needs: ["Policy applicant verification", "Claims identity checks", "Agent & broker verification", "Fraud risk screening"],
  },
  {
    tag: "04",
    title: "HR & Recruitment",
    icon: Briefcase,
    desc: "Hiring organizations need reliable background screening to build trustworthy workforces. Our solutions cover employment history, academic credentials, professional certifications, and reference verification across African markets.",
    needs: ["Employment history verification", "Education credential checks", "Professional qualification validation", "Reference verification"],
  },
  {
    tag: "05",
    title: "Fintech",
    icon: Layers,
    desc: "Fintechs must balance rapid customer acquisition with regulatory compliance. DassPass helps fintechs select and implement proportionate, scalable verification solutions that grow with their user base.",
    needs: ["Digital identity verification", "Automated KYC workflows", "AML compliance programs", "Compliance framework design", "Transaction Monitoring"],
  },
  {
    tag: "06",
    title: "Marketplaces",
    icon: Globe,
    desc: "Online marketplaces need to verify both buyers and sellers to build trust across their platforms. We help marketplace operators implement identity and business verification programs that reduce fraud and build community confidence.",
    needs: ["Seller identity verification", "Business verification", "Fraud prevention screening", "Trust & safety programs"],
  },
];

function IndustriesPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div className="pt-[68px]">
      <PageHero
        label="Industries"
        title="Built for Regulated & High-Trust Industries"
        subtitle="Deep domain expertise across financial services, insurance, HR, and digital platforms across Africa."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-0">
          {INDUSTRIES_DETAIL.map((ind, i) => (
            <div
              key={ind.tag}
              className={`grid lg:grid-cols-2 gap-10 items-start py-14 ${i < INDUSTRIES_DETAIL.length - 1 ? "border-b border-[rgba(26,29,111,0.07)]" : ""}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-mono text-[#14B8A6] font-bold tracking-widest" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {ind.tag}
                  </span>
                  <div className="h-px w-8 bg-[#14B8A6]" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#F0FDF9] rounded-xl flex items-center justify-center">
                    <ind.icon size={18} className="text-[#14B8A6]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0F172A]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                    {ind.title}
                  </h2>
                </div>
                <p className="text-[#64748B] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {ind.desc}
                </p>
                <button
                  onClick={() => onNavigate("contact")}
                  className="mt-6 inline-flex items-center gap-2 text-[#14B8A6] font-semibold text-sm hover:gap-3 transition-all"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Discuss your needs <ArrowRight size={14} />
                </button>
              </div>
              <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-[rgba(26,29,111,0.08)]">
                <p className="text-xs font-bold text-[#0F172A] tracking-widest uppercase mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Key Verification Needs
                </p>
                <div className="space-y-3">
                  {ind.needs.map((need) => (
                    <div key={need} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-[rgba(26,29,111,0.07)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] flex-shrink-0" />
                      <span className="text-sm text-[#0F172A] font-medium" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {need}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

/* ── PARTNERS PAGE ─────────────────────────────────────────────────── */

const PARTNER_AREAS = [
  { label: "Identity Verification", icon: UserCheck },
  { label: "Business Verification", icon: Building2 },
  { label: "AML Screening", icon: AlertTriangle },
  { label: "Background Screening", icon: Search },
  { label: "Fraud Prevention", icon: Shield },
  { label: "Trust Infrastructure", icon: Network },
];

const OUR_ROLE = [
  { n: "01", label: "Evaluate solutions", icon: Eye },
  { n: "02", label: "Select appropriate providers", icon: Star },
  { n: "03", label: "Manage implementation", icon: Layers },
  { n: "04", label: "Optimize verification workflows", icon: TrendingUp },
  { n: "05", label: "Build scalable compliance processes", icon: FileText },
];

function PartnersPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div className="pt-[68px]">
      <PageHero
        label="Partners"
        title="Our Partner Ecosystem"
        subtitle="DassPass works with a network of trusted identity, compliance, and verification providers to help organizations access best-in-class verification capabilities."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <SectionLabel n="01" label="Our Role" />
              <h2 className="text-3xl font-bold text-[#0F172A] mb-5 leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                We Act as Your Trusted Advisor — Not Just a Vendor
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-10" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Rather than selling a single proprietary solution, DassPass
                evaluates the landscape of verification providers and recommends
                the best fit for your specific context, budget, and regulatory
                environment.
              </p>
              <div className="space-y-3">
                {OUR_ROLE.map((r) => (
                  <div key={r.n} className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-[rgba(26,29,111,0.07)] group hover:border-[#14B8A6]/40 transition-colors">
                    <div className="w-9 h-9 bg-[#F0FDF9] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1A1D6F] transition-colors">
                      <r.icon size={15} className="text-[#14B8A6] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-[#0F172A] flex-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {r.label}
                    </span>
                    <span className="text-xs font-mono text-[#CBD5E1] font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {r.n}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel n="02" label="Areas of Collaboration" />
              <h2 className="text-3xl font-bold text-[#0F172A] mb-5 leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                Covering the Full Verification Stack
              </h2>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {PARTNER_AREAS.map((area) => (
                  <div key={area.label} className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-[rgba(26,29,111,0.07)]">
                    <div className="w-8 h-8 bg-[#F0FDF9] rounded-lg flex items-center justify-center flex-shrink-0">
                      <area.icon size={15} className="text-[#14B8A6]" />
                    </div>
                    <span className="text-sm font-semibold text-[#0F172A]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {area.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC] border-t border-[rgba(26,29,111,0.06)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel n="03" label="Technology & Verification Partners" />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-5 leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                Leading Verification & Compliance Technology Partners
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-7" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                We collaborate with leading verification, compliance, and trust
                technology providers to help clients access reliable and scalable
                solutions. Our partner relationships are built on rigorous
                evaluation — only providers that meet our quality and reliability
                standards join our ecosystem.
              </p>
              <div className="bg-white rounded-xl p-6 border border-[rgba(26,29,111,0.1)] flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F0FDF9] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield size={18} className="text-[#14B8A6]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0F172A] mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                    Provider Information Available Upon Consultation
                  </p>
                  <p className="text-sm text-[#64748B]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    We match clients with the most appropriate providers based on
                    their specific project requirements, geographic scope, and
                    compliance objectives.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1D6F] rounded-2xl p-10 text-white">
              <p className="text-xs font-bold tracking-widest uppercase text-[#14B8A6] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Why partner through DassPass?
              </p>
              {[
                "Access pre-vetted, proven providers",
                "Objective, vendor-neutral recommendations",
                "Single point of coordination and accountability",
                "Local knowledge combined with global networks",
                "Ongoing optimization and monitoring support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-4 last:mb-0">
                  <CheckCircle size={15} className="text-[#14B8A6] flex-shrink-0" />
                  <span className="text-sm text-blue-100 font-medium" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

/* ── CONTACT PAGE ─────────────────────────────────────────────────── */

function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 border border-[rgba(26,29,111,0.15)] rounded-lg text-sm text-[#0F172A] bg-[#F8FAFC] focus:outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/10 transition placeholder-[#94A3B8]";

  return (
    <div className="pt-[68px]">
      <PageHero
        label="Contact"
        title="Let's Build Your Compliance Program Together"
        subtitle="Tell us about your verification and compliance requirements. We will respond within one business day."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-[#F0FDF9] rounded-2xl p-14 text-center border border-[#14B8A6]/20">
                  <div className="w-14 h-14 bg-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                    Message Received
                  </h2>
                  <p className="text-[#64748B]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Thank you for reaching out. A member of our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] tracking-wide uppercase mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Full Name *</label>
                      <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} placeholder="Jane Mwangi" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] tracking-wide uppercase mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Company *</label>
                      <input required type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} placeholder="Equity Bank" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] tracking-wide uppercase mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Email *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} placeholder="jane@equitybank.co.ke" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] tracking-wide uppercase mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} placeholder="+254 705 886 366" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] tracking-wide uppercase mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Area of Interest</label>
                    <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className={inputClass + " appearance-none"} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <option value="">Select a solution area...</option>
                      <option>Identity Verification (KYC)</option>
                      <option>Business Verification (KYB)</option>
                      <option>AML & Risk Screening</option>
                      <option>Background Screening</option>
                      <option>Compliance Advisory</option>
                      <option>Multiple / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] tracking-wide uppercase mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass + " resize-none"} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} placeholder="Describe your verification or compliance requirements..." />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1A1D6F] text-white font-semibold rounded-lg hover:bg-[#14176A] transition-colors text-sm flex items-center justify-center gap-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Send Message <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-5">
              <h3 className="text-lg font-bold text-[#0F172A] mb-5" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                Contact Information
              </h3>
              {[
                { icon: Mail, label: "Email", value: "info@dasspass.com", href: "mailto:info@dasspass.com" },
                { icon: Phone, label: "Phone", value: "+254 705 886 366", href: "tel:+254700000000" },
                { icon: MapPin, label: "Location", value: "Nairobi, Kenya", href: null },
                { icon: Linkedin, label: "LinkedIn", value: "DassPass", href: "https://www.linkedin.com/company/dasspass1/about/" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-[rgba(26,29,111,0.08)]">
                  <div className="w-9 h-9 bg-[#F0FDF9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <c.icon size={15} className="text-[#14B8A6]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#64748B] uppercase tracking-wide mb-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-semibold text-[#1A1D6F] hover:text-[#14B8A6] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c.value}</a>
                    ) : (
                      <p className="text-sm font-semibold text-[#0F172A]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-[#1A1D6F] rounded-2xl p-7 text-white mt-6">
                <div className="mb-4">
                  <Img src={logoWordmark} alt="DassPass" className="h-7 w-auto object-contain brightness-0 invert" />
                </div>
                <p className="text-xs text-[#14B8A6] font-semibold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Building Trust Into Every Decision.
                </p>
                <p className="text-xs text-blue-200/70 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Identity Verification · Business Verification · AML Screening · Background Checks · Compliance & Infrastructure Advisory · Compliance & Infrastructure Advisory · Compliance & Infrastructure Advisory · Compliance & Infrastructure Advisory · Compliance & Infrastructure Advisory
                  <br /><br />
                  Trust Infrastructure & Compliance Solutions for Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={() => {}} />
    </div>
  );
}

/* ── SHARED SECTIONS ─────────────────────────────────────────────── */

function CtaBanner({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <section className="py-24 bg-[#1A1D6F] relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 75% 50%, rgba(20,184,166,0.1) 0%, transparent 60%)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <h2
          className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Ready to Strengthen Trust
          <br />
          and Compliance?
        </h2>
        <p className="text-blue-200 mb-10 max-w-md mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Let&apos;s discuss your verification, onboarding, and compliance requirements.
        </p>
        <button
          onClick={() => onNavigate("contact")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#14B8A6] text-white font-semibold rounded-md hover:bg-[#0EA89A] transition-colors"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Schedule a Consultation <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer className="bg-[#0F172A] text-white py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <button onClick={() => onNavigate("home")} className="flex items-center mb-5">
              <Img
                src={logoHorizontal}
                alt="DassPass"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </button>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Building Trust Into Every Decision.
              <br />
              Trust infrastructure & compliance solutions for Africa.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Pages
            </p>
            <div className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.page}
                  onClick={() => onNavigate(l.page)}
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Contact
            </p>
            <div className="space-y-2.5">
              <p className="text-sm text-slate-400" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Nairobi, Kenya</p>
              <a href="mailto:info@dasspass.com" className="block text-sm text-slate-400 hover:text-white transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>info@dasspass.com</a>
              <a href="https://www.linkedin.com/company/dasspass1/about/" className="block text-sm text-slate-400 hover:text-white transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            © 2026 DassPass. All rights reserved.
          </p>
          <p className="text-xs text-slate-600" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Identity Verification · Business Verification · AML Screening · Background Checks · Compliance & Infrastructure Advisory · Compliance & Infrastructure Advisory · Compliance & Infrastructure Advisory · Compliance & Infrastructure Advisory · Compliance & Infrastructure Advisory · Compliance & Infrastructure Advisory
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── ROOT ─────────────────────────────────────────────────────────── */

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Nav current={page} onNavigate={navigate} />
      {page === "home" && <HomePage onNavigate={navigate} />}
      {page === "solutions" && <SolutionsPage onNavigate={navigate} />}
      {page === "industries" && <IndustriesPage onNavigate={navigate} />}
      {page === "partners" && <PartnersPage onNavigate={navigate} />}
      {page === "contact" && <ContactPage />}
    </div>
  );
}
