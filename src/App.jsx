import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Menu, X, Send, ClipboardList, ShieldCheck,
  Gauge, Zap, Server, TrendingUp, Landmark, Coins, Globe2, Bitcoin,
  ChevronDown, CheckCircle2, ChartNoAxesCombined, AlertTriangle
} from "lucide-react";

const TELEGRAM = "https://t.me/globalexhange";
const APPLY = "https://surl.li/cwvkae";

const markets = [
  { name: "NSE", detail: "Equity, futures & options", Icon: Landmark },
  { name: "MCX", detail: "Commodity futures", Icon: Coins },
  { name: "COMEX", detail: "Gold & silver futures", Icon: Coins },
  { name: "US Stocks", detail: "Global equities, including Apple and Tesla", Icon: Globe2 },
  { name: "Crypto", detail: "Digital assets such as BTC and ETH", Icon: Bitcoin },
  { name: "XAUUSD", detail: "Gold vs US dollar", Icon: TrendingUp }
];

const faqs = [
  ["What is Global Exchange?", "Global Exchange is the business name presented in this advertisement. Contact the team to obtain verified information about the legal entity, service provider, platform and applicable regulatory status before proceeding."],
  ["Which trading markets are mentioned?", "The advertising material mentions NSE, MCX, COMEX, US stocks, crypto and XAUUSD. Availability and eligibility depend on the product, provider and applicable laws."],
  ["What is the minimum deposit?", "The advertisement states a minimum deposit of ₹2,00,000. Confirm the amount, recipient, funding method, charges, withdrawal terms and eligibility independently before transferring any money."],
  ["How can I contact Global Exchange?", "Use the Chat on Telegram button to contact @globalexhange."],
  ["How can I submit an application?", "Select Apply Now to open the external application/enquiry form. Submission does not guarantee approval or account activation."],
  ["What payment options are available?", "Ask the business for written, verifiable payment instructions. Do not transfer funds to an intermediary or wallet unless you have independently verified the recipient and legal permissibility."],
  ["What are the risks associated with trading?", "Trading involves risk and may result in partial or complete loss of capital. Leverage can magnify losses. Understand the product, provider, fees and risks before participating."],
  ["Is profit guaranteed?", "No. Trading involves market risk. There is no guarantee of profits or capital protection."]
];

function CTA({ apply = false, compact = false }) {
  return apply
    ? <a className={`button button-outline ${compact ? "compact" : ""}`} href={APPLY} target="_blank" rel="noopener noreferrer" onClick={() => track("Lead")}> <ClipboardList size={18}/> Apply Now <ArrowUpRight size={17}/> </a>
    : <a className={`button button-primary ${compact ? "compact" : ""}`} href={TELEGRAM} target="_blank" rel="noopener noreferrer" onClick={() => track("Contact")}> <Send size={18}/> Chat on Telegram <ArrowUpRight size={17}/> </a>;
}

function track(eventName) {
  // Add your Meta Pixel ID in the configuration section below.
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName);
  }
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="header">
    <a className="brand" href="#top" onClick={close} aria-label="Global Exchange home">
      <span className="brand-mark"><ChartNoAxesCombined size={27}/></span>
      <span><strong>GLOBAL <b>EXCHANGE</b></strong><small>TRADE <i>•</i> INVEST <i>•</i> GROW</small></span>
    </a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    <nav className={open ? "nav nav-open" : "nav"}>
      <a href="#markets" onClick={close}>Markets</a><a href="#technology" onClick={close}>Technology</a><a href="#process" onClick={close}>How it works</a><a href="#faq" onClick={close}>FAQs</a>
      <CTA compact/>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero section-wrap" id="top">
    <div className="hero-copy">
      <div className="eyebrow"><span className="pulse"/> MARKET ACCESS & ENQUIRY</div>
      <h1>Trading luck ka game nahi, <em>knowledge</em> ka game hai.</h1>
      <p className="hero-lead">Explore trading opportunities across multiple market categories with a technology-focused trading environment.</p>
      <div className="hero-points">
        <span><CheckCircle2/> Multiple market categories</span>
        <span><CheckCircle2/> Technology-focused environment</span>
        <span><CheckCircle2/> Enquiry & application assistance</span>
      </div>
      <div className="hero-actions"><CTA/><CTA apply/></div>
      <p className="micro-note">Review provider details, eligibility, fees and risks before participating.</p>
    </div>
    <div className="hero-art" aria-label="Abstract gold bull and market chart illustration">
      <div className="art-glow"/>
      <div className="chart-grid"/>
      <div className="candles">{[35,52,43,67,58,80,72,95,84,110,99,126].map((h,i)=><span key={i} style={{height:`${h}px`,animationDelay:`${i*0.08}s`}}/>)}</div>
      <div className="bull-orbit orbit-one"/><div className="bull-orbit orbit-two"/>
      <div className="bull-symbol">♉</div>
      <div className="art-label"><span>GLOBAL MARKETS</span><strong>TRADE • INVEST • GROW</strong></div>
      <div className="art-corner">KNOWLEDGE<br/>BEFORE<br/>YOU TRADE</div>
    </div>
  </section>;
}

function Deposit() {
  return <section className="deposit section-wrap">
    <div className="deposit-icon"><Coins size={42}/></div>
    <div className="deposit-copy"><span className="eyebrow">ADVERTISED MINIMUM DEPOSIT</span><strong>₹2,00,000</strong><p>As stated in the advertising creative</p></div>
    <div className="deposit-note"><AlertTriangle size={19}/><span>Confirm eligibility, charges, funding recipient, withdrawal terms and all conditions independently before transferring funds.</span></div>
  </section>;
}

