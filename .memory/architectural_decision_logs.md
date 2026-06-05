# Architectural Decision Logs

This file records important technical and structural decisions for the project.

Purpose:
- preserve the reasoning behind major choices
- avoid repeating rejected refactors
- make future changes more consistent
- give later sessions context about why the codebase is shaped the way it is

Rules:
- append new entries instead of rewriting old ones
- keep entries short but specific
- include rejected alternatives when possible
- record decisions that affect architecture, maintainability, scaling, workflow, or project direction
- do not log tiny implementation details unless they change future decision-making

---

## ADR-001: Frontend-Only Product Showcase
- Status: Accepted
- Date: 2026-06-05

### Context
OpenClaws needs a premium single-page website for a fictional product concept. The first version needs product storytelling, placeholder visuals, configuration options, and a checkout-style action. No real payment processing is needed yet.

### Decision
The first implementation uses a frontend-only React and TypeScript app with plain CSS. The checkout action opens a professional unavailable-checkout modal. Product configuration stays in frontend content modules. Payment provider integration remains outside the UI until a small payment backend is added later.

### Why
This keeps the portfolio showcase polished and simple while leaving room for a future Stripe or payment-provider boundary. The UI can feel realistic without pretending that a real product or checkout exists.

### Consequences
- The page can be deployed as a static frontend.
- No secrets or payment-provider calls exist in the frontend.
- Future checkout work needs a small backend route for checkout session creation and webhook handling.
- Placeholder images can be replaced with final product photos without changing the page structure.

### Rejected Alternatives
- Backend in the first version: Rejected because no real payment or database need exists yet.
- Mock payment form inside the UI: Rejected because it may make the fictional product status less clear.
- Complex generated placeholder product art: Rejected because simple crossed rectangles make temporary assets clearer.

---

## Entry Template

## ADR-00X: [Short Decision Title]
- Status: Accepted
- Date: YYYY-MM-DD

### Context
[What problem existed. What needed to be decided. Any constraints that mattered.]

### Decision
[What was chosen.]

### Why
[Why this option was chosen over the others.]

### Consequences
- [Positive impact]
- [Tradeoff or limitation]
- [Future implication if relevant]

### Rejected Alternatives
- [Alternative A]: [Why it was rejected]
- [Alternative B]: [Why it was rejected]

---
