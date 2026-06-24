"use client";

import Image from "next/image";
import { useState } from "react";
import { LiveChatWidget } from "@livechat/widget-react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  ClipboardList,
  Compass,
  Eye,
  HeartHandshake,
  LockKeyhole,
  MapPin,
  MapPinned,
  Menu,
  MessageCircleHeart,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Sunrise,
  Users,
  Waves,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const phoneNumber = "0330 043 1715";
const phoneHref = "tel:+443300431715";
const contactUrl = "https://thewellbourneclinic.co.uk/contact/";
const mainSiteUrl = "https://thewellbourneclinic.co.uk/";

const ease = [0.22, 1, 0.36, 1] as const;
const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease },
};

const journey = [
  { number: "01", title: "Recognition", text: "Noticing that alcohol is taking more than it gives.", icon: Eye },
  { number: "02", title: "Assessment", text: "A private conversation about your health, history and needs.", icon: ClipboardList },
  { number: "03", title: "Detox", text: "A medically informed plan to manage withdrawal more safely.", icon: Waves },
  { number: "04", title: "Therapy", text: "Time to understand patterns, triggers and what sits beneath them.", icon: MessageCircleHeart },
  { number: "05", title: "Recovery planning", text: "Practical tools for the relationships and routines ahead.", icon: Route },
  { number: "06", title: "Aftercare", text: "Continued connection when residential treatment ends.", icon: HeartHandshake },
  { number: "07", title: "Life beyond rehab", text: "A life built around possibility, not alcohol.", icon: Sunrise },
];

const locations = [
  { city: "Birmingham", region: "West Midlands", image: "/image-bank/friends-cafe.jpg", alt: "Friends sharing a supportive conversation in a quiet café", note: "A well-connected city with treatment options within easy reach of communities across the Midlands.", className: "location-card-feature" },
  { city: "Coventry", region: "West Midlands", image: "/image-bank/rural-landscape.jpg", alt: "Open countryside beneath a wide sky", note: "Central, accessible and close to a wide network of family and community support.", className: "location-card-tall" },
  { city: "Warwickshire", region: "Heart of England", image: "/image-bank/lake-landscape.jpg", alt: "A peaceful lake and green landscape", note: "Rural surroundings can offer quiet, privacy and a meaningful change of pace.", className: "location-card-wide" },
  { city: "Manchester", region: "North West", image: "/image-bank/peer-conversation.jpg", alt: "Two people having an open conversation at home", note: "A major northern hub with strong transport links for people travelling from across the UK.", className: "" },
  { city: "Liverpool", region: "Merseyside", image: "/image-bank/coast-landscape.jpg", alt: "A broad coastal landscape with sea and cliffs", note: "A city known for community, connection and accessible support across the wider region.", className: "" },
  { city: "Leeds", region: "Yorkshire", image: "/image-bank/woodland-light.jpg", alt: "Soft daylight filtering through a quiet woodland", note: "A useful base for people seeking treatment from Yorkshire and the North East.", className: "" },
];

const editorialNotes = [
  { label: "A change of scene", title: "Many people choose treatment away from home.", text: "Distance can create privacy and breathing room. For some, leaving familiar routes and routines makes it easier to focus on the work of recovery.", icon: Compass, image: "/image-bank/quiet-reflection.jpg", alt: "A woman sitting quietly by a window with a warm drink" },
  { label: "Recovery is shared", title: "Family support can matter long after admission.", text: "Useful involvement is not about watching over someone. It is about learning, listening and rebuilding trust at a pace that feels safe.", icon: Users, image: "/image-bank/family-beach.jpg", alt: "A family walking together along a beach at sunset" },
  { label: "The next chapter", title: "Aftercare begins before residential treatment ends.", text: "A thoughtful plan connects therapy with real life: difficult days, relationships, work, local support and the routines that make recovery sustainable.", icon: BookOpen, image: "/image-bank/watering-plants.jpg", alt: "A person tending houseplants as part of an everyday routine" },
];

