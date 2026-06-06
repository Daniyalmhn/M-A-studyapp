/* ============================================================
   M&A STUDY APP — CONTENT DATA
   HSLU MSc Banking & Finance — Mergers & Acquisitions (FS26)
   All summary text, flashcards, MC questions and calculation
   questions live here so the rest of the app stays generic.
   ============================================================ */

/* ----------------------------------------------------------
   1. SUMMARY  —  full course summary, grouped by topic.
   Each section: { title, html }  (html allows lists/tables)
   ---------------------------------------------------------- */
const SUMMARY = [
  {
    title: "1 · What is M&A?",
    html: `
      <p><strong>Mergers &amp; Acquisitions (M&amp;A)</strong> describe transactions in which the
      ownership of companies, business units or assets is transferred or combined.</p>
      <ul>
        <li><strong>Merger</strong> – two companies combine into one new/surviving legal entity
        (a "merger of equals" is rare in practice).</li>
        <li><strong>Acquisition</strong> – one company (the <em>acquirer</em>) takes control of
        another (the <em>target</em>); the target may continue to exist as a subsidiary.</li>
      </ul>
      <p><strong>Forms of business collaboration</strong> ordered by increasing integration &amp; commitment:</p>
      <ul>
        <li>Contract / strategic alliance (lowest integration)</li>
        <li>Joint venture (shared new entity)</li>
        <li>Minority stake / participation</li>
        <li>Majority acquisition</li>
        <li>Full merger / 100% acquisition (highest integration)</li>
      </ul>`
  },
  {
    title: "2 · Motives & Value Creation",
    html: `
      <p>M&amp;A is justified when the <strong>combined entity is worth more than the sum of the
      stand-alone parts</strong> — i.e. when <em>synergies</em> exceed the premium paid.</p>
      <p><strong>Strategic motives</strong></p>
      <ul>
        <li>Growth (market share, new geographies, new products)</li>
        <li>Economies of scale &amp; scope</li>
        <li>Vertical integration (control of supply chain)</li>
        <li>Access to technology, talent, IP or licences</li>
        <li>Diversification of risk</li>
        <li>Consolidation / removing a competitor</li>
      </ul>
      <p><strong>Synergy types</strong></p>
      <ul>
        <li><strong>Cost synergies</strong> – overlapping functions, procurement, footprint (usually
        more reliable / quantifiable).</li>
        <li><strong>Revenue synergies</strong> – cross-selling, pricing power (harder to realise).</li>
        <li><strong>Financial synergies</strong> – lower cost of capital, tax benefits, debt capacity.</li>
      </ul>
      <p><strong>Value destruction</strong> typically comes from over-paying (winner's curse),
      over-estimated synergies, poor integration and culture clashes.</p>`
  },
  {
    title: "3 · The M&A Process (8 phases)",
    html: `
      <p>A disciplined M&amp;A deal follows a structured sequence:</p>
      <ol>
        <li><strong>Strategy</strong> – define the rationale and acquisition criteria.</li>
        <li><strong>Screening</strong> – build a long list, then a short list of targets.</li>
        <li><strong>Initial assessment / approach</strong> – first contact, NDA, teaser, indicative interest.</li>
        <li><strong>Valuation</strong> – DCF, multiples, LBO; derive a price range.</li>
        <li><strong>Due diligence (DD)</strong> – verify the business (financial, tax, legal, commercial, ESG…).</li>
        <li><strong>Structuring &amp; negotiation</strong> – deal structure, SPA, price mechanism, financing.</li>
        <li><strong>Signing &amp; Closing</strong> – sign the SPA; closing once conditions precedent are met.</li>
        <li><strong>Post-merger integration (PMI)</strong> – realise synergies, integrate people &amp; systems.</li>
      </ol>
      <p><strong>Sell-side vs. buy-side:</strong> on a sell-side mandate an advisor runs a structured
      <em>auction</em> to maximise price/competition; on a buy-side mandate the advisor sources and
      executes for the acquirer.</p>`
  },
  {
    title: "4 · Key Process Documents",
    html: `
      <ul>
        <li><strong>NDA</strong> (Non-Disclosure / Confidentiality Agreement) – protects shared information.</li>
        <li><strong>Teaser</strong> – short anonymous profile of the target to attract buyers.</li>
        <li><strong>Information Memorandum (IM / InfoMemo)</strong> – detailed sell-side document on the
        business, market, financials and outlook (e.g. the <em>Project Spirit</em> InfoMemo).</li>
        <li><strong>LOI / MOU / Term Sheet</strong> – non-binding outline of price &amp; key terms.</li>
        <li><strong>Process Letter</strong> – instructions/timeline to bidders in an auction.</li>
        <li><strong>SPA</strong> (Share/Sale &amp; Purchase Agreement) – the binding contract.</li>
        <li><strong>Disclosure Letter</strong> – seller's exceptions against the warranties.</li>
      </ul>
      <p><strong>Indicative</strong> (non-binding) offers come after the IM; <strong>binding</strong>
      offers come after due diligence and a near-final SPA.</p>`
  },
  {
    title: "5 · Valuation — Overview",
    html: `
      <p>Three core valuation lenses are used together to triangulate a value range:</p>
      <ul>
        <li><strong>DCF (intrinsic)</strong> – present value of future free cash flows.</li>
        <li><strong>Trading &amp; Transaction Multiples (relative)</strong> – value vs. comparable
        listed companies and vs. precedent deals.</li>
        <li><strong>LBO (financeability)</strong> – what a financial sponsor could pay given a target
        return and available leverage.</li>
      </ul>
      <p>The classic visual is the <strong>"football field"</strong> chart showing the value range from
      each method.</p>`
  },
  {
    title: "6 · DCF & WACC",
    html: `
      <p><strong>Discounted Cash Flow</strong> values the business as the present value of its
      <em>Free Cash Flows to the Firm (FCFF)</em> plus a terminal value:</p>
      <p style="font-family:monospace">EV = Σ FCFFₜ / (1+WACC)ᵗ &nbsp;+&nbsp; TV / (1+WACC)ⁿ</p>
      <p><strong>FCFF</strong> = EBIT × (1 − tax) + D&amp;A − Capex − ΔNet Working Capital.</p>
      <p><strong>Terminal value (Gordon growth):</strong>
      <span style="font-family:monospace">TV = FCFFₙ × (1+g) / (WACC − g)</span>.</p>
      <p><strong>WACC</strong> = (E/V)·Kₑ + (D/V)·K_d·(1−tax), where the cost of equity Kₑ is usually
      derived from CAPM: <span style="font-family:monospace">Kₑ = r_f + β·(market risk premium)</span>.</p>
      <p>A DCF gives <strong>Enterprise Value</strong>; you must bridge to <strong>Equity Value</strong>
      (see section 8).</p>`
  },
  {
    title: "7 · Multiples",
    html: `
      <p>Relative valuation expresses value as a multiple of a financial metric.</p>
      <p><strong>Enterprise-value multiples</strong> (capital-structure neutral):</p>
      <ul>
        <li>EV / EBITDA — the workhorse multiple</li>
        <li>EV / EBIT</li>
        <li>EV / Sales — for early-stage / low-margin businesses</li>
      </ul>
      <p><strong>Equity-value multiples</strong>:</p>
      <ul>
        <li>P / E (price / earnings)</li>
        <li>P / B (price / book)</li>
      </ul>
      <p><strong>Rule:</strong> EV-multiples pair with pre-interest metrics (EBITDA, EBIT, Sales);
      equity-multiples pair with post-interest metrics (net income, book equity). Transaction
      multiples include a <em>control premium</em>; trading multiples do not.</p>`
  },
  {
    title: "8 · EV ↔ Equity Value Bridge",
    html: `
      <p>The bridge converts <strong>Enterprise Value</strong> (value of the operating business) into
      <strong>Equity Value</strong> (value to shareholders):</p>
      <p style="font-family:monospace">Equity Value = EV − Net Debt − other claims + non-operating assets</p>
      <p>Typical bridge items:</p>
      <ul>
        <li><strong>− Financial debt</strong> (bonds, bank loans)</li>
        <li><strong>+ Cash &amp; equivalents</strong> … but <strong>− trapped/restricted cash</strong>
        that cannot be freely distributed</li>
        <li><strong>− Pension underfunding, minorities, provisions</strong> (debt-like items)</li>
        <li><strong>− value of issues found in due diligence</strong> (price chip)</li>
        <li><strong>+ non-operating / surplus assets</strong> (e.g. excess real estate, investments)</li>
      </ul>
      <p>"<strong>Net debt</strong>" = financial debt − freely available cash.</p>`
  },
  {
    title: "9 · LBO & Debt Capacity",
    html: `
      <p>In a <strong>Leveraged Buyout</strong> a financial sponsor (PE fund) buys a company using a
      large amount of <strong>debt</strong> and a smaller slice of <strong>equity</strong>. Debt is
      repaid from the target's own cash flows; returns are amplified by leverage.</p>
      <p><strong>Debt capacity</strong> is usually sized off EBITDA:</p>
      <p style="font-family:monospace">Max Debt ≈ Leverage multiple × EBITDA</p>
      <p>The sponsor's <strong>equity cheque</strong> = Enterprise Value − Debt raised.</p>
      <p>Return is measured by:</p>
      <ul>
        <li><strong>Money multiple (MoM / MOIC)</strong> = Equity at exit / Equity invested.</li>
        <li><strong>IRR</strong> – the annualised return.</li>
      </ul>
      <p>Value is created through (1) <strong>EBITDA growth</strong>, (2) <strong>multiple expansion</strong>,
      and (3) <strong>debt paydown / deleveraging</strong>.</p>`
  },
  {
    title: "10 · Due Diligence (DD)",
    html: `
      <p>DD is the structured verification of the target before committing. Main workstreams:</p>
      <ul>
        <li><strong>Financial</strong> – quality of earnings, normalised EBITDA, net debt, working capital.</li>
        <li><strong>Tax</strong> – exposures, loss carry-forwards, structuring.</li>
        <li><strong>Legal</strong> – contracts, litigation, change-of-control clauses, title.</li>
        <li><strong>Commercial</strong> – market, customers, competitive position.</li>
        <li><strong>Operational / IT</strong> – systems, supply chain.</li>
        <li><strong>HR / management</strong> – key people, pensions, incentives.</li>
        <li><strong>ESG</strong> – environmental, social &amp; governance risks (increasingly central).</li>
      </ul>
      <p>Findings feed into the <strong>price</strong> (chip on EV), the <strong>SPA protections</strong>
      (warranties/indemnities) and the <strong>conditions</strong> to closing — or can be deal-breakers.</p>`
  },
  {
    title: "11 · SPA — Risk Allocation",
    html: `
      <p>The <strong>Sale &amp; Purchase Agreement</strong> allocates risk between buyer and seller.</p>
      <ul>
        <li><strong>Representations &amp; Warranties (R&amp;W)</strong> – statements of fact about the
        target; if untrue, the buyer can claim damages. General, time-limited, subject to caps/baskets
        and the disclosure letter.</li>
        <li><strong>Indemnities</strong> – the seller promises to reimburse a <em>specific, identified</em>
        risk (e.g. a known tax audit or pending litigation) on a pound-for-pound basis. Used when a
        risk is known/quantifiable and should clearly sit with the seller.</li>
        <li><strong>Covenants</strong> – promises to do / not do things between signing and closing
        (e.g. run the business as usual).</li>
        <li><strong>Conditions Precedent (CPs)</strong> – must be satisfied before closing
        (regulatory/merger-control approval, third-party consents).</li>
        <li><strong>MAC clause</strong> – Material Adverse Change allows walking away if something
        serious happens between signing and closing.</li>
      </ul>
      <p><strong>Key distinction:</strong> an <em>unknown/general</em> risk → warranty; a
      <em>known/specific</em> risk (e.g. a pending tax audit) → <strong>specific indemnity</strong>.</p>`
  },
  {
    title: "12 · Price Mechanisms",
    html: `
      <p>Two ways to fix the price between signing and closing:</p>
      <ul>
        <li><strong>Locked Box</strong> – price fixed on a recent historical balance-sheet date; the
        buyer gets the economics from that "locked" date and the seller is barred from "leakage".
        Simple, certain, common in auctions.</li>
        <li><strong>Completion Accounts</strong> – price adjusted after closing based on actual net
        debt &amp; working capital at completion. More accurate, but more disputes.</li>
      </ul>
      <p><strong>Earn-out</strong> – part of the price is deferred and contingent on the target hitting
      future targets; bridges valuation gaps but can create post-deal conflict.</p>`
  },
  {
    title: "13 · ESG in M&A (Mattmann)",
    html: `
      <p><strong>Sustainability &amp; ESG</strong> have become a core part of M&amp;A, not a side topic.</p>
      <ul>
        <li><strong>Why it matters:</strong> regulation (e.g. CSRD), investor &amp; lender expectations,
        reputational risk, and real impact on cash flows, cost of capital and the exit multiple.</li>
        <li><strong>ESG Due Diligence</strong> – screen environmental liabilities, supply-chain &amp;
        labour practices, governance, carbon exposure and transition risk.</li>
        <li><strong>Value angle:</strong> strong ESG can support a <em>premium</em> and lower financing
        cost (e.g. sustainability-linked loans); weak ESG is a <em>risk/price chip</em> or deal-breaker.</li>
        <li><strong>Integration:</strong> ESG factors flow into the SPA (warranties/indemnities), the
        valuation, and the post-merger integration / 100-day plan.</li>
      </ul>
      <p>ESG is increasingly a <strong>value driver and risk lens across the whole deal cycle</strong>,
      from screening to PMI.</p>`
  },
  {
    title: "14 · Post-Merger Integration (PMI)",
    html: `
      <p>Most M&amp;A value is won or lost <strong>after</strong> closing.</p>
      <ul>
        <li><strong>100-day plan</strong> – early priorities, quick wins, governance.</li>
        <li><strong>Synergy capture</strong> – track cost &amp; revenue synergies against the deal model.</li>
        <li><strong>People &amp; culture</strong> – retain key talent, align incentives, manage culture clash.</li>
        <li><strong>Systems &amp; processes</strong> – integrate IT, finance, operations.</li>
        <li><strong>Communication</strong> – to staff, customers, suppliers, regulators.</li>
      </ul>
      <p>Common failure causes: weak integration planning, over-optimistic synergies, loss of key
      people, and culture clash.</p>`
  },
  {
    title: "15 · Project Spirit (Case)",
    html: `
      <p>The <strong>Project Spirit</strong> InfoMemo is the course's running case — a sell-side
      <em>Information Memorandum</em> for a Swiss industrial company.</p>
      <ul>
        <li>It illustrates how a real <strong>IM</strong> is structured: executive summary, investment
        highlights, market overview, business description, financials and projections.</li>
        <li>Use it to practise: reading the equity story, identifying synergies, spotting DD red flags,
        and building a valuation (DCF / multiples / LBO) and an EV→Equity bridge.</li>
        <li>It ties the whole process together — strategy → IM → valuation → DD → SPA → closing → PMI.</li>
      </ul>`
  }
];

