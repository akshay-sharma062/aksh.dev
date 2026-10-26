# Implementation Plan – Full Production QA Audit for AKSH.DEV Portfolio

**Goal**: Perform a comprehensive functional, visual, responsive, cross‑browser, animation, performance, SEO, accessibility, security, and code‑quality audit of the site. Identify all issues, categorize them, fix critical/high/medium (and safe low) issues, re‑run tests, and produce a final QA report.

## Phase 1 – Automated Checks
1. Run `npm run lint` and capture output.
2. Run `npm run type-check` and capture output.
3. Build production with `npm run build` and ensure no errors.
4. Start the production server (`npm run start`) on a random port.
5. Use `curl`/`wget` to fetch the HTML of key routes (`/`, `/api/contact`, any `/work/[slug]`).
6. Run Lighthouse via `npx lighthouse http://localhost:<port> --output=json --output-path=./lighthouse-report.json` for performance/seo/accessibility.
7. Run `npm audit` for dependency vulnerabilities.

## Phase 2 – Functional Testing (Manual via headless browser)
- Use Playwright (or puppeteer) to script:
  - Load homepage, verify navbar links, mobile menu toggle, smooth scroll to sections.
  - Click each project card, ensure overlay "VIEW" appears, link navigates to `/work/<slug>` (or external URL).
  - Submit contact form with valid data → expect `{ success: true }` response and success UI.
  - Submit with invalid data → expect validation errors.
  - Verify social links open in new tab with `rel="noopener noreferrer"`.
  - Check any CTA buttons.
  - Capture console logs for errors.
  - Verify `/api/contact` returns correct JSON and proper status codes for bad payloads.

## Phase 3 – Visual / UI Inspection
- Open the site in a real browser (Chrome) at full size.
- Walk through each section, capture screenshots, and manually note:
  - Overlapping elements, clipped text, horizontal overflow, broken images, spacing, typography, color usage, hover/active states, placeholder text, debug output.
- Verify custom cursor appears only on desktop and displays "VIEW" on hover.
- Ensure no layout jumps on navigation or scroll.

## Phase 4 – Responsive Testing
- Resize viewport to the list of breakpoints (320, 375, 390, 414, 768, 1024, 1280, 1440, 1920).
- At each breakpoint, verify:
  - Mobile navigation works (hamburger opens/closes, focus trap).
  - Hero layout adapts, text remains readable.
  - Project cards stack correctly, marquee does not overflow.
  - GSAP animations still trigger (or are disabled via `prefers-reduced-motion`).
  - Contact form fields are usable.
  - Footer remains visible and not cut off.
- Capture any overflow warnings from the browser console.

## Phase 5 – Cross‑Browser Testing
- Run the same manual steps in Edge, Firefox, and Safari (if available via WebKit on macOS CI). Record any differences in:
  - CSS rendering, fonts, colors.
  - ScrollTrigger behavior.
  - Custom cursor support.
  - Form submission handling.

## Phase 6 – Animation Testing
- Verify all GSAP timelines start/stop correctly.
- Test `prefers-reduced-motion` media query – animations should be reduced or disabled.
- Resize window after animations have started to ensure they recalc correctly.
- Ensure no flash‑of‑unstyled‑content (FOUC) on page load.

## Phase 7 – Performance Testing
- Review Lighthouse JSON for:
  - Performance score ≥ 90.
  - LCP < 2.5 s, CLS < 0.1, INP < 100 ms, TTFB < 200 ms.
  - Image sizes (should be optimized, WebP if possible).
  - Font loading (use `font-display: swap`).
  - JS bundle size (avoid unnecessary client components).
- Identify any heavy third‑party scripts.
- Optimize if needed (e.g., lazy‑load off‑screen images, defer non‑critical JS).

## Phase 7 – SEO Testing
- Verify generated HTML contains:
  - `<title>` and meta description.
  - Canonical link.
  - Open Graph and Twitter meta tags.
  - Favicon link.
  - `robots.txt` and `sitemap.xml` accessible.
  - JSON‑LD for Person, Website, and each Project (CreativeWork).
- Use `curl` to fetch the HTML and grep for the above tags.

## Phase 8 – Accessibility Testing
- Run axe-core via Playwright (`await page.evaluate(() => window.axe.run())`).
- Manually test keyboard navigation:
  - Tab order through navbar, sections, forms.
  - Focus outlines visible.
  - ARIA labels on interactive elements (hamburger, close button, custom cursor overlay).
  - Form fields have associated `<label>` or `aria-label`.
  - Image `alt` attributes present.
  - Color contrast meets WCAG AA.

## Phase 9 – Security Checks
- Ensure `.env.local` is not in the repo (already excluded). Verify no secret strings appear in built files.
- Check API route `/api/contact` validates method and body, returns generic error on malformed payload.
- Ensure external links have `rel="noopener noreferrer"` and `target="_blank"`.
- Run `npm audit` and address any high‑severity vulnerabilities.

## Phase 10 – Fixes
- Based on the issue list, fix all **CRITICAL**, **HIGH**, and **MEDIUM** items.
- Address **LOW** items if they are safe and do not alter design.
- Re‑run the relevant checks after each fix.

## Phase 11 – Final Verification
- Repeat all automated checks and manual walkthroughs.
- Generate final Lighthouse report.
- Produce a QA summary artifact (`qa_report.md`) with:
  - Overall status (PASS/FAIL).
  - List of issues by severity and fix status.
  - Lighthouse scores.
  - Screenshots of any remaining minor issues.
  - Confirmation that the site is production‑ready.

---

**Open Questions**: None – all required data and components are present.

**Verification Plan**: Automated scripts + manual visual inspection as described.

**Next Steps**: Execute Phase 1 – run lint, type‑check, build, start server, and begin functional automation.