const factors = [
  {
    number: "01",
    title: "Cost",
    text: "Ask exactly what the fee includes, from assessment and detox to therapy and aftercare.",
  },
  {
    number: "02",
    title: "Length of stay",
    text: "The right timeframe depends on your health, circumstances and the depth of support you need.",
  },
  {
    number: "03",
    title: "Therapy styles",
    text: "Look for a thoughtful mix of individual work, group therapy and evidence-informed approaches.",
  },
  {
    number: "04",
    title: "Environment",
    text: "The surroundings should feel safe, settled and far enough from the pressures that keep you stuck.",
  },
  {
    number: "05",
    title: "Aftercare",
    text: "Recovery continues at home. Ask how the centre will help you protect the progress you make.",
  },
];

const faqs = [
  {
    q: "Does location matter when choosing rehab?",
    a: "It matters, but there is no single right answer. Staying nearby can make visits and family involvement easier. Travelling may offer more privacy and distance from familiar triggers. Choose the setting where you are most likely to feel safe, settled and able to focus.",
  },
  {
    q: "Can family members visit during residential rehab?",
    a: "Many residential alcohol rehab programmes allow planned visits once treatment is under way. Timing and frequency vary because the early days are often kept quiet and structured. The team should explain how visits, calls and family sessions can support recovery without becoming overwhelming.",
  },
  {
    q: "How long does residential alcohol rehab last?",
    a: "Many programmes are built around a 28-day stay, although shorter or longer treatment may be recommended. The right length depends on withdrawal risk, physical and mental health, previous treatment and the support waiting for you at home.",
  },
  {
    q: "What happens after treatment ends?",
    a: "Good alcohol rehabilitation includes a plan for life after rehab. This may involve regular check-ins, therapy, peer-support meetings, relapse-prevention planning and help rebuilding daily routines. Leaving residential care should feel like a supported transition, not a sudden goodbye.",
  },
  {
    q: "What ongoing support is available?",
    a: "Support can include one-to-one counselling, online or in-person aftercare groups, local recovery meetings, family guidance and wellbeing check-ins. Ask each provider what is included, how long it lasts and what happens if you begin to struggle.",
  },
  {
    q: "Can I continue working during rehab?",
    a: "Residential rehab usually asks you to step away from work so you can give treatment your full attention. Some centres may allow limited contact once you are settled, but this should be agreed in advance. Outpatient support may suit people who cannot take an extended break, provided it is clinically appropriate.",
  },
  {
    q: "What therapies are used in alcohol rehab?",
    a: "Programmes often combine one-to-one counselling, group therapy, cognitive behavioural therapy, relapse-prevention work and family support. Some also include mindfulness, creative activities, exercise or 12-step meetings. What matters is that therapy is chosen around the person, not delivered as a fixed script.",
  },
  {
    q: "What are the success rates for alcohol rehab?",
    a: "Success is difficult to reduce to one percentage because programmes, follow-up periods and definitions vary. Ask how a centre measures progress, supports people after discharge and responds to relapse. National treatment data shows that recovery is possible, but lasting change is usually strengthened by ongoing support.",
  },
  {
    q: "Do I need to choose an alcohol rehab near me?",
    a: "No. Searching for “alcohol rehab near me” is a useful place to begin, but you can consider alcohol treatment centres elsewhere in the UK. Care quality, safety, therapeutic fit and aftercare are usually more important than mileage alone.",
  },
  {
    q: "Is my first enquiry confidential?",
    a: "Yes. You should be able to speak privately, ask questions and understand the options without pressure or judgement. You do not need to have made a final decision before you call.",
  },
];