/* ----------------------------------------------------------
   2. FLASHCARDS  —  { front, back }
   Click to flip (handled in app.js / CSS).
   ---------------------------------------------------------- */
const FLASHCARDS = [
  { front: "What does M&A stand for?", back: "Mergers & Acquisitions — transactions that transfer or combine ownership of companies, business units or assets." },
  { front: "Merger vs. Acquisition?", back: "Merger = two firms combine into one entity. Acquisition = one firm takes control of another, which may survive as a subsidiary." },
  { front: "Order the forms of collaboration by integration", back: "Contract/alliance → Joint venture → Minority stake → Majority acquisition → Full merger/100%." },
  { front: "When does M&A create value?", back: "When the combined entity is worth more than the stand-alone parts — i.e. synergies exceed the premium paid." },
  { front: "Three types of synergy", back: "Cost synergies, Revenue synergies, Financial synergies (lower cost of capital / tax / debt capacity)." },
  { front: "Which synergies are most reliable?", back: "Cost synergies — easier to quantify and control. Revenue synergies are harder to realise." },
  { front: "The 8 phases of the M&A process", back: "1 Strategy · 2 Screening · 3 Initial assessment · 4 Valuation · 5 Due diligence · 6 Structuring & negotiation · 7 Signing & Closing · 8 PMI." },
  { front: "Sell-side vs. buy-side mandate?", back: "Sell-side: run an auction to maximise price/competition. Buy-side: source & execute a deal for the acquirer." },
  { front: "What is a teaser?", back: "A short, anonymous profile of the target used early in a sell-side process to attract potential buyers." },
  { front: "What is an Information Memorandum (IM)?", back: "A detailed sell-side document describing the business, market, financials and outlook (e.g. the Project Spirit InfoMemo)." },
  { front: "Indicative vs. binding offer?", back: "Indicative (non-binding) follows the IM; binding follows due diligence and a near-final SPA." },
  { front: "What is an NDA?", back: "Non-Disclosure / Confidentiality Agreement — protects information shared during a process." },
  { front: "Three core valuation methods", back: "DCF (intrinsic), Multiples (relative), LBO (financeability). Triangulate a value range — the 'football field'." },
  { front: "DCF formula (in words)", back: "Enterprise Value = present value of future free cash flows + present value of terminal value, discounted at WACC." },
  { front: "FCFF formula", back: "FCFF = EBIT × (1 − tax) + D&A − Capex − ΔNet Working Capital." },
  { front: "Terminal value (Gordon growth)", back: "TV = FCFFₙ × (1+g) / (WACC − g)." },
  { front: "WACC formula", back: "WACC = (E/V)·Kₑ + (D/V)·K_d·(1−tax)." },
  { front: "Cost of equity (CAPM)", back: "Kₑ = r_f + β × market risk premium." },
  { front: "Does a DCF give EV or Equity Value?", back: "Enterprise Value. You must then bridge to Equity Value (subtract net debt, etc.)." },
  { front: "EV multiples — name three", back: "EV/EBITDA, EV/EBIT, EV/Sales. They are capital-structure neutral." },
  { front: "Equity multiples — name two", back: "P/E (price/earnings) and P/B (price/book)." },
  { front: "Pairing rule for multiples", back: "EV-multiples pair with pre-interest metrics (EBITDA/EBIT/Sales); equity-multiples pair with post-interest metrics (net income, book equity)." },
  { front: "Trading vs. transaction multiples", back: "Transaction multiples include a control premium (paid in deals); trading multiples (listed comparables) do not." },
  { front: "EV → Equity Value bridge", back: "Equity Value = EV − net debt − other debt-like claims + non-operating assets." },
  { front: "What is 'trapped cash'?", back: "Cash that cannot be freely distributed (e.g. tax/regulatory restrictions); it is NOT subtracted as cash in the net-debt bridge." },
  { front: "What is an LBO?", back: "A buyout funded with a large amount of debt and a small equity slice; debt is repaid from the target's cash flows, amplifying returns." },
  { front: "How is debt capacity sized?", back: "Roughly Leverage multiple × EBITDA. Equity cheque = Enterprise Value − Debt raised." },
  { front: "Money multiple (MoM/MOIC)", back: "Equity value at exit ÷ Equity invested at entry." },
  { front: "Three LBO value-creation levers", back: "EBITDA growth, multiple expansion, and debt paydown (deleveraging)." },
  { front: "Name the main DD workstreams", back: "Financial, Tax, Legal, Commercial, Operational/IT, HR, and ESG." },
  { front: "Reps & Warranties vs. Indemnity", back: "R&W: statements of fact; breach → damages (capped, time-limited). Indemnity: €-for-€ cover of a specific, identified risk." },
  { front: "Known tax audit — warranty or indemnity?", back: "A specific indemnity — the risk is known and identified, so it should sit explicitly with the seller." },
  { front: "Locked Box vs. Completion Accounts", back: "Locked Box: price fixed at a past balance-sheet date, no leakage. Completion Accounts: price adjusted post-closing for actual net debt/working capital." },
  { front: "What is an earn-out?", back: "Deferred, contingent consideration tied to the target hitting future targets; bridges valuation gaps but can cause post-deal conflict." },
  { front: "What is a MAC clause?", back: "Material Adverse Change — lets a party walk away if something seriously bad happens between signing and closing." },
  { front: "Conditions Precedent (CPs)", back: "Conditions (e.g. merger-control approval, consents) that must be met between signing and closing." },
  { front: "Why does ESG matter in M&A?", back: "Regulation, investor/lender expectations and reputation affect cash flows, cost of capital and exit multiple; ESG can be a premium or a price chip." },
  { front: "Where does ESG appear in the deal cycle?", back: "Everywhere: screening, ESG due diligence, valuation, SPA (warranties/indemnities) and PMI." },
  { front: "What is PMI and why crucial?", back: "Post-Merger Integration — most synergy value is realised (or lost) after closing via the 100-day plan, people, systems and synergy capture." },
  { front: "Common causes of M&A failure", back: "Over-paying, over-estimated synergies, weak integration, loss of key people and culture clash." },
  { front: "Share deal vs. asset deal?", back: "Share deal: buy the legal entity (all assets & liabilities follow). Asset deal: cherry-pick specific assets/liabilities — often better for the buyer on liability/tax, but harder to transfer." },
  { front: "Horizontal / vertical / conglomerate merger?", back: "Horizontal: same industry & stage (a competitor). Vertical: different stage of the supply chain (supplier/customer). Conglomerate: unrelated businesses." },
  { front: "What is a control premium?", back: "The extra amount paid above the market price to obtain control. It is reflected in transaction (precedent) multiples but NOT in trading multiples." },
  { front: "What is goodwill?", back: "Goodwill = purchase price − fair value of net identifiable assets acquired. It sits on the buyer's balance sheet and is tested for impairment." },
  { front: "Accretion vs. dilution?", back: "A deal is EPS-accretive if it raises the acquirer's earnings per share, dilutive if it lowers it — a common first screen for listed acquirers." },
  { front: "What is a hostile takeover?", back: "An acquisition opposed by the target's board, taken directly to shareholders (e.g. via a tender offer)." },
  { front: "What is a poison pill?", back: "A takeover defence letting existing shareholders buy cheap shares to dilute a hostile bidder, making the takeover prohibitively expensive." },
  { front: "What is a white knight?", back: "A friendlier third-party acquirer the target invites to outbid a hostile bidder." },
  { front: "What is a tender offer?", back: "A public offer to buy shareholders' shares directly, usually at a premium, to gain control." },
  { front: "Vendor due diligence (VDD)?", back: "Due diligence commissioned by the seller and shared with bidders to speed up the auction and support the price." },
  { front: "What is a data room?", back: "A secure (virtual) repository where the seller shares confidential documents for buyers' due diligence." },
  { front: "Escrow / holdback?", back: "Part of the purchase price retained (e.g. in escrow) to cover potential warranty/indemnity claims after closing." },
  { front: "W&I insurance?", back: "Warranty & Indemnity insurance shifts the risk of warranty breaches to an insurer — common in auctions / PE 'clean exits'." },
  { front: "Drag-along vs. tag-along rights?", back: "Drag-along: the majority can force minorities to sell on the same terms. Tag-along: minorities can join a sale on the same terms." },
  { front: "Break fee (and reverse break fee)?", back: "A fee the target pays the buyer if the deal collapses for specified reasons; a reverse break fee is paid by the buyer to the target." },
  { front: "Merger control / antitrust?", back: "Competition-authority approval needed when a deal may harm competition — a key condition precedent that can block or impose remedies." },
  { front: "What is net working capital (NWC)?", back: "Operating current assets − operating current liabilities. A 'normal' NWC target is agreed; deviations adjust the price (completion accounts)." },
  { front: "What is a carve-out?", back: "Selling a business unit/subsidiary out of a larger group; it needs operational separation, often via a TSA." },
  { front: "What is a TSA?", back: "Transitional Services Agreement — the seller provides services (IT, HR, finance) to a carved-out business for a transition period post-closing." },
  { front: "Bolt-on / buy-and-build?", back: "Smaller add-on acquisitions made by a platform company to build scale — a core PE value-creation strategy." },
  { front: "What is the 'equity story'?", back: "The narrative of why a company is an attractive investment (growth, margins, position) — central to the IM and the sale." },
  { front: "PE exit routes?", back: "Trade sale (to a strategic), secondary buyout (to another PE fund), or IPO. Dividend recaps can also return cash before exit." },
  { front: "Senior vs. mezzanine debt?", back: "Senior: first priority, secured, cheapest. Mezzanine/subordinated: junior, more expensive, often with equity-like upside (warrants)." },
  { front: "Standalone vs. synergy value?", back: "Standalone = the target on its own. Synergy value = extra value from the combination. Max price ≈ standalone + synergies; pay less to keep value for yourself." },
  { front: "Comparable companies vs. precedent transactions?", back: "Comps: multiples of similar listed firms (no control premium). Precedents: multiples paid in past deals (include a control premium)." },
  { front: "Leverage ratio vs. DSCR?", back: "Leverage = Net Debt / EBITDA (how much debt). DSCR = cash available / debt service (ability to service it). Lenders cap both." }
];

