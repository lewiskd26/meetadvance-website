# MeetAdvance Website v2.4

Static GitHub Pages website for `meetadvance.app`.

## v2.4 — TAAF Pilot & Product Proof Release

This release preserves the existing MeetAdvance visual identity while shifting the public website toward current product proof and controlled-pilot conversion.

### Primary updates
- Homepage positioning centered on **what happens after official results**.
- Real mobile product screenshots added for Dashboard, Action Center, Advancement, Invoice, PDF sharing, Awards, and secure award pickup QR.
- New six-stage workflow: **Official Results → Action Required → Advancement → Payment Reconciliation → Invoice → Awards**.
- New `pilot.html` page with a controlled regional pilot model and structured email inquiry form.
- Organizations page reframed from “select a meet” to **select a workflow**.
- Current pilot capabilities clearly separated from planned/expanded capabilities.
- “Payments” terminology tightened to **payment reconciliation** where appropriate.
- TAAF / AAU / championship examples labeled as illustrative; no endorsement or deployment is implied.
- Awards page updated to distinguish current secure pickup/readiness capability from planned inventory/volunteer intelligence.
- Added canonical/social metadata, Open Graph image, Twitter card metadata, `robots.txt`, `sitemap.xml`, and `404.html`.
- Navigation and menu keyboard behavior improved.

## Static pilot inquiry form

GitHub Pages has no server-side form handler. The form on `pilot.html` prepares a structured email addressed to `info@meetadvance.app` using the visitor's local email application. No inquiry data is stored by the website itself.

## Deployment

Push the repository contents to the GitHub Pages branch configured for `meetadvance.app`. Keep `CNAME` at the repository root.

## Next Major Update — Athlete Eligibility & Identity Verification

MeetAdvance's next major roadmap item is a three-phase eligibility-integrity capability:

- **MA-EV1 — Automated Age Eligibility + DOB Locking:** rule-based age-division validation, verified DOB locking, and controlled correction/audit history.
- **MA-EV2 — Independent Verification + Athlete QR/Photo Credential:** independent verifier roles, athlete identity photo, verification status, and secure QR credential.
- **MA-EV3 — Meet-Day Verification + Challenges + Regional Integrity Dashboard:** credential checks, eligibility challenge workflow, exception review, and organization-level compliance visibility.

The public website identifies this as a **planned roadmap capability**, not a feature currently available in the pilot build.