const guides = [
  {
    title: "Recovery Should Fit the Person",
    category: "Individual recovery",
    image: "/image-bank/talking-recovery.jpg",
    alt: "Two women in a calm, attentive recovery conversation",
    size: "feature",
    href: "https://thewellbourneclinic.co.uk/the-wellbourne-clinic-individual-addiction-recovery/",
    summary: "Why meaningful treatment begins with a person’s history, health, relationships and hopes—not a standard formula.",
  },
  {
    title: "The 12 Steps, Explained Simply",
    category: "Recovery approaches",
    image: "/image-bank/book-and-tea.jpg",
    alt: "An open journal, pen and warm tea beside a window",
    size: "tall",
    href: "https://thewellbourneclinic.co.uk/the-12-steps-of-recovery-explained/",
    summary: "A clear introduction to the principles behind the 12 Steps, and how they can sit alongside modern therapy.",
  },
  {
    title: "Life After Rehab",
    category: "The next chapter",
    image: "/image-bank/yoga-at-home.jpg",
    alt: "A woman practising a gentle stretch at home",
    size: "standard",
    href: "https://thewellbourneclinic.co.uk/life-after-rehab-support-aftercare/",
    summary: "Returning home can feel hopeful and uncertain at once. Explore routines, support and the realities of early recovery.",
  },
  {
    title: "Why Aftercare Matters",
    category: "Long-term recovery",
    image: "/image-bank/dog-walking.jpg",
    alt: "A person walking a dog through open countryside",
    size: "standard",
    href: "https://thewellbourneclinic.co.uk/the-importance-of-aftercare-in-rehab-building-a-lasting-recovery/",
    summary: "How continued connection, accountability and practical planning help treatment take root in everyday life.",
  },
  {
    title: "Supporting Someone in Recovery",
    category: "For families",
    image: "/image-bank/father-son-kitchen.jpg",
    alt: "A father and son spending time together in a kitchen",
    size: "wide",
    href: "https://thewellbourneclinic.co.uk/supporting-sobriety-a-guide-for-families-in-addiction-recovery/",
    summary: "Warm, practical guidance on listening well, setting healthy boundaries and looking after yourself too.",
  },
  {
    title: "How Families Can Be Involved",
    category: "Relationships",
    image: "/image-bank/talking-over-tea.jpg",
    alt: "Two people talking over tea in a comfortable room",
    size: "standard",
    href: "https://thewellbourneclinic.co.uk/family-involvement-in-rehab-at-the-wellbourne-clinic/",
    summary: "A look at visits, family sessions and the careful work of rebuilding trust without losing sight of the individual.",
  },
  {
    title: "What Functioning Addiction Can Look Like",
    category: "Recognising the signs",
    image: "/image-bank/everyday-routine.jpg",
    alt: "A person restoring calm through a simple household routine",
    size: "standard",
    href: "https://thewellbourneclinic.co.uk/what-functioning-addiction-looks-like/",
    summary: "When work, family life and appearances seem intact, an alcohol problem can remain hidden—even from the person living it.",
  },
  {
    title: "Why Relapse Happens",
    category: "Understanding recovery",
    image: "/image-bank/forest-path.jpg",
    alt: "A quiet path leading through a green forest",
    size: "standard",
    href: "https://thewellbourneclinic.co.uk/why-do-people-relapse-addiction-recovery/",
    summary: "Relapse is often a process rather than a single moment. Learn about warning signs, triggers and returning to support.",
  },
  {
    title: "The Power of Peer Support",
    category: "Recovery community",
    image: "/image-bank/friends-laughing.jpg",
    alt: "Friends laughing together in a relaxed setting",
    size: "standard",
    href: "https://thewellbourneclinic.co.uk/the-power-of-peer-support-connecting-with-others-in-recovery/",
    summary: "Shared experience can soften isolation, build accountability and remind people that difficult days do pass.",
  },
  {
    title: "Understanding Dual Diagnosis",
    category: "Mental health",
    image: "/image-bank/human-connection.jpg",
    alt: "Two people sitting together in a moment of support",
    size: "standard",
    href: "https://thewellbourneclinic.co.uk/understanding-dual-diagnosis-treating-addiction-and-mental-health/",
    summary: "Why alcohol use and mental health can become closely connected—and why both deserve thoughtful, joined-up care.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span />
      {children}
    </div>
  );
}