function Technology() {
  const items = [
    {Icon: Zap, title:"High speed", text:"Performance information to be confirmed with the provider."},
    {Icon: Gauge, title:"Low latency", text:"Ask for technical specifications and service details."},
    {Icon: Server, title:"Platform stability", text:"Review the platform, provider and service terms."}
  ];
  return <section className="section section-wrap" id="technology">
    <div className="section-heading"><span className="eyebrow">TRADING INFRASTRUCTURE</span><h2>Technology for a <em>seamless experience.</em></h2><p>Understand the technology, execution arrangements and service provider before applying.</p></div>
    <div className="feature-grid">{items.map(({Icon,title,text})=><motion.article whileHover={{y:-5}} className="feature-card" key={title}><div className="icon-box"><Icon/></div><h3>{title}</h3><p>{text}</p></motion.article>)}</div>
    <p className="fine-print">The advertising material refers to Meta and ARK servers. Verify the exact provider relationship and any relevant permissions. This website does not imply endorsement or certification by Meta Platforms, Inc.</p>
  </section>;
}

function Markets() {
  return <section className="section section-wrap" id="markets">
    <div className="section-heading"><span className="eyebrow">MARKET CATEGORIES</span><h2>Explore multiple <em>trading markets.</em></h2><p>These are the market categories mentioned in the advertisement. Actual availability is subject to provider access, eligibility and applicable regulations.</p></div>
    <div className="market-grid">{markets.map(({name,detail,Icon},i)=><motion.article className="market-card" key={name} whileHover={{y:-6}} transition={{duration:.2}}><span className="market-number">0{i+1}</span><div className="market-icon"><Icon/></div><h3>{name}</h3><p>{detail}</p><span className="card-line"/></motion.article>)}</div>
    <div className="inline-cta"><div><strong>Want to understand the available categories?</strong><span>Ask the team about eligibility and product details.</span></div><CTA/></div>
  </section>;
}

function Conditions() {
  return <section className="conditions section-wrap">
    <div className="conditions-icon"><ShieldCheck size={40}/></div>
    <div><span className="eyebrow">BEFORE YOU PARTICIPATE</span><h2>Understand your trading conditions.</h2><p>Review applicable leverage, margin requirements, brokerage, charges, funding and withdrawal terms, and tax obligations. Never assume a particular margin or tax treatment without independent verification.</p></div>
  </section>;
}

function WhyUs() {
  const cards = [
    ["Technology-focused infrastructure","Ask for verifiable platform and provider information."],
    ["Multiple market categories","Review which products are actually available to you."],
    ["Enquiry assistance","Discuss your questions with the business team."],
    ["Transparent conditions","Request written details of charges, risks and terms."]
  ];
  return <section className="section section-wrap">
    <div className="section-heading"><span className="eyebrow">WHAT TO REVIEW</span><h2>Make informed <em>decisions.</em></h2><p>Get clear answers and verify important details before taking the next step.</p></div>
    <div className="why-grid">{cards.map(([t,d],i)=><div className="why-card" key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
  </section>;
}

function Process() {
  const steps = [["01","Connect with us","Discuss your questions through Telegram."],["02","Submit an application","Use the external application/enquiry form."],["03","Review the requirements","Check eligibility, platform details, fees and risks before deciding."]];
  return <section className="section section-wrap process" id="process">
    <div className="section-heading"><span className="eyebrow">THE NEXT STEPS</span><h2>How to <em>get started.</em></h2></div>
    <div className="steps">{steps.map(([n,t,d])=><article className="step" key={n}><span className="step-num">{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div>
  </section>;
}

function FAQ() {
  const [active,setActive] = useState(0);
  return <section className="section section-wrap faq" id="faq">
    <div className="section-heading"><span className="eyebrow">HELP & INFORMATION</span><h2>Frequently asked <em>questions.</em></h2></div>
    <div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${active===i?"active":""}`} key={q}><button onClick={()=>setActive(active===i?-1:i)} aria-expanded={active===i}><span>{q}</span><ChevronDown/></button>{active===i&&<p>{a}</p>}</div>)}</div>
  </section>;
}

function FinalCTA() {
  return <section className="final-cta section-wrap" id="apply">
    <div className="final-orb"/>
    <span className="eyebrow">GLOBAL EXCHANGE</span>
    <h2>Ready to explore <em>trading opportunities?</em></h2>
    <p>Connect with the team to understand the services, trading conditions and application process.</p>
    <div className="hero-actions centered"><CTA/><CTA apply/></div>
    <small>Application submission does not guarantee approval, account activation or trading results.</small>
  </section>;
}

function Footer() {
  return <footer className="footer section-wrap">
    <div className="footer-top"><a className="brand" href="#top"><span className="brand-mark"><ChartNoAxesCombined size={25}/></span><span><strong>GLOBAL <b>EXCHANGE</b></strong><small>TRADE <i>•</i> INVEST <i>•</i> GROW</small></span></a><a href={TELEGRAM} target="_blank" rel="noopener noreferrer">Telegram: @globalexhange <ArrowUpRight size={15}/></a></div>
    <div className="risk"><strong><AlertTriangle size={16}/> RISK DISCLOSURE</strong><p>Trading in financial instruments involves risk and may result in partial or complete loss of capital. Leverage can magnify both gains and losses. Independently verify the provider's regulatory status, product availability, applicable laws, fees and trading conditions. Past performance does not guarantee future results.</p></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Global Exchange. All rights reserved.</span><span>Contact method: Telegram</span></div>
  </footer>;
}

export default function App() {
  return <>
    <Header/><main><Hero/><Deposit/><Technology/><Markets/><Conditions/><WhyUs/><Process/><FAQ/><FinalCTA/></main><Footer/>
    <div className="mobile-bar"><CTA compact/><CTA apply compact/></div>
  </>;
}