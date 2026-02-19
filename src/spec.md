# Specification

## Summary
**Goal:** Build a responsive marketing website for “Bunty Babli Cleaning Service” with core informational sections and a working contact/inquiry flow backed by Motoko storage.

**Planned changes:**
- Create a single-page, responsive homepage with sections: Hero, Services, Pricing (or “Get a Quote”), About, Service Area/Locations (no maps), Testimonials, FAQ, and Contact.
- Add top navigation with anchor links to each section.
- Implement a contact/inquiry form with required client-side validation, inline errors, and clear success/error states.
- Add backend APIs in a single Motoko actor to create/store inquiries with timestamps and list inquiries (most recent first), persisting across upgrades via stable storage.
- Wire the frontend form to the backend using React Query mutation state, loading/error handling, and the existing actor access pattern (without modifying immutable hook entrypoints or UI component files).
- Apply a consistent visual theme suitable for a local cleaning service, avoiding a blue/purple primary palette, with accessible typography/contrast.
- Add basic SEO metadata: page title, meta description, and Open Graph title/description.
- Include and reference generated static assets (logo, hero image, service icons) from `frontend/public/assets/generated`.

**User-visible outcome:** Visitors can browse the Bunty Babli Cleaning Service homepage on mobile/desktop, jump between sections, and submit an inquiry via a validated form with clear feedback; inquiries are stored in the backend for later review.