export function WellbourneMicrosite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-root overflow-hidden bg-cream text-graphite">
      <header className="site-header">
        <div className="page-shell flex h-[76px] items-center justify-between gap-6">
          <a href="#top" aria-label="UK Alcohol Rehab home">
            <Image
              src="/mainlogo.png"
              alt="The Wellbourne Clinic"
              width={1480}
              height={218}
              className="h-auto w-[220px] max-w-[58vw]"
              priority
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            <a className="nav-link" href="#understanding">Understanding rehab</a>
            <a className="nav-link" href="#journey">The journey</a>
            <a className="nav-link" href="#location">Choosing a location</a>
            <a className="nav-link" href="#guides">Recovery guides</a>
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <a className="header-phone" href={phoneHref}>
              <Phone size={15} />
              {phoneNumber}
            </a>
            <a className="button button-dark px-5 py-3 text-sm" href={contactUrl}>
              Get confidential help
            </a>
          </div>
          <button
            className="grid size-11 place-items-center rounded-full border border-black/10 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav">
            <a href="#understanding" onClick={() => setMenuOpen(false)}>Understanding rehab</a>
            <a href="#journey" onClick={() => setMenuOpen(false)}>The journey</a>
            <a href="#location" onClick={() => setMenuOpen(false)}>Choosing a location</a>
            <a href="#guides" onClick={() => setMenuOpen(false)}>Recovery guides</a>
            <a href={phoneHref}>Call {phoneNumber}</a>
          </nav>
        )}
      </header>

      <section id="top" className="hero">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease }}
          className="hero-image-wrap"
        >
          <Image
            src="/image-bank/morning-walk.jpg"
            alt="A person walking along a quiet woodland path in morning light"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="hero-image-scrim" />

          <motion.div {...reveal} className="hero-copy">
            <SectionLabel>The UK&apos;s guide to alcohol rehab</SectionLabel>
            <h1>Find the space<br />to begin again.</h1>
            <p>
              Clear, compassionate guidance on alcohol rehab in the UK—wherever
              you live, and whatever brought you here.
            </p>
            <div className="hero-actions">
              <a className="button button-brand" href={phoneHref}>
                <Phone size={17} />
                Speak to someone
              </a>
              <a className="button button-light" href="#guides">
                Explore the guide
                <ArrowDown size={17} />
              </a>
            </div>
          </motion.div>

          <div className="hero-caption">
            <MapPin size={16} />
            Support can start wherever you are
          </div>
          <div className="hero-stamp">
            <span>UK</span>
            <small>Independent<br />rehab guide</small>
          </div>

          <div className="hero-trust">
            <div><LockKeyhole /><span><b>100% confidential</b>Private from your first call</span></div>
            <div><BadgeCheck /><span><b>CQC registered care</b>Standards you can check</span></div>
            <div><Clock3 /><span><b>Here every day</b>Talk when you feel ready</span></div>
          </div>
        </motion.div>
      </section>

      <section id="understanding" className="section-pad">
        <div className="page-shell editorial-intro">
          <motion.div {...reveal} className="editorial-heading">
            <SectionLabel>Alcohol rehab across the UK</SectionLabel>
            <h2>Recovery is not<br />a postcode.</h2>
          </motion.div>
          <motion.div {...reveal} className="editorial-copy">
            <p className="lead">
              The right alcohol treatment centre might be close to home. It
              might also be the place that gives you enough distance to breathe.
            </p>
            <p>
              People travel across the UK for residential alcohol rehab—for
              privacy, specialist care or a clean break from routines that have
              become hard to change. What matters most is finding a place where
              you feel safe enough to be honest and supported enough to begin.
            </p>
            <a className="text-link" href={contactUrl}>
              Talk through your options <ArrowRight size={17} />
            </a>
          </motion.div>
          <motion.figure {...reveal} className="editorial-landscape">
            <Image
              src="/image-bank/countryside-path.jpg"
              alt="A sunlit path crossing open British countryside"
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 75vw"
            />
            <figcaption>Sometimes a change of place helps create a change of perspective.</figcaption>
          </motion.figure>
          <motion.blockquote {...reveal} className="intro-pullquote">
            “Recovery isn&apos;t about where you live. It&apos;s about taking the first step.”
          </motion.blockquote>
        </div>
      </section>

      <section className="residential-section">
        <div className="page-shell residential-grid">
          <motion.div {...reveal} className="residential-image">
            <Image
              src="/image-bank/therapy-room-chairs.jpg"
              alt="A warm, private therapy room with two comfortable chairs"
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <span>Room to reset</span>
          </motion.div>
          <motion.div {...reveal} className="residential-copy">
            <SectionLabel>Why people choose residential rehab</SectionLabel>
            <h2>A pause from the noise. A structure for what comes next.</h2>
            <p>
              Residential alcohol rehabilitation offers something everyday
              life often cannot: protected time. Time away from alcohol,
              familiar triggers and the exhausting pressure to appear fine.
            </p>
            <div className="residential-notes">
              <div><span>01</span><b>Round-the-clock support</b><p>Care is close at hand while your body and mind begin to settle.</p></div>
              <div><span>02</span><b>Therapeutic depth</b><p>Individual and group work help turn insight into lasting change.</p></div>
              <div><span>03</span><b>A recovery community</b><p>Being understood by others can make a lonely experience feel shared.</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="statistics-section">
        <div className="page-shell statistics-header">
          <motion.div {...reveal}>
            <SectionLabel>A national picture</SectionLabel>
            <h2>Asking for help is more common than it can feel.</h2>
          </motion.div>
          <motion.blockquote {...reveal}>
            “Help is available wherever you are in the UK.”
          </motion.blockquote>
        </div>
        <div className="page-shell statistics-grid">
          <motion.article {...reveal}>
            <strong>94,173</strong>
            <p>adults received treatment in England for alcohol problems alone.</p>
            <motion.span className="stat-rule" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease }} />
          </motion.article>
          <motion.article {...reveal}>
            <strong>57%</strong>
            <p>of people starting drug or alcohol treatment self-referred, or were referred by family or friends.</p>
            <motion.span className="stat-rule" initial={{ scaleX: 0 }} whileInView={{ scaleX: .57 }} viewport={{ once: true }} transition={{ duration: 1, delay: .1, ease }} />
          </motion.article>
          <motion.article {...reveal}>
            <strong>47%</strong>
            <p>of people leaving drug and alcohol treatment completed successfully, free from dependence.</p>
            <motion.span className="stat-rule" initial={{ scaleX: 0 }} whileInView={{ scaleX: .47 }} viewport={{ once: true }} transition={{ duration: 1, delay: .2, ease }} />
          </motion.article>
          <motion.article {...reveal}>
            <strong>72%</strong>
            <p>of adults starting treatment reported a mental health treatment need.</p>
            <motion.span className="stat-rule" initial={{ scaleX: 0 }} whileInView={{ scaleX: .72 }} viewport={{ once: true }} transition={{ duration: 1, delay: .3, ease }} />
          </motion.article>
        </div>
        <div className="page-shell">
          <motion.div
            {...reveal}
            className="statistics-highlights"
          >
            <div className="statistics-highlight">
              <svg viewBox="0 0 110 110" aria-hidden="true">
                <circle cx="55" cy="55" r="44" fill="none" stroke="rgba(17,24,39,0.1)" strokeWidth="9" />
                <g transform="rotate(-90 55 55)">
                  <motion.circle
                    cx="55" cy="55" r="44"
                    fill="none"
                    stroke="#f19885"
                    strokeWidth="9"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 0.47 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
                  />
                </g>
                <text x="55" y="51" textAnchor="middle" fontSize="19" fontWeight="700" fill="#111827" fontFamily="inherit">47%</text>
                <text x="55" y="65" textAnchor="middle" fontSize="9.5" fill="#7a8189" fontFamily="inherit">completed</text>
              </svg>
              <p>
                left treatment successfully, free from alcohol or drug dependence
              </p>
            </div>
            <div className="statistics-highlight-divider" aria-hidden="true" />
            <div className="statistics-highlight">
              <svg viewBox="0 0 110 110" aria-hidden="true">
                <circle cx="55" cy="55" r="44" fill="none" stroke="rgba(17,24,39,0.1)" strokeWidth="9" />
                <g transform="rotate(-90 55 55)">
                  <motion.circle
                    cx="55" cy="55" r="44"
                    fill="none"
                    stroke="#f19885"
                    strokeWidth="9"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 0.57 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                  />
                </g>
                <text x="55" y="51" textAnchor="middle" fontSize="19" fontWeight="700" fill="#111827" fontFamily="inherit">57%</text>
                <text x="55" y="65" textAnchor="middle" fontSize="9.5" fill="#7a8189" fontFamily="inherit">self-referred</text>
              </svg>
              <p>
                self-referred or were referred by family or friends — no GP required
              </p>
            </div>
          </motion.div>
        </div>
        <div className="page-shell statistics-source">
          England, April 2023 to March 2024.{" "}
          <a href="https://www.gov.uk/government/statistics/substance-misuse-treatment-for-adults-statistics-2023-to-2024/adult-substance-misuse-treatment-statistics-2023-to-2024-report">
            Office for Health Improvement &amp; Disparities
          </a>
        </div>
      </section>

      <section id="journey" className="journey-section">
        <div className="page-shell">
          <div className="journey-header">
            <motion.div {...reveal}>
              <SectionLabel>The journey through recovery</SectionLabel>
              <h2>There is no single leap.<br />There are a series of steps.</h2>
            </motion.div>
            <motion.p {...reveal}>
              Every person moves differently, but a good treatment journey
              should make the next step feel possible.
            </motion.p>
          </div>
          <div className="journey-list">
            {journey.map(({ number, title, text, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: index % 2 ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.04, ease }}
                className="journey-step"
              >
                <span className="journey-number">{number}</span>
                <span className="journey-icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                {index < journey.length - 1 && <ChevronRight className="journey-arrow" />}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="location-section section-pad">
        <div className="page-shell">
          <motion.div {...reveal} className="location-title">
            <SectionLabel>Does location matter?</SectionLabel>
            <h2>Close enough to feel connected.<br />Far enough to feel different.</h2>
          </motion.div>
          <div className="location-stories">
            <motion.article {...reveal} className="location-story location-home">
              <div className="location-photo">
                <Image src="/image-bank/father-son-walking.jpg" alt="A father and son walking together through woodland" fill className="object-cover" sizes="(max-width: 900px) 100vw, 48vw" />
              </div>
              <div className="story-copy">
                <span>Stay close</span>
                <h3>Familiar faces can become part of the plan.</h3>
                <p>Being near home can make family involvement, visits and the transition into aftercare feel more natural.</p>
              </div>
            </motion.article>
            <motion.article {...reveal} className="location-story location-away">
              <div className="location-photo">
                <Image src="/image-bank/walking-meadow.jpg" alt="A woman walking alone through a meadow in evening light" fill className="object-cover" sizes="(max-width: 900px) 100vw, 43vw" />
              </div>
              <div className="story-copy">
                <span>Travel for treatment</span>
                <h3>Distance can offer privacy—and perspective.</h3>
                <p>A new setting can interrupt old habits, protect confidentiality and create space to focus entirely on recovery.</p>
              </div>
            </motion.article>
          </div>
          <div className="location-footer">
            <p><Users size={18} /> Family involvement can be planned wherever treatment takes place.</p>
            <p><ShieldCheck size={18} /> Privacy is not an extra. It is part of good care.</p>
          </div>
        </div>
      </section>

      <section className="locations-atlas">
        <div className="page-shell atlas-header">
          <motion.div {...reveal}>
            <SectionLabel>Featured locations</SectionLabel>
            <h2>A guide that travels across the UK.</h2>
          </motion.div>
          <motion.div {...reveal} className="atlas-intro">
            <MapPinned />
            <p>
              Your search may begin with “alcohol rehab near me”, but it does
              not have to end there. Compare the character of a place as well
              as the care available within it.
            </p>
          </motion.div>
        </div>
        <div className="page-shell atlas-grid">
          {locations.map((location, index) => (
            <motion.article
              key={location.city}
              {...reveal}
              transition={{ duration: .65, delay: index * .045, ease }}
              className={`atlas-card ${location.className}`}
            >
              <Image
                src={location.image}
                alt={location.alt}
                fill
                className="object-cover"
                sizes="(max-width: 800px) 100vw, 50vw"
              />
              <div className="atlas-scrim" />
              <div className="atlas-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span><MapPin /> {location.region}</span>
              </div>
              <div className="atlas-card-copy">
                <h3>{location.city}</h3>
                <p>{location.note}</p>
                <a href={contactUrl}>Explore your options <ArrowRight /></a>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.blockquote {...reveal} className="page-shell atlas-quote">
          “Recovery isn&apos;t defined by where you live. It&apos;s defined by the support you receive.”
        </motion.blockquote>
      </section>

      <section className="factors-section">
        <div className="page-shell factors-grid">
          <div className="factors-sticky">
            <SectionLabel>Factors to consider</SectionLabel>
            <h2>Look beyond the brochure.</h2>
            <p>
              The best private alcohol rehab in the UK is not necessarily the
              grandest. Look for a team that listens carefully, answers plainly
              and can explain how its care will meet your needs.
            </p>
            <div className="factors-image">
              <Image src="/image-bank/woodland-therapy.jpg" alt="A private therapeutic conversation during a woodland walk" fill className="object-cover" sizes="(max-width: 900px) 100vw, 34vw" />
            </div>
          </div>
          <div className="factors-list">
            {factors.map((factor) => (
              <motion.article key={factor.title} {...reveal}>
                <span>{factor.number}</span>
                <div><h3>{factor.title}</h3><p>{factor.text}</p></div>
                <ArrowRight />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-notes-section">
        <div className="page-shell editorial-notes-heading">
          <SectionLabel>Did you know?</SectionLabel>
          <motion.h2 {...reveal}>The details around treatment can shape how recovery feels.</motion.h2>
        </div>
        <div className="page-shell editorial-notes">
          {editorialNotes.map(({ label, title, text, icon: Icon, image, alt }, index) => (
            <motion.article
              key={title}
              {...reveal}
              className={`editorial-note editorial-note-${index + 1}`}
            >
              <div className="editorial-note-image">
                <Image src={image} alt={alt} fill className="object-cover" sizes="(max-width: 800px) 100vw, 50vw" />
              </div>
              <div className="editorial-note-body">
              <div className="editorial-note-mark"><Icon /></div>
              <span>{label}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <Image src="/image-bank/coastal-walk.jpg" alt="A person walking along an open coastline" fill className="object-cover" sizes="100vw" />
        <div className="quote-overlay" />
        <motion.div {...reveal} className="quote-inner page-shell">
          <Sparkles />
          <blockquote>
            “You do not have to see the whole road. You only need enough support
            for the next step.”
          </blockquote>
          <p>A confidential conversation can be enough for today.</p>
          <a className="button button-brand" href={phoneHref}>Call {phoneNumber}<ArrowRight size={17} /></a>
        </motion.div>
      </section>

      <section className="faq-section section-pad">
        <div className="page-shell faq-grid">
          <motion.div {...reveal} className="faq-intro">
            <SectionLabel>Common questions</SectionLabel>
            <h2>Questions people often carry quietly.</h2>
            <p>Clear, human answers about alcohol rehab in the UK—without pressure, judgement or jargon.</p>
          </motion.div>
          <motion.div {...reveal}>
            <Accordion type="single" collapsible className="faq-accordion">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`faq-${index}`}>
                  <AccordionTrigger><span>{String(index + 1).padStart(2, "0")}</span>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section id="guides" className="guides-section section-pad">
        <div className="page-shell guides-header">
          <motion.div {...reveal}>
            <SectionLabel>Explore more recovery guides</SectionLabel>
            <h2>Read at your own pace.</h2>
          </motion.div>
          <motion.p {...reveal}>Thoughtful reading on treatment, family support, mental health and building a life beyond alcohol.</motion.p>
        </div>
        <div className="page-shell guides-grid">
          {guides.map((guide, index) => (
            <motion.a
              key={guide.title}
              {...reveal}
              href={guide.href}
              className={`guide-card guide-${guide.size}`}
            >
              <div className="guide-image">
                <Image src={guide.image} alt={guide.alt} fill className="object-cover" sizes="(max-width: 700px) 100vw, 50vw" />
              </div>
              <div className="guide-copy">
                <div><span>{guide.category}</span><small>{String(index + 1).padStart(2, "0")}</small></div>
                <h3>{guide.title}</h3>
                <p>{guide.summary}</p>
                <span className="read-more">Read the guide <ArrowRight size={15} /></span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="page-shell final-cta-grid">
          <motion.div {...reveal}>
            <SectionLabel>When you are ready</SectionLabel>
            <h2>You do not need to have the words.</h2>
          </motion.div>
          <motion.div {...reveal} className="final-cta-copy">
            <p>
              Tell us as much or as little as you can. We will listen, explain
              the options and help you find a sensible next step.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="button button-dark" href={phoneHref}><Phone size={17} /> Call {phoneNumber}</a>
              <a className="button button-outline" href={contactUrl}>Send a private message <ArrowRight size={17} /></a>
            </div>
            <div className="cta-promises">
              <span><Check /> Confidential</span>
              <span><Check /> No obligation</span>
              <span><Check /> Compassionate support</span>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-top">
          <Image src="/mainlogo.png" alt="The Wellbourne Clinic" width={1480} height={218} className="h-auto w-[230px] brightness-0 invert" />
          <p>The UK&apos;s clear, compassionate guide to alcohol rehab.</p>
          <a href={phoneHref}>{phoneNumber}</a>
        </div>
        <div className="page-shell footer-bottom">
          <span>© {new Date().getFullYear()} The Wellbourne Clinic</span>
          <div><a href={mainSiteUrl}>Privacy</a><a href={mainSiteUrl}>Terms</a><a href={mainSiteUrl}>CQC information</a></div>
        </div>
      </footer>

      <LiveChatWidget license="19162658" visibility="minimized" />
    </main>
  );
}
