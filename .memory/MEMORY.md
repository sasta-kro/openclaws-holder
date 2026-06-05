# MEMORY.md

## Homepage Refactor Priorities

- Split the homepage by section components and keep static copy in dedicated content files.
- Keep global CSS limited to theme tokens, base rules, and browser-wide styling.
- Prefer plain CSS with clear file responsibilities over mixed styling systems.
- Prefer a locale content registry plus a small provider layer for multilingual work, instead of embedding language conditionals directly inside section components.

## Git Preferences

- Major milestone commits can use the `major:` prefix at the start of the commit message.

## Localization Notes

- Burmese homepage localization is provisional and may need translation refinement later.

## README Direction

- Keep the README readable for both technical and non-technical audiences.
- Use the first sections to explain what the project is, why it exists, and what makes it impressive.
- Keep fast-changing technical detail in later sections.
- Avoid over-documenting implementation details that will drift quickly as the project evolves.

## OpenClaws Product Direction

- OpenClaws is a fictional premium portfolio product concept.
- The product is a precision claw that keeps a Mac slightly open so background agents can keep running.
- The site should look highly real and polished, similar to a premium product launch page.
- The concept should remain clearly fictional in fine print or footnotes.
- The tone should be mostly serious, with occasional dry humor placed inside the serious presentation.
- The experience should include premium product-site motion, scroll movement, product customization, and a checkout-style call to action.
- Product customization can include options such as length and finger count, similar to premium hardware configuration flows.
- Future payment work may connect to a small backend for Stripe or a similar provider, but payment-provider docs must be verified before implementation.