/* ----------------------------------------------------------
   3. MULTIPLE-CHOICE  —  exam style "choose 2 correct of 5"
   { q, options[5], correct:[i,j], explain }
   2 points each (both required) — mirrors the real exam.
   ---------------------------------------------------------- */
const MCQ = [
  {
    q: "Which TWO statements about synergies are correct?",
    options: [
      "Cost synergies are generally easier to quantify and realise than revenue synergies.",
      "Revenue synergies are always realised faster than cost synergies.",
      "Financial synergies can include a lower cost of capital or tax benefits.",
      "Synergies are irrelevant to whether an M&A deal creates value.",
      "Paying a premium above synergies still creates value for the acquirer."
    ],
    correct: [0, 2],
    explain: "Cost synergies are more reliable/quantifiable; financial synergies include cheaper capital and tax benefits. Value is created only if synergies exceed the premium."
  },
  {
    q: "Which TWO are Enterprise-Value multiples?",
    options: ["P / E", "EV / EBITDA", "P / B", "EV / Sales", "Dividend yield"],
    correct: [1, 3],
    explain: "EV/EBITDA and EV/Sales are capital-structure-neutral EV multiples. P/E and P/B are equity multiples."
  },
  {
    q: "Which TWO items REDUCE Enterprise Value when bridging to Equity Value?",
    options: [
      "Financial debt (bonds, loans)",
      "Non-operating surplus assets",
      "Trapped / restricted cash treated as available",
      "Pension underfunding (debt-like item)",
      "Freely available cash"
    ],
    correct: [0, 3],
    explain: "Financial debt and debt-like items (pension underfunding) reduce equity value. Surplus assets and free cash increase it; trapped cash simply isn't counted as cash."
  },
  {
    q: "Which TWO correctly describe an LBO?",
    options: [
      "It is financed mainly with equity and very little debt.",
      "Debt is repaid largely from the target's own cash flows.",
      "Leverage amplifies equity returns.",
      "The money multiple is equity invested ÷ equity at exit.",
      "Sponsors never rely on debt paydown for returns."
    ],
    correct: [1, 2],
    explain: "An LBO uses heavy debt repaid from target cash flows, and leverage amplifies returns. MoM = exit equity ÷ invested equity; deleveraging is a key return lever."
  },
  {
    q: "Which TWO documents belong to a typical sell-side process?",
    options: ["Teaser", "Information Memorandum", "Shareholder dividend policy", "Annual ESG marketing brochure", "Process letter"],
    correct: [0, 1],
    explain: "The teaser and the Information Memorandum (plus the process letter) are standard sell-side documents. (The process letter is also valid, but teaser + IM are the clearest pair here.)"
  },
  {
    q: "A specific, KNOWN tax audit risk is best handled in the SPA by which TWO mechanisms?",
    options: [
      "A specific indemnity covering that exact risk",
      "Ignoring it — caveat emptor",
      "A condition precedent / price chip reflecting the exposure",
      "A general representation only, with the usual cap",
      "Increasing the purchase price"
    ],
    correct: [0, 2],
    explain: "Known, identified risks are placed with the seller via a specific indemnity and/or reflected in the price (a chip). A general warranty is for unknown risks."
  },
  {
    q: "Which TWO statements about DCF are correct?",
    options: [
      "FCFF = EBIT × (1 − tax) + D&A − Capex − ΔNWC.",
      "A DCF directly outputs the equity value to shareholders.",
      "Terminal value (Gordon) = FCFFₙ × (1+g) / (WACC − g).",
      "WACC ignores the tax shield on debt.",
      "DCF needs no assumptions about growth."
    ],
    correct: [0, 2],
    explain: "FCFF and the Gordon terminal-value formula are correct. A DCF gives Enterprise Value (bridge to equity), and WACC uses the after-tax cost of debt."
  },
  {
    q: "Which TWO are valid price mechanisms between signing and closing?",
    options: ["Locked Box", "Football field", "Completion Accounts", "Football-field discount", "Teaser pricing"],
    correct: [0, 2],
    explain: "Locked Box (fixed at a past date) and Completion Accounts (post-closing adjustment) are the two standard price mechanisms. The football field is a valuation chart."
  },
  {
    q: "Which TWO are genuine due-diligence workstreams?",
    options: ["Financial / Quality of Earnings", "Teaser drafting", "ESG due diligence", "Dividend reinvestment", "Football-field charting"],
    correct: [0, 2],
    explain: "Financial (quality of earnings) and ESG are core DD workstreams; the others are not DD activities."
  },
  {
    q: "Which TWO statements about ESG in M&A are correct?",
    options: [
      "ESG can affect cost of capital and the exit multiple.",
      "ESG is only a marketing topic with no deal impact.",
      "ESG findings can flow into SPA warranties/indemnities and the price.",
      "ESG is assessed only after post-merger integration.",
      "ESG risks can never be a deal-breaker."
    ],
    correct: [0, 2],
    explain: "ESG affects value (cost of capital, multiple) and is embedded across DD, the SPA and price; weak ESG can be a chip or even a deal-breaker."
  },
  {
    q: "Which TWO statements about a SHARE deal vs. an ASSET deal are correct?",
    options: [
      "In a share deal the buyer acquires the legal entity with all its assets and liabilities.",
      "An asset deal lets the buyer cherry-pick specific assets and liabilities.",
      "A share deal always isolates the buyer from the target's historical liabilities.",
      "Asset deals are always simpler and faster to execute than share deals.",
      "In an asset deal the buyer must assume every liability of the seller."
    ],
    correct: [0, 1],
    explain: "Share deal = the whole entity (liabilities follow). Asset deal = pick assets/liabilities. Share deals do NOT shield the buyer from history, and asset deals are often more complex to transfer."
  },
  {
    q: "Which TWO are typical TARGET defences against a hostile takeover?",
    options: ["Poison pill", "White knight", "Vendor due diligence", "Locked box", "Dividend reinvestment plan"],
    correct: [0, 1],
    explain: "The poison pill and inviting a white knight are classic takeover defences. The others are unrelated process/price tools."
  },
  {
    q: "Which TWO statements about WACC / cost of capital are correct?",
    options: [
      "WACC uses the after-tax cost of debt.",
      "Cost of equity can be estimated with CAPM: rf + β × equity risk premium.",
      "Higher leverage always lowers WACC without limit.",
      "WACC is independent of the company's capital structure.",
      "The cost of debt is normally higher than the cost of equity."
    ],
    correct: [0, 1],
    explain: "WACC uses the after-tax cost of debt and CAPM gives the cost of equity. Beyond a point more debt raises risk/WACC, WACC depends on structure, and debt is normally cheaper than equity."
  },
  {
    q: "Which TWO items INCREASE equity value in the EV→Equity bridge?",
    options: ["Surplus / non-operating assets", "Freely available cash", "Financial debt", "Pension deficit", "Minority interests"],
    correct: [0, 1],
    explain: "Surplus assets and free cash add to equity value; debt, pension deficits and minorities are deducted."
  },
  {
    q: "Which TWO are valid private-equity EXIT routes?",
    options: ["Trade sale to a strategic buyer", "Secondary buyout to another PE fund", "Poison pill", "Vendor due diligence", "Locked box"],
    correct: [0, 1],
    explain: "Trade sale and secondary buyout (plus IPO) are exit routes. The others are defences/process tools."
  },
  {
    q: "Which TWO statements about multiples and the control premium are correct?",
    options: [
      "Precedent-transaction multiples typically include a control premium.",
      "Trading comparable multiples exclude a control premium.",
      "A control premium is the discount applied to a minority stake.",
      "Trading comps normally include a control premium.",
      "Control premiums apply only to asset deals."
    ],
    correct: [0, 1],
    explain: "Deals pay for control, so precedents embed a premium; listed trading comps do not."
  },
  {
    q: "Which TWO mechanisms protect a BUYER against risks discovered after closing?",
    options: ["Escrow / holdback of part of the price", "Warranties & indemnities in the SPA", "A teaser", "An equity story", "A data room"],
    correct: [0, 1],
    explain: "Escrow and SPA warranties/indemnities give post-closing recourse. Teaser, equity story and data room are process/marketing items."
  },
  {
    q: "Which TWO statements about synergies and price are correct?",
    options: [
      "Maximum justifiable price ≈ standalone value + synergies.",
      "Net synergies = gross synergies − costs to achieve.",
      "Paying the full synergy value keeps all the gains for the buyer.",
      "Revenue synergies are generally more certain than cost synergies.",
      "Costs to achieve synergies increase net synergies."
    ],
    correct: [0, 1],
    explain: "Max price is standalone + synergies, and you net off costs to achieve. Paying full synergies hands the gains to the seller; revenue synergies are LESS certain."
  },
  {
    q: "Which TWO are common conditions precedent (CPs) between signing and closing?",
    options: [
      "Merger-control / antitrust approval",
      "Key third-party / change-of-control consents",
      "Drafting the teaser",
      "Paying the final dividend to the buyer",
      "Writing the equity story"
    ],
    correct: [0, 1],
    explain: "Regulatory approval and necessary consents are classic CPs; the others are not closing conditions."
  },
  {
    q: "Which TWO statements about LBO value creation are correct?",
    options: [
      "Debt paydown (deleveraging) increases equity value over time.",
      "Multiple expansion raises exit value for the same EBITDA.",
      "Leverage reduces the equity IRR for a given return on assets.",
      "EBITDA growth has no effect on equity value.",
      "Exiting at a lower multiple than entry boosts returns."
    ],
    correct: [0, 1],
    explain: "Deleveraging and multiple expansion (plus EBITDA growth) drive LBO returns. Leverage amplifies (not reduces) equity returns; a lower exit multiple hurts."
  },
  {
    q: "Which TWO documents are typically NON-BINDING?",
    options: ["Letter of Intent (LOI)", "Term sheet / MOU", "A signed SPA", "The disclosure letter", "An escrow agreement"],
    correct: [0, 1],
    explain: "LOIs and term sheets/MOUs are usually non-binding (save confidentiality/exclusivity). The SPA, disclosure letter and escrow agreement are binding."
  },
  {
    q: "Which TWO statements about net working capital (NWC) in a deal are correct?",
    options: [
      "A normalised NWC target is agreed; deviations adjust the price.",
      "NWC = operating current assets − operating current liabilities.",
      "NWC is part of net debt.",
      "Higher-than-target NWC at closing reduces the price paid to the seller.",
      "NWC is irrelevant under completion accounts."
    ],
    correct: [0, 1],
    explain: "A target NWC is set and deviations flex the price; NWC is current assets minus current liabilities. It is separate from net debt, and being ABOVE target benefits the seller."
  },
  {
    q: "Which TWO statements about ESG due diligence are correct?",
    options: [
      "It can surface environmental liabilities and supply-chain / labour risks.",
      "Findings can become SPA warranties / indemnities or a price chip.",
      "ESG is only relevant for listed acquirers.",
      "ESG risks can never be deal-breakers.",
      "ESG is assessed only during post-merger integration."
    ],
    correct: [0, 1],
    explain: "ESG DD finds environmental/social/governance risks that flow into the SPA and price; it applies to all acquirers and can be a deal-breaker, across the whole cycle."
  },
  {
    q: "Which TWO statements about a carve-out are correct?",
    options: [
      "It separates a business unit from a larger group.",
      "A Transitional Services Agreement often supports it after closing.",
      "Carve-outs are always simpler than buying a standalone company.",
      "The carved-out unit never needs IT/finance separation.",
      "A carve-out is a takeover defence."
    ],
    correct: [0, 1],
    explain: "Carve-outs detach a unit and usually need a TSA for shared functions — they are typically MORE complex, not less."
  },
  {
    q: "Which TWO statements about IRR and money multiple are correct?",
    options: [
      "Money multiple ignores the time value of money.",
      "For a fixed money multiple, a longer holding period lowers the IRR.",
      "IRR ignores how long capital is invested.",
      "A 2.0x money multiple always equals a 100% IRR.",
      "MoM and IRR always rank deals identically."
    ],
    correct: [0, 1],
    explain: "MoM is time-blind; the same MoM over more years means a lower annualised IRR. IRR is explicitly time-weighted, and MoM/IRR can disagree on ranking."
  },
  {
    q: "Which TWO are EQUITY-value multiples (pair with post-interest metrics)?",
    options: ["P / E", "P / B", "EV / EBITDA", "EV / Sales", "EV / EBIT"],
    correct: [0, 1],
    explain: "P/E and P/B are equity multiples; the EV-based ones are capital-structure neutral and pair with pre-interest metrics."
  },
  {
    q: "Which TWO are frequent reasons M&A deals DESTROY value?",
    options: [
      "Overpaying / the winner's curse",
      "Overestimated synergies and weak integration",
      "Buying below standalone value",
      "Realising cost synergies early",
      "Retaining key talent"
    ],
    correct: [0, 1],
    explain: "Overpayment and synergy/integration failure destroy value; the other three actually protect or create value."
  },
  {
    q: "Which TWO statements about the LOCKED-BOX mechanism are correct?",
    options: [
      "The price is fixed at a past 'locked-box' balance-sheet date.",
      "The seller is barred from value 'leakage' after that date (save permitted leakage).",
      "The price is adjusted after closing for actual net debt.",
      "It requires completion accounts to finalise the price.",
      "The buyer bears all trading risk before the locked-box date."
    ],
    correct: [0, 1],
    explain: "Locked box fixes the price at a historical date with a no-leakage covenant. Post-closing net-debt adjustment is the COMPLETION-ACCOUNTS alternative."
  },
  {
    q: "Which TWO statements about due-diligence outcomes are correct?",
    options: [
      "Findings can reduce the price (a 'chip' on EV).",
      "Findings can be covered by specific indemnities in the SPA.",
      "DD findings never affect deal structure.",
      "A clean DD guarantees synergies will be realised.",
      "DD covers only financial matters; legal and tax are excluded."
    ],
    correct: [0, 1],
    explain: "DD findings flow into price and SPA protections (and structure). They don't guarantee synergies, and DD spans financial, tax, legal, commercial, ESG and more."
  },
  {
    q: "Which TWO statements about post-merger integration (PMI) are correct?",
    options: [
      "Most synergy value is realised — or lost — after closing.",
      "A 100-day plan sets early priorities and quick wins.",
      "Integration planning should start only a year after closing.",
      "Culture is irrelevant to integration success.",
      "Synergies are realised automatically once the deal signs."
    ],
    correct: [0, 1],
    explain: "PMI is where value is won or lost; the 100-day plan drives it. Integration must be planned EARLY, culture is critical, and synergies are never automatic."
  }
];

