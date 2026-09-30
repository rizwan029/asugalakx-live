/* ============================================================
   ASUGALAKX — Centralized mock data (window.ASGX_DATA)
   EVERY market figure on this site is fictional sample data.
   Never present these numbers as real market prices.
   ============================================================ */
(function () {
  "use strict";

  window.ASGX_DATA = {
    meta: {
      demoLabel: "DEMO DATA",
      proposedLabel: "PROPOSED / DEVELOPMENT STAGE",
      devLabel: "IN DEVELOPMENT",
      brand: "ASUGALAKX",
      tagline: "TRADE × LEARN × GROW",
      disclaimer: "ASUGALAKX provides information, research and educational content. Nothing on this website constitutes financial advice or a guarantee of investment performance.",
      dataNote: "All market figures shown are fictional sample data for demonstration purposes only."
    },

    /* ---------- Market assets ----------
       category: crypto | stocks | forex | commodities
       status:   "ACTIVE" (demo feed marker)                       */
    assets: [
      { symbol: "BTC", name: "Bitcoin", category: "crypto", price: 97482.50, change24h: 2.34, volume: "48.2B", marketCap: "1.92T", status: "ACTIVE",
        spark: [94800, 95120, 94900, 95600, 95300, 96100, 95800, 96500, 96200, 96900, 97100, 97482] },
      { symbol: "ETH", name: "Ethereum", category: "crypto", price: 3521.18, change24h: 1.87, volume: "22.4B", marketCap: "423.6B", status: "ACTIVE",
        spark: [3440, 3455, 3448, 3470, 3462, 3485, 3478, 3495, 3488, 3505, 3512, 3521] },
      { symbol: "SOL", name: "Solana", category: "crypto", price: 214.36, change24h: 3.92, volume: "8.1B", marketCap: "104.2B", status: "ACTIVE",
        spark: [205, 207, 206, 209, 208, 211, 210, 212, 211, 213, 214, 214.36] },
      { symbol: "BNB", name: "BNB Chain", category: "crypto", price: 692.44, change24h: 0.86, volume: "2.4B", marketCap: "102.8B", status: "ACTIVE",
        spark: [685, 687, 686, 688, 687, 689, 688, 690, 689, 691, 692, 692.44] },
      { symbol: "SPX", name: "S&P 500", category: "stocks", price: 5987.22, change24h: 0.42, volume: "—", marketCap: "—", status: "ACTIVE",
        spark: [5950, 5958, 5955, 5962, 5960, 5968, 5965, 5972, 5970, 5978, 5982, 5987] },
      { symbol: "NDX", name: "Nasdaq 100", category: "stocks", price: 21436.88, change24h: 0.61, volume: "—", marketCap: "—", status: "ACTIVE",
        spark: [21280, 21300, 21290, 21320, 21310, 21350, 21340, 21370, 21360, 21400, 21420, 21436] },
      { symbol: "NVDA", name: "NVIDIA Corp", category: "stocks", price: 138.42, change24h: 2.15, volume: "31.2B", marketCap: "3.41T", status: "ACTIVE",
        spark: [135, 136, 135.5, 136.2, 136, 137, 136.8, 137.5, 137.2, 137.9, 138.1, 138.42] },
      { symbol: "AAPL", name: "Apple Inc", category: "stocks", price: 232.87, change24h: -0.34, volume: "18.6B", marketCap: "3.52T", status: "ACTIVE",
        spark: [234, 233.8, 233.5, 233.2, 233.6, 233.1, 232.9, 233.2, 232.8, 232.6, 232.9, 232.87] },
      { symbol: "EUR/USD", name: "Euro / US Dollar", category: "forex", price: 1.0842, change24h: -0.12, volume: "—", marketCap: "—", status: "ACTIVE",
        spark: [1.0858, 1.0855, 1.0852, 1.0850, 1.0848, 1.0846, 1.0848, 1.0845, 1.0843, 1.0844, 1.0842, 1.0842] },
      { symbol: "GBP/USD", name: "British Pound / US Dollar", category: "forex", price: 1.2718, change24h: 0.08, volume: "—", marketCap: "—", status: "ACTIVE",
        spark: [1.2705, 1.2708, 1.2710, 1.2709, 1.2712, 1.2711, 1.2714, 1.2713, 1.2715, 1.2716, 1.2717, 1.2718] },
      { symbol: "USD/JPY", name: "US Dollar / Japanese Yen", category: "forex", price: 149.62, change24h: 0.24, volume: "—", marketCap: "—", status: "ACTIVE",
        spark: [149.1, 149.2, 149.25, 149.3, 149.28, 149.4, 149.38, 149.5, 149.48, 149.55, 149.6, 149.62] },
      { symbol: "XAU", name: "Gold (Spot)", category: "commodities", price: 2648.30, change24h: 0.58, volume: "—", marketCap: "—", status: "ACTIVE",
        spark: [2630, 2633, 2631, 2636, 2634, 2639, 2637, 2642, 2640, 2644, 2646, 2648.3] },
      { symbol: "XAG", name: "Silver (Spot)", category: "commodities", price: 31.42, change24h: 1.12, volume: "—", marketCap: "—", status: "ACTIVE",
        spark: [31.0, 31.08, 31.05, 31.15, 31.12, 31.2, 31.18, 31.28, 31.25, 31.33, 31.38, 31.42] },
      { symbol: "BRENT", name: "Brent Crude Oil", category: "commodities", price: 74.85, change24h: -0.64, volume: "—", marketCap: "—", status: "ACTIVE",
        spark: [75.4, 75.3, 75.2, 75.1, 75.15, 75.0, 74.95, 74.9, 74.95, 74.88, 74.86, 74.85] }
    ],

    /* ---------- Today's brief (homepage) ---------- */
    brief: [
      { id: "brief-1", tag: "CRYPTO", title: "Bitcoin consolidates below the 98k zone",
        text: "Spot ETF flows steadied after two volatile sessions. Order-book depth thinned into the weekend — context suggests patience over positioning." },
      { id: "brief-2", tag: "MACRO", title: "Fed stays data-dependent",
        text: "Officials reiterated a meeting-by-meeting stance. Rate expectations shifted only modestly; the dollar index held its recent range." },
      { id: "brief-3", tag: "STOCKS", title: "Earnings breadth improves",
        text: "Two-thirds of reporting S&P constituents beat on revenue so far. Leadership is rotating beyond mega-cap tech into industrials." },
      { id: "brief-4", tag: "FOREX", title: "EUR/USD pinned ahead of ECB",
        text: "The pair trades in a tight 60-pip band. Options positioning points to event risk rather than a directional break." },
      { id: "brief-5", tag: "COMMODITIES", title: "Gold demand supported by official buying",
        text: "Central-bank purchases continue to underpin the bid. Physical premiums in Asia remain firm versus London spot." }
    ],

    /* ---------- News ---------- */
    news: [
      { slug: "bitcoin-etf-flows-stabilize-key-levels", title: "Bitcoin ETF Flows Stabilize as Price Holds Key Levels",
        category: "crypto", date: "2026-09-29", source: "ASUGALAKX Desk", author: "Research Team",
        excerpt: "Net inflows returned after a choppy week, and spot price held above short-term support. Derivatives funding reset toward neutral." },
      { slug: "ethereum-upgrade-schedule-confirmed", title: "Ethereum Core Developers Confirm Next Upgrade Schedule",
        category: "crypto", date: "2026-09-28", source: "ASUGALAKX Desk", author: "Research Team",
        excerpt: "The upgrade focuses on scalability improvements and fee-market refinements. Testnet timelines were published alongside the announcement." },
      { slug: "fed-data-dependent-policy-path", title: "Federal Reserve Signals Data-Dependent Policy Path",
        category: "macro", date: "2026-09-28", source: "ASUGALAKX Desk", author: "Macro Team",
        excerpt: "Policymakers emphasized incoming data over preset paths. Markets trimmed aggressive cut pricing for the next two meetings." },
      { slug: "sp500-earnings-season-broadens", title: "S&P 500 Earnings Season Broadens Beyond Mega-Cap Tech",
        category: "stocks", date: "2026-09-27", source: "ASUGALAKX Desk", author: "Equities Team",
        excerpt: "Industrials and financials posted the strongest surprises so far, while forward guidance remains the key variable for multiples." },
      { slug: "eurusd-consolidates-before-ecb", title: "EUR/USD Consolidates Ahead of ECB Meeting",
        category: "forex", date: "2026-09-27", source: "ASUGALAKX Desk", author: "FX Team",
        excerpt: "Implied volatility picked up into the decision. Analysts see communication tone as the main driver rather than the rate itself." },
      { slug: "gold-demand-central-bank-buying", title: "Gold Demand Supported by Continued Central-Bank Buying",
        category: "macro", date: "2026-09-26", source: "ASUGALAKX Desk", author: "Commodities Team",
        excerpt: "Official-sector purchases added to reserves for a third straight month, offsetting softer jewelry demand in key regions." },
      { slug: "solana-defi-activity-expands", title: "Solana DeFi Activity Expands as Usage Metrics Climb",
        category: "web3", date: "2026-09-26", source: "ASUGALAKX Desk", author: "Web3 Team",
        excerpt: "Daily active addresses and DEX volumes trended higher this month. Developers point to lower fees as a driver of experimentation." },
      { slug: "web3-wallet-custody-best-practices", title: "Web3 Security Basics: Wallet Custody Best Practices",
        category: "web3", date: "2026-09-25", source: "ASUGALAKX Academy", author: "Education Team",
        excerpt: "Seed-phrase hygiene, hardware wallets, and approval management — a practical checklist for protecting on-chain assets." }
    ],

    /* ---------- Analysis ---------- */
    analysis: [
      { slug: "bitcoin-market-structure-mid-cycle", title: "Bitcoin Market Structure: A Mid-Cycle Review",
        category: "market", date: "2026-09-29",
        summary: "Price action, positioning, and on-chain signals suggest a market digesting gains rather than reversing trend. Context favors monitoring liquidity over predicting direction.",
        context: "After a strong multi-month advance, Bitcoin entered a consolidation phase. Spot ETF flows, which drove much of the earlier move, normalized. Funding rates across major derivatives venues reset from elevated to neutral levels, and open interest declined modestly — historically consistent with a market working off leverage rather than distributing supply.",
        keyData: [
          { label: "Trend regime", value: "Consolidation within uptrend" },
          { label: "Derivatives funding", value: "Neutral (reset from elevated)" },
          { label: "ETF flow trend", value: "Stabilizing after volatility" },
          { label: "Volatility regime", value: "Compressing" }
        ],
        scenario: [
          { name: "Base scenario", description: "Range-bound trade continues while liquidity rebuilds; a break of range boundaries would need a volume-backed confirmation." },
          { name: "Alternative scenario", description: "A deeper retracement toward prior demand zones if macro risk-off accelerates; such moves have historically attracted spot bids." }
        ],
        risks: ["A sharp macro shock could override technical structure.", "Thin weekend liquidity may exaggerate moves in either direction.", "Regulatory headlines remain a wildcard for sentiment."],
        conclusion: "The weight of evidence points to digestion, not distribution. Patience and position sizing matter more than prediction here." },
      { slug: "sp500-breadth-technical-context", title: "S&P 500 Breadth: Technical Context Beyond the Headline",
        category: "technical", date: "2026-09-28",
        summary: "Index-level strength masks improving internals: advancing issues and sector rotation point to a healthier market than the headline suggests.",
        context: "Headline index performance has been driven by a narrow cohort for much of the year, but recent weeks show participation broadening. The advance-decline line made a new high, and equal-weighted versions of the index outperformed — a pattern that has historically accompanied durable advances rather than late-cycle exhaustion.",
        keyData: [
          { label: "Advance-decline line", value: "New high" },
          { label: "Equal-weight vs cap-weight", value: "Outperforming (2 weeks)" },
          { label: "Sectors above 50-day MA", value: "8 of 11" },
          { label: "Earnings beat rate", value: "~67% so far" }
        ],
        scenario: [
          { name: "Base scenario", description: "Breadth improvement supports a grind higher, with pullbacks finding buyers as rotation continues." },
          { name: "Alternative scenario", description: "A hawkish macro surprise could compress multiples regardless of internals; breadth alone does not immunize against valuation resets." }
        ],
        risks: ["Valuations remain above long-run averages.", "Concentration in a few names still elevates single-stock event risk.", "Forward guidance cuts could reverse breadth gains quickly."],
        conclusion: "Internals are improving — a constructive, if not euphoric, backdrop. Respect the trend, size for the volatility." },
      { slug: "dollar-cycle-emerging-markets", title: "Dollar Cycle Implications for Emerging Markets",
        category: "macro", date: "2026-09-27",
        summary: "A plateauing dollar index changes the calculus for EM assets: carry becomes more attractive, but differentiation across countries matters more than the beta trade.",
        context: "The US dollar's multi-year advance has stalled as rate differentials narrowed. Historically, dollar plateaus have coincided with EM outperformance — but the dispersion across EM economies is wide. Current-account strength, reserve coverage, and real-rate differentials separate beneficiaries from laggards.",
        keyData: [
          { label: "DXY regime", value: "Range-bound after advance" },
          { label: "US–EM real rate gap", value: "Narrowing" },
          { label: "EM FX volatility", value: "Below 3-year average" },
          { label: "Key variable", value: "Country-level fundamentals" }
        ],
        scenario: [
          { name: "Base scenario", description: "Selective EM strength where external balances are solid; broad beta rally requires a decisive dollar downtrend." },
          { name: "Alternative scenario", description: "A renewed dollar bid on risk-off flows would pressure high-beta EM currencies first." }
        ],
        risks: ["Geopolitical shocks can trigger sudden dollar demand.", "Commodity price swings hit exporter and importer EM unevenly.", "Domestic political calendars add idiosyncratic risk."],
        conclusion: "This is a stock-picker's EM environment, not an index trade. Fundamentals over narratives." },
      { slug: "ethereum-fee-dynamics-research", title: "Ethereum Fee Dynamics and Network Usage: Research Notes",
        category: "research", date: "2026-09-26",
        summary: "Fee data reveals how network demand actually behaves: usage is bursty, concentrated, and increasingly driven by L2 settlement rather than mainnet speculation.",
        context: "Analysis of fee and activity data shows a structural shift. Base-layer fees are lower and less volatile than in prior cycles, while L2 batch-posting now represents a large share of block space demand. This changes how researchers should interpret 'network usage' as a valuation input.",
        keyData: [
          { label: "Median base fee trend", value: "Lower vs prior cycle" },
          { label: "L2 settlement share", value: "Growing" },
          { label: "Fee volatility", value: "Compressed" },
          { label: "Active addresses trend", value: "Stable to rising" }
        ],
        scenario: [
          { name: "Base scenario", description: "L2-driven demand grows steadily; base-layer fee spikes become episodic rather than structural." },
          { name: "Alternative scenario", description: "A new application wave could re-congest mainnet, reviving fee volatility and MEV dynamics." }
        ],
        risks: ["Measurement methodologies differ across data providers.", "Protocol upgrades can change fee mechanics materially.", "Activity metrics can be inflated by automated or sybil behavior."],
        conclusion: "Read fee data as a demand signal with new plumbing — the pipes changed, so the gauges need recalibration." }
    ],

    /* ---------- AI agents (7) ---------- */
    agents: [
      { id: "scout", name: "Scout", role: "Signal Discovery",
        description: "Scans market data across crypto, stocks, forex and commodities to surface unusual activity — volume spikes, volatility shifts, and momentum changes — with full context attached.",
        capabilities: ["Multi-market screening", "Anomaly detection", "Volatility regime tagging", "Watchlist alerts"],
        input: "Market data feeds, watchlists", output: "Ranked signal cards with context", status: "IN DEVELOPMENT" },
      { id: "verification", name: "Verification", role: "Claim Checking",
        description: "Cross-references market claims and headlines against primary data sources, flagging inconsistencies before they spread through the community.",
        capabilities: ["Source tracing", "Data cross-checks", "Narrative debunking", "Confidence scoring"],
        input: "Headlines, social claims, rumors", output: "Verification reports with evidence", status: "IN DEVELOPMENT" },
      { id: "market", name: "Market", role: "Market Structure Analysis",
        description: "Reads market structure — trend, range, liquidity zones — and translates price action into plain-language context for every experience level.",
        capabilities: ["Structure mapping", "Support/resistance context", "Session analysis", "Plain-language summaries"],
        input: "Price and volume data", output: "Structure briefs", status: "IN DEVELOPMENT" },
      { id: "macro", name: "Macro", role: "Macroeconomic Context",
        description: "Connects central-bank policy, economic releases, and cross-asset flows to market behavior, keeping traders anchored to the bigger picture.",
        capabilities: ["Event calendar synthesis", "Policy statement parsing", "Cross-asset correlation", "Regime classification"],
        input: "Economic calendar, policy texts", output: "Macro briefings", status: "IN DEVELOPMENT" },
      { id: "context", name: "Context", role: "Narrative & Sentiment",
        description: "Tracks how narratives form and fade across news and social channels, measuring sentiment without amplifying hype.",
        capabilities: ["Narrative tracking", "Sentiment measurement", "Hype filtering", "Timeline reconstruction"],
        input: "News and social streams", output: "Narrative maps", status: "IN DEVELOPMENT" },
      { id: "research", name: "Research", role: "Deep Research",
        description: "Produces structured, cited research notes — tokenomics reviews, earnings breakdowns, protocol analysis — built for depth over speed.",
        capabilities: ["Structured reports", "Fundamental breakdowns", "Comparative analysis", "Cited sources"],
        input: "Research questions, filings, docs", output: "Long-form research notes", status: "IN DEVELOPMENT" },
      { id: "community", name: "Community", role: "Community Intelligence",
        description: "Listens to community discussions, summarizes what members are watching, and routes the best questions and ideas to analysts and educators.",
        capabilities: ["Discussion summaries", "Question routing", "Idea surfacing", "Moderation support"],
        input: "Community channels", output: "Community digests", status: "IN DEVELOPMENT" }
    ],

    /* ---------- Academy courses ---------- */
    courses: [
      { slug: "market-foundations", title: "Market Foundations", level: "beginner", lessons: 12, duration: "4 weeks",
        description: "How markets work: asset classes, order types, market structure basics, and the vocabulary every trader needs." },
      { slug: "reading-price-action", title: "Reading Price Action", level: "beginner", lessons: 10, duration: "3 weeks",
        description: "Candles, trends, ranges, and support/resistance — learning to read what price is actually doing." },
      { slug: "technical-analysis-toolkit", title: "Technical Analysis Toolkit", level: "intermediate", lessons: 14, duration: "5 weeks",
        description: "Indicators, chart patterns, and multi-timeframe analysis — used as context tools, not crystal balls." },
      { slug: "on-chain-fundamentals", title: "On-Chain Fundamentals", level: "intermediate", lessons: 11, duration: "4 weeks",
        description: "Reading blockchains: flows, wallets, fees, and network metrics for crypto market context." },
      { slug: "risk-and-position-sizing", title: "Risk & Position Sizing", level: "intermediate", lessons: 9, duration: "3 weeks",
        description: "The math of survival: risk per trade, portfolio heat, drawdowns, and journaling discipline." },
      { slug: "macro-for-traders", title: "Macro for Traders", level: "advanced", lessons: 12, duration: "5 weeks",
        description: "Central banks, cycles, and cross-asset flows — placing trades inside the bigger economic picture." },
      { slug: "derivatives-and-hedging", title: "Derivatives & Hedging", level: "advanced", lessons: 13, duration: "5 weeks",
        description: "Options and futures mechanics, Greeks intuition, and hedging concepts for experienced participants." }
    ],

    /* ---------- NFT collection (sample of 8,888) ---------- */
    nfts: [
      { id: "asgx-nft-0001", name: "MASK #0001 — Sentinel", rarity: "Legendary",
        traits: ["Obsidian Visor", "Violet Circuitry", "Iron Frame"], personality: "Vigilant and precise — the watcher of order books.",
        aura: "Violet Static" },
      { id: "asgx-nft-0002", name: "MASK #0002 — Cartographer", rarity: "Epic",
        traits: ["Chart Etchings", "Bronze Trim", "Grid Overlay"], personality: "Methodical — maps structure where others see noise.",
        aura: "Amber Drift" },
      { id: "asgx-nft-0003", name: "MASK #0003 — Night Owl", rarity: "Rare",
        traits: ["Midnight Plating", "Session Ticks", "Quiet Hinge"], personality: "Patient — thrives in the Asian session calm.",
        aura: "Deep Blue" },
      { id: "asgx-nft-0004", name: "MASK #0004 — Archivist", rarity: "Epic",
        traits: ["Ledger Bands", "Ink Seams", "Time Stamp"], personality: "Meticulous — every trade journaled, every lesson kept.",
        aura: "Emerald Haze" },
      { id: "asgx-nft-0005", name: "MASK #0005 — Contrarian", rarity: "Rare",
        traits: ["Reversed Polarity", "Static Crackle", "Off-Center Lens"], personality: "Skeptical — questions the consensus trade.",
        aura: "Red Shift" },
      { id: "asgx-nft-0006", name: "MASK #0006 — Apprentice", rarity: "Common",
        traits: ["Plain Weave", "Learning Marks", "Open Visor"], personality: "Curious — the community's newest student of the market.",
        aura: "Soft Grey" }
    ],

    /* ---------- Roadmap (8 phases) ---------- */
    roadmap: [
      { phase: 1, title: "Foundation", timeline: "Q3–Q4 2026", status: "IN DEVELOPMENT",
        items: ["Brand", "Website", "Documentation", "Community infrastructure"] },
      { phase: 2, title: "Market Intelligence", timeline: "Q1 2027", status: "PLANNED",
        items: ["Market data", "News", "Analysis", "Economic calendar"] },
      { phase: 3, title: "AI Agents", timeline: "Q2 2027", status: "PLANNED",
        items: ["7 AI agents", "Research", "Verification", "Briefing", "Dashboard"] },
      { phase: 4, title: "Community", timeline: "Q3 2027", status: "PLANNED",
        items: ["Profiles", "Discussion", "Trading journal", "Events"] },
      { phase: 5, title: "NFT Collection", timeline: "Q4 2027", status: "PLANNED",
        items: ["NFT", "3D character", "Animation", "Marketplace concept"] },
      { phase: 6, title: "ASGX Token", timeline: "Q1 2028", status: "PLANNED",
        items: ["Token deployment", "Utility integration", "Liquidity", "Ecosystem features"] },
      { phase: 7, title: "Ecosystem Expansion", timeline: "Q2 2028", status: "PLANNED",
        items: ["Mobile / PWA", "Advanced AI", "Partnerships", "Global community"] },
      { phase: 8, title: "Full Ecosystem", timeline: "Q3 2028+", status: "PLANNED",
        items: ["Cross-chain exploration", "Web3 integrations", "Expanded AI ecosystem"] }
    ]
  };
})();
