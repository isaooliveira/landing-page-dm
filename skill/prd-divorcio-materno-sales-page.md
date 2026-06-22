# PRD: Landing Page "Divórcio Materno" for Antigravity

## 1. Introduction / Overview

Build a conversion-focused sales page for the digital product **Divórcio Materno** in Antigravity.

The page must be implemented using the existing design system artifacts already generated for this project and should translate them into a production-ready landing page with responsive behavior, strong hierarchy, and a premium editorial visual direction.

This page sells an immersion/product about the emotional and financial effects of unresolved maternal dynamics. The visual direction must feel **editorial, intimate, premium, sober, and feminine without fragility**.

The implementation must use the following source-of-truth files:

1. `design-system/divorcio-materno/MASTER.md`
2. `design-system/divorcio-materno/pages/sales-page.md`
3. `design-system/divorcio-materno/tokens.css`

These three files define the visual system, page-specific layout direction, and CSS tokens. Antigravity should treat them as mandatory implementation inputs, not optional inspiration.

## 2. Goals

- Build one complete responsive sales page for Divórcio Materno in Antigravity.
- Follow the visual and structural rules documented in the 3 design system files.
- Preserve the premium editorial grid logic instead of converting the page into a generic centered course landing page.
- Keep the primary CTA visible above the fold on desktop.
- Ensure the page is readable, fast, mobile-friendly, and visually consistent.
- Use the provided color, radius, spacing, and typography tokens as the implementation baseline.

## 3. User Stories

### US-001: Load and use the design system source files
**Description:** As a developer, I want Antigravity to use the 3 existing design system files as implementation references so that the page matches the approved visual direction.

**Acceptance Criteria:**
- [ ] The implementation explicitly references `MASTER.md`, `sales-page.md`, and `tokens.css`.
- [ ] The team does not replace the documented visual direction with a generic default landing page style.
- [ ] Colors, typography, spacing, border radius, and component behavior are derived from the provided files.
- [ ] Typecheck/lint passes.

### US-002: Build the hero as an editorial mosaic
**Description:** As a visitor, I want the hero section to feel visually distinctive and premium so that the product appears serious, well-positioned, and emotionally resonant.

**Acceptance Criteria:**
- [ ] The hero uses an asymmetric mosaic or modular card layout, not a single centered column.
- [ ] The hero contains headline, supporting text, CTA, product framing, and at least one strong visual block.
- [ ] The primary CTA appears above the fold on desktop.
- [ ] The hero visually reflects the warm editorial style defined in the design system.
- [ ] Typecheck/lint passes.
- [ ] Verify in browser using dev-browser skill.

### US-003: Implement the recommended page sections
**Description:** As a visitor, I want the page to move through a clear narrative so that I understand the problem, mechanism, offer, and next step.

**Acceptance Criteria:**
- [ ] The page includes these sections in order: Hero, Identification, Mechanism, Comparison, Concrete Gains, Offer, Mentor, FAQ, Footer.
- [ ] Section styling follows the page-specific recommendations in `sales-page.md`.
- [ ] Alternating light and dark sections are implemented where specified.
- [ ] Copy containers support dense text without feeling cramped.
- [ ] Typecheck/lint passes.
- [ ] Verify in browser using dev-browser skill.

### US-004: Apply the tokenized visual system
**Description:** As a developer, I want to implement the page with reusable design tokens so that the UI remains consistent and easy to maintain.

**Acceptance Criteria:**
- [ ] Colors use the palette defined in `tokens.css`.
- [ ] Radius, spacing, shadows, fonts, and button styles follow the provided token names and values.
- [ ] No off-system accent colors are introduced without clear necessity.
- [ ] CTA buttons use the documented pill style.
- [ ] Typecheck/lint passes.
- [ ] Verify in browser using dev-browser skill.

### US-005: Build reusable editorial cards
**Description:** As a developer, I want card components for pain points, mechanism, gains, offer, and FAQ so that the page keeps a coherent modular structure.

**Acceptance Criteria:**
- [ ] Editorial cards support both light and dark variants.
- [ ] Cards have consistent radius, padding, and subtle border/shadow treatment.
- [ ] Statistic or highlight cards support large serif numerals or emphasis text.
- [ ] FAQ cards or accordion items match the same visual family.
- [ ] Typecheck/lint passes.
- [ ] Verify in browser using dev-browser skill.

### US-006: Make the layout fully responsive
**Description:** As a mobile user, I want the page to remain readable and usable on smaller screens so that I can understand the offer and convert without friction.

**Acceptance Criteria:**
- [ ] Desktop layout uses multi-column compositions where appropriate.
- [ ] Tablet layout adapts without broken hierarchy.
- [ ] Mobile layout stacks content cleanly into a single column.
- [ ] No text overflow, clipped CTA, or broken card composition appears at common breakpoints.
- [ ] Typecheck/lint passes.
- [ ] Verify in browser using dev-browser skill.