/* ----------------------------------------------------------
   4. CALCULATION / FILL-IN  —  type an answer, then check.
   { q, answer, tolerance, unit, explain, hint }
   tolerance = absolute numeric tolerance for "correct".
   The 4 graded lecture exercises are included.
   ---------------------------------------------------------- */
const CALC = [
  {
    q: "LBO money multiple. Entry EV = 100m, funded 40% equity (40m) and 60% debt (60m). At exit EV = 130m and half of the debt has been repaid (30m left). What is the money multiple (MoM)?",
    answer: 2.5,
    tolerance: 0.05,
    unit: "x",
    hint: "Equity at exit = Exit EV − remaining debt. MoM = exit equity ÷ equity invested.",
    explain: "Exit equity = 130 − 30 = 100m. Equity invested = 40m. MoM = 100 / 40 = 2.5x."
  },
  {
    q: "EV → Equity Value bridge (in bn). Start EV = 12.0. Adjust: − 3.0 financial debt, + 2.5 cash, − 0.8 trapped cash, − 0.4 due-diligence findings, + 0.6 non-operating assets. What is the Equity Value (bn)?",
    answer: 10.9,
    tolerance: 0.05,
    unit: "bn",
    hint: "Add the items with their signs to 12.0. Trapped cash and DD findings are negative.",
    explain: "12.0 − 3.0 + 2.5 − 0.8 − 0.4 + 0.6 = 10.9bn equity value."
  },
  {
    q: "Debt capacity & equity cheque. EBITDA = 20m, lenders accept leverage of 3.5× EBITDA, Enterprise Value = 120m. What equity cheque (m) must the sponsor write?",
    answer: 50,
    tolerance: 0.5,
    unit: "m",
    hint: "Max debt = leverage × EBITDA. Equity = EV − debt.",
    explain: "Max debt = 3.5 × 20 = 70m. Equity = 120 − 70 = 50m."
  },
  {
    q: "Max debt only. EBITDA = 20m and the leverage multiple is 3.5×. What is the maximum debt (m) that can be raised?",
    answer: 70,
    tolerance: 0.5,
    unit: "m",
    hint: "Max debt = leverage multiple × EBITDA.",
    explain: "3.5 × 20 = 70m of debt capacity."
  },
  {
    q: "Net debt. Financial debt = 3.0bn, total cash = 2.5bn of which 0.8bn is trapped (not freely available). What is net debt (bn)?",
    answer: 1.3,
    tolerance: 0.05,
    unit: "bn",
    hint: "Net debt = financial debt − freely available cash. Trapped cash does NOT reduce debt.",
    explain: "Freely available cash = 2.5 − 0.8 = 1.7. Net debt = 3.0 − 1.7 = 1.3bn."
  },
  {
    q: "Simple EV/EBITDA valuation. A peer group trades at 8.0× EV/EBITDA and the target's EBITDA is 25m. What Enterprise Value (m) does the multiple imply?",
    answer: 200,
    tolerance: 1,
    unit: "m",
    hint: "EV = multiple × EBITDA.",
    explain: "EV = 8.0 × 25 = 200m."
  },
  {
    q: "Terminal value (Gordon growth). Next-year FCFF = 10m, WACC = 8%, perpetual growth g = 2%. What is the terminal value (m)?",
    answer: 166.67,
    tolerance: 1,
    unit: "m",
    hint: "TV = FCFF / (WACC − g) when FCFF is already the next-year figure.",
    explain: "TV = 10 / (0.08 − 0.02) = 10 / 0.06 = 166.7m."
  },
  {
    q: "Equity value from EV. Enterprise Value = 200m, net debt = 50m. What is the equity value (m)?",
    answer: 150,
    tolerance: 1,
    unit: "m",
    hint: "Equity value = EV − net debt.",
    explain: "200 − 50 = 150m equity value."
  },
  {
    q: "Cost of equity (CAPM). Risk-free rate = 2%, beta = 1.2, equity risk premium = 6%. What is the cost of equity (%)?",
    answer: 9.2,
    tolerance: 0.1,
    unit: "%",
    hint: "Ke = rf + β × ERP.",
    explain: "Ke = 2% + 1.2 × 6% = 2% + 7.2% = 9.2%."
  },
  {
    q: "WACC. Equity = 600m, Debt = 400m, cost of equity = 10%, cost of debt = 5%, tax = 25%. What is the WACC (%)?",
    answer: 7.5,
    tolerance: 0.1,
    unit: "%",
    hint: "WACC = (E/V)·Ke + (D/V)·Kd·(1−tax). V = 1000.",
    explain: "0.6×10% + 0.4×5%×(1−0.25) = 6.0% + 1.5% = 7.5%."
  },
  {
    q: "Free Cash Flow to the Firm. EBIT = 50m, tax = 20%, D&A = 15m, Capex = 20m, ΔNWC = 5m. What is FCFF (m)?",
    answer: 30,
    tolerance: 0.5,
    unit: "m",
    hint: "FCFF = EBIT×(1−tax) + D&A − Capex − ΔNWC.",
    explain: "50×0.8 + 15 − 20 − 5 = 40 + 15 − 20 − 5 = 30m."
  },
  {
    q: "Terminal value (Gordon growth). This year's FCFF = 20m, g = 3%, WACC = 9%. What is the terminal value (m)?",
    answer: 343.33,
    tolerance: 2,
    unit: "m",
    hint: "TV = FCFF×(1+g) / (WACC − g) — grow this year's FCFF by one year first.",
    explain: "20 × 1.03 / (0.09 − 0.03) = 20.6 / 0.06 = 343.3m."
  },
  {
    q: "Equity value via P/E. Net income = 8m, peer P/E multiple = 15×. What equity value (m) does it imply?",
    answer: 120,
    tolerance: 1,
    unit: "m",
    hint: "Equity value = P/E × net income.",
    explain: "15 × 8 = 120m."
  },
  {
    q: "EV/EBITDA to equity. EBITDA = 40m, multiple = 6.5×, net debt = 80m. What is the equity value (m)?",
    answer: 180,
    tolerance: 1,
    unit: "m",
    hint: "EV = multiple × EBITDA, then equity = EV − net debt.",
    explain: "EV = 6.5 × 40 = 260m; equity = 260 − 80 = 180m."
  },
  {
    q: "Bid premium. Unaffected share price = 40, offer price = 50. What is the premium offered (%)?",
    answer: 25,
    tolerance: 0.5,
    unit: "%",
    hint: "Premium = (offer − unaffected) / unaffected.",
    explain: "(50 − 40) / 40 = 10 / 40 = 25%."
  },
  {
    q: "LBO IRR from the money multiple. The investment returns a money multiple of 2.0× over a 4-year holding period. What is the approximate annual IRR (%)?",
    answer: 18.9,
    tolerance: 0.6,
    unit: "%",
    hint: "IRR = MoM^(1/years) − 1.",
    explain: "2.0^(1/4) − 1 = 1.189 − 1 ≈ 18.9%."
  },
  {
    q: "Value of synergies (perpetuity). Annual after-tax cost synergies = 6m, discount rate = 8%. What is their present value (m)?",
    answer: 75,
    tolerance: 1,
    unit: "m",
    hint: "PV of a perpetuity = cash flow / discount rate.",
    explain: "6 / 0.08 = 75m."
  },
  {
    q: "Goodwill. Purchase price (equity) = 200m, fair value of net identifiable assets = 140m. What goodwill (m) is recognised?",
    answer: 60,
    tolerance: 1,
    unit: "m",
    hint: "Goodwill = purchase price − fair value of net identifiable assets.",
    explain: "200 − 140 = 60m of goodwill."
  },
  {
    q: "Sponsor equity contribution. Enterprise Value = 150m, debt raised = 90m. What share of EV is funded by equity (%)?",
    answer: 40,
    tolerance: 0.5,
    unit: "%",
    hint: "Equity = EV − debt; then equity / EV.",
    explain: "Equity = 150 − 90 = 60m; 60 / 150 = 40%."
  },
  {
    q: "Enterprise value build-up. Equity value = 220m, net debt = 80m. What is the Enterprise Value (m)?",
    answer: 300,
    tolerance: 1,
    unit: "m",
    hint: "EV = equity value + net debt.",
    explain: "220 + 80 = 300m."
  },
  {
    q: "Net debt with several items. Bank loans = 50m, bonds = 70m, cash = 30m, pension deficit (debt-like) = 20m. What is net debt (m)?",
    answer: 110,
    tolerance: 1,
    unit: "m",
    hint: "Net debt = financial debt − cash + debt-like items.",
    explain: "(50 + 70) − 30 + 20 = 120 − 30 + 20 = 110m."
  },
  {
    q: "Pro-forma EPS (accretion test). Acquirer net income = 100m on 50m shares. It buys a target adding 20m of net income and issues 8m new shares. What is the combined EPS?",
    answer: 2.07,
    tolerance: 0.03,
    unit: "",
    hint: "Combined EPS = (NI_acq + NI_target) / (shares_acq + new shares).",
    explain: "(100 + 20) / (50 + 8) = 120 / 58 = 2.07 — accretive vs. the standalone 2.00."
  }
];

