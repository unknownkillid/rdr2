<!-- .github/copilot-instructions.md - guidance for AI coding agents working on this repo -->
# Copilot instructions for rdr2 (static site)

This is a minimal static site. Key files:

- `index.html` — single-page HTML referencing CSS and JS.
- `script/script.js` — main JavaScript entry (currently empty).
- `styles/style.css` — main stylesheet (currently empty).

Big picture
- No backend or build system: the app is served as static files. Changes are visible by opening `index.html` in a browser or running a simple static server from the project root.
- The project follows a small, explicit separation: `styles/` for CSS, `script/` for JS, root `index.html` as the entry.

Developer workflows (how to run/preview)
- Quick preview (Python 3):

```bash
cd codes/rdr2
python -m http.server 8000
# open http://localhost:8000
```

- If using Node tooling (optional):

```bash
cd codes/rdr2
npx http-server -p 8000
```

Patterns & conventions
- Keep all JS in `script/` and CSS in `styles/` (do not inline large blocks into `index.html`).
- `index.html` currently includes the script with a plain `<script src="script/script.js"></script>` tag; if you migrate to ES modules, change to `type="module"` and use relative imports inside `script/`.
- Keep DOM mutations in `script/script.js` and initialize after DOM is ready; since the script is loaded at the end of `body`, simple top-level code is acceptable.

Integration points & dependencies
- There are no external dependencies declared in the repo. If you add Node packages, add a `package.json` at `codes/rdr2/` and document install steps in the project README.

Editing guidance for AI agents
- When modifying layout or adding components, update `index.html` and keep styles in `styles/style.css` or new files under `styles/`.
- For multi-file JS, prefer ES modules and place them under `script/`. Example: change the script tag to `<script type="module" src="script/script.js"></script>` and use `import` within files.
- Run the simple server above to validate changes in a browser; do not assume a build step unless a `package.json` or bundler configs appear.

Pull request notes
- Small, focused PRs are preferred. Each PR should include what was changed and how to run the site locally using the commands above.

If any of this is incorrect or you want more detail (tests, CI, or package management), tell me what you'd like added.