### US-007: Preserve the intended brand atmosphere
**Description:** As a stakeholder, I want the final page to match the approved emotional and aesthetic direction so that the product does not look generic, clinical, or spiritually vague.

**Acceptance Criteria:**
- [ ] The page feels editorial premium, intimate, and sober.
- [ ] The page does not use purple, hot pink, glossy gold, or cliché coaching visuals.
- [ ] Photography treatment and image framing align with the “warm, human, adult” direction.
- [ ] The page avoids visual motifs that feel medical, mystical, or templated.
- [ ] Typecheck/lint passes.
- [ ] Verify in browser using dev-browser skill.

## 4. Functional Requirements

- **FR-1:** Antigravity must treat the following files as the canonical design inputs:
  - `design-system/divorcio-materno/MASTER.md`
  - `design-system/divorcio-materno/pages/sales-page.md`
  - `design-system/divorcio-materno/tokens.css`

- **FR-2:** The page must implement the section order documented in `sales-page.md`:
  Hero, Identification, Mechanism, Comparison, Concrete Gains, Offer, Mentor, FAQ, Footer.

- **FR-3:** The hero must use a modular or mosaic composition with unequal visual blocks.

- **FR-4:** The page must use the documented palette:
  espresso, cacau, caramelo, marfim, manteiga, ouro, areia, and canela.

- **FR-5:** The page must support serif headings and sans-serif body/interface text consistent with the design system.

- **FR-6:** CTA buttons must use the pill treatment defined in `tokens.css`.

- **FR-7:** The implementation must support light and dark section backgrounds according to the section token guidance in `sales-page.md`.

- **FR-8:** The layout must maintain high visual hierarchy with generous spacing, rounded cards, and subtle hover behavior.

- **FR-9:** The page must be responsive across desktop, tablet, and mobile breakpoints.

- **FR-10:** FAQ must be implemented as either accordion or stacked editorial cards, as long as it matches the documented visual family.

- **FR-11:** Footer must include contact and legal support areas as described by the page structure.

- **FR-12:** The final implementation must preserve a conversion-ready primary CTA above the fold on desktop.

## 5. Non-Goals (Out of Scope)

- No checkout implementation.
- No payment gateway setup.
- No CRM, email automation, or analytics instrumentation unless separately requested.
- No copywriting rewrite or messaging strategy changes.
- No logo redesign or full brand identity creation.
- No member area, upsell flow, or post-purchase pages.
- No blog templates or additional site pages.

## 6. Design Considerations

- Use the **Master design system** for global visual rules.
- Use the **Sales Page Override** for page-specific structure and tone.
- Use **tokens.css** as the implementation baseline for palette, spacing, typography, cards, and buttons.
- The overall direction should feel closer to an editorial premium campaign page than to a standard info-product landing page.
- The page should balance emotional gravity with visual breathing room.
- The visual language should feel feminine and mature, but not soft in a fragile or overly romantic way.

## 7. Technical Considerations

- Antigravity should ingest or manually map the three reference files into its page-building workflow.
- If Antigravity cannot directly consume markdown or CSS tokens, the implementation team must manually transpose those rules into the page system.
- The CSS token names can be used as the canonical naming convention for implementation.
- The page should avoid hard-coded one-off styling when an equivalent token exists.
- Accessibility requirements must include visible focus states, adequate contrast, and support for responsive reading.
- The page should be tested in browser at common breakpoints before sign-off.

## 8. Success Metrics

- The final page visually matches the approved design direction from the three source files.
- The hero clearly communicates product identity and CTA without looking generic.
- The page remains coherent and attractive on desktop, tablet, and mobile.
- Stakeholder review confirms the page feels premium, sober, editorial, and conversion-ready.
- No major styling regressions appear outside the documented token system.

## 9. Open Questions

- Will Antigravity use existing platform components, or can custom layout primitives be built freely?
- Will final photography assets be provided separately, or should placeholders be used initially?
- Will the FAQ open/close interaction follow native accordion behavior or custom animation?
- Does the implementation need to include sticky CTA behavior on mobile, or only above-the-fold desktop visibility?
- Should the page be delivered as a single standalone landing page or integrated into an existing site shell?

## 10. Source Files to Attach in the Antigravity Request

Attach or reference these exact files in the build request:

1. `design-system/divorcio-materno/MASTER.md`
2. `design-system/divorcio-materno/pages/sales-page.md`
3. `design-system/divorcio-materno/tokens.css`

## 11. Build Instruction Summary for Antigravity

Create a responsive sales page for **Divórcio Materno** using the attached design system files as the source of truth.
Do not simplify this into a generic infoproduct landing page.
Preserve the editorial modular grid, the warm premium palette, the serif + sans typography pairing, the pill CTA treatment, and the section order defined in the sales-page override.