/* ----------------------------------------------------------
   5. TOPICS  —  ranked by exam frequency for the Overview page.
   summaryIndex points at the SUMMARY card to open when tapped.
   spark = tiny trend series for the sparkline (decorative).
   ---------------------------------------------------------- */
const TOPICS = [
  { title: "Valuation: DCF, WACC & multiples", priority: "High", cards: 14, summaryIndex: 5, spark: [4,5,5,7,8,9,11] },
  { title: "EV ↔ Equity Value bridge & net debt", priority: "High", cards: 9, summaryIndex: 7, spark: [3,4,4,5,7,8,9] },
  { title: "LBO, debt capacity & returns (IRR/MoM)", priority: "High", cards: 10, summaryIndex: 8, spark: [2,3,5,5,6,8,9] },
  { title: "SPA: warranties, indemnities & risk allocation", priority: "High", cards: 9, summaryIndex: 10, spark: [3,3,4,6,6,7,8] },
  { title: "The M&A process (8 phases) & key documents", priority: "Medium", cards: 11, summaryIndex: 2, spark: [4,4,5,5,6,6,7] },
  { title: "Due diligence (incl. ESG)", priority: "Medium", cards: 8, summaryIndex: 9, spark: [2,3,3,4,5,6,7] },
  { title: "Price mechanisms & earn-outs", priority: "Medium", cards: 6, summaryIndex: 11, spark: [3,3,4,4,5,5,6] },
  { title: "Synergies, motives & post-merger integration", priority: "Medium", cards: 8, summaryIndex: 1, spark: [2,3,4,4,5,6,6] }
];

/* Make data available to app.js */
window.MADATA = { SUMMARY, FLASHCARDS, MCQ, CALC, TOPICS };
