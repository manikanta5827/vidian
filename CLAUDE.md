@AGENTS.md

# Project Rules

## UI Components
- Use **shadcn/ui components exclusively** for all UI elements (buttons, inputs, dialogs, cards, etc.)
- Never write custom component primitives that duplicate shadcn functionality
- Add new shadcn components via `npx shadcn@latest add <component>`

## Styling
- Use **Tailwind CSS only** for all styling — no inline styles, no CSS modules, no styled-components
- Apply Tailwind utility classes directly on elements and shadcn components via `className`
- For custom design tokens, extend `tailwind.config` — do not write raw CSS except in `globals.css` for CSS variables shadcn requires
