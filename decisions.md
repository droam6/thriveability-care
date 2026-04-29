# ThriveAbility Care — Decisions

- **Forest green palette** chosen over NSP/Bosland dark navy to differentiate this project and match the warmth expected of NDIS care sector. Forest = growth/trust/calm, terracotta = welcoming human accent, cream = soft non-clinical surface.
- **T6 Warm Local Business template style** as the visual base.
- **Static HTML over a framework:** low maintenance, fast load, easy hand-off to client, matches NSP pattern.
- **Formspree over n8n** for form handling on this build (single-purpose, no routing logic needed).
- **AOS 2.3.4** for scroll animations (consistent with NSP/Bosland template family).
- **10 pages mirror existing site structure 1:1** — no IA changes this round, just visual + copy upgrade.

## Round 2 — Palette swap (2026-04-29)

- **Replaced Round 1 forest/cream/terracotta with deep teal + sky blue + off-white** to match the client's existing brand identity (thriveabilitycare.com.au). Round 1 went off-brand; Option A selected — match the client's existing identity and level up the execution rather than push a new direction.
- **Variable aliasing over rename:** kept existing CSS variable names (`--forest`, `--cream`, `--terracotta`, `--charcoal`) and just swapped the hex values. `--forest` now holds deep teal `#0F3D4C`; `--terracotta` holds sky blue `#3DA8E8`. This avoided touching every component rule downstream — palette swap was a single-source change in `:root` plus targeted updates to ~15 component rules with hardcoded `rgba()` values from the old palette.
- **New tokens:** `--teal-light #1A5468` (mid-teal for secondary structural accents), `--sky-bright #5BB8EE` (CTA hover highlight), `--acknowledgement-bg rgba(247,250,252,0.06)` (footer Acknowledgement strip).
- **Card-list bullets switched to `--teal-light`** (away from the aliased terracotta=sky) so the sky-blue card icon circle stays the visual hero of the card and bullets serve as a quieter teal structural cue. Col-bullets (Why-It-Matters sections) remain sky since there is no competing sky element nearby.
- **Logo nudge toward brand without a full redesign:** lowercased the wordmark to `thriveability care` and added `EMBRACE · EXCEL · THRIVE` tagline below in DM Sans uppercase 0.625rem with 0.2em letter-spacing. Real SVG lockup deferred to a separate logo task.
- **Shadows retinted teal** (`rgba(15, 61, 76, ...)`) instead of charcoal-tinted, to read as part of the new palette family.
